export const vansMercedes = {
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
  }
};