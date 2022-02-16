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

// const media = matchMedia("screen and (max-width: 840px)");
const navbar__toggle = document.getElementsByClassName("navbar__toggle-btn");
const navbar__menu = document.getElementsByClassName("navbar__menu");
const navbar__menu_style = window.getComputedStyle(navbar__menu[0]);

// navbar-menu control

navbar__toggle[0].addEventListener("click", display);
function display() {
  if (navbar__menu_style.display == "none") {
    navbar__menu[0].classList.add("navbar__menu_toggle");
  } else {
    navbar__menu[0].classList.remove("navbar__menu_toggle");
  }
}
