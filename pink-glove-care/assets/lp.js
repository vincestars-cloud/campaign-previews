// Landing-page inquiry. Four steps instead of the site's six: the first two are a single tap
// each, and contact preference is folded into the consent line rather than costing a step.
// The payload shape is identical to the site form, so backend/validate-care.js accepts it
// unchanged -- asserted in checks/browser_check.py, not assumed.
(() => {
 'use strict';

 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const card=document.getElementById('lp-form');if(!card||!window.PG)return;
 const {esc,arrow,validPhone,validEmail,field,ready,bindPhone,send}=window.PG;
 const config=window.PINK_GLOVE_CONFIG||{};
 const state={requestId:crypto.randomUUID(),careFor:'',help:[],urgency:'',zip:'',method:'Both call & text',firstName:'',lastName:'',email:'',phone:'',contactTime:'',consent:false,website:''};
 const help=['A break from caregiving','Personal care & everyday help','Companionship','Memory support','Post-operative care','24-hour or live-in care','End-of-life support','Something else','I’m not sure yet'];
 const titles=['Who is the care for?','What would help most right now?','When would help start, and where?','Where should we send the plan?'];
 const hints=['One tap. Nothing is sent yet.','Choose all that fit. You don’t need to know the right service name.','Planning ahead is a good place to start, too.','We’ll build the plan and talk it through with you.'];
 const reassure=['','','','Free, no obligation, and it comes to Pink Glove Care alone.'];
 let step=0,busy=false,sent=false;

 function save(){const f=card.querySelector('form');if(!f)return;for(const k of ['zip','firstName','lastName','email','phone','website'])if(f.elements[k])state[k]=f.elements[k].value.trim();if(f.elements.consent)state.consent=f.elements.consent.checked;}
 function focus(){card.querySelector('h3')?.focus({preventScroll:true});}
 function choices(options,key,{multi=false,advance=true}={}){
  return `<div class="choices ${multi?'multi-choices':''}">${options.map(o=>`<button class="choice" type="button" data-option="${esc(o)}" data-key="${key}" data-advance="${advance}" aria-pressed="${multi?state.help.includes(o):state[key]===o}"><span>${esc(o)}</span>${multi||!advance?'<span class="selection-check" aria-hidden="true">✓</span>':arrow}</button>`).join('')}</div>`;
 }
 function render(focused=false){
  let content='';
  if(step===0)content=choices(['My mother','My father','My spouse','Someone else'],'careFor');
  if(step===1)content=choices(help,'help',{multi:true})+`<button class="btn continue" type="submit">Continue ${arrow}</button>`;
  if(step===2)content=choices(['Right away','Within a few weeks','Just planning ahead','I’m not sure'],'urgency',{advance:false})+field('zip','ZIP code where care is needed',state.zip,'required inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{5}" maxlength="5" title="Enter a five-digit ZIP code"')+`<button class="btn continue" type="submit">Continue ${arrow}</button>`;
  if(step===3)content=`<div class="field-pair">${field('firstName','First name',state.firstName,'required autocomplete="given-name" maxlength="80"')}${field('lastName','Last name',state.lastName,'required autocomplete="family-name" maxlength="80"')}</div>${field('phone','Phone number',state.phone,'required type="tel" autocomplete="tel-national" maxlength="18"')}${field('email','Email address',state.email,'required type="email" autocomplete="email" maxlength="150"')}<label class="consent"><input type="checkbox" name="consent" ${state.consent?'checked':''} required><span>I agree that Pink Glove Care may contact me about this request by phone and text. We don’t sell your information. Message and data rates may apply. Reply STOP to stop texts. <a href="../privacy.html">Privacy details</a>.</span></label><label class="honey" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off" value="${esc(state.website)}"></label><button class="btn" type="submit">${ready(config.inquiryEndpoint)?'Send me the plan':'Preview my request'} ${arrow}</button>`;
  const errorBox='<p class="error" role="alert"></p>';
  content=/<button class="btn/.test(content)?content.replace(/<button class="btn/,errorBox+'<button class="btn'):content+errorBox;
  const pct=Math.round(((step+1)/titles.length)*100);
  card.innerHTML=`<div class="form-meta"><span>Your free one-page care plan</span><span>Step ${step+1} of ${titles.length}</span></div>`
   +`<div class="lp-progress-track" aria-hidden="true"><div class="lp-progress-fill" style="width:${pct}%"></div></div>`
   +`<h3 tabindex="-1">${titles[step]}</h3><p class="intro">${hints[step]}</p><form novalidate>${content}</form>`
   +(reassure[step]?`<p class="lp-reassure">${reassure[step]}</p>`:'')
   +(step?'<button type="button" class="form-back">← Back</button>':'');
  card.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{
   const v=b.dataset.option;
   if(step===1){
    const only=['I’m not sure yet'];
    if(state.help.includes(v))state.help=state.help.filter(x=>x!==v);
    else state.help=only.includes(v)?[v]:[...state.help.filter(x=>!only.includes(x)),v];
    card.querySelectorAll('[data-option]').forEach(x=>x.setAttribute('aria-pressed',state.help.includes(x.dataset.option)));
   }else if(b.dataset.advance==='false'){
    state[b.dataset.key]=v;
    card.querySelectorAll(`[data-key="${b.dataset.key}"]`).forEach(x=>x.setAttribute('aria-pressed',x.dataset.option===v));
   }else{save();state[b.dataset.key]=v;step++;render(true);}
  }));
  card.querySelector('.form-back')?.addEventListener('click',()=>{if(busy)return;save();step--;render(true);});
  const form=card.querySelector('form');bindPhone(form);form.addEventListener('submit',submit);if(focused)focus();
 }
 function fail(message,name){const error=card.querySelector('.error');error.textContent=message;const f=card.querySelector('form');const el=name&&f.elements[name];if(el){el.setAttribute('aria-invalid','true');el.focus({preventScroll:false});}else error.scrollIntoView({block:'nearest'});}
 async function submit(ev){
  ev.preventDefault();if(busy)return;save();
  card.querySelector('.error').textContent='';card.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  if(step===1&&!state.help.length){fail('Choose at least one option, or “I’m not sure yet.”');return;}
  if(step===2&&!state.urgency){fail('Let us know roughly when help would start.');return;}
  if(step===2&&!/^\d{5}$/.test(state.zip)){fail('Please enter the five-digit ZIP code where care is needed.','zip');return;}
  if(step<3){step++;render(true);return;}
  if(!state.firstName||!state.lastName){fail('Please add your first and last name.',state.firstName?'lastName':'firstName');return;}
  if(!validPhone(state.phone)){fail('Please enter a valid 10-digit US phone number.','phone');return;}
  if(!validEmail(state.email)){fail('Please enter your email address, such as name@gmail.com.','email');return;}
  if(!state.consent){fail('Please tick the box so we know we may contact you about this request.','consent');return;}
  if(!ready(config.inquiryEndpoint)){
   card.innerHTML=`<div class="form-meta"><span>Your request preview</span></div><h3 tabindex="-1">Here’s what you’ve shared.</h3><dl class="request-summary"><div><dt>Care for</dt><dd>${esc(state.careFor)}</dd></div><div><dt>Help</dt><dd>${esc(state.help.join(', '))}</dd></div><div><dt>When &amp; where</dt><dd>${esc(state.urgency)} · ${esc(state.zip)}</dd></div><div><dt>Contact</dt><dd>${esc(state.firstName+' '+state.lastName)}<br>${esc(state.phone)}<br>${esc(state.email)}</dd></div></dl><button class="form-back">← Edit my details</button>`;
   card.querySelector('button').onclick=()=>render(true);focus();return;
  }
  busy=true;card.querySelectorAll('button').forEach(b=>b.disabled=true);
  try{
   await send(config.inquiryEndpoint,{...state,kind:'care',consentVersion:'care-2026-09-09',source:location.pathname});
   sent=true;
   card.innerHTML='<div class="form-meta"><span>Your request is with us</span></div><h3 tabindex="-1">We’ll take it from here.</h3><p class="intro">We’ll build your plan, check the area and the hours you asked about, and call you to talk it through. The rate, the minimum and any additional fees will be on it.</p><p class="fine">You don’t need to submit another request.</p>';
   focus();
  }catch(_){card.querySelector('.error').textContent='We couldn’t confirm delivery. Your answers are still here. Please try again.';card.querySelectorAll('button').forEach(b=>b.disabled=false);}
  finally{busy=false;}
 }
 render();
 document.querySelectorAll('a[href="#plan"]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();
  card.scrollIntoView({behavior:reduce?'instant':'smooth',block:'center'});
  if(!sent&&!busy)setTimeout(focus,reduce?0:460);
 }));

 // The sticky mobile bar duplicates the hero form. Show it only once the hero has scrolled away.
 const bar=document.querySelector('.mobile-actions'),heroEl=document.querySelector('.lp-hero');
 if(bar&&heroEl&&'IntersectionObserver' in window){
  bar.classList.add('is-hidden');
  new IntersectionObserver(([e])=>bar.classList.toggle('is-hidden',e.isIntersecting),{threshold:0}).observe(heroEl);
 }
})();
