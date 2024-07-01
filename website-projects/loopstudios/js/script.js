const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
}
