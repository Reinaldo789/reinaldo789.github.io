import { bancoDeDadosGlobal } from './dados/index.js';
import { veiculosPasseio } from './dados/passeio.js';
import { veiculosUtilitarios } from './dados/utilitarios.js';
import { veiculosCaminhoes } from './dados/caminhoes.js';
import { veiculosVans } from './dados/vans.js';

/* ---------- Categorias ---------- */
const CATEGORIAS = [
  { id: 'todos', nome: 'Todos', dados: bancoDeDadosGlobal },
  { id: 'passeio', nome: 'Passeio', dados: veiculosPasseio },
  { id: 'utilitarios', nome: 'Utilitários', dados: veiculosUtilitarios },
  { id: 'caminhoes', nome: 'Caminhões', dados: veiculosCaminhoes },
  { id: 'vans', nome: 'Vans', dados: veiculosVans }
];

const categoriaDoVeiculo = {};
CATEGORIAS.slice(1).forEach(cat => {
  Object.keys(cat.dados).forEach(nome => { categoriaDoVeiculo[nome] = cat.nome; });
});

/* ---------- Marcas ---------- */
const MARCAS_COMPOSTAS = ['Land Rover', 'Alfa Romeo', 'Great Wall', 'Mini Cooper'];

const marcaDe = (nome) =>
  MARCAS_COMPOSTAS.find(m => nome.startsWith(m)) || nome.split(' ')[0];

const modeloDe = (nome) => nome.slice(marcaDe(nome).length).trim() || nome;

/* ---------- Estado ---------- */
const estado = {
  busca: '',
  categoria: 'todos',
  selecionado: null,
  marcasAbertas: new Set(),
  ordem: [] // veículos na ordem exibida (para Anterior / Próximo)
};

const normalizar = (txt) =>
  txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

function veiculosFiltrados() {
  const cat = CATEGORIAS.find(c => c.id === estado.categoria);
  const termos = normalizar(estado.busca).split(/\s+/).filter(Boolean);
  return Object.keys(cat.dados).filter(nome => {
    const alvo = normalizar(nome);
    return termos.every(t => alvo.includes(t));
  });
}

function agruparPorMarca(nomes) {
  const grupos = new Map();
  nomes.forEach(nome => {
    const marca = marcaDe(nome);
    if (!grupos.has(marca)) grupos.set(marca, []);
    grupos.get(marca).push(nome);
  });
  return new Map([...grupos.entries()].sort((a, b) => a[0].localeCompare(b[0], 'pt-BR')));
}

/* ---------- Inicialização ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('busca-veiculo');
  const limpar = document.getElementById('limpar-busca');

  montarCategorias();
  renderizarLista();

  input.addEventListener('input', () => {
    estado.busca = input.value;
    limpar.hidden = !input.value;
    renderizarLista();
  });

  limpar.addEventListener('click', () => {
    input.value = '';
    estado.busca = '';
    limpar.hidden = true;
    renderizarLista();
    input.focus();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && estado.ordem.length) selecionarVeiculo(estado.ordem[0]);
    if (e.key === 'Escape') limpar.click();
  });

  // Atalho "/" para ir direto na busca
  document.addEventListener('keydown', (e) => {
    const digitando = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if (e.key === '/' && !digitando) {
      e.preventDefault();
      abrirMenu(true);
      input.focus();
    }
  });

  // Gaveta no celular
  document.getElementById('btn-menu').addEventListener('click', () => abrirMenu());
  document.getElementById('abrir-lista')?.addEventListener('click', () => abrirMenu(true));
  document.getElementById('fundo').addEventListener('click', () => abrirMenu(false));

  // Link direto: index.html#Toyota%20Hilux%203.0
  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash && bancoDeDadosGlobal[hash]) selecionarVeiculo(hash, false);
});

function abrirMenu(forcar) {
  const aberto = forcar ?? !document.body.classList.contains('menu-aberto');
  document.body.classList.toggle('menu-aberto', aberto);
}

/* ---------- Painel lateral ---------- */
function montarCategorias() {
  const box = document.getElementById('categorias');
  box.innerHTML = '';
  CATEGORIAS.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (cat.id === estado.categoria ? ' ativo' : '');
    btn.textContent = `${cat.nome} (${Object.keys(cat.dados).length})`;
    btn.addEventListener('click', () => {
      estado.categoria = cat.id;
      montarCategorias();
      renderizarLista();
    });
    box.appendChild(btn);
  });
}

function renderizarLista() {
  const lista = document.getElementById('lista-veiculos');
  const contador = document.getElementById('contador');
  const nomes = veiculosFiltrados();
  const grupos = agruparPorMarca(nomes);
  const buscando = estado.busca.trim() !== '';

  estado.ordem = [...grupos.values()].flat();

  contador.textContent = nomes.length === 1
    ? '1 veículo • 1 marca'
    : `${nomes.length} veículos • ${grupos.size} ${grupos.size === 1 ? 'marca' : 'marcas'}`;

  lista.innerHTML = '';

  if (!nomes.length) {
    lista.innerHTML = '<p class="sem-resultado">Nenhum veículo encontrado.<br>Tente outro termo ou outra categoria.</p>';
    return;
  }

  grupos.forEach((veiculos, marca) => {
    const det = document.createElement('details');
    det.className = 'marca';
    // Abre tudo ao buscar; senão respeita o que o usuário abriu
    det.open = buscando || estado.marcasAbertas.has(marca);

    const sum = document.createElement('summary');
    sum.innerHTML = `<span>${marca}</span><span class="qtd">${veiculos.length}</span><i class="fas fa-chevron-right seta"></i>`;
    det.appendChild(sum);

    det.addEventListener('toggle', () => {
      if (buscando) return;
      det.open ? estado.marcasAbertas.add(marca) : estado.marcasAbertas.delete(marca);
    });

    const ul = document.createElement('ul');
    veiculos.forEach(nome => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'item-veiculo' + (nome === estado.selecionado ? ' ativo' : '');
      btn.textContent = modeloDe(nome);
      btn.addEventListener('click', () => selecionarVeiculo(nome));
      li.appendChild(btn);
      ul.appendChild(li);
    });
    det.appendChild(ul);
    lista.appendChild(det);
  });

  // Mantém o veículo aberto visível no painel
  lista.querySelector('.item-veiculo.ativo')?.scrollIntoView({ block: 'nearest' });
}

