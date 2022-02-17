const header = document.querySelector("#header");
const toTopButton = document.querySelector("#toTopButton");
const mobileButton = document.querySelector("#mobileButton");
const nav = document.querySelector("#menu");
const links = document.querySelectorAll("nav li");
const main = document.querySelectorAll("main section");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.main.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    toTopButton.style.display = "block";
  } else {
    header.classList.remove("bg");
    toTopButton.style.display = "none";
  }
};

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const dropDown = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    main.forEach((section) => section.classList.remove("notClickable"));
  } else {
    nav.classList.add("responsive");
    main.forEach((section) => section.classList.add("notClickable"));
  }
};

const removeDropDown = () => {
  if (nav.classList.contains("responsive")) {
    main.forEach((section) => section.classList.remove("notClickable"));
    nav.classList.remove("responsive");
  }
};

toTopButton.addEventListener("click", backToTop);

mobileButton.addEventListener("click", dropDown);

links.forEach((link) => link.addEventListener("click", removeDropDown));
