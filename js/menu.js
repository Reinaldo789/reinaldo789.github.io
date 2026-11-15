/* Comportamento do menu lateral: gaveta no celular e grupos (montadoras) abrindo um por vez. */
(function () {
  const body = document.body;

  function abrirGaveta(aberta) {
    body.classList.toggle('menu-aberto', aberta);
    const t = document.getElementById('menuToggle');
    if (t) t.setAttribute('aria-expanded', String(aberta));
  }

  function definirGrupo(botao, aberto) {
    botao.setAttribute('aria-expanded', String(aberto));
    const sub = document.getElementById(botao.getAttribute('aria-controls'));
    if (sub) sub.classList.toggle('aberto', aberto);
  }

  // Abre apenas o grupo com esse id (e fecha todos os outros). Id vazio fecha todos.
  function abrirSo(id) {
    document.querySelectorAll('.grupo-menu').forEach(b =>
      definirGrupo(b, b.getAttribute('aria-controls') === id));
  }

  document.addEventListener('click', (e) => {
    const alvo = e.target;
    if (alvo.closest('#menuToggle')) {
      abrirGaveta(!body.classList.contains('menu-aberto'));
    } else if (alvo.closest('#fecharMenu') || alvo.closest('#fundoMenu')) {
      abrirGaveta(false);
    } else if (alvo.closest('#voltarTopo')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const grupo = alvo.closest('.grupo-menu');
    if (grupo) {
      const abrir = grupo.getAttribute('aria-expanded') !== 'true';
      abrirSo(abrir ? grupo.getAttribute('aria-controls') : '');
      if (abrir) grupo.scrollIntoView({ block: 'nearest' });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') abrirGaveta(false);
  });

  window.Menu = { abrirGaveta, abrirSo, definirGrupo };
})();
