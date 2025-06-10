document.addEventListener('DOMContentLoaded', () => {
  // Carousel
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);

  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab, .content').forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Accordion
  document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
      const ans = q.nextElementSibling;
      ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    });
  });
});
