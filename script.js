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

  // Accordion sekce v modalu
  const accordionToggles = document.querySelectorAll('.accordion-toggle');
  if (accordionToggles.length > 0) {
    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const panel = toggle.nextElementSibling;
        const isOpen = panel.style.display === 'block';

        // Zavřít všechny ostatní panely
        document.querySelectorAll('.accordion-panel').forEach(p => {
          p.style.display = 'none';
        });

        // Přepnout aktuální panel
        panel.style.display = isOpen ? 'none' : 'block';
      });
    });
  }

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







