// Bioluminescence ambient particles
function initParticles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const n = count || 30;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'bioluminescence-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 12 + 's';
    p.style.animationDuration = (14 + Math.random() * 18) + 's';
    container.appendChild(p);
  }
}

// Mobile nav toggle
function initMobileNav() {
  const btn = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('mobileNavMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// Nav shrink on scroll
function initNavShrink() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('py-4', 'bg-surface/90');
      nav.classList.remove('py-6', 'bg-surface/10');
    } else {
      nav.classList.remove('py-4', 'bg-surface/90');
      nav.classList.add('py-6', 'bg-surface/10');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles('particle-container', 30);
  initMobileNav();
  initNavShrink();
});
