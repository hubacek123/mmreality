const modal = document.getElementById("menuModal");
const btn = document.getElementById("menuToggle");
const close = document.querySelector(".close-modal");

btn.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
