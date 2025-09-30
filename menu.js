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
