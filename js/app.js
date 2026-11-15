// Importa o banco de dados unificado que você criou na pasta dados/index.js
import { bancoDeDadosGlobal } from './dados/index.js';

// Função para normalizar texto (remove acentos, pontos, traços e espaços extras)
function normalizarTexto(texto) {
  return String(texto)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[-./\s]/g, '');        // Remove traços, pontos, barras e espaços
}

// Função principal que inicializa o motor de busca
export function iniciarMotorDeBusca() {
  const inputBusca = document.getElementById('campoBuscaVeiculo');
  const btnLimpar = document.getElementById('btnLimparBusca');
  const containerResultados = document.getElementById('listaResultados');
  const contadorResultados = document.getElementById('contadorResultados');
  const botoesCategoria = document.querySelectorAll('.tag-filtro');

  // Trava de segurança: só executa se a barra de busca existir na página atual
  if (!inputBusca || !containerResultados) return;

  let categoriaAtual = 'todos';

  function executarBusca() {
    const termoOriginal = inputBusca.value.trim();
    const termoNormalizado = normalizarTexto(termoOriginal);

    if (btnLimpar) {
      btnLimpar.style.display = termoOriginal.length > 0 ? 'block' : 'none';
    }

    const resultados = [];

    for (const [modelo, dados] of Object.entries(bancoDeDadosGlobal)) {
      // Filtro rápido por botões de categoria (se houver no HTML)
      if (categoriaAtual !== 'todos') {
        const tipoVeiculo = dados.tipo || ''; // Caso queira categorizar futuramente
        if (categoriaAtual.toLowerCase() !== tipoVeiculo.toLowerCase() && !modelo.toLowerCase().includes(categoriaAtual.toLowerCase())) {
          continue;
        }
      }

      // Se a busca estiver vazia, exibe todos
      if (termoNormalizado === '') {
        resultados.push({ modelo, dados, motivoMatch: null });
        continue;
      }

      // 1. Busca no nome do modelo
      const matchModelo = normalizarTexto(modelo).includes(termoNormalizado);

      // 2. Busca nos sistemas (motor, câmbio, especificações)
      const matchSistema = dados.sistemas?.some(s =>
        normalizarTexto(s.sistema).includes(termoNormalizado) ||
        normalizarTexto(s.especificacao).includes(termoNormalizado)
      );

      // 3. Busca avançada nos códigos de filtros (Original, Tecfil, Mann, Mahle, etc.)
      let filtroEncontrado = null;
      if (dados.filtros) {
        for (const [tipoFiltro, marcas] of Object.entries(dados.filtros)) {
          for (const [marca, codigo] of Object.entries(marcas)) {
            if (codigo && codigo !== '-' && normalizarTexto(codigo).includes(termoNormalizado)) {
              filtroEncontrado = `Filtro de ${tipoFiltro.toUpperCase()} (${marca.toUpperCase()}: ${codigo})`;
              break;
            }
          }
          if (filtroEncontrado) break;
        }
      }

      if (matchModelo || matchSistema || filtroEncontrado) {
        resultados.push({
          modelo,
          dados,
          motivoMatch: filtroEncontrado
        });
      }
    }

    renderizarResultados(resultados, containerResultados, contadorResultados);
  }

  // Eventos de digitação e limpeza
  inputBusca.addEventListener('input', executarBusca);

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      inputBusca.value = '';
      executarBusca();
      inputBusca.focus();
    });
  }

  // Eventos para os botões de filtro rápido por categoria (se existirem)
  botoesCategoria.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesCategoria.forEach(b => b.classList.remove('ativa'));
      btn.classList.add('ativa');
      categoriaAtual = btn.dataset.categoria;
      executarBusca();
    });
  });

  // Executa a listagem inicial ao carregar a página
  executarBusca();
}

// Função responsável por desenhar os cards na tela
function renderizarResultados(lista, container, contador) {
  if (contador) {
    contador.textContent = `${lista.length} veículo(s) encontrado(s)`;
  }
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="sem-resultados" style="padding: 20px; text-align: center; color: #64748b;">
        Nenhum veículo ou código de filtro encontrado. Tente buscar por termos mais curtos (ex: "24280", "Pel39", "Master").
      </div>`;
    return;
  }

  lista.forEach(({ modelo, dados, motivoMatch }) => {
    const card = document.createElement('div');
    card.className = 'card-veiculo';

    const badgeMatch = motivoMatch
      ? `<span class="badge-match">Encontrado por: ${motivoMatch}</span>`
      : '';

    const linhasSistemas = dados.sistemas ? dados.sistemas.map(s => `
      <tr>
        <td><strong>${s.sistema}</strong></td>
        <td>${s.especificacao}</td>
        <td>${s.capacidade}</td>
        <td>${s.intervalo}</td>
      </tr>
    `).join('') : '<tr><td colspan="4">Dados de sistemas não informados.</td></tr>';

    const notasHtml = dados.notas
      ? `<div class="notas-tecnicas" style="margin-top: 10px;">
          ${Object.entries(dados.notas).map(([num, texto]) => `<p><strong>[${num}]</strong> ${texto}</p>`).join('')}
         </div>`
      : '';

    // Bloco seguro para exibição de filtros caso existam
    let filtrosHtml = '';
    if (dados.filtros) {
      const oleoOrig = dados.filtros.oleo?.original || '-';
      const oleoTec = dados.filtros.oleo?.tecfil || '-';
      const combTec = dados.filtros.combustivel?.tecfil || '-';
      const arTec = dados.filtros.ar?.tecfil || '-';
      
      filtrosHtml = `
        <div class="box-filtros" style="margin-top: 10px; font-size: 13px;">
          <strong>Filtros Principais:</strong>
          <span><b>Óleo:</b> Orig. ${oleoOrig} (Tecfil: ${oleoTec})</span> •
          <span><b>Combustível:</b> ${combTec}</span> •
          <span><b>Ar:</b> ${arTec}</span>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="margin: 0; font-size: 18px;">${modelo}</h3>
        ${badgeMatch}
      </div>
      <div class="tabela-responsiva" style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="background: #f8fafc; text-align: left;">
              <th style="padding: 8px;">Sistema</th>
              <th style="padding: 8px;">Especificação</th>
              <th style="padding: 8px;">Capacidade</th>
              <th style="padding: 8px;">Intervalo</th>
            </tr>
          </thead>
          <tbody>${linhasSistemas}</tbody>
        </table>
      </div>
      ${filtrosHtml}
      ${notasHtml}
    `;

    container.appendChild(card);
  });
}

// Inicializa o motor assim que o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  iniciarMotorDeBusca();
});
