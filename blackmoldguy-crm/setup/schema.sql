-- =====================================================================
-- The Black Mold Guy — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New query → Paste → Run
-- =====================================================================

-- 0. extensions
create extension if not exists "pg_cron";
create extension if not exists "pgcrypto";

-- =====================================================================
-- 1. LEADS  (every form/manychat/chat-widget opt-in lands here)
-- =====================================================================
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  first_name    text,
  last_name     text,
  email         text,
  phone         text,
  zip           text,
  city          text,
  source        text not null default 'unknown',          -- landing-form | manychat | chat-widget | phone | referral
  service       text,                                     -- inspection | remediation | testing | pre-purchase | hvac | prevention
  severity      text,                                     -- low | medium | high | urgent
  notes         text,
  status        text not null default 'new',              -- new | contacted | scheduled | quoted | won | lost | follow-up
  last_contacted_at timestamptz,
  consent_sms   boolean default false,
  consent_email boolean default true,
  tags          text[] default '{}',
  manychat_psid text unique,
  raw_payload   jsonb,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists leads_created_idx on public.leads(created_at desc);
create index if not exists leads_email_idx on public.leads(email);

-- =====================================================================
-- 2. LEAD EVENTS  (status changes, calls, emails sent, internal notes)
-- =====================================================================
create table if not exists public.lead_events (
  id          bigserial primary key,
  lead_id     uuid not null references public.leads(id) on delete cascade,
  event_type  text not null,                              -- status_change | note | call_logged | email_sent | sms_sent | job_scheduled | job_completed | review_requested
  data        jsonb default '{}',
  created_by  uuid,
  created_at  timestamptz default now()
);
create index if not exists lead_events_lead_idx on public.lead_events(lead_id, created_at desc);

-- =====================================================================
-- 3. CHAT MESSAGES  (logs LP chat widget + ManyChat DMs)
-- =====================================================================
create table if not exists public.chat_messages (
  id          bigserial primary key,
  lead_id     uuid references public.leads(id) on delete set null,
  channel     text not null,                              -- web-widget | manychat-ig | manychat-fb | manychat-sms
  sender      text not null,                              -- user | bot | deonco
  body        text,
  meta        jsonb default '{}',
  created_at  timestamptz default now()
);
create index if not exists chat_messages_lead_idx on public.chat_messages(lead_id, created_at desc);
create index if not exists chat_messages_channel_idx on public.chat_messages(channel, created_at desc);

-- =====================================================================
-- 4. JOBS  (an inspection or remediation that was scheduled / completed)
-- =====================================================================
create table if not exists public.jobs (
  id            uuid primary key default gen_random_uuid(),
  lead_id       uuid not null references public.leads(id) on delete cascade,
  service_type  text not null,                            -- inspection | remediation | hvac | prevention
  scheduled_at  timestamptz,
  completed_at  timestamptz,
  amount_cents  integer,
  notes         text,
  review_request_sent_at timestamptz,
  created_at    timestamptz default now()
);
create index if not exists jobs_lead_idx on public.jobs(lead_id);

-- =====================================================================
-- 5. REVIEWS  (5★ → Google, <4 → internal)
-- =====================================================================
create table if not exists public.reviews (
  id          uuid primary key default gen_random_uuid(),
  job_id      uuid references public.jobs(id) on delete set null,
  lead_id     uuid references public.leads(id) on delete set null,
  stars       smallint not null check (stars between 1 and 5),
  comment     text,
  routed_to   text,                                       -- google | internal
  customer_email text,
  customer_name  text,
  created_at  timestamptz default now()
);
create index if not exists reviews_stars_idx on public.reviews(stars);

-- =====================================================================
-- 6. EMAIL TEMPLATES + QUEUE  (sequences + transactional sends)
-- =====================================================================
create table if not exists public.email_templates (
  key         text primary key,
  subject     text not null,
  body_html   text not null,
  body_text   text,
  description text,
  active      boolean default true,
  updated_at  timestamptz default now()
);

create table if not exists public.email_queue (
  id            bigserial primary key,
  lead_id       uuid not null references public.leads(id) on delete cascade,
  template_key  text not null references public.email_templates(key),
  scheduled_for timestamptz not null,
  sent_at       timestamptz,
  status        text default 'queued',                    -- queued | sent | failed | skipped
  error         text,
  created_at    timestamptz default now()
);
create index if not exists email_queue_due_idx on public.email_queue(status, scheduled_for);

