document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".menu-btn");
    const submenu = drop.querySelector(".submenu") || drop.querySelector(".megamenu");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll(".submenu, .megamenu").forEach(menu => {
        if (menu !== submenu) menu.style.display = "none";
      });

      submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".submenu, .megamenu").forEach(menu => {
        menu.style.display = "none";
      });
    }
  });
});

