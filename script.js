window.addEventListener('load', function() {
  alert('Bem-vindo ao Coffee Shops Tia Rosa! Aproveite a visita. ☕');
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

