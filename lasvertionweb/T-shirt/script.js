// script.js
var menuToggle = document.getElementById("menu-toggle");
var navbar = document.querySelector(".navbar");

menuToggle.addEventListener("change", function () {
  if (menuToggle.checked) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
});

