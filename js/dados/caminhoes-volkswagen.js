export const caminhoesVW = {
  'VW Worker 17.210 / 24.210 (Motores MWM 6.10 TCA / Cummins 6CTAA)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM 6.10 TCA / Cummins 6CTAA 8.3) [2]', especificacao: 'SAE 15W-40 API CI-4', capacidade: '17,0 L a 20,2 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FS-5306A / FS-6306A)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '8,5 L a 9,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Meritor RS 23-240)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '28,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (obra/basculante): 7.500 km ou 250 horas. Máximo: 12 meses. Versões com bomba injetora rotativa Bosch VE exigem atenção redobrada na sangria contra entradas de ar.",
      2: "Atenção à motorização na compra dos filtros: os códigos separados por barra (/) diferenciam a linha MWM 6.10 TCA (primeiro código) da linha Cummins 6CTAA 8.3 (segundo código)."
    },
    filtros: {
      oleo: { original: 'T06115561 (MWM) / 2T0115561 (Cummins)', tecfil: 'PSL123 / PSL909', authomix: 'FOL0123 / FOL0909', mann: 'W 940/18 / WP 12121', mahle: 'OC 26 / OC 1176', wega: 'WO-460 / WO-711', fram: 'PH2801B / PH11009', vox: 'LB123 / LB909' },
      ar: { original: '2T0129620A / 2S0129620B', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 27 830', mahle: 'LX 1716', wega: 'WAP-103', fram: 'CA5626CPU', vox: 'HD9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSC82', authomix: 'FCO0082', mann: 'WK 1124', mahle: 'KC 181D', wega: 'FCD-2061/1', fram: 'P4102', vox: 'FBD82' },
      sedimentador: { original: '2R0127177B', tecfil: 'PSD470/1', authomix: 'FSE4701', mann: 'WK 1060/1', mahle: 'KC 124', wega: 'FCD-3090', fram: 'PS9025', vox: 'FBS470/1' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker / Constellation (Linha Clássica Euro 3 - MWM / Cummins)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM 4.12 / 6.10 / Cummins ISBe / 6CTAA) [2]', especificacao: 'SAE 15W-40 API CI-4', capacidade: '10,0 L a 19,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '3,5 L a 9,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,0 L a 18,5 L', intervalo: '50.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '16,0 L a 32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km a 20.000 km. Urbano/Misto: 10.000 km. Severo (terra/obra): 7.500 km a 10.000 km ou 250 horas. Máximo: 12 meses.",
      2: "Motores eletrônicos Euro 3 (MWM 4.12/6.12 TCE e Cummins ISBe) utilizam filtro de óleo 2R0115403 (PSL283 / WO-612). Motores Cummins 6CTAA 8.3 utilizam 2T0115561 (PSL909)."
    },
    filtros: {
      oleo: { original: '2R0115403 (ISBe/MWM) / 2T0115561 (6CTAA)', tecfil: 'PSL283 / PSL909', authomix: 'FOL0283 / FOL0909', mann: 'W 950/26 / WP 12121', mahle: 'OC 505 / OC 1176', wega: 'WO-612 / WO-711', fram: 'PH3545 / PH11009', vox: 'LB283 / LB909' },
      ar: { original: '2T0129620A / 2S0129620B', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 27 830', mahle: 'LX 1716', wega: 'WAP-103', fram: 'CA5626CPU', vox: 'HD9839' },
      combustivel: { original: '2T0127177 / 2R0127177E', tecfil: 'PSC82 / PSC493', authomix: 'FCO0082 / FCO0493', mann: 'WK 1124 / WK 950/21', mahle: 'KC 181D / KC 104', wega: 'FCD-2061/1 / FCD-2098', fram: 'P4102 / P9454', vox: 'FBD82 / FBD493' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Constellation / Delivery (Motores MAN D08 EGR - Euro 5)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MAN D08 34 4-cil / D08 36 6-cil - EGR)', especificacao: 'SAE 15W-40 / 10W-40 Low SAPS (MAN M 3275 / M 3575) [1]', capacidade: '15,5 L (4 cil.) | 24,5 L (6 cil.)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Automatizado (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4 (ou SAE 40/50 Sintético conforme plaqueta)', capacidade: '6,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 22,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico VW/MAN (50/50)', capacidade: '24,0 L a 35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Obrigatório óleo Low SAPS (baixo teor de cinzas) homologado MAN M 3275 / M 3575 para motores com sistema EGR (não utiliza Arla 32).",
      2: "Rodoviário: 30.000 km. Misto: 20.000 km. Severo (obra, basculante, fora de estrada): 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '07W115436A', tecfil: 'PEL1998', authomix: 'FEL1998', mann: 'HU 951 x', mahle: 'OX 123/1 D', wega: 'WOE-475', fram: 'CH5640', vox: 'LE1998' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 27 1340', mahle: 'LX 1819', wega: 'WAP-183', fram: 'CA10666', vox: 'HS9840' },
      combustivel: { original: '07W127177 / 2V5201512', tecfil: 'PEC3043 / PSD921', authomix: 'FCE3043 / FCO0921', mann: 'PU 9009 z / WK 1060/5 x', mahle: 'KX 338/26 D / KC 490', wega: 'FCE-0812 / FCD-0943', fram: 'PS11234', vox: 'CE3043 / FBS921' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation (Motores Cummins ISB / ISL Euro 5)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7 / ISL 8.9 - SCR) [3]', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Low SAPS) [1]', capacidade: '20,0 L (ISB 6.7) | 28,0 L (ISL 8.9)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Automatizado V-Tronic (ZF)', especificacao: 'SAE 80W-90 API GL-4 / Sintético ZF Ecofluid M', capacidade: '9,5 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 22,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L a 40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores Cummins Euro 5 com pós-tratamento SCR (Arla 32) exigem óleos de baixo teor de cinzas homologados API CJ-4 ou CK-4 (CES 20081 / 20086).",
      2: "Rodoviário: 30.000 km. Misto: 15.000 km. Severo (obra, basculante, fora de estrada): 10.000 km a 12.000 km ou 300 horas. Máximo: 12 meses.",
      3: "Filtro de óleo: modelos com motor Cummins ISB 6.7 utilizam o refil/blindado 2R0115403 (PSL283); modelos pesados com motor ISL 8.9 (ex.: 25.390, 31.390) utilizam o blindado de alta vazão 2T2115561 (PSL909)."
    },
    filtros: {
      oleo: { original: '2R0115403 (ISB) / 2T2115561 (ISL)', tecfil: 'PSL283 / PSL909', authomix: 'FOL0283 / FOL0909', mann: 'W 950/26 / WP 12121', mahle: 'OC 505 / OC 1176', wega: 'WO-612 / WO-711', fram: 'PH3545 / PH11009', vox: 'LB283 / LB909' },
      ar: { original: '2V0129620', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      sedimentador: { original: '2R0127177J', tecfil: 'PSD981', authomix: 'FSE0981', mann: 'WK 10002/1X', mahle: 'KC 595', wega: 'FCD-30123', fram: 'PS10756', vox: 'FBS981' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  }
};
