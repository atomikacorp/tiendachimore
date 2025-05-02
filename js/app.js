      // Hero Carousel JavaScript (Previous code maintained)
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      let currentSlide = 0;
      const slideInterval = 5000;

      function showSlide(index) {
          slides.forEach(slide => slide.classList.remove('active'));
          dots.forEach(dot => dot.classList.remove('active'));
          
          slides[index].classList.add('active');
          dots[index].classList.add('active');
          currentSlide = index;
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }

      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              showSlide(index);
              resetInterval();
          });
      });

      let slideTimer = setInterval(nextSlide, slideInterval);

      function resetInterval() {
          clearInterval(slideTimer);
          slideTimer = setInterval(nextSlide, slideInterval);
      }

      showSlide(0);

  
      // nabvar//

      document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelector(".nav-links");
        const menuBtn = document.getElementById("menu-btn");
        const closeBtn = document.getElementById("close-btn");
      
        // Function to close the menu
        function closeMenu() {
          menuBtn.checked = false; // Uncheck the menu button
          closeBtn.checked = false; // Ensure the close button is unchecked
        }
      
        // Close the menu when clicking outside of it
        document.addEventListener("click", (event) => {
          const isClickInside = navLinks.contains(event.target); // Check if click is inside the menu
          const isMenuBtnClicked = event.target === menuBtn || event.target.closest(".btn.menu-btn"); // Check if menu button is clicked
      
          if (!isClickInside && !isMenuBtnClicked && menuBtn.checked) {
            closeMenu();
          }
        });
      
        // Close the menu when the close button is clicked
        closeBtn.addEventListener("change", () => {
          if (closeBtn.checked) {
            closeMenu();
          }
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".fade-in-up, .about-text, .about-image");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Deja de observar una vez activado
                }
            });
        }, { threshold: 0.2 }); // Se activa cuando al menos el 20% del elemento es visible
    
        elements.forEach((el) => observer.observe(el));
    });
    

      //section about//
      // Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const extraInfo = document.getElementById("extra-info");

  // Add click event listener to the "Learn More" button
  learnMoreBtn.addEventListener("click", () => {
    if (extraInfo.classList.contains("hidden")) {
      extraInfo.classList.remove("hidden");
      extraInfo.style.display = "block";
    } else {
      extraInfo.classList.add("hidden");
      extraInfo.style.display = "none";
    }
  });

  // Add hover effect to the campus image
  const campusImage = document.getElementById("campus-image");
  campusImage.addEventListener("mouseenter", () => {
    campusImage.style.transform = "scale(1.05)";
  });

  campusImage.addEventListener("mouseleave", () => {
    campusImage.style.transform = "scale(1)";
  });
});
    

    