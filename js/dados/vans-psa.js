export const vansPsa = {
  'Citroën Jumper / Peugeot Boxer 2.3 Multijet (Euro 3 - 2011 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE0481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético ou 15W-40 (API CI-4 / ACEA B4) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Fase final da motorização 2.3 Multijet Euro 3 (sem válvula EGR e sem DPF). Compartilha integralmente a mecânica com a Fiat Ducato 2.3."
    },
    filtros: {
      oleo: 'PSL657',
      ar: 'ARS1013',
      combustivel: 'PEC3023'
    }
  },

  'Citroën Jumper / Peugeot Boxer 2.3 Multijet (Euro 5 - 2013 a 2017)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE3481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (ACEA C2 / Fiat 9.55535-S1) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Evolução Proconve P7 (Euro 5) equipada com válvula EGR e catalisador oxidante, dispensando ARLA 32. Exige estritamente óleo 5W-30 Low SAPS (ACEA C2) para evitar carbonização da válvula EGR."
    },
    filtros: {
      oleo: 'PSL657',
      ar: 'ARS1013',
      combustivel: 'PEC3023'
    }
  },

  'Citroën Jumper / Peugeot Boxer 2.0, 2.2 e 2.3 HDi / BlueHDi (2018 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (DW10FUD 2.0 130cv / 2.3 HDi 127cv / DW12RUD 2.2 140cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (PSA B71 2312 / ACEA C2) [1]', capacidade: '6,2 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '15,0 L', intervalo: 'Autonomia média: ~6.000 a 8.000 km' },
      { sistema: 'Câmbio Manual (6 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III / Total Fluide DA', capacidade: '1,2 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '10,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Nova geração importada com motorização PSA BlueHDi (2.0 de 2018 a 2021; 2.2 a partir de 2022) e Jumper 2.3 HDi (127 cv, 2019 em diante). Exige óleo homologado PSA B71 2312 (0W-30) ou ACEA C2/C3 (5W-30) para não saturar o DPF.",
      2: "Possui bocal de abastecimento de ARLA 32 logo abaixo da tampa do tanque de diesel."
    },
    filtros: {
      oleo: 'PSL630',
      ar: 'ARL5147',
      combustivel: 'PEC3044'
    }
  },

  'Citroën Jumpy / Peugeot Expert 1.6 BlueHDi (2017 a 2022)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (DV6FCU - 1.6 8V Turbo Diesel 115 cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (PSA B71 2312 / ACEA C2) [1]', capacidade: '5,5 L a 5,6 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '22,4 L', intervalo: 'Autonomia média: ~8.000 a 10.000 km' },
      { sistema: 'Câmbio Manual (6 marchas - ML6C)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,2 L', intervalo: '80.000 km' },
      { sistema: 'Direção Eletro-hidráulica', especificacao: 'Total Fluide DA / LDS', capacidade: '1,0 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '8,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Motor DV6FCU 1.6 BlueHDi equipado com filtro de partículas (DPF) e catalisador SCR. Exige estritamente lubrificante homologado PSA B71 2312 (0W-30) para evitar entupimento prematuro do DPF.",
      2: "Tanque de ARLA 32 com abastecimento localizado na coluna da porta do motorista (ou junto ao bocal de diesel conforme ano/versão)."
    },
    filtros: {
      oleo: 'PEL780',
      ar: 'ARL5073',
      combustivel: 'PEC3050'
    }
  },

  'Citroën Jumpy / Peugeot Expert 1.5 BlueHDi (2022 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (DV5RC / DV5RUC - 1.5 16V Turbo Diesel 120 cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (PSA B71 2312 / ACEA C2) [1]', capacidade: '6,0 L a 6,1 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '18,7 L', intervalo: 'Autonomia média: ~8.000 a 10.000 km' },
      { sistema: 'Câmbio Manual (6 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,2 L', intervalo: '80.000 km' },
      { sistema: 'Direção Eletro-hidráulica', especificacao: 'Total Fluide DA / LDS', capacidade: '1,0 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '8,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Motorização DV5 1.5 16V BlueHDi (Proconve L7 / L8), compartilhada também com o Fiat Scudo 1.5. Não utiliza os mesmos filtros de óleo, ar e diesel do antigo motor 1.6 8V.",
      2: "Sistema SCR integrado obrigatório para atendimento às normas de emissões vigentes."
    },
    filtros: {
      oleo: 'PEL785',
      ar: 'ARL5156',
      combustivel: 'PEC3055'
    }
  },

  'Peugeot Partner / Citroën Berlingo 1.6 16V Flex (2011 a 2021)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (TU5JP4 / EC5 - 1.6 16V Flex 113 / 122 cv)', especificacao: 'SAE 5W-30 ou 5W-40 Sintético (API SN / ACEA A3/B4 / PSA B71 2296) [1]', capacidade: '3,25 L a 3,5 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas - MA5)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III', capacidade: '1,0 L', intervalo: 'Inspeção a cada 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Modelos fabricados entre 2011 e 2017 (motor TU5JP4 113 cv) utilizam 5W-40 (3,5 L); a partir de 2018 (motor EC5 122 cv), passam a utilizar 0W-30 ou 5W-30 PSA B71 2312 (3,25 L)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5053',
      combustivel: 'GI50/7'
    }
  },

  'Peugeot Partner Rapid 1.4 8V Fire EVO Flex (2022 a 2026)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Fire EVO 1.4 8V Flex 86 cv)', especificacao: 'SAE 5W-30 Sintético (API SN / ACEA A1/B1 / Fiat 9.55535-G1) [1]', capacidade: '2,7 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas - C513)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III', capacidade: '1,0 L', intervalo: 'Inspeção a cada 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '5,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Utilitário derivado da plataforma Stellantis / Fiat Fiorino 1.4 Fire EVO. Compartilha integralmente conjunto mecânico, fluidos e filtros com a Fiat Fiorino 1.4 EVO."
    },
    filtros: {
      oleo: 'PSL55',
      ar: 'ARL4150',
      combustivel: 'GI04/7'
    }
  }
};
