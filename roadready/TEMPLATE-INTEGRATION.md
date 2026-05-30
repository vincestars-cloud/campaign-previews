# RoadReady LP Template — n8n Auto-Population Spec

This document tells Claude Code exactly how to turn `option-b.html` / `option-d.html`
into a **reusable client template** that an n8n workflow fills in automatically from
scraped business data, then deploys to GitHub Pages.

**The goal:** scraper finds a local service business → n8n renders a personalized
landing page (company name, logo, phone, counties, hours, license, reviews, etc.) →
auto-deploys → returns a live preview URL. Zero manual editing per business.

---

## 1. Architecture (data flow)

```
[Lead source / scraper]
        │  raw business data (GMB, website, reviews)
        ▼
[n8n Webhook]  ──►  [Normalizer (AI/Code node)]  ──►  business.json (clean schema §3)
        │
        ▼
[Template Render (Code node §6)]
   reads template HTML with {{TOKENS}}
   + business.json
   = final personalized HTML
        │
        ▼
[GitHub Contents API upload §7]  ──►  campaign-previews/{slug}/index.html
        │
        ▼
[Respond] ──► https://vincestars-cloud.github.io/campaign-previews/{slug}/
```

**Key decision: server-side token replacement, not client-side JS rendering.**
The Code node produces a *fully-baked static HTML file*. Content lives in the HTML
(good for SEO, no flash of empty content, design stays pixel-perfect). The only
client-side JS that remains dynamic is the geolocation announcement bar (§5).

---

## 2. Tokenization — what to change in the HTML

Claude Code: take `option-b.html` and `option-d.html` and replace the hardcoded
RoadReady values with `{{TOKENS}}`. Save the tokenized versions as:

```
/templates/mobile-mechanic/option-b.template.html
/templates/mobile-mechanic/option-d.template.html
```

Keep the originals as live examples. The token syntax is **Mustache-style**:

| Syntax | Meaning |
|--------|---------|
| `{{TOKEN}}` | Scalar value, HTML-escaped |
| `{{{TOKEN}}}` | Scalar value, raw (use for SVG logo markup only) |
| `{{#SECTION}}...{{/SECTION}}` | Loop over an array **OR** show block if truthy |
| `{{^SECTION}}...{{/SECTION}}` | Inverted — show block only if array empty / value falsy |
| `{{.field}}` | Field of the current loop item |

**DO NOT tokenize the orange preview bar.** That bar is Vince's sales CTA
(`(786) 767-6791`) and must stay identical on every client preview. It is removed
only when the client pays and the site goes to their own domain (see §8).

---

## 3. The Data Contract (`business.json`)

This is the single normalized object the render node consumes. The Normalizer node
is responsible for producing exactly this shape from whatever the scraper returns.
Every field has a **fallback** so a missing scrape never breaks the page.

```json
{
  "slug": "joes-mobile-mechanic-atl",
  "variant": "option-b",

  "company": {
    "name": "Joe's Mobile Mechanic",
    "tagline": "Mobile Mechanics",
    "logo_svg": "<svg viewBox=\"0 0 24 24\">...</svg>",
    "logo_url": "",
    "phone_display": "(404) 555-0192",
    "phone_raw": "4045550192",
    "email": "service@joesmobile.com",
    "year_founded": 2015
  },

  "location": {
    "city": "Atlanta",
    "state": "GA",
    "metro_name": "Metro Atlanta",
    "geo_metro_key": "atlanta_ga"
  },

  "trust": {
    "google_rating": "4.9",
    "review_count": "200+",
    "jobs_completed": "500",
    "warranty_terms": "3-Year / 36,000-Mile",
    "certifications": "ASE Certified",
    "license_number": "GA-MV-44821",
    "bbb_accredited": true,
    "insured": true
  },

  "hours": [
    { "days": "Mon – Fri", "time": "7:00 AM – 7:00 PM" },
    { "days": "Saturday",  "time": "8:00 AM – 5:00 PM" },
    { "days": "Sunday",    "time": "Closed" }
  ],

  "counties": [
    { "name": "Fulton County",  "cities": "Atlanta, Buckhead, Midtown, Sandy Springs, Alpharetta" },
    { "name": "DeKalb County",  "cities": "Decatur, Tucker, Brookhaven, Stone Mountain" }
  ],

  "services": [
    { "title": "Oil & Filter Change", "blurb": "Full synthetic or conventional at your address.", "tag": "Most Booked", "category": "common", "icon": "oil", "photo": "https://..." }
  ],

  "reviews": [
    { "name": "Marcus T.", "location": "Buckhead, Fulton County", "service": "Brake Service", "stars": 5, "text": "I called at 9am and the mechanic was at my door by noon..." }
  ],

  "faqs": [
    { "q": "How does the cost compare to a shop?", "a": "Our pricing typically runs 20–40% below..." }
  ],

  "preview": {
    "is_preview": true,
    "agency_phone_display": "(786) 767-6791",
    "agency_phone_raw": "7867676791"
  }
}
```

