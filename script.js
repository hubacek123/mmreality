document.addEventListener('DOMContentLoaded', () => {     
      const navMenu = document.querySelector('.nav-menu'); 
     
        if (window.innerWidth <= 768) {        
          navMenu.classList.remove('active');
        } else {
          navMenu.classList.toggle('active');        
        }
      });

      document.addEventListener('click', (e) => {
        if (        
          !navMenu.contains(e.target)
        ) {
          navMenu.classList.remove('active');      
        }
      });
    });







