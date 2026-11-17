// Banco de dados mapeando os modelos de cada montadora para os cards
const modelosPorMontadora = {
  'agrale': [
    { id: 'am21', nome: 'Agrale Marruá - AM21', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'am20', nome: 'Agrale Marruá - AM20', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'am22', nome: 'Agrale Marruá - AM22', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'am25', nome: 'Agrale Marruá - AM25', desc: 'Ver fluidos e referências de filtros.' }
  ],
  'chevrolet': [
    { id: 'spin', nome: 'Chevrolet SPIN', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'agile', nome: 'Chevrolet Agile', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'montana', nome: 'Chevrolet Montana', desc: 'Ver fluidos e referências de filtros.' }
  ],
  'fiat': [
    { id: 'palio', nome: 'Fiat Palio 1.4', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'doblo18', nome: 'Fiat Doblo 1.8', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'strada', nome: 'Fiat Strada 1.4', desc: 'Ver fluidos e referências de filtros.' }
  ],
  'ford': [
    { id: 'fiesta', nome: 'Ford Fiesta 1.0 / 1.6', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'focus', nome: 'Ford Focus 1.6 / 2.0', desc: 'Ver fluidos e referências de filtros.' },
    { id: 'ranger', nome: 'Ford Ranger', desc: 'Ver fluidos e referências de filtros.' }
  ]
  // Adicione as demais montadoras conforme o seu banco de dados
};

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-list .menu-item');
  const conteudoPrincipal = document.getElementById('conteudo-principal');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active de todos e adiciona no clicado
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const marcaKey = item.getAttribute('data-marca');
      const nomeMarca = item.querySelector('.label') ? item.querySelector('.label').textContent : marcaKey;
      const iconeMarca = item.querySelector('.icon') ? item.querySelector('.icon').textContent : '🚩';

      const modelos = modelosPorMontadora[marcaKey] || [
        { id: 'padrao', nome: `${nomeMarca} - Modelo Padrão`, desc: 'Ver fluidos e referências de filtros.' }
      ];

      // Injeta o cabeçalho e o grid de cards na área principal
      let html = `
        <div class="secao-header" style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
          <span style="font-size: 24px;">${iconeMarca}</span>
          <h2 style="font-size: 24px; font-weight: 700; margin: 0;">${nomeMarca}</h2>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Selecione um modelo abaixo para consultar fluidos e referências de filtros.</p>
        <div class="modelos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
      `;

      modelos.forEach(mod => {
        html += `
          <div class="modelo-card" onclick="abrirFichaModelo('${mod.id}')" style="background-color: var(--bg-card); border: 1px solid var(--border-card); border-radius: 14px; padding: 20px; cursor: pointer; transition: transform 0.2s, border-color 0.2s;">
            <div style="width: 36px; height: 36px; border-radius: 8px; background-color: var(--active-bg); color: var(--active-text); display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
              🔧
            </div>
            <h3 style="font-size: 16px; font-weight: 600; color: var(--text-main); margin-bottom: 6px;">${mod.nome}</h3>
            <p style="font-size: 13px; color: var(--text-muted); margin: 0;">${mod.desc}</p>
          </div>
        `;
      });

      html += `</div>`;
      conteudoPrincipal.innerHTML = html;
    });
  });
});

function abrirFichaModelo(idModelo) {
  console.log("Abrindo ficha técnica do modelo:", idModelo);
  // Aqui você chama a função que exibe as especificações de óleo e tabela de filtros
}