### Field reference + fallbacks

| Path | Type | Required | Fallback if missing |
|------|------|----------|---------------------|
| `slug` | string | ✅ | derive from company name, kebab-case + state |
| `variant` | `option-b`\|`option-d` | ✅ | `option-b` |
| `company.name` | string | ✅ | **abort** — no page without a name |
| `company.tagline` | string | — | `"Mobile Mechanics"` |
| `company.logo_svg` | string (SVG) | — | default truck SVG (see §4) |
| `company.logo_url` | string (URL) | — | empty → use `logo_svg` |
| `company.phone_display` | string | ✅ | **abort** — no page without a phone |
| `company.phone_raw` | string | ✅ | strip non-digits from display |
| `company.email` | string | — | hide footer email row |
| `location.city` | string | — | `"Atlanta"` |
| `location.state` | string | — | `"GA"` |
| `location.metro_name` | string | — | `"Metro " + city` |
| `location.geo_metro_key` | string | — | `"atlanta_ga"` (controls §5 map) |
| `trust.google_rating` | string | — | `"4.9"` |
| `trust.review_count` | string | — | `"100+"` |
| `trust.jobs_completed` | string | — | `"500"` |
| `trust.warranty_terms` | string | — | `"3-Year / 36,000-Mile"` |
| `trust.certifications` | string | — | `"ASE Certified"` |
| `trust.license_number` | string | — | omit license badge entirely (conditional) |
| `hours[]` | array | — | omit hours block entirely (conditional) |
| `counties[]` | array | — | keep section, single generic "Metro Area" card |
| `services[]` | array | — | use the 12 default mobile-mechanic services |
| `reviews[]` | array | — | use 4 generic-but-realistic placeholders |
| `faqs[]` | array | — | use the 7 default FAQs |

> **Rule:** the Normalizer must never emit `null`. Apply the fallback at normalize
> time so the render node only ever sees clean strings/arrays.

---

## 4. Token map — every token and where it lives

### Scalars (text / attributes)

| Token | Source | Appears in |
|-------|--------|-----------|
| `{{COMPANY_NAME}}` | `company.name` | nav logo, footer, page `<title>`, meta, CTA |
| `{{COMPANY_TAGLINE}}` | `company.tagline` | nav logo small text, footer |
| `{{{LOGO_SVG}}}` | `company.logo_svg` | `.logo-mark` (raw, triple-brace) |
| `{{PHONE_DISPLAY}}` | `company.phone_display` | nav, mobile bar, CTA buttons |
| `{{PHONE_RAW}}` | `company.phone_raw` | every `href="tel:..."` |
| `{{EMAIL}}` | `company.email` | footer (inside conditional) |
| `{{CITY}}` | `location.city` | announcement bar default, headings |
| `{{STATE}}` | `location.state` | announcement bar, meta |
| `{{CITY_STATE}}` | `city + ", " + state` | hero eyebrow, title, meta description |
| `{{METRO_NAME}}` | `location.metro_name` | counties heading, footer, CTA subtext |
| `{{GOOGLE_RATING}}` | `trust.google_rating` | stats bar, hero trust row |
| `{{REVIEW_COUNT}}` | `trust.review_count` | reviews heading, announcement |
| `{{JOBS_COMPLETED}}` | `trust.jobs_completed` | stats bar (count-up `data-target`) |
| `{{WARRANTY_TERMS}}` | `trust.warranty_terms` | hero checks, badge, stats, FAQ |
| `{{CERTIFICATIONS}}` | `trust.certifications` | hero trust row, ticker, badge |
| `{{AGENCY_PHONE_DISPLAY}}` | `preview.agency_phone_display` | orange preview bar (do not change) |
| `{{AGENCY_PHONE_RAW}}` | `preview.agency_phone_raw` | orange preview bar `tel:` |

