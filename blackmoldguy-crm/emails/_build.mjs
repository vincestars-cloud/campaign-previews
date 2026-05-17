// One-shot builder: writes 15 HTML email preview files into emails/.
// Run:  node _build.mjs
import fs from 'node:fs';

const wrap = (inner, preheader='') => `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>The Black Mold Guy</title>
<style>
body{margin:0;background:#f7f5f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0a0f0d;line-height:1.65}
.wrap{max-width:560px;margin:0 auto;padding:32px 20px}
.card{background:#fff;border-radius:16px;padding:36px 30px;border:1px solid #e5e2db}
.brand{font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#2d4a3a;letter-spacing:.3px;margin-bottom:6px}
.brand small{display:block;font-family:inherit;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4a6b5a;font-weight:600;margin-top:4px}
h1{font-family:Georgia,'Times New Roman',serif;font-size:26px;color:#0a0f0d;margin:24px 0 16px;line-height:1.25}
p{font-size:15.5px;color:#374151;margin:0 0 14px}
.cta{display:inline-block;background:#2d4a3a;color:#fff!important;text-decoration:none;padding:14px 26px;border-radius:999px;font-weight:600;font-size:14.5px;margin:20px 0 8px}
.cta.gold{background:#b08d3a}
.callout{background:#f7f5f0;border-left:3px solid #4a6b5a;padding:14px 18px;margin:18px 0;border-radius:6px;font-size:14.5px;color:#1f2a25}
.sign{margin-top:26px;font-size:15px}
.sign b{display:block;font-family:Georgia,'Times New Roman',serif;font-size:18px;color:#2d4a3a}
.foot{font-size:11.5px;color:#7a8275;margin-top:26px;text-align:center;line-height:1.6}
.foot a{color:#7a8275}
ul{padding-left:20px;color:#374151}
li{margin-bottom:8px}
.bold-hi{background:#fff3c4;padding:1px 4px;border-radius:3px;font-weight:600}
table{font-size:14.5px}
</style></head><body>
<div class="wrap"><div class="card">
<div class="brand">The Black Mold Guy<small>Atlanta · Miami</small></div>
${inner}
<div class="foot">
The Black Mold Guy &middot; 305-849-0242 &middot; <a href="https://theblackmoldguy.com">theblackmoldguy.com</a><br>
You're receiving this because you reached out about a mold concern. <a href="#">Unsubscribe</a>.
</div>
</div></div></body></html>`;

const signoff = `<div class="sign">— <b>Deonco</b>The Black Mold Guy<br><a href="tel:3058490242" style="color:#4a6b5a">305-849-0242</a></div>`;

