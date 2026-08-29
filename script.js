// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Animated "ping" readout in the hero — purely decorative, ties to the brand
const pingValue = document.getElementById('pingValue');
const pingLine = document.getElementById('pingLine');
const regions = [
  { r: 'ap-south-1', ttl: 58 },
  { r: 'eu-west-2', ttl: 54 },
  { r: 'us-east-1', ttl: 49 },
  { r: 'me-central-1', ttl: 56 }
];
if (pingValue && pingLine && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % regions.length;
    const ms = 10 + Math.floor(Math.random() * 12);
    pingValue.textContent = ms + 'ms';
    pingLine.textContent = `reply from ${regions[i].r} · ttl=${regions[i].ttl}`;
  }, 2600);
}

// Contact form — replace this with a real endpoint or form service (e.g. Formspree) before going live
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('New enquiry from PingGlobe website');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:hello@pingglobe.example?subject=${subject}&body=${body}`;
    formNote.textContent = 'Opening your email client to send this…';
  });
}
