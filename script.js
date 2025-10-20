document.querySelectorAll('.titulo-sessao').forEach(titulo => {
      titulo.addEventListener('click', () => {
        titulo.parentElement.classList.toggle('open');
      });
    });

    
    document.querySelectorAll('.menu-campanha h3').forEach(titulo => {
      titulo.addEventListener('click', () => {
        titulo.parentElement.classList.toggle('open');
      });
    });

    
    document.querySelectorAll('aside li').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-sessao');
        const sessao = document.getElementById(id);
        if (sessao) {
          document.querySelectorAll('.sessao').forEach(s => s.classList.remove('open'));
          sessao.classList.add('open');
          sessao.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });