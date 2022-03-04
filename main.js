"Use Strict";

// stick the navbar & Transperent

function getHeight(id) {
  const selection = document.querySelector(id);
  return selection.getBoundingClientRect().height;
}

const navbar = document.querySelector("#navbar");
const navbarHeight = getHeight("#navbar");
document.addEventListener("scroll", () => {
  //  console.log(window.scrollY);
  //  console.log(`Height is ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
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

function actionTime(anything, action) {
  anything.classList.add(action);
  setTimeout(() => {
    anything.classList.remove(action);
  }, 300);
}

const navbar__toggle = document.querySelector(".navbar__toggle-btn");
const navbar__menu = document.querySelector(".navbar__menu");
const navbar__menu_style = window.getComputedStyle(navbar__menu);

navbar__toggle.addEventListener("click", () => {
  actionTime(navbar__menu, "anim_nav");
  if (navbar__menu_style.display == "none") {
    navbar__menu.classList.add("navbar__menu_visible");
  } else {
    navbar__menu.classList.remove("navbar__menu_visible");
  }
});

// Scroll to section

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  //  console.log(target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  navbar__menu.classList.remove("navbar__menu_visible");
});

// Scroll to Contact Me

const contactBtn = document.querySelector("#home__contact");
// console.log(contactBtn);
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  navbar__menu[0].classList.remove("navbar__menu_toggle");
}

// og_code
//for (let i = 0 ; i > length.navbar__menu__item; i++) {
//navbar__menu__item[i].addEventListener("click", move)};
// function move() {
//  window.scrollTo(window.offset(navbar__menu__item[i].innerText))
// };

// Fading by scroll

/* const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
}); */

function fading(id) {
  const id_query = document.querySelector(id);
  const idHeight = id_query.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    id_query.style.opacity = 1 - window.scrollY / idHeight;
  });
}

fading(".home__container");

//fading('#about');
//fading('#skills');
//fading('#work');
//fading('#testimonials');
//fading('#contact');

/* og_code

function fading(id) {
  const id_ = document.querySelector(id);
  document.addEventListener('scroll', () => {
    if (window.scrollY - getHeight(id) > 0) {
      console.log(id);

      //id_.classList.add("fading");
      console.log(`${window.scrollY} and ${getHeight(id)}`)
    } else {
      //id_.classList.remove("fading");
    }
  }
  );
}

fading('#home', 100);
fading('#about',100);
fading('#skills',100);
fading('#work',100);
fading('#testimonials',100);
fading('#contact',100);

const home = document.querySelector('#home');

document.addEventListener('scroll', () => {
  //console.log(getHeight('#home'));
  if(window.scrollY - getHeight('#home')>300) {
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

// Arrow Button

function Arrow() {
  const arrowBtn = document.querySelector(".arrowBtn");
  const top = document.querySelector("#home");
  arrowBtn.addEventListener("click", () => {
    top.scrollIntoView({ behavior: "smooth" });
  });
}

Arrow();

// Filtering my projects

function sorting() {
  const category_btn = document.querySelectorAll(".category__btn");
  const project = document.querySelectorAll(".project");
  const projectContainer = document.querySelector(".work__projects");
  project.forEach((target) => target.classList.add("project__display"));
  for (let i = 0; i < category_btn.length; i++) {
    for (let j = 0; j < project.length; j++) {
      category_btn[i].addEventListener("click", (btn) => {
        let targetBtn = btn.target;
        if (targetBtn.dataset.type == undefined) {
          targetBtn = btn.target.parentElement;
        }
        actionTime(projectContainer, "anim-out");
        const filter = project[j].dataset.filter;
        if (
          filter == targetBtn.dataset.type ||
          targetBtn.dataset.type == "all"
        ) {
          project[j].classList.remove("project__invisible");
        } else {
          project[j].classList.add("project__invisible");
        }
      });
    }
  }
}

sorting();

// Test code
// const media = matchMedia("screen and (max-width: 840px)");
