document.addEventListener('DOMContentLoaded', () => {
    updateCounts();
  });
  
  function updateCounts() {
    const allJobs = document.querySelectorAll('.job').length;
    document.getElementById('all-count').textContent = `(${allJobs})`;
     // aquí se agregan los nuevos tipos

    // fin de los nuevos tipos
  }
  
  function filterJobs(type) {
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
      if (type === 'all') {
        job.style.display = 'block';
      } else {
        job.style.display = job.classList.contains(type) ? 'block' : 'none';
      }
    });
        // Ocultar el contenedor de filtros en dispositivos móviles después de seleccionar una opción
        if (window.innerWidth <= 768) {
          document.querySelector('.filter-container').style.display = 'none';
          document.querySelector('.filter-toggle').style.display = 'block';
      }
    }
  
     // Función para alternar la visibilidad del contenedor de filtros en dispositivos móviles
     document.querySelector('.filter-toggle').addEventListener('click', function() {
      const filterContainer = document.querySelector('.filter-container');
      if (filterContainer.style.display === 'block') {
          filterContainer.style.display = 'none';
      } else {
          filterContainer.style.display = 'block';
      }
  });
  
  // Restaurar la visibilidad del contenedor de filtros en dispositivos más grandes
  window.addEventListener('resize', function() {
      const filterContainer = document.querySelector('.filter-container');
      const filterToggle = document.querySelector('.filter-toggle');
      if (window.innerWidth > 768) {
          filterContainer.style.display = 'block';
          filterToggle.style.display = 'none';
      } else {
          filterContainer.style.display = 'none';
          filterToggle.style.display = 'block';
      }
  });
  
  // Inicializar la visibilidad correcta al cargar la página
  window.addEventListener('load', function() {
      const filterContainer = document.querySelector('.filter-container');
      const filterToggle = document.querySelector('.filter-toggle');
      if (window.innerWidth > 768) {
          filterContainer.style.display = 'block';
          filterToggle.style.display = 'none';
      } else {
          filterContainer.style.display = 'none';
          filterToggle.style.display = 'block';
      }
  });
    //header botom
    const checkbox = document.getElementById('btn-menu');
    const headerMidContainer = document.querySelector('.header-mid-container');
    const menuIcon = document.querySelector('.menu-icon');
    
    document.addEventListener('click', function(event) {
        // Si haces click fuera del contenedor o en el botón de menú
        if (!headerMidContainer.contains(event.target) && !checkbox.contains(event.target)) {
            checkbox.checked = false; // Repliega el menú
        }
    });
    
    menuIcon.addEventListener('click', function(event) {
        // Si el menú está desplegado (checkbox marcado)
        if (checkbox.checked) {
            checkbox.checked = false; // Repliega el menú
            event.preventDefault(); // Evita que el checkbox se vuelva a marcar
        }
    });
    
      /// botom base line
    const currentPath = window.location.pathname.split('/').pop();
  
    // Obtener todos los enlaces con la clase 'header-mid'
    const navLinks = document.querySelectorAll('.header-mid');
  
    // Iterar sobre los enlaces y comparar la ruta href con la ruta actual
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });