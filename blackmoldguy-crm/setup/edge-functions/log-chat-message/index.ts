// POST  /functions/v1/log-chat-message
// Public — called from the LP chat widget every user + bot turn.
// Auth: shared secret in `x-bmg-secret` header.
import { supabaseAdmin, json, env, handleOptions } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  const opt = handleOptions(req); if (opt) return opt;
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const secret = req.headers.get("x-bmg-secret");
  if (secret && env("LANDING_FORM_SECRET") && secret !== env("LANDING_FORM_SECRET")) {
    return json({ error: "unauthorized" }, 401);
  }

  const { sender, body, channel = "web-widget", session_id, lead_id } = await req.json();
  const sb = supabaseAdmin();

  await sb.from("chat_messages").insert({
    lead_id: lead_id || null,
    channel,
    sender,
    body,
    meta: { session_id },
  });
  return json({ ok: true });
});
