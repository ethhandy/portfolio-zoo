// ===== Nav scroll effect =====
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        const idx = Array.from(siblings).indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.1}s`;
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
);

reveals.forEach(el => revealObserver.observe(el));

// ===== Skill bar animation =====
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.setProperty('--target-width', width + '%');
        fill.classList.add('animate');
        skillObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.5 }
);

skillFills.forEach(el => skillObserver.observe(el));

// ===== Active nav link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 250) {
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

// ===== Parallax blobs on scroll =====
const blobs = document.querySelectorAll('.blob');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  blobs.forEach((blob, i) => {
    const speed = 0.02 + i * 0.015;
    blob.style.transform = `translateY(${y * speed}px)`;
  });
});

// ===== Tilt on project cards =====
document.querySelectorAll('.pcard').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(800px)
      rotateY(${x * 6}deg)
      rotateX(${-y * 6}deg)
      translateY(-6px)
      scale(1.01)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
