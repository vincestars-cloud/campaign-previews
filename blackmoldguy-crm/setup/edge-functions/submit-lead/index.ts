// POST  /functions/v1/submit-lead
// Public — called from the landing page quote form.
// Auth: shared secret in `x-bmg-secret` header (matches LANDING_FORM_SECRET).
import { supabaseAdmin, json, env, handleOptions } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const secret = req.headers.get("x-bmg-secret");
  if (secret && env("LANDING_FORM_SECRET") && secret !== env("LANDING_FORM_SECRET")) {
    return json({ error: "unauthorized" }, 401);
  }

  const body = await req.json().catch(() => ({}));
  const sb = supabaseAdmin();

  const lead = {
    first_name: body.first_name || body.name?.split(" ")[0] || null,
    last_name:  body.last_name  || body.name?.split(" ").slice(1).join(" ") || null,
    email:      body.email || null,
    phone:      body.phone || null,
    zip:        body.zip || null,
    source:     body.source || "landing-form",
    service:    body.service || null,
    severity:   body.severity || "medium",
    notes:      body.notes || null,
    consent_sms:   !!body.consent_sms,
    consent_email: body.consent_email !== false,
    status:     "new",
    raw_payload: body,
  };

  // de-dupe by email within 5 min
  if (lead.email) {
    const { data: existing } = await sb.from("leads")
      .select("id, created_at")
      .eq("email", lead.email)
      .gt("created_at", new Date(Date.now() - 5 * 60_000).toISOString())
      .limit(1);
    if (existing && existing.length) return json({ ok: true, lead_id: existing[0].id, deduped: true });
  }

  const { data, error } = await sb.from("leads").insert(lead).select().single();
  if (error) return json({ error: error.message }, 500);

  // ping Deonco via SMS
  if (env("OWNER_PHONE")) {
    const msg = `New lead: ${data.first_name || "Unknown"} (${data.zip || "?"}) - ${data.service || "service?"} - ${data.phone || data.email || "no contact"}`;
    fetch(`${env("SUPABASE_URL")}/functions/v1/_internal-sms`, {
      method: "POST",
      headers: { Authorization: `Bearer ${env("SUPABASE_SERVICE_ROLE_KEY")}` },
      body: JSON.stringify({ to: env("OWNER_PHONE"), body: msg }),
    }).catch(() => {});
  }

  return json({ ok: true, lead_id: data.id });
});
