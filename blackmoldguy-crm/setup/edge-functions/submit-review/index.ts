// POST  /functions/v1/submit-review
// Public — called from the customer-facing /review/ page.
// 5 stars → routes them to Google review URL.
// <4 stars → records internally + alerts Deonco.
import { supabaseAdmin, json, env, sendEmail, sendSms, renderTemplate, handleOptions } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const { job_id, stars, comment } = await req.json();
  if (!stars || stars < 1 || stars > 5) return json({ error: "stars 1-5 required" }, 400);

  const sb = supabaseAdmin();

  // Get job + lead
  let lead = null, jobRow = null;
  if (job_id) {
    const { data: j } = await sb.from("jobs").select("*").eq("id", job_id).maybeSingle();
    jobRow = j;
    if (j?.lead_id) {
      const { data: l } = await sb.from("leads").select("*").eq("id", j.lead_id).maybeSingle();
      lead = l;
    }
  }

  const routedTo = stars >= 4 ? "google" : "internal";

  await sb.from("reviews").insert({
    job_id: jobRow?.id ?? null,
    lead_id: lead?.id ?? null,
    stars,
    comment: comment || null,
    routed_to: routedTo,
    customer_email: lead?.email ?? null,
    customer_name: lead?.first_name ?? null,
  });

  if (stars >= 4) {
    // 5★ path: thank-you email pointing them to Google
    if (lead?.email) {
      const { data: tpl } = await sb.from("email_templates").select("*").eq("key", "review_5star_google").single();
      if (tpl) {
        const html = renderTemplate(tpl.body_html, {
          google_review_url: env("GOOGLE_REVIEW_URL") || "https://www.google.com/maps",
          unsubscribe_url: "#",
        });
        await sendEmail({ to: lead.email, subject: tpl.subject, html }).catch(() => {});
      }
    }
    return json({ ok: true, redirect: env("GOOGLE_REVIEW_URL") || "https://www.google.com/maps" });
  } else {
    // Sub-4 path: internal alert + soft thank-you to customer (we'll show in UI)
    const ownerEmail = env("OWNER_EMAIL");
    if (ownerEmail) {
      const { data: tpl } = await sb.from("email_templates").select("*").eq("key", "review_low_internal").single();
      if (tpl) {
        const html = renderTemplate(tpl.body_html, {
          customer_name:  lead?.first_name || "Unknown",
          customer_email: lead?.email      || "—",
          customer_phone: lead?.phone      || "—",
          stars: String(stars),
          comment: comment || "(no comment)",
          crm_url: "https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/",
          unsubscribe_url: "#",
        });
        await sendEmail({ to: ownerEmail, subject: tpl.subject, html }).catch(() => {});
      }
    }
    if (env("OWNER_PHONE")) {
      await sendSms({
        to: env("OWNER_PHONE"),
        body: `[CRM] ${stars}-star review just submitted by ${lead?.first_name || "customer"}. Call them within 24 hrs.`
      }).catch(() => {});
    }
    return json({ ok: true, redirect: null, internal: true });
  }
});
