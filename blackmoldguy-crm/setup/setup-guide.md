# Black Mold Guy CRM — Setup Guide (Vince)

End-to-end setup is **45 minutes** if you've used Supabase before, **90 minutes** the first time.

---

## What you're setting up

```
┌────────────────────────────────────────────────────────────────┐
│  Landing Page (blackmoldguy/index.html)                        │
│   ├─ Quote form  ──POST──►  /functions/v1/submit-lead          │
│   ├─ Chat widget ──POST──►  /functions/v1/log-chat-message     │
│   └─ Footer link ──────►   /blackmoldguy-crm/login/            │
│                                                                 │
│  ManyChat (IG/FB/SMS)                                          │
│   └─ External Request ─►  /functions/v1/manychat-webhook       │
│                                                                 │
│  Supabase                                                      │
│   ├─ Auth (magic link)                                         │
│   ├─ Postgres (schema.sql)                                     │
│   └─ Edge functions:                                           │
│       submit-lead, manychat-webhook, log-chat-message,         │
│       complete-job, submit-review, process-email-queue         │
│                                                                 │
│  Resend  ─►  outbound email                                    │
│  Telnyx  ─►  outbound SMS  (already credentialed)              │
└────────────────────────────────────────────────────────────────┘
```

---

## Step 1 — Supabase project (10 min)

1. https://supabase.com → **New project** → name: `blackmoldguy-crm`. Pick **us-east-1**.
2. After provisioning, copy these into a temp note — you'll paste them later:
   - `Project URL` (https://xxxxx.supabase.co)
   - `anon public key`
   - `service_role key` (KEEP SECRET)
3. Open **SQL Editor → New query → paste contents of `setup/schema.sql` → Run**.
4. **Edit the operator emails** at the bottom of schema.sql before running. Only those emails can sign into the CRM.

---

## Step 2 — Auth: magic link only (3 min)

1. **Authentication → Providers → Email** → toggle **Enable Email provider**.
2. Toggle **Confirm email** OFF (we want magic links to log them in immediately, not "click to confirm then log in").
3. **Authentication → URL Configuration**:
   - Site URL: `https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/`
   - Add redirect URL: `https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/`
   - Add redirect URL: `https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/login/`

---

## Step 3 — Resend account for outbound email (5 min)

1. https://resend.com → new account (or use existing).
2. Verify the sending domain. Use `theblackmoldguy.com` or a subdomain like `mail.theblackmoldguy.com`.
3. Copy the API key.
4. In Supabase → **Project Settings → Edge Functions → Secrets**, add:
   - `RESEND_API_KEY` = `re_...`
   - `EMAIL_FROM` = `Deonco <deonco@theblackmoldguy.com>`
   - `OWNER_EMAIL` = `deonco@theblackmoldguy.com`
   - `OWNER_PHONE` = `+13058490242`
   - `TELNYX_API_KEY` = (from `~/Documents/Obsidian Vault/Claude Memory/reference_overtime_leads_api.md`)
   - `TELNYX_FROM_NUMBER` = `+1XXXXXXXXXX` (the Telnyx number assigned to BMG)
   - `GOOGLE_REVIEW_URL` = `https://g.page/r/THE_BMG_PLACE_ID/review`  (get from Deonco's Google Business)
   - `MANYCHAT_WEBHOOK_SECRET` = a random string you generate
   - `LANDING_FORM_SECRET` = a random string you generate

---

## Step 4 — Deploy edge functions (10 min)

Install Supabase CLI if you don't have it:
```bash
brew install supabase/tap/supabase
supabase login
```

From the project root:
```bash
cd /tmp/campaign-previews/blackmoldguy-crm/setup/edge-functions
supabase link --project-ref <YOUR-PROJECT-REF>

# Deploy each:
supabase functions deploy submit-lead          --no-verify-jwt
supabase functions deploy log-chat-message     --no-verify-jwt
supabase functions deploy manychat-webhook     --no-verify-jwt
supabase functions deploy submit-review        --no-verify-jwt
supabase functions deploy complete-job
supabase functions deploy process-email-queue
```

The first four are public (form opt-ins, chat logs, public review submissions, ManyChat webhook) and use shared-secret auth. The last two require an authed operator session or cron service-role.

---

## Step 5 — Enable the cron job (2 min)

After functions are deployed, open SQL Editor and run:
```sql
select cron.schedule('process_email_queue', '*/15 * * * *', $$
  select net.http_post(
    url := 'https://<YOUR-PROJECT>.functions.supabase.co/process-email-queue',
    headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true))
  );
$$);
```

Then set:
```sql
alter database postgres set app.settings.service_role_key = '<YOUR-SERVICE-ROLE-KEY>';
```

---

## Step 6 — Configure the front-end (5 min)

Open `blackmoldguy-crm/login/index.html`, `index.html`, and `review/index.html`. Find the line:
```js
const SUPABASE_URL  = "REPLACE_WITH_YOUR_SUPABASE_URL";
const SUPABASE_ANON = "REPLACE_WITH_YOUR_ANON_KEY";
```
Paste the project URL and anon key from Step 1.

Same for `blackmoldguy/index.html` — find `SUBMIT_LEAD_URL` placeholder and replace.

---

## Step 7 — Commit + push (5 min)

```bash
cd /tmp/campaign-previews
git add blackmoldguy-crm blackmoldguy/index.html
git commit -m "ship CRM, email automations, review flow, ManyChat package for Black Mold Guy"
git push origin main
```

GitHub Pages will redeploy in ~60 seconds. CRM is live at:
- Login: `https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/login/`
- Dashboard (after login): `https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/`

---

## Step 8 — Hand off to Deonco (10 min screen-share)

Show him:
1. Open the email Vince forwards → click magic link → he's in.
2. **Leads tab** (default view) — every new lead lands in **New** column.
3. Drag (or status-dropdown) a lead from **New → Contacted → Scheduled → Quoted → Won/Lost/Follow-up**.
4. Click any lead → side panel opens → he can add notes, log a call, see every ManyChat message.
5. After a job, click the **green Mark Complete** button → automatic review request fires.
6. **Conversations tab** → see what people are asking ManyChat / the chat widget.
7. **Emails tab** → see what auto-emails are scheduled / sent.
8. **Reviews tab** → only see <4-star ones (need follow-up); 5-star ones auto-route to Google.

Tell him: *"There is nothing technical for you to do. Drag leads. That's it."*

---

## Step 9 — ManyChat (after Deonco connects his IG/FB)

Open `manychat-prompt.md` (next to this file). Walk Deonco through pasting the system prompt into the AI Step, adding quick reply buttons, and wiring the webhook. 30 minutes max.

---

## Maintenance

- **Add/edit email templates**: Supabase → Table Editor → `email_templates`. The HTML is editable directly. Re-saving takes effect on the next queued send.
- **Add a new email sequence**: insert a row in `sequences`. Set `trigger` to one of: `new_lead`, `status:contacted`, `status:scheduled`, `status:won`, `status:lost`, `status:follow-up`, `job_completed`, `reactivation_manual`.
- **Re-trigger reactivation for a single lead**: from CRM → Leads → click lead → "Send reactivation sequence" button.
