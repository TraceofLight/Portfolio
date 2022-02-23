"Use Strict";

// stick the navbar & Transperent

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`Height is ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
      navbar.classList.add("nav");   
    } else {
      navbar.classList.remove("nav");
  }
});

// og_code
// const navbar = document.getElementsByClassName("navbar");
// window.onscroll = function sticky() {
//   if (window.scrollY > navbar[0].scrollTop) {
//     navbar[0].classList.add("nav");
//   } else {
//     navbar[0].classList.remove("nav");
//   }
// };

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

// Scroll to section

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
//  console.log(target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
  navbar__menu[0].classList.remove("navbar__menu_toggle");
});

//const home__contact = document.getElementsByClassName("home__contact");
//const navbar__menu__item = document.getElementsByClassName("navbar__menu__item");

//for (let i = 0 ; i > length.navbar__menu__item; i++) {
//navbar__menu__item[i].addEventListener("click", move)};
// function move() {
//  window.scrollTo(window.offset(navbar__menu__item[i].innerText))
// };

/* Test code
const media = matchMedia("screen and (max-width: 840px)");
*/