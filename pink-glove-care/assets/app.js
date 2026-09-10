(() => {
  'use strict';
  const config = window.PINK_GLOVE_CONFIG || {};
  const header = document.querySelector('.header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 35);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  const dialog = document.querySelector('#phone-information');
  document.querySelectorAll('[data-call]').forEach(link => {
    if (/^\+[1-9]\d{7,14}$/.test(config.phone || '')) {
      link.href = `tel:${config.phone}`;
      link.setAttribute('aria-label', `Call Pink Glove Care ${config.phoneDisplay || config.phone}`);
    } else {
      link.addEventListener('click', e => { e.preventDefault(); dialog.showModal(); });
    }
  });
  dialog?.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
})();

// Brand interactions remain usable without hover or scroll effects.
(() => {
  const tabs = [...document.querySelectorAll('[data-life-tab]')];
  function selectTab(tab, focus = false) {
    tabs.forEach(t => {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', e => {
      let next;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { e.preventDefault(); selectTab(tabs[next], true); }
    });
  });
  // Hero depth: three planes travel at different rates. Copy rides with the page.
  const hero = document.querySelector('.scene-hero');
  const planes = [...document.querySelectorAll('[data-plane]')];
  const rates = { back: 32, subject: 8, front: -16 };
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width: 681px)');
  let queued = false;
  function frame() {
    queued = false;
    if (!hero || !planes.length) return;
    if (motion.matches || !wide.matches) { planes.forEach(p => { p.style.transform = ''; }); return; }
    const bounds = hero.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < innerHeight) {
      const progress = Math.max(0, Math.min(1, (88 - bounds.top) / bounds.height));
      planes.forEach(p => { p.style.transform = `translate3d(0,${(progress * (rates[p.dataset.plane] || 0)).toFixed(2)}px,0)`; });
    }
  }
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  motion.addEventListener('change', schedule);
  schedule();
})();

// One open at a time: opening a disclosure closes its siblings in the same group.
(() => {
  document.querySelectorAll('.care-disclosures, .faq, .article, .commitments').forEach(group => {
    group.addEventListener('toggle', e => {
      const d = e.target;
      if (!(d instanceof HTMLDetailsElement) || !d.open) return;
      group.querySelectorAll('details[open]').forEach(other => { if (other !== d && other.parentElement === d.parentElement) other.open = false; });
    }, true);
  });
})();

// Care index: the photograph follows the service that is open.
(() => {
  const img = document.querySelector('[data-care-photo]');
  const cap = document.querySelector('[data-care-caption]');
  const list = document.querySelector('.care-disclosures');
  if (!img || !list) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let token = 0;
  function show(d) {
    const src = d.dataset.photo; if (!src || img.getAttribute('src') === src) return;
    const my = ++token;
    const next = new Image(); next.src = src;
    const swap = () => { if (my !== token) return; img.src = src; img.alt = d.dataset.alt || ''; if (cap) cap.textContent = d.dataset.caption || ''; img.classList.remove('is-changing'); };
    if (reduce.matches) { next.decode().catch(() => {}).finally(swap); return; }
    img.classList.add('is-changing');
    Promise.all([next.decode().catch(() => {}), new Promise(r => setTimeout(r, 180))]).then(swap);
  }
  list.addEventListener('toggle', e => { if (e.target.open && e.target.dataset.photo) show(e.target); }, true);
})();
