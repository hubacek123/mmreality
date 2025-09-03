document.addEventListener('DOMContentLoaded', () => {
  // MODAL menu
  const modal = document.getElementById('menuModal');
  const menuToggle = document.getElementById('menuToggle');
  const closeModal = document.querySelector('.close-modal');

  if (menuToggle && modal && closeModal) {
    menuToggle.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Hlavní accordion sekce v modalu
  const accordionToggles = document.querySelectorAll('.accordion-toggle');
  accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const panel = toggle.nextElementSibling;
      const isOpen = panel.style.display === 'block';

      // Zavřít všechny hlavní panely
      document.querySelectorAll('.accordion-panel').forEach(p => {
        p.style.display = 'none';
      });

      // Přepnout aktuální hlavní panel
      panel.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Vnořený accordion pro podsekce Služeb
  const subToggles = document.querySelectorAll('.accordion-subtoggle');
  subToggles.forEach(subToggle => {
    subToggle.addEventListener('click', () => {
      const subPanel = subToggle.nextElementSibling;
      const isOpen = subPanel.style.display === 'block';

      // Zavřít všechny podsekce
      document.querySelectorAll('.accordion-subpanel').forEach(p => {
        p.style.display = 'none';
      });

      // Přepnout aktuální podsekci
      subPanel.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Přepínání tlačítek Prodej / Pronájem + uložení výběru
  const offerButtons = document.querySelectorAll('#offer-type .toggle-button');
  const hiddenInput = document.getElementById('nabidka');

  if (offerButtons.length > 0 && hiddenInput) {
    // Nastavení výchozí hodnoty (např. "Prodej")
    const defaultValue = 'Prodej';
    offerButtons.forEach(button => {
      if (button.textContent.trim() === defaultValue) {
        button.classList.add('active');
        hiddenInput.value = defaultValue;
      }
    });

    // Události pro kliknutí
    offerButtons.forEach(button => {
      button.addEventListener('click', () => {
        offerButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        hiddenInput.value = button.textContent.trim();
      });
    });
  }

  // Vlastní dropdown pro výběr typu nemovitosti
  const customSelect = document.getElementById("custom-select");
  if (customSelect) {
    const selected = customSelect.querySelector(".selected");
    const options = customSelect.querySelector(".options");
    const optionItems = options.querySelectorAll("li");

    selected.addEventListener("click", () => {
      options.style.display = options.style.display === "block" ? "none" : "block";
    });

    optionItems.forEach(item => {
      item.addEventListener("click", () => {
        selected.textContent = item.textContent;
        selected.setAttribute("data-value", item.getAttribute("data-value"));
        options.style.display = "none";

        // Uložení do hidden inputu nebo selectu
        const typInput = document.getElementById("typ");
        if (typInput) {
          typInput.value = item.getAttribute("data-value");
        }
      });
    });

    // Zavření dropdownu při kliknutí mimo
    document.addEventListener("click", (e) => {
      if (!customSelect.contains(e.target)) {
        options.style.display = "none";
      }
    });
  }

  // Mobilní rozbalování mega-menu
  document.querySelectorAll('.menu > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const parentLi = link.parentElement;
      const hasDropdown = parentLi.querySelector('.mega, .mega-menu');

      if (hasDropdown) {
        e.preventDefault(); // zabrání přechodu na odkaz
        parentLi.classList.toggle('active');
      }
    });
  });
});








