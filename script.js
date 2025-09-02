document.addEventListener('DOMContentLoaded', () => {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
      const mobilePanel = document.getElementById('mobile-panel');

      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();

        if (window.innerWidth <= 768) {
          mobilePanel.classList.toggle('active');
          navMenu.classList.remove('active');
        } else {
          navMenu.classList.toggle('active');
          mobilePanel.classList.remove('active');
        }
      });

      document.addEventListener('click', (e) => {
        if (
          !hamburger.contains(e.target) &&
          !mobilePanel.contains(e.target) &&
          !navMenu.contains(e.target)
        ) {
          navMenu.classList.remove('active');
          mobilePanel.classList.remove('active');
        }
      });
    });