### Conditional blocks

```html
<!-- License badge — only render if scraper found a license number -->
{{#LICENSE_NUMBER}}
<div class="cred-badge">
  <svg viewBox="0 0 24 24">...shield...</svg>
  Licensed &middot; #{{LICENSE_NUMBER}}
</div>
{{/LICENSE_NUMBER}}

<!-- Hours block — only render if hours[] present -->
{{#HAS_HOURS}}
<div class="hours-block">
  <h4>Hours of Operation</h4>
  {{#HOURS}}
    <div class="hours-row"><span>{{.days}}</span><span>{{.time}}</span></div>
  {{/HOURS}}
</div>
{{/HAS_HOURS}}

<!-- Footer email — only if email present -->
{{#EMAIL}}<li><a href="mailto:{{EMAIL}}">{{EMAIL}}</a></li>{{/EMAIL}}

<!-- BBB / Insured badges -->
{{#BBB_ACCREDITED}}<span class="trust-chip">BBB Accredited</span>{{/BBB_ACCREDITED}}
{{#INSURED}}<span class="trust-chip">Licensed &amp; Insured</span>{{/INSURED}}
```

> Add `business.HAS_HOURS = hours.length > 0` in the Normalizer so the section
> toggles cleanly. Same pattern (`HAS_X`) for any array-driven block.

### Repeating sections (loops)

Wrap each repeating unit with section markers. The render engine clones the inner
HTML for each array item.

**Counties:**
```html
<div class="county-grid">
{{#COUNTIES}}
  <div class="county-card fade">
    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    <div class="county-name">{{.name}}</div>
    <div class="county-cities">{{.cities}}</div>
  </div>
{{/COUNTIES}}
</div>
```

**Services** (note the `category` field powers the tab filter — see §4a):
```html
{{#SERVICES}}
  <div class="svc-card fade" data-category="{{.category}}">
    <div class="svc-photo" style="background-image:url('{{.photo}}')"></div>
    <div class="svc-body">
      {{#.tag}}<div class="svc-label">{{.tag}}</div>{{/.tag}}
      <h3>{{.title}}</h3>
      <p>{{.blurb}}</p>
    </div>
  </div>
{{/SERVICES}}
```

**Reviews:**
```html
{{#REVIEWS}}
  <div class="rev-card fade">
    <div class="rev-stars">{{.stars_html}}</div>
    <p class="rev-text">&ldquo;{{.text}}&rdquo;</p>
    <div class="rev-author">{{.name}}</div>
    <div class="rev-meta">{{.location}} &middot; {{.service}}</div>
  </div>
{{/REVIEWS}}
```
> Normalizer computes `stars_html` = `"★".repeat(stars)` so the template stays dumb.

**FAQs:**
```html
{{#FAQS}}
  <div class="faq-item">
    <button class="faq-q">{{.q}} <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
    <div class="faq-a"><div class="faq-a-inner">{{.a}}</div></div>
  </div>
{{/FAQS}}
```

### 4a. Service tabs (All / Most Common / Diagnostics)

Current template hardcodes three `<div class="panel">` blocks. **Simplify for
templating:** render ONE flat list of all services with `data-category` on each
card, and let the existing tab JS filter by category instead of swapping panels.

Change the tab click handler to:
```js
document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const cat=btn.dataset.tab; // 'all' | 'common' | 'diagnostic'
  document.querySelectorAll('.svc-card').forEach(c=>{
    c.style.display=(cat==='all'||c.dataset.category===cat)?'':'none';
  });
}));
```
Each service in `business.json` carries `category: "common" | "diagnostic" | "other"`.
A card shows under **All** always, and under its category tab. This removes the need
to triplicate service markup.

---

## 5. Geolocation announcement bar (stays client-side)

The announcement bar detects the visitor's metro and shows the **big city** name.
Keep this as runtime JS, but make the metro map data-driven by `geo_metro_key`.

Replace the hardcoded map in the template with a token-injected config:

```html
<script>
const GEO_CONFIG = {{{GEO_CONFIG_JSON}}};   // injected by render node
</script>
```

The Normalizer picks the right map by `location.geo_metro_key` and serializes it.
Maintain a master registry (in n8n, a Set/Static Data node or a small JSON in the
repo) keyed by metro:

