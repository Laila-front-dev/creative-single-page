const menuToggle = document.querySelector("#menu__toggle");
const navbar = document.querySelector("#primary__navigation");

menuToggle.addEventListener("click", () => {
  const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  navbar.setAttribute("data-visibility", "true");
  navbar.setAttribute("data-state", "opened");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navbar.setAttribute("data-visibility", "false");
  navbar.setAttribute("data-state", "closed");
}

/* slider */

const slides = document.querySelectorAll(".slider__container .card");
const slidesTitle = document.querySelectorAll(".slider__title h2");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

previousButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function initializeSlider() {
  if (slides.length && slidesTitle.length > 0) {
    slides[slideIndex].classList.add("active");
    slidesTitle[slideIndex].classList.add("active");
  }
}
function showSlide(index) {
  if (index >= slides.length && slidesTitle.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
  slidesTitle.forEach((slideT) => {
    slideT.classList.remove("active");
  });
  slidesTitle[slideIndex].classList.add("active");
}
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
