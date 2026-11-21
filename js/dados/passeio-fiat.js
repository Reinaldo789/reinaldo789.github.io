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
      oleo: 'PSL55',
      ar: 'ARL4150',
      combustivel: 'GI04/7'
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
      oleo: 'PSL619',
      ar: 'ARL4148',
      combustivel: 'GI04/7'
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
      oleo: 'PSL55',
      ar: 'ARL4148',
      combustivel: 'GI04/7'
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
      oleo: 'PSL55',
      ar: 'ARL4150',
      combustivel: 'GI04/7'
    }
  }
};