// Mobilní hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.classList.toggle('hidden');
}

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Přepínání tlačítek Prodej / Pronájem + uložení výběru
const offerButtons = document.querySelectorAll('#offer-type .toggle-button');
const hiddenInput = document.getElementById('nabidka');

offerButtons.forEach(button => {
  button.addEventListener('click', () => {
    offerButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    hiddenInput.value = button.textContent.trim(); // uloží "Prodej" nebo "Pronájem"
  });
});
