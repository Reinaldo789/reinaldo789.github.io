export const passeioVW = {
  'VW Kombi 1.4': {
    sistemas: [
      { sistema: 'Motor (EA111 Total Flex)', especificacao: 'SAE 15W-40 ou 5W-40 (Norma VW 502 00) [1]', capacidade: '3,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'API GL-4', capacidade: '3,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor arrefecido a líquido (arrefecimento por radiador na frente), portanto não utiliza arrefecimento a ar como as antigas a ar.",
      2: "10.000 km (Normal) / 5.000 km (Severo / Carga e trabalho urbano)."
    },
    filtros: {
      oleo: 'PSL55',
      ar: 'ARL3280',
      combustivel: 'GI04/7'
    }
  },

  'VW Gol 1.6 G5': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00 (sintético ou semissintético).",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: 'PSL560',
      ar: 'ARL3280',
      combustivel: 'GI50/7'
    }
  },

  'VW Gol 1.6 G6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: 'PSL560',
      ar: 'ARL3280',
      combustivel: 'GI50/7'
    }
  }
};