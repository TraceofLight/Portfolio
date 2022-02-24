"Use Strict";

// stick the navbar & Transperent

function getHeight(id) {
  const selection = document.querySelector(id);
  return selection.getBoundingClientRect().height;
}

const navbar = document.querySelector('#navbar');
const navbarHeight = getHeight('#navbar');
document.addEventListener('scroll', () => {
//  console.log(window.scrollY);
//  console.log(`Height is ${navbarHeight}`);
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

// Scroll to Contact Me

const contactBtn = document.querySelector('#home__contact');
// console.log(contactBtn);
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
  navbar__menu[0].classList.remove("navbar__menu_toggle");
}

// og_code
//for (let i = 0 ; i > length.navbar__menu__item; i++) {
//navbar__menu__item[i].addEventListener("click", move)};
// function move() {
//  window.scrollTo(window.offset(navbar__menu__item[i].innerText))
// };

// Fading by scroll

function fading(id, timing) {
  const id_ = document.querySelector(id);
  document.addEventListener('scroll', () => {
    if (window.scrollY - getHeight(id) + timing > 0) {
      id_.classList.add("fading");
    } else {
      id_.classList.remove("fading");
    }
  }
  );
}

fading(#home,-200);
fading(#about,300);
fading(#skills,300);
fading(#work,300);
fading(#testimonials,300);
fading(#contact,300);

/*const home = document.querySelector('#home');

document.addEventListener('scroll', () => {
  //console.log(getHeight('#home'));
  if(window.scrollY - getHeight('#home')>-300) {
    //console.log(window.scrollY);
    home.classList.add("fading");
    //console.log(home.classList);    
} else {
  home.classList.remove("fading");
}
})

*/

//const home__contact = document.getElementsByClassName("home__contact");
//const navbar__menu__item = document.getElementsByClassName("navbar__menu__item");


/* Test code
const media = matchMedia("screen and (max-width: 840px)");
*/