(() => {
 const menu=document.getElementById('mobile-menu'),toggle=document.querySelector('.menu-toggle');
 toggle?.addEventListener('click',()=>{menu.hidden=!menu.hidden;toggle.setAttribute('aria-expanded',String(!menu.hidden));toggle.setAttribute('aria-label',menu.hidden?'Open navigation':'Close navigation');toggle.textContent=menu.hidden?'Menu':'Close';});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';toggle.focus();}});
 document.querySelectorAll('[data-phone-display]').forEach(el=>el.textContent=window.PINK_GLOVE_CONFIG?.phoneDisplay||'');
 document.querySelectorAll('.letter-carousel').forEach(root=>{
  const slides=[...root.querySelectorAll('.letter-slide')],pause=root.querySelector('[data-letter-pause]');let index=0,paused=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const show=(n,announce=false)=>{index=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.hidden=i!==index);if(announce)root.querySelector('[data-letter-status]').textContent=`Letter ${index+1} of ${slides.length}`;};
  const label=()=>pause.textContent=paused?'Resume rotation':'Pause rotation';label();pause.onclick=()=>{paused=!paused;label();};
  root.querySelector('[data-letter-prev]').onclick=()=>{paused=true;label();show(index-1,true);};root.querySelector('[data-letter-next]').onclick=()=>{paused=true;label();show(index+1,true);};
  setInterval(()=>{const b=root.getBoundingClientRect();if(!paused&&!document.hidden&&!root.matches(':hover')&&!root.contains(document.activeElement)&&!root.querySelector('details[open]')&&b.top<innerHeight&&b.bottom>0)show(index+1);},10000);
 });
})();
