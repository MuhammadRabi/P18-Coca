const navigation = document.querySelector("header .navigation");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", showNavigation);

function showNavigation() {
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
}

// swiper js

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});
