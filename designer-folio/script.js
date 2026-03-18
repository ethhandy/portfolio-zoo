// ===== Cursor Glow =====
const glow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ===== Scroll Reveal =====
const revealTargets = document.querySelectorAll(
  '.project-card, .about-left, .about-right, .contact-link, .stats-row'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach(el => observer.observe(el));

// ===== Staggered reveal for project cards =====
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// ===== Smooth nav background on scroll =====
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(10, 10, 10, 0.85)';
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
  } else {
    nav.style.background = 'transparent';
    nav.style.borderBottom = 'none';
  }
});

// ===== Active nav link highlight =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text)';
    }
  });
});
