// Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const sidebarGrimorio = document.getElementById('sidebarGrimorio');
  const menuOverlay = document.getElementById('menuOverlay');

  // Create menu overlay if it doesn't exist
  if (!menuOverlay) {
    const overlay = document.createElement('div');
    overlay.id = 'menuOverlay';
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
  }

  const overlay = document.getElementById('menuOverlay');

  // Toggle menu
  menuToggle.addEventListener('click', function() {
    sidebarGrimorio.classList.add('show');
    overlay.classList.add('show');
  });

  // Close menu
  closeMenu.addEventListener('click', function() {
    sidebarGrimorio.classList.remove('show');
    overlay.classList.remove('show');
  });

  // Close menu when overlay is clicked
  overlay.addEventListener('click', function() {
    sidebarGrimorio.classList.remove('show');
    overlay.classList.remove('show');
  });

  // Close menu when a link is clicked
  const menuItems = sidebarGrimorio.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      sidebarGrimorio.classList.remove('show');
      overlay.classList.remove('show');
    });
  });

  /* =========================================
   MÚSICA DE FUNDO - YOUTUBE API
   ========================================= */
var player;

// Função que o YouTube chama quando a API está pronta
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: 'LWz0JC7afNQ', // O ID do clipe "The Killing Moon"
    playerVars: {
      'autoplay': 0, 
      'loop': 1,
      'playlist': 'LWz0JC7afNQ', // Necessário para o loop funcionar
      'controls': 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Ajusta o volume para 30% (igual ao seu código anterior)
  event.target.setVolume(30);

  // Toca a música no primeiro clique na página
  document.addEventListener('click', function() {
    // Verifica se o player está pronto e dá o play
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  }, { once: true });
}

// Injeta o script da API do YouTube na sua página
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
if(firstScriptTag) {
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
} else {
    document.head.appendChild(tag);
}
});
