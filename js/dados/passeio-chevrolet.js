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
      oleo: 'PSL619',
      ar: 'ARL8829',
      combustivel: 'GI04/7'
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
      oleo: 'PSL55',
      ar: 'ARL4103',
      combustivel: 'GI04/7'
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
      oleo: 'PSL55',
      ar: 'ARL4103',
      combustivel: 'GI04/7'
    }
  }
};