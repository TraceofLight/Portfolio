"Use Strict";

const nav = document.getElementsByClassName("navbar__all");

window.onscroll = function sticky() {
  if (window.scrollY > nav[0].scrollTop) {
    nav[0].classList.add("nav");
  } else {
    nav[0].classList.remove("nav");
  }
};
