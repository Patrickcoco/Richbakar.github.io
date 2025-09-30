document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cat-btn");
  const categories = document.querySelectorAll(".menu-category");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // reset semua tombol
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;

      // tampilkan kategori sesuai tombol
      categories.forEach(c => {
        c.style.display = (c.id === cat) ? "block" : "none";
      });
    });
  });
});
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