-- =====================================================================
-- 7. SEQUENCES  (which templates run, on what trigger, on what delay)
-- =====================================================================
create table if not exists public.sequences (
  key           text primary key,
  description   text,
  trigger       text not null,                            -- new_lead | status_change | job_completed | no_sale | reactivation_manual
  steps         jsonb not null,                           -- [{ template_key, delay_hours }]
  active        boolean default true
);

-- =====================================================================
-- 8. USERS / OPERATOR ALLOWLIST
-- =====================================================================
-- Supabase Auth handles users. We add an allowlist so only Deonco (and Vince) can sign in.
create table if not exists public.operators (
  id       uuid primary key default gen_random_uuid(),
  email    text unique not null,
  name     text,
  role     text default 'owner',                          -- owner | admin
  created_at timestamptz default now()
);

-- =====================================================================
-- 9. RLS  (lock everything down except via authed dashboard)
-- =====================================================================
alter table public.leads          enable row level security;
alter table public.lead_events    enable row level security;
alter table public.chat_messages  enable row level security;
alter table public.jobs           enable row level security;
alter table public.reviews        enable row level security;
alter table public.email_templates enable row level security;
alter table public.email_queue    enable row level security;
alter table public.sequences      enable row level security;
alter table public.operators      enable row level security;

-- Operator can do anything if their auth email is in operators
create policy "operators_full_access_leads" on public.leads
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_events" on public.lead_events
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_chat" on public.chat_messages
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_jobs" on public.jobs
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_reviews" on public.reviews
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_templates" on public.email_templates
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_queue" on public.email_queue
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

create policy "operators_full_access_seq" on public.sequences
  for all using (
    exists (select 1 from public.operators o where o.email = auth.email())
  );

-- Operators table: only authenticated operators can see it
create policy "operators_self_read" on public.operators
  for select using (auth.email() = email);

-- =====================================================================
-- 10. trigger to keep updated_at fresh
-- =====================================================================
create or replace function public.touch_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end; $$ language plpgsql;

drop trigger if exists trg_leads_touch on public.leads;
create trigger trg_leads_touch before update on public.leads
  for each row execute function public.touch_updated_at();

-- =====================================================================
-- 11. trigger: on status change → log event + enqueue sequence
-- =====================================================================
create or replace function public.on_lead_status_change() returns trigger as $$
declare
  seq record;
  step jsonb;
begin
  if (TG_OP = 'INSERT') or (old.status is distinct from new.status) then
    insert into public.lead_events(lead_id, event_type, data)
    values (new.id, 'status_change', jsonb_build_object('from', old.status, 'to', new.status));

    -- match sequences whose trigger key equals: 'status:'||new.status  or  'new_lead' on insert
    for seq in
      select * from public.sequences
       where active = true
         and (
           trigger = 'status:' || new.status
           or (TG_OP = 'INSERT' and trigger = 'new_lead')
         )
    loop
      for step in select * from jsonb_array_elements(seq.steps)
      loop
        insert into public.email_queue(lead_id, template_key, scheduled_for)
        values (
          new.id,
          step->>'template_key',
          now() + ((step->>'delay_hours')::int || ' hours')::interval
        );
      end loop;
    end loop;
  end if;
  return new;
end; $$ language plpgsql;

drop trigger if exists trg_leads_status on public.leads;
create trigger trg_leads_status after insert or update on public.leads
  for each row execute function public.on_lead_status_change();

-- =====================================================================
-- 12. DASHBOARD VIEW  (one query the CRM uses to render the board)
-- =====================================================================
create or replace view public.v_leads_dashboard as
select
  l.*,
  (select count(*) from public.chat_messages c where c.lead_id = l.id) as message_count,
  (select max(created_at) from public.chat_messages c where c.lead_id = l.id) as last_message_at,
  (select count(*) from public.jobs j where j.lead_id = l.id) as job_count
from public.leads l;

-- =====================================================================
-- 13. SEED  email_templates  (full content lives in the edge function or
--      can be edited by Deonco in the CRM later. Subjects + descriptions
--      are here so the queue can reference them immediately.)
-- =====================================================================
insert into public.email_templates (key, subject, description, body_html, body_text) values

('welcome',
 'Got it — your assessment request is in (Deonco)',
 'Sent immediately after landing-form / ManyChat opt-in',
 '<see edge-function/email-bodies.ts>', ''),

