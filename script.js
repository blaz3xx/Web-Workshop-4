const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
  mobileNav.classList.add('is-open');
  body.classList.add('nav-open'); // Блокуємо скрол
  menuToggle.setAttribute('aria-expanded', 'true');
});

closeMenu.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
  body.classList.remove('nav-open'); // Розблоковуємо скрол
  menuToggle.setAttribute('aria-expanded', 'false');
});

// (Додатково) Закриття меню по кліку на посилання
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});