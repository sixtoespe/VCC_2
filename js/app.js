document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

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
