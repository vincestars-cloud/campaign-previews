(() => {
 'use strict';
 const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const arrow='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
 const phoneFormat=v=>{let d=v.replace(/\D/g,'');if(d.length===11&&d[0]==='1')d=d.slice(1);d=d.slice(0,10);return d.length>6?`(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`:d.length>3?`(${d.slice(0,3)}) ${d.slice(3)}`:d;};
 const validPhone=v=>{const d=v.replace(/\D/g,'');return /^[2-9]\d{2}[2-9]\d{6}$/.test(d)&&!(/^(\d)\1+$/.test(d));};
 const validEmail=v=>{const s=v.trim().toLowerCase();return /^[^\s@]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)&&!s.includes('..')&&!/^[.@]|\.@/.test(s)&&!/@(example\.(com|org|net)|test\.com|email\.com|fake\.com|invalid\.com)$/.test(s)&&!/@.*\.(invalid|test|example)$/.test(s);};
 const field=(key,label,value='',attrs='')=>`<label class="field">${label}<input name="${key}" value="${esc(value)}" ${attrs}></label>`;
 const select=(key,label,options,value='',required=true)=>`<label class="field">${label}<select aria-label="${esc(label)}" name="${key}" ${required?'required':''}><option value="">${required?'Choose one':'No preference'}</option>${options.map(o=>`<option ${o===value?'selected':''}>${esc(o)}</option>`).join('')}</select></label>`;
 const ready=url=>/^https:\/\//.test(url||'');
 function bindPhone(form){form.querySelectorAll('[type=tel]').forEach(input=>input.addEventListener('input',()=>{const end=input.selectionStart===input.value.length;input.value=phoneFormat(input.value);if(end)input.setSelectionRange(input.value.length,input.value.length);}));}
 async function send(url,payload,resume){const body=new FormData();body.append('payload',JSON.stringify(payload));if(resume)body.append('resume',resume);const response=await fetch(url,{method:'POST',body,signal:AbortSignal.timeout(45000)});let result;try{result=await response.json();}catch(_){throw Error('No confirmation');}if(!response.ok||result.ok!==true||result.requestId!==payload.requestId)throw Error('No confirmation');return result;}
 window.PG={esc,arrow,phoneFormat,validPhone,validEmail,field,select,ready,bindPhone,send};
 const card=document.getElementById('care-form');if(!card)return;
 const config=window.PINK_GLOVE_CONFIG||{};
 const state={requestId:crypto.randomUUID(),careFor:'',help:[],urgency:'',zip:'',method:'',firstName:'',lastName:'',email:'',phone:'',contactTime:'',consent:false,website:''};
 const help=['A break from caregiving','Personal care & everyday help','Companionship','Memory support','Post-operative care','24-hour or live-in care','End-of-life support','Something else','I’m not sure yet'];
 let step=0,busy=false,sent=false;
 const titles=['Who is the care for?','What would help most right now?','How soon is care needed?','Where is care needed?','How would you prefer we reach you?','Almost done. Let’s put a name to the conversation.'];
 const hints=['A little about the person you’re looking out for.','Choose all that fit. You don’t need to know the right service name.','Planning ahead is a good place to start, too.','The ZIP code helps us check whether we can help in your area.','We’ll include your preference with your request.','We’ll review your needs and area, then reach out to talk through options. You can ask questions before deciding.'];
 function save(){const f=card.querySelector('form');if(!f)return;for(const key of ['zip','firstName','lastName','email','phone','contactTime','website'])if(f.elements[key])state[key]=f.elements[key].value.trim();if(f.elements.consent)state.consent=f.elements.consent.checked;}
 function focus(){card.querySelector('h3')?.focus({preventScroll:true});}
 function choices(options,key,multi=false){return `<div class="choices ${multi?'multi-choices':''}">${options.map(o=>`<button class="choice" type="button" data-option="${esc(o)}" data-key="${key}" aria-pressed="${multi?state.help.includes(o):state[key]===o}"><span>${esc(o)}</span>${multi?'<span class="selection-check" aria-hidden="true">✓</span>':arrow}</button>`).join('')}</div>`;}
 function render(focused=false){
  let content='';
  if(step===0)content=choices(['My parent(s)','My spouse','Myself','Someone else'],'careFor');
  if(step===1)content=choices(help,'help',true)+`<p class="fine">If your needs call for another service, we’ll talk about options. We only share your details with another provider with your permission.</p><button class="btn continue" type="submit">Continue ${arrow}</button>`;
  if(step===2)content=choices(['Right away','Within a few weeks','Just planning ahead','I’m not sure'],'urgency');
  if(step===3)content=field('zip','Care ZIP code',state.zip,'required inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{5}" maxlength="5" title="Enter a five-digit ZIP code"')+`<button class="btn continue" type="submit">Continue ${arrow}</button>`;
  if(step===4)content=choices(['Call','Text','Both call & text'],'method');
  if(step===5)content=`<div class="field-pair">${field('firstName','First name',state.firstName,'required autocomplete="given-name" maxlength="80"')}${field('lastName','Last name',state.lastName,'required autocomplete="family-name" maxlength="80"')}</div>${field('email','Email address',state.email,'required type="email" autocomplete="email" maxlength="150"')}${field('phone','Phone number',state.phone,'required type="tel" autocomplete="tel-national" maxlength="18"')}${select('contactTime','A good time to reach you (optional)',['Morning','Afternoon','Evening'],state.contactTime,false)}<p class="fine">Choose a time in the care recipient’s local time zone. We’ll use it as a preference.</p><label class="consent"><input type="checkbox" name="consent" ${state.consent?'checked':''} required><span>I agree that Pink Glove Care may contact me about this request by ${state.method==='Call'?'phone':state.method==='Text'?'text':'phone and text'}. We don’t sell your information. ${state.method!=='Call'?'Message and data rates may apply. Reply STOP to stop texts. ':''}<a href="${location.pathname.includes('/care/')||location.pathname.includes('/resources/')?'../':''}privacy.html">Privacy details</a>.</span></label><label class="honey" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off" value="${esc(state.website)}"></label><button class="btn" type="submit">${ready(config.inquiryEndpoint)?'Let’s talk about care':'Preview my request'} ${arrow}</button>`;
  const errorBox='<p class="error" role="alert"></p>';content=/<button class="btn/.test(content)?content.replace(/<button class="btn/,errorBox+'<button class="btn'):content+errorBox;
  card.innerHTML=`<div class="form-meta"><span>Let’s find a little help</span><span>Step ${step+1} of 6</span></div><div class="progress" aria-hidden="true">${titles.map((_,i)=>`<i class="${i<=step?'active':''}"></i>`).join('')}</div><h3 tabindex="-1">${titles[step]}</h3><p class="intro">${hints[step]}</p><form novalidate>${content}</form>${step?'<button type="button" class="form-back">← Back</button>':''}`;
  card.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>{
   if(step===1){const v=b.dataset.option;const exclusives=['I’m not sure yet'];if(state.help.includes(v))state.help=state.help.filter(x=>x!==v);else state.help=exclusives.includes(v)?[v]:[...state.help.filter(x=>!exclusives.includes(x)),v];card.querySelectorAll('[data-option]').forEach(x=>x.setAttribute('aria-pressed',state.help.includes(x.dataset.option)));}
   else{state[b.dataset.key]=b.dataset.option;step++;render(true);}
  }));
  card.querySelector('.form-back')?.addEventListener('click',()=>{if(busy)return;save();step--;render(true);});
  const form=card.querySelector('form');bindPhone(form);form.addEventListener('submit',submit);if(focused)focus();
 }
 function fail(message,name){const error=card.querySelector('.error');error.textContent=message;const f=card.querySelector('form');const el=name&&f.elements[name];if(el){el.setAttribute('aria-invalid','true');el.focus({preventScroll:false});}else error.scrollIntoView({block:'nearest'});}
 async function submit(ev){ev.preventDefault();if(busy)return;save();const error=card.querySelector('.error');error.textContent='';card.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  if(step===1&&!state.help.length){fail('Choose at least one option, or “I’m not sure yet.”');return;}
  if(step===3&&!/^\d{5}$/.test(state.zip)){fail('Please enter the five-digit ZIP code where care is needed.','zip');return;}
  if(step<5){step++;render(true);return;}
  if(!state.firstName||!state.lastName){fail('Please add your first and last name.',state.firstName?'lastName':'firstName');return;}
  if(!validEmail(state.email)){fail('Please enter your email address, such as name@gmail.com.','email');return;}
  if(!validPhone(state.phone)){fail('Please enter a valid 10-digit US phone number.','phone');return;}
  if(!state.consent){fail('Please tick the box so we know we may contact you about this request.','consent');return;}
  if(!ready(config.inquiryEndpoint)){
   card.innerHTML=`<div class="form-meta"><span>Your request preview</span></div><h3 tabindex="-1">Here’s what you’ve shared.</h3><dl class="request-summary"><div><dt>Care for</dt><dd>${esc(state.careFor)}</dd></div><div><dt>Help</dt><dd>${esc(state.help.join(', '))}</dd></div><div><dt>When & where</dt><dd>${esc(state.urgency)} · ${esc(state.zip)}</dd></div><div><dt>Contact</dt><dd>${esc(state.firstName+' '+state.lastName)}<br>${esc(state.phone)} · ${esc(state.method)}<br>${esc(state.email)}</dd></div></dl><button class="form-back">← Edit my details</button>`;card.querySelector('button').onclick=()=>render(true);focus();return;
  }
  busy=true;card.querySelectorAll('button').forEach(b=>b.disabled=true);
  try{await send(config.inquiryEndpoint,{...state,kind:'care',consentVersion:'care-2026-09-09',source:location.pathname});sent=true;card.innerHTML='<div class="form-meta"><span>Your request is with us</span></div><h3 tabindex="-1">We’ll take it from here.</h3><p class="intro">We’ll review what you’ve shared, check your area and the support needed, and reach out by your preferred contact method. We’ll discuss options, schedules, and costs before you decide about care.</p><p class="fine">You don’t need to submit another request.</p>';focus();}
  catch(_){error.textContent='We couldn’t confirm delivery. Your answers are still here. Please try again.';card.querySelectorAll('button').forEach(b=>b.disabled=false);}
  finally{busy=false;}
 }
 render();
 const mapping={'Help with everyday personal care':'Personal care & everyday help','Companionship for Mom':'Companionship','Dementia & memory support':'Memory support','Post-operative care':'Post-operative care','24-hour & live-in care':'24-hour or live-in care'};
 document.querySelectorAll('[data-start-care]').forEach(b=>b.addEventListener('click',()=>{if(busy)return;if(!sent){save();const v=mapping[b.dataset.startCare]||b.dataset.startCare;state.help=help.includes(v)?[v]:['I’m not sure yet'];step=0;render();}card.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});focus();}));
})();
