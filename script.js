// Hamburger ovládá desktop nebo mobilní menu podle šířky
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mobilePanel = document.getElementById('mobile-panel');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  if (window.innerWidth <= 768) {
    mobilePanel.classList.toggle('active');
  } else {
    navMenu.classList.toggle('active');
  }
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
    mobilePanel.classList.remove('active');
  }
});

// Přepínání tlačítek Prodej / Pronájem
const offerButtons = document.querySelectorAll('#offer-type .toggle-button');
const hiddenInput = document.getElementById('nabidka');

offerButtons.forEach(button => {
  button.addEventListener('click', () => {
    offerButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    hiddenInput.value = button.textContent.trim();
  });
});

// Rozbalování mega-menu na mobilu
const menuItems = document.querySelectorAll('.menu > li');

menuItems.forEach(item => {
  const submenu = item.querySelector('.mega-menu, .mega');
  if (submenu) {
    item.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        submenu.classList.toggle('active');
      }
    });
  }
});


