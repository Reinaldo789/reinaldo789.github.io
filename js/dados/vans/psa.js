export const vansPsa = {
  'Citroën Jumper / Peugeot Boxer 2.3 Multijet (2010 a 2017)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1A 2.3 16V - 127 cv)', especificacao: 'SAE 5W-30 Sintético (ACEA C2 / B4)', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Compartilha integralmente o conjunto mecânico Fiat 2.3 Multijet (Euro 3 até 2012 e Euro 5 sem ARLA 32 de 2013 a 2017)."
    },
    filtros: {
      oleo: { original: '1109.AN', tecfil: 'PSL657', authomix: 'FOL0657', mann: 'W 719/27', mahle: 'OC 613', wega: 'WO-420', fram: 'PH966B', vox: 'LB657' },
      ar: { original: '1444.TS', tecfil: 'ARS1013', authomix: 'FAR1013', mann: 'C 17 278', mahle: 'LX 1612', wega: 'JFA-0991', fram: 'CA9888', vox: 'HD1013' },
      combustivel: { original: '1906.E6', tecfil: 'PEC3023', authomix: 'FCO3023', mann: 'PU 723 x', mahle: 'KX 208D', wega: 'FCD-0771', fram: 'C10026', vox: 'CE3023' },
      cabine: { original: '6447.TY', tecfil: 'ACP105', authomix: 'FCA0105', mann: 'CU 4442', mahle: 'LA 123', wega: 'AKX-3548', fram: 'CF8890', vox: 'FAC105' }
    }
  },

  'Citroën Jumper / Peugeot Boxer 2.0 e 2.2 BlueHDi (2018 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (DW10FUD 2.0 130cv / DW12RUD 2.2 140cv)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético Low SAPS (PSA B71 2312 / ACEA C2) [1]', capacidade: '6,2 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '15,0 L', intervalo: 'Autonomia média: ~6.000 a 8.000 km' },
      { sistema: 'Câmbio Manual (6 marchas)', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III / Total Fluide DA', capacidade: '1,2 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico PSA (50/50)', capacidade: '10,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Nova geração importada com motorização PSA BlueHDi (2.0 de 2018 a 2021; 2.2 a partir de 2022). Exige óleo homologado PSA B71 2312 (0W-30) ou ACEA C2/C3 (5W-30) para não saturar o DPF.",
      2: "Possui bocal de abastecimento de ARLA 32 logo abaixo da tampa do tanque de diesel."
    },
    filtros: {
      oleo: { original: '9809532380', tecfil: 'PSL161', authomix: 'FOL0161', mann: 'W 7058', mahle: 'OC 1300', wega: 'WO-161', fram: 'PH11819', vox: 'LB161' },
      ar: { original: '1611157980', tecfil: 'ARL5147', authomix: 'FAR5147', mann: 'C 18 004', mahle: 'LX 3504', wega: 'WR-315/1', fram: 'CA11663', vox: 'HLP5147' },
      combustivel: { original: '1614111980', tecfil: 'PEC3044', authomix: 'FCO3044', mann: 'PU 9012 z', mahle: 'KX 505D', wega: 'FCD-0794', fram: 'C11950', vox: 'CE3044' },
      cabine: { original: '1611280380', tecfil: 'ACP319', authomix: 'FCA0319', mann: 'CU 25 014', mahle: 'LA 926', wega: 'AKX-3549', fram: 'CF11662', vox: 'FAC319' }
    }
  }
};
