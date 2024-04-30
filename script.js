// Navigasi toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelectorAll('.bar');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('active'));
});

// Hero slider
const heroSlides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
  heroSlides.forEach(slide => slide.classList.remove('active'));
  heroSlides[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let slideInterval = setInterval(nextSlide, 5000);

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

heroSlides.forEach(slide => {
  slide.addEventListener('animationend', resetInterval);
});