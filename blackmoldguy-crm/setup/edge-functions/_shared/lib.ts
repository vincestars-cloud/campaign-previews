// Shared helpers for all edge functions
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const env = (k: string) => Deno.env.get(k) ?? "";

export const supabaseAdmin = () =>
  createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false }
  });

export const cors = (origin = "*") => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
});

export const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...cors() }
  });

export const handleOptions = (req: Request) =>
  req.method === "OPTIONS" ? new Response("ok", { headers: cors() }) : null;

export async function sendEmail(opts: {
  to: string; subject: string; html: string; from?: string;
}) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: opts.from || env("EMAIL_FROM"),
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
    }),
  });
  return r.ok ? await r.json() : Promise.reject(await r.text());
}

export async function sendSms(opts: { to: string; body: string }) {
  if (!env("TELNYX_API_KEY")) return;
  return fetch("https://api.telnyx.com/v2/messages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env("TELNYX_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env("TELNYX_FROM_NUMBER"),
      to: opts.to,
      text: opts.body,
    }),
  });
}

export function renderTemplate(html: string, vars: Record<string, string>) {
  return html.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? "");
}
