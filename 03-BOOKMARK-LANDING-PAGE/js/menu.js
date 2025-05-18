const hamburger = document.querySelector(".nav__icon");
const logo = document.querySelector(".nav__logo")
const menu = document.querySelector(".nav__list");
let openMenu = true;

hamburger.addEventListener("click", () => {
  if (openMenu) {
    logo.src = "./images/logo-bookmark-white.svg"
    hamburger.src = "./images/icon-close.svg";
    openMenu = false;
  } else {
    logo.src = "./images/logo-bookmark.svg"
    hamburger.src = "./images/icon-hamburger.svg";
    openMenu = true;
  }
  menu.classList.toggle("nav__list--show");
});
