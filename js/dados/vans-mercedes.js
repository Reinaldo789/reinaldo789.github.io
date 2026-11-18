export const vansMercedes = {
  'Mercedes-Benz Sprinter (OM 646 LA - 2.2 CDI Euro 3 / Anos Finais 2011-2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (OM 646 LA 2.2 CDI 16V - 109 cv / 129 cv)', especificacao: 'SAE 15W-40 ou 10W-40 Semissintético (Norma MB 228.3 / API CI-4)', capacidade: '10,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (MB G-32 / 5 marchas)', especificacao: 'MB ATF / SAE 75W-80 Sintético', capacidade: '1,8 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento MB 325.0 (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Versão final da geração clássica anterior à norma Euro V. Não utiliza sistema Arla 32. Atenção ao torque correto dos parafusos do cárter e do bujão durante a troca de óleo."
    },
    filtros: {
      oleo: { original: 'A6111800009', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 718/1 k', mahle: 'OX 153D', wega: 'WOE-305', fram: 'CH9645', vox: 'PEL106' },
      ar: { original: 'A0030949504', tecfil: 'ARL9002', authomix: 'FAR9002', mann: 'C 32 131', mahle: 'LX 824', wega: 'FAP-9002', fram: 'CA9918', vox: 'ARL9002' },
      combustivel: { original: 'A6110900352', tecfil: 'PSD480', authomix: 'FCO0480', mann: 'WK 842/2', mahle: 'KL 212', wega: 'FCD-2120', fram: 'P926', vox: 'PSD480' },
      cabine: { original: 'A9018300418', tecfil: 'ACP900', authomix: 'FCA0900', mann: 'CU 27 33', mahle: 'LA 42', wega: 'AKX-1440', fram: 'CF9423', vox: 'ACP900' }
    }
  },

  'Mercedes-Benz Sprinter (OM 651 - Vans, Furgões e Chassis Euro 5 / 2012 a 2022)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 651 2.2 CDI Bi-Turbo)', especificacao: 'SAE 5W-30 ou 5W-40 (Norma MB 229.51 / 229.52 - Low SAPS)', capacidade: '11,5 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (NSG 400 / ECO Gear)', especificacao: 'MB ATF 236.25 / Óleo Sintético Específico MB', capacidade: '1,8 L a 2,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L a 1,8 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento MB 325.0 / 325.5 (50/50)', capacidade: '11,0 L a 13,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Exige uso contínuo de ARLA 32 no sistema SCR e óleos de motor com tecnologia Low SAPS para evitar a saturação prévia do DPF e danos aos bicos injetores de alta pressão."
    },
    filtros: {
      oleo: { original: 'A6511800109', tecfil: 'PEL676', authomix: 'FOL0676', mann: 'HU 7010 z', mahle: 'OX 1167 D', wega: 'WOE-455', fram: 'CH11277ECO', vox: 'LE676' },
      ar: { original: 'A0000902651', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 32 003', mahle: 'LX 2795', wega: 'FAP-9005', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: 'A6510901652', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 7009 z', mahle: 'KX 380D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: 'A9068300318', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CU 28 003', mahle: 'LA 306', wega: 'AKX-1450', fram: 'CF10729', vox: 'FCA0901' }
    }
  },

  'Mercedes-Benz Sprinter (OM 654 - Nova Geração Euro 6 / Proconve P8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 654 2.0 Turbo Diesel OM)', especificacao: 'SAE 0W-20 ou 5W-30 (Norma MB 229.71 / 229.52 - Low SAPS)', capacidade: '10,5 L (com filtro)', intervalo: '20.000 km ou 1 ano' },
      { sistema: 'Câmbio / Transmissão', especificacao: 'Óleo Sintético MB homologado', capacidade: '2,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido MB 325.6 (50/50)', capacidade: '11,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Motorização de alta eficiência com bloco em alumínio. Obrigatoriedade absoluta de fluidos com homologação MB atualizada para preservação do sistema de pós-tratamento de gases."
    },
    filtros: {
      oleo: { original: 'A6541801100', tecfil: 'PEL654', authomix: 'FOL0654', mann: 'HU 6014 z', mahle: 'OX 1143D', wega: 'WOE-520', fram: 'CH12311', vox: 'LE654' },
      ar: { original: 'A9100940000', tecfil: 'ARL9020', authomix: 'FAR9020', mann: 'C 27 036', mahle: 'LX 4520', wega: 'FAP-9020', fram: 'CA12400', vox: 'ARL9020' },
      combustivel: { original: 'A6540920000', tecfil: 'PSD995', authomix: 'FCO0995', mann: 'PU 6011 z', mahle: 'KX 570D', wega: 'FCI-1655', fram: 'PS12300', vox: 'PSD995' },
      cabine: { original: 'A9108300100', tecfil: 'ACP905', authomix: 'FCA0905', mann: 'FP 28 003', mahle: 'LAK 306', wega: 'AKX-1455', fram: 'CF11780', vox: 'ACP905' }
    }
  },

  'Mercedes-Benz LO 916 / OF 1519 / OF 1721 (Chassis Urbanos e Micro-ônibus - OM 924 LA)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 924 LA 4.8L Eletrônico - BlueTec 5/6)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 10W-40 Semissintético (MB 228.31 / 228.51)', capacidade: '15,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (MB G-60 / G-85 / ZF)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '7,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Eixo Hypoid)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '10,0 L a 15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido MB 325.3 / Aditivo Orgânico (50/50)', capacidade: '28,0 L a 45,0 L', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Emprega motorização OM 924 LA de 4 cilindros com injeção eletrônica PLD. Realizar a purga e sangria do sistema de combustível sempre após a substituição dos elementos filtrantes."
    },
    filtros: {
      oleo: { original: 'A0001802609', tecfil: 'PEL2003', authomix: 'FOL2003', mann: 'HU 945/2 x', mahle: 'OX 174D', wega: 'WOE-440', fram: 'CH9389ECO', vox: 'LE2003' },
      ar: { original: 'A0040943504 / A0030942504', tecfil: 'ARL9015', authomix: 'FAR9015', mann: 'C 30 850/2', mahle: 'LX 1680', wega: 'FAP-5015', fram: 'CA10291', vox: 'FAR9015' },
      combustivel: { original: 'A0000903651', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: 'A9738350047', tecfil: 'ACP300', authomix: 'FCA0300', mann: 'CU 28 82', mahle: 'LA 200', wega: 'AKX-1120', fram: 'CF1100', vox: 'ACP300' }
    }
  }
};
