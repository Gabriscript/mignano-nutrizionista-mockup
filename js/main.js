// Mobile menu, booking dock, strike-through strip and the "cosa portare" checklist. The page works without this file.

const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  const setOpen = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); menuBtn.focus(); }
  });
}

// Signature: the pen crosses out the four items once the strip is on screen. No observer: shown already crossed out.
const cut = document.querySelector('.cut');
if (cut) {
  if (!('IntersectionObserver' in window)) {
    cut.classList.add('is-in');
  } else {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { cut.classList.add('is-in'); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(cut);
  }
}

// Mobile dock: one booking button per screen, so it hides while the hero or studio button is visible.
const dock = document.querySelector('.dock');
if (dock) {
  if (!('IntersectionObserver' in window)) {
    dock.classList.add('is-shown');
  } else {
    const onScreen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
      dock.classList.toggle('is-shown', onScreen.size === 0);
      dock.inert = onScreen.size > 0;
    });
    document.querySelectorAll('.hero .btn--primary, .studio .btn--primary').forEach((b) => io.observe(b));
  }
}

const boxes = [...document.querySelectorAll('.checklist input')];
const status = document.querySelector('.checklist__status');
const KEY = 'mignano-prima-visita';

// remembered per browser so the patient can tick documents over several days
let saved = [];
try { saved = JSON.parse(localStorage.getItem(KEY)) || []; } catch { /* storage blocked: start empty */ }
if (!Array.isArray(saved)) saved = [];
boxes.forEach((b) => { b.checked = saved.includes(b.value); });

function update() {
  const ready = boxes.filter((b) => b.checked);
  if (status) {
    status.textContent = ready.length === boxes.length ? 'Tutto pronto per la prima visita.'
      : ready.length ? `Documenti pronti: ${ready.length} su ${boxes.length}.` : '';
  }
  try { localStorage.setItem(KEY, JSON.stringify(ready.map((b) => b.value))); } catch { /* not saved, still works */ }
}
boxes.forEach((b) => b.addEventListener('change', update));
update();
