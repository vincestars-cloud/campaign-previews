// POST  /functions/v1/complete-job
// Authed — called from the CRM "Mark Complete" button.
// Marks job complete + sends review request email + SMS.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { supabaseAdmin, json, env, sendEmail, sendSms, renderTemplate, handleOptions } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  // Verify the caller's JWT is an operator
  const auth = req.headers.get("Authorization") || "";
  const userClient = createClient(env("SUPABASE_URL"), env("SUPABASE_ANON_KEY"), {
    global: { headers: { Authorization: auth } },
  });
  const { data: user } = await userClient.auth.getUser();
  if (!user?.user?.email) return json({ error: "unauthorized" }, 401);

  const sb = supabaseAdmin();
  const { data: op } = await sb.from("operators").select("id").eq("email", user.user.email).maybeSingle();
  if (!op) return json({ error: "not an operator" }, 403);

  const { lead_id, job_id, service_type = "remediation", amount_cents } = await req.json();
  if (!lead_id) return json({ error: "lead_id required" }, 400);

  // Create / complete the job
  let jobRow;
  if (job_id) {
    const { data } = await sb.from("jobs").update({ completed_at: new Date().toISOString(), amount_cents })
      .eq("id", job_id).select().single();
    jobRow = data;
  } else {
    const { data } = await sb.from("jobs").insert({
      lead_id, service_type, amount_cents,
      completed_at: new Date().toISOString(),
    }).select().single();
    jobRow = data;
  }

  // Get lead
  const { data: lead } = await sb.from("leads").select("*").eq("id", lead_id).single();

  // Build review URL
  const reviewBase = "https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/review/";
  const reviewUrl = `${reviewBase}?job=${jobRow.id}`;

  // Send review request email
  if (lead?.email) {
    const { data: tpl } = await sb.from("email_templates").select("*").eq("key", "review_request").single();
    if (tpl) {
      const html = renderTemplate(tpl.body_html, { review_url: reviewUrl, unsubscribe_url: "#" });
      await sendEmail({ to: lead.email, subject: tpl.subject, html }).catch(() => {});
    }
  }

  // Send review request SMS
  if (lead?.phone && lead.consent_sms !== false) {
    await sendSms({
      to: lead.phone,
      body: `Hi ${lead.first_name || ""} — Deonco here. Quick favor — would you rate my service in 60 sec? ${reviewUrl}`,
    }).catch(() => {});
  }

  // Update lead status to won + log event
  await sb.from("leads").update({ status: "won" }).eq("id", lead_id);
  await sb.from("lead_events").insert({ lead_id, event_type: "job_completed", data: { job_id: jobRow.id, review_url: reviewUrl } });
  await sb.from("jobs").update({ review_request_sent_at: new Date().toISOString() }).eq("id", jobRow.id);

  return json({ ok: true, job_id: jobRow.id, review_url: reviewUrl });
});
