
// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});