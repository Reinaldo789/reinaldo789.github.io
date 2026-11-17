document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('sidebar-overlay');
  const menuItems = document.querySelectorAll('.menu-list .menu-item');

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');

  function aplicarTema(tema) {
    if (tema === 'dark') {
      document.body.classList.add('dark-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeLabel) themeLabel.textContent = 'Modo Claro';
    } else {
      document.body.classList.remove('dark-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeLabel) themeLabel.textContent = 'Modo Escuro';
    }
  }

  const temaSalvo = localStorage.getItem('tema-guia') || 'light';
  aplicarTema(temaSalvo);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      const novoTema = isDark ? 'light' : 'dark';
      aplicarTema(novoTema);
      localStorage.setItem('tema-guia', novoTema);
    });
  }

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  if (mobileMenuBtn && sidebar && overlay) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
      overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });
  }

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      if (sidebar) sidebar.classList.remove('mobile-open');
      if (overlay) overlay.classList.remove('active');

      const marcaSelecionada = item.getAttribute('data-marca');
      console.log('Carregando dados da montadora:', marcaSelecionada);
    });
  });
});