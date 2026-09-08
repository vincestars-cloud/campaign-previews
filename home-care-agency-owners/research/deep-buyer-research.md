# Senior-Care OPERATORS (home care → home health → hospice → assisted living / RAL → memory care → independent & senior living → adult day → placement) — Deep Buyer Research (Sabri 10-Tab + Depth Standard, expanded to the operator ladder 2026-09-08)
**Date:** 2026-09-08
**Buyer:** The owner / operator / administrator anywhere on the senior-care ladder — home care (non-medical), home health (Medicare-certified), hospice, assisted living / residential assisted living (RAL, personal care home, adult family home, RCFE), memory care, independent living / senior living / CCRC, adult day, senior placement & referral agencies, and the multi-location "medical care agency" — who needs (1) census, move-ins, admissions, occupancy or clients and (2) to hire + retain caregivers / CNAs. inLeap sells growth to them. Scope decision, Vince 2026-09-08 verbatim: *"I think the audience for the B2B needs to expand beyond just home care, but also assisted living, home health care, independent living, and other types of facility owners/operators/agencies."* NOT the family caregiver (that was the separate `home-care-industry` run).
**Researched:** 2026-09-08 · **Refresh due:** 2027-03-08 (6 months, or sooner on a market shift)

---

## D0 — Tool status (checked 2026-09-07/08)
- **Ladder expansion (09-08 afternoon)** — Reddit `.json` through the browser rate-limits at ~100 requests / 10 min (429 at 12:36); re-paced to ~1 request / 6.5 s with backoff. YouTube Data API: the brief's key is invalid, the key in `reference_research_accounts` works (free). supadata free. Indeed and Glassdoor read through the browser at human pace; both wall after ~3 fast loads. Apify $0 on every account — unused.
- **Reddit** — logged-in research browser (Own-Clerk-6667), free/unlimited via in-page `.json`. Primary VOC.
- **YouTube Data API v3** — free; 960 owner-comment records across 45 coach videos.
- **Supadata** — free; 56 coach transcripts (580K chars).
- **Tavily** — Researcher plan, ~880 credits left; forum/Quora discovery + extract.
- **Facebook** — logged in (Angela); 9 owner groups joined. Cold-feed yield thin (new-account behavior); warms over 1–2 weeks.
- **Apify** — ~$0.94 across accounts; used ~$0.62 on the initial Reddit calibration before the browser path replaced it. Competitor **ad-creative** sweep deferred to the 09-23 reset (see Backfill).
- **SerpAPI** — 0/250 (dead until Oct 1).

## D1 — Source Matrix (what was pulled)
<!-- LADDER:d1note -->
**Corpus now 7,395 documents after the 2026-09-08 operator-ladder expansion (see D1l below for what was added per vertical). The paragraph that follows describes the first home-care-only pull of 09-08 morning and is kept as the baseline.**
<!-- /LADDER:d1note -->
Corpus = **850 entries**, 565 with real engagement scores. Reddit 395 (r/RunAHomeCareAgency 116 owner core; r/nursing 101 + r/CNA 85 + r/caregivers 54 labor; r/Entrepreneur/buyingabusiness/smallbusiness industry; Go-Deeper entity spin-offs care.com / A Place for Mom / franchise). YouTube owner-comments 359. agingcare (client-side staffing symptom, focused) 49. allnurses/Quora forums 45. FB owner groups 2. Plus a **56-video coach transcript corpus** (Justin Currie / Master of Home Care, Steve "The Hurricane" / Home Care Evolution, Sagapixel, Homecare Owners Corner, Aaron Bogle, RealScottMcKenzie, Coach Michele, +14) for the expert/Previous-Solutions/vendor layer.
**Honest gaps:** r/homehealth is a dead sub (not usable). Owner *emotional* content (Tab 3, Tab 9 owner-scenes) is thin — the owner sub is tactical, not confessional. Competitor ad creatives = 09-23 Apify backfill.

---

<!-- LADDER:d1l -->
## D1l — Per-vertical pulls (the operator ladder, 2026-09-08)

Every corpus entry carries a **pull scope** (the subreddit, keyword, channel, brand or file it came from — stated per file, never inferred from the speaker) and the **verticals its text names** (word-bounded regex). Counts are documents. *Before* = the 09-08 morning corpus (home-care pulls only, 3,679 documents); *after* = this expansion (7,395 documents). Documents containing the word "occupancy": 0 → **25**.

| Vertical | Pulled (this expansion) | Docs by pull scope, before → after | Docs naming it, before → after | Gaps (honest) |
|---|---|---|---|---|
| Home care | r/RunAHomeCareAgency deepened (scheduler/intake, recruiting, census/private pay/VA/LTC, sold/exit/PE/burnout, pay-per-lead/agencies/ads); Ad Library 'home care agencies', 'caregiver applicants', 'hire more caregivers', 'recruit caregivers', 'home care leads', 'schedulers', 'scheduler'; feed advertisers by name; TrustPilot ClearCare (71) + AlayaCare (1); Indeed/Glassdoor Home Instead + BrightStar; r/cna + r/nursing brand searches | 2,494 → **2,689** | 697 → **816** | r/homehealth dead; AxisCare / WellSky / Alora have no TrustPilot page |
| Home health | r/Entrepreneur, r/smallbusiness, r/buyingabusiness 'home health agency'; r/RunAHomeCareAgency Medicare/PDGM/OASIS/skilled; r/homehealthcare + r/healthcareadmin (sup pass); YouTube 2 operator videos + 27 transcripts (referrals, sales, OASIS, Medicaid rates, franchise); Ad Library 'home health agency owners', 'home health agencies/agency', 'grow your census', 'census'; Indeed/Glassdoor Amedisys + LHC; trade press HHCN, McKnight's Home Care, WellSky/Luna referral-acceptance numbers | 136 → **440** | 294 → **421** | r/HealthcareAdministration returns 404 (the live sub is r/healthcareadmin, added in the sup pass); r/homehealth dead; 'increase census' and 'home health referrals' phrases return 0 ads |
| Hospice | r/hospice owner/administrator/census/admissions/liaison/'my hospice'/for-profit/ADC (owner-only filter in build_halo), r/Entrepreneur + r/smallbusiness + r/buyingabusiness 'hospice'; YouTube 10 operator videos (start a hospice, license, $3M hospice, sales) + 4 transcripts; Ad Library 'hospice owners/admissions/marketing/agencies/agency/providers', 'more admissions', 'hospice referrals'; Indeed/Glassdoor VITAS; Hospice News (VITAS Q1 census + admissions, 30-minute referral response, 2026 trends); r/cna + r/nursing 'VITAS' | 4 → **419** | 65 → **354** | r/hospice is families and nurses first — operator voice is the minority even after the owner filter; 'hospice growth' phrase 0 ads |
| Assisted living / RAL | r/AssistedLiving five owner/occupancy/marketing/staffing/licensing searches + r/Entrepreneur, r/smallbusiness, r/buyingabusiness, r/realestateinvesting, r/sweatystartup 'assisted living / RAL / personal care home / group home'; YouTube 16 RAL-operator videos (RAL Academy, Assisted Living Investing, 'How to start an ALF', $12K/month) + 4 transcripts; Ad Library 18 phrases (owners, operators, RAL, move-ins, booked tours, waitlist, fill your beds, empty beds/rooms, more tours, facilities, business...); Indeed/Glassdoor Sunrise; Feed: Dr. Mark Stevens, Wisdom First, Searchlift, Occupancy Partners | 98 → **1,541** | 186 → **862** | r/AssistedLiving is mostly families and line staff; owner voice comes from the general subs and YouTube; 'assisted living marketing/leads' phrases return 0 ads |
| Memory care | r/AssistedLiving 'memory care' owner/occupancy/staffing/marketing/census; r/SeniorLivingMarketing; r/Entrepreneur 'memory care' (0 posts); YouTube 6 videos + 4 transcripts; Ad Library 'memory care communities/community' (60 ads), 'memory care marketing' (0); Indeed/Glassdoor Silverado; r/cna + r/nursing 'Silverado' | 1 → **229** | 25 → **140** | the one memory-care operator-marker document in the corpus is a family member with an admin background; memory-care operators speak as assisted-living operators (same buildings) — treat memory care as a wing of AL/senior living in copy, not a separate buyer voice |
| Independent living | r/AssistedLiving 'independent living'; r/realestateinvesting 'independent living / 55+'; r/SeniorLivingMarketing (sup); YouTube 1 operator video (63 comments) + 1 transcript (91K chars); Ad Library 'independent living communities/community' (57 ads), 'independent living community marketing' (0); trade press NIC occupancy 91.3% | 0 → **146** | 24 → **99** | r/seniorliving does not exist (404) — three planned searches replaced by r/AssistedLiving + r/SeniorLivingMarketing (67 members); the IL operator voice online is the 'group home / ILF for veterans' starter, not the 55+ community operator |
| Senior living / CCRC / SNF | r/nursinghome administrator/census/occupancy/staffing/survey/marketing; r/Entrepreneur, r/smallbusiness, r/buyingabusiness 'senior living / nursing home / senior housing'; r/AssistedLiving + r/SeniorLivingMarketing sales/occupancy/ED searches (sup); YouTube 4 videos + 4 transcripts; Ad Library 'senior living communities/operators/sales/industry', 'occupancy', 'occupancy rate', 'increase occupancy' (132 ads); Indeed/Glassdoor Brookdale + Atria; Senior Housing News, McKnight's Senior Living (Brookdale 82.4% occupancy), NIC, Argentum workforce; r/cna + r/nursing 'Brookdale', 'Atria' | 0 → **449** | 111 → **426** | r/seniorliving 404; 'senior living directors/marketing/leads' phrases return 0 ads — the vendors say 'occupancy', not 'leads' |
| Adult day | r/Entrepreneur, r/smallbusiness, r/RunAHomeCareAgency, r/AssistedLiving 'adult day' + all-reddit 'adult day care owner/start/census'; YouTube 11 operator videos (Adult Day Care Academy, VA/Medicaid enrollment, NY $400M) + 4 transcripts; Ad Library 'adult day center/care center/centers' (52 ads), 'adult day center marketing' (0); Indeed SarahCare | 0 → **296** | 14 → **100** | no adult-day subreddit exists; the voice is YouTube comments under one coach's channel — a single-source risk, said so |
| Placement / referral agency | r/Entrepreneur, r/smallbusiness, r/AssistedLiving, r/SeniorLivingMarketing, r/RunAHomeCareAgency 'placement agent/agency/referral fee/A Place for Mom' + all-reddit 'senior placement business'; YouTube 8 operator videos (start a senior placement agency, 5 hard truths, day in the life) + 4 transcripts; Ad Library 'placement agency' (30), 'senior placement' (18), 'referral agency', 'placement agents', 'senior placement agency'; TrustPilot A Place for Mom + Caring.com (from the first run); Indeed/Glassdoor A Place for Mom; McKnight's (Five Star: APFM move-ins under 5%) | 163 → **278** | 83 → **141** | placement-agent owners are few and post little; 'senior care leads' and 'pay per lead senior care' phrases return 0 ads (VERVE, the pay-per-lead advertiser in the feed, was found by name only) |
| Multi-location medical | r/healthcareadmin (sup pass; r/HealthcareAdministration 404), r/Entrepreneur 'medical practice / clinic multiple locations'; YouTube 5 healthcare-marketing videos + 4 transcripts; Ad Library 'multi-location medical' (25), 'multi-location practices', 'multiple locations', 'practice owners' (94 ads, mostly dental/med-spa vendors); Feed: Lukrah ('Multi-Location Medical Care Agencies'), ureDocs/7FigureDocs | 0 → **125** | 25 → **141** | the 'medical care agency' phrase is Lukrah's own coinage — the corpus has no operator using it; the multi-location voice is dental/med-spa practice owners, adjacent to the senior-care ladder, kept but tagged |
| Cross-vertical | labor subs (r/cna, r/nursing, r/caregivers, r/HomeHealthAides) from the first run + brand searches; family boards; forums | 783 → **783** | 0 → **0** |  |

**Sources added in this expansion, each pulled once (D1 matrix):** Reddit per-vertical searches through the logged-in browser (reddit-read2.mjs, ~1 request / 6.5 s after the 429 at 12:36; 10 target files + 4 supplemental + 20 employer-brand searches on r/cna and r/nursing); YouTube Data API per-vertical operator videos as full threads with replies (73 pulled, 10 pruned by title as job-seeker / family-facing / nurse-vlog, list in yt_ladder_pruned.json); supadata transcripts of 57 operator-education videos (815K chars, creator_transcripts_ladder.json); Meta Ad Library through the logged-in browser — 23 feed advertisers by name (exact phrase) + 61 ladder phrases in three passes (ADLIB_ladder_names.json 316, ADLIB_ladder_phrases.json 1,031); Indeed + Glassdoor employer reviews of 11 operators (employer-reviews2.mjs); TrustPilot of the software vendors (tp-pull.mjs); trade press read in full through the browser (16 articles, press_articles.json) plus 18 hand-logged numbers with URLs (trade_press_ladder.json).

**What could not be pulled and why:** Apify ($0 on every account until 09-19) — not used. Facebook owner groups — the research account is 3 days old and the group feeds render empty; nothing captured, nothing posted. r/seniorliving, r/HealthcareAdministration, r/homehealth — do not exist or are dead (404), replaced where a live sub existed. Indeed star-filter pages — the bot wall closes after ~3 fast loads; the three sorted pages per brand (default / lowest / highest) were read instead, so the 2–4★ columns are thin. Glassdoor — 3 reviews per brand before the login wall (the aggregate rating and count were captured). AxisCare, WellSky, Eldermark, Axxess, CareVoyant, Home Care Pulse / Activated Insights — no TrustPilot page; yardi.com resolves to an unrelated Yardi product (dropped). Ad Library impressions numbers — the Library hides US impression counts; the impressions SORT was used and each card carries its position in that sort. Video transcription of ad creatives (faster-whisper) — not run in this pass; the card text and the feed OCR are what was classified.
<!-- /LADDER:d1l -->

## Tab 1 — Fears
### GOING UNDER / NO CLIENTS / NO CENSUS
> "I NEED HELP, I started my home care company in 2019. Last year for 5 months I saw a little profit. Because of staffing I lost most of my clients and now I find myself having a hard time rebuilding. I have no money and don't know where to go from here. I am very close to giving up. The only thing keeping in the game this is truly my passion."
> — youtube (owner) · ↑6 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugwb6rtk3xFmDTOzfKN4AaABAg

> "I have my state medicaid license, but im struggling getting my first client"
> — youtube (owner) · https://www.youtube.com/watch?v=2mnlC-4GfMk&lc=UgzK3GfEZksm6nnrjud4AaABAg

> "Thank you for your tips. My husband and I just started a home care business and it is a challenge for us to get a client. Do you do seminars too in Chicago Illinois?"
> — youtube (owner) · ↑2 · https://www.youtube.com/watch?v=J2NAECobhdQ&lc=UgyQ2grt849bzcgmXz54AaABAg

> "Currently have a provisional license and having difficulty getting the required 10 skilled clients for full licensure. Finding that a lot of places gate keep so difficult getting to talk to those key individuals"
> — youtube (owner) · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=UgzDsJakMFH5qp0m-ct4AaABAg.ADNP6pRclplAQ6aD3Dr8IH

> "I have been in business for about a year and most of my clients have come from word of month and referral agencies. I would like to expand and take my business to another level but really have no understanding on how to do so. I have tried calling nursing homes to make appointments to discuss how my agency can better assist their elderly patients but i have had no luck. Everyone has asked that i send my information instead of having any one on one meetings."
> — forum (allnurses) · https://allnurses.com/starting-a-home-care-agency-t512648

> "I have started my own home care agency in Alberta, Canada. I am looking for great ideas on how to get my first clients. I am currently doing a lot of in person visits to various places such as independent living facilities, seniors centers, pharmacies, doctors offices,etc."
> — r/RunAHomeCareAgency · ↑7 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1d6v0n4/looking_for_marketing_ideas/

### "WILL THIS EVEN WORK" — SCARED TO TAKE THE LEAP / IN OVER MY HEAD
> "congrats! I'm currently on the fence about starting, scared to take the leap. How's it going so far? You recommend it?"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=RHMqHhdkYSE&lc=UgzoEaiuKEFUdZSmSgd4AaABAg.AAVEmVPvdSkAE4ftKAZ_op

> "Looking into starting up an in home healthcare business in michigan. Looking for a consultant to help... Looking for someone to hold my hand from start to first client. Also possible useful info is I have no medical background what so ever."
> — r/RunAHomeCareAgency · ↑3 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1b3wrl8/best_consultant_in_michigan/

> "I know how overwhelming and tedious the home care licensing can be. When I was looking for help I felt like everyone was trying to poach me for money. Literally no one would help me without a price tag... It took me over a YEAR to start and submit because I literally trusted no one."
> — r/RunAHomeCareAgency · ↑11 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1cejzsp/start_your_home_care_agency/

> "I am wanting to start my own HH agency and PRN staffing agency in Iowa but am at a loss as to how and what to bill for services, where to begin the insurance nightmare and how to compensate employees."
> — forum (allnurses) · https://allnurses.com/starting-home-health-care-agency-t66461

### LICENSE / SURVEY / MEDICAID AUDIT / COMPLIANCE DREAD
> "I owned a home care business for 12 years (2005-2017)... I got burned out by Medicaid audits and CMS rate reductions every time we turned around... Once you become a Medicaid provider it's almost as if you lose control of your operations and any creative value you may want to provide for your clients."
> — youtube (former owner) · https://www.youtube.com/watch?v=0_9ML_vHct0&lc=Ugzzqf0Yi3P7qxlCqfx4AaABAg

> "What compliance document has caused you the biggest headache during a survey?"
> — fb_group (Home Health Care Agency Owners & Entrepreneurs) · https://www.facebook.com/groups/1154838852454654

> "Being Certified opens you up to surveys from the department of health (in Wisconsoin) and a lengthy list of rules and regulations."
> — forum (allnurses) · https://allnurses.com/starting-a-home-care-agency-t512648

### GETTING SCAMMED / BLEEDING MONEY ON REFERRALS
> "I recently started a home care agency and came across A Place for Mom... they explained that I would need to prepay a total of $580, which they described as covering 10 client referrals... some reviews mentioned alleged scamming practices."
> — r/seniorcarebusiness · ↑6 · https://www.reddit.com/r/seniorcarebusiness/comments/1v87yh4/a_place_for_mom_scam/

