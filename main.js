"Use Strict";

// stick the navbar

const navbar = document.getElementsByClassName("navbar");
window.onscroll = function sticky() {
  if (window.scrollY > navbar[0].scrollTop) {
    navbar[0].classList.add("nav");
  } else {
    navbar[0].classList.remove("nav");
  }
};

// navbar-menu control

const navbar__toggle = document.getElementsByClassName("navbar__toggle-btn");
const navbar__menu = document.getElementsByClassName("navbar__menu");
const navbar__menu_style = window.getComputedStyle(navbar__menu[0]);

navbar__toggle[0].addEventListener("click", display);
function display() {
  if (navbar__menu_style.display == "none") {
    navbar__menu[0].classList.add("navbar__menu_toggle");
  } else {
    navbar__menu[0].classList.remove("navbar__menu_toggle");
  }
}

// connect menu to section

const home__contact = document.getElementsByClassName("home__contact");
const navbar__menu__item = document.getElementsByClassName("navbar__menu__item");

for (let i = 0 ; i > length.navbar__menu__item; i++) {
navbar__menu__item[i].addEventListener("click", move)};
function move() {
  window.scrollTo(window.offset(navbar__menu__item[i].innerText))
};

/* Test code
const media = matchMedia("screen and (max-width: 840px)");
*/