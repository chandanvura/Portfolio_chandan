const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.primary-nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    header.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }
});
const reveals = document.querySelectorAll('.reveal');
if (reduced || !('IntersectionObserver' in window)) reveals.forEach(el => el.classList.add('visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .1, rootMargin: '0px 0px -40px' });
  reveals.forEach(el => observer.observe(el));
}
document.getElementById('year').textContent = new Date().getFullYear();
