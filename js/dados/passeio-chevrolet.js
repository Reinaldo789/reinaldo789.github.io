export const passeioChevrolet = {
  'Chevrolet SPIN': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '4,2 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (F17)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,8 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 5 anos' }
    ],
    notas: {
      1: "Uso normal/rodovia: SAE 5W-30 (dexos1 Gen2/Gen3) API SP. Uso severo (trânsito urbano intenso, táxi ou percursos curtos): Manter a mesma especificação mas reduzir o intervalo.",
      2: "Intervalo de troca: 10.000 km ou 1 ano para uso normal; Reduzir para 5.000 km ou 6 meses se o veículo operar predominantemente em regime de uso severo."
    },
    filtros: {
      oleo: { original: '24588463', tecfil: 'PSL619', authomix: 'FOL0619', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-150', fram: 'PH10907', vox: 'LB619' },
      ar: { original: '98550812', tecfil: 'ARL8829', authomix: 'FAR8829', mann: 'C 29 030', mahle: 'LX3547', wega: 'FAP-9267', fram: 'CA10330', vox: 'FAR8829' },
      combustivel: { original: '93316245', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1660', fram: 'G1041', vox: 'FC00047' },
      cabine: { original: '94747799', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-1999', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'Chevrolet Agile': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '3,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Uso normal: SAE 5W-30 dexos1. Uso severo: Manter a especificação com troca antecipada.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '93396172', tecfil: 'ARL4103', authomix: 'FAR4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015', vox: 'FAR4103' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '93396173', tecfil: 'ACP308', authomix: 'FCA0308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175', vox: 'FCA0308' }
    }
  },

  'Chevrolet Montana': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 (dexos1) [1]', capacidade: '3,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-85 API GL-4', capacidade: '1,6 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico OAT (50/50)', capacidade: '5,4 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Uso normal: SAE 5W-30 dexos1. Uso severo ou transporte frequente de carga: Antecipar a troca.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo / Trabalho)."
    },
    filtros: {
      oleo: { original: '93742512', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC90', wega: 'WO-120', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '93396172', tecfil: 'ARL4103', authomix: 'FAR4103', mann: 'C 23 015', mahle: 'LX3026', wega: 'FAP-9003', fram: 'CA10015', vox: 'FAR4103' },
      combustivel: { original: '93297745', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '93396173', tecfil: 'ACP308', authomix: 'FCA0308', mann: 'CU 2433', mahle: 'LA 90', wega: 'AKX-3510', fram: 'CF11175', vox: 'FCA0308' }
    }
  }
};