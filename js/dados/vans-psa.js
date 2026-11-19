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
      oleo: { original: '8094872', tecfil: 'PSL657', authomix: 'FOL0657', mann: 'W 914/2', mahle: 'OC 616', wega: 'WO-421', fram: 'PH10268', vox: 'LB657' },
      ar: { original: '1444.TS', tecfil: 'ARS1013', authomix: 'FAR1013', mann: 'C 17 278', mahle: 'LX 1612', wega: 'JFA-0991', fram: 'CA9888', vox: 'HD1013' },
      combustivel: { original: '1906.E6', tecfil: 'PEC3023', authomix: 'FCO3023', mann: 'PU 723 x', mahle: 'KX 208D', wega: 'FCD-0771', fram: 'C10026', vox: 'CE3023' },
      cabine: { original: '6447.TY', tecfil: 'ACP105', authomix: 'FCA0105', mann: 'CU 4442', mahle: 'LA 123', wega: 'AKX-3548', fram: 'CF8890', vox: 'FAC105' }
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
      oleo: { original: '8094872', tecfil: 'PSL657', authomix: 'FOL0657', mann: 'W 914/2', mahle: 'OC 616', wega: 'WO-421', fram: 'PH10268', vox: 'LB657' },
      ar: { original: '1444.TS', tecfil: 'ARS1013', authomix: 'FAR1013', mann: 'C 17 278', mahle: 'LX 1612', wega: 'JFA-0991', fram: 'CA9888', vox: 'HD1013' },
      combustivel: { original: '1906.E6', tecfil: 'PEC3023', authomix: 'FCO3023', mann: 'PU 723 x', mahle: 'KX 208D', wega: 'FCD-0771', fram: 'C10026', vox: 'CE3023' },
      cabine: { original: '6447.TY', tecfil: 'ACP105', authomix: 'FCA0105', mann: 'CU 4442', mahle: 'LA 123', wega: 'AKX-3548', fram: 'CF8890', vox: 'FAC105' }
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
      oleo: { original: '9809532380', tecfil: 'PSL630', authomix: 'FOL0161', mann: 'W 7063', mahle: 'OC 1300', wega: 'WO-161', fram: 'PH11819', vox: 'LB630' },
      ar: { original: '1611157980', tecfil: 'ARL5147', authomix: 'FAR5147', mann: 'C 18 004', mahle: 'LX 3504', wega: 'WR-315/1', fram: 'CA11663', vox: 'HLP5147' },
      combustivel: { original: '1614111980', tecfil: 'PEC3044', authomix: 'FCO3044', mann: 'PU 9012 z', mahle: 'KX 505D', wega: 'FCD-0794', fram: 'C11950', vox: 'CE3044' },
      cabine: { original: '1611280380', tecfil: 'ACP319', authomix: 'FCA0319', mann: 'CU 25 014', mahle: 'LA 926', wega: 'AKX-3549', fram: 'CF11662', vox: 'FAC319' }
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
      oleo: { original: '1610693780', tecfil: 'PEL780', authomix: 'FOL0780', mann: 'HU 716/2 x', mahle: 'OX 171/2D1', wega: 'WOE-701', fram: 'CH9657', vox: 'LE780' },
      ar: { original: '9802348680', tecfil: 'ARL5073', authomix: 'FAR5073', mann: 'C 24 017', mahle: 'LX 3525', wega: 'FAP-4058', fram: 'CA11731', vox: 'HLP5073' },
      combustivel: { original: '9801366680', tecfil: 'PEC3050', authomix: 'FCO3050', mann: 'PU 7010 z', mahle: 'KX 338/26D', wega: 'FCD-0727', fram: 'C11781', vox: 'CE3050' },
      cabine: { original: '9807746380', tecfil: 'ACP798', authomix: 'FCA0798', mann: 'CU 29 003-2', mahle: 'LA 876/S', wega: 'AKX-1445-2', fram: 'CF11663', vox: 'FAC798' }
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
      oleo: { original: '1624797780', tecfil: 'PEL785', authomix: 'FOL0785', mann: 'HU 7033 z', mahle: 'OX 1255D', wega: 'WOE-705', fram: 'CH12282', vox: 'LE785' },
      ar: { original: '9813908880', tecfil: 'ARL5156', authomix: 'FAR5156', mann: 'C 24 038', mahle: 'LX 4437', wega: 'FAP-4064', fram: 'CA12321', vox: 'HLP5156' },
      combustivel: { original: '9830130180', tecfil: 'PEC3055', authomix: 'FCO3055', mann: 'PU 8028', mahle: 'KX 595D', wega: 'FCD-0798', fram: 'C12450', vox: 'CE3055' },
      cabine: { original: '9807746380', tecfil: 'ACP798', authomix: 'FCA0798', mann: 'CU 29 003-2', mahle: 'LA 876/S', wega: 'AKX-1445-2', fram: 'CF11663', vox: 'FAC798' }
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
      oleo: { original: '1109.AJ', tecfil: 'PEL108', authomix: 'FOL0108', mann: 'HU 711/51 x', mahle: 'OX 339/2D', wega: 'WOE-710', fram: 'CH9973ECO', vox: 'LE108' },
      ar: { original: '1444.X1', tecfil: 'ARL5053', authomix: 'FAR5053', mann: 'C 3485/1', mahle: 'LX 1287', wega: 'FAP-4873', fram: 'CA9315', vox: 'HLP5053' },
      combustivel: { original: '1567.C6', tecfil: 'GI50/7', authomix: 'FCI1660', mann: 'WK 6002', mahle: 'KL 72', wega: 'FCI-1660', fram: 'G10230F', vox: 'FS50/7' },
      cabine: { original: '6447.NT', tecfil: 'ACP796', authomix: 'FCA0796', mann: 'CU 2245', mahle: 'LA 139', wega: 'AKX-1430', fram: 'CF9466', vox: 'FAC796' }
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
      oleo: { original: '46751179', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 610/3', mahle: 'OC 506', wega: 'WO-130', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '51854025', tecfil: 'ARL4150', authomix: 'FAR4150', mann: 'C 29 003/1', mahle: 'LX 3538', wega: 'FAP-3289', fram: 'CA11234', vox: 'HLP4150' },
      combustivel: { original: '51806073', tecfil: 'GI04/7', authomix: 'FCI1630', mann: 'WK 58', mahle: 'KL 583', wega: 'FCI-1630', fram: 'G9890F', vox: 'FS04/7' },
      cabine: { original: '7089265', tecfil: 'ACP906', authomix: 'FCA0906', mann: 'CU 20 011', mahle: 'LA 920', wega: 'AKX-35323', fram: 'CF10025', vox: 'FAC906' }
    }
  }
};
