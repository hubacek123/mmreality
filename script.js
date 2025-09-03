document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("some-id");
  if (element) {
    element.addEventListener("click", function() {
      // your logic here
    });
  }
});

     
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







