const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function (e) {
  navbar.classList.toggle("change");
  e.currentTarget.classList.toggle("change");
});
