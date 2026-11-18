export const caminhoesVW = {
  'VW Worker 17.210 / 24.210 (Motores MWM 6.10 / Cummins)': {
    sistemas: [
      { sistema: 'Motor (MWM 6.10 TCA / Cummins)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '17,0 L a 20,2 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FS-5306A)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '8,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Meritor RS 23-240)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '28,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (obra/basculante): 7.500 km ou 250 horas. Máximo: 12 meses. Nota: Versões equipadas com bomba injetora rotativa Bosch VE possuem bomba elétrica auxiliar de escorva e exigem atenção redobrada contra entradas de ar no sistema."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCI-1630', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker / Constellation (Linha Clássica Euro 3)': {
    sistemas: [
      { sistema: 'Motor (MWM 4.12 / 6.10 / Cummins 6CTAA / ISBe)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '10,0 L a 19,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '3,5 L a 9,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,0 L a 18,5 L', intervalo: '50.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '16,0 L a 32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km a 20.000 km. Urbano/Misto: 10.000 km. Severo (terra/obra): 7.500 km a 10.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T0115561 / 2R0115403', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCI-1630', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Constellation / Delivery (Motores MAN D08 EGR - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (MAN D08 34 / D08 36 - EGR)', especificacao: 'SAE 15W-40 / 10W-40 Low SAPS (MAN M 3275 / M 3575) [1]', capacidade: '15,5 L a 24,5 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / ZF', especificacao: 'SAE 80W-90 / SAE 80W', capacidade: '6,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 22,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico VW/MAN (50/50)', capacidade: '24,0 L a 35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Obrigatório óleo Low SAPS (baixo teor de cinzas) homologado MAN M 3275 / M 3575 para motores com sistema EGR (sem Arla-32).",
      2: "Rodoviário: 30.000 km. Misto: 20.000 km. Severo (obra, basculante, fora de estrada): 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '07W115436A', tecfil: 'PEL2011', authomix: 'FEL2011', mann: 'HU 947/2 X', mahle: 'OX 152/1 D', wega: 'WOE-473', fram: 'CH9547ECO', vox: 'LE2011' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 27 1340', mahle: 'LX 1819', wega: 'WAP-183', fram: 'CA10666', vox: 'HS9840' },
      combustivel: { original: '2V5201512 / 07W127177', tecfil: 'PSD921 / PEC3043', authomix: 'FCO0921 / FCE3043', mann: 'WK 1060/5 X / PU 9009 Z', mahle: 'KC 490 / KX 338/26 D', wega: 'FCD-0943 / FCE-0812', fram: 'PS11234', vox: 'FBS921 / CE3043' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation (Motores Cummins ISB / ISL / ISC Euro 5)': {
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7 / ISL 8.9)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Low SAPS) [1]', capacidade: '20,0 L a 28,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Automatizado V-Tronic', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,5 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 22,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L a 40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores Cummins Euro 5 com SCR (Arla-32) exigem óleos API CJ-4 ou CK-4.",
      2: "Rodoviário: 30.000 km. Misto: 15.000 km. Severo (obra, basculante, fora de estrada): 10.000 km a 12.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T2115561', tecfil: 'PSL909', authomix: 'FOL0909', mann: 'W 1170/7', mahle: 'OC 516', wega: 'WO-612', fram: 'PH3545', vox: 'LB909' },
      ar: { original: '2V0129620', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: '2R0127177J', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'FBS980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  }
};