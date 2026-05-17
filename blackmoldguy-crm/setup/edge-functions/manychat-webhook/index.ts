// POST  /functions/v1/manychat-webhook
// Public — wired into ManyChat's External Request step.
// Auth: Authorization: Bearer <MANYCHAT_WEBHOOK_SECRET>
import { supabaseAdmin, json, env, handleOptions } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  const auth = req.headers.get("authorization") || "";
  if (env("MANYCHAT_WEBHOOK_SECRET") && !auth.includes(env("MANYCHAT_WEBHOOK_SECRET"))) {
    return json({ error: "unauthorized" }, 401);
  }

  const body = await req.json();
  const sb = supabaseAdmin();

  // 1. Upsert lead by manychat_psid
  let leadId: string | null = null;
  if (body.psid) {
    const { data: existing } = await sb.from("leads")
      .select("id")
      .eq("manychat_psid", body.psid).maybeSingle();

    if (existing) {
      leadId = existing.id;
      await sb.from("leads").update({
        first_name: body.first_name || undefined,
        last_name:  body.last_name  || undefined,
        email:      body.email      || undefined,
        phone:      body.phone      || undefined,
        zip:        body.zip        || undefined,
      }).eq("id", leadId);
    } else {
      const { data: ins } = await sb.from("leads").insert({
        manychat_psid: body.psid,
        first_name:    body.first_name,
        last_name:     body.last_name,
        email:         body.email,
        phone:         body.phone,
        zip:           body.zip,
        source:        "manychat",
        status:        "new",
        tags:          (body.tags || "").split(",").map((t: string) => t.trim()).filter(Boolean),
        raw_payload:   body,
      }).select().single();
      leadId = ins?.id ?? null;
    }
  }

  // 2. Log both user message and AI reply
  if (body.message)  await sb.from("chat_messages").insert({ lead_id: leadId, channel: `manychat-${body.channel || "ig"}`, sender: "user", body: body.message });
  if (body.ai_reply) await sb.from("chat_messages").insert({ lead_id: leadId, channel: `manychat-${body.channel || "ig"}`, sender: "bot",  body: body.ai_reply });

  return json({ ok: true, lead_id: leadId });
});
