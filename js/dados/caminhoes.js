export const veiculosCaminhoes = {
  // ==========================================
  // LINHA MERCEDES-BENZ
  // ==========================================
  'Mercedes-Benz 915c': {
    sistemas: [
      { sistema: 'Motor (OM 904 LA)', especificacao: 'SAE 15W-40 (MB 228.3) [1]', capacidade: '15,8 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (MB G 56-6)', especificacao: 'SAE 80W / ATF (Norma MB 235.1 / 236.2)', capacidade: '5,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (MB HL 2/43)', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '3,2 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3 / ATF Dexron II', capacidade: '2,5 L', intervalo: 'Verificar nível / 2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '20,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atender rigorosamente à norma Mercedes-Benz 228.3 (API CI-4) ou MB 228.5.",
      2: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (sintético MB 228.5). Misto/Urbano (entregas): 15.000 km a 20.000 km. Severo: 10.000 km ou 300 horas. Máximo: 12 meses (6 meses no severo)."
    },
    filtros: {
      oleo: { original: 'A9041800009', tecfil: 'PEL39', authomix: 'FEL0039', mann: 'HU 727/1 X', mahle: 'OX 153/7 D', wega: 'WOE-451', fram: 'CH9548ECO', vox: 'LE39' },
      ar: { original: 'A0030945804', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 650', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'HL7001' },
      combustivel: { original: 'A9060920205 / A9584770115', tecfil: 'PEC3022 / PSD920/1', authomix: 'FCE3022 / FCO0920', mann: 'PU 999/1 X / WK 1060/4', mahle: 'KX 67/2 D / KC 489', wega: 'FCD-0803 / FCD-30124F', fram: 'C9765ECO', vox: 'CE3022 / FBS920/1' },
      cabine: { original: 'Não possui original', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz 1418E': {
    sistemas: [
      { sistema: 'Motor (OM 904 LA - 4 cil. Eletrônico)', especificacao: 'SAE 15W-40 (MB 228.3) [1]', capacidade: '15,8 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (MB G 60-6)', especificacao: 'SAE 40 / 80W (Norma MB 235.12 / 235.1)', capacidade: '9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (MB HL 4)', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '10,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3 / ATF Dexron II', capacidade: '3,0 L', intervalo: 'Verificar nível / 2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '24,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor eletrônico OM 904 LA (177 cv). Exige óleo homologado MB 228.3 (API CI-4).",
      2: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (MB 228.5). Misto/Urbano: 20.000 km. Severo (terra/obra): 10.000 km ou 300 horas. Máximo: 12 meses (6 meses no severo)."
    },
    filtros: {
      oleo: { original: 'A9041800009', tecfil: 'PEL39', authomix: 'FEL0039', mann: 'HU 727/1 X', mahle: 'OX 153/7 D', wega: 'WOE-451', fram: 'CH9548ECO', vox: 'LE39' },
      ar: { original: 'A0030949604', tecfil: 'AP9496', authomix: 'FAP9496', mann: 'C 29 1032/1', mahle: 'LX 776/1', wega: 'WAP-104', fram: 'CA9388', vox: 'HP9496' },
      combustivel: { original: 'A9060920205 / A9584770115', tecfil: 'PEC3022 / PSD920/1', authomix: 'FCE3022 / FCO0920', mann: 'PU 999/1 X / WK 1060/4', mahle: 'KX 67/2 D / KC 489', wega: 'FCD-0803 / FCD-30124F', fram: 'C9765ECO', vox: 'CE3022 / FBS920/1' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Mercedes-Benz 2627': {
    sistemas: [
      { sistema: 'Motor (OM 906 LA / OM 926 LA)', especificacao: 'SAE 15W-40 MB 228.3 / 228.5', capacidade: '29,3 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (MB G 85-6)', especificacao: 'SAE 40 (Norma MB 235.12)', capacidade: '9,0 L (+0,5 L c/ radiador)', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Tração 6x4)', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '20,0 L (10,5 L + 9,5 L)', intervalo: '50.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '3,5 L', intervalo: 'Verificar nível / 2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Uso Severo (canteiro de obras, basculante, fora de estrada): 10.000 km ou 300 horas (trocar a cada 6 meses). Operação Mista: 15.000 km a 20.000 km. Rodoviário: 30.000 km (MB 228.3)."
    },
    filtros: {
      oleo: { original: 'A9061800209', tecfil: 'PEL2002', authomix: 'FEL2002', mann: 'HU 945/2 X', mahle: 'OX 152/1 D', wega: 'WOE-450', fram: 'CH9547ECO', vox: 'LE2002' },
      ar: { original: 'A0040940304', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 31 1414', mahle: 'LX 1819', wega: 'WAP-183', fram: 'CA10666', vox: 'HS9840' },
      combustivel: { original: 'A9060920205 / A9584770115', tecfil: 'PEC3022 / PSD920/1', authomix: 'FCE3022 / FCO0920', mann: 'PU 999/1 X / WK 1060/4', mahle: 'KX 67/2 D / KC 489', wega: 'FCD-0803 / FCD-30124F', fram: 'C9765ECO', vox: 'CE3022 / FBS920/1' },
      cabine: { original: 'A9408350147', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'Mercedes-Benz AXOR 3344': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '35,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio (MB G 240-16 / Powershift)', especificacao: 'SAE 80W / 75W-85 (Norma MB 235.1 / 235.4)', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução nos Cubos', especificacao: 'SAE 85W-90 / 85W-140 API GL-5 (MB 235.0 / 235.8)', capacidade: '24,0 L (Total eixos + cubos)', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '4,0 L', intervalo: 'Verificar nível / 2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Fora de estrada extremo (mineração, cana, madeira): 15.000 km ou 300 horas (MB 228.3) / 20.000 km (MB 228.5). Misto: 25.000 km. Rodoviário: 30.000 km (MB 228.3) ou até 45.000 km (sintético MB 228.5). Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: 'A4571800109', tecfil: 'PEL106', authomix: 'FEL0106', mann: 'HU 935/4 X', mahle: 'OX 387 D', wega: 'WOE-502', fram: 'CH9973ECO', vox: 'LE106' },
      ar: { original: 'A0040940304', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: 'A5410900151 / A9584770115', tecfil: 'PEC3023 / PSD920/1', authomix: 'FCE3023 / FCO0920', mann: 'PU 1046/1 X / WK 1060/4', mahle: 'KX 80/1 D / KC 489', wega: 'FCD-0804 / FCD-30124F', fram: 'C9766ECO', vox: 'CE3023 / FBS920/1' },
      cabine: { original: 'A9408350147', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'Mercedes-Benz Atego 1725': {
    sistemas: [
      { sistema: 'Motor (OM 906 LA)', especificacao: 'SAE 15W-40 MB 228.3 / 228.5', capacidade: '29,3 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (MB G 85-6)', especificacao: 'SAE 40 (Norma MB 235.12)', capacidade: '9,0 L (+0,5 L c/ radiador)', intervalo: '60.000 km' },
      { sistema: 'Diferencial (MB HL 4/062)', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '10,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica (MB LS 6 BK)', especificacao: 'Fluido MB 236.3', capacidade: '3,5 L', intervalo: 'Verificar nível / 2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '25,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km (óleo MB 228.3) ou até 45.000 km (óleo sintético MB 228.5). Misto/Urbano: 20.000 km. Severo (terra, obra, fora de estrada): 10.000 km ou 300 horas. Limite máximo de tempo: 12 meses (6 meses em uso severo)."
    },
    filtros: {
      oleo: { original: 'A9061800209', tecfil: 'PEL2002', authomix: 'FEL2002', mann: 'HU 945/2 X', mahle: 'OX 152/1 D', wega: 'WOE-450', fram: 'CH9547ECO', vox: 'LE2002' },
      ar: { original: 'A0030949604', tecfil: 'AP9496', authomix: 'FAP9496', mann: 'C 29 1032/1', mahle: 'LX 776/1', wega: 'WAP-104', fram: 'CA9388', vox: 'HP9496' },
      combustivel: { original: 'A9060920205 / A9584770115', tecfil: 'PEC3022 / PSD920/1', authomix: 'FCE3022 / FCO0920', mann: 'PU 999/1 X / WK 1060/4', mahle: 'KX 67/2 D / KC 489', wega: 'FCD-0803 / FCD-30124F', fram: 'C9765ECO', vox: 'CE3022 / FBS920/1' },
      cabine: { original: 'A9408350147', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  // ==========================================
  // LINHA VOLKSWAGEN (WORKER & CONSTELLATION)
  // ==========================================
  'VW Worker 8.150 / 815': {
    sistemas: [
      { sistema: 'Motor (MWM 4.12 TCE)', especificacao: 'SAE 15W-40 API CI-4 [1]', capacidade: '10,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '3,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '16,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Óleo para motor diesel pesado API CI-4.",
      2: "Rodoviário: 15.000 km. Urbano/Entregas (severo): 10.000 km ou 250 horas. Máximo: 12 meses (6 meses no severo)."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: '2T0129620', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 650', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 13.180 / 15.180': {
    sistemas: [
      { sistema: 'Motor (MWM 6.10 TCA / Cummins 6BTAA)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '14,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '26,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Misto/Urbano: 10.000 km. Severo (terra/obra): 7.500 km a 8.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCI-1630', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 17.220 / 24.220 / 26.220': {
    sistemas: [
      { sistema: 'Motor (Cummins 6CTAA)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '18,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Misto: 15.000 km. Severo (basculante/obra): 10.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2T0127177', tecfil: 'PSD470', authomix: 'FCO0470', mann: 'WK 8159', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PSD470' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Worker 26.260E': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3 Eletrônico)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução', especificacao: 'SAE 85W-140 API GL-5', capacidade: '20,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário/Misto: 25.000 km. Severo (obra, cana, fora de estrada): 10.000 km a 12.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T0115561', tecfil: 'PSL341', authomix: 'FOL0341', mann: 'W 11102/34', mahle: 'OC506', wega: 'WO-612', fram: 'PH3545', vox: 'LB341' },
      ar: { original: '2T0129620A', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 30 850', mahle: 'LX1819', wega: 'WAP-183', fram: 'CA10666', vox: 'ARS9840' },
      combustivel: { original: '2R0127177', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Constellation 13.190 / 15.190 / 17.190': {
    sistemas: [
      { sistema: 'Motor (MAN D08 34 - EGR)', especificacao: 'SAE 15W-40 / 10W-40 Low SAPS (MAN M 3275) [1]', capacidade: '15,5 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W-90 API GL-4', capacidade: '6,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '24,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Obrigatório óleo Low SAPS (baixo teor de cinzas) homologado MAN M 3275 para sistema EGR.",
      2: "Rodoviário: 30.000 km. Misto: 20.000 km. Severo: 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '07W115436A', tecfil: 'PEL2011', authomix: 'FEL2011', mann: 'HU 947/2 X', mahle: 'OX 152/1 D', wega: 'WOE-473', fram: 'CH9547ECO', vox: 'LE2011' },
      ar: { original: '2V0129620', tecfil: 'ARS9839', authomix: 'FAR9839', mann: 'C 30 850', mahle: 'LX1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS9839' },
      combustivel: { original: '2V5201512', tecfil: 'PSD921', authomix: 'FCO0921', mann: 'WK 1060/5 X', mahle: 'KC 490', wega: 'FCD-0943', fram: 'PS11234', vox: 'FBS921' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation 17.250 / 24.250': {
    sistemas: [
      { sistema: 'Motor (Cummins ISBe 5.9 Interact 6)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 [1]', capacidade: '19,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (Eaton FS-6306B)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Meritor RS 23-240)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor Cummins Interact 6 (Euro 3). Utilizar óleo diesel Heavy Duty API CI-4 ou superior.",
      2: "Rodoviário longa distância: 30.000 km. Distribuição regional/urbana: 15.000 km a 20.000 km. Severo: 10.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2R0115403', tecfil: 'PSL283', authomix: 'FOL0283', mann: 'W 950/26', mahle: 'OC 522', wega: 'WO-610', fram: 'PH8519', vox: 'LB283' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 27 1340', mahle: 'LX 1819', wega: 'WAP-183', fram: 'CA10666', vox: 'HS9840' },
      combustivel: { original: '2R0127177J', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'FBS980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation 17.280 / 24.280 / 26.280 / 31.280': {
    sistemas: [
      { sistema: 'Motor (MAN D08 36 - EGR)', especificacao: 'SAE 15W-40 / 10W-40 Low SAPS (Norma MAN M 3275 / M 3575) [1]', capacidade: '24,5 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (ZF 9S 1110 TD)', especificacao: 'SAE 80W (ZF TE-ML 02)', capacidade: '8,8 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '19,0 L a 22,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico VW/MAN (50/50)', capacidade: '35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor MAN D08 com sistema EGR (sem Arla-32): obrigatório óleo de baixo teor de cinzas (Low SAPS) homologado MAN M 3275 / M 3575.",
      2: "Rodoviário: 30.000 km. Misto: 20.000 km. Severo (obra, basculante, fora de estrada): 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '07W115436A', tecfil: 'PEL2011', authomix: 'FEL2011', mann: 'HU 947/2 X', mahle: 'OX 152/1 D', wega: 'WOE-473', fram: 'CH9547ECO', vox: 'LE2011' },
      ar: { original: '2V0129620', tecfil: 'ARS9840', authomix: 'FAR9840', mann: 'C 27 1340', mahle: 'LX 1819', wega: 'WAP-183', fram: 'CA10666', vox: 'HS9840' },
      combustivel: { original: '2V5201512 / 07W127177', tecfil: 'PSD921 / PEC3043', authomix: 'FCO0921 / FCE3043', mann: 'WK 1060/5 X / PU 9009 Z', mahle: 'KC 490 / KX 338/26 D', wega: 'FCD-0943 / FCE-0812', fram: 'PS11234', vox: 'FBS921 / CE3043' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation 19.320 / 25.320 / 31.320': {
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 [1]', capacidade: '28,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (ZF 16S 1585 TD)', especificacao: 'SAE 80W API GL-4', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial com Redução nos Cubos', especificacao: 'SAE 85W-140 API GL-5', capacidade: '22,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores Cummins ISC exigem lubrificantes de alto desempenho para serviço pesado.",
      2: "Rodoviário: 30.000 km. Misto: 15.000 km. Severo (mineração, terraplanagem, basculante pesado): 10.000 km a 12.000 km ou 300 horas. Máximo: 12 meses (6 meses no severo)."
    },
    filtros: {
      oleo: { original: '2T2115561', tecfil: 'PSL909', authomix: 'FOL0909', mann: 'W 1170/7', mahle: 'OC 516', wega: 'WO-612', fram: 'PH3545', vox: 'LB909' },
      ar: { original: '2V0129620', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: '2R0127177J / 2R0127177B', tecfil: 'PSD980 / PSC907', authomix: 'FCO0980 / FCE0907', mann: 'WK 950/26 / PU 999/1 X', mahle: 'KC 104 / KX 67/2 D', wega: 'FCD-0941 / FCD-0803', fram: 'PS10756', vox: 'FBS980 / CE907' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  },

  'VW Constellation 24.330 / 31.330': {
    sistemas: [
      { sistema: 'Motor (Cummins ISL 8.9 - Euro 5)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Low SAPS) [1]', capacidade: '28,0 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio', especificacao: 'SAE 80W API GL-4', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '20,0 L a 22,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motores Euro 5 com pós-tratamento SCR (Arla-32) exigem óleos API CJ-4 ou CK-4 de baixo teor de cinzas.",
      2: "Rodoviário: 30.000 km. Misto: 15.000 km. Severo (basculante / fora de estrada): 10.000 km a 12.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '2T2115561', tecfil: 'PSL909', authomix: 'FOL0909', mann: 'W 1170/7', mahle: 'OC 516', wega: 'WO-612', fram: 'PH3545', vox: 'LB909' },
      ar: { original: '2V0129620', tecfil: 'ARS9842', authomix: 'FAR9842', mann: 'C 32 145', mahle: 'LX 1819', wega: 'WAP-185', fram: 'CA10667', vox: 'HS9842' },
      combustivel: { original: '2R0127177J', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 950/26', mahle: 'KC 104', wega: 'FCD-0941', fram: 'PS10756', vox: 'FBS980' },
      cabine: { original: '2V0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FAC309' }
    }
  }
};
