const petButtons = document.querySelectorAll('.switch-button');
const petCards = document.querySelectorAll('.pet-card');

petButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.pet;
    petButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    petCards.forEach((card) => card.classList.toggle('is-active', card.classList.contains(`pet-card-${selected}`)));
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const notifyButton = document.querySelector('#notifyButton');
const toast = document.querySelector('#toast');
let toastTimer;

notifyButton.addEventListener('click', () => {
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800);
});
