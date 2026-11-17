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

// Função para renderizar os cards de todas as montadoras na tela inicial
function renderizarCardsMontadorasHome() {
  const containerHome = document.getElementById('grid-montadoras-home');
  if (!containerHome) return;

  // Lista de montadoras extraída da sua estrutura
  const montadoras = [
    { nome: "Agrale", chave: "agrale", qtd: 4, icone: "🚩" },
    { nome: "Chevrolet", chave: "chevrolet", qtd: 7, icone: "✚" },
    { nome: "Citroën", chave: "citroen", qtd: 3, icone: "⌃" },
    { nome: "DAF", chave: "daf", qtd: 1, icone: "D" },
    { nome: "Fiat", chave: "fiat", qtd: 8, icone: "F" },
    { nome: "Ford", chave: "ford", qtd: 16, icone: "F" },
    { nome: "Iveco", chave: "iveco", qtd: 5, icone: "I" },
    { nome: "Mercedes-Benz", chave: "mercedes", qtd: 5, icone: "✪" },
    { nome: "Mitsubishi", chave: "mitsubishi", qtd: 4, icone: "▲" },
    { nome: "Nissan", chave: "nissan", qtd: 2, icone: "⊖" },
    { nome: "Nova", chave: "nova", qtd: 2, icone: "N" },
    { nome: "Peugeot", chave: "peugeot", qtd: 1, icone: "P" },
    { nome: "Renault", chave: "renault", qtd: 4, icone: "◇" },
    { nome: "Scania", chave: "scania", qtd: 1, icone: "★" },
    { nome: "Toyota", chave: "toyota", qtd: 4, icone: "◎" },
    { nome: "Volkswagen", chave: "volkswagen", qtd: 8, icone: "Ⓦ" },
    { nome: "Volvo", chave: "volvo", qtd: 2, icone: "◷" }
  ];

  let htmlCards = '';
  montadoras.forEach(m => {
    htmlCards += `
      <div class="modelo-card" onclick="selecionarMontadora('${m.chave}', '${m.nome}')">
        <div class="card-icon-wrapper">
          ${m.icone}
        </div>
        <h3>${m.nome}</h3>
        <p>${m.qtd} modelos disponíveis. Ver fluidos e referências de filtros.</p>
      </div>
    `;
  });

  containerHome.innerHTML = htmlCards;
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  renderizarCardsMontadorasHome();
});

function selecionarMontadora(chave, nome) {
  console.log("Montadora selecionada:", nome);
  // Aqui você chama a função que carrega os modelos específicos daquela montadora na tela
}
