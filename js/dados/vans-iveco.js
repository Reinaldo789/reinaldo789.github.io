export const vansIveco = {
  'Iveco Daily 35S14 / 45S14 / 55C16 3.0 (Euro 3 - 2008 a 2011)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1C 3.0 16V - 136/155 cv)', especificacao: 'SAE 15W-40 Semissintético (API CI-4 / ACEA E7)', capacidade: '6,9 L (com filtro)', intervalo: '15.000 km' },
      { sistema: 'Câmbio Manual (ZF 6S / 5S)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Car Technyx)', capacidade: '2,2 L a 2,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 80W-90 ou 85W-140 API GL-5', capacidade: 'Rodado Simples: 1,8 L | Duplo: 2,8 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '10,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Linha Daily mecânica/eletrônica Euro 3 (sem EGR e sem DPF). Utiliza filtro de óleo blindado."
    },
    filtros: {
      oleo: 'PSL280',
      ar: 'ARS7107',
      combustivel: 'PSC498'
    }
  },

  'Iveco Daily 35S14 / 45S17 / 55C17 / 70C17 3.0 (Euro 5 - 2012 a 2019)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1C 3.0 16V EGR - 146/170 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (ACEA E6/E9 ou C2) [1]', capacidade: '7,6 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Câmbio Manual (ZF 6S-420 / Eaton FSO)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Transmission Technyx)', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 80W-90 ou 85W-140 API GL-5', capacidade: 'Simples: 1,8 L | Duplo: 2,8 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '10,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Geração Euro 5 (Proconve P7) com sistema EGR (dispensa ARLA 32). O filtro de óleo mudou para elemento refil ecológico e exige óleo 5W-30 de baixo teor de cinzas."
    },
    filtros: {
      oleo: 'PEL720',
      ar: 'ARS5139',
      combustivel: 'PSC880'
    }
  },

  'Iveco Daily Nova Geração 35-150 / 45-170 / 65-170 (2020 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (F1C MAX 3.0 16V - 150/170 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Iveco 18-1811 / ACEA C2/E6) [1]', capacidade: '7,6 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32 - Modelos Euro 6 / 2023+)', especificacao: 'ARLA 32 / AdBlue® (ISO 22241) [2]', capacidade: '20,0 L', intervalo: 'Reabastecer conforme indicação no painel' },
      { sistema: 'Câmbio Manual (ZF 6S-480)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 80W-90 API GL-5', capacidade: 'Simples: 1,9 L | Duplo: 2,9 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '11,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Nova cabine (2020+). Modelos fabricados entre 2020 e 2022 ainda são Euro 5 (sem ARLA 32); modelos a partir de 2023 (Proconve P8 / Euro 6) utilizam DPF + SCR com ARLA 32.",
      2: "Aplicável exclusivamente nas versões Euro 6 (2023 em diante)."
    },
    filtros: {
      oleo: 'PEL720',
      ar: 'ARS5148',
      combustivel: 'PSC880'
    }
  }
};
