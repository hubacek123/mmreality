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
    offerButtons.forEach(button => {
      button.addEventListener('click', () => {
        offerButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        hiddenInput.value = button.textContent.trim();
      });
    });
  }
});








