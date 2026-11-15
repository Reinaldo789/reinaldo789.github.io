export const vans = {
  'Ford Transit 2.0 EcoBlue (Pós-2022 / Euro 6)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (2.0 EcoBlue TDCi)', especificacao: 'SAE 0W-30 ou 5W-30 Sintético (Norma WSS-M2C950-A)', capacidade: '6,6 L (com filtro)', intervalo: '20.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: WSS-M2C200-D2 | Auto: Ford Fluid (10R80)', capacidade: 'Manual: ~1,8 L | Auto: ~9,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico WSS-M97B44-D (50/50)', capacidade: '10,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Utiliza sistema SCR com tanque dedicado de ARLA 32 integrado ao bocal de abastecimento principal."
    },
    filtros: {
      oleo: { original: '2282245', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 7015 z', mahle: 'OX 1146D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: 'GK2Z9601A', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 30 015', mahle: 'LX 3950', wega: 'FAP-4050', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: '2333556', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 8016', mahle: 'KC 550D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '1853037', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CUK 29003', mahle: 'LA 780', wega: 'AKX-1450', fram: 'CF10729', vox: 'FCA0901' }
    }
  },

  'Mercedes-Benz Sprinter (OM 651 - Vans e Furgões 2012 em diante)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 651 2.2 CDI Bi-Turbo)', especificacao: 'SAE 5W-30 ou 5W-40 (Norma MB 225.16 / 229.51 - Low SAPS)', capacidade: '11,5 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (NSG 400 / ECO Gear)', especificacao: 'MB ATF 236.25 / Óleo Sintético Específico MB', capacidade: '1,8 L a 2,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L a 1,8 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento MB 325.0 / 325.5 (50/50)', capacidade: '11,0 L a 13,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Utiliza sistema Bluetec 5/6 com tanque de ARLA 32 (capacidade de aprox. 18 a 22 litros)."
    },
    filtros: {
      oleo: { original: 'A6511800109', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 718/5 x', mahle: 'OX 382D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: 'A0000902651', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 32 003', mahle: 'LX 2795', wega: 'FAP-9005', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: 'A6510901652', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 7009 z', mahle: 'KX 380D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD980' },
      cabine: { original: 'A9068300318', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CU 28 003', mahle: 'LA 306', wega: 'AKX-1450', fram: 'CF10729', vox: 'FCA0901' }
    }
  },

  'Renault Master 2.3 dCi (Pós-2013)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (M9T 2.3 Bi-Turbo)', especificacao: 'SAE 5W-30 Sintético (Norma RN0720 - C4)', capacidade: '8,5 L (com filtro)', intervalo: '15.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (PF6)', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico Tipo D (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Exige óleo com especificação ACEA C4 para preservação do sistema de pós-tratamento."
    },
    filtros: {
      oleo: { original: '152095874R', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '1654600Q1H', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 27 030', mahle: 'LX 3185', wega: 'FAP-9296', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '164005934R', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 730/1 x', mahle: 'KX 338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '272779339R', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 22 011', mahle: 'LA 415', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Fiat Ducato / Peugeot Boxer / Citroën Jumper 2.3 Multijet': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (F1AE0481N / F1C 2.3 16V)', especificacao: 'SAE 5W-30 Sintético (Norma Fiat 9.55535-S1)', capacidade: '6,5 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ML6C)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu Up / Aditivo Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Modelos atualizados para atendimento às fases modernas de emissões incorporam SCR com ARLA 32."
    },
    filtros: {
      oleo: { original: '504098492', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '1348888080', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 30 130', mahle: 'LX 1739', wega: 'FAP-3013', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '77366365', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 338/26D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '1327174080', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 28 42', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Iveco Daily 3.0 (F1C - Furgões, Chassi-Cabine e Minibus)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (F1C 3.0 16V Euro V / Euro 6)', especificacao: 'SAE 5W-30 Sintético (Norma Iveco 18-1811 Cl. S1)', capacidade: '7,1 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ZF 6S) / Hi-Matic Auto', especificacao: 'Manual: 75W-80 GL-4 | Auto: ZF Lifeguard8', capacidade: 'Manual: ~2,8 L | Auto: ~8,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-90 API GL-5', capacidade: '2,4 L a 3,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '12,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Utiliza sistema SCR integrado com tanque e bocal de ARLA 32."
    },
    filtros: {
      oleo: { original: '5801382455', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: '5801391307', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 27 132', mahle: 'LX 3185', wega: 'FAP-4050', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: '5801595187', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 823 x', mahle: 'KC 28D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '5801391295', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CU 27 004', mahle: 'LA 306', wega: 'AKX-1450', fram: 'CF10729', vox: 'FAR9005' }
    }
  },

  'Mercedes-Benz Ônibus / Chassis (Linha OF e O-500 - Ex: OF 1519 / OF 1721 / O500U)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 924 LA / OM 926 LA BlueTec 5/6)', especificacao: 'SAE 15W-40 CI-4 ou 10W-40 Semissintético (MB 228.3 / 228.5)', capacidade: 'OM 924 (4 cil): 15,0 L | OM 926 (6 cil): 28,0 L', intervalo: '20.000 km ou conforme horímetro/bordo' },
      { sistema: 'Câmbio Manual (MB / ZF)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '9,0 L a 12,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Eixo Hypoid)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido MB 325.3 / Aditivo Orgânico (50/50)', capacidade: '35,0 L a 50,0 L (conforme encarroçamento)', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Todos os chassis com tecnologia BlueTec 5 e BlueTec 6 exigem rigorosamente o abastecimento de ARLA 32 para funcionamento do sistema SCR."
    },
    filtros: {
      oleo: { original: 'A0001802609 (OM924/926)', tecfil: 'PSL900', authomix: 'FOL0900', mann: 'W 11 102/2', mahle: 'OC 396', wega: 'WO-210', fram: 'PH9333', vox: 'PSL900' },
      ar: { original: 'A0030942504', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 30 850', mahle: 'LX 1680', wega: 'FAP-5012', fram: 'CA10291', vox: 'FAR9012' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: 'Não aplicável de fábrica (depende da encarroçadora)', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Volkswagen / MAN Chassis para Ônibus (Linha Volksbus - Ex: 15.190 / 17.230 / 17.260)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (MAN D08 34 / Cummins ISB 4.5 e 6.7)', especificacao: 'SAE 15W-40 CI-4 ou 10W-40 Semissintético', capacidade: '15,0 L a 20,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ZF / Eaton)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '8,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '13,0 L a 16,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '30,0 L a 45,0 L', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Motores equipados com tecnologia EGR (em versões específicas iniciais) ou SCR (com uso obrigatório de ARLA 32 nas especificações Euro V e Euro 6)."
    },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PSL900', authomix: 'FOL0900', mann: 'W 11 102/2', mahle: 'OC 396', wega: 'WO-210', fram: 'PH9333', vox: 'PSL900' },
      ar: { original: '2R0129620', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 30 850', mahle: 'LX 1680', wega: 'FAP-5012', fram: 'CA10291', vox: 'FAR9012' },
      combustivel: { original: '2R0127177', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: 'Não aplicável de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Chassi para Micro-ônibus e Ônibus Leves (Linha MA / MT)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8 / 4.5 Euro V / Euro 6)', especificacao: 'SAE 15W-40 CI-4 ou 5W-30 Sintético', capacidade: '10,0 L a 15,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO / ZF)', especificacao: 'SAE 75W-90 GL-4 / 85W-90 GL-5', capacidade: '4,0 L a 6,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L a 6,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '22,0 L a 30,0 L', intervalo: '40.000 km ou 1 ano' }
    ],
    notas: {
      1: "Utiliza motores Cummins com sistema SCR e tanque dedicado de ARLA 32."
    },
    filtros: {
      oleo: { original: '4897834', tecfil: 'PSL900', authomix: 'FOL0900', mann: 'W 11 102/2', mahle: 'OC 396', wega: 'WO-210', fram: 'PH9333', vox: 'PSL900' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'FAR9012' },
      combustivel: { original: '5265411', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
