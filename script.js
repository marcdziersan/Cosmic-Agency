// script.js
function scrollToSection() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
  const navList = document.querySelector("nav#main-nav ul");
  const hamburger = document.querySelector(".hamburger");
  navList.classList.toggle("open");
  hamburger.classList.toggle("open");
}
