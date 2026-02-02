document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Accordion (Sessões)
    const sessions = document.querySelectorAll('.sessao');

    sessions.forEach(session => {
        const header = session.querySelector('.sessao-header');
        const content = session.querySelector('.sessao-content');

        // Se a sessão já começar com a classe 'active' no HTML, defina a altura máxima
        if (session.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        header.addEventListener('click', () => {
            // Fecha todas as outras sessões (efeito sanfona exclusivo)
            sessions.forEach(otherSession => {
                if (otherSession !== session) {
                    otherSession.classList.remove('active');
                    otherSession.querySelector('.sessao-content').style.maxHeight = null;
                }
            });

            // Alterna a sessão atual
            session.classList.toggle('active');

            if (session.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 2. Lógica do Menu Mobile (Popup)
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebarGrimorio');
    const overlay = document.getElementById('menuOverlay');

    function openSidebar() {
        if(sidebar && overlay) {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Impede a rolagem do fundo
        }
    }

    function closeSidebar() {
        if(sidebar && overlay) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; // Libera a rolagem do fundo
        }
    }

    // Adiciona os eventos se os elementos existirem
    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (closeMenu) closeMenu.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Fechar menu ao clicar em um link interno (Melhora usabilidade)
    if(sidebar) {
        const menuLinks = sidebar.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeSidebar);
        });
    }
});