document.addEventListener("DOMContentLoaded", () => {
    // 1. Abrir e fechar o menu no celular
    const menuToggle = document.getElementById('menuToggle');
    const fecharMenu = document.getElementById('fecharMenu');
    const fundoMenu = document.getElementById('fundoMenu');
    const abrirMenuHero = document.getElementById('abrirMenuHero');

    function abrirMenu() { document.body.classList.add('menu-aberto'); }
    function fecharMenuFn() { document.body.classList.remove('menu-aberto'); }

    if(menuToggle) menuToggle.addEventListener('click', abrirMenu);
    if(abrirMenuHero) abrirMenuHero.addEventListener('click', abrirMenu);
    if(fecharMenu) fecharMenu.addEventListener('click', fecharMenuFn);
    if(fundoMenu) fundoMenu.addEventListener('click', fecharMenuFn);

    // 2. Montar as marcas no menu lateral
    // (Aqui você pode puxar do seu banco de dados, estou colocando fixo de exemplo)
    const marcas = [
        { nome: "Chevrolet", qtd: 3, modelos: ["Onix", "Tracker", "S10"] },
        { nome: "Fiat", qtd: 6, modelos: ["Argo", "Mobi", "Toro", "Strada"] },
        { nome: "Ford", qtd: 11, modelos: ["Ka", "Ranger"] },
        { nome: "Nissan", qtd: 3, modelos: ["Frontier 2.3", "Sentra", "Versa 1.6"] }
    ];

    const menuMarcas = document.getElementById('menuMarcas');
    
    if (menuMarcas) {
        marcas.forEach(marca => {
            // Cria o botão da marca
            const botao = document.createElement('button');
            botao.className = 'grupo-menu';
            botao.setAttribute('aria-expanded', 'false');
            botao.innerHTML = `
                <span>${marca.nome}</span>
                <div class="grupo-icones">
                    <span class="badge">${marca.qtd}</span>
                    <span class="chevron">▼</span>
                </div>
            `;
            
            // Cria o submenu
            const submenu = document.createElement('div');
            submenu.className = 'sub-menu';
            marca.modelos.forEach(modelo => {
                const link = document.createElement('a');
                link.href = `#${modelo.toLowerCase().replace(/\s+/g, '-')}`;
                link.textContent = modelo;
                submenu.appendChild(link);
            });

            // Lógica de abrir/fechar o acordeão
            botao.addEventListener('click', () => {
                const isExpanded = botao.getAttribute('aria-expanded') === 'true';
                
                // Fecha todos os outros
                document.querySelectorAll('.grupo-menu').forEach(btn => {
                    btn.setAttribute('aria-expanded', 'false');
                    if(btn.nextElementSibling) btn.nextElementSibling.classList.remove('aberto');
                });

                // Se não estava aberto, abre o atual
                if (!isExpanded) {
                    botao.setAttribute('aria-expanded', 'true');
                    submenu.classList.add('aberto');
                }
            });

            menuMarcas.appendChild(botao);
            menuMarcas.appendChild(submenu);
        });
    }
});
