document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('sidebar-overlay');
  const btnHome = document.getElementById('btn-home');
  const menuItems = document.querySelectorAll('.menu-list .menu-item');
  const conteudoPrincipal = document.getElementById('conteudo-principal');

  // --- CONTROLE DE TEMA (CLARO / ESCURO) ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');

  function aplicarTema(tema) {
    if (tema === 'dark') {
      document.body.classList.add('dark-theme');
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Modo Claro';
    } else {
      document.body.classList.remove('dark-theme');
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Modo Escuro';
    }
  }

  const temaSalvo = localStorage.getItem('tema-guia') || 'light';
  aplicarTema(temaSalvo);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    const novoTema = isDark ? 'light' : 'dark';
    aplicarTema(novoTema);
    localStorage.setItem('tema-guia', novoTema);
  });

  // --- CONTROLE DO MENU LATERAL ---
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
  });

  // --- DADOS DOS TÓPICOS DA TELA INICIAL ---
  const TOPICOS = [
    {
      id: "oleo-motor",
      titulo: "Óleo de Motor: Viscosidade, Norma e o Que o Manual Não Te Conta",
      icone: "fa-oil-can",
      resumo: "Como ler 5W-30, 10W-40, 15W-40; API e ACEA; sintético vs semissintético vs mineral; intervalo e erros que matam o motor.",
      pontos: [
        "Viscosidade — leia os dois números: em '5W-30', o '5W' é o comportamento a frio (W = winter). Quanto menor o número, mais fino o óleo a frio e melhor a partida. O '30' é a viscosidade a quente (100 °C). Nunca troque a viscosidade recomendada 'porque é mais barato'.",
        "Normas API — o padrão americano: a letra 'S' é para motores a gasolina (SN, SP) e a 'C' para diesel (CI-4, CJ-4, CK-4). Quanto mais recente a letra, maior a proteção contra borra e fuligem.",
        "Normas ACEA — o padrão europeu: A3/B4 (gasolina/diesel alto desempenho), C3 (baixo teor de cinzas para motores com DPF), E7/E9 (diesel pesado). Óleo fora da norma ACEA pode entupir o filtro de partículas.",
        "Sintético vs semissintético vs mineral: motor turbo, injeção direta e intervalos longos pedem sintético. Usar mineral em motor que pede sintético acelera borra e desgaste.",
        "Intervalo de troca: siga o manual (km OU tempo, o que vier primeiro). Troque o filtro de óleo junto — filtro velho contamina o óleo novo.",
        "Erros que matam o motor: completar com óleo diferente, rodar com nível baixo e esticar o intervalo 'porque o óleo é sintético'. Confira o nível com motor frio em piso plano."
      ]
    },
    {
      id: "oleo-cambio-diferencial",
      titulo: "Óleos de Câmbio e Diferencial: GL-4, GL-5, ATF, CVT e DCT",
      icone: "fa-gears",
      resumo: "A diferença que corrói sincronizadores, os tipos de ATF, CVT e DCT, e por que GL-6 não é para todo mundo.",
      pontos: [
        "GL-4 vs GL-5 — a confusão mais cara da oficina: câmbios manuais com sincronizadores de latão/bronze exigem API GL-4. O GL-5 tem aditivos de extrema pressão que corroem esses metais — o câmbio começa a 'raspar' marcha. GL-5 é para diferenciais e eixos rígidos.",
        "Diferenciais com LSD: eixos com blocos ou discos de fricção (Trac-Lok, LSD) pedem GL-5 compatível com LSD ou aditivo modificador de atrito obrigatório.",
        "Câmbio automático — ATF: cada montadora tem sua especificação (Dexron, Mercon, ATF+4, ZF Lifeguard). ATF errado causa troca brusca e patinação.",
        "CVT e DCT: câmbio CVT usa fluido próprio (não é ATF comum) e DCT (dupla embreagem) tem fluido específico. Trocar fluido errado em CVT pode destruir a correia metálica.",
        "Intervalo e nível: câmbio e diferencial não são 'para sempre'. Verifique nível pelo bujão de inspeção e anote a troca."
      ]
    },
    {
      id: "fluidos-freio",
      titulo: "Fluido de Freio: DOT 3, DOT 4, DOT 5.1 e a Armadilha do DOT 5",
      icone: "fa-circle-stop",
      resumo: "Ponto de ebulição seco e úmido, base química (glicol vs silicone), higroscopicidade e por que nunca misturar.",
      pontos: [
        "O que é o DOT: indica a faixa de ponto de ebulição e a base química. Quanto maior o DOT, maior a resistência ao calor.",
        "DOT 3 e DOT 4 (base glicol): DOT 3 ferve a ~205 °C (seco) e ~140 °C (úmido). DOT 4 ferve a ~230 °C (seco) e ~155 °C (úmido) e é o padrão dos carros modernos.",
        "DOT 5.1 (base glicol): seco acima de 260 °C, úmido ~180 °C. Alta performance, misturável com DOT 3 e 4.",
        "DOT 5 (base silicone): NÃO é higroscópico e NÃO se mistura com glicol. Colocar DOT 5 em sistema de glicol causa falha de vedações e pedal esponjoso. Nunca misture.",
        "DOT 4 LV / 5.1 LV: baixa viscosidade para sistemas ABS/ESP modernos. Se o manual pede LV, use LV.",
        "Troca obrigatória: fluidos à base de glicol absorvem umidade do ar. Troque a cada 2 anos independentemente da quilometragem."
      ]
    },
    {
      id: "pneus",
      titulo: "Pneus: Ler o DOT, o TWI e o Desgaste Como um Diagnóstico",
      icone: "fa-circle-dot",
      resumo: "Decodificação do DOT (semana/ano), limites de sulco TWI, índices de carga/velocidade e diagnóstico de desgaste.",
      pontos: [
        "DOT — a certidão de nascimento do pneu: os 4 últimos dígitos indicam semana e ano de fabricação (ex.: '2424' = 24ª semana de 2024). Pneu com mais de 5 anos resseca mesmo com sulco profundo.",
        "TWI (Tread Wear Indicator): o limite legal e técnico é 1,6 mm de sulco. Abaixo disso, o risco de aquaplanagem é altíssimo.",
        "Índices de carga e velocidade: na lateral, '91V' indica carga máxima e velocidade máxima. Trocar por índice inferior ao original é risco.",
        "Desgaste como diagnóstico: desgaste nas duas bordas = pressão baixa; só no centro = excesso de pressão; em escama = amortecedor gasto ou alinhamento fora.",
        "Calibragem e rodízio: calibre a frio com a pressão da etiqueta do veículo e não esqueça o estepe."
      ]
    },
    {
      id: "baterias",
      titulo: "Bateria e Alternador: Medir, Diagnosticar, Não Chutar",
      icone: "fa-car-battery",
      resumo: "Tensão de repouso, faixa do alternador (13,8–14,8 V), sulfatação, terminais e data de fabricação.",
      pontos: [
        "Tensão de repouso: com o veículo desligado há pelo menos 4 horas, bateria saudável lê 12,6 V a 12,8 V. Abaixo de 12,2 V indica descarga profunda ou sulfatação.",
        "Alternador e regulador: com o motor funcionando, a tensão nos terminais deve ficar entre 13,8 V e 14,8 V. Abaixo de 13,5 V não carrega; acima de 15,0 V há sobrecarga.",
        "Sulfatação e terminais: corrosão nos bornes gera queda de tensão e falhas no painel ou partida pesada. Mantenha bornes limpos e apertados.",
        "Eletrólito (não seladas): verifique o nível e complete apenas com água destilada.",
        "Vida útil: baterias duram em média 3 a 5 anos. Anote a data de instalação."
      ]
    }
  ];

  // --- MAPEAMENTO DE MODELOS POR MONTADORA (Lê do dados.js se existir, ou usa lista padrão) ---
  function obterModelosPorMarca(nomeMarca) {
    const modelosEncontrados = [];

    // 1. Tenta extrair automaticamente de especificacoesOleos (do seu dados.js)
    if (typeof especificacoesOleos !== 'undefined') {
      const prefixos = nomeMarca === 'Volkswagen' ? ['VW ', 'Volkswagen '] : [nomeMarca + ' '];
      Object.keys(especificacoesOleos).forEach(chave => {
        if (prefixos.some(p => chave.toLowerCase().startsWith(p.toLowerCase()))) {
          modelosEncontrados.push(chave);
        }
      });
    }

    if (modelosEncontrados.length > 0) return modelosEncontrados;

    // 2. Fallback caso dados.js não tenha sido carregado ainda
    const fallback = {
      'Agrale': ['Agrale Marruá - AM21', 'Agrale Marruá - AM20', 'Agrale Marruá - AM22', 'Agrale Marruá - AM25'],
      'Chevrolet': ['Chevrolet SPIN', 'Chevrolet Agile', 'Chevrolet Montana'],
      'Fiat': ['Fiat Palio 1.4', 'Fiat Doblo 1.8', 'Fiat Doblo 1.4', 'Fiat Strada 1.4', 'Fiat Ducato 2.3 Multijet', 'Fiat Ducato 2.8'],
      'Ford': ['Ford Fiesta 1.0', 'Ford Fiesta 1.6', 'Ford Focus 1.6', 'Ford Focus 2.0', 'Ford F-250 e F-350', 'Ford Ranger 2.2', 'Ford Cargo 816'],
      'Iveco': ['Iveco - Daily 35S14'],
      'Mercedes-Benz': ['Mercedes-Benz 915c', 'Mercedes-Benz 1418E', 'Mercedes-Benz Atego 1725', 'Mercedes-Benz AXOR 3344'],
      'Mitsubishi': ['Mitsubishi L200 2.5', 'Mitsubishi Triton 3.2', 'Mitsubishi Triton 2.4'],
      'Nissan': ['Nissan Sentra', 'Nissan Versa 1.6', 'Nissan Frontier 2.5', 'Nissan Frontier 2.3'],
      'Peugeot': ['Peugeot 408 1.6 THP'],
      'Renault': ['Renault Logan - Sandero'],
      'Toyota': ['Toyota Hilux 3.0', 'Toyota Hilux 2.8 - Nova'],
      'Volkswagen': ['VW Kombi 1.4', 'VW Gol 1.6 G5', 'VW Gol 1.6 G6', 'VW Constellation 24-250']
    };
    return fallback[nomeMarca] || [`${nomeMarca} - Modelos em cadastro`];
  }

  // --- RENDERIZAÇÃO DA TELA INICIAL (CARDS DE ASSUNTOS) ---
  function mostrarTelaInicial() {
    menuItems.forEach(el => el.classList.remove('active'));
    
    conteudoPrincipal.innerHTML = `
      <div class="secao-header">
        <h1><i class="fa-solid fa-book-open" style="color: var(--active-text);"></i> Guia Técnico Automotivo</h1>
        <p>Selecione um assunto técnico abaixo para leitura rápida ou escolha uma montadora no menu lateral para ver veículos, fluidos e filtros.</p>
      </div>
      <div class="cards-grid">
        ${TOPICOS.map(t => `
          <div class="item-card" data-topico="${t.id}">
            <div class="card-icon-box"><i class="fa-solid ${t.icone}"></i></div>
            <h3>${t.titulo}</h3>
            <p>${t.resumo}</p>
          </div>
        `).join('')}
      </div>
    `;

    // Adiciona clique nos cards de tópicos
    document.querySelectorAll('[data-topico]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-topico');
        mostrarDetalheTopico(id);
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- RENDERIZAÇÃO DE DETALHE DO TÓPICO ---
  function mostrarDetalheTopico(id) {
    const topico = TOPICOS.find(t => t.id === id);
    if (!topico) return;

    conteudoPrincipal.innerHTML = `
      <div class="breadcrumb-bar">
        <button class="crumb-btn" id="voltar-inicio">🏠 Início</button>
        <span>›</span>
        <span class="crumb-atual">${topico.titulo}</span>
      </div>
      <div class="secao-header">
        <h2><i class="fa-solid ${topico.icone}" style="color: var(--active-text);"></i> ${topico.titulo}</h2>
        <p>${topico.resumo}</p>
      </div>
      <ul class="pontos-lista">
        ${topico.pontos.map(p => `<li>${p}</li>`).join('')}
      </ul>
    `;

    document.getElementById('voltar-inicio').addEventListener('click', mostrarTelaInicial);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- RENDERIZAÇÃO DOS MODELOS DA MONTADORA ESCOLHIDA ---
  function mostrarMontadora(nomeMarca, iconeMarca) {
    const modelos = obterModelosPorMarca(nomeMarca);

    conteudoPrincipal.innerHTML = `
      <div class="breadcrumb-bar">
        <button class="crumb-btn" id="voltar-inicio">🏠 Início</button>
        <span>›</span>
        <span class="crumb-atual">${nomeMarca}</span>
      </div>
      <div class="secao-header">
        <h2><span>${iconeMarca}</span> ${nomeMarca}</h2>
        <p>Selecione um modelo abaixo para consultar capacidades de fluidos e referências cruzadas de filtros.</p>
      </div>
      <div class="cards-grid">
        ${modelos.map(modelo => `
          <div class="item-card" data-modelo="${modelo}">
            <div class="card-icon-box"><i class="fa-solid fa-wrench"></i></div>
            <h3>${modelo}</h3>
            <p>Ver fluidos e referências de filtros.</p>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('voltar-inicio').addEventListener('click', mostrarTelaInicial);

    document.querySelectorAll('[data-modelo]').forEach(card => {
      card.addEventListener('click', () => {
        const modelo = card.getAttribute('data-modelo');
        mostrarFichaVeiculo(nomeMarca, iconeMarca, modelo);
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- RENDERIZAÇÃO DA FICHA TÉCNICA DO VEÍCULO ---
  function mostrarFichaVeiculo(nomeMarca, iconeMarca, modelo) {
    const spec = (typeof especificacoesOleos !== 'undefined') ? especificacoesOleos[modelo] : null;

    let conteudoFicha = '';
    if (spec) {
      const sistemas = [];
      if (spec.motor) sistemas.push({ nome: 'Motor', ...spec.motor });
      if (spec.cambio) sistemas.push({ nome: 'Câmbio', ...spec.cambio });
      if (spec.transferencia) sistemas.push({ nome: 'Caixa de Transferência (4x4)', ...spec.transferencia });
      if (spec.diferencial && spec.diferencial.tipo !== 'Não se aplica (Tração Dianteira - integrado ao câmbio)') {
        sistemas.push({ nome: 'Diferencial', ...spec.diferencial });
      }

      conteudoFicha = sistemas.map(s => `
        <div class="ficha-sistema">
          <div class="ficha-sistema-titulo"><i class="fa-solid fa-droplet"></i> ${s.nome}</div>
          <dl class="ficha-sistema-dados">
            <div class="ficha-dado"><dt>Especificação</dt><dd class="destaque">${s.tipo || '-'}</dd></div>
            <div class="ficha-dado"><dt>Capacidade</dt><dd>${s.qtd || '-'}</dd></div>
            <div class="ficha-dado"><dt>Intervalo</dt><dd>${s.intervalo || '-'}</dd></div>
          </dl>
        </div>
      `).join('');

      if (spec.filtros) {
        const f = spec.filtros;
        const linhaFiltro = (label, obj) => obj ? `
          <tr>
            <td><strong>${label}</strong></td>
            <td>${obj.original && obj.original !== '-' ? `<span class="filtro-tag">${obj.original}</span>` : '-'}</td>
            <td>${obj.tecfil && obj.tecfil !== '-' ? `<span class="filtro-tag">${obj.tecfil}</span>` : '-'}</td>
            <td>${obj.mann && obj.mann !== '-' ? `<span class="filtro-tag">${obj.mann}</span>` : '-'}</td>
            <td>${obj.mahle && obj.mahle !== '-' ? `<span class="filtro-tag">${obj.mahle}</span>` : '-'}</td>
            <td>${obj.wega && obj.wega !== '-' ? `<span class="filtro-tag">${obj.wega}</span>` : '-'}</td>
            <td>${obj.fram && obj.fram !== '-' ? `<span class="filtro-tag">${obj.fram}</span>` : '-'}</td>
          </tr>
        ` : '';

        conteudoFicha += `
          <h3 style="margin: 28px 0 12px; font-size: 18px;"><i class="fa-solid fa-filter" style="color: var(--active-text);"></i> Tabela de Referência de Filtros</h3>
          <div class="tabela-wrapper">
            <table class="tabela-filtros">
              <thead>
                <tr>
                  <th>Aplicação</th>
                  <th>Original</th>
                  <th>Tecfil</th>
                  <th>Mann</th>
                  <th>Mahle</th>
                  <th>Wega</th>
                  <th>Fram</th>
                </tr>
              </thead>
              <tbody>
                ${linhaFiltro('Óleo do Motor', f.oleo)}
                ${linhaFiltro('Filtro de Ar', f.ar)}
                ${linhaFiltro('Combustível', f.combustivel)}
              </tbody>
            </table>
          </div>
        `;
      }
    } else {
      conteudoFicha = `
        <div class="item-card" style="cursor: default; text-align: center; padding: 40px;">
          <h3>Conteúdo em construção</h3>
          <p>As especificações detalhadas de fluidos e filtros para o <strong>${modelo}</strong> serão adicionadas em breve.</p>
        </div>
      `;
    }

    conteudoPrincipal.innerHTML = `
      <div class="breadcrumb-bar">
        <button class="crumb-btn" id="voltar-inicio">🏠 Início</button>
        <span>›</span>
        <button class="crumb-btn" id="voltar-marca">${nomeMarca}</button>
        <span>›</span>
        <span class="crumb-atual">${modelo}</span>
      </div>
      <div class="secao-header">
        <h2>${modelo}</h2>
        <p>Especificações técnicas de lubrificantes e conversões de filtros.</p>
      </div>
      ${conteudoFicha}
    `;

    document.getElementById('voltar-inicio').addEventListener('click', mostrarTelaInicial);
    document.getElementById('voltar-marca').addEventListener('click', () => mostrarMontadora(nomeMarca, iconeMarca));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- EVENTOS DE CLIQUE DO MENU LATERAL E TOPO ---
  btnHome.addEventListener('click', mostrarTelaInicial);

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      // Fecha gaveta no mobile
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');

      const nomeMarca = item.getAttribute('data-marca');
      const iconeMarca = item.querySelector('.icon').textContent;
      mostrarMontadora(nomeMarca, iconeMarca);
    });
  });

  // Inicializa exibindo os cards de tópicos na tela inicial
  mostrarTelaInicial();
});
