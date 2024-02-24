let nav = document.querySelector("nav");
let button = document.querySelector(".button");

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > 400) {
    nav.classList.add("nav-scrolled");
    button.classList.add("button-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
    button.classList.remove("button-scrolled");
  }
});
