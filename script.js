document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {   
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
      }
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


