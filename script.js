const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('form[data-form]').forEach((form) => {
  form.addEventListener('submit', () => {
    const formType = form.dataset.form || 'Yaşamgah Formu';
    const summaryField = form.querySelector('[data-summary-field]');
    const data = new FormData(form);
    const ignored = new Set(['_subject', '_template', '_captcha', '_next', 'Gönderim Özeti']);
    const lines = [];

    for (const [key, value] of data.entries()) {
      if (!ignored.has(key) && String(value).trim()) {
        lines.push(`${key}: ${value}`);
      }
    }

    if (summaryField) {
      summaryField.value = [
        `Form: ${formType}`,
        `Tarih: ${new Date().toLocaleString('tr-TR')}`,
        `Sayfa: ${window.location.href}`,
        '',
        ...lines
      ].join('\n');
    }
  });
});