const E = {

welcome: `
<h1>{first_name} — got your request.</h1>
<p>This is Deonco — the actual person, not a call center. Your assessment request just landed in my inbox and I'll personally reach out within 24 hours, usually much sooner.</p>
<p>While you wait, three things will help me help you faster:</p>
<ul>
<li><b>Where exactly</b> are you seeing or smelling something? (bathroom, basement, HVAC, behind a wall, etc.)</li>
<li><b>How long</b> has it been there?</li>
<li><b>Any water event</b> in the past 6 months? Leak, flood, slow drip behind a wall?</li>
</ul>
<p>Just hit reply with whatever you know. Even partial info speeds things up. If anyone in your household is feeling sick, mention that too — it changes how I prioritize.</p>
<a class="cta" href="tel:3058490242">Or call me directly — 305-849-0242</a>
<div class="callout">One thing I always tell people: I'd rather give you an honest "you probably don't have a real problem" for free than charge you for a problem that isn't there. That's the whole job.</div>
${signoff}
`,

nosale_followup_1: `
<h1>One thing I should've mentioned on our call</h1>
<p>Deonco here. After we talked, I realized I forgot to bring up something that matters for anyone trying to handle mold themselves first.</p>
<p><b>Bleach doesn't kill mold. It feeds it.</b></p>
<p>Sounds dramatic, but here's the science: bleach is mostly water. On a porous surface (drywall, wood, grout), the bleach evaporates within minutes — but the water soaks in and pushes mold spores deeper. The visible black spot disappears for a few weeks. Then it comes back, often worse, and now it's behind the paint instead of on top of it.</p>
<p>The other things that don't work long-term:</p>
<ul>
<li><b>Vinegar</b> — kills surface spores, won't touch what's in the wall cavity.</li>
<li><b>Air purifiers</b> — clean the air, don't address the source.</li>
<li><b>Concrobium foggers</b> — work on hard surfaces, do nothing for porous materials.</li>
<li><b>Painting over it</b> — single most expensive mistake I see. Locks moisture in.</li>
</ul>
<p>What actually works is finding the moisture source, removing the contaminated material, fogging with an EPA-registered sterilant, and post-testing to verify. That's what the inspection figures out.</p>
<p>If you want to revisit, I'm here.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Free assessment — 60 seconds</a>
${signoff}
`,

nosale_followup_2: `
<h1>The 4 questions most people don't think to ask</h1>
<p>When I do consults, I keep seeing the same pattern: homeowners get quotes from 2-3 companies and don't know what to ask. Here are the four questions that separate real operators from people who will take your money and create a bigger problem.</p>
<ol style="padding-left:20px;color:#374151">
<li style="margin-bottom:12px"><b>"Do you inspect AND remediate? Is that allowed in this state?"</b><br>In New York and several other states, it's illegal for one company to do both — conflict of interest. The honest ones in GA and FL acknowledge this and offer inspection-only options if you want a second opinion.</li>
<li style="margin-bottom:12px"><b>"What lab do you use for post-treatment air samples? Is it ISO-accredited?"</b><br>If the answer is "we test it ourselves" — walk. Independent third-party lab results are the only verification you can trust.</li>
<li style="margin-bottom:12px"><b>"What is your antimicrobial product, and what's in it?"</b><br>Many companies use harsh quat-based products that off-gas for weeks. For sensitive individuals or kids, that's worse than the mold. Ask for the SDS.</li>
<li style="margin-bottom:12px"><b>"What does your guarantee cover, and for how long?"</b><br>A real workmanship guarantee covers 12 months on the treated area, no upcharge. Anything shorter or vaguer means they don't believe in their work.</li>
</ol>
<p>If you're getting quotes right now, use these. If a company can't answer all four straight, that's your answer.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">If you'd rather just ask me — book a free assessment</a>
${signoff}
`,

nosale_followup_3: `
<h1>Why I obsess over what we spray</h1>
<p>Most of the families I work with came to me because someone in the home is already sick. Chemically sensitive. Autoimmune. Kids with asthma. After what they've been through, the LAST thing they need is a second exposure from the cleanup.</p>
<p>So here's what I actually use:</p>
<div class="callout">
<b>Sterilant fogger:</b> Botanically-derived, EPA-registered antimicrobial. No harsh chlorine. No volatile residue. Safe to re-enter the home within hours.<br><br>
<b>Antimicrobial barrier coating:</b> Silane-based, forms a microscopic spike-layer on surfaces that physically punctures spores on contact. No off-gassing. Stays effective for 12+ months.<br><br>
<b>HEPA filtration:</b> True HEPA, capturing particles down to 0.3 microns including mycotoxin-bearing spores.
</div>
<p>I won't use anything in a customer's home I wouldn't use in my own. That's the actual rule.</p>
<p>If you want me to walk you through the SDS sheets before you commit to any remediation, just ask. Most companies won't share them. I'll send them over.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Reply with questions, or book here</a>
${signoff}
`,

nosale_followup_4: `
<h1>"My daughter hasn't had an asthma attack since."</h1>
<p>I want to share a real case from last year. Names changed. Permission was given.</p>
<div class="callout">
<b>The family:</b> Couple in north Atlanta, one daughter (age 7) with chronic asthma. ER visits every 2-3 months. Pediatrician maxed out on inhalers, talking about steroids.<br><br>
<b>What they tried first:</b> Two different remediation companies. Both said "we got it." Symptoms continued. They spent over $9,000 combined.<br><br>
<b>What I found:</b> The mold wasn't in the walls anymore. It was inside the HVAC plenum and on the evaporator coil — invisible from any vent. Every time the AC kicked on, it was distributing spores throughout every room.<br><br>
<b>What I did:</b> Full HVAC fogging with sterilant. Replaced the coil. Antimicrobial barrier on the plenum interior. Post-treatment air samples at 4 locations, all came back clean.<br><br>
<b>Outcome (90 days later):</b> Zero asthma attacks. First time in 4 years. Pediatrician now tells other parents to test for mold before steroids.
</div>
<p>I'm not telling you this to brag. I'm telling you because if your standard mold company "got the visible stuff" and you're still feeling off — the HVAC is the most missed spot in this industry. By a mile.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Get an HVAC + whole-home inspection</a>
${signoff}
`,

nosale_followup_5: `
<h1>The reason this is personal for me</h1>
<p>I don't usually share this, but you've been on my list for a couple weeks and you deserve to know who's actually on the other end of these emails.</p>
<p>Years ago, before I did this professionally, my own family had a mold problem we didn't know about. One of the people I love most was sick for months — doctors couldn't figure it out, every test came back "normal," and the assumption was stress.</p>
<p>It wasn't stress. It was the house.</p>
<p>By the time we figured it out, we'd burned through more than I want to admit on the wrong specialists, the wrong remediation company, and a near-second tear-out that I now know wouldn't have fixed it.</p>
<p>What I learned in that year is what every mold operator either hides or doesn't know:</p>
<ul>
<li>The cheapest part of solving mold is finding it correctly the first time.</li>
<li>Most "remediation" addresses what you can see, not what's making you sick.</li>
<li>The lab data — independent, third-party, post-treatment — is the only thing that proves the job is done.</li>
</ul>
<p>That's why my whole business is built around the inspection first, no-pressure framing, and post-treatment verification. Not because it's a marketing gimmick. Because I watched the alternative cost my family more than money.</p>
<p>If you ever want to actually solve this — I'm here. No pressure, no follow-up after this email unless you ask. You know where to find me.</p>
<a class="cta" href="tel:3058490242">305-849-0242 — anytime</a>
${signoff}
`,

reactivation_owe_you: `
<h1>I owe you something</h1>
<p>Deonco here. I was reviewing my last 12 months of work and your file came across my desk. Whether we did a full job for you or just an inspection, I realized I haven't checked in on you and that's on me.</p>
<div class="callout" style="border-color:#b08d3a;background:#fdf6e3">
<b style="font-size:17px">I'd like to give you a <span class="bold-hi">FREE re-inspection</span>, at no cost to you, in the next 30 days.</b><br><br>
30 minutes. I'll re-scan with thermal imaging and an air sample, send you a written report, and tell you straight whether anything has changed. No charge, no upsell.
</div>
<p>The reason: I've gotten better at this in the last year. New equipment, better lab partnerships, sharper protocols. If anything got missed or has recurred — I want to be the one to find it and make it right.</p>
<p>If you've moved or sold the house, no problem — forward this to whoever's there now and the offer stands for them.</p>
<a class="cta gold" href="https://theblackmoldguy.com/#quote">Claim my free re-check</a>
<p style="font-size:13px;color:#7a8275;margin-top:24px">Limit: 5 of these per week so I can do them properly. First-come basis.</p>
${signoff}
`,

reactivation_allergies: `
<h1>The allergy/mold connection nobody mentions</h1>
<p>Quick one.</p>
<p>Pollen + mildew season is here, and every year around now I get the same call: "I've been on Zyrtec for 3 weeks and it's not working." 9 times out of 10, that's not seasonal allergies. That's an indoor air quality problem getting worse because the AC is running constantly and recirculating whatever is in the system.</p>
<p>Three quick checks anyone can do right now:</p>
<ul>
<li>Walk into your home from outside. Smell anything musty in the first 5 seconds? That's a signal.</li>
<li>Look at the supply vents. Black streaks around the edges? That's mold being blown through.</li>
<li>Does it get worse when the AC kicks on? Better when windows are open? You're describing an HVAC issue.</li>
</ul>
<p>If any of those land — the free re-inspection offer from last week still stands. 30 minutes, no charge.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Book a re-check</a>
${signoff}
`,

reactivation_savings: `
<h1>The numbers I wish more people saw</h1>
<p>Real data from my own files this year:</p>
<table style="width:100%;border-collapse:collapse;margin:18px 0">
<tr style="background:#f7f5f0"><th style="text-align:left;padding:10px;border-bottom:1px solid #e5e2db">Caught early (inspection only)</th><th style="text-align:right;padding:10px;border-bottom:1px solid #e5e2db">$185-$425</th></tr>
<tr><td style="padding:10px;border-bottom:1px solid #e5e2db">Caught at 6 months</td><td style="text-align:right;padding:10px;border-bottom:1px solid #e5e2db">$2,200-$4,800</td></tr>
<tr style="background:#f7f5f0"><td style="padding:10px;border-bottom:1px solid #e5e2db">Caught at 12+ months</td><td style="text-align:right;padding:10px;border-bottom:1px solid #e5e2db">$7,400-$18,000</td></tr>
<tr><td style="padding:10px"><b>Average "we tried other companies first" job</b></td><td style="text-align:right;padding:10px"><b>$24,000+</b></td></tr>
</table>
<p>The expensive part of mold is never the mold. It's the time between knowing something is wrong and getting an honest set of eyes on it.</p>
<p>An inspection is the cheapest tool you'll ever buy. If I find nothing, you get peace of mind for a few hundred bucks. If I find something, you saved yourself five figures.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Schedule a free re-check</a>
${signoff}
`,

reactivation_environment: `
<h1>It's not the basement. It's not the bathroom.</h1>
<p>Most people think mold lives in the obvious damp places. The data tells a different story.</p>
<p>After 500+ homes, here's where I find <i>active</i> mold most often:</p>
<ol style="padding-left:20px;color:#374151">
<li style="margin-bottom:8px"><b>HVAC plenum + evaporator coil</b> — invisible, runs 24/7 in southern climates, distributes spores everywhere.</li>
<li style="margin-bottom:8px"><b>Behind washing machines</b> — slow supply-line drips, contained corner, nobody looks.</li>
<li style="margin-bottom:8px"><b>The attic over the bathroom</b> — exhaust fan dumping moist air into insulation.</li>
<li style="margin-bottom:8px"><b>Behind the toilet flange</b> — wax-ring seepage over time.</li>
<li style="margin-bottom:8px"><b>Crawlspace vapor barriers (that someone "encapsulated")</b> — wrong vapor permeability, condensation traps water against the sub-floor.</li>
</ol>
<p>If your previous remediation focused on visible spots and nobody checked these — there's a decent chance the problem moved, not gone.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Free re-inspection covers all 5</a>
${signoff}
`,

reactivation_case_study: `
<h1>The hardest case I've worked</h1>
<p>I want to tell you about Mara (not her real name). Permission given.</p>
<div class="callout">
She'd been sick for six years. 8 different doctors. Hair loss, weight loss, infections, chronic fatigue. Every lab came back normal. Every doctor told her it was stress.<br><br>
She'd hired two mold companies before me. Both said the house was fine. She started doubting herself.<br><br>
She found me because of an Instagram comment. I came out, did the full inspection — thermal, moisture, air samples in 5 zones. Walked into her HVAC closet, opened the return plenum, and there it was. Black, fuzzy, six years of growth on the inside of the return duct. Air handler had been distributing it the entire time.<br><br>
She cried. Not because of the cost. Because someone finally believed her.
</div>
<p>If you have ever felt like you knew something was wrong with your house and couldn't get anyone to take it seriously — I will take it seriously. That's the whole business.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">If this sounds familiar — book a free re-check</a>
${signoff}
`,

reactivation_come_back: `
<h1>One last note from me</h1>
<p>Last email in this thread, I promise.</p>
<p>I know you've heard from me a few times this month. If the timing isn't right, it isn't right — life is full and mold is rarely the most urgent thing on the list. I get it.</p>
<p>Two things I want you to take with you:</p>
<ol style="padding-left:20px;color:#374151">
<li style="margin-bottom:10px"><b>The free re-check offer is open for 14 more days.</b> No charge, no upsell, no pressure. If you want to use it, use it. If not, no hard feelings.</li>
<li style="margin-bottom:10px"><b>If you ever need someone in your corner on this</b> — even just a question over text — my line is open. 305-849-0242. I respond to texts faster than emails.</li>
</ol>
<p>You don't owe me a reply. But if any of these emails got you thinking about something in your home, take 60 seconds and book the free check before it slips again. Future you will thank you.</p>
<a class="cta" href="https://theblackmoldguy.com/#quote">Claim free re-check</a>
<p style="font-size:13.5px;color:#7a8275;margin-top:24px">If you'd rather stop hearing from me — totally fine. <a href="#" style="color:#7a8275">Click here</a>.</p>
${signoff}
`,

review_request: `
<h1>How did I do, {first_name}?</h1>
<p>I really appreciate you trusting me with your home. As a small operator, every review changes my world more than you might realize.</p>
<p>Would you take 30 seconds to rate your experience?</p>
<div style="text-align:center;margin:30px 0">
  <a class="cta gold" href="#review-page" style="font-size:16px;padding:16px 32px">Rate my service ★★★★★</a>
</div>
<p style="text-align:center;font-size:13.5px;color:#7a8275">If anything wasn't 5-star, I want to know — I'll personally make it right.</p>
${signoff}
`,

review_5star_google: `
<h1>You just made my week.</h1>
<p>Seriously, thank you. Reviews like yours are what keep this business possible.</p>
<p>If you have one more minute — would you copy your kind words to Google? It's the single biggest thing that helps other families find me before they hire the wrong company.</p>
<a class="cta gold" href="#google-review">Share on Google — takes 60 sec</a>
<p style="font-size:13.5px;color:#7a8275;margin-top:20px">If you'd rather not, no problem at all. You've already done plenty.</p>
${signoff}
`,

review_low_internal: `
<h1>Internal: review needs follow-up</h1>
<p style="background:#fde8e8;border-left:3px solid #b91c1c;padding:14px 18px;border-radius:6px"><b>This is the email Deonco gets — not the customer.</b></p>
<p>A customer rated their experience below 4 stars. They've been told you'll personally call. <b>Reach out within 24 hours.</b></p>
<p><b>Customer:</b> Jane Doe<br>
<b>Email:</b> jane@example.com<br>
<b>Phone:</b> (404) 555-0142<br>
<b>Rating:</b> 3 stars<br>
<b>Feedback:</b><br>
<i>"Overall it was fine but I had to follow up twice to get the lab results, and I expected them faster."</i></p>
<a class="cta" href="#crm">Open lead in CRM</a>
${signoff}
`,
};

// Demo lead for token replacement
const lead = { first_name: "Sarah" };

for (const [key, body] of Object.entries(E)) {
  const rendered = body.replace(/\{(\w+)\}/g, (_, k) => lead[k] || '');
  const file = `./${key}.html`;
  fs.writeFileSync(file, wrap(rendered));
  console.log("wrote", file);
}