('nosale_followup_1',
 'Why bleach makes mold worse (yes, really)',
 'No-sale follow-up #1 — 24 hrs after consult with no booking',
 '<see edge-function/email-bodies.ts>', ''),

('nosale_followup_2',
 'What people forget to ask mold companies',
 'No-sale follow-up #2 — 72 hrs after consult',
 '<see edge-function/email-bodies.ts>', ''),

('nosale_followup_3',
 'What is actually in the solutions we use',
 'No-sale follow-up #3 — 5 days after consult',
 '<see edge-function/email-bodies.ts>', ''),

('nosale_followup_4',
 'How one family stopped getting sick (case study)',
 'No-sale follow-up #4 — 8 days after consult',
 '<see edge-function/email-bodies.ts>', ''),

('nosale_followup_5',
 'Why I started doing this',
 'No-sale follow-up #5 — 12 days after consult',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_owe_you',
 'I owe you a free re-check (my mistake)',
 'Reactivation #1 — "We messed up" frame (Hormozi/Cory McCarthy)',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_allergies',
 'Quick question — are your allergies worse this year?',
 'Reactivation #2 — Pollen / mildew angle',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_savings',
 'A few hundred bucks now or $25K later',
 'Reactivation #3 — Cost-of-delay savings angle',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_environment',
 'The one room in your house that holds mold longest',
 'Reactivation #4 — Environment / hidden mold angle',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_case_study',
 'After 6 years, she finally got her answer',
 'Reactivation #5 — Case study angle',
 '<see edge-function/email-bodies.ts>', ''),

('reactivation_come_back',
 'Still on the fence? Read this when you have 2 minutes.',
 'Reactivation #6 — Soft "come back" close',
 '<see edge-function/email-bodies.ts>', ''),

('review_request',
 'A quick favor (60 seconds)',
 'Sent automatically when Deonco marks a job complete',
 '<see edge-function/email-bodies.ts>', ''),

('review_5star_google',
 'Thank you — would you share this on Google?',
 '5-star review path — directs to Google review URL',
 '<see edge-function/email-bodies.ts>', ''),

('review_low_internal',
 'We need to make this right',
 'Sub-4-star path — internal notification to Deonco',
 '<see edge-function/email-bodies.ts>', '')
on conflict (key) do nothing;

-- =====================================================================
-- 14. SEED  sequences
-- =====================================================================
insert into public.sequences (key, description, trigger, steps) values

('new_lead_welcome',
 'Welcome email immediately on opt-in',
 'new_lead',
 '[{"template_key": "welcome", "delay_hours": 0}]'),

('no_sale_followup',
 'Fires when Deonco marks a lead status = follow-up after a consult',
 'status:follow-up',
 '[
   {"template_key": "nosale_followup_1", "delay_hours": 24},
   {"template_key": "nosale_followup_2", "delay_hours": 72},
   {"template_key": "nosale_followup_3", "delay_hours": 120},
   {"template_key": "nosale_followup_4", "delay_hours": 192},
   {"template_key": "nosale_followup_5", "delay_hours": 288}
 ]'),

('reactivation_hormozi',
 'Manual trigger — past clients / cold leads',
 'reactivation_manual',
 '[
   {"template_key": "reactivation_owe_you",   "delay_hours": 0},
   {"template_key": "reactivation_allergies", "delay_hours": 48},
   {"template_key": "reactivation_savings",   "delay_hours": 120},
   {"template_key": "reactivation_environment", "delay_hours": 192},
   {"template_key": "reactivation_case_study", "delay_hours": 264},
   {"template_key": "reactivation_come_back",  "delay_hours": 336}
 ]')
on conflict (key) do nothing;

-- =====================================================================
-- 15. CRON  (process email queue every 15 min)
--      Note: edge function must already be deployed (see setup-guide.md)
-- =====================================================================
-- Uncomment after the edge function is deployed and you've set
-- supabase.url + service_role in vault:
--
-- select cron.schedule('process_email_queue', '*/15 * * * *', $$
--   select net.http_post(
--     url := 'https://<YOUR-PROJECT>.functions.supabase.co/process-email-queue',
--     headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('supabase.service_role_key'))
--   );
-- $$);

-- =====================================================================
-- 16. ADD DEONCO + VINCE TO OPERATORS  (edit these emails first!)
-- =====================================================================
insert into public.operators (email, name, role) values
  ('deonco@theblackmoldguy.com', 'Deonco', 'owner'),
  ('starsvince@gmail.com',        'Vince',  'admin')
on conflict (email) do nothing;
