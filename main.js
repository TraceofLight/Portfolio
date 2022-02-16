"Use Strict";

const nav = document.getElementsByClassName("navbar__all");

window.onscroll = function sticky() {
  if (window.scrollY > nav.scrollTop) {
    nav.classList.add("nav");
  } else {
    nav.classList.remove("nav");
  }
};

const media = matchMedia("screen and (max-width: 840px)")
const nav_toggle = document.getElementsByClassName("navbar__toggle-btn");
const nav_menu = document.getElementsByClassName("navbar__menu");
const nav_display = media.nav_menu.style.display;

nav_toggle.addEventListener("click", display());

function display() {
  if(media.nav_menu.style.display == 'none') {
    media.nav_menu.style.display = 'flex',
    media.nav_menu.classList.add("nav__menu_onclick");
  } else {
    media.nav_menu.style.display = 'none',
    media.nav_menu.classList.remove("nav__menu_onclick");
  }
}
