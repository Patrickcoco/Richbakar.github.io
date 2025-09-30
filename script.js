let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 4000); // ganti slide tiap 4 detik

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animasi scroll (reveal)
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100; // jarak sebelum muncul

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

