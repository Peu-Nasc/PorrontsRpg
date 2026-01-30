document.addEventListener('DOMContentLoaded', () => {
  
  // Controle do Acordeão (Sessões)
  const headers = document.querySelectorAll('.sessao-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const sessao = header.parentElement;
      const content = sessao.querySelector('.sessao-content');

      // Alterna classe active
      sessao.classList.toggle('active');

      // Animação de Altura
      if (sessao.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Inicialização: Se houver sessão já aberta (active), define a altura
  const activeSession = document.querySelector('.sessao.active .sessao-content');
  if (activeSession) {
    activeSession.style.maxHeight = activeSession.scrollHeight + "px";
  }

  // Efeito Glitch no Menu (Visual)
  const glitchLinks = document.querySelectorAll('.glitch-effect');
  glitchLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      const originalText = link.getAttribute('data-text');
      let iterations = 0;
      const interval = setInterval(() => {
        link.innerText = link.innerText.split('')
          .map((letter, index) => {
            if(index < iterations) return originalText[index];
            return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%'[Math.floor(Math.random() * 26)];
          })
          .join('');
        
        if(iterations >= originalText.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    });
  });

});