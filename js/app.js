document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Back-to-top button (appears after scrolling down)
  const topBtn = document.createElement('button');
  topBtn.textContent = '\u2191 Top';
  topBtn.setAttribute('aria-label', 'Back to top');
  topBtn.style.cssText = 'position:fixed;right:1rem;bottom:1rem;display:none;padding:.6rem 1rem;' +
    'background:#c8102e;color:#fff;border:0;border-radius:4px;cursor:pointer;font-family:Arial,sans-serif;';
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(topBtn);
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  // Contact form confirmation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('form-msg').textContent = 'Thanks! We got your message.';
      form.reset();
    });
  }
});
