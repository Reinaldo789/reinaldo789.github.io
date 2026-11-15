/* ---------- Carregamento dos dados (mostra um aviso na página se algo faltar) ---------- */
function mostrarErro(detalhe) {
  console.error(detalhe);
  const aviso = `<div class="alerta"><strong>Não foi possível carregar o guia.</strong><p>${detalhe}</p></div>`;
  const alvo = document.getElementById('indiceMarcas');
  if (alvo) alvo.innerHTML = aviso;
  const resumo = document.getElementById('resumo');
  if (resumo) resumo.textContent = 'Erro ao carregar os dados';
}

if (!window.Menu) {
  mostrarErro('O arquivo <code>js/menu.js</code> não foi encontrado. Envie a pasta <code>js/</code> inteira para o site.');
  throw new Error('js/menu.js não carregou');
}

let bancoDeDadosGlobal, veiculosPasseio, veiculosUtilitarios, veiculosCaminhoes, veiculosVans;
try {
  ({ bancoDeDadosGlobal } = await import('./dados/index.js'));
  ({ veiculosPasseio } = await import('./dados/passeio.js'));
  ({ veiculosUtilitarios } = await import('./dados/utilitarios.js'));
  ({ veiculosCaminhoes } = await import('./dados/caminhoes.js'));
  ({ veiculosVans } = await import('./dados/vans.js'));
} catch (erro) {
  mostrarErro('Falha ao ler a pasta <code>js/dados/</code> (' + erro.message + '). Confira se ela foi enviada com index.js, passeio.js, utilitarios.js, caminhoes.js e vans.js, com esses nomes exatos (minúsculas).');
  throw erro;
}

/* ---------- Utilidades ---------- */
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const norm = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const slug = (t) => norm(t).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* ---------- Categorias ---------- */
const categoriaDe = {};
[['Passeio', veiculosPasseio], ['Utilitário', veiculosUtilitarios],
 ['Caminhão', veiculosCaminhoes], ['Van', veiculosVans]]
  .forEach(([nome, dados]) => Object.keys(dados).forEach(v => { categoriaDe[v] = nome; }));

/* ---------- Montadoras e modelos ---------- */
const NOMES_MARCA = { VW: 'Volkswagen' };
const marcaDe = (nome) => { const p = nome.split(' ')[0]; return NOMES_MARCA[p] || p; };
const modeloDe = (nome) => nome.replace(/^\S+\s*(-\s*)?/, '').trim() || nome;

const marcas = new Map();
Object.keys(bancoDeDadosGlobal).forEach(nome => {
  const m = marcaDe(nome);
  if (!marcas.has(m)) marcas.set(m, []);
  marcas.get(m).push({ nome, modelo: modeloDe(nome) });
});
const ordemMarcas = [...marcas.keys()].sort((a, b) => a.localeCompare(b, 'pt-BR'));
ordemMarcas.forEach(m =>
  marcas.get(m).sort((a, b) => a.modelo.localeCompare(b.modelo, 'pt-BR', { numeric: true })));
const ordemGlobal = ordemMarcas.flatMap(m => marcas.get(m).map(v => v.nome));

let atual = null;

/* ---------- Menu lateral: montadoras > veículos ---------- */
function renderMenu(termo = '') {
  const alvo = document.getElementById('menuMarcas');
  const termos = norm(termo).split(/\s+/).filter(Boolean);
  let total = 0;
  alvo.innerHTML = '';

  ordemMarcas.forEach(marca => {
    const lista = marcas.get(marca).filter(v => termos.every(t => norm(v.nome).includes(t)));
    if (!lista.length) return;
    total += lista.length;

    const id = 'grupo-' + slug(marca);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'grupo-menu';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', id);
    btn.innerHTML = `<span>${esc(marca)}</span><em class="qtd">${lista.length}</em><span>⌄</span>`;

    const sub = document.createElement('div');
    sub.className = 'sub-menu';
    sub.id = id;
    lista.forEach(v => {
      const a = document.createElement('a');
      a.href = '#' + encodeURIComponent(v.nome);
      a.textContent = v.modelo;
      a.dataset.veiculo = v.nome;
      sub.appendChild(a);
    });
    alvo.append(btn, sub);
  });

  if (!total) {
    alvo.innerHTML = '<p class="menu-vazio">Nenhum veículo encontrado.</p>';
    return;
  }

  if (termos.length) {
    // Buscando: abre todas as montadoras com resultado
    alvo.querySelectorAll('.grupo-menu').forEach(b => window.Menu.definirGrupo(b, true));
  }
  marcarAtivo(!termos.length);
}

function marcarAtivo(abrirGrupo = true) {
  document.querySelectorAll('#menuMarcas a').forEach(a =>
    a.classList.toggle('ativo', a.dataset.veiculo === atual));
  if (atual && abrirGrupo) window.Menu.abrirSo('grupo-' + slug(marcaDe(atual)));
  const ativo = document.querySelector('#menuMarcas a.ativo');
  if (ativo) ativo.scrollIntoView({ block: 'nearest' });
}

/* ---------- Página inicial ---------- */
function renderInicio() {
  document.getElementById('resumo').textContent =
    `${ordemGlobal.length} veículos · ${ordemMarcas.length} montadoras`;

  document.getElementById('indiceMarcas').innerHTML = ordemMarcas.map(marca => `
    <article class="cartao-marca">
      <h3>${esc(marca)} <small>${marcas.get(marca).length} ${marcas.get(marca).length === 1 ? 'veículo' : 'veículos'}</small></h3>
      <ul>${marcas.get(marca).map(v =>
        `<li><a href="#${encodeURIComponent(v.nome)}">${esc(v.modelo)}</a></li>`).join('')}</ul>
    </article>`).join('');
}

