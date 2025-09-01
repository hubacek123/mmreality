document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Mobilní menu toggle
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".menu-btn");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Zavřít ostatní dropdowny
      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("active");
      });

      // Přepnout aktuální dropdown
      drop.classList.toggle("active");
    });
  });

  // Kliknutí mimo dropdown zavře vše
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});






