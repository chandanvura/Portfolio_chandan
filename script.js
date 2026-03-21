const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// Modal
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-modal');
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.modal').style.display = 'none');
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) e.target.style.display = 'none';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('animate-in');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.experience-item, .certification-card, .achievement-card, .project-card, .contact-card').forEach(el => {
  el.classList.add('pre-animate');
  observer.observe(el);
});
