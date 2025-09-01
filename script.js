document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Toggle hlavní menu na mobilu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Submenu toggle
  dropdowns.forEach(drop => {
    const button = drop.querySelector(".menu-btn");
    const submenu = drop.querySelector(".submenu");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Zavřít ostatní submenu
      document.querySelectorAll(".submenu").forEach(menu => {
        if (menu !== submenu) menu.style.display = "none";
      });

      submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
    });
  });

  // Zavřít submenu při kliknutí mimo
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".submenu").forEach(menu => {
        menu.style.display = "none";
      });
    }
  });
});