function selecionarVeiculo(nome, rolar = true) {
  estado.selecionado = nome;
  estado.marcasAbertas = new Set([marcaDe(nome)]);
  history.replaceState(null, '', '#' + encodeURIComponent(nome));
  renderizarLista();
  exibirDadosVeiculo(nome);
  abrirMenu(false);
  if (rolar) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navegar(direcao) {
  const ordem = estado.ordem.includes(estado.selecionado)
    ? estado.ordem
    : Object.keys(bancoDeDadosGlobal);
  const i = ordem.indexOf(estado.selecionado) + direcao;
  if (i >= 0 && i < ordem.length) selecionarVeiculo(ordem[i]);
}

function barraNavegacao(nome) {
  const ordem = estado.ordem.includes(nome) ? estado.ordem : Object.keys(bancoDeDadosGlobal);
  const i = ordem.indexOf(nome);
  return `
    <div class="ficha-nav">
      <button type="button" data-nav="-1" ${i <= 0 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i> Anterior</button>
      <button type="button" data-nav="1" ${i >= ordem.length - 1 ? 'disabled' : ''}>Próximo <i class="fas fa-chevron-right"></i></button>
      <span class="pos">${i + 1} de ${ordem.length}</span>
    </div>`;
}

/* ---------- Ficha do veículo ---------- */
export function exibirDadosVeiculo(nomeVeiculo) {
  const container = document.getElementById('resultado');
  const dados = bancoDeDadosGlobal[nomeVeiculo];

  if (!dados) {
    container.innerHTML = '<p class="erro">Veículo não encontrado.</p>';
    return;
  }

  let html = barraNavegacao(nomeVeiculo) + `<h2 class="titulo-modelo">${nomeVeiculo}</h2>`;

  html += `<h3 class="secao-titulo"><i class="fas fa-oil-can"></i> Fluidos e Sistemas</h3>`;

  dados.sistemas.forEach(sis => {
    html += `
      <div class="sis">
        <div class="sis-titulo">
          <i class="fas fa-cog"></i> <span>${sis.sistema}</span>
        </div>
        <dl class="sis-dados">
          <div>
            <dt>Especificação / Norma</dt>
            <dd class="destaque">${sis.especificacao}</dd>
          </div>
          <div>
            <dt>Capacidade</dt>
            <dd>${sis.capacidade}</dd>
          </div>
          <div>
            <dt>Intervalo / Troca</dt>
            <dd>${sis.intervalo}</dd>
          </div>
        </dl>
      </div>
    `;
  });

  html += `
    <h3 class="secao-titulo"><i class="fas fa-filter"></i> Tabela de Equivalência de Filtros</h3>
    <div class="filtros-box">
      <div class="tabela-container">
        <table class="tabela-filtros">
          <thead>
            <tr>
              <th>Componente</th>
              <th>Original / OE</th>
              <th>Vox</th>
              <th>Tecfil</th>
              <th>Authomix</th>
              <th>Mann</th>
              <th>Mahle</th>
              <th>Wega</th>
              <th>Fram</th>
            </tr>
          </thead>
          <tbody>
  `;

  const labelsFiltros = {
    oleo: 'Óleo do Motor',
    ar: 'Ar do Motor',
    combustivel: 'Combustível',
    cabine: 'Cabine (A/C)'
  };

  const tag = (v) => `<td><span class="filtro-tag">${v || '-'}</span></td>`;

  for (const [tipo, f] of Object.entries(dados.filtros)) {
    html += `
      <tr>
        <td><strong>${labelsFiltros[tipo] || tipo}</strong></td>
        ${tag(f.original)}
        ${tag(f.vox)}
        ${tag(f.tecfil)}
        ${tag(f.authomix)}
        ${tag(f.mann)}
        ${tag(f.mahle)}
        ${tag(f.wega)}
        ${tag(f.fram)}
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (dados.notas && Object.keys(dados.notas).length > 0) {
    html += `
      <h3 class="secao-titulo"><i class="fas fa-info-circle"></i> Notas Técnicas e Condições de Uso</h3>
      <div class="filtros-box" style="background:#f8fafc;">
        <ul style="margin:0; padding-left:20px; line-height:1.6; font-size:14px;">
    `;
    for (const [num, texto] of Object.entries(dados.notas)) {
      html += `<li style="margin-bottom:8px;"><strong>[${num}]</strong> ${texto}</li>`;
    }
    html += `</ul></div>`;
  }

  container.innerHTML = html;

  container.querySelectorAll('[data-nav]').forEach(b =>
    b.addEventListener('click', () => navegar(Number(b.dataset.nav))));
}
