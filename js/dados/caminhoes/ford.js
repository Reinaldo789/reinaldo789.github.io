export const caminhoesFord = {
  'Ford Cargo 816 / 1119 (Leves e Médios)': {
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8 / 4.5)', especificacao: 'SAE 15W-40 API CJ-4 / CI-4', capacidade: '11,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 / FSO-4405)', especificacao: 'SAE 75W-90 API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '18,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Urbano severo (entregas): 10.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB55' },
      ar: { original: '2C459601AA', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 24 650', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: 'BG5X9155AA', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KL 440', wega: 'FCI-1630', fram: 'P10237', vox: 'PSD470' },
      cabine: { original: 'Original Ford', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 1317 / 1517 / 1722 / 2422 / 2622 (Euro 3)': {
    sistemas: [
      { sistema: 'Motor (Cummins Série B / C / MWM 6.10)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '14,0 L a 18,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '26,0 L a 30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (terra/obra): 7.500 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'BG6X6714AA', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: 'BG5X9155AA', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCI-1630', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 1723 / 2423 / 2429 / 2629 / 3131 (Euro 5)': {
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7 / ISC 8.9)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4', capacidade: '20,0 L a 28,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / Eaton', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,5 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 22,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '32,0 L a 38,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km. Distribuição/Misto: 15.000 km. Severo (basculante / fora de estrada): 10.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'BG6X6714AA / 5266731', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: 'CC459601AA', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: 'BG6X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: 'Original Ford', tecfil: '-', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};