// Menu Toggle for Mobile & Accordion Logic & Lightbox
document.addEventListener('DOMContentLoaded', function() {
  
  // === MOBILE MENU ===
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const sidebarGrimorio = document.getElementById('sidebarGrimorio');
  const menuOverlay = document.getElementById('menuOverlay');

  // Toggle menu
  if(menuToggle) {
    menuToggle.addEventListener('click', function() {
      sidebarGrimorio.classList.add('show');
      menuOverlay.classList.add('show');
    });
  }

  // Close menu
  if(closeMenu) {
    closeMenu.addEventListener('click', function() {
      sidebarGrimorio.classList.remove('show');
      menuOverlay.classList.remove('show');
    });
  }

  // Close menu when overlay is clicked
  if(menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      sidebarGrimorio.classList.remove('show');
      menuOverlay.classList.remove('show');
    });
  }

  // Close menu when a link is clicked
  const menuItems = sidebarGrimorio.querySelectorAll('.menu-item:not(.disabled)');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      sidebarGrimorio.classList.remove('show');
      menuOverlay.classList.remove('show');
    });
  });

  // === ACCORDION SESSIONS (FITAS) ===
  const episodeHeaders = document.querySelectorAll('.episode-header');
  
  episodeHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const episode = this.closest('.episode');
      if (episode) {
        episode.classList.toggle('collapsed');
      }
    });
  });

  // === LIGHTBOX FUNCTIONALITY ===
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const captionText = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  
  // Seleciona todas as imagens que têm a classe 'lightbox-trigger'
  const images = document.querySelectorAll('.lightbox-trigger');

  images.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
      captionText.innerHTML = this.alt; // Usa o alt da imagem como legenda
    });
  });

  // Fechar o Lightbox ao clicar no "X"
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  }

  // Fechar o Lightbox ao clicar fora da imagem
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
      }
    });
  }

});