```json
{
  "atlanta_ga": {
    "default": "Atlanta, GA",
    "regions": {
      "Atlanta, GA": ["Atlanta","Buckhead","Midtown","Lithonia","Decatur","Sandy Springs","Marietta","Smyrna","Kennesaw","Roswell","Alpharetta","Duluth","Norcross","Lawrenceville","Tucker","Stone Mountain","College Park","East Point","Forest Park","McDonough","Stockbridge","Jonesboro","Fayetteville","Peachtree City","Canton","Acworth","Woodstock","Brookhaven","Dunwoody","Union City","Morrow","Hampton","Locust Grove","Holly Springs","Ball Ground","Suwanee","Buford","Snellville","Lilburn","Doraville","Chamblee","Conyers","Douglasville","Powder Springs"]
    }
  },
  "dallas_tx": {
    "default": "Dallas, TX",
    "regions": {
      "Dallas, TX": ["Dallas","Plano","Irving","Garland","Mesquite","Richardson","Carrollton","Frisco","McKinney","Allen","Grand Prairie","Arlington","Denton","Lewisville"]
    }
  }
}
```

The runtime JS (already in the file) reads `GEO_CONFIG` instead of the hardcoded
Atlanta set:

```js
(function detectCity(){
  const cfg = GEO_CONFIG;
  function resolve(city){
    for (const [major, towns] of Object.entries(cfg.regions))
      if (towns.includes(city)) return major;
    return null;
  }
  fetch('https://ipapi.co/json/').then(r=>r.json()).then(d=>{
    const el=document.getElementById('urg-location');
    if(el) el.textContent = resolve(d.city) || cfg.default;
  }).catch(()=>{});
})();
```
> Fallback chain: matched big city → metro default → the static `{{CITY_STATE}}`
> already printed in the HTML. Never shows a broken state.

---

## 6. The Render node (n8n Code node — full engine)

Self-contained, zero npm deps. Paste into a Code node that receives
`items[0].json.business` and `items[0].json.templateHtml`.

```javascript
// === n8n Code node: Template Render ===
// IN:  $json.business  (the normalized object, §3)
//      $json.templateHtml (string — the tokenized option-X.template.html)
// OUT: $json.renderedHtml

function render(tpl, ctx) {
  // 1. Sections: {{#KEY}}...{{/KEY}} and inverted {{^KEY}}...{{/KEY}}
  const sectionRe = /\{\{([#^])([\w.]+)\}\}([\s\S]*?)\{\{\/\2\}\}/g;
  tpl = tpl.replace(sectionRe, (m, type, key, inner) => {
    const val = resolve(ctx, key);
    const truthy = Array.isArray(val) ? val.length > 0 : !!val;
    if (type === '^') return truthy ? '' : render(inner, ctx);          // inverted
    if (Array.isArray(val))                                             // loop
      return val.map(item => render(inner, mergeItem(ctx, item))).join('');
    return truthy ? render(inner, ctx) : '';                            // conditional
  });

  // 2. Raw scalars: {{{KEY}}}  (no escaping — logo SVG, pre-built HTML)
  tpl = tpl.replace(/\{\{\{([\w.]+)\}\}\}/g, (m, key) => str(resolve(ctx, key)));

  // 3. Escaped scalars: {{KEY}}
  tpl = tpl.replace(/\{\{([\w.]+)\}\}/g, (m, key) => esc(str(resolve(ctx, key))));

  return tpl;
}

function resolve(ctx, key) {
  if (key === '.') return ctx.__item;
  if (key.startsWith('.')) {                 // {{.field}} of current loop item
    const f = key.slice(1);
    return ctx.__item && ctx.__item[f] !== undefined ? ctx.__item[f] : '';
  }
  return key.split('.').reduce((o, k) => (o == null ? '' : o[k]), ctx);
}
function mergeItem(ctx, item) { return Object.assign({}, ctx, { __item: item }); }
function str(v) { return v == null ? '' : String(v); }
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
          .replace(/"/g,'&quot;');
}

// --- Build the flat token context from business.json ---
const b = $json.business;
const ctx = {
  COMPANY_NAME: b.company.name,
  COMPANY_TAGLINE: b.company.tagline,
  LOGO_SVG: b.company.logo_svg,
  PHONE_DISPLAY: b.company.phone_display,
  PHONE_RAW: b.company.phone_raw,
  EMAIL: b.company.email || '',
  CITY: b.location.city,
  STATE: b.location.state,
  CITY_STATE: `${b.location.city}, ${b.location.state}`,
  METRO_NAME: b.location.metro_name,
  GOOGLE_RATING: b.trust.google_rating,
  REVIEW_COUNT: b.trust.review_count,
  JOBS_COMPLETED: b.trust.jobs_completed,
  WARRANTY_TERMS: b.trust.warranty_terms,
  CERTIFICATIONS: b.trust.certifications,
  LICENSE_NUMBER: b.trust.license_number || '',
  BBB_ACCREDITED: !!b.trust.bbb_accredited,
  INSURED: !!b.trust.insured,
  HAS_HOURS: (b.hours || []).length > 0,
  HOURS: b.hours || [],
  COUNTIES: b.counties || [],
  SERVICES: b.services || [],
  REVIEWS: (b.reviews || []).map(r => ({ ...r, stars_html: '★'.repeat(r.stars || 5) })),
  FAQS: b.faqs || [],
  AGENCY_PHONE_DISPLAY: b.preview.agency_phone_display,
  AGENCY_PHONE_RAW: b.preview.agency_phone_raw,
  GEO_CONFIG_JSON: JSON.stringify(b.__geo_config || { default: `${b.location.city}, ${b.location.state}`, regions: {} }),
};

return [{ json: { renderedHtml: render($json.templateHtml, ctx), slug: b.slug } }];
```

