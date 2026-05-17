# The Black Mold Guy — CRM

Single-operator CRM built for Deonco. Magic-link sign-in, kanban-style lead board, ManyChat + chat-widget conversation log, automated email sequences, 4-star review gate.

## Live URLs (after deploy)

- **Sign in:** https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/login/
- **Dashboard (after sign-in):** https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/
- **Email preview library:** https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/emails/
- **Public review page (customer-facing):** https://vincestars-cloud.github.io/campaign-previews/blackmoldguy-crm/review/?job={job_id}

## What's in this folder

```
manychat-prompt.md            # paste-into-ManyChat package
login/index.html              # magic link sign-in
index.html                    # operator dashboard
review/index.html             # customer review page (5-star gate)
emails/index.html             # email preview library
emails/<15 .html files>       # individual email previews
setup/
  schema.sql                  # run in Supabase SQL editor
  setup-guide.md              # 45-min end-to-end install
  edge-functions/
    submit-lead/              # LP form → CRM
    log-chat-message/         # LP chat widget → CRM
    manychat-webhook/         # ManyChat → CRM
    complete-job/             # CRM button → review request
    submit-review/            # review page → DB + alerts
    process-email-queue/      # cron-driven sender
```

## Stack

- Static HTML/CSS/JS dashboard (no build step)
- Supabase for auth, Postgres, edge functions, cron
- Resend for transactional email
- Telnyx for SMS

## Start here

`setup/setup-guide.md` walks Vince through everything.
