export const passeioFiat = {
  'Fiat Palio 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 Sintético [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '5,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Utilizar lubrificante sintético que atenda à norma Fiat 9.55535-GS1 ou API SP.",
      2: "Uso normal: 10.000 km ou 1 ano. Uso severo (trânsito diário pesado / anda e para): 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4150', authomix: 'FAR4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4150' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '7088921', tecfil: 'ACP304', authomix: 'FCA0304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481', vox: 'FCA0304' }
    }
  },

  'Fiat Doblo 1.8': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '4,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,1 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético. Uso severo requer atenção redobrada ao nível de óleo.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL619', authomix: 'FOL0619', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB619' },
      ar: { original: '51794712', tecfil: 'ARL4148', authomix: 'FAR4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4025', fram: 'CA10222', vox: 'FAR4148' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '46723321', tecfil: 'ACP302', authomix: 'FCA0302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028', vox: 'FCA0302' }
    }
  },

  'Fiat Doblo 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4148', authomix: 'FAR4148', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4148' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '46723321', tecfil: 'ACP302', authomix: 'FCA0302', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-1100', fram: 'CF1028', vox: 'FCA0302' }
    }
  },

  'Fiat Strada 1.4': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (API SP) [1]', capacidade: '2,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SP / Sintético.",
      2: "10.000 km (Normal) / 5.000 km (Severo / Trabalho rural ou urbano pesado)."
    },
    filtros: {
      oleo: { original: '7085786', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 713/16', mahle: 'OC506', wega: 'WO-130', fram: 'CH9642', vox: 'LB55' },
      ar: { original: '51775324', tecfil: 'ARL4150', authomix: 'FAR4150', mann: 'C 2585', mahle: 'LX1791', wega: 'FAP-4022', fram: 'CA9566', vox: 'FAR4150' },
      combustivel: { original: '51778945', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58', mahle: 'KL582', wega: 'FCI-1660', fram: 'G9193', vox: 'FC00047' },
      cabine: { original: '7088921', tecfil: 'ACP304', authomix: 'FCA0304', mann: 'CU 2629/1', mahle: 'LA 67', wega: 'AKX-3520', fram: 'CF9481', vox: 'FCA0304' }
    }
  }
};