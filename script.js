// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Optional: trigger a one-shot bounce when the logo is tapped (mobile-friendly)
const logo = document.querySelector('.logo-wrap');
if (logo) {
  logo.addEventListener('click', () => {
    const el = logo.querySelector('.logo-3d');
    el.style.animation = 'none';
    // force reflow so the animation restarts
    void el.offsetWidth;
    el.style.animation = 'bounce-3d 1.2s ease-in-out 1';
    setTimeout(() => {
      el.style.animation = 'idle-float 4s ease-in-out infinite';
    }, 1300);
  });
}
