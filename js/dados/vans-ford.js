export const vansFord = {
  'Ford Transit 2.4 TDCi (Euro 3 - 2008 a 2011)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duratorq 2.4 16V - 115 cv)', especificacao: 'SAE 5W-30 Sintético (Ford WSS-M2C913-B / C) [1]', capacidade: '6,5 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (MT82 - 6 marchas)', especificacao: 'SAE 75W-80 Sintético (Ford WSS-M2C200-D2)', capacidade: '2,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 75W-90 ou 80W-90 Sintético API GL-5', capacidade: 'Rodado Simples: 2,2 L | Duplo: 2,9 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Super Plus Orgânico (50/50)', capacidade: '11,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Primeira geração comercializada no Brasil (norma Euro 3, sem filtro DPF e sem ARLA 32)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL9600',
      combustivel: 'PSC883'
    }
  },

  'Ford Transit 2.2 TDCi (Proconve L6 / Euro 5 - 2012 a 2014)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duratorq 2.2 16V - 125 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Ford WSS-M2C913-C/D / ACEA C2) [1]', capacidade: '9,5 L (com filtro) [2]', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (MT82 - 6 marchas)', especificacao: 'SAE 75W-80 Sintético (Ford WSS-M2C200-D2)', capacidade: '2,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 75W-90 Sintético API GL-5', capacidade: 'Rodado Simples: 2,2 L | Duplo: 2,9 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Super Plus Orgânico (50/50)', capacidade: '11,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Evolução para o Proconve L6 equipada com filtro de partículas (DPF) e válvula EGR, dispensando ARLA 32. Exige óleo de baixo teor de cinzas (Low SAPS) para não obstruir o DPF.",
      2: "Atenção ao cárter: a capacidade aumentou de 6,5 L (motor 2.4) para 9,5 L nesta versão 2.2."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL9600',
      combustivel: 'PSC883'
    }
  },

  'Ford Transit 2.0 EcoBlue (Proconve L7/L8 - 2022 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (2.0 EcoBlue Turbo - 165/170 cv)', especificacao: 'SAE 0W-30 Sintético Low SAPS (Ford WSS-M2C950-A) [1]', capacidade: '12,0 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '24,0 L', intervalo: 'Autonomia média: ~8.000 a 10.000 km' },
      { sistema: 'Câmbio Manual (MT82) / Automático (10R80)', especificacao: 'Manual: SAE 75W (WSS-M2C200-D2) | Auto: ATF Mercon ULV', capacidade: 'Manual: 2,4 L | Auto: 12,4 L (Total)', intervalo: 'Manual: 80.000 km | Auto: 100.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 75W-85 Sintético API GL-5', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Yellow / P-OAT (50/50)', capacidade: '13,4 L', intervalo: '100.000 km ou 4 anos' }
    ],
    notas: {
      1: "Nova geração com motor 2.0 EcoBlue (correia dentada banhada a óleo). É obrigatório o uso exclusivo de óleo SAE 0W-30 homologado na norma Ford WSS-M2C950-A para não degradar a correia interna nem saturar o DPF.",
      2: "Reservatório de ARLA 32 de 24 litros com bocal de abastecimento localizado na coluna da porta do motorista."
    },
    filtros: {
      oleo: 'PSL168',
      ar: 'ARL5155',
      combustivel: 'PEC3054'
    }
  }
};
