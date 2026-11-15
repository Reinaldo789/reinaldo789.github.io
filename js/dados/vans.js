export const veiculosVans = {
  'Renault Master 2.3 dCi (2013 em diante)': {
    sistemas: [
      { sistema: 'Motor (M9T 2.3 16V Bi-Turbo)', especificacao: 'SAE 5W-30 Sintético (Norma Renault RN0720 / ACEA C4) [1]', capacidade: '8,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (PF6)', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica / Elétrica', especificacao: 'Fluido Dexron III / Óleo Hidráulico', capacidade: '1,5 L', intervalo: 'Verificar nível' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (Pronto uso - 50/50)', capacidade: '9,0 L', intervalo: '4 anos ou 120.000 km' }
    ],
    notas: {
      1: "Equipada com DPF (Filtro de Partículas). É obrigatório o uso exclusivo de óleos com tecnologia Low SAPS que atendam à norma Renault RN0720 / ACEA C4 para evitar o entupimento prematuro do escape.",
      2: "Uso rodoviário: 20.000 km ou 1 ano. Uso severo urbano (entregas porta a porta, vans escolares, lotação urbana com excesso de marcha lenta): Reduzir para 10.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '152095084R', tecfil: 'PEL109', authomix: 'FEL0109', mann: 'HU 711/5 x', mahle: 'OX 373 D', wega: 'WOE-520', fram: 'CH11299ECO', vox: 'LE109' },
      ar: { original: '1654600Q0H', tecfil: 'ARL4300', authomix: 'FAR4300', mann: 'C 27 154', mahle: 'LX 2795', wega: 'FAP-4300', fram: 'CA11174', vox: 'ARL4300' },
      combustivel: { original: '164005787R', tecfil: 'PSD530', authomix: 'FCO0530', mann: 'WK 939/2', mahle: 'KC 100', wega: 'FCD-0730', fram: 'PS11705', vox: 'PSD530' },
      cabine: { original: '272778841R', tecfil: 'ACP927', authomix: 'FCA0927', mann: 'CU 22003', mahle: 'LA 715', wega: 'AKX-1992', fram: 'CF11783', vox: 'ACP927' }
    }
  },

  'Fiat Ducato / Peugeot Boxer / Citroën Jumper 2.3 Multijet (2010 a 2016)': {
    sistemas: [
      { sistema: 'Motor (F1AE0481D - 2.3 16V Multijet)', especificacao: 'SAE 5W-30 Sintético (Norma Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '6,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (ML6C)', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,7 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido ATF Dexron II / III (Tutela GI/A)', capacidade: '1,2 L', intervalo: 'Verificar nível' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Paraflu Up (50/50)', capacidade: '10,0 L', intervalo: '2 anos ou 60.000 km' }
    ],
    notas: {
      1: "Motor sem Arla-32 (geração Euro 4), mas exige lubrificantes sintéticos de qualidade com especificação Fiat 9.55535-S1.",
      2: "Rodoviário: 20.000 km ou 1 ano. Uso severo urbano (transporte escolar, distribuição urbana intensa): Reduzir obrigatoriamente para 10.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '5801384954', tecfil: 'PEL110', authomix: 'FEL0110', mann: 'HU 7010 z', mahle: 'OX 437 D', wega: 'WOE-512', fram: 'CH11330ECO', vox: 'LE110' },
      ar: { original: '1356779080', tecfil: 'ARL7002', authomix: 'FAR7002', mann: 'C 35 154', mahle: 'LX 1742', wega: 'FAP-7002', fram: 'CA10660', vox: 'ARL7002' },
      combustivel: { original: '77365614', tecfil: 'PSD960', authomix: 'FCO0960', mann: 'WK 854/1', mahle: 'KC 102', wega: 'FCD-0742', fram: 'PS11176', vox: 'PSD960' },
      cabine: { original: '1347427080', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 27 010', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'ACP309' }
    }
  },

  'Mercedes-Benz Sprinter 311 / 415 / 515 CDI (2012 em diante)': {
    sistemas: [
      { sistema: 'Motor (OM 651 - 2.2 Bi-Turbo)', especificacao: 'SAE 5W-30 ou 5W-40 Sintético (Norma MB 228.51 / 229.51 - Low SAPS) [1]', capacidade: '11,5 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (NSG 370 - 6 marchas)', especificacao: 'SAE 75W-85 Óleo Sintético (Norma MB 235.4)', capacidade: '1,8 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-90 API GL-5 (Norma MB 235.0)', capacidade: '1,5 L a 2,2 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido Norma MB 236.3', capacidade: '1,2 L', intervalo: 'Verificar nível' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '11,0 L', intervalo: '2 anos ou 100.000 km' }
    ],
    notas: {
      1: "Motores equipados com sistema de pós-tratamento Bluetec 5 (utilizam Arla-32) e DPF. É estritamente obrigatório o uso de óleos de baixo teor de cinzas homologados MB 228.51 ou MB 229.51.",
      2: "Rodoviário de longa distância: 20.000 km a 30.000 km (conforme painel Assyst/computador de bordo). Uso urbano / frotas severas: 10.000 km a 15.000 km ou 1 ano."
    },
    filtros: {
      oleo: { original: 'A6511800109', tecfil: 'PEL108', authomix: 'FEL0108', mann: 'HU 7015 z', mahle: 'OX 813 D', wega: 'WOE-515', fram: 'CH11438ECO', vox: 'LE108' },
      ar: { original: 'A6510940104', tecfil: 'ARL5200', authomix: 'FAR5200', mann: 'C 14 130/1', mahle: 'LX 2838', wega: 'FAP-5200', fram: 'CA11450', vox: 'ARL5200' },
      combustivel: { original: 'A6510901652', tecfil: 'PSD950', authomix: 'FCO0950', mann: 'WK 820/19', mahle: 'KC 208', wega: 'FCD-0750', fram: 'PS11700', vox: 'PSD950' },
      cabine: { original: 'A9068300318', tecfil: 'ACP906', authomix: 'FCA0906', mann: 'CU 35 002', mahle: 'LA 302', wega: 'AKX-3502', fram: 'CF11176', vox: 'ACP906' }
    }
  },

  'Volkswagen Kombi 1.4 Total Flex (2009 a 2013)': {
    sistemas: [
      { sistema: 'Motor (EA111 - 1.4 8V Flex)', especificacao: 'SAE 5W-40 Sintético (Norma VW 502 00) [1]', capacidade: '3,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual (Transaxle)', especificacao: 'SAE 75W-90 API GL-4', capacidade: '3,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico G12 / G13 (50/50)', capacidade: '7,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor a combustão interna ciclo Otto (gasolina/etanol) refrigerado a água. Não utiliza sistemas de pós-tratamento complexos como DPF ou Arla.",
      2: "Troca de óleo a cada 10.000 km ou 6 meses (o que vencer primeiro). Em uso urbano severo (táxi, entrega urbana pesada), recomenda-se antecipar para 7.500 km."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PEL107', authomix: 'FEL0107', mann: 'HU 712/11 x', mahle: 'OX 388 D', wega: 'WOE-501', fram: 'CH10593ECO', vox: 'LE107' },
      ar: { original: '0291296201', tecfil: 'ARL4120', authomix: 'FAR4120', mann: 'C 29 111', mahle: 'LX 975', wega: 'FAP-4120', fram: 'CA8802', vox: 'ARL4120' },
      combustivel: { original: '5U0201511', tecfil: 'GI04/7', authomix: 'FCO0004', mann: 'WK 58/3', mahle: 'KL 582', wega: 'FCI-1630', fram: 'G10256', vox: 'GI04/7' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
