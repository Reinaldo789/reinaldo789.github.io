# Guia Técnico de Lubrificantes & Filtros (marrua.metiradosanha.com.br)

## Estrutura do Pacote
- `index.html`: Página principal responsiva com menu lateral por montadora, busca instantânea e fichas técnicas.
- `js/dados/frota_completa.js`: Arquivo centralizador que importa e exporta todas as 21 bases de montadoras.
- `js/dados/*.js`: Módulos individuais por montadora (2011 a 2026+):
  - `agrale.js`, `chevrolet.js`, `citroen.js`, `daf.js`, `fiat.js`, `ford.js`, `ford_carros.js`, `honda.js`, `hyundai.js`, `iveco.js`, `jeep_ram.js`, `mercedes.js`, `mitsubishi.js`, `nissan.js`, `peugeot.js`, `renault.js`, `scania.js`, `toyota.js`, `volvo.js`, `vw.js`, `vw_carros.js`.

## Como publicar / testar
Como os arquivos utilizam ES Modules (`type="module"`), basta subir a pasta descompactada para o seu servidor/hospedagem (GitHub Pages, Netlify, cPanel, etc.) ou abrir localmente usando um servidor HTTP simples (ex.: `npx serve` ou `python -m http.server`).