<!-- LADDER:tab1 -->
*The operator ladder (added 2026-09-08) — grouped by the vertical the speaker names (the corpus scope tag stays the pull's). The facility fear is the empty bed that does not cover the overhead, the lender who will not touch a half-empty building, and the state survey; the starter's fear is the same 'no money, no clients' as home care, now per bed.*

### OPERATOR LADDER · HOME HEALTH

> "I am opening a small home health agency in California. The state requires me to rent an office space and show the state the floor plan and lease. I need a private office that is not shared. This is per State regulations."
> — r/smallbusiness (home health agency in licensure, the Medicare survey) · ↑24 · https://www.reddit.com/r/smallbusiness/comments/otnixq/need_to_rent_a_small_office_space_ideas/

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I just opened a NPO for an RAL in Pend Oreille County bc i need the grant funding but still for a small 8 bed facility at $4g per month the operation cost put the project in the red. I'm finding getting started to be less and less motivating but love the dream of helping people."
> — youtube (RAL owner, non-profit) · How To Get $12,000 Per Month For A Room · ↑17 · https://www.youtube.com/watch?v=SQC4Pdq_1Jo&lc=Ugyg4wRofRCJuY8_NIt4AaABAg

> "I found an Assisted Living Facility in rural TX that would be considered distressed due to location and occupancy but it's 1.5hrs from a major metro area. It cash flows but, at current occupancy barely. The owners died and left it to an heir that doesn't want it. I was told make a reasonable offer and it's mine...the heir is a realtor so I can't offer 100k and say thanks. Given the many turnarounds that I have worked on, I know there is value to add with some CapEx and marketing due to the surrounding comps being trash and demographics show that the average family is actually 1.5hrs away from their family member(s) in a facility contrary to what has been thought. It has good bones and a working operation but, there is no proper marketing or sales pipeline. So the question is: How can I pitch this and to who because not a single lender wants to touch this with a 10 foot pole."
> — r/realestateinvesting (senior-housing CRE, distressed AL deal) · ↑13 · https://www.reddit.com/r/realestateinvesting/comments/1lpfxy1/need_advice_on_a_deal_that_came_across_the/
<!-- /LADDER:tab1 -->

## Tab 2 — Hopes & Dreams
### BUILD & SCALE / $ GOALS
> "Goal 1,3,5 is 100, 1M, 5M, sell."
> — r/RunAHomeCareAgency · ↑2 · https://www.reddit.com/r/RunAHomeCareAgency/comments/11w6ivb/starting_nonskilled_home_care_agency/

> "So if I want to generate 3M, expect to spend $150K on all that."
> — youtube (coach) · https://www.youtube.com/watch?v=Ek2JIN8k3Rs&lc=UgzRRQ0r0Xe0kLalzDJ4AaABAg.API60YXt0lXAUV6M5rOE8B

### FREEDOM / BE MY OWN BOSS
> "I have a full time client that I love like a mother. I have been with her for 6 years. When she leaves me to meet her husband of 70 years, I want to be prepared to move on with my own business. I have a few steps in place already. I have the name, it is incorporated, I have an EIN number and a bank account"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgxydiFP98dHHbeTbcR4AaABAg

> "This has motivated me to finally take the steps and have my own non-medical caregiving business... Now I'm ready to take my dream and make it reality."
> — youtube (owner) · ↑25 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugxv2gNMmD3fRdk9T_54AaABAg

### PURPOSE / HELP SENIORS / LEGACY
> "I am a passionate caregiver and working abroad for a long time...taking care of others grandparents and mothers while mine is taken for granted because I'm a far..now when I retire maybe its time for me to give back to my community"
> — youtube (owner) · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgyMs71cSyFWhoFpNVd4AaABAg

> "I started our agency 16 years ago and seen many agencies come and go in west mi thinking it's an easy money maker"
> — youtube (owner) · ↑19 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgxfVcsNpQwpXmUSSJd4AaABAg

<!-- LADDER:tab2 -->
*The operator ladder (added 2026-09-08) — the RAL hope is a number: $12K, $30K, $60K, $80K a month from a house, a second building, caregivers running it while the owner works from home.*

### OPERATOR LADDER · HOSPICE

> "I had no seed money As I made a dollar in my other business I spent a dollar on my hospice"
> — youtube (hospice founder) · HOW I BUILT A $3M HOSPICE WITH JUST $6K · https://www.youtube.com/watch?v=U5Rnzhloxr0&lc=UgxHuUJ11h8zh4cvOzt4AaABAg

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "My husband and I own two retirement facilities bringing in 60k a month! It’s amazing! I started this after being tired of working for the government for 7 years!…we renovate the homes, get them licensed and run the business. Next we want to flip homes to prep them for retirement homes and rent them to those that want start this amazing lucrative business. We are both in our 30s and we work from home, we have professional caregivers that run the business’s for us."
> — youtube (RAL owner) · Making $12K/Month Per Property · ↑151 · https://www.youtube.com/watch?v=TG7zIu1WaNo&lc=UgxjI1g-PgHiA-JsJkF4AaABAg

> "My husband and I own 2 adult family homes, similar to this. We make 80k a month from these two businesses. We bought two residential homes turned them into senior/mental health facilities and we have living caregivers aids there as well. We house 12 adults who are vulnerable adults/DDA. It’s a rewarding career and very lucrative. Best thing I could have done, I hated working 9-5 in corporate America."
> — youtube (adult family home owner) · The 2-Bedroom Rental That Makes $30,000 · ↑14 · https://www.youtube.com/watch?v=e_hF_qArFXI&lc=UgwlpUMEBaQL8VKEI414AaABAg

> "I’m looking to connect with someone in the Sacramento area who may be interested in partnering to open a 6-bed RCFE (Residential Care Facility for the Elderly). A little about me: I’m a Licensed Vocational Nurse since 2018 and currently own and operate three Adult Residential Facilities serving adults with developmental disabilities. I’ve been working in the care industry since 2009 and have experience with staffing, licensing, day-to-day operations, resident care, and running small residential facilities. I’m now looking to expand into the elderly-care population."
> — r/AssistedLiving (LVN, owns three adult residential facilities) · ↑6 · https://www.reddit.com/r/AssistedLiving/comments/1vwsedl/looking_to_partner_on_a_6bed_rcfe_in_sacramento_ca/

> "I literally took down all the notes and ready more than ever to get my ALF up and running. I’ve been a CNA over 10 years and in nursing school and very passionate about helping families. This just motivated me even more."
> — youtube (CNA, 10 years) · How to start an Assisted living facility · ↑132 · https://www.youtube.com/watch?v=PZJJSv9dG2A&lc=UgxjqhoC1z_c6xZNTEx4AaABAg

### OPERATOR LADDER · INDEPENDENT LIVING

> "I found myself homeless last year. I was placing housing. I’ve been in housing for a year now I would love to get back to the community and start my own business. I’m taking down notes of everything that you’re saying I need to do thank you and praying that God blesses me to help the homeless in our community."
> — youtube (formerly homeless, starting a housing business) · How To Start A Independent Living Home · ↑41 · https://www.youtube.com/watch?v=dBkyGE-oGpY&lc=UgzOQMx6Ctl5i2SLrfh4AaABAg

### OPERATOR LADDER · SENIOR LIVING / CCRC / SNF

> "I took over my first building at 23 before being licensed. Definitely volunteer or work in activities. It’s a nice entry into the interpersonal relationships with residents. I would say my relationships with my residents due to my background in activities helps so much! Then my background as a cna helps be a servant leader and build strong relationships with my front line staff. Message me if you have any questions!! The industry needs people interested in it!"
> — r/nursinghome (administrator who took a building at 23) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1ll7ik6/career_advice_for_undergrad_who_wants_to_be_a/mzzhq5p/
<!-- /LADDER:tab2 -->

## Tab 3 — Relationship Fears
*(Thin tab — the owner sub is tactical, not confessional; owner emotional/relationship content is sparse. Below is the genuine owner-voice material; more requires targeted burnout/on-call sourcing.)*
### BURNOUT / ON-CALL — THE GRIND WEARS THE OWNER DOWN
> "I owned a home care business for 12 years... I got burned out by Medicaid audits and CMS rate reductions every time we turned around... It got a little stressful to be honest."
> — youtube (12-yr owner) · https://www.youtube.com/watch?v=0_9ML_vHct0&lc=Ugzzqf0Yi3P7qxlCqfx4AaABAg

### MARRIAGE & FAMILY — THE BUSINESS PULLS IN THE SPOUSE
> "Hello, what position should I put my husband in, since I put myself as the Owner?... if he's going to help out as well..."
> — youtube (owner) · ↑2 · https://www.youtube.com/watch?v=mlTeSSWquZ0&lc=Ugw3DqBrCr1U76Di-kh4AaABAg

> "My wife is in this industry and the liability and workers comp insurance are insane. They pay their caregivers $10-$11 per hour and their margins are tight, primarily as a result of that."
> — r/Entrepreneur · ↑8 · https://www.reddit.com/r/Entrepreneur/comments/cdyk95/senior_home_health_care_startup_looking_for_some/etx4jof/

<!-- LADDER:tab3 -->
*The operator ladder (added 2026-09-08) — the facility operator's relationship fear is the quota — corporate on one side, the family at the tour on the other — and the license that is theirs when the building is understaffed.*

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I was the Sales Director at my last community and quit because I refuse to sell that kind of care to anyone. I would prefer to be able to sleep at night. 14 years in this industry. I started out as a CNA in a memory care community and worked my way up just for them to work me right out."
> — r/AssistedLiving (former Sales Director, 14 years) · ↑17 · https://www.reddit.com/r/AssistedLiving/comments/1kyorry/years_of_working_in_a_assisted_living_facility/muz02rb/

> "I have 4 levels of higher ups in corporate on the sales side - it’s one of the most pushy, competitive industries ever. Their only care is hitting quota every month, next month never matters it has to be NOW. I have metrics for how many tours, calls, emails, texts I make. We have weekly (sometimes daily if numbers are down) zoom meetings about each & every family and how to push them. ‘What happens if mom falls next week, she needs to move in now you can’t do this another day’. Doesn’t matter that I don’t know you or your situation - I have to ‘help’ you NOW."
> — r/AssistedLiving (AL sales manager, 6 months in) · ↑10 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/keleb3x/

### OPERATOR LADDER · SENIOR LIVING / CCRC / SNF

> "Meetings about meetings every day, Toxic, unprofessional, commissions, not paid on time, expected to work every weekend -no work life balance horrible culture."
> — Indeed (Brookdale, Sales Manager, Arizona) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/zero-work-life-balance?id=7a85356698bb4926

### OPERATOR LADDER · MULTI-LOCATION MEDICAL

> "Our building came under new ownership 18 months ago. So my plans of doing the training here was set aside. And seeing the chaos that we've gone through in the last year I'm having second thoughts about pursuing it. I may just advance my therapy degree and stay with therapy. Its just going to cost more and take longer but not as much crap."
> — r/healthcareadmin (therapy director, building under new ownership) · ↑1 · https://www.reddit.com/r/healthcareadmin/comments/sych6p/any_insight_on_lic_nursing_home_administrator_and/owc7tyn/
<!-- /LADDER:tab3 -->

## Tab 4 — Relationship Soundbites *(COPY TAB — how they say it to others)*
### HOW THEY ASK FOR HELP (getting clients / marketing)
> "New home care agency owner how are you generating organic leads outside of paid platforms like A Place for Mom? I'm a new home care agency owner, about a month in, and I'm looking for input from anyone who's been through this."
> — r/smallbusinessowner · ↑1 · https://www.reddit.com/r/smallbusinessowner/comments/1vbojef/home_care_agency_leads/

> "I've become way too dependent on the placement agents that have been bringing me clients. Im looking to see if anyone has tried digital marketing or run ads?"
> — r/RunAHomeCareAgency · ↑5 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1ffa065/anyone_know_how_to_digital_market_for_senior_care/

> "Since we received our state license just a few months ago, it was off and running with marketing... I'm trying to figure out different avenues to getting clients. If any ideas of just the spread of word of mouth would definitely be appreciated."
> — r/Business_Ideas · ↑3 · https://www.reddit.com/r/Business_Ideas/comments/7o58k7/need_help_getting_clients_for_at_home_care_agency/

> "We are a brand new agency looking for our first clients, why would someone like an administrator take 5-10 minutes out of their day to talk with me? They don't know me, they don't know our agency, and I'm showing up out of the blue. How do you reconcile this, and how do you begin your conversations?"
> — youtube (owner) · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=UgyyNv3xWrc5XL8T5jJ4AaABAg

> "Do you have any keys ideas on how to more effectively get referrals? I usually visit about 4-5 medical offices but only do 2-3 hospitals a week... Some ask for \"Vendor\" registration which average from $150-$300 yearly to even talk to them."
> — youtube (owner) · ↑2 · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=UgwGur-C7Gf8WemTfiN4AaABAg

> "how should a marketer balance building relationships with referral sources while not annoying them? I've been told directly from administrators and DONs that they don't like \"helicopter\" marketers."
> — youtube (owner) · ↑4 · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=Ugz0RefsrNjhDOMNRRd4AaABAg

> "How do I find placement agents that can place their patient candidates with my home care agency?"
> — r/RunAHomeCareAgency · ↑1 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1ffa065/anyone_know_how_to_digital_market_for_senior_care/oewywz4/

> "What are referral sources. How do you reach out , what is there goal what do they want or I can help them with ? How do we get paid - Medicare ? VA ?... Everything so vague"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=UgzDSTXwNzG-7C7HDKp4AaABAg

### STARTING OUT / OVERWHELMED
> "Looking for someone to hold my hand from start to first client. Also possible useful info is I have no medical background what so ever."
> — r/RunAHomeCareAgency · ↑3 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1b3wrl8/best_consultant_in_michigan/

> "sometimes having all the registrations and certifications still doesn't make it less daunting to take the next step... is it more about getting clients, managing compliance, or structuring your operations so it feels manageable?"
> — youtube (owner) · ↑2 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgwwvEiALSuVIqNfIMZ4AaABAg.AKXSyLl8x8zALbHbfOs2lD

> "starting out can feel like drinking from a fire hose at first"
> — youtube (owner) · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugz_sIPkR_JOnj24rt14AaABAg.AKk6D25QRjMALbHgEmly56

> "First I want to say you're the first influencer in this industry that actually motivates me to get this business going... you are a blessing."
> — youtube (owner) · https://www.youtube.com/watch?v=RHMqHhdkYSE&lc=Ugwphgnq6Dj6pzYUiL14AaABAg.ADFSPO64NhKAE8VHqh9iZ1

> "I currently own a nurse staffing agency and looking to scale by offering non medical home care agency i would love to speak with you"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=nWrnOC3Mx5U&lc=Ugw9CMGBHf0yy-lnRth4AaABAg

### HIRING / KEEPING CAREGIVERS
> "At what point in the licensing/startup process do you suggest new owners hire caregivers?"
> — youtube (owner) · ↑2 · https://www.youtube.com/watch?v=mlTeSSWquZ0&lc=UgwwxXWxPE5jfwUZoi14AaABAg

> "I started running ads and even though I have not gotten a single client i got a ton of caregivers and everyone in our community started to recognize us."
> — r/RunAHomeCareAgency · ↑5 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1ffa065/anyone_know_how_to_digital_market_for_senior_care/

> "Finally licensed here in Sacramento, Roseville area and hired my first two caregivers. If anyone needs help with anything at all please let me know. I feel like an expert, at least with the licensing and start up stage."
> — r/RunAHomeCareAgency · ↑10 · https://www.reddit.com/r/RunAHomeCareAgency/comments/18j3pm9/finally_licensed/

### MONEY / RATES / GETTING PAID
> "Does anyone know where to find your states going rates that they charge for a Home health CNA versus a home health aide versus a nurse?... we want to make sure we're within or below the threshold for rates."
> — r/RunAHomeCareAgency · ↑2 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1b244t7/requirements_for_home_health_rates_in_iowa/

> "How do you get paid? Are most of the clients self pay or is this type of service paid by insurance which is what I would like to target."
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgxkE-tacMvIQfQxQd54AaABAg

> "I recently started a home care agency and came across A Place for Mom... Don't fall for this scam company what they promise is not what they deliver."
> — r/seniorcarebusiness · ↑6 · https://www.reddit.com/r/seniorcarebusiness/comments/1v87yh4/a_place_for_mom_scam/

<!-- LADDER:tab4 -->
*The operator ladder (added 2026-09-08) — how they ask: fill beds, get residents, is it profitable, how do I start / license / partner, what do placement agents cost.*

### OPERATOR LADDER · HOME CARE

> "I own a non-medial homecare agency. We are in the back 6 months of our 3rd year of operation and reached 7 figures in our 2nd year for gross income. We have found high turnover rates occur at the beginning of operations. Once you’re settled with a decent book of business, you’re able to find good employees who then refer their friends. Our turnover rates are closer to 50%. We are not certified with Medicaid and we are part of a franchise. I run the business with my wife and one other administrator and we have about 40 employees working part time and full time. Feel free to ask questions."
> — r/Entrepreneur (non-medical home care owner, 7 figures in year 2) · ↑2 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/oa5rbrq/

### OPERATOR LADDER · HOME HEALTH

> "I just started as a liason for a hospice company I was working as an LVN, any tips on to build relationships with CM and SW to get more referrals"
> — youtube (new hospice liaison, LVN) · Home Health Sales · https://www.youtube.com/watch?v=znv-lGaMvTw&lc=UgzMvwxJ1dQn1ZN1p3V4AaABAg

> "I started a home health agency I’m actually almost done just waiting for the state for compliance date.. I needed Rn and Lpn to open up cases but aides to take care of clients which would be home care so I’m still confused"
> — youtube (new home health agency owner) · Home Care Agency vs Home Health · ↑2 · https://www.youtube.com/watch?v=jVkBMws_mZw&lc=UgzxPRmHJz_nxFgX5454AaABAg

> "I’m interested in opening my own home care agency. I work for an agency now and provide hourly care for an adult trach and vent dependent patient. How do I obtain reimbursement information needed to formulate my business plan and application for licensing and financing. I’m originally from NY and it’s easy there. Not so easy in Florida!! Can you help??"
> — youtube (LPN, 25 years, Florida) · How much does Medicaid pay for home health · ↑1 · https://www.youtube.com/watch?v=IctLTNEWncc&lc=Ugwd7p5pUG1Ns6bL8Nd4AaABAg

> "I got the ambition to finally start my business. Got an LLC with EIN. Now I'm interested in education and licensing. I am looking at certifiedhomecareconsulting.com. If you have information about it or can provide information for a better program please do. I have a full time job a little over twenty years. Can I start getting clients and pay for license with that money? I'm trying to make sense of what it is that I'm trying to do. I've been trying to figure it out for a little over a year now."
> — r/smallbusiness (starting a home health agency, twenty years at a job) · ↑6 · https://www.reddit.com/r/smallbusiness/comments/1hr7ffg/looking_to_start_a_home_health_agency/

> "My problem is I don't even know how to start. I know the medical part...I'm a nurse but my knowledge is in providing the hands on care not the business end. Where do I go first?"
> — r/Entrepreneur (nurse who knows the care, not the business) · ↑2 · https://www.reddit.com/r/Entrepreneur/comments/5xdu3c/steps_needed_to_start_a_home_health_business/

### OPERATOR LADDER · HOSPICE

> "We are looking for marketers for our hospice agency. In houston texas. Please contact us if you have a good one."
> — youtube (hospice owner, Houston) · How Do You Succeed In Hospice Sales · https://www.youtube.com/watch?v=CqFYDzwGsRs&lc=Ugz4cD5MdaNT3qAHczx4AaABAg

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I am planning on opening a RCFE in Riverside, California. I own a 3 bedroom home, and want to turn it into a 6 bed (2 beds per room) facility. I put together a rough budget, but would love some advice in regards to some of the expenses i might have to deal with. I would like to charge a little more than market average to provide high quality organic meals. Anticipated income Patients - $6000/month x 6 = $36,000/month Anticipated expenses Nurses - $6000/month x 4 = $24,000/month Mortgage - $2,200 Food- $2,000 insurance- ? additional expenses- ?"
> — r/AssistedLiving (would-be RCFE owner, the math) · ↑16 · https://www.reddit.com/r/AssistedLiving/comments/15gfpoq/im_planning_on_opening_a_residential_care/

> "As the title states, I’m a nurse looking to open an assisted living. This is more my husband’s idea- he’s an accountant. He thinks that this could be a fulfilling venture that we could expand one day. I’m curious if anyone here has done this or knows someone who has done this and has any opinions or advice."
> — r/Entrepreneur (nurse + accountant couple) · ↑16 · https://www.reddit.com/r/Entrepreneur/comments/14diy9l/nurse_looking_to_open_an_assisted_living/

> "I operate 2 small 6 bed residential facilities for elderly and it is not an easy business. Overhead cost is high. You need to hire the right caregivers to assist your residents with their activities of daily living. RAL is not really about the real estate aspect but rather the business that is tied to it."
> — r/realestateinvesting (operator of two 6-bed RALs) · ↑5 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/i9giu59/

> "We’re currently renovating a 6 bed, 5 bath RCFE in Paso Robles, CA. It’s ADA compliant with ramps, exterior egresses etc (no sprinklers tho). Formerly an RCFE and we’d like to connect with an Administrator on a lease or partnership to bring it back to that use. What should we be taking into consideration for each option (outside of the obvious), liability, restrictions etc. We have extensive Prop Management experience and a lease would be easy. I have no interest in getting my License but some partnership could be more lucrative. What’s the best way to connect people in this space?"
> — r/AssistedLiving (property owner seeking an administrator) · ↑2 · https://www.reddit.com/r/AssistedLiving/comments/1kofac1/rcfe/

> "Thank you for providing that 80% occupancy figure. Where can I find data like this?"
> — r/realestateinvesting (reply: the 80% occupancy figure) · ↑4 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/kjwwosr/

### OPERATOR LADDER · INDEPENDENT LIVING

> "I initially house hack small multifamily properties for my group home business, i have a turnkey triplex and now i am in the process of fha 203k loan (rehabbing) my duplex i now own and live in. My question is. 1.Would you rather have spacious 4 bed 2 baths vs small 6 bed 2 bath apartments x 2 deleting living room and dining rooms? No hoa on .7 acres i have offroad parking for either or and big back yard in NC. I am changing the floorplan and the math doesn't work with its current 3 bed 1 bath and 3 bed 2 bath setup. I do like the resale of the 4 bed 2 bath just in case, I do feel 6 bed 2 bath is gluttony. I get $750 a bedroom here and the many nonprofits love my product."
> — youtube (house-hacker, $750 a bedroom) · How To Start A Independent Living Home · https://www.youtube.com/watch?v=dBkyGE-oGpY&lc=UgyOfs8FSQQW_VxskZR4AaABAg

### OPERATOR LADDER · SENIOR LIVING / CCRC / SNF

> "I am starting a senior living referral agency -- where we help place adults in need of assisted living -- and I'm struggling with reaching my target market, which is actually the children of the seniors. The children (age 35-59) are frequently the ones who are making the care decisions for their older parents. My main goal is to get into medical rehab places, and also speak to some funeral homes (often a primary care giver of an older couple will pass away leaving the surviving spouse needing care). I am hoping to become a referral source for these places. However, does anyone have any suggestions on other ways to advertise to reach people looking for assisted living and nursing home care? I'm doing a test run of an ad on Facebook, but my bounce rate is 100%, which may have to do with my target group being fairly broad"
> — r/smallbusiness (starting a senior living referral agency) · ↑8 · https://www.reddit.com/r/smallbusiness/comments/3jmsec/help_on_how_to_reach_my_target_market/

> "I am starting an app to help caregivers, and I have been reaching out to executives and directors of senior living facilities, and I am coming up empty. I am struggling to find the direct contact information of the people I am trying to reach out to. Any sales wizards out there, I would appreciate your advice on how to start building relationships."
> — r/smallbusiness (vendor trying to reach senior living executives) · ↑1 · https://www.reddit.com/r/smallbusiness/comments/1l3l8rz/i_am_struggling_with_cold_outreach/

### OPERATOR LADDER · ADULT DAY

> "I’ve been a RN for 23 years. I’m looking to open an adult day center in St. Louis, MO. I just didn’t know how or where to start."
> — youtube (RN, 23 years, St. Louis) · How to Start an Adult Day Care Center · ↑1 · https://www.youtube.com/watch?v=L1tso27ul_0&lc=Ugx2Kmtwk3w5Yl1xoVR4AaABAg

> "I have 8 years of adult daycare experience, I was an LVN, I just passed my boards for RN...my wife has a bachelors and we are thinking on starting an Adult daycare, she can be the director and ill see the medical side of things, we can save alot of money with our degrees. 😉 also we want to bring VA clients into our daycare...I have a question, how can I buy an existing license from an owner that their daycare and license is already established? I've learned alot in how to run a daycare, but you'd be surprised owners don't talk about how to start one or how they got a hold of an existing license...guess they were scared of competition."
> — youtube (LVN→RN with 8 years of adult day experience) · How to Start an Adult Day Care Center · https://www.youtube.com/watch?v=L1tso27ul_0&lc=UgyFCwYDi65Cp02kRfN4AaABAg

> "if I open an adult day care center how do I know how much to charge if it’s private pay? And how much on average does it cost to start up? I’m in San Diego."
> — youtube (San Diego) · What Type of Adult Day Center Should you Open? · https://www.youtube.com/watch?v=Yg0c3tUCrGo&lc=UgyA61mp6apnFcjtxJp4AaABAg

> "I am starting a special needs Adult Day Program and was wondering if anybody on here can help me figure out the funding aspect. My main goal is to help the Special Needs community, but need to be able to feed and house the family. What are the sources of income to help keep the business profitable?"
> — r/smallbusiness (starting a special-needs adult day program) · https://www.reddit.com/r/smallbusiness/comments/1e2kauz/special_needs_day_program/

### OPERATOR LADDER · MULTI-LOCATION MEDICAL

> "I'm the practice administrator of a ~30 provider subspecialty practice in a large AMC in a major US city. I started my career in revenue cycle consulting after getting my undergrad in marketing. Why I like the job: making a positive difference in meaningful ways in the lives of people who are seeking help. It's a job with unique challenges. I dislike: The intersection of conflict between patients, providers, staff, and/or the healthcare system."
> — r/healthcareadmin (practice administrator, ~30 providers) · ↑5 · https://www.reddit.com/r/healthcareadmin/comments/egc6c8/who_are_you_and_what_do_you_do/
<!-- /LADDER:tab4 -->

## Tab 5 — Frustrations
### CAREGIVERS NO-SHOW / QUIT / TURNOVER (the staffing bleed)
> "Home care isn't a medical business; it's a logistics and HR business... The 'moat' isn't your branding or your bedside manner it's your scheduling density. If you can give a caregiver 40 hours a week within a 5-mile radius, they stay. If you give them 20 hours with a 30-minute commute between clients, they go to Target. The 79% turnover is usually a symptom of 'fragmented schedules' rather than just low hourly"
> — r/Entrepreneur · ↑7 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/o9ur38r/

> "The caregiver retention point is the whole business honestly. Operators treating the 30-40% turnover benchmark as aspirational are building something real... everyone else is running a leaky bucket and calling it a business."
> — r/Entrepreneur · ↑2 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/o9ui0ac/

> "damn the 79% turnover number killed me. this is the real codebase problem in home care. you can have all the tech stacks you want but if caregivers are burning out the whole operation collapses."
> — r/Entrepreneur · ↑7 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/o9t8cs8/

> "Places are offering $25 an hour and still can't find staff. Part of the problem is the pay but also how they are treated... Many are just leaving healthcare altogether no matter how much they raise the wages"
> — r/nursing (labor) · ↑6 · https://www.reddit.com/r/nursing/comments/ri1nap/we_need_to_talk_about_the_crisis_in_home_care_and/howceb1/

> "I will not pick extra shift if I'm tired just because 'we are short staffed' ever... I'm glad you quit! Take care of yourself!! Cuz they for sure won't!!"
> — r/nursing (labor) · ↑45 · https://www.reddit.com/r/nursing/comments/1307b77/i_quit_my_job_today/jhvjdpi/

### MARKETING, LEADS & REFERRAL SOURCES THAT WASTED MONEY / GHOSTED
> "A Place For Mom Scam I recently started a home care agency and came across A Place for Mom... they explained that I would need to prepay a total of $580, which they described as covering 10 client referrals... some reviews mentioned alleged scamming practices."
> — r/seniorcarebusiness · ↑6 · https://www.reddit.com/r/seniorcarebusiness/comments/1v87yh4/a_place_for_mom_scam/

> "Hospitals in Ga are hard. When I call they act like they don't know what I'm talking about or they send me to the wrong people. Other agencies look at me as competition and never respond. It's been tough. Wellstar always say no because they have their own Homehealth."
> — youtube (owner) · ↑3 · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=UgytOzBUMXz1NUVi_uN4AaABAg

> "Getting clients isn't easy these days unless in a suburban/rural area... Might be a lot more agencies in your area that your not aware of."
> — forum (allnurses) · https://allnurses.com/starting-home-health-care-agency-t66461

### MEDICAID / RATES / SLOW PAY / COMPETITION
> "In a similar field, doing adult day activities through the Medicaid waiver. We have solved the problem of staff turnover, and have reduced overhead costs dramatically but we are limited to the Medicaid reimbursement rates."
> — r/Entrepreneur (operator) · ↑3 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/o9uu5md/

> "Wages for home care workers are abysmal, fast food now pays better, and people with disabilities are struggling to find caregivers because they are on Medicaid and have no power to raise wages for those who assist them."
> — r/nursing · ↑120 · https://www.reddit.com/r/nursing/comments/ri1nap/we_need_to_talk_about_the_crisis_in_home_care_and/

> "back in January Medicare revised how it was going to reimburse for home care. Cue the sudden overhaul of our agency. Nursing visits are trimmed waaayyy back. PT, OT, Speech are suddenly visiting weekly or less."
> — r/nursing (agency staff) · ↑199 · https://www.reddit.com/r/nursing/comments/iw4z8y/today_i_feel_defeated_by_the_us_healthcare_system/

### RED TAPE / COMPLIANCE / LICENSING HEADACHES
> "the current work authorization climate makes continuous compliance a real operational burden. In a lot of metros the caregiver workforce is 40-60% immigrants"
> — r/Entrepreneur (operator) · ↑5 · https://www.reddit.com/r/Entrepreneur/comments/1rqjot3/pe_is_dumping_billions_into_home_care_despite_79/o9toj33/

> "Georgia might be easier, I was told California is the state with the most red tape."
> — r/RunAHomeCareAgency · ↑2 · https://www.reddit.com/r/RunAHomeCareAgency/comments/18j3pm9/finally_licensed/kdtb4ji/

> "Know that MC expects you to have 6 MONTHS working capital."
> — forum (allnurses) · https://allnurses.com/starting-home-health-care-agency-t66461

> "What compliance document has caused you the biggest headache during a survey?"
> — fb_group (agency owners) · https://www.facebook.com/groups/1154838852454654

<!-- LADDER:tab5 -->
*The operator ladder (added 2026-09-08) — quotas and 'sign the first visit', chronic understaffing (three caregivers for 150 residents), no leads and the hospitals that say no, Medicaid rates and nickel-and-dime pricing.*

### OPERATOR LADDER · HOME HEALTH

> "The Managers are awful! They do not train you properly. They expect you to maintain a quota of patients, you are required to go on patient visits in addition to admitting patients, they don’t take your drive time"
> — Indeed (Amedisys, Admissions Nurse) · https://www.indeed.com/cmp/Amedisys/reviews/horrible-place-to-work?id=b6052b25bb83a991

> "Flexible work with home health but census can be super low at times which means you don't get paid since it's PPV. Staff is good but usually a high turnover rate."
> — Indeed (Amedisys, RN Case Manager: census can be super low) · https://www.indeed.com/cmp/Amedisys/reviews/flexible?id=cbf9420c9630ff92

> "Im starting a home health agency and i was wondering how to train the psws. I dont have any clients so i cannot do in home training. I also dont have an office (im working out of my home) so ideally modules and education would occur online. Renting a space is not really an option because the turn over rate for PSWs is high, i will always be hiring and training staff."
> — r/smallbusiness (new home health agency, training PSWs) · ↑3 · https://www.reddit.com/r/smallbusiness/comments/u4hpwe/how_to_train_staff_for_my_small_business_start_up/

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "Now like most ALs we are chronically understaffed, we have 176 residents total 45 being in the memory care unit and the rest on the AL side. We never have more than 4 caregivers on duty on the AL side. Usually we have 3. So I know they are busy but honestly after 2 months of working here I can now identify a few pendants that go off for longer than normal, longer than allowed, because the caregivers just don't like the resident! Tonight a resident who has a private caregiver came to me to complain about no one coming to help her at night after her private caregiver has left. Now I need to backtrack to about 90 minutes earlier when one of the kitchen staff brought me a cellphone and said that miss apartment 110 had left it on a table. Shortly after that, miss apartment 108 and neighbor of 110, who had been sitting by the front desk, requested to be taken back to her apartment so I called for her caregiver and when she got to the front desk I handed her 110's phone and asked her to deliver it to her since she was going right next door and because I knew she also assigned to be 110s caregiver so it was her job to deliver things to 110! The look on her face! It said it all. Believe me if I was allowed to leave the desk during my shift I would have returned the phone my damn self because it's the right thing to do and it's a simple task. But this girl. Clearly didn't want to do it and the look on her face was as if I had asked her to do something inappropriate and not part of her job! So fast forward 90 minutes. 110 comes to the front desk and tells me that at night after her private is gone, the care she receives is terrible & no one comes to help her! Says she needs helping getting ready for bed otherwise it takes her 45 minutes to get in bed (which I true, I obviously can't get in to details but there is something specific she requires help with). I reminded her that all she has to do is push her pendant or call the front desk, either one will result in her caregiver being sent to her apartment. She goes back to her apartment and a few minutes later she pushes her pendant. I called it out right away. No response which is normal on the evening shift since the bosses aren't there. SMDH. The caregiver really let her pendant go off for 30 minutes!! No excuse for that! Dinner was done and over with, all residents taken back to their apartments. No one is showered that late. I KNOW it was intentional. I called out a couple other pendants and those residents were tended to within 10 minutes while 110 was still waiting! The way it works is, each caregiver is assigned to a certain wing and floor(s) so 110s caregiver is also caregiver for the other apartments on the first floor in the north wing. So when I see pendant 114 and 120 go off and clear minutes later while 110 is still waiting, I know it's deliberate! They are all assigned the same caregiver, why else would she go other pendants first when 110 went off first? This is so frustrating and I feel horrible for my resident! I know caregivers have a different experience with the residents but this one has never been problematic or rude, she is always very sweet. It is frustrating because the same pendants go off the longest! It is frustrating when residents get mad over slow response times and I can't do anything about it. Yesterday one of them lost his shit because his bridge partner wasn't brought to the bridge table until 40 minutes after he first asked for her to brought over! We asked the caregivers multiple times to bring her and it took 40 minutes! This is a resident whose pendant routinely goes off for 20-30 minutes! It's frustrating because we get in trouble if the caregivers take too long to respond and we don't notify the RCC when we aren't even in charge of the caregivers! The RCC should be monitoring response times! It frustrating when residents call the desk for help and I put it out over the walkie talkie and have no way of knowing if anyone responded unless they announce it on the walkie or the resident calls and says no one has come yet! I got chewed out by a residents boyfriend the other day because she had called the desk in the morning to ask for nurse to come check her BP because she wasn't Feeling well. I put it out over the walkie talkie. Continued on with answering phones, putting in meal orders, solving problems and monitoring pendants. 4 hours later the resident and her boyfriend come to the desk very angry, saying they had called for the nurse earlier and she never came. They basically acted personally insulted by me and blamed me. I put out the request which is all I can do. If they had just called the front desk when it got to the point they felt they had waited long enough, and told me no one had come yet, I would have contacted the med techs again and made sure they responded. Otherwise I have no way of knowing if a resident has been helped yet or not."
> — r/AssistedLiving (front desk, 176-resident AL, complete post) · ↑9 · https://www.reddit.com/r/AssistedLiving/comments/17qgqfh/staff_gets_frustrated_over_slow_pendant_responses/

> "I just left a company two months ago that literally let ALL of these things get swept under the rug because our census was almost in the 50% range so they were moving people in that weren’t even appropriate for assisted living. Residents were being treated SO poorly and anytime I said something to my director about it she would tell me what I was saying wasn’t true. Especially with the x2 assist or wheelchair bound residents. It was so awful. Absolutely put cameras in the room and WATCH them like a hawk! It doesn’t matter how beautiful a community is, it all comes down to WHO is providing the care. I was the Sales Director at my last community and quit because I refuse to sell that kind of care to anyone."
> — r/AssistedLiving (former Sales Director, 14 years) · ↑17 · https://www.reddit.com/r/AssistedLiving/comments/1kyorry/years_of_working_in_a_assisted_living_facility/muz02rb/

> "Former Marketing Director for Assisted Living for 6 years. I’ll start off by saying, and I’m sorry if this is harsh but this is what’s most likely going on. Yes, there are monthly quotas. Mine was at least three move ins a month and that was just the bare minimum to keep your job secured. Corporate liked to have weekly meetings (twice a week if my census was low) to put unnecessary pressure on the sales team to “make families sign the dotted line” the first time they come tour."
> — r/AssistedLiving (former Marketing Director, 6 years) · ↑3 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/kep7g1h/

> "I’m not in sales, but I’m a department head and know that in my company there are monthly census quotas, sale quotas and coming off the COVID situation lots of companies really cranked the pressure up on Assisted Living Communities back in May when the president declared the Covid state of emergency in the nation was “over”. Almost immediately it was an expectation that everything get back to “business as usual” and they doubled/tripled the quotas for move ins."
> — r/AssistedLiving (department head) · ↑4 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/ken8ikx/

> "I run 3 residential facilities for developmentally disabled. We have 16 residents with the average monthly rate per resident being $9000. As everyone has mentioned staffing and legal requirements make it much more difficult than typical rentals. Staffing especially now is quite difficult with the current job market. Some residents and their families can also lead to more difficulties compared to something more passive."
> — r/realestateinvesting (operator, 3 facilities, 16 residents) · ↑4 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/ie0my0n/

> "Corporate makes all the rules-like me not being allowed to leave the desk to use the bathroom at all during my shift unless I am on my break (I don't even get all the breaks I am legally required to take ) and they require a response within 10 minutes if a pendant goes off. Our residents wear pedants and have pull cords in the bathroom. Corporate doesn't want pendants going off for more than 10 minutes but we only have 3 caregivers per shift for 150 residents."
> — r/AssistedLiving (front desk: 3 caregivers per shift for 150 residents) · ↑2 · https://www.reddit.com/r/AssistedLiving/comments/16kpfji/staffing_issues_at_dads_assisted_living/k1y0hxg/

### OPERATOR LADDER · SENIOR LIVING / CCRC / SNF

> "We can usually tolerate one person calling in, but if two or more, then we're hurting. We staff by census, and not acuity btw."
> — r/nursinghome (nursing home: staff by census) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1oaj3xb/to_call_in_or_not/

> "All Brookdale cares about is getting the money. The don’t care about the staff, the residents or anything else. They could build great management teams but instead they choose to keep dead weight. Build census great! Low census, get rid of good employees. Bottom line is all that matters."
> — Indeed (Brookdale, Management) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/all-about-the-money?id=b21adc3e097a7f39

> "I’ve never had a scheduler for more than 4 months consecutively while I’ve been here which makes it challenging when they don’t"
> — Indeed (Brookdale, CNA, Colorado) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/experience-very-dependent-on-management?id=60a51d1f9e261df3

### OPERATOR LADDER · PLACEMENT / REFERRAL AGENCY

> "I bought in as well. I'm a former property wholesaler. I was into it at it's peak, from 2017 through 2020. This, is sooooo similar. I've been active less than a week and I'm meeting so many great ppl in the healthcare field. They're ALL happy to see me when I stop in to meet, exchange business cards and talk shop! But when he spoke to "No leads" thats where I am right now. But I'm a fighter "keep punching"
> — youtube (new placement agent, ex-wholesaler) · What It Really Takes to Run a Senior Placement · ↑1 · https://www.youtube.com/watch?v=0JfHTM3TFx4&lc=Ugz4vp7pwsIWTN9PuDl4AaABAg
<!-- /LADDER:tab5 -->

## Tab 6 — Previous Solutions
### CARE.COM / A PLACE FOR MOM / DIRECTORIES / LEAD-GEN VENDORS
> "I recently started a home care agency and came across A Place for Mom... they explained that I would need to prepay a total of $580, which they described as covering 10 client referrals. My understanding was that $58 would be deducted from this prepaid balance only for each referral that resulted in a signed client."
> — r/seniorcarebusiness · ↑6 · https://www.reddit.com/r/seniorcarebusiness/comments/1v87yh4/a_place_for_mom_scam/

> "I just went through my first 10 leads from A Place for Mom, and here's what I'm noticing: I do get people on the phone, but a lot of them are on the fence it's not an emergency, more like they noticed a parent or spouse might need help down the line and made an inquiry"
> — r/smallbusinessowner · ↑1 · https://www.reddit.com/r/smallbusinessowner/comments/1vbojef/home_care_agency_leads/

> "purchasing leads online (either in terms of PPC or from elder care lead providers like Eldercarelink, A Place For Mom, HomeAdvisor, AgingCare, or CareInHomes)."
> — quora · https://www.quora.com/What-are-ways-to-get-clients-after-starting-a-home-care-business

> "Don't do this. They'll send the same lead to 50 home care agencies."
> — youtube (owner) · ↑9 · https://www.youtube.com/watch?v=m2MUVQcAwS8&lc=UgzfdiLWJ73LX-yXMIp4AaABAg

> "because you have to pay for your leads whether its successful or not. You have to also pay upfront"
> — youtube (owner) · https://www.youtube.com/watch?v=m2MUVQcAwS8&lc=Ugw9cxrruDKIqL6RNmt4AaABAg.AJDhil1pJU4ALNCDStxJ7a

### GOOGLE ADS / FACEBOOK / SEO / WEBSITE
> "Outlay: $250 on logo creation $2500 to build website (including photo shoot and video) $500 on SEO and Google maps setup (currently with 3 reviews) $600 for design and printing of 500 brochures $400 to join the local Chamber of Commerce for networking $0 for Facebook, Nextdoor, passing out brochures, visiting care facilities Conversion: 3 clients from Facebook group post 1 client from Nextdoor post"
> — r/RunAHomeCareAgency · ↑3 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1dj6i94/marketing_best_practices/l9g479f/

> "On the SEO side, you set your budget. Anywhere from $950-$4k ($950/mo is enough in 98% of the markets in the US). For ads, we charge a % of spend. You're usually looking at $1,500+ to do ads (which work for some agencies, but not all."
> — youtube (Sagapixel, coach/vendor) · https://www.youtube.com/watch?v=DD_bzJudBJY&lc=Ugz7LL4iNee4LgbDNUN4AaABAg.AMEVMyTZFYIAMFcS_f_5f1

> "I've honestly had better luck focusing on SEO strategies and driving traffic to my website. It's almost as if the client sort of feels they've decided to choose me instead of being told by Google... It works pretty great!"
> — r/RunAHomeCareAgency · ↑2 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1efunq3/anyone_have_success_with_facebook_meta_ads/mc4g51a/

> "Rough estimate is 5-7% of total revenue goal. That's what should be spent on sales and marketing... So if I want to generate 3M, expect to spend $150K on all that."
> — youtube (coach) · https://www.youtube.com/watch?v=Ek2JIN8k3Rs&lc=UgzRRQ0r0Xe0kLalzDJ4AaABAg.API60YXt0lXAUV6M5rOE8B

### REFERRAL SOURCES / HOSPITALS / SNF / PLACEMENT AGENTS
> "I've become way too dependent on the placement agents that have been bringing me clients... Update: I started running ads and even though I have not gotten a single client i got a ton of caregivers and everyone in our community started to recognize us."
> — r/RunAHomeCareAgency · ↑5 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1ffa065/anyone_know_how_to_digital_market_for_senior_care/

> "Hospital in GA also require Vendor Mate Accounts. They no longer allow 'cold calls'... don't focus on the SW - every other agency is asking for the same referrals. Connect with the Activities Director; you get direct access to potential patients and you're consistently in the building."
> — youtube (coach) · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=UgytOzBUMXz1NUVi_uN4AaABAg.ADZ3fSBn7VlAJRD1wi391g

> "Hospitals are the hardest referral source to get into. It takes typically 8-9 months to develop."
> — youtube (coach) · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=UgyUH3uF3SCMuMcCDgR4AaABAg.9Qqt75TGW7Z9UXOLPu9TP-

### NETWORKING / BNI / CHAMBER
> "What worked for me is joining networking events unrelated to the field and impressing people with what I do. Give out cards and wait. Yes. Wait. It will come."
> — r/RunAHomeCareAgency · ↑2 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1d6v0n4/looking_for_marketing_ideas/l6vmh1p/

### FRANCHISE / CONSULTANTS / SCHEDULING SOFTWARE
> "I just contacted. A company to start a home care business the wanted 150 thousand franchise fee"
> — youtube (owner) · https://www.youtube.com/watch?v=nWrnOC3Mx5U&lc=UgxF_Oc9Lg1I7PRk3uV4AaABAg

> "Franchises will cost you 80K plus for Sign Up and required capital, private duty agencies is much less. I would recommend having a minimum of 30K to start up"
> — youtube (coach) · ↑1 · https://www.youtube.com/watch?v=Mw4cP5HuukI&lc=UgwFPiJ2fjIIUkvulOx4AaABAg.A1cYT9wvVmTA1gRyUzzDH7

> "I found a consultant who would draft my policies and procedures for $1000 along with other required documents. However I'm now contemplating drafting my own."
> — r/RunAHomeCareAgency · ↑7 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1b5d8qo/is_a_consultant_worth_it/

> "I use Alora for scheduling and EMR. It hits all your hot buttons and more, but it's probably more expensive than what you are looking for."
> — r/RunAHomeCareAgency · ↑6 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1dbg9dl/scheduling_software_for_247_home_care/l7qybbn/

<!-- LADDER:tab6 -->
*The operator ladder (added 2026-09-08) — what they have already used: placement agents and A Place for Mom, discharge planners and rehabs, RAL courses and administrator certifications, Facebook ads and brochures, PCC / EMR / AI assistants.*

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I'd add the ALW component to ensure you NEVER have empty beds. It is taking quite some time now to get through it, 6-9 months."
> — r/AssistedLiving (RCFE advice: the ALW waiver) · ↑2 · https://www.reddit.com/r/AssistedLiving/comments/15gfpoq/im_planning_on_opening_a_residential_care/le0ftc8/

> "So I started building **AIRA—24/7 AI Resident-Care Assistant** that: 1. **Learns your policies & state regs overnight** (no binder dives). 2. **Flags level-of-care jumps early** so you bill correctly—before margins disappear."
> — r/AssistedLiving (vendor pitching an AI resident-care assistant) · ↑8 · https://www.reddit.com/r/AssistedLiving/comments/1ldzs87/ai_for_assisted_livings/

> "Appreciate the concept, don’t see the need for the reality. Any AL that uses an EMR system already has their care plans sorted and available to staff 24/7. If a resident changes level of care the staff are going to be the ones to know that and isn’t really an issue."
> — r/AssistedLiving (operator's reply to the AI pitch) · ↑6 · https://www.reddit.com/r/AssistedLiving/comments/1ldzs87/ai_for_assisted_livings/mycrb10/

> "make sure you understand what your occupancy needs to be to make a decent margin given care home / assisted living communities tend to require north of 80-85% occupancy to start to turn a profit from my understanding (of course different models, if you intended to be there yourself etc all matter). I’d suggest in addition to whatever you pick up at RAL to also go and tour some communities or care-homes. You will get faster understating of what staffing one looks like (especially if we’ll run). Another idea if doing more of a care home approach, is you could probably get a fair amount of insight into the operating model and costs by looking into them or perhaps REITs financials if your planning larger scale build. Curious to hear what you learn - good luck!"
> — r/AssistedLiving (RAL Con attendee: what your occupancy needs to be) · ↑1 · https://www.reddit.com/r/AssistedLiving/comments/16bslde/im_heading_to_ral_con_2023_tomorrow_im_a/jzlpb45/

### OPERATOR LADDER · ADULT DAY

> "Now I’ve been approached by the owner of an adult day center who wants me to act as a care manager for his families one day a week (4 days/month). We’re discussing a $3,200/month retainer for that role."
> — r/smallbusiness (RN care manager offered a $3,200/month retainer by an adult day center owner) · ↑8 · https://www.reddit.com/r/smallbusiness/comments/1ul7gfd/need_an_honest_opinion_on_this_model_for_my/
<!-- /LADDER:tab6 -->

## Tab 7 — Solution Soundbites *(COPY TAB — hooks)*
### I WISH / WHAT I NEED (the ideal they imagine)
> "I would like to 20 new clients by the end of the year. I currently have 1 client, but I know its possible. I just need to make the right moves."
> — youtube (owner) · ↑3 · https://www.youtube.com/watch?v=zIGjz4SHDQc&lc=Ugy0t5SAbcI9TwJikaR4AaABAg

> "Im trying to branch out more to different referral companies in the areas i cover, but i dont seem to be getting many results other than the 2 i currently have. Any suggestions?"
> — youtube (owner) · ↑16 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugy3QpnkLzJ6qVR1U4h4AaABAg

> "Hey! What were the steps you took to achieve that? I need clients so bad , I don't have one."
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=UgzDsJakMFH5qp0m-ct4AaABAg.ADNP6pRclplADWoYEACIur

> "I'm looking for scheduling software to make life for both the lead caregivers who makes the schedule and for myself (to automate detection of overtime, gaps/double-coverage, etc.)."
> — r/RunAHomeCareAgency · ↑8 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1dbg9dl/scheduling_software_for_247_home_care/

> "I like your videos , specially I need help in targeting marketing for develope business"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=HhwdLu4xayY&lc=Ugy57GKk0f_1CQxVXp94AaABAg

### WHAT FINALLY WORKED (owner wins)
> "12 months ago I started with 8 hrs weekly today we're at 95 hrs weekly."
> — youtube (owner) · ↑25 · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=Ugz2pzPABd00oNCeqwt4AaABAg

> "Also VA Hospitals. They are always looking for someone. I got my first two clients through VA Hospitals."
> — youtube (owner) · ↑10 · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=UgzDsJakMFH5qp0m-ct4AaABAg

> "9 out of 10 times I get referrals just by making a phone call to someone that I have taken the time to build a relationship with. I use to average about 120 referrals a month by making 2 visits a day."
> — youtube (marketer) · ↑23 · https://www.youtube.com/watch?v=v7_C-TV1Zxo&lc=Ugg4iQDvDx_J_XgCoAEC

### THE IDEAL SETUP / THE KEY IS (coach word tracks — the market's promise language)
> "most home care agencies don't really have a big referral problem. What they have is a problem with conversions."
> — youtube (Homecare Owners Corner) · https://www.youtube.com/watch?v=j0jPTF8Tsnw

> "the key is your speed creates trust long before that first meeting ever happens."
> — youtube (Homecare Owners Corner) · https://www.youtube.com/watch?v=j0jPTF8Tsnw

> "Instead of hoping for referrals, you're creating multiple pathways for new clients to find your agency."
> — youtube (Dr Shannon Simpson Shand) · https://www.youtube.com/watch?v=7aO6OfMHeqg

> "Turns paid ads into a predictable client acquisition system."
> — youtube (Sagapixel) · https://www.youtube.com/watch?v=DD_bzJudBJY

> "The two channels that are best at driving predictable leads for our home care agency are ppc through google ads and seo organic search."
> — youtube (Sagapixel) · https://www.youtube.com/watch?v=DD_bzJudBJY

> "the key is you need to approach this differently than what all the other home care agencies in your area are doing."
> — youtube (Aaron Bogle) · https://www.youtube.com/watch?v=zIGjz4SHDQc

<!-- LADDER:tab7 -->
*The operator ladder (added 2026-09-08) — in their words: keep it small until the systems are in place; attract, don't beg; we don't have a sales department; I need a marketer, a liaison, serious help.*

### OPERATOR LADDER · HOME HEALTH

> "I own several home health agencies in Southern California. Most of our offices i found thru Loopnet. My offices as less than $700/month for a small space. I believe the smallest space you can have is 400 sq ft. You will not even be using that space for atleast 2-3 years until you receive a provider number from Medicare."
> — r/smallbusiness (owner of several home health agencies, Southern California) · ↑3 · https://www.reddit.com/r/smallbusiness/comments/otnixq/need_to_rent_a_small_office_space_ideas/h6x60pf/

### OPERATOR LADDER · HOSPICE

> "Hospice marketer here 🙋🏽‍♀️ I’m in College Station, Texas. I’m new (3 months) and I need some serious help."
> — youtube (new hospice marketer, Texas) · How Do You Succeed In Hospice Sales · ↑9 · https://www.youtube.com/watch?v=CqFYDzwGsRs&lc=Ugwk2gSVw49W4CMLlVp4AaABAg

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I own an assisted living and we do not have a sales department.....there is no need for one. Plus these are difficult decisions for a family therefore we do not allow anyone to push families into any kind of decision.."
> — r/AssistedLiving (AL owner) · ↑3 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/ker4hlv/

> "We have one residential home converted to assisted living generating a $12,000 cash-a-month, net profit. We have 4 residents and private. We don't take residents from the state. This is subtracting operating expenses, mortgage, food, & employees. It all depends on the state and county you live in and if you have a strong operating experience. Keep it small and don't try to scale until you have your systems in place and are profitable."
> — r/realestateinvesting (RAL owner, 4 private-pay residents) · ↑2 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/jbvhtqz/

> "In WA, we had about 2,800 AFHs in 2016 & now we have over 4,500. The only LTC type of facility that has been growing. While other types have been stagnant, or closing. (Mainly due to Staffing shortages."
> — youtube (adult family home owner, Bellevue WA) · RAL Is The Number One Real Estate · ↑12 · https://www.youtube.com/watch?v=Q9bl7hQL0w8&lc=UgzZeCINY5fhX6w2xLR4AaABAg
<!-- /LADDER:tab7 -->

## Tab 8 — Desired Outcomes
### PREDICTABLE CLIENTS / FULL CENSUS
> "I started my Private In Homecare business 2 yrs ago. I finally got approved to work with Medicaid clients... Im trying to branch out more to different referral companies in the areas i cover, but i dont seem to be getting many results other than the 2 i currently have. Any suggestions?"
> — youtube (owner) · ↑16 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugy3QpnkLzJ6qVR1U4h4AaABAg

> "How can i target more clients through Adult day cares, Hospitals, Senior living communities and physicians? Should i hire a sales rep to do this work for me or should i be on the front end doing this work on my own?"
> — forum (allnurses) · https://allnurses.com/starting-a-home-care-agency-t512648

### PROFITABLE / TAKE-HOME
> "Minus all expenses, starting with staff at about 17per hour in my state. I like to focus on what I actually take home"
> — youtube (owner) · ↑3 · https://www.youtube.com/watch?v=_FjnN8Gtdtw&lc=UgxTXKaGPI1bQ17BlR94AaABAg

> "Realistically, how much does it cost to take a home care agency from creation to profitable?"
> — youtube (owner) · https://www.youtube.com/watch?v=Ek2JIN8k3Rs&lc=UgzRRQ0r0Xe0kLalzDJ4AaABAg

### FREEDOM / SCALE / STEP BACK
> "I was a caregiver for many years then a home care administrator and just established a home care agency with $5,000 and limited marketing materials. 12 months ago I started with 8 hrs weekly today we're at 95 hrs weekly."
> — youtube (owner) · ↑25 · https://www.youtube.com/watch?v=EL1E6j5jEwI&lc=Ugz2pzPABd00oNCeqwt4AaABAg

> "Running a home health agency is a whole new game, differrent HH company for a year to learn the ropes then branch out on your own. OR hire a consultant and invest $$$."
> — forum (allnurses) · https://allnurses.com/starting-home-health-care-agency-t66461

<!-- LADDER:tab8 -->
*The operator ladder (added 2026-09-08) — a full building, occupancy up then refinance or sell, referrals they own, caregivers who run it.*

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "Buy it, make the necessary capital improvements, get the occupancy up to where it needs to be, then go looking for lenders and investors at a higher valuation."
> — r/realestateinvesting (reply on the distressed AL deal) · ↑4 · https://www.reddit.com/r/realestateinvesting/comments/1lpfxy1/need_advice_on_a_deal_that_came_across_the/n0x5q9b/

> "Seeking to acquire a reputable independent living community (ILC) with the potential to increase occupancy and streamline operations in Nevada or Arizona"
> — r/buyingabusiness (acquisition criteria, independent living community) · ↑5 · https://www.reddit.com/r/buyingabusiness/comments/1hxchwh/acquisition_opportunity_independent_living/

### OPERATOR LADDER · PLACEMENT / REFERRAL AGENCY

> "I started my agency recently and want to increase my leads"
> — youtube (new placement agency owner) · How To Start A Senior Referral Business · ↑5 · https://www.youtube.com/watch?v=DtNU13mT-ZE&lc=UgwdH5S0yHLfx6OlodZ4AaABAg
<!-- /LADDER:tab8 -->

## Tab 9 — Typical Day
### WEARING ALL THE HATS / DOING EVERYTHING YOURSELF
> "What are the duties of a R.N with a non medical home care business? I will be doing the scheduling, marketing, finance, and hiring."
> — forum (allnurses) · https://allnurses.com/starting-a-home-care-agency-t512648

> "Can you spare one tip for a start up agency with solo owner, no license yet. (Texas)"
> — youtube (owner) · ↑1 · https://www.youtube.com/watch?v=buKVbCBebXw&lc=UgwxoC9fwxBAFazfo1l4AaABAg

### THE PHONE / SCHEDULING NEVER STOPS (24/7)
> "she's on the phone when she's home working on scheduling caregivers and answering questions and dealing with maintenance issues as they arrive."
> — r/caregivers · ↑1 · https://www.reddit.com/r/caregivers/comments/liodlz/young_people_need_to_hear_these_experiences_they/gn8n207/

> "unless I find something through further searching I'll probably implement a process for exporting the content to CSV/Excel/Google Sheets and implement validation logic there. That'll be clunky, but hopefully better than counting hours by hand..."
> — r/RunAHomeCareAgency · ↑1 · https://www.reddit.com/r/RunAHomeCareAgency/comments/1dbg9dl/scheduling_software_for_247_home_care/la21n4x/

### STAFFING FIRES / BURNOUT / NO END IN SIGHT
> "I started my home care company in 2019... Because of staffing I lost most of my clients and now I find myself having a hard time rebuilding. I have no money and don't know where to go from here. I am very close to giving up."
> — youtube (owner) · ↑6 · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=Ugwb6rtk3xFmDTOzfKN4AaABAg

> "I have put my business on the back burner because I am not available at this time to start taking clients due to my current situation."
> — youtube (owner) · https://www.youtube.com/watch?v=P3bLuxFvwAI&lc=UgxydiFP98dHHbeTbcR4AaABAg.AGDvBIQmEuSAGG-E-EBgLA

---

<!-- LADDER:tab9 -->
*The operator ladder (added 2026-09-08) — metrics for tours, calls, emails and texts; the hands-on licensee-admin; staffing by census and covering call-ins.*

### OPERATOR LADDER · ASSISTED LIVING / RAL

> "I have metrics for how many tours, calls, emails, texts I make. We have weekly (sometimes daily if numbers are down) zoom meetings about each & every family and how to push them. ‘What happens if mom falls next week, she needs to move in now you can’t do this another day’. Doesn’t matter that I don’t know you or your situation - I have to ‘help’ you NOW. For every single lead, we have anywhere from 5-20k with which to incentivize them if it gets the contract signed this month/ this week."
> — r/AssistedLiving (AL sales manager, 6 months in) · ↑10 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/keleb3x/

> "Im the licensee and also the admin. I do have an assistant admin. Here in my state an Admin can run 2 facilities. I like to be hands on because i make sure my residents are well taken care of."
> — r/realestateinvesting (licensee-administrator) · ↑5 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/ix0yjp2/

> "Corporate liked to have weekly meetings (twice a week if my census was low) to put unnecessary pressure on the sales team to “make families sign the dotted line” the first time they come tour."
> — r/AssistedLiving (former Marketing Director: weekly meetings, twice if census was low) · ↑3 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/kep7g1h/

### OPERATOR LADDER · SENIOR LIVING / CCRC / SNF

> "I work at a Midwest nursing home with a capacity of 100-125, but census usually plateaus around high 80s (currently low 90s). We used to have a weekend warrior program (CNAs extra $5 an hour and nurses $8). Corporate apparently said that got too expensive. We never had call-ins from those who were in the program, otherwise you lost that extra for the entire weekend. I have voiced having one or two CNAs on call, paying them maybe $1.50-2.00/hr to wait by the phone. If they got called in, they got time and a half. Nope, not in the budget!"
> — r/nursinghome (nursing home staffing, 100–125 beds) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1oaj3xb/to_call_in_or_not/

> "As Executive Director at a Brookdale community ia typical day was spent reacting to staffing shortages rather than leading. The building was woefully understaffed, so most of my time went to covering gaps, calming frustrated families, and trying to keep basic care on track."
> — Indeed (Brookdale, Executive Director, Ohio) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/toxic-culture-chronic-understaffing-and-unsupportive-upper-management?id=f7f213bf8790791f

### OPERATOR LADDER · MULTI-LOCATION MEDICAL

> "Keep up the census and always be prepared for the state survey is pretty much the biggest requirements. The company has nine buildings in Georgia. 7 are around the Metro Atlanta area. I'm hoping I can eventually take over the building I'm at now."
> — r/healthcareadmin (administrator-in-training, 9-building nursing home chain, Georgia) · ↑1 · https://www.reddit.com/r/healthcareadmin/comments/sych6p/any_insight_on_lic_nursing_home_administrator_and/kc187vq/

> "The DON is definitely more stressful than the administrator job. And depending on how good your DON is depends on how stressful your job is as an administrator will be. Obviously it depends on the building. Also, the make-up of the resident census. If it's a high therapy skilled building it's going to be a little hectic with a lot of moving parts. If it's a majority long-term care facility it can be pretty relaxed. For the most part the administrator manages the front office and oversees that everything is going well in the building. They Make sure things are maintained and state survey ready."
> — r/healthcareadmin (nursing home administrator vs DON) · ↑2 · https://www.reddit.com/r/healthcareadmin/comments/sych6p/any_insight_on_lic_nursing_home_administrator_and/oir8kt7/

> "I am now a practice manager at a 2 location, 12 provider practice which I run on my own. I got that job when I was 26, and I don't think I could have done it had I not had mentorship from practice managers in the area from my consulting gig. I have been here for 2 years and 7 months, started at 60k and now 75,500. They pay my ACHE and MGMA dues as well. And any other healthcare mgmt association I want to be a part of. You do not have to have a clinical license, I do not. But some specialties do want them, like if you wanted to be a manager/director in trauma, ER, surgical, etc. So to answer you questions in TLRD: 1.) healthcare consulting, volunteering, grad school 2.) you dont need clinical unless you want to manage ER, Trauma, Surgery, ICU, etc 3.) HEALTHCARE CONSULTING...build that network!!! Find mentors. 4.) Depends on where you are located. I am in GA, not in city but take 75,500 and am 4 years out of grad school 5.) I have had many offers, so progression can be good, also depending where you are. If you work for a place like HCA, I think climbing the ladder is likely to happen 6.) work my butt off during the 8a-5p and then go home. Unless there is a meeting I must attend after hours. 7.) Healthcare is a very secure industry, but it is ALWAYS changing and you must be on top of it when it applies to your job. Pandemics suck."
> — r/healthcareadmin (practice manager, 2 locations, 12 providers) · ↑6 · https://www.reddit.com/r/healthcareadmin/comments/pgkm3v/any_hospital_administrators_or_mha_graduates_here/hdn0csh/
<!-- /LADDER:tab9 -->

## Tab 10 — Buyer Summary

**Who they are (measured, not assumed):** The buyer skews **early-stage / startup**: the two most-discussed topics are *licensing/compliance* (86 docs) and *how-to-start / is-a-consultant-worth-it* (59). They are often career-changers with **no medical background** ("hold my hand from start to first client... I have no medical background what so ever"), CNAs/caregivers going out on their own ("Yes, I am a CNA...for 30 years and I decided to start my own"), or nurses/administrators branching out. A meaningful minority are **established** operators (10–16 yrs, $1M+, multi-location goals).

**Firmographics (corpus-measured):** home-health/skilled mentioned 106× vs non-medical/private-duty 41×; **Medicaid 47× vs private-pay 24×** (both live; the payer split defines the sub-segment). Franchise 10× vs independent 16×. Geography spread — CA, TX, IN, IL, GA, FL, IA, VA + Canada; **California named as "the most red tape."** Gender self-markers skew male-marked in the small sample (13 vs 6), but many named owners are women (CNAs starting out).

**The two jobs-to-be-done (both first-class):**
1. **Get clients / census** — escape referral/placement-agent dependence and unpredictable word-of-mouth.
2. **Hire + retain caregivers** — the 79% turnover "leaky bucket."

**Awareness (Schwartz):** Mostly **Problem-Aware → Solution-Aware**. They know they need "more clients" and "reliable caregivers"; most do NOT yet know that *paid acquisition + a conversion/intake system* is the lever (they still equate marketing with "visiting facilities" and "word of mouth"). A vocal minority is Solution-Aware ("has anyone run ads?").

**#1 Fear walking in:** *"I have no money and don't know where to go from here. I am very close to giving up."*
**#1 Hope walking in:** *"predictable"* client flow — *"Turns paid ads into a predictable client acquisition system."*

**What they've already tried (Tab 6):** referral marketing to hospitals/SNFs/facilities (hardest, 8–9 months to develop, "Wellstar always say no"), lead directories (A Place for Mom $580/10 referrals, "same lead sent to 50 agencies"), Google Ads/SEO/website ($2,500 site, $950–4k/mo SEO), franchises ($80–150k), consultants ($1,000 P&P), networking/BNI, scheduling software (Alora, etc.).

**The line that would make them stop scrolling:** *"You've become way too dependent on placement agents for clients. Here's the system that brings them to you."*

**Targeting (Meta/Google — hypotheses from the research):** interests — Home Care Association of America, NAHC, Home Instead/Visiting Angels (franchise-curious), WellSky/AxisCare/Alora (software), "start a home care agency," CareAcademy; behaviors — new business owners, healthcare admins; search intent — "how to get home care clients," "home care marketing," "home care agency license [state]." Geo: broad US, state-by-state (licensing is state-specific).

---

<!-- LADDER:tab10 -->
**The operator ladder (added 2026-09-08, measured):** the corpus is now 7,395 documents (3,679 before the expansion). By pull scope: home care 2,689 · assisted living / RAL 1,541 · senior living / CCRC / SNF 449 · hospice 419 · memory care 229 · home health 440 · placement 278 · adult day 296 · independent living 146 · multi-location medical 125. Documents containing "occupancy": 25 (was 0). **What the ladder adds to the buyer (from the reading, hypotheses labeled):** (1) the facility side buys the same two jobs but names them *occupancy, census, move-ins, tours, wait list* — the vendors in Vince's feed and the Library say "fill your beds", "6-month wait list", "every empty unit", never "leads"; (2) the RAL / adult-family-home starter is a CNA, nurse, landlord or investor who has watched a "$12K a month per house" video — pre-launch, wants licensing, a partner administrator and "how many residents to break even"; (3) the corporate facility's sales manager / marketing director lives under monthly move-in quotas set by corporate, with tour metrics and $5–20K incentives per lead — the operator buyer at a chain is the regional or the ED, not the owner; (4) hospice and home health operators talk about admissions and referral response time (Hospice News: 30-minute referral response as the goal; WellSky/Luna: under 35% of home-health referrals accepted) — the pain is intake capacity and liaison hiring, not lead volume; (5) the employer side (Indeed/Glassdoor) puts the hiring pain in one sentence — "Build census great! Low census, get rid of good employees" — and names the scheduler ("never had a scheduler for more than 4 months") as the job that turns over first. Memory care and independent living do not have a separate operator voice online; they speak as assisted living / senior living operators.
<!-- /LADDER:tab10 -->

## Go-Deeper Thread Cards (D2)

### Thread 1 — Referral / placement-agent DEPENDENCE (the spine)
Why it matters: referral sources are the #1 named lead channel in the coach corpus (hospital/SNF/facility 172 + physician 28 mentions) AND the owner's chief anxiety — they don't own the flow.
- Belief: "most home care agencies don't really have a big referral problem. What they have is a problem with conversions." (Homecare Owners Corner)
- The pain, verbatim: *"I've become way too dependent on the placement agents that have been bringing me clients."*
- Why it fails them: "Hospitals are the hardest referral source to get into. It takes typically 8-9 months to develop." + "Other agencies look at me as competition and never respond."
- **Feeds:** Tabs 4/5/6 · Copy line: *"Stop renting your clients from placement agents."* = **inLeap's core wedge.**

### Thread 2 — A Place for Mom / Care.com / lead directories
- Belief: a fast way to buy clients. Reality: "$580 for 10 referrals," "they'll send the same lead to 50 home care agencies," "leads did not convert, I felt like a salesman," "you pay whether it's successful or not, upfront." Tagged a "scam" by a new owner.
- **Feeds:** Tab 6 · Copy line: *"Leads you actually own — not the same name sold to 50 agencies."*

### Thread 3 — Google Ads / SEO / website ("predictable" promise)
- Belief (market's promise): "Turns paid ads into a predictable client acquisition system"; "PPC + SEO are best at driving predictable leads." Cost signals: site $2,500, SEO $950–4k/mo, ads $1,500+/mo, $5–25/click, CLV $15–20k/client at ~10% margin.
- Owner reality: mixed — one ran ads and "got a ton of caregivers" but "not a single client"; another wins via SEO ("client feels they chose me"). **The gap = conversion/intake, not traffic.**
- **Feeds:** Tabs 6/7 · Copy line: *"Ads that book assessments — not just clicks."*

### Thread 4 — Franchise vs independent
- Belief: a franchise de-risks the start. Reality: "$150 thousand franchise fee," "$80k+ plus required capital." Independents want the playbook without the royalty.
- **Feeds:** Tab 6/Buyer Summary · Copy line: *"The franchise playbook without the $150k franchise fee."*

### Thread 5 — Caregiver turnover = scheduling density (the labor moat)
- Belief (sharp operator): "Home care isn't a medical business; it's a logistics and HR business... the moat is scheduling density. 40 hours within a 5-mile radius, they stay; 20 hours with a 30-minute commute, they go to Target." 79% turnover = the industry benchmark.
- Labor side: "$25/hour and still can't find staff... it's also how they're treated"; "fast food now pays better."
- **Feeds:** Tabs 5/8 · Copy line: *"Fill the schedule so caregivers stay — recruiting + density, not just higher pay."*

### Thread 6 — Licensing / compliance / survey (the startup wall)
- #1 topic (86 docs). "It took me over a YEAR to start... I trusted no one"; "What compliance document caused the biggest headache during a survey?"; "6 MONTHS working capital." A whole cottage industry of consultants ($1,000 P&P) and free Skool communities has formed around it.
- **Feeds:** Tab 1/6 · Copy line (top-of-funnel magnet): *"From license to your first 10 clients — the done-with-you launch."*

---

<!-- LADDER:threads -->
### Thread — Occupancy, census quotas and the tour (the facility's version of 'no clients') (added 2026-09-08 · 35 corpus documents match `\boccupancy\b|census (quota|pressure|is|was|drop|low|down|pl`)
Why it matters: The facility operator's demand problem is spoken as occupancy and census, never as leads; corporate sets move-in quotas, the sales team is measured on tours, and the vendors in Vince's feed sell 'booked tours' and 'every empty unit'.

> "I found an Assisted Living Facility in rural TX that would be considered distressed due to location and occupancy but it's 1.5hrs from a major metro area. It cash flows but, at current occupancy barely. The owners died and left it to an heir that doesn't want it. I was told make a reasonable offer and it's mine...the heir is a realtor so I can't offer 100k and say thanks. Given the many turnarounds that I have worked on, I know there is value to add with some CapEx and marketing due to the surrounding comps being trash and demographics show that the average family is actually 1.5hrs away from their family member(s) in a facility contrary to what has been thought. It has good bones and a working operation but, there is no proper marketing or sales pipeline. So the question is: How can I pitch this and to who because not a single lender wants to touch this with a 10 foot pole."
> — r/realestateinvesting (senior-housing CRE, distressed AL deal) · ↑13 · https://www.reddit.com/r/realestateinvesting/comments/1lpfxy1/need_advice_on_a_deal_that_came_across_the/

> "I just left a company two months ago that literally let ALL of these things get swept under the rug because our census was almost in the 50% range so they were moving people in that weren’t even appropriate for assisted living. Residents were being treated SO poorly and anytime I said something to my director about it she would tell me what I was saying wasn’t true. Especially with the x2 assist or wheelchair bound residents. It was so awful. Absolutely put cameras in the room and WATCH them like a hawk! It doesn’t matter how beautiful a community is, it all comes down to WHO is providing the care. I was the Sales Director at my last community and quit because I refuse to sell that kind of care to anyone."
> — r/AssistedLiving (former Sales Director, 14 years) · ↑17 · https://www.reddit.com/r/AssistedLiving/comments/1kyorry/years_of_working_in_a_assisted_living_facility/muz02rb/

> "Former Marketing Director for Assisted Living for 6 years. I’ll start off by saying, and I’m sorry if this is harsh but this is what’s most likely going on. Yes, there are monthly quotas. Mine was at least three move ins a month and that was just the bare minimum to keep your job secured. Corporate liked to have weekly meetings (twice a week if my census was low) to put unnecessary pressure on the sales team to “make families sign the dotted line” the first time they come tour."
> — r/AssistedLiving (former Marketing Director, 6 years) · ↑3 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/kep7g1h/

> "I’m not in sales, but I’m a department head and know that in my company there are monthly census quotas, sale quotas and coming off the COVID situation lots of companies really cranked the pressure up on Assisted Living Communities back in May when the president declared the Covid state of emergency in the nation was “over”. Almost immediately it was an expectation that everything get back to “business as usual” and they doubled/tripled the quotas for move ins."
> — r/AssistedLiving (department head) · ↑4 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/ken8ikx/

> "I own an assisted living and we do not have a sales department.....there is no need for one. Plus these are difficult decisions for a family therefore we do not allow anyone to push families into any kind of decision.."
> — r/AssistedLiving (AL owner) · ↑3 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/ker4hlv/

> "Buy it, make the necessary capital improvements, get the occupancy up to where it needs to be, then go looking for lenders and investors at a higher valuation."
> — r/realestateinvesting (reply on the distressed AL deal) · ↑4 · https://www.reddit.com/r/realestateinvesting/comments/1lpfxy1/need_advice_on_a_deal_that_came_across_the/n0x5q9b/

> "I have metrics for how many tours, calls, emails, texts I make. We have weekly (sometimes daily if numbers are down) zoom meetings about each & every family and how to push them. ‘What happens if mom falls next week, she needs to move in now you can’t do this another day’. Doesn’t matter that I don’t know you or your situation - I have to ‘help’ you NOW. For every single lead, we have anywhere from 5-20k with which to incentivize them if it gets the contract signed this month/ this week."
> — r/AssistedLiving (AL sales manager, 6 months in) · ↑10 · https://www.reddit.com/r/AssistedLiving/comments/18p1j1x/how_does_the_salesmarketing_work_to_get_someone/keleb3x/

*Implication (hypothesis, from the quotes above):* Copy to a facility operator should say occupancy / census / move-ins / tours, and the offer should promise inquiries the operator owns (not a placement agent's), because the corporate operator already has a sales team under quota and the independent RAL owner has none.

### Thread — The RAL / adult-family-home starter: a house, a license, a partner administrator, '$12K a month per house' (added 2026-09-08 · 60 corpus documents match `(open|start|buy|launch)(ing)? (an? |my |our |the )?(assisted`)
Why it matters: The largest new voice on the ladder is pre-launch: CNAs, nurses, landlords and investors who watched a residential-assisted-living video and want the license, the numbers and someone to run it.

> "My husband and I own two retirement facilities bringing in 60k a month! It’s amazing! I started this after being tired of working for the government for 7 years!…we renovate the homes, get them licensed and run the business. Next we want to flip homes to prep them for retirement homes and rent them to those that want start this amazing lucrative business. We are both in our 30s and we work from home, we have professional caregivers that run the business’s for us."
> — youtube (RAL owner) · Making $12K/Month Per Property · ↑151 · https://www.youtube.com/watch?v=TG7zIu1WaNo&lc=UgxjI1g-PgHiA-JsJkF4AaABAg

> "My husband and I own 2 adult family homes, similar to this. We make 80k a month from these two businesses. We bought two residential homes turned them into senior/mental health facilities and we have living caregivers aids there as well. We house 12 adults who are vulnerable adults/DDA. It’s a rewarding career and very lucrative. Best thing I could have done, I hated working 9-5 in corporate America."
> — youtube (adult family home owner) · The 2-Bedroom Rental That Makes $30,000 · ↑14 · https://www.youtube.com/watch?v=e_hF_qArFXI&lc=UgwlpUMEBaQL8VKEI414AaABAg

> "I literally took down all the notes and ready more than ever to get my ALF up and running. I’ve been a CNA over 10 years and in nursing school and very passionate about helping families. This just motivated me even more."
> — youtube (CNA, 10 years) · How to start an Assisted living facility · ↑132 · https://www.youtube.com/watch?v=PZJJSv9dG2A&lc=UgxjqhoC1z_c6xZNTEx4AaABAg

> "I just opened a NPO for an RAL in Pend Oreille County bc i need the grant funding but still for a small 8 bed facility at $4g per month the operation cost put the project in the red. I'm finding getting started to be less and less motivating but love the dream of helping people."
> — youtube (RAL owner, non-profit) · How To Get $12,000 Per Month For A Room · ↑17 · https://www.youtube.com/watch?v=SQC4Pdq_1Jo&lc=Ugyg4wRofRCJuY8_NIt4AaABAg

> "I am planning on opening a RCFE in Riverside, California. I own a 3 bedroom home, and want to turn it into a 6 bed (2 beds per room) facility. I put together a rough budget, but would love some advice in regards to some of the expenses i might have to deal with. I would like to charge a little more than market average to provide high quality organic meals. Anticipated income Patients - $6000/month x 6 = $36,000/month Anticipated expenses Nurses - $6000/month x 4 = $24,000/month Mortgage - $2,200 Food- $2,000 insurance- ? additional expenses- ?"
> — r/AssistedLiving (would-be RCFE owner, the math) · ↑16 · https://www.reddit.com/r/AssistedLiving/comments/15gfpoq/im_planning_on_opening_a_residential_care/

> "As the title states, I’m a nurse looking to open an assisted living. This is more my husband’s idea- he’s an accountant. He thinks that this could be a fulfilling venture that we could expand one day. I’m curious if anyone here has done this or knows someone who has done this and has any opinions or advice."
> — r/Entrepreneur (nurse + accountant couple) · ↑16 · https://www.reddit.com/r/Entrepreneur/comments/14diy9l/nurse_looking_to_open_an_assisted_living/

> "I operate 2 small 6 bed residential facilities for elderly and it is not an easy business. Overhead cost is high. You need to hire the right caregivers to assist your residents with their activities of daily living. RAL is not really about the real estate aspect but rather the business that is tied to it."
> — r/realestateinvesting (operator of two 6-bed RALs) · ↑5 · https://www.reddit.com/r/realestateinvesting/comments/uujosm/is_residential_assisted_living_worth_looking_into/i9giu59/

*Implication (hypothesis, from the quotes above):* This buyer is at a different awareness level (pre-launch) than the operating owner; the starter offer is licensing + first residents, and the ads that win here (RAL Academy, Assisted Living Investing) sell a course, not growth — a separate funnel, not the inLeap growth engine.

### Thread — Understaffed by census: the scheduler, the call-in, the agency nurse (the employer side of the hiring pain) (added 2026-09-08 · 81 corpus documents match `understaffed|short.?staffed|\d+ (caregivers?|aides?|CNAs?|st`)
Why it matters: Indeed and Glassdoor reviews of the biggest operators put the caregiver/CNA side of the two-job problem in one voice: staffing follows census, the scheduler turns over first, corporate says the weekend-warrior program is too expensive.

> "Now like most ALs we are chronically understaffed, we have 176 residents total 45 being in the memory care unit and the rest on the AL side. We never have more than 4 caregivers on duty on the AL side. Usually we have 3. So I know they are busy but honestly after 2 months of working here I can now identify a few pendants that go off for longer than normal, longer than allowed, because the caregivers just don't like the resident! Tonight a resident who has a private caregiver came to me to complain about no one coming to help her at night after her private caregiver has left. Now I need to backtrack to about 90 minutes earlier when one of the kitchen staff brought me a cellphone and said that miss apartment 110 had left it on a table. Shortly after that, miss apartment 108 and neighbor of 110, who had been sitting by the front desk, requested to be taken back to her apartment so I called for her caregiver and when she got to the front desk I handed her 110's phone and asked her to deliver it to her since she was going right next door and because I knew she also assigned to be 110s caregiver so it was her job to deliver things to 110! The look on her face! It said it all. Believe me if I was allowed to leave the desk during my shift I would have returned the phone my damn self because it's the right thing to do and it's a simple task. But this girl. Clearly didn't want to do it and the look on her face was as if I had asked her to do something inappropriate and not part of her job! So fast forward 90 minutes. 110 comes to the front desk and tells me that at night after her private is gone, the care she receives is terrible & no one comes to help her! Says she needs helping getting ready for bed otherwise it takes her 45 minutes to get in bed (which I true, I obviously can't get in to details but there is something specific she requires help with). I reminded her that all she has to do is push her pendant or call the front desk, either one will result in her caregiver being sent to her apartment. She goes back to her apartment and a few minutes later she pushes her pendant. I called it out right away. No response which is normal on the evening shift since the bosses aren't there. SMDH. The caregiver really let her pendant go off for 30 minutes!! No excuse for that! Dinner was done and over with, all residents taken back to their apartments. No one is showered that late. I KNOW it was intentional. I called out a couple other pendants and those residents were tended to within 10 minutes while 110 was still waiting! The way it works is, each caregiver is assigned to a certain wing and floor(s) so 110s caregiver is also caregiver for the other apartments on the first floor in the north wing. So when I see pendant 114 and 120 go off and clear minutes later while 110 is still waiting, I know it's deliberate! They are all assigned the same caregiver, why else would she go other pendants first when 110 went off first? This is so frustrating and I feel horrible for my resident! I know caregivers have a different experience with the residents but this one has never been problematic or rude, she is always very sweet. It is frustrating because the same pendants go off the longest! It is frustrating when residents get mad over slow response times and I can't do anything about it. Yesterday one of them lost his shit because his bridge partner wasn't brought to the bridge table until 40 minutes after he first asked for her to brought over! We asked the caregivers multiple times to bring her and it took 40 minutes! This is a resident whose pendant routinely goes off for 20-30 minutes! It's frustrating because we get in trouble if the caregivers take too long to respond and we don't notify the RCC when we aren't even in charge of the caregivers! The RCC should be monitoring response times! It frustrating when residents call the desk for help and I put it out over the walkie talkie and have no way of knowing if anyone responded unless they announce it on the walkie or the resident calls and says no one has come yet! I got chewed out by a residents boyfriend the other day because she had called the desk in the morning to ask for nurse to come check her BP because she wasn't Feeling well. I put it out over the walkie talkie. Continued on with answering phones, putting in meal orders, solving problems and monitoring pendants. 4 hours later the resident and her boyfriend come to the desk very angry, saying they had called for the nurse earlier and she never came. They basically acted personally insulted by me and blamed me. I put out the request which is all I can do. If they had just called the front desk when it got to the point they felt they had waited long enough, and told me no one had come yet, I would have contacted the med techs again and made sure they responded. Otherwise I have no way of knowing if a resident has been helped yet or not."
> — r/AssistedLiving (front desk, 176-resident AL, complete post) · ↑9 · https://www.reddit.com/r/AssistedLiving/comments/17qgqfh/staff_gets_frustrated_over_slow_pendant_responses/

> "Corporate makes all the rules-like me not being allowed to leave the desk to use the bathroom at all during my shift unless I am on my break (I don't even get all the breaks I am legally required to take ) and they require a response within 10 minutes if a pendant goes off. Our residents wear pedants and have pull cords in the bathroom. Corporate doesn't want pendants going off for more than 10 minutes but we only have 3 caregivers per shift for 150 residents."
> — r/AssistedLiving (front desk: 3 caregivers per shift for 150 residents) · ↑2 · https://www.reddit.com/r/AssistedLiving/comments/16kpfji/staffing_issues_at_dads_assisted_living/k1y0hxg/

> "I work at a Midwest nursing home with a capacity of 100-125, but census usually plateaus around high 80s (currently low 90s). We used to have a weekend warrior program (CNAs extra $5 an hour and nurses $8). Corporate apparently said that got too expensive. We never had call-ins from those who were in the program, otherwise you lost that extra for the entire weekend. I have voiced having one or two CNAs on call, paying them maybe $1.50-2.00/hr to wait by the phone. If they got called in, they got time and a half. Nope, not in the budget!"
> — r/nursinghome (nursing home staffing, 100–125 beds) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1oaj3xb/to_call_in_or_not/

> "We can usually tolerate one person calling in, but if two or more, then we're hurting. We staff by census, and not acuity btw."
> — r/nursinghome (nursing home: staff by census) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1oaj3xb/to_call_in_or_not/

> "I took over my first building at 23 before being licensed. Definitely volunteer or work in activities. It’s a nice entry into the interpersonal relationships with residents. I would say my relationships with my residents due to my background in activities helps so much! Then my background as a cna helps be a servant leader and build strong relationships with my front line staff. Message me if you have any questions!! The industry needs people interested in it!"
> — r/nursinghome (administrator who took a building at 23) · ↑5 · https://www.reddit.com/r/nursinghome/comments/1ll7ik6/career_advice_for_undergrad_who_wants_to_be_a/mzzhq5p/

> "All Brookdale cares about is getting the money. The don’t care about the staff, the residents or anything else. They could build great management teams but instead they choose to keep dead weight. Build census great! Low census, get rid of good employees. Bottom line is all that matters."
> — Indeed (Brookdale, Management) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/all-about-the-money?id=b21adc3e097a7f39

> "As Executive Director at a Brookdale community ia typical day was spent reacting to staffing shortages rather than leading. The building was woefully understaffed, so most of my time went to covering gaps, calming frustrated families, and trying to keep basic care on track."
> — Indeed (Brookdale, Executive Director, Ohio) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/toxic-culture-chronic-understaffing-and-unsupportive-upper-management?id=f7f213bf8790791f

*Implication (hypothesis, from the quotes above):* For the operator buyer the recruiting offer has to be tied to census (hire ahead of move-ins) and to the scheduler seat, which the reviews name as the job that fails first; a 'more applicants' promise alone does not answer 'we staff by census, not acuity'.
<!-- /LADDER:threads -->

## Vendor / Competitor Map (D1b) — who else sells growth to these owners

**What owners spend on (vendor ledger, docs):** Referral marketing 126 · Coaches/consultants/franchises 82 · SEO/website/GMB 33 · Lead directories (Care.com/APFM/Caring.com) 18 · Agency-management/scheduling software 18 · Recruiting/job boards 14 · Payroll/billing/EVV 12 · Caregiver training/retention 10 · Google Ads/PPC 6.

**inLeap's competitive set (the "who sells to owners" landscape):**
- **Coaches / communities:** Justin Currie (Master of Home Care, Skool), Steve "The Hurricane" Weiss (Home Care Evolution/HME), Homecare Owners Corner, Aaron Bogle, Coach Michele, HomeCarePulse/Activated Insights. *Angle: teach owners to do it themselves.*
- **Marketing agencies:** Sagapixel (SEO/PPC, "$950–4k/mo"), corecubed, generic Google Ads shops. *Angle: done-for-you channels.*
- **Lead sellers:** A Place for Mom, Care.com, Caring.com, ElderCareLink, HomeAdvisor. *Angle: buy leads (resented — non-exclusive, upfront, low convert).*
- **Franchises:** Home Instead, Visiting Angels, Comfort Keepers, Right at Home, Senior Helpers. *Angle: buy the brand + playbook for $80–150k.*
- **AI up-and-comers:** SilverCare AI and similar (the "lead-gen problem" framing in Homecare Owners Corner).

**Where inLeap wins (positioning gap):** owners are burned by (a) non-exclusive bought leads and (b) traffic that doesn't convert. The open lane = **exclusive, owned lead flow + an intake/conversion system that books assessments**, positioned against referral dependence — *and* a caregiver-recruiting engine (same ad machine already produces caregiver applicants: "I ran ads and got a ton of caregivers"). Two-in-one (clients + caregivers) is the differentiator no single competitor above bundles.

**Competitor AD-CREATIVE sweep: DEFERRED to 09-23** (Apify caps). Backfill: Meta Ad Library for Home Instead / Visiting Angels / A Place for Mom / Care.com + the coaches, ranked by longevity, with transcripts — per D1a.

---

## Vocabulary Ledger (D3) — repeated phrases (verbatim, use in copy)
Top owner phrases by distinct documents: **home care agency · home health agency · referral source · placement agent · private pay · Medicaid/Medicare · get (my first) clients · caregiver turnover · digital marketing · run ads · discharge planner · non-medical · scheduling software · working capital · vendor registration.** (Full ranked ledger: `vocab-ledger.md`.) Rule: never translate — "placement agent" stays "placement agent," "get clients" stays "get clients."

## Tab 11 — Top Quotes for Headline Testing
1. "I've become way too dependent on the placement agents that bring me clients." (↑5)
2. "I need clients so bad, I don't have one."
3. "They'll send the same lead to 50 home care agencies." (↑9)
4. "I ran ads and even though I have not gotten a single client I got a ton of caregivers."
5. "Most agencies don't have a referral problem — they have a conversion problem."
6. "$580 for 10 referrals" / "you pay whether it's successful or not, upfront."
7. "40 hours within a 5-mile radius, they stay; 20 hours with a 30-minute commute, they go to Target." (79% turnover)
8. "I started my home care company in 2019... I am very close to giving up. The only thing keeping me in the game is truly my passion." (↑6)
9. "Turns paid ads into a predictable client acquisition system."
10. "12 months ago I started with 8 hrs weekly, today we're at 95 hrs weekly." (↑25)
11. "The franchise wanted a $150 thousand franchise fee."
12. "Hospitals are the hardest referral source — 8–9 months to develop."

<!-- LADDER:freq -->
## Frequency Ranking (operator pains across the whole ladder, by distinct documents; complaint-specific patterns; corpus 7,395)
1. Licensing / accreditation / compliance / regs — 686
2. How to start / consultant / is it worth it — 513
3. Reimbursement / Medicaid / private pay rates — 468
4. Caregiver retention at scale (turnover caps growth AND valuation) — 329
5. Franchise vs independent — 320
6. Marketing: ads / digital / SEO / website — 257
7. Scheduling / software / operations / EVV — 256
8. Owner-operator treadmill (build management/systems, step back) — 227
9. Can't get clients / low census / need leads — 193
10. Licensing, the state survey, the ombudsman, deficiencies (facility side) — 191
11. Starting a facility: cost to start, existing license, administrator, partner — 182
12. Referral / placement-agent dependence — 168
13. Caregiver turnover / no-show / can't retain — 136
14. Owner burnout / wearing all hats / on-call — 129
15. Caregiver pay / wages / can't compete on pay — 124
16. Can't find / hire / recruit caregivers — 122
17. Chronic understaffing at facilities: ratios, call-ins, agency staff — 119
18. Facility economics per bed: private pay vs Medicaid, cash flow, margins — 117
19. Cash flow / payroll / making payroll — 88
20. Exit / valuation / EBITDA multiple / selling the agency — 87
21. Admissions / referral response (hospice, home health, liaison) — 81
22. Census stability & growth (predictable clients to SCALE) — 76
23. Sales / networking / building referral relationships — 71
24. Lender / funding / capital for a facility — 56
**Combined clusters:** the ladder adds the facility cluster (occupancy / census pressure, tour metrics, facility economics per bed, chronic understaffing, corporate vs family-owned, funding / lender, facility licensing and survey) on top of the home-care cluster; 'licensing' and 'how to start' lead because the RAL / adult-day / hospice starter crowd on YouTube is large — they are pre-launch, and copy for them is a different awareness level than copy for the operating owner.

**Precision (read, not assumed):** 20-hit random reads on the top three, final corpus (licensing 17/20 on topic — a CareTap software ad, a student survey and an LVN job review leaked; how-to-start 18/20; reimbursement 13/20 — bare 'profit' and 'payers' leak and that pattern should be tightened next pass) and 10-hit reads on the new ladder themes after tightening: funding/lender 7/10 (family 'no money left' leaks in), occupancy/wait list 7/10 (Medicaid-waiver wait lists from families leak in), corporate/PE 8/10 ('roll-up' in a software review, 'family owned a moving company'), understaffing 10/12. Three patterns were fixed in the pattern, not explained in prose: `SBA` matched 'husband' (now word-bounded), 'join the waitlist' (course funnels, now excluded), 'chain of command' (now facility chains only).
<!-- /LADDER:freq -->

## Tab 13 — Awareness → Offer Map (Schwartz)
- **Unaware / Problem-Aware (most):** "not enough clients," "can't keep caregivers." → **Hook:** name the referral-dependence trap + the 79% turnover leaky bucket. **Offer:** free "License-to-first-10-clients" guide / audit.
- **Solution-Aware:** "has anyone run ads / done digital marketing?" → **Hook:** "ads that book assessments, not just clicks; leads you own." **Offer:** done-with-you paid-acquisition + intake system (clients AND caregivers).
- **Product-Aware:** comparing agencies/coaches/franchises. → **Hook:** "the franchise playbook without the $150k fee; exclusive leads, not the same name sold to 50 agencies." **Offer:** inLeap growth engine + proof/case studies.
- **Most Aware:** ready to buy. → **Offer:** onboarding + guarantee framing (booked assessments / qualified caregiver applicants per month).

<!-- LADDER:ads -->
## Competitor Ads across the operator ladder (D1a + D1l, 2026-09-08)

**Ordering rules:** advertiser table by number of distinct ads then longest run; ads on the page by longevity inside their vertical group; the impressions position stated on each card is the card's rank inside its phrase's impressions-sorted Library result (the pull order). Classification (sells to operators / operator's own ad / off-topic) is rule-based on advertiser + body text, never on the keyword; a 30-ad random read of the "sells to operators" set scored 28 of 30 on topic (one Yahoo-search arbitrage ad, one caregiver co-op).

**Before → after.** Before: 19 home-care phrases, 337 raw ads, 49 advertisers, 0 corpus documents containing "occupancy". After: 97 phrases + advertiser names across all ten verticals (ADLIB_owner_side.json, ADLIB_ladder_names.json, ADLIB_ladder_phrases.json), **1,684 raw cards → 1,141 distinct ads → 211 selling to operators from 103 advertisers** (49 → 103); 339 are operators' own ads to families or job seekers (kept, tagged); 591 off-topic keyword noise dropped.

**Ads selling to operators, by vertical addressed (an ad can address several):** Home care 88 · Home health 27 · Hospice 11 · Assisted living / RAL 61 · Memory care 5 · Independent living 1 · Senior living / CCRC / SNF 27 · Adult day 1 · Placement / referral agency 10 · Multi-location medical 22 · Cross-vertical 19.

**Vince's feed (first source, D1l):** 22 advertisers screenshotted from his feed; **16 found in the Library** by advertiser-name search (the phrase searches alone found 6 of them), **6 feed-only**: Dr. Mark Stevens, Nathan Mummert, Nextdoor (Advertise on Nextdoor), Elias Benedith – Senior Care Growth Consultant (CareIntake AI), Michael Porche, (YouTube search: "home care leads"). Every one appears in the Competitor Ads tab with its source marked.

| Feed advertiser (screenshot) | Vertical addressed | Hook (OCR) | Found in the Library? |
|---|---|---|---|
| Phoebe (IMG_2782) | home care agency | Scheduling headaches holding you back? Home Care Agencies: Don't Hire Another Scheduler. We built you a better option. | yes — 9 ads, longest 209d, Ad Library (name search) |
| Dr. Mark Stevens (IMG_2786) | assisted living | Assisted living owners — quick question… Assisted Living Owners with 30+ Residents | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |
| Wisdom First Marketing (IMG_2784) | assisted living / senior living | For assisted living community operators… 6 MONTH WAIT LIST. We help you build a six month waitlist. Need more booked tours? | yes — 7 ads, longest 76d, Ad Library (name search) |
| Whatsnap.ai (IMG_2784) | marketers / operators | $40 Leads Became $9 Leads When I Deleted The Landing Page | yes — 2 ads, longest 11d, Ad Library (name search) |
| Occupancy Partners (IMG_2788) | assisted living / independent living | (video) "you know every empty unit…"; comment "What about independent living?" — "yes!" | yes — 20 ads, longest 21d, Ad Library (name search) |
| Nathan Mummert (IMG_2789) | hospice | "Some months, 90 Hospice admissions, some months, 45." Hospice Owners & Administrators trying to grow. | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |
| ureDocs (IMG_2790) | medical practices (adjacent) | Hey Doctors! I'm Sophie, an AI… 30 Patients in 30 Days with AI | yes — 5 ads, longest 7d, Ad Library (name search) |
| Home Care Breakthrough Solutions (IMG_2795) | home care agency | Home care owners — are you paying a sales rep under $10K/week in revenue results? Our system guarantees ROI or we work for free | yes — 14 ads, longest 463d, Ad Library (name search) |
| Lukrah (IMG_2791) | multi-location medical care agencies | Multi-Location Medical Care Agencies… (talking head, "consultation") | yes — 4 ads, longest 22d, Ad Library (name search) |
| Home Care Pipeline (IMG_2793) | home care agency | Home care agency owners — if you've… Take the HomeCare Assessment | yes — 2 ads, longest 71d, Ad Library (name search) |
| Mint CRO (IMG_2793) | marketers (adjacent) | Mint CRO Conversion Rate | yes — 11 ads, longest 64d, Ad Library (name search) |
| Searchlift AI (IMG_2792) | assisted living | 15 more family inquiries a month… Assisted Living Owners Get More Move-Ins From Google & AI WITHOUT ADS For $297/mo. No retainers, no ad spe | yes — 6 ads, longest 7d, Ad Library (name search) |
| Premiere Destiny Home Care Success (IMG_2798) | home care agency | If your referrals are inconsistent… Your Referrals Aren't Random, They're Broken | yes — 3 ads, longest 134d, Ad Library (name search) |
| Talroo (IMG_2799) | home care / staffing (50+ caregivers) | If you hire 50+ caregivers, CNAs, or h… How Finish'd Filled Caregiver Roles Faster | yes — 29 ads, longest 12d, Ad Library (name search) |
| Nextdoor (Advertise on Nextdoor) (IMG_2799) | local business | Most of my new clients now come straight from Nextdoor. | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |
| Elias Benedith – Senior Care Growth Consultant (CareIntake AI) (IMG_2743) | senior living directors + home care | Senior Living Directors & Home C… How CareIntake AI Works: family calls → booked appointment → reminder call/text → logs conversation & noti | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |
| Michael Porche (IMG_2746) | residential assisted living investing | I almost didn't do this because I thought I wasn't ready. No cash. No plan B. Still closed two senior care homes. I got my plan here — THE O | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |
| ClearDesk (IMG_2742) | home care owners | FOR HOME CARE OWNERS: Schedulers, recruiters, built for Home Care. HIPAA-trained, WellSky-fluent placements at $2,250–$2,500/mo all-in, abou | yes — 4 ads, longest 91d, Ad Library (name search) |
| HomecareGrow.io (IMG_2722) | home care agency ($1M+/yr) | Home care owners doing $1M+/yr… We Pay For Ads. You Get Home Care Clients | yes — 23 ads, longest 85d, Ad Library (name search) |
| Age Safe America (IMG_2722) | home safety training (adjacent) | Professional training in home safety, made simple. Equip yourself with the skills to create safer homes and support independent living. | yes — 3 ads, longest 34d, Ad Library (name search) |
| VERVE Care Partners (IMG_2741) | in-home senior care agencies | PAY PER LEAD = GET 5+ IN HOME ELDER CARE LEADS IN 7 DAYS. No ad spend. No setup fee. High-intent leads. | yes — 19 ads, longest 105d, Ad Library (name search) |
| (YouTube search: "home care leads") (IMG_2780) | coaches | Justin Currie — Secrets for Home Care Agencies; Aaron Bogle — How To Get 22 Private Pay Home Care Leads FAST (Case Study) | FEED ONLY — not findable by keyword or by advertiser name in the Library (2026-09-08) |

| Advertiser (sells to operators) | Ads | Longest run | Verticals addressed | In Vince's feed |
|---|---|---|---|---|
| HomecareGrow.io | 22 | 85d | Home care, Cross-vertical, Placement / referral agency | yes |
| AxisCare | 14 | 165d | Home care, Assisted living / RAL |  |
| Home Care Breakthrough Solutions | 10 | 183d | Home care | yes |
| Residential Assisted Living Academy | 10 | 43d | Assisted living / RAL, Senior living / CCRC / SNF |  |
| Occupancy Partners | 8 | 21d | Assisted living / RAL, Placement / referral agency, Senior living / CCRC / SNF, Cross-vertical | yes |
| Wisdom First Marketing | 6 | 76d | Assisted living / RAL, Senior living / CCRC / SNF | yes |
| Talroo | 5 | 12d | Cross-vertical, Home care, Home health | yes |
| Welton Hong | 4 | 57d | Home care |  |
| KRIBA.co | 4 | 21d | Assisted living / RAL, Memory care, Senior living / CCRC / SNF |  |
| Calhoun Bhella Hospice Lawyers | 4 | 8d | Hospice |  |
| VERVE Care Partners | 3 | 105d | Home care, Assisted living / RAL | yes |
| Sensi.AI | 3 | 35d | Home care, Senior living / CCRC / SNF |  |
| Phoebe | 3 | 30d | Home care | yes |
| Modern Business Marketing - MBM | 3 | 24d | Assisted living / RAL, Placement / referral agency |  |
| Census Home | 3 | 22d | Home care, Cross-vertical |  |
| HH Assist | 3 | 21d | Home health |  |
| Homecare 101 | 3 | 8d | Home care, Home health, Multi-location medical |  |
| 7FigureDocs | 3 | 7d | Multi-location medical, Cross-vertical | yes |
| Medbridge | 2 | 214d | Home health, Hospice |  |
| The RAL Room: Assisted Living Mastermind | 2 | 207d | Assisted living / RAL |  |
| Premiere Destiny Home Care Success | 2 | 134d | Home care | yes |
| GreenOak Accounting | 2 | 129d | Multi-location medical |  |
| Zach Pevnick, PT, DPT - Home Health Leaders | 2 | 104d | Home health |  |
| Group Home Masterminds | 2 | 103d | Assisted living / RAL, Placement / referral agency |  |
| Home Care Pipeline | 2 | 71d | Home care | yes |
| OBB - Home Care Growth | 2 | 69d | Home care |  |
| Hospice Care Owners Network | 2 | 35d | Hospice |  |
| Patheown | 2 | 17d | Home health, Hospice |  |
| Alora Home Health Software | 2 | 14d | Home health, Home care |  |
| HCPA | 2 | 13d | Home care, Home health |  |
| JT Media | 2 | 8d | Home care |  |
| Grow Your Occupancy | 2 | 6d | Senior living / CCRC / SNF |  |
| Homerun Health | 2 | 4d | Home health |  |
| Horst Construction | 1 | 1821d | Senior living / CCRC / SNF |  |
| ELITE HealthCare Consulting | 1 | 1410d | Home care, Assisted living / RAL |  |
| Assisted Living Investing | 1 | 721d | Assisted living / RAL |  |
| ABA Leaders Network | 1 | 321d | Multi-location medical |  |
| Solheim Senior Community | 1 | 300d | Assisted living / RAL, Memory care |  |
| Ksanyang Digital | 1 | 278d | Cross-vertical |  |
| Certified Homecare Consulting | 1 | 244d | Home care |  |

**Read of the field across the ladder (from the ads, hypotheses labeled):** Across the ladder the vendors sell four things: (a) occupancy / move-ins / booked tours to assisted living and senior living operators — Wisdom First ('6 MONTH WAIT LIST', '50+ facilities trust us', 30-second quiz), Occupancy Partners ('How much of your census depends on referral sources you don't own? One discharge planner moves on...'), Searchlift ('15 more family inquiries a month'), Grow Your Occupancy (sales-leader training), Rilla (mystery-shop AI for sales counselors); (b) caregiver / CNA recruiting to home care, home health and senior living — Talroo ('If you hire 50+ caregivers, CNAs, or home health aides a month, the big job boards can't keep your pipeline full'), JT Media, Hireline, ClearDesk (offshore schedulers and recruiters 'built for Home Care', HIPAA); (c) AI intake / scheduling / referral processing — Phoebe ('Don't Hire Another Scheduler'), CareIntake (feed only), Homerun Health ('intake in minutes, not days... AI agents that process referrals'), Integrated Hire ('you don't need another $90K RN'); (d) the pay-per-lead / we-pay-for-ads guarantee lane — VERVE ('5+ in-home elder care leads in 7 days, no ad spend'), HomecareGrow ('We Pay For Ads. You Get Home Care Clients', owners doing $1M+/yr), Home Care Pipeline, Premiere Destiny ('Your Referrals Aren't Random'). The starter lane is its own market: RAL Academy, Assisted Living Investing, The RAL Room, Adult Day Care Academy, hospice-license consultants, Florida ALF consulting — courses and licensing, not growth. **Gap for inLeap (hypothesis):** nobody in the 267 operator-facing ads sells one engine that fills census AND the caregiver pipeline across more than one rung; the occupancy vendors stop at AL/senior living, the recruiting vendors stop at job ads, and the pay-per-lead vendors stop at home care. The words that recur in the winners: 'empty', 'wait list', 'booked tours', 'referral sources you don't own', 'we pay for ads', 'don't hire another scheduler'.
<!-- /LADDER:ads -->

<!-- LADDER:levels -->
## Reviews by Star — the employer side (Indeed + Glassdoor) and the software vendors (TrustPilot), D1i

**How pulled:** Indeed through the research browser at human pace (3 pages per brand: default, lowest-rated, highest-rated — Indeed's bot wall closes after ~3 fast loads, so star-filter pages were not available; Indeed truncates review text at ~300 characters with a link to the full review) and Glassdoor (URL resolved through Google; the first page's 3 reviews plus the aggregate rating — page 2 is a login wall). 572 employer reviews across 11 brands. Star = the reviewer's own rating.

### Brookdale Senior Living (Senior living / CCRC / SNF) — 65 read · 1★ 28 · 2★ 5 · 3★ 5 · 4★ 4 · 5★ 23 · Glassdoor aggregate 3.1 over 5418 reviews
- **1★ (28)** — Likes: the residents, nothing else. Pains: 'meetings about meetings', every weekend, commissions paid late (Sales Manager); an Executive Director's day 'spent reacting to staffing shortages rather than leading… covering gaps, calming frustrated families'; 'Build census great! Low census, get rid of good employees'; extra charges for a room tray. Their asks: accountability, a regional that supports instead of blames, staffing before census.
  > "Zero work life balance !: Meetings about meetings every day, Toxic, unprofessional, commissions, not paid on time, expected to work every weekend -no work life balance horrible culture. HR doesnt care, even if you make your #s they will still micromanage everything , interview process misleading ...Show more" — indeed · Sales Manager · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/zero-work-life-balance?id=7a85356698bb4926
  > "Toxic culture, chronic understaffing, and unsupportive upper management: As Executive Director at a Brookdale community ia typical day was spent reacting to staffing shortages rather than leading. The building was woefully understaffed, so most of my time went to covering gaps, calming frustrated families, and trying to keep basic care on track.

I learned that even a committed...Show more" — indeed · Executive Director · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/toxic-culture-chronic-understaffing-and-unsupportive-upper-management?id=f7f213bf8790791f
- **2★ (5)** — Likes: co-workers and residents. Pains: 'the door is constantly revolving', a Business Office Coordinator whose day is 'returning calls, recruiting caregivers, payroll, checking billing and long term care insurance' — the recruiting sits with the office. Asks: structure, time off.
  > "Management ruins it: Loved my residents but the upper management ruins it for them. Anytime you get a good solid employee in, upper management ruins it and the door is constantly revolving. ...Show more" — indeed · Resident Care Coordinator · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/management-ruins-it?id=ddb013cd09906b3d
  > "dont go there: co workers are great so are the residents.. high turn over of staff and management. Hard to request time off. promotions are unlikely.

I enjoyed interacting with families and residents. A typical day: answer phones, greet visitors, escort visitors, deliver mail/packages to residents, deliver messages...Show more" — indeed · Front Desk Concierge · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/dont-go-there?id=082f53814cfaae18
- **3★ (5)** — Likes: the residents, a large activities budget. Pains: 'pretty much always short staffed', cuts to program assistants, 'schedule appts, call pcp/pharmacys… staff schedules/pto/call-outs' as the wellness director's real day. Asks: more hands, fewer cuts.
  > "Alright: Pretty much always short staffed, making it difficult to get time off. Don’t let people move around between shifts very often, will tell them that shift is full until they put in their 2 weeks then there’s magically space. Overworked and underpaid, but the staff for the most part are pleasant to work...Show more" — indeed · RA · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/alright?id=243e593bcd52e3b4
  > "Realistic view: Address concerns, speak with families about care plans/change of conditions with residents, schedule appts, call pcp/pharmacys. Enter orders, document everything. Plan and work on staff schedules/pto/call-outs. Address staff concerns. Go out to do assessments on new potentials, for your community or...Show more" — indeed · Health and Wellness Director · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/realistic-view?id=4f9d1b53a5251613
- **4★ (4)** — Likes: meaningful work, 'management takes care of employees' at some buildings. The unsold desire: 'I've never had a scheduler for more than 4 months consecutively' — the scheduler seat is the churn point. Asks: a stable scheduler and manager.
  > "Enjoyable and Meaningful: Meaningful work, management takes care of employees, some coworkers hard to work with and you can get burnt out quickly. But overall it was a wonderful place to work." — indeed · Caregiver · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/enjoyable-and-meaningful?id=748f76a52cae9446
  > "Nice facility and nice residents: I honestly really enjoyed working here and it was a great facilities. Enjoyed working with the residents and their families. Got a little hectic at times due to understaffing" — indeed · Certified Nursing Assistant (CNA) · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/nice-facility-and-nice-residents?id=402c61047d9446f6
- **5★ (23)** — Likes: the residents, a good building-level team, 'loyal to a fault'. What they praise is local (my ED, my team), never corporate.
  > "Featured review: This job was the best job I have had. I enjoyed this job very much because not only are you helping others but you feel good doing it. This job is hard work but if you put yourself to it you can make it feel like a home." — indeed · RCA/ Certified Medication Technician · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/the-best-place-to-work-at?id=42f42b08a58eecaa
  > "Brookdale is a wonderful place to work for: I just recently started here but I really like the place the people are very kind management is very helpful the hours that I get each week could improve full time should be 5 days a week instead of 4 days a week but at this point of time I seem to be able to pick up that extra day until they hire someone...Show more" — indeed · Gna · https://www.indeed.com/cmp/Brookdale-Senior-Living/reviews/brookdale-is-a-wonderful-place-to-work-for?id=c42ad5b4d7b350b5
- **Claude suggestion / what should change:** The operator-side lesson is in the 1★ and 4★ columns together: census drives staffing decisions and the scheduler turns over first. A growth engine sold to a Brookdale-type operator has to promise hiring ahead of move-ins and a stable scheduler/intake seat, or it just adds move-ins to a building that will 'get rid of good employees' at the next low-census month (feasibility aside).

### A Place for Mom (Placement / referral agency) — 62 read · 1★ 21 · 2★ 3 · 3★ 1 · 4★ 1 · 5★ 36 · Glassdoor aggregate 3.8 over 1429 reviews
- **1★ (21)** — Senior Living Advisors on the placement business from the inside: 'Management cut pay in half for bonuses… Teams are too large with not enough leads to make any money'; 'quotas came out of nowhere'; 'a highly metric-driven environment with constantly changing expectations'; 'be happy with the leads you are given'; 'You have to climb a mountain every month'; 'churn and burn'. The advisor's own ask: enough leads per advisor and a stable comp plan.
  > ": appreciated many of my early years with this company; however, over time I felt director level leadership became increasingly out of touch with the front line and how they actually operate. Promotions often seemed based more on popularity than demonstrated skill, and strong sales managers appeared limited" — indeed · Senior Learning & Development Specialist · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/reflection-of-my-time-at-apfm?id=b74fbb20910f7531
  > ": Management cut pay in half for bonuses. . Heavily micro managed. Teams are to large with not enough leads to make any money. They don't care about their employees and they treat you poorly. A" — indeed · Senior Living Advisor · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/low-pay?id=029495b4e0b9ba4e
- **2★ (3)** — 'It can be difficult when families have financial limitations that restrict their options' (Glassdoor) — the advisor steering to communities that pay; high turnover, repetitive training.
  > ": The salary is probably one of the better things about working here, but the culture leaves a lot to be desired. There are some good people who make the job easier, but the overall environment can be frustrating depending on the team and management. The pay is decent enough to keep people around, but...Show more" — indeed · Anonymous · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/salary-and-culture?id=552a2884db0824da
  > "employees feel disposable Senior living advisor Current employee, more than 1 year Roanoke: Pros: The position gives you the opportunity to make a meaningful difference in people's lives. Cons: It can be difficult when families have financial limitations that restrict their options." — glassdoor · employees feel disposable Senior living  · https://www.glassdoor.com/Reviews/A-Place-for-Mom-Reviews-E240285.htm
- **3★ (1)** — 'felt a lot of pressure to pitch places blind. Very heavy on the system of sales without as much room for the heart of helping.'
  > ": Learned a lot but went through a lot of managers and felt a lot of pressure to pitch places blind. Very heavy on the system of sales without as much room for the heart of helping." — indeed · Senior Living Advisor · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/high-pressure-quotas?id=3e0cb5304abf6053
- **4★ (1)** — one row: fair place, respectful management.
  > ": Fair enough, good place, I would recommend, great HR, respectful management" — indeed · Manager · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/overall-good?id=2aec7d45a63c2553
- **5★ (36)** — Thirty-six near-identical 'meaningful… rewarding… supportive team' reviews from 'Manager' and 'Eldercare Advisor' posted recently — the 5★ column reads as a review-prompt campaign (say so); the one specific 5★ ask: 'The hours… could have been better'.
  > ": I really enjoyed the opportunity to help families help their loved ones. The hours, however, probably could have been better. But the work was enjoyable....Show more" — indeed · Sales Representative · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/meaningful-work-helping-families?id=fd6f1cf748a6a519
  > ": Working as an Elder Care Advisor at A Place for Mom has been a genuinely wondrous experience because I get to help families during moments that can be confusing and emotional. Some conversations are difficult, especially when someone is trying to make a care decision for a parent while feeling overwhelmed...Show more" — indeed · Eldercare Advisor · https://www.indeed.com/cmp/A-Place-For-Mom/reviews/wondrous-lessons-from-meaningful-conversations?id=ae7bf666830408dd
- **Claude suggestion / what should change:** For the operator buyer this is the referral source seen from inside: APFM advisors are on quota with 'not enough leads' and pitch 'places blind', which is why operators on the ladder say the placement lead is 'the same lead sent to 50 agencies' and Five Star reports APFM move-ins under 5%. An offer that gives an operator inquiries it owns competes with this machine on the operator's side, not the advisor's.

### Atria Senior Living (Senior living / CCRC / SNF) — 59 read · 1★ 26 · 2★ 3 · 3★ 3 · 4★ 6 · 5★ 21 · Glassdoor aggregate 2.7 over 1646 reviews
- **1★ (26)** — Pains: 'All about sales. Hard work does not matter' (Manager); 10+ hour days as an office manager doing a personal assistant's job; hostile kitchens; HR that 'does absolutely nothing'. Asks: leadership that resolves, hours that exist.
  > ": worked there for nearly five years, and while I had high hopes when I joined, my experience ultimately led to disappointment and my decision to resign.

Pros:
Meaningful Relationships: I enjoyed building connections with residents and some coworkers, which made my work fulfilling on a personal level." — indeed · Hospitality Manager · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/toxic-work-environment-with-lack-of-support?id=2a3baaced5c843da
  > ": All mattered who I worked with almost everyone tells as if they are a child that part was the worst in my opinion other then that my experience was good . I learned how cool old ppl are" — indeed · Server/Waiter · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/residents-made-the-experience-good-a-few-good-co-workers?id=dfff7c8e0102ef2c
- **2★ (3)** — Pains: management 'made the work environment exhausting… walking on eggshells'; sick days punished. Asks: consistency.
  > ": The location where I worked was not great. The supervisors did not know how to handle certain situations well and the work environment was not good. Did not really care for their workers ...Show more" — indeed · MED Tech RMA · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/its-not-great?id=3ca75df583f2a269
  > ": The residents were honestly the best part of the job. I met some great coworkers too, but management made the work environment exhausting. It constantly felt like you were walking on eggshells. Communication was inconsistent, expectations seemed to change all the time, and there was a lot of gossip and" — indeed · Staff · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/i-wouldn-t-recommend?id=931babd7e247b1f0
- **3★ (3)** — Likes: good pay for servers, community feeling. Pains: favoritism; residents who 'belong in a skilled nursing facility' (LVN) — the same acuity-creep complaint as Sunrise.
  > ": I would say I loved working here, but there is a lot I mean A LOT of favoritism in this job. The residents are amazing but some definitely belong in a skilled nursing facility rather than an Assisted Living/ Independent facility in my opinion." — indeed · LVN · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/loved-working-here?id=fa8009e8a0943add
  > ": Good pay. Management just wasn’t available when needed unless something bad happened. Overall, it is a decent job. Pays the bills but you will get tired working here after a year." — indeed · Server · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/benefit-good-pay-only?id=fc0138c81962962f
- **4★ (6)** — Likes: fair compensation, room to advance, 'depending on which building you work in'. Unsold desire: benefits.
  > ": I had a positive experience working at Atria Senior Living. As a Maintenance Director, every day brought different challenges and responsibilities, from preventive maintenance and inspections to responding to emergencies and supporting residents and staff. I learned a lot about managing a large senior...Show more" — indeed · Facility Maintenance Director · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/great-experience-with-a-strong-team-and-opportunities-to-grow?id=d4e262f3d1c5fa3e
  > ": Greeted and assisted visitors, residents, and families in a friendly and professional manner.
Answered phone calls, directed inquiries, and provided general information.
Maintained an organized and welcoming front-desk environment.
Assisted with scheduling, paperwork, and basic administrative tasks." — indeed · Receptionist · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/fun-just-busy?id=62a6aef439e7fb0a
- **5★ (21)** — Likes: career advancement, paid training, reviews every 6 months with raises, laid-back managers who work with scheduling.
  > ": The 401k match could be better, but the company stands out for career advancement and career development. They give you plenty of opportunity. It's a great place to work." — indeed · Maintenance Director · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/great-place?id=cde5e9a8dd19c1a6
  > ": Everyday is different because the residents have different needs but the culture allows me to be close with my coworkers, management, and the residents. I didn’t find work too difficult but it sometimes gets overwhelming." — indeed · Medication Aide · https://www.indeed.com/cmp/Atria-Senior-Living/reviews/chill-workplace?id=101ea9fa86e00ebf
- **Claude suggestion / what should change:** Atria's 1★ 'All about sales' and 3★ 'belong in a skilled nursing facility' are the corporate-sales-quota culture the r/AssistedLiving sales manager described; the operator buyer here is regional/corporate, and copy that promises 'more move-ins' will be heard as more quota unless it promises qualified inquiries and staffing.

### Sunrise Senior Living (Assisted living / RAL) — 56 read · 1★ 20 · 2★ 4 · 3★ 1 · 4★ 4 · 5★ 27 · Glassdoor aggregate 3.4 over 3023 reviews
- **1★ (20)** — Pains: 'Overworked, underpaid, understaffed, unappreciated'; 'They bring people in that aren't qualified to be in assisted living. It becomes more of skilled nursing' (LPN) — admissions pushed past the care level to fill beds; 4 maintenance people in 2 years; no days off. Asks: staff to census, honest acuity at move-in.
  > ": Everyday was stressful which is typical with caregiving work but I had a lot of added stress with management and my coworkers. Coworkers were rude and lazy with no correction from management. There was a lot of favoritism between management and coworkers. Situations with residents were almost always" — indeed · Caregiver · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/not-a-good-company?id=c922977d80f6ddca
  > ": Stay away from this job , work load , training, inspections, staff unsaportive , you are doomed for failure , 4- maintenance personnel in 2-yrs that should tell you something, you will work hard with no rewards or recognition . If you like 200lb bags of garbage, dirty diapers falling out of bags onto...Show more" — indeed · Maintenance Coordinator · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/stay-far-away-from-this-job?id=a068ced2a595461d
- **2★ (4)** — Pains: 'always short staffed. Every single day'; AL staff pulled into memory care with no extra pay; Care Managers 'at most $3 above MINIMUM WAGE' (Glassdoor). Asks: pay that clears fast food, one job at a time.
  > ": We were always short staffed. Every single day. Was hired for an assisted living position but spent duel time in memory care as well because we had no help. No extra compensation for extra work. Was expected to bounce back and fourth all day through the community with constant micromanaging. Management" — indeed · Activities · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/burnout-and-lack-of-professionalism?id=00c914a86332b7e9
  > ": The residents were the only good thing about working at Sunrise. When you have time to actually engage with them it is very rewarding. Care managers have too much responsibility with management's expectations being unrealistic. I had seven managers in 5 1/2 years. On-floor staff turnover was also quite" — indeed · Lead Care Manager · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/overworked-and-underpaid-co-workers-challenging?id=d7bf40ea4855edc3
- **3★ (1)** — Friendly people, poor pay and benefits.
  > "Friendly people, but poor pay and benefits Activity assistant Current employee, more than : Pros: People Friendly, and get along well with some of the residents. Cons: pay, benefits, hours, environment, and career opportunities." — glassdoor · iendly people, but poor pay and benefits · https://www.glassdoor.com/Reviews/Sunrise-Senior-Living-Reviews-E6023.htm
- **4★ (4)** — Likes: 'my management and executive director were top of the line'; a culture with work/life balance. The unsold desire: an HR that does not fire on the spot ('high turnover').
  > ": Housekeeping, Santa bathrooms, vacuuming, dusting communicate with residence what else needs to be done? Kept all supplies in bathrooms needed vacuumed, rooms, hallways, cleaned bathrooms, and all supplies on carts and storage room when needed helped out in other areas when help is needed in communicate....Show more" — indeed · Housekeeper · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/3-supervisors-in-two-years-didn-t-communicate-problems-pointed-out-a-piece-of-paper-what-was-wrong-not-showing-and-dismissed-me?id=e7e1823e84a99c00
  > ": I enjoyed my time at Sunrise Senior Living. HR department had a back for firing people on the spot which I thought was unethical as well as high turnover. The Assisted Living was much more organized and sought out to be a growing community with residents needing all ranges of daily care. The Memory Care" — indeed · Care Manager · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/good-raises-and-ability-to-grow?id=0a14950a244c61ef
- **5★ (27)** — Likes: 'a place that I feel at home', purpose, training that was clear, Spanish-language gratitude for the opportunity. The 5★ is the building team, not the brand.
  > ": Absolutely a place that I feel at home. Families, Staff, Residents and head Supervisors all make this place what it is, I feel like myself and Sunrise has helped me find a purpose in what I do on a day to day basis. Appreciation is always shown. Hard days are the best days, you leave work feeling accomplished...Show mo" — indeed · Caregiver, Dishwasher, Server, Dining Ro · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/amazing-place-to-work?id=0e8a82398f858d1b
  > ": It ls not going to be easier or always good, but if you have a group of coworkers helping you it will make it way smoother, just keep the good work and eventually will be recognized" — indeed · Staff Dining Services · https://www.indeed.com/cmp/Sunrise-Senior-Living/reviews/i-really-enjoy-the-atmosphere?id=31114fedbe04c415
- **Claude suggestion / what should change:** Sunrise's own 1★ LPN names the occupancy trap ('bring people in that aren't qualified… becomes more of skilled nursing'): move-ins beyond the care level are a staffing problem next quarter. For inLeap this is a proof point that an occupancy offer must qualify inquiries by acuity, not just book tours.

### Amedisys (Home health) — 55 read · 1★ 21 · 2★ 6 · 3★ 2 · 4★ 3 · 5★ 23 · Glassdoor aggregate 3.2 over 2246 reviews
- **1★ (21)** — Pains: 'zero scheduling flexibility for patients', 'the turnover here is alarming', mileage that does not cover the driving, an Admissions Nurse expected 'to maintain a quota of patients… go on patient visits in addition to admitting patients', a hospice clinical manager 'with no say'. Asks: realistic caseloads, training, drive time counted.
  > ": I would never work here again. The corporate portion of this company is run so poorly and it trickles down. There was zero scheduling flexibility for patients, and the planning was so poor. For an RN in home health they pay on the lower end compared to competitors....Show more" — indeed · RN Hospice Case Manager · https://www.indeed.com/cmp/Amedisys/reviews/horrible-environment?id=5cfbd057954fbbd0
  > ": Normal HHC day just added stress of everytime you have a meeting watching to see who’s coming or going depending on who the top dogs like that week . ...Show more" — indeed · LPN (Licensed Practical Nurse) · https://www.indeed.com/cmp/Amedisys/reviews/you-gotta-be-in-their-click-or-they-will-find-a-way-to-get-rid-of-you?id=d7e4eb34af288c60
- **2★ (6)** — Pains: on-call and holiday admissions bundled into case management, 'as referral volume decreased… the company was reducing' (Glassdoor), post-buyout deterioration. The referral-volume line is the home-health owner's census problem seen from the nurse's side.
  > ": I loved the work itself and getting to care for end of life patients and their families, but the company itself made me uneasy. Not enough support, I felt like I was thrown into a lot of situations that I was never trained for, and the work life balance was minimal. I hope that these were just temporary" — indeed · RN Case Manager · https://www.indeed.com/cmp/Amedisys/reviews/not-enough-support?id=e061973d73cc0400
  > ": The answers to those questions depend on which office and which Director you work under. Some are horrible people and some were great to work with. The workload with all the daily conference calls were hard to get everything done." — indeed · RN-Clinical Manager/Field RN · https://www.indeed.com/cmp/Amedisys/reviews/the-day-would-be-great-until-certain-upper-management-came-that-did-nothing-but-micromanage-in-a-negative-manner?id=35d9bcd05884e51b
- **3★ (2)** — Pains: PPV documentation-heavy visits, micromanagement, no raises 'due to UHC buyout'.
  > ": Pay is decent, PPV model with high point values. Mostly doing documentation heavy visits with follow up visits going to physical therapy assistants. Management is strict, often trying to micromanage and threaten with random audits and it lead to a toxic workplace. They used HCHB for EMR which is not" — indeed · Physical Therapist · https://www.indeed.com/cmp/Amedisys/reviews/micromanagement-culture-decent-pay?id=f741887e388ad6a7
  > "Caring office culture hindered by upper management's secrecy Front office staff Current em: Pros: Pay is decent although no raises this year due to UHC buyout. Office staff works well together and we do care about each other. Clinical Managers are very smart and very approachable. Office is flexible about medical and other appointments we have to make for ourselves. Cons: Amedisys upper management is a slave " — glassdoor · e hindered by upper management's secrecy · https://www.glassdoor.com/Reviews/Amedisys-Reviews-E5124.htm
- **4★ (3)** — Likes: flexibility for parents, autonomy. The unsold desire in one sentence: 'census can be super low at times which means you don't get paid since it's PPV… usually a high turnover rate'.
  > ": Job is busy some days, other times it can be slow. Involves a lot of sitting and office work. But if you like your coworkers it can be an enjoyable experience" — indeed · Clinical Manager · https://www.indeed.com/cmp/Amedisys/reviews/great-stable-job?id=3b9a9826d0f00966
  > ": Good work/ life balance. Good opportunity for people who wanna work but have kids. As long as meet productivity can for the most part see as many patients as you like. When people are off you can get an overwhelming amount of patients" — indeed · RN Case Manager Home Health · https://www.indeed.com/cmp/Amedisys/reviews/good-work-life-balance?id=2e73bc6271377c9e
- **5★ (23)** — Likes: autonomy with support, a manager 'always available', 'people above profits' at the regional level, honest onboarding.
  > ": The Knoxville home health office offers lots of autonomy with readily available support when needed. My manger is supportive and always available when needed. The hard work that home health requires is compensated well." — indeed · Registered Nurse (RN) · https://www.indeed.com/cmp/Amedisys/reviews/best-team-for-home-health-in-knoxville?id=50dd7bf63fe5a433
  > ": I was given the expectations and job description before I agreed to my role and sign my job description, since then there was a time I was second guessing myself; as learning new things can be challenging and it is easier to do something you know… I stuck in the was able to lean on my team and we are" — indeed · RN Case Manager · https://www.indeed.com/cmp/Amedisys/reviews/loyalty?id=52d1caa86e3955d9
- **Claude suggestion / what should change:** Home health pays clinicians per visit, so low census is a pay cut and turnover follows; the admissions nurse under a patient quota is the intake bottleneck the trade press measures (referral acceptance under 35%). An intake/admissions offer to a home-health operator lands on both the census and the retention pain at once.

### LHC Group (Home health) — 55 read · 1★ 21 · 2★ 6 · 3★ 4 · 4★ 2 · 5★ 22 · Glassdoor aggregate 3.5 over 2111 reviews
- **1★ (21)** — Note: LHC's Indeed page is merged into Optum after the UHC acquisition; most rows are Optum call-center and corporate staff. The home-health rows: 'discouraging to go to work every day to try to drive growth and be told no' (Account Executive), disorganized leadership, low pay.
  > ": Toxic and Disorganized leadership. Low pay. Work life balance non existent. Quick to blame their own mistakes to others. ....Show more" — indeed · Anyonymous Employee · https://www.indeed.com/cmp/Optum/reviews/toxic-management-run?id=5107fb574b631530
  > ": Each location runs differently but the particular office I was employed at didn’t have any culture or engagement with employees. It was discouraging to go to work every day to try to drive growth and be told no that the clinical leader didn’t want to accept. Often staffing was used as an excuse and instead" — indeed · Account Executive · https://www.indeed.com/cmp/Optum/reviews/isolating-and-just-a-number?id=24c9a7fa51b78b7c
- **2★ (6)** — Pains: 60–70 hour weeks in finance, layoffs by a muted Teams call, 'metrics and numbers'.
  > ": Hired as a Finance Director.
Very excited to join the organization.
Worklife is very poor. You will end up working 60-70 hours a week, on duplicative work. There’s no way around it. Every level of executives what a different month end package. ...Show more" — indeed · Associate Director of Finance · https://www.indeed.com/cmp/Optum/reviews/great-company-poor-worklife?id=bd48175d8c8c9db6
  > ": You're brought in with the hope of being able to make a positive change to the healthcare system, but soon realize everything is all about the bottom line (money) and not the customers. My coworkers were great, but management was terrible. There were constant reorgs and layoffs." — indeed · UX Engineer · https://www.indeed.com/cmp/Optum/reviews/constant-re-orgs-bad-management?id=e3234f674ce97dd6
- **3★ (4)** — Likes: branch leadership, coworkers. Pains: 'Senior Leadership not in touch with branch workings', pressure on productivity.
  > ": When I left, many other were clinicians were leaving. Like many companies, the focus is on profit and not appreciating employees. It does not take much effort to show appreciation to your employees. There were too many managers and too few clinicians. Disappointing." — indeed · Physician · https://www.indeed.com/cmp/Optum/reviews/too-many-managers?id=3d40cbc57ad77839
  > ": Workload here is manageable and decent work life balance. However pay is laughable, especially for anyone hired before COVID. Key issues stem with senior leaders embodied by Peter principle to your left and right." — indeed · Sr Manager Data Engineering · https://www.indeed.com/cmp/Optum/reviews/balanced-workload?id=f9a32b700255e0da
- **4★ (2)** — Thin; not home-health specific.
  > ": I'm fortunate to have a career I enjoy. Over my 36 years working in healthcare, this position has been my favorite.
I feel I contribute to community wellness and they my actions are recognized. ...Show more" — indeed · Registered Sleep Technologist · https://www.indeed.com/cmp/Optum/reviews/i-ve-enjoyed-my-time-here?id=14bec8f6f189603e
  > ": So when I was there, they SECRETLY did a lateral move around within the company while doing MY daily job I was pulled into a group teams call and was informed because I had such a "happy bubbly personality" that I was being moved from the payment posting team to a new CSR team whether I liked it or not." — indeed · Payment Rep · https://www.indeed.com/cmp/Optum/reviews/kind-of-focused-on-what-you-cant-do-vs-what-you-can?id=f86369c017023558
- **5★ (22)** — Likes (home health rows): 'Best Home Health Agency to work for… work family', 24/7 telephone triage, rural home-bound care with an easy manager.
  > ": Trabajaba atendiendo proveedores, suplidores y asegurados en los Estados Unidos de dierentes companias de seguro, Hospitales, medicos y asegurados. Aprendi a Navegar unos 22 programas de computador. La gerencia es muy comprensiva y estimulante. La gerencia y cultura es inclusiva y muy directa. Lo mas" — indeed · Supervisor Birla Ramos Service Advocate  · https://www.indeed.com/cmp/Optum/reviews/service-advocate?id=4aa304ad7971e816
  > ": Providing care for rural home bound patients. Coordination of various disciplines.
Has 24/7 telephone triage dedicated staff.
Management is easy to work with.
A lot of patient / caregiver teaching in mostly English and/or Spanish.
Medical chart reviews.
Hardest part is sometimes the oncall weekends." — indeed · Registered Nurse (RN) · https://www.indeed.com/cmp/Optum/reviews/flexible?id=4b0beaac82e81019
- **Claude suggestion / what should change:** Read LHC as 'branch good, corporate far away': the growth AE told no is the operator-side signal that at a consolidated agency the buyer of growth is the branch/regional, and the objection is corporate approval, not need.

### VITAS Healthcare (Hospice) — 53 read · 1★ 20 · 2★ 2 · 3★ 4 · 4★ 4 · 5★ 23 · Glassdoor aggregate 3.5 over 1622 reviews
- **1★ (20)** — Pains: 'hamster wheel effect without work/life balance', IDG meetings without structure, one social worker per team for all patients, 'patient loads too high', a call center that writes you up for a power cut. Asks: manageable caseloads, a documentation system, managers who are clinicians.
  > ": Unprofessional work environment. Hamster wheel effect without work/life balance. IDG meetings without structure. Disregard for the social work profession and workflow. Unsupportive management. They rather have you wondering than give you directions. Medicare guidelines ignored, for example restrictions" — indeed · Medical Social Worker · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/unethical-unprofessional-practices-no-work-life-balance?id=cc4dff851bf07c2b
  > ": At the team's level, social workers are not supported and represented equally by team managers. One social worker per team managing all patients from the team. Nurses and Team Managers unrealistic expectations constantly interrupting social worker's work flow. Nurses expect to visit their patients 5" — indeed · Social Worker · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/unprofessional-work-environment?id=de0ea6c2180c128e
- **2★ (2)** — 'nurse case loads are unmanageable… Poor documentation system. Pay is low for the work expected.'
  > ": The work is rewarding but nurse case loads are unmanageable. Management is unreasonable when their expectations can't be met. Poor documentation system. Pay is low for the work expected." — indeed · RN Staff Nurse · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/rewarding-work-understaffed-and-unappreciated?id=9f8e1eb602a85436
  > ": I worked there in 2021 as a medical records clerk. The training was poor also the other staff members in the department was cliqued up together. I quit after 1-2 weeks." — indeed · Medical Records Clerk · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/unorganized-clique-ish-and-poor-training?id=369d738b11f3332b
- **3★ (4)** — 'My day would start with urgent phone calls at 8am… My schedule was always interrupted'; Community Outreach & Sales: 'With each change of management came a new direction of focus… inconsistent in their messaging to representatives' — the liaison's own account of a hospice sales team without a stable playbook.
  > ": It's possible to get stuff done here, however responsibilities for jobs are constantly shifting. Additionally, management is very quick in shifting the blame to others." — indeed · Medicare/Medicaid Specialist · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/productive-workplace-questionable-management?id=33c90ede6ec169fa
  > ": My day would start with urgent phone calls at 8am before I could have a chance to check emails and set my visits for the day. My schedule was always interrupted. Benefits were pretty good and my managers were okay. I just feel that my version of work/life balance was not the same as theirs." — indeed · Hospice Nurse Case Manager · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/an-okay-place-to-work-the-workload-was-not-for-me?id=43ca752cf59c9efd
- **4★ (4)** — Likes: mission, learning, cross-training. Unsold desires: 'you have to work every weekend' even part-time; 'very lean in all Central Support roles'.
  > ": Good staff. Fast paced but pay could be better. Learned a lot here and met a lot of great people along the way. Annual raises are nothing you can live off of." — indeed · Medical Supply Specialist · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/a-good-stepping-stone?id=d7c7e65a55a3bd94
  > ": Great place to work but the schedule sucks honestly. You have to work a set schedule and you have to work every weekend. Even if your work part time you still are required to work every weekend. Besides the schedule this was a great place to work. Pay is decent and co-workers were nice." — indeed · Triage Nurse · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/schedule-sucks?id=3b7ef6af0970dcbd
- **5★ (23)** — Likes: 'one of the greatest companies in terms of hospice care', education, benefits, 'emotional and spiritual support for its staff', supportive direct supervision for an Admission Nurse.
  > ": What is the best part of working at the company?
Vitas is one of the greatest companies in terms of hospice care in the US

What is the most stressful part about working at the company?
There is no stress about working at Vitas Healthcare

What is the work environment and culture like at the company?...Show more" — indeed · CNA Hospice Care · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/great-experience-at-vitas-healthcare?id=75cc530c186e5a6f
  > ": VITAS Hospice fosters professionalism, teamwork, and continuous growth through ongoing education, excellent benefits, and emotional and spiritual support for its staff. I had the opportunity to provide compassionate hospice care, supporting patients and their families, managing symptoms, coordinating" — indeed · Registered Nurse · https://www.indeed.com/cmp/Vitas-Healthcare/reviews/i-m-registered-nurse?id=f160bc609ed8bf7c
- **Claude suggestion / what should change:** The hospice operator's growth lever in these reviews is the admissions/liaison layer: the 3★ sales rep describes messaging that changes with every manager, the 1★ nurses describe caseloads that cannot absorb more admissions. A hospice growth offer that adds admissions without adding intake/caseload capacity lands in the 1★ column (hypothesis from the reviews).

### Home Instead (Home care) — 52 read · 1★ 22 · 2★ 3 · 3★ 1 · 4★ 4 · 5★ 22 · Glassdoor aggregate 3.3 over 3508 reviews
- **1★ (22)** — Pains: '$50 for background check… THE salary is low', 'the owners absolutely do not value good employees', no raises, 'rude office staff, no support', an office with 'extremely high staff turnover and low morale' (Office Staff). Asks: pay, training, an office that answers.
  > ": They make you pay$ 50 for background check .That tells you how cheap they are.They can write that off on taxes..THE salary is low and you won't be able to live off that.Jobs are too far away. Duties are all the same regardless of job title. Expect you to be available 24/7.Paid every 2 weeks." — indeed · CNA/Caregiver · https://www.indeed.com/cmp/Home-Instead/reviews/make-you-pay-for-own-background-check?id=d341b7cd120db8e6
  > ": The families i worked with were almost always Great, but the management is terrible. Employees never get heard or seen, get a bunch of responsibilities dumped on them with no communication and the pay is terrible. Would recommend stay as far from this company as u can." — indeed · In Home Caregiver · https://www.indeed.com/cmp/Home-Instead/reviews/terrible-managment?id=c3c4b3dadf6dd540
- **2★ (3)** — 'your schedule will change ALL THE TIME', 'scheduling is a mess, always asked to cover for clients when another PCA calls out', 'heading down the tunnel of Ai'.
  > ": I learned a lot and was also mistreated. Clients who were a threat were not addressed, and your schedule will change ALL THE TIME. So be prepared to not have a life outside of here. Also,if you're sick,too bad. Kids have a game ? Too bad. No reason is good. Just keep working and filling their pockets" — indeed · Caregiver · https://www.indeed.com/cmp/Home-Instead/reviews/prepare-to-travel?id=7cc14eda3ed3b508
  > "It’s a job Anonymous employee Former employee, less than 1 year Aug 29, 2026 Recommend CEO: Pros: The clients are the best part of your day. Cons: Poor communication and heading down the tunnel of Ai" — glassdoor · It’s a job Anonymous employee  · https://www.glassdoor.com/Reviews/Home-Instead-Reviews-E592979.htm
- **3★ (1)** — 'I have to call every week to verify if I'm getting full time hours' — the hours problem from the caregiver's side.
  > ": My schedule was charged without proper notice. I don’t have a consistent schedule. I have to call every week to verify if I’m getting full time hours ...Show more" — indeed · CNA - Certified Nursing Assistant · https://www.indeed.com/cmp/Home-Instead/reviews/schedule?id=0926fef0bb190818
- **4★ (4)** — 'Each Home Instead franchise is independently owned so I can only speak to mine' — the reviewer names the franchise structure; 'They will tell you their clients write their paychecks'. Unsold desire: consistent hours and a supportive local office.
  > ": Home Instead doesnt.support their caregivers
They will tell you their clients write their paychecks so no reason to complain about issues you may have with clients....Show more" — indeed · Caregiver · https://www.indeed.com/cmp/Home-Instead/reviews/home-instead-the-good-and-bad?id=a81e0509fe48f6dd
  > ": Each Home Instead franchise is independently owned so I can only speak to mine but I always felt very supported by my bosses and the work was very emotionally fulfilling." — indeed · Personal Care Assistant · https://www.indeed.com/cmp/Home-Instead/reviews/supportive-office-staff-and-very-rewarding?id=f1e558e2b3ea7ef8
- **5★ (22)** — Likes: 'Your potential for growth is limitless' (Service Coordinator → GM), 'I can accept or decline clients. Plenty of hours available', 'health insurance plan is one of the best', days off when requested early, parties and awards. The 5★ names the local office team, the 1★ names 'the owners'.
  > ": Your potential for growth is limitless. I started as the Service Coordinator and have grown to the General Manager role. The company and culture are growing and improving with the help of an amazing team." — indeed · General Manager · https://www.indeed.com/cmp/Home-Instead/reviews/career-growth-is-amazing?id=bb7bc0dec9a2ee13
  > ": I love BHC3 and Home Instead! Wonderful company with a great mission, vision and supportive environment. This company also has great opportunities for leadership development & community involvement!" — indeed · General Manager · https://www.indeed.com/cmp/Home-Instead/reviews/amazing-work-place?id=ce222cf537742deb
- **Claude suggestion / what should change:** Home Instead's columns are the franchise map: the same brand is 1★ or 5★ depending on the owner. For inLeap the independent owner's recruiting pitch competes with a franchise office that can offer 'plenty of hours' — hours, not applicants, are what the 3★ and 4★ caregivers ask for, which is a scheduling-density problem, i.e., a census problem.

### BrightStar Care (Home care) — 50 read · 1★ 22 · 2★ 1 · 3★ 3 · 4★ 4 · 5★ 20 · Glassdoor aggregate 3.2 over 1299 reviews
- **1★ (22)** — Pains: 'onboard you same day after cold calling you… one day of training and then be sent on your way', an RN whose 'IV job' is care plans for LTC-insurance clients, a Recruiter: 'the franchise was very out of touch with corporate process', a Community Liaison: 'the goal posts change on a daily basis', 'communication and scheduling were inconsistent… limited transparency around shifts and raises'.
  > ": It is not an IV job. Its a careplan making job that occasionally has iv clients. You go to peoples houses that have long-term care insurance that need caregivers and you make a care plan for the caregiver to fulfill. You have to do a reassessment every three months as well as a supervisor visit and supervisor...Show mo" — indeed · Registered Nurse · https://www.indeed.com/cmp/Brightstar-Care/reviews/poor-communication?id=27671a5e1e9d071e
  > ": I was a bit surprised and disappointed at the experience I had. The franchise was very out of touch with "corporate" process and culture, which was frustrating because they would likely have had more success had they adopted some of that strategy. Very reluctant to bring their IT game up to speed, invest" — indeed · Recruiter · https://www.indeed.com/cmp/Brightstar-Care/reviews/caveat-emptor?id=2fc16ade758cdf4d
- **2★ (1)** — pay and flexibility good, manager kind, workload manageable.
  > ": What is the best part of working at the company?
The best part of working here was the pay and the flexibility. Trinia was also kind and pleasant to work with. The workload was manageable, although there were limited opportunities for overtime.

What is the most stressful part about working at the company?" — indeed · Registered Nurse (RN) · https://www.indeed.com/cmp/Brightstar-Care/reviews/disorganized-management-and-poor-communication-made-the-experience-more-stressful-than-it-needed-to-be?id=705950e9be0f4850
- **3★ (3)** — 'They had a high overturn rate. Never knew who I was to ask' (office staff turnover); random patients and locations all over the valley.
  > ": It was really great for a first job just being a great attitude and a bright smile and be open to listening to what they are asking and be a genuine" — indeed · Inventory Associate · https://www.indeed.com/cmp/Brightstar-Care/reviews/cool-i-guess?id=2bfcb5bee09e66ed
  > ": It truly does depend on what you're looking for. My issue was with the office staff. They had a high overturn rate. Never knew who I was to ask or speak to regarding patient information. I was there for less than six months and I had about 3-4 different supervisors." — indeed · PDN · https://www.indeed.com/cmp/Brightstar-Care/reviews/decent?id=245d4c75dc6901e8
- **4★ (4)** — Likes: flexibility, 'always shifts to cover so getting hours is not a problem', owners who care. Unsold desire: 'They try hard to match you with a long term client… No one checks to see if they are doing their job correctly'.
  > ": This job is what you make of it. There are always new cases and clients you can take on, depending on your availability and the hours you need. Pay is on par with the field, but here in SoCal, it's barely a living income." — indeed · Caregiver · https://www.indeed.com/cmp/Brightstar-Care/reviews/decent-hours-if-you-want-them?id=dd7b66ca78899667
  > ": Super flexible workplace and always shifts to cover so getting hours is not a problem. Clients and families are always welcoming and understanding of being new." — indeed · CNA - Certified Nursing Assistant · https://www.indeed.com/cmp/Brightstar-Care/reviews/flexible-and-reliable?id=b3b32001eea7355e
- **5★ (20)** — Likes: 'you could choose your hours around your family time. You always have a back up', office support for scheduling and training, a Sr. Recruiter's day 'sourcing and screening candidates… managing the owner's schedule', a Branch Manager: 'treat every employee… as if that employee is the first customer'.
  > ": Great company great hours you could choose your hours around your family time. You always have a back up if you need to go. The managers help you out and make sure you have everything you need for the job. They help when you need it....Show more" — indeed · Home Health Aide · https://www.indeed.com/cmp/Brightstar-Care/reviews/great-company?id=b3d72c52c485549c
  > ": Working for brightstar isn't bad it just hard to get the hours. But the office staff gave great support for scheduling needs, training and the do make sure your comfortable with the system they have" — indeed · CNA - Certified Nursing Assistant · https://www.indeed.com/cmp/Brightstar-Care/reviews/cna?id=4ebe34b426d82069
- **Claude suggestion / what should change:** BrightStar's 1★ liaison and recruiter describe the two seats an owner outsources first (business development and recruiting) turning over because targets move daily; the 5★ recruiter is doing the owner's calendar. The operator buyer's hiring pain here is process, not applicant volume — a recruiting offer sold as 'more applicants' answers the wrong review.

### Silverado (Memory care) — 39 read · 1★ 12 · 2★ 5 · 3★ 3 · 4★ 10 · 5★ 9 · Glassdoor aggregate 4 over 540 reviews
- **1★ (12)** — Pains: 'Understaffed. Often 20/1 ratio. Sometimes 40/1 or MORE!' (Caregiver), hostility and favoritism, 'Great place to work surveys are HEAVILY…' (an activities assistant on the review-prompt culture), uniform rules over care. Asks: ratios, consistency.
  > ": Toxic and hostile work environment. No room for career growth. Management does not care about its employees, but they do clearly show favoritism for the workers they do relatively care about. Too much for little pay." — indeed · CNA - Certified Nursing Assistant · https://www.indeed.com/cmp/Silverado/reviews/terrible-place-to-work?id=3968f2ee9002f8e6
  > ": Number 1 you cant work unless you have a dry clean uniform a small wrinkle is not an acceptation they will never tolerate it there gonna make you endure working there they add new rules for you as you keep on working it becomes a trap the more your there" — indeed · Server & Food Runner · https://www.indeed.com/cmp/Silverado/reviews/quit-as-soon-as-you-can?id=50d1c01cc03471b9
- **2★ (5)** — Liaison: 'Sales management is out of touch with market, unrealistic expectations caused by major communication delays. Great support from admin and nursing' — the memory-care sales seat under quota again; a leadership team 'all brand new'.
  > ": Micromanagement and zero work life balance. Sales management is out of touch with market, unrealistic expectations caused by major communication delays. Great support from admin and nursing staff. Low job security." — indeed · Liaison · https://www.indeed.com/cmp/Silverado/reviews/poor-upper-management?id=ed40433143d02546
  > ": Fair pay and good benefits with flexible work hours and schedules and promotions are wanted and pushed for and people are helpful and understanding
." — indeed · Volunteer · https://www.indeed.com/cmp/Silverado/reviews/fun?id=36dd3f64322d59ff
- **3★ (3)** — 'standard expectations… job responsibilities were clear'; caregivers 'territorial'.
  > ": Must be patient and willing to learn. “Decent place to work with standard expectations. Management and coworkers were fine, and the job responsibilities were clear and consistent." — indeed · CNA - Certified Nursing Assistant · https://www.indeed.com/cmp/Silverado/reviews/good-learning?id=7c9660a0520f548f
  > ": No tengo mucho que decir solo que gracias y pues que seguir con nuestras caminos" — indeed · Cocinero de linea · https://www.indeed.com/cmp/Silverado/reviews/gracias?id=34b224276b696517
- **4★ (10)** — Likes: 'Best assisted/memory care facility I've ever worked in… the hospice team is amazing' (new-grad LVN), flexible 4-hour shifts, managers who care. Unsold desire: 'Resigned due to new management' — stability.
  > ": Overall experience was great especially as a new grad nurse! Best assisted/memory care facility I’ve ever worked in. The hospice team is amazing and the med techs and CNAs are awesome." — indeed · Charge Nurse LVN · https://www.indeed.com/cmp/Silverado/reviews/beautiful-memory-care-facility?id=7dadba893bcb2600
  > ": Very chill workplace, nice managers and also very flexible shifts. Often 4 hour increments but allow double shifts when needed. Most of the time the managers will give you free food." — indeed · Food Runner · https://www.indeed.com/cmp/Silverado/reviews/productive-and-fun-workplace?id=5b721ead5072bbd7
- **5★ (9)** — Likes: the care model, regional support, a Family Ambassador: 'Sales can be difficult, but when you believe in the company… it can be the best'; a Wellness Nurse: 'some higher acuity residents get admitted that shouldn't' — the acuity-creep note appears even in a 5★.
  > ": Worked with my schedule and over all was welcoming I enjoyed the residents that lived there and my coworkers in the engagements department . Most enjoyable part of the job was making a difference in people’s lives." — indeed · Receptionist · https://www.indeed.com/cmp/Silverado/reviews/good-company?id=dc26123d6d08fe2a
  > ": What first drew me to Silverado was their model of care that they provide to their residents. The work culture is excellent and the support from Regionals is exceptional! They really invest in their employees and give every resource to be successful. They recognize and promote within the company and" — indeed · DHS · https://www.indeed.com/cmp/Silverado/reviews/exemplary-model-of-care-and-support-system?id=481b4466f88e2158
- **Claude suggestion / what should change:** Memory care's employer reviews repeat the senior-living pattern (sales seat under pressure, acuity creep at admission, ratios) with a memory-care-specific number: 20:1 to 40:1. An occupancy offer to a memory-care operator must carry the acuity qualification, or the 5★ nurse's 'admitted that shouldn't' becomes the 1★ caregiver's ratio.

### SarahCare Adult Day Services (Adult day) — 26 read · 1★ 5 · 2★ 4 · 3★ 6 · 4★ 1 · 5★ 10 · Glassdoor aggregate 2.5 over 13 reviews
- **1★ (5)** — 'This company needs an extreme renovation. The idea is great but it is being executed poorly' (a mechanic at the Dallas center).
  > ": This company needs an extreme renovation. The idea is great but it is being executed poorly. The only thing that makes it worth it is the appreciation from the participants. ...Show more" — indeed · Mechanic · https://www.indeed.com/cmp/Sarahcare/reviews/not-for-me?id=cf8c6f06e43182ba
  > ": Long day for below average pay, not enough staff members for acuity level of clients. Very little appreciation of staff members by the owner. Lack of staff training." — indeed · Staff · https://www.indeed.com/cmp/Sarahcare/reviews/low-pay?id=9a6983fe5534c277
- **2★ (4)** — an HHA pleased with pay and benefits.
  > ": at sarahcare I was very please the with the compensation and benefits of the jobs. I established and cultivated a great relationship with my clients. maintaining a health living environment for my client." — indeed · Home Health Aide · https://www.indeed.com/cmp/Sarahcare/reviews/compensation-and-benifits-were-good?id=e430232754a568f6
  > ": I was the field supervisor and I made my own schedule but no one knew where I would be at during the day. It seemed they did not care, just wanted their paperwork signed. Some people and their homes were unsafe for me and the clients." — indeed · Registered Nurse Supervisor · https://www.indeed.com/cmp/Sarahcare/reviews/unsafe?id=5e22acb294dfd9b8
- **3★ (6)** — a summer-program worker, fair treatment.
  > ": I Didn't Really Work Here Long Enough To Give A Review. This Was Just A Summer Job Through A Summer Program. But While I Was Working Here I Did Get Treated Fairly Well." — indeed · Kitchen Crew/Participant Helper · https://www.indeed.com/cmp/Sarahcare/reviews/fair-working-enviornment?id=27cde9f118843f16
  > ": It’s a alright company . the company works with you it’s has 2 parts to the company. You have to request for overtime. If you have a client that gets 30 hrs they won’t let you get another client to make your hours be 40 ." — indeed · Home Health Care Aide (HHA) · https://www.indeed.com/cmp/Sarahcare/reviews/it-s-nice?id=1f69fee673d615dc
- **4★ (1)** — (read: see raw/reading/employer)
  > ": very professional nice staff and eventhough I dont work in the office it still gives me the opportunity to meet new people and that experience alone makes me appreciate my job even more." — indeed · Home Health Aide · https://www.indeed.com/cmp/Sarahcare/reviews/working-for-sarahcare?id=4b90317cb0150149
- **5★ (10)** — van drivers and an activities assistant: 'bring joy and purpose to the elderly within a fun atmosphere', 'AND IF you see the need for change…' — the adult-day center's staff are drivers, kitchen and activities, not CNAs; the hiring pain is a different labor pool.
  > ": I love being able to intermingle with the participants. Staff are caring and nurturing. We make sure to involve each and every participant. Sometimes it requires one on one support. ...Show more" — indeed · Van Driver · https://www.indeed.com/cmp/Sarahcare/reviews/fun-place-to-work-participants-are-great-in-joining-in-on-fun-activities?id=0211ddbe27f1208b
  > ": WORKING FOR Sarah Care is rewarding because of the ability to bring joy and purpose to the elderly within a fun atmosphere. AND IF you see the need for change or improvement management listens with a positive ear....Show more" — indeed · Van Driver · https://www.indeed.com/cmp/Sarahcare/reviews/rewarding?id=a078e8edc2ff5130
- **Claude suggestion / what should change:** 26 rows across ~10 franchised centers; the adult-day operator's staffing problem is drivers and activities staff plus transport, which the caregiver-recruiting vendors in the Ad Library do not address (gap, hypothesis).

### AlayaCare (software vendor, TrustPilot) — 1 read · 1★ 1 · 2★ 0 · 3★ 0 · 4★ 0 · 5★ 0 · site score 3.2 over 1 reviews
- **1★ (1)** — a single, itemised 1★: 'Cannot Produce Compliant, Consolidated Invoices… cannot combine billed care hours' (documented non-conformities).
  > "Documented System Limitations and Non-Conformities in AlayaCareSummary: Summary: What AlayaCare Cannot Do (Based on Actual Use and Evidence)
1. Cannot Produce Compliant, Consolidated Invoices:
-Cannot combine billed care hours and pass-through expenses (e.g., accommodation, travel) on a single, client-ready invoice.
-Forces manual invoice splitting, reconciliation, and external workarounds" — TrustPilot · https://www.trustpilot.com/reviews/69651c2c4362909a33101767
- **Claude suggestion / what should change:** one review; not enough to synthesize beyond 'billing/invoicing is where agency software fails owners'.

### ClearCare Online (software vendor, TrustPilot) — 71 read · 1★ 16 · 2★ 7 · 3★ 1 · 4★ 7 · 5★ 40 · site score 1.6 over 73 reviews
- **1★ (16)** — (2021–2026, the WellSky era) 'WellSky system is falling apart… invoices and payments frequently stuck in the export queue… SUPER SLOW'; passwords that never work; a caregiver app that 'doesnt work properly' so clients' phones are used to clock in; 'they will take your money… try Axiscare or Sandata'. One 1★ is a misplaced product review (waterproofing) and was ignored.
  > "System Falling Apart: WellSky system is falling apart. 
On the accounting side:

1. Invoices and payments are frequently "stuck" in the export queue. 

2. This week and last week, invoices were emailed out multiple times to the same recipients or in some cases none at all. 

3. The system is often times SUPER SLOW just to process minor task" — TrustPilot · https://www.trustpilot.com/reviews/69b1dc9b54dc314d0edd592b
  > "Absolutely rubbish: Absolutely rubbish, password changes never work, takes far to long to load anything. Way too much details have to be processed before you get anywhere. More than anything, it it a nightmare to use and very frustrating in all. Who ever runs the programming of this system needs to simplify it, it is far too complicated a" — TrustPilot · https://www.trustpilot.com/reviews/67c0fc65334d5c3af2c60676
- **2★ (7)** — 'when we do payroll or billing the system does not always calculate the math correctly' (10-year user); reduced My-Task functionality; a crash on New Year's Eve with the office closed and 'no backup plan'; 'not robust enough to support an agency that does over $5M'; 'terrible reporting… if you care about tracking your Sales Reps'.
  > "Computers Don't Make Mathmatecial Errors: I have been using WellSky for going on 10 years.  Overall the systems works fairly good until you have an issue, Customer Support is lacking.  The biggest complaint that I have is when we do payroll or billing the system does not always calculate the math correctly.  It has the number of hours worked or billed and the " — TrustPilot · https://www.trustpilot.com/reviews/6a064134525eadd3329983ed
  > "ClearCare impacting efficiency with reducing functionality: ClearCare, as a company, recently made changes and reduced the "My Task" functionality. This prevents users from independently viewing and managing their delegated tasks. The company reduced the ability to work independently and efficiently.  We now have to review "every task for all employees (pages) to "find" individ" — TrustPilot · https://www.trustpilot.com/reviews/601068f6679d9701d079688f
- **3★ (1)** — one review, mixed.
  > "Relatively intuitive platform for…: Relatively intuitive platform for caregiver management. Can be difficult to use or slow at times" — TrustPilot · https://www.trustpilot.com/reviews/5dd465bac845450a34ec364a
- **4★ (7)** — (2015) 'Makes running our company a snap', 'opened up time for us to focus on growing the business'; the asks then: match applicants to clients before conversion (Carefinder), reporting.
  > "Very Efficient: Clear Care is a very efficient tool for scheduling, tracking, and communicating with caregivers. They are constantly working on improvements and expansions which is much appreciated. The user interface is very easy to learn for everyone with access." — TrustPilot · https://www.trustpilot.com/reviews/5512d0c50000ff0002d7c5ee
  > "Makes Running Our Company a Snap: ClearCare has really helped us manage not only our business functions, but it has opened up time for us to focus on growing the business. Payroll and billing are done effectively and efficiently. Additionally, the support that ClearCare offers (thank you Emma C. and Jenny A.) is unmatched. We are very happy with all th" — TrustPilot · https://www.trustpilot.com/reviews/551087100000ff0002d74868
- **5★ (40)** — (2015–2021, mostly review-prompt dated) 'the best choice for HomeCare', drag-and-drop scheduling, 'a vendor that takes an interest in their clients', customer support 'unmatched'; one 5★ is a family praising a caregiver, not the software.
  > "A Super  Outstanding Caregiver: Hello this is Ms. Corker and the family. We would like to give a good review on Shaneika Wimby. She is a great caregiver to my father. She always on time, and get my father situated  with everything he needs. We really  appreciate all the hard work she comes in and assist my father with. Shaneika  shows good Leadership" — TrustPilot · https://www.trustpilot.com/reviews/60dcabbaf9f487073c6f7a2f
  > "We have used Clearcare for 2 businesses…: We have used Clearcare for 2 businesses now, over 6 years and love the functionality and most of all, the level of customer service. I personally have never found a better customer support team in any industry. When we call for assistance, no matter what rep is assigned to the call, they are always experts and find a s" — TrustPilot · https://www.trustpilot.com/reviews/5e543f0f3c93ae0bc4095912
- **Claude suggestion / what should change:** The star columns are two eras: ClearCare 2015–16 (5★) vs WellSky 2021–26 (1–2★). The operator's unmet asks are the ones Vince's feed advertisers now sell around: scheduling that works on the caregiver's phone, billing/payroll math that is right, sales-rep tracking and reporting — the AI-scheduler and intake vendors (Phoebe, ClearDesk, CareIntake) are selling into WellSky's 1★ column.

**No TrustPilot page:** AxisCare, WellSky (Personal Care / ClearCare is the only WellSky product with a page), Eldermark, Axxess, CareVoyant, Home Care Pulse / Activated Insights — no TrustPilot page; yardi.com resolves to CondoCafe (unrelated, dropped).
<!-- /LADDER:levels -->

<!-- LADDER:press -->
## Trade press & owner surveys across the ladder (numbers with URLs)

- **Home care** — Results from investments in experience management and staff engagement have also shown a positive trend, with turnover rates dropping to 75%, the lowest level reported in the past five years. — Activated Insights (Home Care Pulse) 2025 Benchmarking Report press release · https://activatedinsights.com/latest-news/activated-insights-releases-2025-benchmarking-report-unveiling-key-drivers-of-retention-and-revenue-in-home-based-care-industry/
- **Home care** — Agencies offering at least eight hours of onboarding and 12 hours of ongoing training, including compliance-focused content, reported an average annual revenue increase of nearly $350,000 — Activated Insights 2025 Benchmarking Report press release · https://activatedinsights.com/latest-news/activated-insights-releases-2025-benchmarking-report-unveiling-key-drivers-of-retention-and-revenue-in-home-based-care-industry/
- **Home care** — Home-based care had an aggregate 12.9% median customer growth rate in 2024 - its highest in six years. Home care client turnover dropped to 45.5% in 2024, a seven-year low. Median revenues reached $2.3 million, an increase of more than $291,000 (14%) compared  — McKnight's Home Care on the Activated Insights 2025 report (paywalled to WebFetch; figures as shown in search summary) · https://www.mcknightshomecare.com/news/home-care-revenues-rise-as-client-caregiver-turnover-rates-drop-activated-insights-reports/
- **Senior living / CCRC / SNF** — The occupancy rate for senior housing rose 0.4 percentage points in the second quarter for the 31 NIC MAP Primary Markets to reach 89.9%. The current level of 89.9% was last reached at the end of 2015, more than ten years ago. — NIC (NIC MAP) Q2 2026 occupancy · https://www.nic.org/blog/senior-housing-occupancy-climbs-in-second-quarter-2026/
- **Independent living** — the occupancy rate for independent living (IL) communities rose 0.3 percentage points in the second quarter to 91.3% — NIC (NIC MAP) Q2 2026 occupancy · https://www.nic.org/blog/senior-housing-occupancy-climbs-in-second-quarter-2026/
- **Assisted living / RAL** — the occupancy rate for assisted living (AL) communities rose 0.4 percentage points to 88.4%. The gap between AL and IL occupancy rates narrowed to only 2.9 percentage points in the second quarter. Fifteen of the 31 Primary Markets had occupancy rates at or abo — NIC (NIC MAP) Q2 2026 occupancy · https://www.nic.org/blog/senior-housing-occupancy-climbs-in-second-quarter-2026/
- **Home health** — Referral conversion rates have declined 13 percent since 2018, dropping from 77 percent to 64 percent by Q2 2025 — Homecare Homebase, 'Home Healthcare in 2026: Demand Isn't the Problem. Capacity Is.' · https://hchb.com/home-healthcare-in-2026-demand-isnt-the-problem-capacity-is/
- **Home health** — The median time from referral entry to start of care exceeds 69 hours, with more than 13 hours spent inside intake processes alone — Homecare Homebase 2026 · https://hchb.com/home-healthcare-in-2026-demand-isnt-the-problem-capacity-is/
- **Home health** — CMS finalized a 1.3 percent reduction in aggregate Medicare payments to home health agencies for CY 2026. More than 11,000 Medicare-certified home health agencies serve approximately 3 million Medicare fee-for-service beneficiaries each year — Homecare Homebase 2026 (CMS CY2026 HH PPS final rule) · https://hchb.com/home-healthcare-in-2026-demand-isnt-the-problem-capacity-is/
- **Home health** — As of October 2023, less than 35% of home health referrals were accepted by agencies, representing a significant decline from pre-pandemic levels when home health agencies were accepting almost half of all patients referred to them for post-acute care. In a 20 — Luna, 'Why Home Health Referral Acceptance Rates Are Collapsing' (search summary; WellSky 2023 figures) · https://www.getluna.com/blog/home-health-referral-acceptance-rates
- **Senior living / CCRC / SNF** — Argentum's workforce projections call for senior care to need three million-plus occupational openings by 2032, with 1.4 million workers needed in 2025 alone (281,000 new plus 1.1 million replacement). — Argentum workforce projections (search summary) · https://www.argentum.org/wp-content/uploads/2023/03/2023-Workforce-Projections-Final.pdf
- **Senior living / CCRC / SNF** — Flexible scheduling and work-life balance ranked among the most important job satisfaction factors, while burnout and understaffing were among the most frequently cited challenges in open-ended responses. — Argentum 2026 Perceptions of Careers in Senior Living (with Activated Insights) press release · https://activatedinsights.com/latest-news/argentum-activated-insights-senior-living-workforce-report/
- **Home health** — 63.3% of home health providers reported turning down referrals. Referral rejections tied to staffing shortages remain about twice as high as they were before the COVID-19 pandemic. Staffing has ranked as the industry's greatest challenge for three years runnin — Home Health Care News / Homecare Homebase 2026 outlook survey (search summary; 103 professionals, 64% C-suite/owners/VPs/directors) · https://homehealthcarenews.com/survey-ebook/home-based-care-outlook-2026/
- **Hospice** — Average daily census was up 2.2% to 22,723, and admissions increased to 19,394 - a 6.9% jump in Q1 2026. In Florida, hospital referrals accounted for 43.8% of admissions during the first quarter. — Hospice News, 'VITAS Banks on Length of Stay, Referral Mix Management' (search summary) · https://hospicenews.com/2026/04/27/vitas-banks-on-length-of-stay-referral-mix-management/
- **Hospice** — Referring providers value timely response to a referral for hospice care, with Hosparus' goal being to respond to referrals within 30 minutes of receipt and arrange a same-day visit. — Hospice News, 'Technology, Collaboration Pivotal to Speedy Hospice Admissions' (search summary) · https://hospicenews.com/2026/05/06/technology-collaboration-pivotal-to-speedy-hospice-admissions/
- **Senior living / CCRC / SNF** — Brookdale Senior Living's weighted average occupancy across communities in the second quarter was 82.4%, up 230 basis points year-over-year. Brookdale has seen measurable changes in key sales leading indicators to include conversion ratios, sales yields and im — McKnight's Senior Living, Brookdale Q2 2026 earnings (search summary) · https://www.mcknightsseniorliving.com/news/brookdale-senior-living-second-quarter-2026-earnings/
- **Placement / referral agency** — Five Star Senior Living reported that move-ins from A Place for Mom were down to less than 5% of their total move-ins. — McKnight's Senior Living (search summary; Five Star Senior Living on A Place for Mom) · https://www.mcknightsseniorliving.com/news/a-place-for-mom-is-sold-to-new-investors/article/673174/
- **Assisted living / RAL** — A Place for Mom released a 2026 Costs of Long-Term Care and Senior Living Report based on a December survey of 820 family caregivers who had moved a loved one into a senior living community or hired in-home care. The report showed that assisted living rates in — McKnight's Senior Living on A Place for Mom 2026 Costs of Long-Term Care and Senior Living Report (search summary; 820 family caregivers surveyed) · https://www.mcknightsseniorliving.com/news/providers-must-educate-prospects-to-cut-gap-between-expectations-realities-of-senior-living-rates-report

16 full articles were read through the research browser (press_articles.json); their numbered paragraphs are in the corpus as `trade_press` (151 entries).
<!-- /LADDER:press -->

## Backfill (post 09-23 Apify reset)
Competitor ad-creative sweep (D1a): Meta Ad Library — Home Instead, Visiting Angels, Comfort Keepers, A Place for Mom, Care.com, + coaches; rank by longevity; transcribe video; Competitor Desire Map. Plus: r/nursing "crisis in home care" full labor thread, TrustPilot/Indeed/Glassdoor reviews-by-star of franchises + software (Reviews-by-Star tab), Profile Pivot (D4) on the top owner authors, and the now-warming FB owner groups.

<!-- LADDER:audit -->
## Self-Audit (protocol A–AC, run 2026-09-08 after the ladder expansion)

Run honestly against the protocol's gate (A–AC). Counts are from the data files at build time.

| # | Check | Result |
|---|---|---|
| A | Tab names | ✓ all ten, unchanged. |
| B | Density | ✓ 189 curated quotes in the doc (68 added by the ladder expansion), every one with its vertical group; every served vertical is present in the corpus by pull scope (10 of 10). |
| C | Source URLs | ✓ every quote carries its URL; the generator refuses a quote whose URL is not in the corpus. |
| D | Primary search | SerpAPI 0/250 (dead until Oct 1); discovery ran on Reddit's own search through the browser, YouTube Data API search, and Google through the research Chrome for the Glassdoor URLs. Documented in D0. |
| E | Reddit pulled correctly | ✓ subreddit-scoped searches (restrict_sr=1) plus the all-reddit form for two spin-offs, full threads with top comments, through the logged-in browser (no Apify, no blocked API). 429 hit at 12:36; the reader was re-paced to ~1 request / 6.5 s. |
| F | Apify quota | Not used — every account at $0 until 09-19 (brief). |
| G | Tab 4 + Tab 7 longest | ✓ Tab 4 39 quotes, Tab 7 19 (Tab 4 gained 20 ladder quotes, Tab 7 5). |
| H | Obsidian saved | ✓ this file. |
| I | Notion | ✗ not pushed in this pass (the tracker row from 09-08 morning stands; the page URL is unchanged). Open. |
| J | No paraphrase | ✓ every quote is cut from the corpus document by the generator (make_ladder_quotes.py); the per-star syntheses are labeled as reads. |
| L | Source matrix ≥10 | ✓ 13 source types: Reddit (per-vertical + labor subs + brand searches), YouTube threads with replies, transcripts, Ad Library (names + phrases), Vince's feed (OCR), Indeed, Glassdoor, TrustPilot (brands + vendors), trade press (full articles + logged numbers), forums, Quora, agingcare, FB groups (thin). Skipped, with reasons, in D1l. |
| M | Go-Deeper ≥5 cards | ✓ 6 original + 3 ladder cards, each with 7 verbatim quotes and a labeled implication. |
| N | Vocabulary ledger | ✓ the ledger section stands from the first run; the ladder's own vocabulary (occupancy, census, move-ins, tours, wait list, admissions, liaison, per bed, RCFE/AFH) is measured in the Frequency and Ladder tables rather than re-ledgered. Partial. |
| O | Profile pivot | ✓ 9 of 22 from the first run; not extended to the ladder authors (they post from throwaways). Partial. |
| P | Tool status | ✓ D0 + D1l. |
| Q | Refresh date | ✓ 2027-03-08. |
| R | Assumption audit | grep for likely/probably/usually/roughly/assume: the remaining hits are inside quotes or labeled hypotheses (Tab 10 ladder paragraph, thread implications, the ads read). |
| S | Products from the corpus | ✓ vendor ledger from the first run; the ladder's vendors come from the Ad Library pull itself (ads_ladder.json), not from a guess. |
| T | Dislikes ledger | Partial — the employer-review and vendor star columns are the ladder's complaint ledger; complaints_ledger.py was not re-run on the new corpus. Open. |
| U | Ad keywords from the ledger + feed | ✓ 61 ladder phrases + 23 feed advertiser names, each with its result count in the logs (adlib_ladder_*.log); phrases that returned 0 ads are listed per vertical in D1l. |
| V | Impressions rank | Partial — each card carries its position in the Library's impressions-sorted result for its phrase (the pull order); adlib-impressions.mjs was not run separately. |
| W | Video transcribed, CTA followed | ✗ not in this pass — cards classified from card text + feed OCR; no lp-crawl. Open. |
| X | Counts are ranks, precision published | ✓ 20-hit reads of the top three and 10-hit reads of the new ladder themes are in the Frequency section, with the three pattern fixes named. |
| Y | audit_doc.py | ✗ the family-side audit_doc.py was not adapted; the generator's verbatim check covers the quotes, and every number in the ladder sections is computed at build time. Open. |
| Z | Every star level | ✓ Reviews by Star now holds 9 employer brands (Indeed 3 sorted pages + Glassdoor page 1) and 2 software vendors at 1–5★ with likes / pains / asks / Claude suggestion / what should change; the 2–4★ columns are thin because Indeed's star filter is walled (said in the tab). |
| AA | Voices by theme with replies | ✓ every tab; 58 theme chips; YouTube pulled as threads with replies. |
| AB | Themes bottom-up, untruncated | ✓ the ladder themes were written after reading raw/reading/ladder/*; the highlighted spans were read twice and ten patterns rewritten when the span did not coincide (documented in the checkpoint); no quote truncated (Indeed itself truncates at ~300 chars — stated). |
| AC | Operator ladder + feed | ✓ every vertical has its own pulls in D1l with before → after counts; the feed folder was read first, every screenshot OCR'd (raw/vince_feed/), its words ran as Ad Library phrases, and all 22 feed advertisers appear in the Competitor Ads tab with their source marked (16 Library, 6 feed-only). |

**Open items, in order:** Notion push (I); complaints_ledger.py on the ladder corpus (T); adlib-impressions.mjs + video transcription + lp-crawl on the operator ads (V, W); audit_doc.py adaptation (Y); FB owner groups once the research account warms (D1l). Apify backfill on 09-19 is not needed for anything above — every pull here was free.
<!-- /LADDER:audit -->

## Competitor Marketing Agencies (D1b) — inLeap's DIRECT competitive set

These are the senior-care / home-care marketing agencies that sell lead-gen to agency owners. inLeap competes with THESE, not with the lead directories.

| Agency | Services | Positioning / Guarantee |
|---|---|---|
| Approved Senior Network (Hurricane) | SEO, website, social media, content, reputation, review |  |
| Grow Senior Care Marketing | SEO, Google Ads, website, social media, content, reputation | #1 In Your Area ![5 1](data:image/png;base6 |
| corecubed | SEO, Google Ads, content, review, branding | Women-Owned and Operated ## Simplify Success With c |
| uforocks.com | SEO, PPC, website, content, branding, email |  |
| Sagapixel | SEO, PPC, website, social media, content |  |
| ChoiceLocal | SEO, website, social media, content, reputation, review | $18 in new customer revenue for every $1 |
| Cardinal Digital | SEO, Google Ads, PPC, website, content |  |

**Also in the set (discovered, not yet profiled):** homecaremarketing.com, turnthepagenational.com, curisdigital.com, seniorcaremarketingmax.com, carezano.com, approvedseniornetwork.com.

**Read of the field:** the incumbents (corecubed — women-owned, award-winning; Approved Senior Network / Steve 'the Hurricane' Weiss) sell *coaching + done-for-you channels*; the performance players (ChoiceLocal — *"$18 revenue per $1"* ROI guarantee, franchise-focused; Cardinal, Sagapixel, Grow Senior Care) sell SEO/PPC. **Gap for inLeap:** almost all sell *channels* (SEO/PPC/website); few sell an **exclusive-lead + intake-conversion system that also produces caregiver applicants**, and the ROI-guarantee lane (ChoiceLocal) is franchise-tilted — leaving independent owners underserved.
## Profile Pivot (D4) — where the top authors also post
Pulled the public Reddit profiles of the highest-engagement authors (logged-in browser; public data only, no private info stored). **9 of 22 resolved** (owner-operators post less and several use throwaway accounts — a real limit of the Profile Pivot for this B2B audience).
**Aggregate adjacency (author count):** r/cna 3 · r/nursing 3 · r/antiwork 2 · r/LifeProTips 2 · r/AskReddit 2 · r/OutOfTheLoop 2 — plus general-internet/meme subs (noise).
**The one real signal:** the resolvable authors cluster in **r/cna + r/nursing** — corroborating the measured firmographic that a large share of these owners come from a **CNA / nurse background** (the "I was a CNA for 30 years and started my own agency" pipeline). Meta targeting implication (hypothesis): layer healthcare-worker / CNA / nursing interests + "aspiring business owner" behaviors, not generic small-business.
