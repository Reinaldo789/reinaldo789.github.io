export const passeioOutrasMarcas = {
  'Nissan Sentra (2013 a 2019 - B17)': {
    sistemas: [
      { sistema: 'Motor (MR20DE / MR20DD 2.0 16V Flex)', especificacao: 'SAE 5W-30 Sintético (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Xtronic)', especificacao: 'Nissan NS-3 Fluid', capacidade: '7,5 L (total) / ~4,0 a 4,5 L (troca parcial)', intervalo: '40.000 km (severo) / 60.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo 100% sintético SAE 5W-30 API SN ou superior.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL158',
      ar: 'ARL1655',
      combustivel: { tecfil: '-', mann: 'WK 58/3', mahle: 'KL583' }
    }
  },

  'Nissan Sentra (2023 a 2026 - B18)': {
    sistemas: [
      { sistema: 'Motor (MR20DD 2.0 16V Injeção Direta)', especificacao: 'SAE 0W-20 Sintético (API SP / ILSAC GF-6) [1]', capacidade: '4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Xtronic)', especificacao: 'Nissan NS-3 Fluid', capacidade: '7,5 L (total) / ~4,0 L (troca parcial)', intervalo: '40.000 km (severo) / 60.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor MR20DD com injeção direta exige viscosidade SAE 0W-20 API SP para controle de pré-ignição em baixa rotação (LSPI) e proteção do sistema.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL158',
      ar: 'ARL1655',
      combustivel: { tecfil: '-', mann: 'WK 58/3', mahle: 'KL583' }
    }
  },

  'Nissan Versa / V-Drive 1.6 (2013 a 2020)': {
    sistemas: [
      { sistema: 'Motor (HR16DE 1.6 16V Flex)', especificacao: 'SAE 5W-30 ou 0W-20 (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '4,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Xtronic - quando equipado)', especificacao: 'Nissan NS-3 Fluid', capacidade: '6,9 L', intervalo: '60.000 km (40.000 km em uso severo)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SN ou superior (SAE 5W-30 ou 0W-20 conforme manual da geração).",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL158',
      ar: 'ARL1656',
      combustivel: { tecfil: '-', mann: 'WK 58/3', mahle: 'KL583' }
    }
  },

  'Nissan Versa 1.6 CVT (2021 a 2026)': {
    sistemas: [
      { sistema: 'Motor (HR16DE 1.6 16V Flex)', especificacao: 'SAE 0W-20 ou 5W-30 (API SP / ILSAC GF-6) [1]', capacidade: '4,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Xtronic)', especificacao: 'Nissan NS-3 Fluid', capacidade: '6,9 L', intervalo: '60.000 km (40.000 km em uso severo)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SP / ILSAC GF-6 (priorizar SAE 0W-20 conforme manual da nova geração).",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL158',
      ar: 'ARL1656',
      combustivel: { tecfil: '-', mann: 'WK 58/3', mahle: 'KL583' }
    }
  },

  'Nissan Kicks 1.6 CVT (2016 a 2026)': {
    sistemas: [
      { sistema: 'Motor (HR16DE 1.6 16V Flex)', especificacao: 'SAE 0W-20 ou 5W-30 (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '4,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Xtronic)', especificacao: 'Nissan NS-3 Fluid', capacidade: '6,9 L', intervalo: '60.000 km (40.000 km em uso severo)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Compartilha o conjunto HR16DE 1.6 16V com o Versa. Utilizar óleo sintético homologado.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL158',
      ar: 'ARL1656',
      combustivel: { tecfil: '-', mann: 'WK 58/3', mahle: 'KL583' }
    }
  },

  'Toyota Corolla 1.8 / 2.0 (2013 a 2019 - 11ª Geração)': {
    sistemas: [
      { sistema: 'Motor (2ZR-FBE 1.8 / 3ZR-FE 2.0 Dual VVT-i Flex)', especificacao: 'SAE 0W-20 ou 5W-30 (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '4,2 L a 4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (K311 / K313)', especificacao: 'Toyota Genuine CVT Fluid TC / FE', capacidade: '8,8 L (total) / ~4,0 L (troca por gravidade)', intervalo: '40.000 km ou 4 anos (severo) / 80.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '6,5 L', intervalo: '80.000 km (primeira troca) e depois a cada 40.000 km' }
    ],
    notas: {
      1: "Viscosidade SAE 0W-20 recomendada para economia e lubrificação a frio; SAE 5W-30 aceita conforme manual.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARL8480'
    }
  },

  'Toyota Corolla 2.0 / Hybrid (2020 a 2026 - 12ª Geração)': {
    sistemas: [
      { sistema: 'Motor (M20A-FKS 2.0 / 2ZR-FXE 1.8 Hybrid)', especificacao: 'SAE 0W-20 ou 0W-16 (API SP / ILSAC GF-6) [1]', capacidade: '4,2 L a 4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Direct Shift-CVT / K120 ou e-CVT)', especificacao: 'Toyota Genuine CVT Fluid FE / WS (Hybrid)', capacidade: '8,8 L (total) / ~4,0 L (troca por gravidade)', intervalo: '40.000 km ou 4 anos (severo) / 80.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '6,5 L', intervalo: '80.000 km (primeira troca) e depois a cada 40.000 km' }
    ],
    notas: {
      1: "Utilizar SAE 0W-20 API SP (ou 0W-16 onde especificado na linha atual); SAE 5W-30 aceita apenas em exceções previstas no manual.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARL8480'
    }
  },

  'Toyota Etios 1.3 / 1.5 (2013 a 2021)': {
    sistemas: [
      { sistema: 'Motor (1NR-FBE 1.3 / 2NR-FBE 1.5 16V Flex)', especificacao: 'SAE 0W-20 ou 5W-30 (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '3,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (5/6 marchas) ou Automático (4 marchas)', especificacao: 'SAE 75W-90 GL-4 (Manual) / ATF WS (Automático)', capacidade: '2,2 L (Manual) / ~6,5 L (AT)', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '4,5 L', intervalo: '80.000 km' }
    ],
    notas: {
      1: "Motores NR Dual VVT-i a partir da linha 2016/2017 priorizam SAE 0W-20; versões anteriores aceitam 0W-20 ou 5W-30 conforme manual.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL127',
      ar: 'ARL2204'
    }
  },

  'Toyota Yaris 1.3 / 1.5 (2018 a 2026)': {
    sistemas: [
      { sistema: 'Motor (1NR-FBE 1.3 / 2NR-FBE 1.5 16V Flex)', especificacao: 'SAE 0W-20 (API SN / SP / ILSAC GF-5 / GF-6) [1]', capacidade: '3,7 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Multidrive-S)', especificacao: 'Toyota Genuine CVT Fluid FE', capacidade: '7,0 L (total) / ~3,5 L (troca parcial)', intervalo: '40.000 km (severo) / 80.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '4,8 L', intervalo: '80.000 km' }
    ],
    notas: {
      1: "Utilizar óleo sintético SAE 0W-20 homologado conforme manual Toyota.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PSL127',
      ar: 'ARL2207'
    }
  },

  'Peugeot 408 1.6 THP': {
    sistemas: [
      { sistema: 'Motor (1.6 Turbo THP)', especificacao: 'SAE 5W-30 (Norma PSA B71 2290 / 2312) [1]', capacidade: '4,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF AW-1', capacidade: '7,0 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo sintético de alta qualidade com aprovação PSA B71 2290 para proteger o turbocompressor e evitar acumulação de borra na injeção direta.",
      2: "Uso normal (rodovia): 10.000 km ou 1 ano. Uso severo (trânsito urbano pesado / percursos curtos frequentes): Reduzir estritamente para 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: 'PEL674',
      ar: 'ARL5047',
      combustivel: 'GI50/7'
    }
  },

  'Renault Logan - Sandero': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 ou 10W-40 [1]', capacidade: '4,8 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SL ou superior, preferencialmente sintético ou semissintético conforme recomendação Renault.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: 'PSL51',
      ar: 'ARL9010',
      combustivel: 'GI04/7'
    }
  },
  
  'Citroën C4 Lounge 1.6 THP Flex / Gasolina (2013 a 2022)': {
    sistemas: [
      { sistema: 'Motor (1.6 16V THP Turbo Injeção Direta)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético (Norma PSA B71 2312 / B71 2297) [1]', capacidade: '4,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automático (AT6)', especificacao: 'ATF AW-1', capacidade: '7,0 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Motor THP com injeção direta e turbocompressor exige óleo sintético de baixa viscosidade com homologação PSA B71 2312 ou B71 2297 para controle de borra e LSPI.",
      2: "Uso normal: 10.000 km ou 1 ano. Uso severo (trânsito urbano pesado / trajetos curtos): 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5047',
      combustivel: 'GI04/7'
    }
  },

  'Citroën C4 Lounge 2.0 16V Flex (2014 a 2019)': {
    sistemas: [
      { sistema: 'Motor (2.0 16V EW10A Aspirado)', especificacao: 'SAE 5W-30 Sintético (Norma PSA B71 2296 / API SN) [1]', capacidade: '4,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (5 marchas) ou Automático (AT6)', especificacao: 'SAE 75W-80 API GL-4 (Manual) / ATF AW-1 (AT6)', capacidade: '2,0 L (Manual) / 7,0 L (AT6)', intervalo: '60.000 km (Inspeção / Troca)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Utilizar óleo sintético 5W-30 conforme norma PSA B71 2296.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5047',
      combustivel: 'GI04/7'
    }
  },

  'Citroën C4 Cactus 1.6 16V EC5 Aspirado (2018 a 2024)': {
    sistemas: [
      { sistema: 'Motor (1.6 16V EC5 Flex 115 / 118 cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético (Norma PSA B71 2312 / API SP) [1]', capacidade: '3,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (5 marchas) ou Automático (AT6)', especificacao: 'SAE 75W-80 API GL-4 (Manual) / ATF AW-1 (AT6)', capacidade: '2,0 L (Manual) / 7,0 L (AT6)', intervalo: '60.000 km (Inspeção / Troca)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Motor EC5 16V na linha C4 Cactus utiliza óleo sintético de baixa viscosidade conforme especificação PSA vigente.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5053',
      combustivel: 'GI04/7'
    }
  },

  'Citroën C4 Cactus 1.6 THP Turbo Flex (2018 a 2024)': {
    sistemas: [
      { sistema: 'Motor (1.6 16V THP Turbo Flex 166 / 173 cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético (Norma PSA B71 2312 / B71 2297) [1]', capacidade: '4,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automático (AT6)', especificacao: 'ATF AW-1', capacidade: '7,0 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Motor 1.6 THP Flex com injeção direta e turbo exige óleo sintético homologado PSA B71 2312 / B71 2297.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5047',
      combustivel: 'GI04/7'
    }
  },

  'Citroën C4 Hatch / Pallas 1.6 e 2.0 Flex (2011 a 2014)': {
    sistemas: [
      { sistema: 'Motor (1.6 16V TU5JP4 / 2.0 16V EW10A)', especificacao: 'SAE 5W-30 ou 5W-40 Sintético (Norma PSA B71 2296) [1]', capacidade: '3,25 L (1.6) / 4,5 L (2.0 com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (5 marchas) ou Automático (AL4 / AT6)', especificacao: 'SAE 75W-80 API GL-4 (Manual) / ATF LT 71141 ou AW-1 (AT)', capacidade: '2,0 L (Manual) / ~6,0 a 7,0 L (AT)', intervalo: '60.000 km (Inspeção / Troca)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '6,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Utilizar óleo sintético conforme norma PSA B71 2296 / API SN.",
      2: "10.000 km ou 1 ano (Normal) / 5.000 km ou 6 meses (Severo)."
    },
    filtros: {
      oleo: 'PEL108',
      ar: 'ARL5047',
      combustivel: 'GI04/7'
    }
  }
};

