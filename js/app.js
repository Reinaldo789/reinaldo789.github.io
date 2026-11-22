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

// Helper para extrair o código Tecfil independente de o campo ser string ou objeto
function obterCodigoTecfil(valorFiltro) {
  if (!valorFiltro) return null;
  if (typeof valorFiltro === 'string') {
    return valorFiltro.trim() !== '' && valorFiltro !== '-' ? valorFiltro : null;
  }
  if (typeof valorFiltro === 'object') {
    const cod = valorFiltro.tecfil || valorFiltro.original;
    return cod && cod !== '-' ? cod : null;
  }
  return null;
}

// Configuração visual de cada tipo de filtro (ícones distintos para evitar confusão)
const CONFIG_FILTROS = {
  oleo: {
    label: 'Óleo',
    cor: '#b45309',
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`
  },
  ar: {
    label: 'Ar',
    cor: '#0369a1',
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`
  },
  arSecundario: {
    label: 'Ar Secundário',
    cor: '#0284c7',
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  combustivel: {
    label: 'Combustível',
    cor: '#0f766e',
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>`
  },
  sedimentador: {
    label: 'Sedimentador',
    cor: '#c2410c',
    svg: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M6.5 15.5c2-1 4 1 6 0s3.5-1 5 0"/></svg>`
  }
};

// Função principal que inicializa o motor de busca
export function iniciarMotorDeBusca() {
  const inputBusca = document.getElementById('campoBuscaVeiculo');
  const btnLimpar = document.getElementById('btnLimparBusca');
  const containerResultados = document.getElementById('listaResultados');
  const contadorResultados = document.getElementById('contadorResultados');
  const botoesCategoria = document.querySelectorAll('.tag-filtro');

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
      if (categoriaAtual !== 'todos') {
        const tipoVeiculo = dados.tipo || '';
        if (
          categoriaAtual.toLowerCase() !== tipoVeiculo.toLowerCase() &&
          !modelo.toLowerCase().includes(categoriaAtual.toLowerCase())
        ) {
          continue;
        }
      }

      if (termoNormalizado === '') {
        resultados.push({ modelo, dados, motivoMatch: null });
        continue;
      }

      // 1. Busca no nome do modelo
      const matchModelo = normalizarTexto(modelo).includes(termoNormalizado);

      // 2. Busca nos sistemas
      const matchSistema = dados.sistemas?.some(
        s =>
          normalizarTexto(s.sistema).includes(termoNormalizado) ||
          normalizarTexto(s.especificacao).includes(termoNormalizado)
      );

      // 3. Busca avançada nos códigos de filtros (suporta string direta OU objeto por marca)
      let filtroEncontrado = null;
      if (dados.filtros) {
        for (const [tipoFiltro, valor] of Object.entries(dados.filtros)) {
          const nomeAmigavel = CONFIG_FILTROS[tipoFiltro]?.label || tipoFiltro.toUpperCase();

          if (typeof valor === 'string') {
            if (valor !== '-' && normalizarTexto(valor).includes(termoNormalizado)) {
              filtroEncontrado = `Filtro de ${nomeAmigavel} (TECFIL: ${valor})`;
              break;
            }
          } else if (valor && typeof valor === 'object') {
            for (const [marca, codigo] of Object.entries(valor)) {
              if (codigo && codigo !== '-' && normalizarTexto(codigo).includes(termoNormalizado)) {
                filtroEncontrado = `Filtro de ${nomeAmigavel} (${marca.toUpperCase()}: ${codigo})`;
                break;
              }
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

  inputBusca.addEventListener('input', executarBusca);

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      inputBusca.value = '';
      executarBusca();
      inputBusca.focus();
    });
  }

  botoesCategoria.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesCategoria.forEach(b => b.classList.remove('ativa'));
      btn.classList.add('ativa');
      categoriaAtual = btn.dataset.categoria;
      executarBusca();
    });
  });

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

    const linhasSistemas = dados.sistemas
      ? dados.sistemas
          .map(
            s => `
      <tr>
        <td><strong>${s.sistema}</strong></td>
        <td>${s.especificacao}</td>
        <td>${s.capacidade}</td>
        <td>${s.intervalo}</td>
      </tr>
    `
          )
          .join('')
      : '<tr><td colspan="4">Dados de sistemas não informados.</td></tr>';

    const notasHtml = dados.notas
      ? `<div class="notas-tecnicas" style="margin-top: 10px;">
          ${Object.entries(dados.notas)
            .map(([num, texto]) => `<p><strong>[${num}]</strong> ${texto}</p>`)
            .join('')}
         </div>`
      : '';

    // Renderiza apenas os filtros que o veículo realmente possui, cada um com ícone e cor próprios
    let filtrosHtml = '';
    if (dados.filtros) {
      const itensFiltro = Object.entries(CONFIG_FILTROS)
        .map(([chave, cfg]) => {
          const codigo = obterCodigoTecfil(dados.filtros[chave]);
          if (!codigo) return '';
          return `
            <span style="display: inline-flex; align-items: center; gap: 5px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 4px 8px;">
              <span style="display: inline-flex; color: ${cfg.cor};">${cfg.svg}</span>
              <span style="color: #475569;">${cfg.label}:</span>
              <strong style="color: #0f172a;">${codigo}</strong>
            </span>
          `;
        })
        .filter(Boolean)
        .join('');

      if (itensFiltro) {
        filtrosHtml = `
          <div class="box-filtros" style="margin-top: 12px; font-size: 13px;">
            <div style="font-weight: 600; color: #334155; margin-bottom: 6px;">Filtros equivalentes (Tecfil):</div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${itensFiltro}
            </div>
          </div>
        `;
      }
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
