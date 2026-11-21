export const vansFiat = {
  'Fiat Ducato 2.3 Multijet (Euro 3 - 2010 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE0481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Car Technyx)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III (Tutela GI/A)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Primeira geração do motor 2.3 Multijet no Brasil (norma Euro 3, sem DPF). Também equipou Citroën Jumper e Peugeot Boxer 2.3 nesse período."
    },
    filtros: {
      oleo: 'PSL657',
      ar: 'ARS1013',
      combustivel: 'PEC3023'
    }
  },

  'Fiat Ducato 2.3 Multijet (Euro 5 - 2013 a 2017)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE3481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Car Technyx)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III (Tutela GI/A)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Evolução para atender ao Proconve P7 (Euro 5) com válvula EGR e catalisador oxidante, dispensando ARLA 32. Exige óleo 5W-30 norma Fiat 9.55535-S1 (ACEA C2) para evitar carbonização no sistema de recirculação."
    },
    filtros: {
      oleo: 'PSL657',
      ar: 'ARS1013',
      combustivel: 'PEC3023'
    }
  },

  'Fiat Ducato 2.3 Multijet II (Nova Geração - 2018 a 2023)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AGL411D - 2.3 16V 130/131 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,5 L (com filtro) [2]', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Câmbio Manual (6 marchas - M40)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Transmission Technyx)', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III (Tutela GI/E)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,8 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Nova geração da carroceria com motor recalibrado (130 cv / 131 cv), dotado de DPF (Filtro de Partículas Diesel) e sem uso de ARLA 32 (o ARLA 32 só chegou na troca para o motor 2.2 a partir de 2023/2024).",
      2: "Atenção ao volume do cárter: reduziu de 5,9 L (geração antiga) para 5,5 L nesta versão."
    },
    filtros: {
      oleo: 'PSL167',
      ar: 'ARL5147',
      combustivel: 'PEC3043'
    }
  },

  'Fiat Ducato 2.2 BlueHDi (Proconve L7/L8 - 2023 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (DW12RUD 2.2 16V - 140 cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (PSA B71 2312 / ACEA C2) [1]', capacidade: '6,2 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '15,0 L', intervalo: 'Autonomia média: ~6.000 a 8.000 km' },
      { sistema: 'Câmbio Manual (6 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Direção Elétrica / Eletro-hidráulica', especificacao: 'Conforme versão (Direção Elétrica nas versões Multi/Minibus)', capacidade: '-', intervalo: 'Sem manutenção periódica' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP / Aditivo Orgânico (50/50)', capacidade: '10,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Substituiu o antigo motor 2.3 Multijet a partir da linha 2023/2024. Compartilha o mesmo motor 2.2 BlueHDi e os mesmos filtros de Citroën Jumper e Peugeot Boxer.",
      2: "Bocal de abastecimento do ARLA 32 localizado junto ao bocal do tanque de diesel."
    },
    filtros: {
      oleo: 'PSL161',
      ar: 'ARL5147',
      combustivel: 'PEC3044'
    }
  }
};
