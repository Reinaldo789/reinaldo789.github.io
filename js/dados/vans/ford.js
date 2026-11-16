export const vansFord = {
  'Ford Transit 2.0 EcoBlue (Pós-2022 / Euro 6)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (2.0 EcoBlue TDCi)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético (Norma WSS-M2C950-A)', capacidade: '6,6 L (com filtro)', intervalo: '20.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: WSS-M2C200-D2 | Auto: Ford Fluid (10R80)', capacidade: 'Manual: ~1,8 L | Auto: ~9,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico WSS-M97B44-D (50/50)', capacidade: '10,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Utiliza sistema SCR com tanque dedicado de ARLA 32 integrado ao bocal de abastecimento principal."
    },
    filtros: {
      oleo: { original: '2282245', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 7015 z', mahle: 'OX 1146D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: 'GK2Z9601A', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 30 015', mahle: 'LX 3950', wega: 'FAP-4050', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: '2333556', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 8016', mahle: 'KC 550D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '1853037', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CUK 29003', mahle: 'LA 780', wega: 'AKX-1450', fram: 'CF10729', vox: 'FCA0901' }
    }
  }
};