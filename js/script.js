const navigation = document.querySelector("header .navigation");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", showNavigation);

function showNavigation() {
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
}
