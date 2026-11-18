export const caminhoesFord = {
  'Ford Cargo 816 / 1119 (Leves e Médios - Euro 5)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8 / ISB 4.5 - SCR)', especificacao: 'SAE 15W-40 API CJ-4 / CK-4 (Low SAPS)', capacidade: '11,0 L a 13,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 / FSO-4405)', especificacao: 'SAE 75W-90 API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '18,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Urbano severo (entregas): 10.000 km ou 250 horas. Máximo: 12 meses. Sistema Euro 5 com pós-tratamento SCR (exige Arla 32)."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA / 4897898', tecfil: 'PSL283', authomix: 'FOL0283', mann: 'W 950/26', mahle: 'OC 505', wega: 'WO-612', fram: 'PH3545', vox: 'LB283' },
      ar: { original: '2C459601AA / BG5X9601AA', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 24 650', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'HD9839' },
      ar_secundario: { original: 'BH1X9E673AA / 2C459E673AA', tecfil: 'ASR839', authomix: 'FAS0839', mann: 'CF 1430', mahle: 'LXS 328', wega: 'WAP-182/S', fram: 'CA10665SY', vox: 'HS839' },
      combustivel: { original: 'BG5X9155AA / 4897897', tecfil: 'PSC75', authomix: 'FCO0075', mann: 'WK 950/21', mahle: 'KC 440', wega: 'FCD-2093', fram: 'P9454', vox: 'FBD75' },
      separador_agua: { original: 'BG5X9W155AA / BH1X9W155AA', tecfil: 'PSD470/1 / PSD960/1', authomix: 'FSE4701', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-0780', fram: 'PS10756', vox: 'FBS470/1' },
      cabine: { original: 'BH1X19N619AA', tecfil: 'ACP200', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 1317 / 1517 / 1722 / 2422 / 2622 (Euro 3)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISBe 3.9/5.9 / Série C 8.3)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '14,0 L a 20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '26,0 L a 30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (terra/obra): 7.500 km ou 250 horas. Máximo: 12 meses. Modelos ISBe (1317e/1517e) usam filtro de óleo PSL283; modelos Série C 8.3 (1722e/2422e/2622e) usam PSL909."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA (ISBe) / BG6X6714AA (8.3)', tecfil: 'PSL283 / PSL909', authomix: 'FOL0283 / FOL0909', mann: 'W 950/26 / WP 12121', mahle: 'OC 505 / OC 1176', wega: 'WO-612 / WO-711', fram: 'PH3545 / PH11009', vox: 'LB283 / LB909' },
      ar: { original: '2T0129620A / 2C459601AA', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'HD9839' },
      ar_secundario: { original: '2C459E673AA', tecfil: 'ASR839', authomix: 'FAS0839', mann: 'CF 1600', mahle: 'LXS 328', wega: 'WAP-182/S', fram: 'CA10665SY', vox: 'HS839' },
      combustivel: { original: 'BG5X9155AA (ISBe) / BG6X9155AA (8.3)', tecfil: 'PSC75 / PSC76', authomix: 'FCO0075 / FCO0076', mann: 'WK 950/21 / WK 954/1 x', mahle: 'KC 440 / KC 618', wega: 'FCD-2093 / FCD-2238', fram: 'P9454 / P8264', vox: 'FBD75 / FBD76' },
      separador_agua: { original: 'BF8T9J288AA / BG5X9W155AA', tecfil: 'PSD470/1 / PSD920/1', authomix: 'FSE4701', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2203', fram: 'PS8048', vox: 'FBS470/1' },
      cabine: { original: 'BG5X19N619AA', tecfil: 'ACP200', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 1622 / 2425 / 2630 / 4030 (Série C - Mecânico)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins 6CT / 6CTAA 8.3)', especificacao: 'SAE 15W-40 API CI-4 / CH-4', capacidade: '20,0 L a 24,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton RT-8908LL / FS-6306)', especificacao: 'SAE 80W-90 API GL-4 (ou SAE 50)', capacidade: '9,0 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Tração 4x2 / 6x4)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '14,0 L a 22,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '30,0 L a 34,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Misto/Severo (terra / obra / canavieiro): 7.500 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'BF6X6714AA / 3318853', tecfil: 'PSL280 / PSL900', authomix: 'FOL0280', mann: 'W 11102/4', mahle: 'OC 122', wega: 'WO-610', fram: 'PH3545', vox: 'LB280' },
      ar: { original: 'XC459601AA', tecfil: 'AP9834 / ARS9834', authomix: 'FAR9834', mann: 'C 27 830', mahle: 'LX 965', wega: 'WAP-180', fram: 'CA5626PU', vox: 'HD9834' },
      ar_secundario: { original: 'XC459E673AA', tecfil: 'ASR834', authomix: 'FAS0834', mann: 'CF 1600', mahle: 'LXS 273', wega: 'WAP-180/S', fram: 'CA5626SY', vox: 'HS834' },
      combustivel: { original: 'BF6X9155AA / 3931063', tecfil: 'PSC410 / PSC72', authomix: 'FCO0410', mann: 'WK 940/7', mahle: 'KC 24', wega: 'FCD-2060', fram: 'P4102', vox: 'FBD410' },
      separador_agua: { original: 'BF8T9J288AA', tecfil: 'PSD420 / PSD920/1', authomix: 'FCO0920', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2203', fram: 'PS8048', vox: 'FBS420' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 2428 / 2628 (Euro 3 - Eletrônico)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISBe 5.9)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '19,5 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton RT / FTS-16108LL)', especificacao: 'SAE 80W-90 API GL-4 (ou SAE 50)', capacidade: '12,0 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Tração 6x2 / 6x4)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L a 22,0 L (total 2 eixos)', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '28,0 L a 32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Misto/Urbano: 15.000 km. Severo (obra / fora de estrada / militar): 7.500 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA / 3937736', tecfil: 'PSL283', authomix: 'FOL0283', mann: 'W 950/26', mahle: 'OC 505', wega: 'WO-612', fram: 'PH3545', vox: 'LB283' },
      ar: { original: '2C459601AA / BG5X9601AA', tecfil: 'ARS5376', authomix: 'FAR5376', mann: 'C 27 1170', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'HD5376' },
      ar_secundario: { original: 'BH1X9E673AA / 2C459E673AA', tecfil: 'ASR376', authomix: 'FAS0376', mann: 'CF 1640', mahle: 'LXS 328', wega: 'WAP-182/S', fram: 'CA10665SY', vox: 'HS376' },
      combustivel: { original: 'BG5X9155AA / 2R0127177B', tecfil: 'PSC75', authomix: 'FCO0075', mann: 'WK 950/21', mahle: 'KC 440', wega: 'FCD-2093', fram: 'P9454', vox: 'FBD75' },
      separador_agua: { original: 'BG5X9W155AA / BF8T9J288AA', tecfil: 'PSD960/1 / PSD920/1', authomix: 'FCO0960', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2214', fram: 'PS10756', vox: 'FBS960/1' },
      cabine: { original: 'BG5X19N619AA', tecfil: 'ACP200', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 1723 / 2423 / 2429 / 2629 / 3131 (Euro 5)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7 / ISL 8.9 - SCR)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Low SAPS)', capacidade: '20,0 L (ISB 6.7) | 28,0 L (ISL 8.9)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / Eaton', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,5 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 22,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '32,0 L a 38,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km. Distribuição/Misto: 15.000 km. Severo (basculante / fora de estrada): 10.000 km ou 300 horas. Máximo: 12 meses. Modelos ISB 6.7 (1723/2423/2429/2629) usam filtro de óleo PSL283 e combustível PSC75; modelos pesados ISL 8.9 (3131/1933) usam óleo PSL909 e combustível PSC76."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA (ISB) / BG6X6714AA (ISL)', tecfil: 'PSL283 / PSL909', authomix: 'FOL0283 / FOL0909', mann: 'W 950/26 / WP 12121', mahle: 'OC 505 / OC 1176', wega: 'WO-612 / WO-711', fram: 'PH3545 / PH11009', vox: 'LB283 / LB909' },
      ar: { original: 'CC459601AA', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HD9842' },
      ar_secundario: { original: 'CC459E673AA', tecfil: 'ASR842', authomix: 'FAS0842', mann: 'CF 1830', mahle: 'LXS 339', wega: 'WAP-185/S', fram: 'CA10667SY', vox: 'HS842' },
      combustivel: { original: 'BG5X9155AA (ISB) / BG6X9155AA (ISL)', tecfil: 'PSC75 / PSC76', authomix: 'FCO0075 / FCO0076', mann: 'WK 950/21 / WK 954/1 x', mahle: 'KC 440 / KC 618', wega: 'FCD-2093 / FCD-2238', fram: 'P9454 / P8264', vox: 'FBD75 / FBD76' },
      separador_agua: { original: 'CC459W155AA / BH1X9W155AA', tecfil: 'PSD980 / PSD490', authomix: 'FCO0980', mann: 'WK 11001', mahle: 'KC 499D', wega: 'FCD-0940', fram: 'PS10756', vox: 'FBS980' },
      cabine: { original: 'BH1X19N619AA', tecfil: 'ACP200', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Cargo 2042 / 2842 (Euro 5 - Cavalo-Mecânico)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (FPT Cursor 10 10.3L - SCR)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / ACEA E7/E9', capacidade: '30,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Automatizado (ZF 12AS 2330TD Astronic)', especificacao: 'SAE 75W-80 Sintético API GL-4 (ZF TE-ML 02E)', capacidade: '11,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial (Meritor MS 18X / MT 23-165)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L (4x2) / 30,0 L (6x2/6x4)', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor FPT Cursor 10 (Euro 5 com sistema SCR / ARLA 32). Troca de óleo: Rodoviário 40.000 km; Misto/Severo 20.000 km."
    },
    filtros: {
      oleo: { original: 'BH2X6714AA / 2992242', tecfil: 'PSL300', authomix: 'FOL0300', mann: 'W 1170/7', mahle: 'OC 515', wega: 'WO-630', fram: 'PH10935', vox: 'LB300' },
      ar: { original: 'BH2X9601AA', tecfil: 'ARS9845', authomix: 'FAR9845', mann: 'C 31 1254', mahle: 'LX 2845', wega: 'WAP-188', fram: 'CA11234', vox: 'HD9845' },
      ar_secundario: { original: 'BH2X9E673AA', tecfil: 'ASR845', authomix: 'FAS0845', mann: 'CF 1940', mahle: 'LXS 350', wega: 'WAP-188/S', fram: 'CA11234SY', vox: 'HS845' },
      combustivel: { original: 'BH2X9155AA / 2992241', tecfil: 'PSC355', authomix: 'FCO0355', mann: 'WK 950/19', mahle: 'KC 197', wega: 'FCD-0945', fram: 'P11040', vox: 'FBD355' },
      separador_agua: { original: 'BH2X9W155AA / 504170771', tecfil: 'PSD985', authomix: 'FCO0985', mann: 'WK 11 001', mahle: 'KC 502D', wega: 'FCD-0946', fram: 'PS11045', vox: 'FBS985' },
      cabine: { original: 'BH1X19N619AA', tecfil: 'ACP200', authomix: '-', mann: 'CU 27 010', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
