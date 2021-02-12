/**
 * 1. navbar
 */

function navbar() {
  // button trigger inside the navbar
  const navbarTrigger = document.getElementById("navbar-trigger");
  // target element on which we need to toggle the class
  const target = document.querySelector(navbarTrigger.dataset.target);
  // on click toggle the class
  navbarTrigger.addEventListener("click", function () {
   target.classList.toggle("hidden")
  });
}
navbar();
 /********************** */