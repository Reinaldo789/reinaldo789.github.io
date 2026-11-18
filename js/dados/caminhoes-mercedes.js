export const caminhoesMercedes = {
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
  }
};