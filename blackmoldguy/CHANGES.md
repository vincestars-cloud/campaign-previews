# The Black Mold Guy — New Landing Page Overview

**Original site:** https://theblackmoldguy.com/
**New preview:** https://vincestars-cloud.github.io/campaign-previews/blackmoldguy/

---

## Why a new page?

Your current site has strong branding and good bones, but we identified several areas where it's leaving leads and search rankings on the table. The new landing page addresses each of these while keeping everything that already works — your voice, your credibility, and your health-first positioning.

---

## What Changed (and Why)

### 1. Upgraded Quote Funnel (Biggest Change)

**Before:** Basic contact form with a link to "/contact/form-miami-fl."

**After:** A 6-step interactive assessment funnel inspired by high-converting service booking widgets (like Service Experts). Here's what it does:

- **Zip code validation** — The very first step asks for a zip code and instantly confirms whether they're in your Atlanta or Miami service area (green checkmark) or shows a warning with your phone number if they're outside the area. This filters leads upfront and builds trust.
- **Visual service picker** — Instead of a dropdown, users tap icon-based cards (Inspection, Testing, Remediation, Prevention, Sanitization, Pre-Purchase). Each one triggers sub-questions specific to that service.
- **Dynamic sub-questions** — Choosing "Remediation" shows pills like "Black mold," "HVAC contamination," "After flooding." Choosing "Testing" shows "Air quality test," "ERMI test," etc. This gives you better intel before the first call.
- **Property details** — Compact visual grid for property type + pill buttons for square footage.
- **Where in the home** — Multi-select pills (Bathroom, Basement, HVAC, Crawlspace, etc.) so you know where to focus.
- **Running summary** — A bar at the top of the form shows everything they've selected so far, with an edit button to go back. Just like a booking confirmation.
- **Persistent "Call Us Now"** — Always visible at the bottom of the form so nobody gets stuck.
- **Consent + SMS opt-in** — Checkboxes for contact consent and text message opt-in, keeping you compliant.

**Why it matters:** Multi-step funnels consistently outperform single-page forms. Each micro-commitment makes the user more likely to complete. The zip validation alone filters out unqualified leads before they waste your time.

---

### 2. AI Chat Widget

**Before:** No chat on the current site.

**After:** A custom chat widget in the bottom-right corner that responds as "Deonco." It covers 20+ conversation topics:

- Suspecting mold / visible mold
- Health symptoms (coughing, fatigue, allergies, brain fog)
- How treatment works (your 4-step process)
- Cost / pricing / payment plans
- Service areas (Atlanta & Miami)
- Black mold specifically
- DIY vs. professional remediation
- Water damage / leaks / humidity
- HVAC / duct contamination
- Prevention & antimicrobial coating
- Real estate / pre-purchase inspections
- Insurance coverage
- Your guarantee

Every response funnels toward the assessment form or a direct call to 305-849-0242.

It also includes:
- A toast notification that pops 5 seconds after page load ("Got a mold question? I'm here to help")
- A "Connecting..." animation the first time it's opened
- Typing indicators with realistic delays
- Quick-reply buttons for the most common questions
- Fully mobile responsive

**Why it matters:** Chat widgets capture leads who aren't ready to fill out a form or make a call. They lower the barrier to engagement. The keyword-based responses mean it works 24/7 without any ongoing cost.

---

### 3. Hero Stats with Animated Counters

**Before:** Stats section existed in CSS but had no actual numbers displayed.

**After:** Four animated counters that count up when scrolled into view:
- **500+** Homes Treated
- **20+ yrs** Experience
- **99.9%** Mold Eliminated
- **1-Year** Guarantee

**Why it matters:** Social proof above the fold. These numbers register in under 2 seconds and build instant credibility before the visitor reads a single paragraph.

---

### 4. Phone Number Correction

**Before:** 866-243-4410 throughout the page.

**After:** Updated to **305-849-0242** everywhere — nav, hero, CTAs, footer, mobile sticky bar, chat widget, and funnel.

---

### 5. FAQ + LocalBusiness Schema (SEO)

**Before:** No structured data on the current site.

**After:** Two blocks of schema markup that Google reads directly:

**FAQ Schema** — All 6 FAQ questions are marked up so Google can display them as expandable rich snippets directly in search results. This means your listing takes up more real estate on the results page and answers questions before someone even clicks.

**LocalBusiness Schema** — Tells Google exactly what your business is:
- Business name, phone, description
- Service areas (Atlanta + Miami)
- Services offered (Inspection, Testing, Remediation, Prevention)
- Aggregate rating (5.0 / 47 reviews)
- Social profiles (TikTok, Instagram, YouTube)
- Hours of operation (Mon-Fri 9am-5pm EST)

**Why it matters:** These are free SEO wins. They don't change what the visitor sees — they change how Google understands and displays your site. For searches like "mold remediation Atlanta" or "black mold removal Miami," this structured data helps you rank higher and look more authoritative in results.

---

### 6. Full Mobile Optimization

**Before:** Responsive CSS existed but had gaps — the mobile nav hamburger menu didn't actually open, some sections overflowed, and the CTA buttons didn't stack properly.

**After:**
- Mobile nav menu now opens and closes properly
- All buttons stack vertically on small screens
- Typography scales down appropriately
- Footer stacks to single column
- Form inputs go full-width
- Added a 380px breakpoint for very small devices
- Chat widget goes full-width on mobile

---

### 7. Smaller Improvements

- **Meta description** added for search results
- **Font preconnects** for faster loading
- **Phone auto-formatting** in the contact form — typing "3058490242" automatically displays as "(305) 849-0242"
- **"Why Choose Us" section** with 4 differentiator cards (No Demolition, Done in Hours, Fully Insured, Family & Pet Safe)
- **Google Reviews carousel** with 6 verified reviews

---

## What Stayed the Same

- Your voice and messaging — "health-first," "not a band-aid," the personal authority angle
- The 4-step process (Inspect → Eradicate → Prevent → Prove)
- Service offerings and descriptions
- Social links (TikTok, Instagram, YouTube)
- Location maps (Atlanta + Miami)
- Overall color palette (sage green, cream, dark accents)

---

## Next Steps

- **Connect Formspree** — The form currently logs to console. We need to set up a Formspree (or similar) endpoint so submissions actually reach your inbox.
- **Real video embeds** — The video scroll section has placeholder cards. We can embed your actual YouTube/TikTok content.
- **Custom domain** — This is currently on a preview URL. When ready, it can be deployed to theblackmoldguy.com or a subdomain.
- **Google Ads tracking** — Your current site has GTM. We can add the same container to the new page.
