export const veiculosCaminhoes = {
  // ==========================================
  // LINHA MERCEDES-BENZ
  // ==========================================
  'Mercedes-Benz Accelo (4cc - OM 924 LA)': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA - 4 cil.)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '15,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (MB G 56-6 / G 60)', especificacao: 'SAE 80W / ATF (Norma MB 235.1)', capacidade: '5,0 L a 6,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '3,2 L a 5,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '2,5 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '20,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (MB 228.5). Urbano/Severo: 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'A9061800209', tecfil: 'PEL106', authomix: 'FEL0106', mann: 'HU 945/2 X', mahle: 'OX 387D', wega: 'WOE-502', fram: 'CH9973ECO', vox: 'LE106' },
      ar: { original: 'A9795280006', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 22 030', mahle: 'LX 1720', wega: 'WAP-290', fram: 'CA10200', vox: 'HS9840' },
      combustivel: { original: 'A9060920305', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 723/3', mahle: 'KC 192', wega: 'FCD-0723', fram: 'PS10452', vox: 'FBS980' },
      cabine: { original: 'A9798350047', tecfil: 'ACP900', authomix: 'FCA0900', mann: 'CU 22 010', mahle: 'LA 200', wega: 'AKX-1350', fram: 'CF11600', vox: 'FAC900' }
    }
  },

  'Mercedes-Benz Atego (4cc & 6cc - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA / OM 906/926 LA)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '18,0 L a 29,3 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / Automatizado', especificacao: 'SAE 40 / 80W (Norma MB 235.12 / 235.1)', capacidade: '9,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '10,0 L a 18,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '3,5 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '25,0 L a 36,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (sintético MB 228.5). Misto/Urbano: 20.000 km. Severo (terra/obra): 10.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'A9061800209', tecfil: 'PEL106', authomix: 'FEL0106', mann: 'HU 945/2 X', mahle: 'OX 387D', wega: 'WOE-502', fram: 'CH9973ECO', vox: 'LE106' },
      ar: { original: 'A9735280006', tecfil: 'ARS9845', authomix: 'FAR9845', mann: 'C 25 125/2', mahle: 'LX 1582', wega: 'WAP-295', fram: 'CA10332', vox: 'HS9845' },
      combustivel: { original: 'A9060920305', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 723/3', mahle: 'KC 192', wega: 'FCD-0723', fram: 'PS10452', vox: 'FBS980' },
      cabine: { original: 'A9738350047', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'Mercedes-Benz Axor / Actros (Motor OM 457 LA / OM 460 LA)': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA / OM 460 LA)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '35,0 L a 39,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio (MB Powershift / ZF)', especificacao: 'SAE 80W / 75W-85 (Norma MB 235.1 / 235.4)', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (com/sem redução nos cubos)', especificacao: 'SAE 85W-90 / 85W-140 API GL-5 (MB 235.0 / 235.8)', capacidade: '15,0 L a 24,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '4,0 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Fora de estrada extremo: 15.000 km ou 300 horas. Misto: 25.000 km. Rodoviário: 30.000 km (MB 228.3) ou até 45.000 km (sintético MB 228.5). Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'A4571800109', tecfil: 'PEL106', authomix: 'FEL0106', mann: 'HU 935/4 X', mahle: 'OX 387 D', wega: 'WOE-502', fram: 'CH9973ECO', vox: 'LE106' },
      ar: { original: 'A0040940304', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: 'A5410900151 / A9584770115', tecfil: 'PEC3023 / PSD920/1', authomix: 'FCE3023 / FCO0920', mann: 'PU 1046/1 X / WK 1060/4', mahle: 'KX 80/1 D / KC 489', wega: 'FCD-0804 / FCD-30124F', fram: 'C9766ECO', vox: 'CE3023 / FBS920/1' },
      cabine: { original: 'A9408350147', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  // ==========================================
  // LINHA VOLKSWAGEN / MAN (Worker, Constellation & Delivery)
  // ==========================================
  'VW Worker 17.210 / 24.210 (Motores MWM 6.10 / Cummins)': {
    sistemas: [
      { sistema: 'Motor (MWM 6.10 TCA / Cummins)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '17,0 L a 20,2 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FS-5306A)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '8,5 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Meritor RS 23-240)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '28,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (obra/basculante): 7.500 km ou 250 horas. Máximo: 12 meses."
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
  },

  // ==========================================
  // LINHA FORD CAMINHÕES (Cargo - Leves, Médios, Pesados)
  // ==========================================
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
  },

  // ==========================================
  // LINHA DAF
  // ==========================================
  'DAF XF 105 / XF / CF (Motores PACCAR MX 11 / MX 13)': {
    sistemas: [
      { sistema: 'Motor (PACCAR MX 11 / MX 13)', especificacao: 'SAE 10W-40 Sintético (Norma DAF / ACEA E4 / E7 - API CJ-4/CK-4) [1]', capacidade: '36,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automatizado (ZF AS-Tronic / TraXon)', especificacao: 'SAE 75W-80 API GL-4 (ZF Ecofluid M)', capacidade: '12,5 L', intervalo: '150.000 km ou 2 anos' },
      { sistema: 'Diferencial Traseiro (Meritor / DAF)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (Pronto uso 50/50)', capacidade: '40,0 L', intervalo: '2 anos ou 200.000 km' }
    ],
    notas: {
      1: "Obrigatório o uso de lubrificante sintético de alto desempenho para motores PACCAR de longo intervalo.",
      2: "Rodoviário de longa distância (com óleo sintético homologado): até 50.000 km a 60.000 km. Operação mista/severa: reduzir para 20.000 km ou 400 horas."
    },
    filtros: {
      oleo: { original: '1848520 / 1686772', tecfil: 'PSL910', authomix: 'FOL0910', mann: 'W 11 010', mahle: 'OX 439 D', wega: 'WO-630', fram: 'PH11350', vox: 'LB910' },
      ar: { original: '1839182', tecfil: 'ARS9845', authomix: 'FAR9845', mann: 'C 30 1540', mahle: 'LX 2000', wega: 'WAP-190', fram: 'CA11500', vox: 'ARS9845' },
      combustivel: { original: '1853123', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3 X', mahle: 'KC 110', wega: 'FCD-0950', fram: 'PS11800', vox: 'PSD990' },
      cabine: { original: '1689333', tecfil: 'ACP930', authomix: 'FCA0309', mann: 'CU 3200', mahle: 'LA 250', wega: 'AKX-1320', fram: 'CF11800', vox: 'ACP930' }
    }
  },

  // ==========================================
  // LINHA VOLVO
  // ==========================================
  'Volvo VM (Motores Volvo D8K / D7E - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (Volvo D8K / D7E)', especificacao: 'SAE 15W-40 / 10W-40 VDS-4.5 / VDS-4', capacidade: '23,0 L a 28,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / I-Shift', especificacao: 'Óleo Volvo Transmission Oil 97307', capacidade: '11,0 L a 13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 20,0 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento Volvo VCS (Pronto uso 50/50)', capacidade: '35,0 L', intervalo: '3 anos ou 450.000 km' }
    ],
    notas: {
      1: "Rodoviário de longa distância (com VDS-4.5): até 45.000 km. Distribuição regional/misto: 25.000 km. Severo (obra/basculante): 12.000 km ou 300 horas."
    },
    filtros: {
      oleo: { original: '21380475 / 23185363', tecfil: 'PSL985', authomix: 'FOL0985', mann: 'W 11 010', mahle: 'OX 439 D', wega: 'WO-630', fram: 'PH11350', vox: 'LB985' },
      ar: { original: '21374744', tecfil: 'ARS9850', authomix: 'FAR9850', mann: 'C 31 1275', mahle: 'LX 2001', wega: 'WAP-195', fram: 'CA11501', vox: 'ARS9850' },
      combustivel: { original: '21380488', tecfil: 'PSD995', authomix: 'FCO0995', mann: 'WK 1060/6 X', mahle: 'KC 115', wega: 'FCD-0960', fram: 'PS11801', vox: 'PSD995' },
      cabine: { original: '82343806', tecfil: 'ACP950', authomix: 'FCA0950', mann: 'CU 3300', mahle: 'LA 260', wega: 'AKX-1355', fram: 'CF11801', vox: 'ACP950' }
    }
  },

  'Volvo FH / FM (Motores Volvo D13C / D13K - Euro 5/6)': {
    sistemas: [
      { sistema: 'Motor (Volvo D13 - 13 Litros)', especificacao: 'SAE 15W-40 / 10W-40 Volvo VDS-4.5', capacidade: '33,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio I-Shift (AT2612 / ATO2612)', especificacao: 'Volvo Transmission Oil 97307 (ATF / Sintético)', capacidade: '13,0 L', intervalo: '300.000 km ou 3 anos' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5 / Volvo 97312', capacidade: '16,0 L a 22,0 L', intervalo: '150.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Volvo VCS (Amarelo / Pronto uso 50/50)', capacidade: '38,0 L a 44,0 L', intervalo: '3 anos' }
    ],
    notas: {
      1: "Rodoviário de longa distância (com óleo VDS-4.5): até 60.000 km (conforme recomendação do painel). Operação mista ou severa: reduzir para 20.000 km a 30.000 km."
    },
    filtros: {
      oleo: { original: '23185363', tecfil: 'PSL985', authomix: 'FOL0985', mann: 'W 11 010', mahle: 'OX 439 D', wega: 'WO-630', fram: 'PH11350', vox: 'LB985' },
      ar: { original: '21374744', tecfil: 'ARS9850', authomix: 'FAR9850', mann: 'C 31 1275', mahle: 'LX 2001', wega: 'WAP-195', fram: 'CA11501', vox: 'ARS9850' },
      combustivel: { original: '21380488', tecfil: 'PSD995', authomix: 'FCO0995', mann: 'WK 1060/6 X', mahle: 'KC 115', wega: 'FCD-0960', fram: 'PS11801', vox: 'PSD995' },
      cabine: { original: '20938487', tecfil: 'ACP950', authomix: 'FCA0950', mann: 'CU 3300', mahle: 'LA 260', wega: 'AKX-1355', fram: 'CF11801', vox: 'ACP950' }
    }
  },

  // ==========================================
  // LINHA SCANIA
  // ==========================================
  'Scania G / R / S (Motores DC13 / DC16 - Euro 5/6)': {
    sistemas: [
      { sistema: 'Motor (Scania DC13 13L / DC16 V8)', especificacao: 'SAE 15W-40 / 10W-40 Scania LDF-4 / LDF-3', capacidade: '38,0 L a 43,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Scania Opticruise (GRS / G33CM)', especificacao: 'Scania STO 1:2 / STO 2:0 A', capacidade: '11,0 L a 13,0 L', intervalo: '180.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'Scania SPO 1 / STO (SAE 85W-140)', capacidade: '18,0 L a 24,0 L', intervalo: '120.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Scania Antifreeze (Pronto uso 50/50)', capacidade: '40,0 L', intervalo: '2 anos ou 300.000 km' }
    ],
    notas: {
      1: "Com óleo Scania LDF-4 em serviço rodoviário de longa distância: intervalos de até 90.000 km ou 12 meses. Operação severa/mista: 30.000 km a 45.000 km."
    },
    filtros: {
      oleo: { original: '2045524 / 2397946', tecfil: 'PEL920', authomix: 'FEL0920', mann: 'HU 12 100 x', mahle: 'OX 440 D', wega: 'WOE-550', fram: 'CH11400', vox: 'LE920' },
      ar: { original: '1869399', tecfil: 'ARS9860', authomix: 'FAR9860', mann: 'C 34 1500', mahle: 'LX 2010', wega: 'WAP-200', fram: 'CA11601', vox: 'ARS9860' },
      combustivel: { original: '2241036 / 2192770', tecfil: 'PSD992', authomix: 'FCO0992', mann: 'PU 1067 X', mahle: 'KC 120', wega: 'FCD-0970', fram: 'PS11900', vox: 'PSD992' },
      cabine: { original: '2126233', tecfil: 'ACP960', authomix: 'FCA0960', mann: 'CU 3400', mahle: 'LA 270', wega: 'AKX-1360', fram: 'CF11900', vox: 'ACP960' }
    }
  },

  // ==========================================
  // LINHA IVECO
  // ==========================================
  'Iveco Tector (Motores NEF 4 / NEF 6 - FPT Euro 5)': {
    sistemas: [
      { sistema: 'Motor (FPT NEF 4 / NEF 6)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Norma Iveco 18-1804)', capacidade: '13,0 L a 23,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '6,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Paraflu UP (50/50)', capacidade: '25,0 L a 35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km. Distribuição urbana: 15.000 km. Severo (obra/basculante): 10.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '5801394783', tecfil: 'PSL928', authomix: 'FOL0928', mann: 'W 11 102', mahle: 'OC 575', wega: 'WO-620', fram: 'PH10000', vox: 'LB928' },
      ar: { original: '5801456789', tecfil: 'ARS9870', authomix: 'FAR9870', mann: 'C 27 1250', mahle: 'LX 1900', wega: 'WAP-192', fram: 'CA11200', vox: 'ARS9870' },
      combustivel: { original: '5801597843', tecfil: 'PSD994', authomix: 'FCO0994', mann: 'WK 1060/2 X', mahle: 'KC 125', wega: 'FCD-0980', fram: 'PS11950', vox: 'PSD994' },
      cabine: { original: '5801356781', tecfil: 'ACP970', authomix: 'FCA0970', mann: 'CU 3000', mahle: 'LA 280', wega: 'AKX-1370', fram: 'CF11950', vox: 'ACP970' }
    }
  },

  'Iveco Stralis / Hi-Way / Hi-Land (Motor FPT Cursor 13 - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (FPT Cursor 13 - 13 Litros)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Iveco 18-1804 CLS)', capacidade: '32,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Automatizado (ZF AS-Tronic)', especificacao: 'SAE 75W-80 API GL-4 (ZF Ecofluid M)', capacidade: '12,5 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L a 22,0 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Paraflu UP (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário de longa distância: até 40.000 km a 50.000 km (conforme óleo homologado). Operação severa ou mista: 20.000 km a 25.000 km."
    },
    filtros: {
      oleo: { original: '2992241', tecfil: 'PSL930', authomix: 'FOL0930', mann: 'W 11 010/2', mahle: 'OX 580 D', wega: 'WO-635', fram: 'PH11450', vox: 'LB930' },
      ar: { original: '5801456790', tecfil: 'ARS9875', authomix: 'FAR9875', mann: 'C 32 1500', mahle: 'LX 1905', wega: 'WAP-198', fram: 'CA11201', vox: 'ARS9875' },
      combustivel: { original: '5801597845', tecfil: 'PSD996', authomix: 'FCO0996', mann: 'WK 1060/7 X', mahle: 'KC 130', wega: 'FCD-0985', fram: 'PS11955', vox: 'PSD996' },
      cabine: { original: '5801356785', tecfil: 'ACP975', authomix: 'FCA0975', mann: 'CU 3050', mahle: 'LA 285', wega: 'AKX-1375', fram: 'CF11955', vox: 'ACP975' }
    }
  }
};