/* ---------- Ficha do veículo ---------- */
const ROTULOS_FILTRO = { oleo: 'Óleo do motor', ar: 'Ar do motor', combustivel: 'Combustível', cabine: 'Cabine (A/C)' };

function mostrarFicha(nome) {
  const d = bancoDeDadosGlobal[nome];
  const marca = marcaDe(nome);
  const i = ordemGlobal.indexOf(nome);
  const ant = ordemGlobal[i - 1];
  const prox = ordemGlobal[i + 1];

  const tag = (v) => `<td><span class="filtro-tag">${esc(v || '-')}</span></td>`;

  let html = `
    <nav class="migalhas">
      <a href="#inicio">Início</a> › <button type="button" data-marca="${esc(marca)}">${esc(marca)}</button> › ${esc(modeloDe(nome))}
    </nav>
    <div class="ficha-titulo">
      <h1>${esc(nome)}</h1>
      ${categoriaDe[nome] ? `<span class="tag-categoria">${esc(categoriaDe[nome])}</span>` : ''}
    </div>

    <section class="secao">
      <div class="cabecalho-secao"><div><div class="sobretitulo">FLUIDOS E SISTEMAS</div><h2>Especificações e intervalos</h2></div></div>
      <div class="grade-sis">
        ${d.sistemas.map(s => `
          <article class="cartao-sis">
            <h3>${esc(s.sistema)}</h3>
            <dl>
              <div><dt>Especificação / Norma</dt><dd class="destaque">${esc(s.especificacao)}</dd></div>
              <div><dt>Capacidade</dt><dd>${esc(s.capacidade)}</dd></div>
              <div><dt>Intervalo / Troca</dt><dd>${esc(s.intervalo)}</dd></div>
            </dl>
          </article>`).join('')}
      </div>
    </section>

    <section class="secao">
      <div class="cabecalho-secao"><div><div class="sobretitulo">FILTROS</div><h2>Tabela de equivalência</h2></div></div>
      <div class="caixa-tabela">
        <table class="tabela-filtros">
          <thead><tr>
            <th>Componente</th><th>Original / OE</th><th>Vox</th><th>Tecfil</th><th>Authomix</th>
            <th>Mann</th><th>Mahle</th><th>Wega</th><th>Fram</th>
          </tr></thead>
          <tbody>
            ${Object.entries(d.filtros).map(([tipo, f]) => `
              <tr>
                <td><strong>${esc(ROTULOS_FILTRO[tipo] || tipo)}</strong></td>
                ${tag(f.original)}${tag(f.vox)}${tag(f.tecfil)}${tag(f.authomix)}
                ${tag(f.mann)}${tag(f.mahle)}${tag(f.wega)}${tag(f.fram)}
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>`;

  if (d.notas && Object.keys(d.notas).length) {
    html += `
    <section class="secao">
      <div class="alerta">
        <strong>Notas técnicas e condições de uso</strong>
        <ul class="lista-notas">
          ${Object.entries(d.notas).map(([n, t]) => `<li><strong>[${esc(n)}]</strong> ${esc(t)}</li>`).join('')}
        </ul>
      </div>
    </section>`;
  }

  html += `
    <div class="nav-ficha">
      ${ant ? `<a href="#${encodeURIComponent(ant)}"><small>← Anterior</small>${esc(ant)}</a>` : '<span></span>'}
      ${prox ? `<a class="prox" href="#${encodeURIComponent(prox)}"><small>Próximo →</small>${esc(prox)}</a>` : ''}
    </div>`;

  document.getElementById('ficha').innerHTML = html;
}

/* ---------- Navegação por hash ---------- */
function rotear() {
  const nome = decodeURIComponent(location.hash.slice(1));
  atual = bancoDeDadosGlobal[nome] ? nome : null;

  document.getElementById('inicio').hidden = !!atual;
  document.getElementById('ficha').hidden = !atual;
  document.querySelector('[data-inicio]').classList.toggle('ativo', !atual);
  document.getElementById('topoTag').textContent = atual ? marcaDe(atual) : 'Veículos';
  document.title = atual ? `${atual} | Guia de Lubrificantes & Filtros` : 'Guia Técnico de Lubrificantes & Filtros';

  if (atual) mostrarFicha(atual);
  else window.Menu.abrirSo('');

  marcarAtivo(true);
  window.Menu.abrirGaveta(false);
  window.scrollTo(0, 0);
}

/* ---------- Inicialização ---------- */
renderMenu();
renderInicio();
rotear();
window.addEventListener('hashchange', rotear);

const busca = document.getElementById('buscaMenu');
busca.addEventListener('input', () => renderMenu(busca.value));
busca.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { busca.value = ''; renderMenu(''); }
  if (e.key === 'Enter') document.querySelector('#menuMarcas a')?.click();
});

document.getElementById('abrirMenuHero').addEventListener('click', () => window.Menu.abrirGaveta(true));

// Clique na montadora do "Início › Marca": abre o grupo no menu
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-marca]');
  if (!b) return;
  window.Menu.abrirGaveta(true);
  window.Menu.abrirSo('grupo-' + slug(b.dataset.marca));
  document.getElementById('grupo-' + slug(b.dataset.marca))?.previousElementSibling
    ?.scrollIntoView({ block: 'start' });
});