---

## 7. Deploy node (GitHub Contents API)

Matches the method already used for this repo (works around the account's
git-push email-verification block). HTTP Request node, or Code node:

```javascript
// === n8n Code node: Deploy to GitHub Pages ===
const repo = 'vincestars-cloud/campaign-previews';
const slug = $json.slug;
const path = `${slug}/index.html`;
const token = $env.GITHUB_TOKEN;            // store in n8n credentials/env
const content = Buffer.from($json.renderedHtml).toString('base64');

const base = `https://api.github.com/repos/${repo}/contents/${path}`;
const headers = { Authorization: `Bearer ${token}`, 'User-Agent': 'n8n', Accept: 'application/vnd.github+json' };

// get existing sha (for updates)
let sha;
try {
  const cur = await this.helpers.httpRequest({ method: 'GET', url: base, headers });
  sha = cur.sha;
} catch (e) { /* new file */ }

const body = { message: `Deploy LP for ${slug}`, content };
if (sha) body.sha = sha;

await this.helpers.httpRequest({ method: 'PUT', url: base, headers, body, json: true });

return [{ json: { url: `https://vincestars-cloud.github.io/campaign-previews/${slug}/` } }];
```

> First deploy of a brand-new `{slug}/` folder can take 1–5 min for Pages to build.
> For instant per-client subfolders, the parent repo already has Pages enabled, so
> new folders publish automatically.

---

## 8. Going live on the client's own domain

When a client pays and wants it on their domain, the only differences from the
preview build are:

1. Set `preview.is_preview = false` in `business.json`.
   The template wraps the orange bar in `{{#IS_PREVIEW}}...{{/IS_PREVIEW}}` — so it
   disappears automatically on the production render.
2. Point their domain (or a `CNAME`) at the host. Options: keep on GitHub Pages with
   a custom domain, or push the single `index.html` to Netlify/Vercel/their host.
3. Wire the booking form `submitForm()` to a real endpoint (n8n webhook → CRM/SMS).
   Currently it only shows the success state; add a `fetch(WEBHOOK_URL, {...})`.

So add this token wrap around the preview bar in the template:
```html
{{#IS_PREVIEW}}
<div id="preview-bar">Launch this site &mdash; Call or text Vince
  <a href="tel:{{AGENCY_PHONE_RAW}}">{{AGENCY_PHONE_DISPLAY}}</a> &mdash; No monthly fees.</div>
{{/IS_PREVIEW}}
```
And set `business.IS_PREVIEW = b.preview.is_preview` in the render context.

---

## 9. Default logo SVG (fallback)

When the scraper finds no logo, use the built-in truck mark already in the template:

```html
<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
```

For other verticals (plumber, electrician, HVAC, roofer) keep a small icon library
keyed by `vertical` so the Normalizer can pick an appropriate default mark.

---

## 10. Normalizer node — responsibilities

The Normalizer (AI node with a strict JSON-mode prompt, or a Code node) turns messy
scraper output into the §3 contract. It must:

1. **Map raw fields** → schema paths (GMB name → `company.name`, etc.)
2. **Apply every fallback** in §3 so no `null` reaches the render node.
3. **Derive computed fields:** `slug`, `phone_raw`, `CITY_STATE`, `metro_name`,
   `HAS_HOURS`, `stars_html`, `geo_metro_key`.
4. **Generate copy where the scrape is thin** — if no reviews scraped, write 4
   realistic placeholder reviews using the city name; if no services, use the
   default 12. (Follow Vince's rules: no prices, no emojis, light tone, counties
   not cities, real service names.)
5. **Pick `variant`** — default `option-b`; allow override via webhook param.
6. **Attach `__geo_config`** from the metro registry (§5).

### Suggested AI normalize prompt (system)
```
You convert scraped local-business data into a strict JSON object matching the
RoadReady LP schema. Rules:
- Output ONLY valid JSON, no commentary.
- Never output null — apply the documented fallback for any missing field.
- No prices anywhere. No emojis. Use county names, not just cities.
- Use the business's REAL service names if present; otherwise the default 12.
- If license number not found, set trust.license_number to "" (page hides badge).
- Keep all copy trustworthy and plain; this is a blue-collar consumer audience.
```

---

## 11. Build checklist for Claude Code

- [ ] Copy `option-b.html` → `templates/mobile-mechanic/option-b.template.html`, tokenize per §4.
- [ ] Same for `option-d.html`.
- [ ] Convert service tabs to flat list + `data-category` filter (§4a).
- [ ] Wrap license, hours, email, BBB, insured, preview bar in conditional blocks (§4).
- [ ] Replace hardcoded geo map with `GEO_CONFIG` injection (§5).
- [ ] Add the metro registry JSON (`geo-metros.json`) to the repo.
- [ ] Build n8n workflow: Webhook → Normalizer → Render (§6) → Deploy (§7) → Respond.
- [ ] Store `GITHUB_TOKEN` in n8n env/credentials.
- [ ] Test with the sample payload (§12); confirm live URL renders correctly.
- [ ] Verify: missing license hides badge; missing hours hides block; geo bar resolves.

---

## 12. Test payload

POST this to the webhook to verify end-to-end:

```json
{
  "slug": "atlas-mobile-mechanic-dallas",
  "variant": "option-d",
  "company": {
    "name": "Atlas Mobile Mechanic",
    "tagline": "We Come To You",
    "phone_display": "(214) 555-0148",
    "phone_raw": "2145550148",
    "email": "book@atlasmobile.com"
  },
  "location": { "city": "Dallas", "state": "TX", "metro_name": "Dallas–Fort Worth", "geo_metro_key": "dallas_tx" },
  "trust": { "google_rating": "4.8", "review_count": "150+", "jobs_completed": "600", "license_number": "TX-INS-99213", "bbb_accredited": true, "insured": true },
  "hours": [
    { "days": "Mon – Sat", "time": "7:00 AM – 8:00 PM" },
    { "days": "Sunday", "time": "By Appointment" }
  ],
  "counties": [
    { "name": "Dallas County", "cities": "Dallas, Irving, Garland, Mesquite, Richardson" },
    { "name": "Collin County", "cities": "Plano, Frisco, McKinney, Allen" },
    { "name": "Tarrant County", "cities": "Fort Worth, Arlington, Grand Prairie" },
    { "name": "Denton County", "cities": "Denton, Lewisville, Flower Mound" }
  ]
}
```

Expected: a Dallas-branded Option-D page at
`https://vincestars-cloud.github.io/campaign-previews/atlas-mobile-mechanic-dallas/`
with the license badge visible, hours block shown, geo bar resolving Dallas suburbs
to "Dallas, TX", and the orange preview bar present (since `is_preview` defaults true).

---

## 13. Notes & guardrails (Vince's standing rules)

- **No prices** on the page — ever.
- **No emojis** in B2B copy.
- **Light backgrounds** only (both variants comply; never ship a dark template).
- **Counties, not just cities**, in the service-area section.
- **Real service names** when the scrape provides them.
- The **orange preview bar** is the agency's sales hook — only `IS_PREVIEW=false`
  removes it, on paid go-live.
- Always add new deployed client URLs to the **Notion GitHub Pages index**
  (page `36594a90-4483-8169-96b6-c877b78d97a6`) — this can be a final n8n node.
```
