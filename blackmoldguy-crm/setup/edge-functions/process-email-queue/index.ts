// POST  /functions/v1/process-email-queue
// Cron — runs every 15 min via pg_cron. Reads email_queue rows whose
// scheduled_for <= now() AND status = 'queued', sends them, marks status.
import { supabaseAdmin, json, env, sendEmail, renderTemplate, handleOptions } from "../_shared/lib.ts";
import { TEMPLATES, TemplateKey } from "../_shared/email-bodies.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;

  const sb = supabaseAdmin();

  const { data: due } = await sb.from("email_queue")
    .select("*")
    .eq("status", "queued")
    .lte("scheduled_for", new Date().toISOString())
    .limit(50);

  if (!due?.length) return json({ ok: true, sent: 0 });

  let sent = 0;
  for (const row of due) {
    try {
      // Look up the lead
      const { data: lead } = await sb.from("leads").select("*").eq("id", row.lead_id).single();
      if (!lead?.email || lead.consent_email === false) {
        await sb.from("email_queue").update({ status: "skipped", sent_at: new Date().toISOString() }).eq("id", row.id);
        continue;
      }

      // Prefer the typescript template (always fresh) over DB body fallback
      const tpl = TEMPLATES[row.template_key as TemplateKey];
      let subject = "", html = "";
      if (tpl) {
        subject = tpl.subject;
        html = tpl.html(lead);
      } else {
        const { data: dbTpl } = await sb.from("email_templates").select("*").eq("key", row.template_key).single();
        if (!dbTpl) throw new Error("no template");
        subject = dbTpl.subject;
        html = renderTemplate(dbTpl.body_html, lead);
      }

      await sendEmail({ to: lead.email, subject, html });

      await sb.from("email_queue").update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", row.id);
      await sb.from("lead_events").insert({
        lead_id: lead.id,
        event_type: "email_sent",
        data: { template_key: row.template_key, subject },
      });
      sent++;
    } catch (e) {
      await sb.from("email_queue").update({ status: "failed", error: String(e) }).eq("id", row.id);
    }
  }

  return json({ ok: true, sent });
});
