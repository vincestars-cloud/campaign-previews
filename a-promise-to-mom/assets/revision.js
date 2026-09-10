(() => {
 const stage=document.querySelector('.promise-stage'),orbit=document.querySelector('.stage-orbit'),people=document.querySelector('.stage-people'),paths=document.querySelector('.path-experience');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),desktop=matchMedia('(min-width:901px)');
 let ticking=false;
 const paint=()=>{ticking=false;if(!stage)return;if(reduce.matches||!desktop.matches){orbit.style.transform='none';people.style.transform='none';return}const r=stage.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/r.height));orbit.style.transform=`translateY(${p*45}px) scale(${1-p*.09})`;people.style.transform=`translateY(${p*15}px) scale(${1+p*.018})`};
 const schedule=()=>{if(!ticking){ticking=true;requestAnimationFrame(paint)}};
 if(stage){window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);reduce.addEventListener('change',schedule);paint()}
 if(paths){new IntersectionObserver((entries,obs)=>{if(entries[0].isIntersecting){paths.classList.add('in-view');obs.disconnect()}},{threshold:.15}).observe(paths)}
 document.querySelectorAll('.path-select').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.living-path').forEach(card=>{const b=card.querySelector('.path-select'),on=b===button;card.classList.toggle('is-active',on);b.setAttribute('aria-expanded',String(on));b.querySelector('span').textContent=on?'−':'+';document.getElementById(b.getAttribute('aria-controls')).hidden=!on});}));
})();
(() => {const action=document.querySelector('.stage-action');if(!action)return;new IntersectionObserver(entries=>{document.body.classList.toggle('show-floating-action',!entries[0].isIntersecting)},{threshold:0}).observe(action)})();
