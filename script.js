// Small interactive helpers: mobile nav toggle and year insertion
(function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', ()=>{
    if(!nav) return;
    const shown = nav.style.display === 'flex' || nav.style.display === '';
    nav.style.display = shown ? 'none' : 'flex';
  });

  // insert current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href === '#' || href === '') return;
      const el = document.querySelector(href);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
      if(window.innerWidth <= 640 && nav) nav.style.display = 'none';
    });
  });
})();
