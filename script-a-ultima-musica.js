// Menu Toggle for Mobile & Accordion Logic
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

});