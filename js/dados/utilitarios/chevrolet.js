export const utilitariosChevrolet = {
  'Chevrolet S10 2.8 Turbo Diesel (2012 em diante)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V)', especificacao: 'SAE 5W-30 Sintético (Norma GM Dexos 2) [1]', capacidade: '5,7 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-85 GL-4 | Automático: Mobil ATF 3309 / AW-1', capacidade: 'Manual: 2,4 L | Auto: Substituição parcial ~4,0 L', intervalo: '40.000 km (Uso Severo) / 80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Tras: 2,2 L | Diant: 1,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento Long Life Orgânico (50/50)', capacidade: '9,8 L', intervalo: '150.000 km ou 5 anos' }
    ],
    notas: {
      1: "Utiliza sistema com DPF sem injeção de ARLA 32 na linha padrão."
    },
    filtros: {
      oleo: { original: '94748002', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-510', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '52048902', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 24 011', mahle: 'LX3830', wega: 'FAP-4030', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '52046261', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '94774677', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  }
};