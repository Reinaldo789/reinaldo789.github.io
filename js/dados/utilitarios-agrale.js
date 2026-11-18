export const utilitariosAgrale = {
  'Agrale Marruá (MWM 2.8 Mecânico - Eletrônico)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 2.8 12V Turbo - 132 cv) [3]', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405)', especificacao: 'ATF Dexron III / Mercon [1]', capacidade: '2,6 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354)', especificacao: 'ATF Dexron III / Mercon', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Dianteiro / Traseiro)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com bloc. traseiro) [2]', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atenção ao câmbio Eaton FSO-2405: siga rigorosamente a recomendação do fabricante quanto ao uso de ATF Dexron III nesta caixa específica para garantir o funcionamento correto dos sincronizadores.",
      2: "Eixos rígidos Dana. Caso o diferencial traseiro possua sistema de deslizamento limitado (LSD / Trac-Lok), utilize óleo GL-5 compatível com LSD ou adicione o aditivo modificador de atrito para evitar ruídos e desgaste prematuro.",
      3: "Atenção ao filtro de combustível: utilize estritamente a família com rosca para sensor de água (Tecfil PSC498/4, Vox FBD498/4, Mann WK 940/35). Não compre a versão padrão sem sufixo (ex: Tecfil PSC498, Inpeca SCB-0498, Mann WK842/3), pois a rosca inferior do sensor de presença de água não encaixa."
    },
    filtros: {
      oleo: { original: '6008001204004', tecfil: 'PSL340', authomix: 'FOL0340', mann: 'W 1323', mahle: 'OC 404', wega: 'WO-540', fram: 'PH9503', vox: 'LB340' },
      ar: { original: '6015001014002', tecfil: 'ARS8234', authomix: 'FAR8234', mann: 'C 18 450/1', mahle: 'LX 2532', wega: 'WR-200/8', fram: 'CA10221', vox: 'HD8234' },
      arSecundario: { original: '6015001015009', tecfil: 'ASR234', authomix: 'FAS0234', mann: 'CF 1150', mahle: 'LXS 370', wega: 'WR-200/8S', fram: '-', vox: 'HDS234' },
      combustivel: { original: '905411510035', tecfil: 'PSC498/4', authomix: 'FCO4984', mann: 'WK 940/35', mahle: 'KL 747', wega: 'FCD-2066/1', fram: 'P4836A', vox: 'FBD498/4' },
      sedimentador: { original: '905411510019', tecfil: 'PSD450/1', authomix: 'FSE4501', mann: 'WK 1030', mahle: 'KC 121/1', wega: 'FCD-2212', fram: 'PS9029', vox: 'FBS450/1' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Marruá Cummins ISF 2.8 - Euro 5)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8 16V - 150 cv)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Low SAPS)', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505)', especificacao: 'SAE 75W-90 API GL-4 [1]', capacidade: '3,2 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner)', especificacao: 'ATF Dexron III', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Diant. / Tras. com Bloqueio)', especificacao: 'SAE 85W-140 API GL-5 [2]', capacidade: 'Tras: 2,8 L | Diant: 1,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '12,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "O câmbio Eaton FSO-4505 exige obrigatoriamente óleo com especificação **API GL-4**. Nunca utilize óleo GL-5 em caixas manuais com sincronizadores de latão/bronze para evitar corrosão química.",
      2: "Eixos rígidos Dana de alta resistência. Algumas versões táticas e institucionais contam com opção de bloqueio eletrônico no eixo dianteiro (como o sistema Eaton E-Locker) para tração 100% integral em terreno crítico."
    },
    filtros: {
      oleo: { original: '5266731', tecfil: 'PSL356', authomix: 'FOL0356', mann: 'W 1035', mahle: 'OC 1794', wega: 'WOP-1002', fram: 'PH12437', vox: 'LB356' },
      ar: { original: '6015001014002', tecfil: 'ARS8234', authomix: 'FAR8234', mann: 'C 18 450/1', mahle: 'LX 2532', wega: 'WR-200/8', fram: 'CA10221', vox: 'HD8234' },
      arSecundario: { original: '6015001015009', tecfil: 'ASR234', authomix: 'FAS0234', mann: 'CF 1150', mahle: 'LXS 370', wega: 'WR-200/8S', fram: '-', vox: 'HDS234' },
      combustivel: { original: '5262311', tecfil: 'PSC706', authomix: 'FCO0706', mann: 'WK 10002/1', mahle: 'KC 511D', wega: 'FCD-4000', fram: 'P11474', vox: 'FBD706' },
      sedimentador: { original: '5264870', tecfil: 'PSD925', authomix: '-', mann: 'WK 9046', mahle: 'KC 624D', wega: 'FCD-0960', fram: 'P11036', vox: '-' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Marruá AM23 / AM31 (Evolução Moderna / Tático)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8 Eletrônico - Euro 5)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Low SAPS)', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 - 5 marchas)', especificacao: 'SAE 75W-90 API GL-4 [1]', capacidade: '3,2 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência', especificacao: 'ATF Dexron III', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Reforçados Dana', especificacao: 'SAE 85W-140 API GL-5 [2]', capacidade: 'Tras: 2,8 L | Diant: 1,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '12,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Utilizar estritamente lubrificante **API GL-4** na transmissão manual para preservar os componentes internos e garantir engates macios.",
      2: "Eixos Dana com tratamento para uso severo e opcional de bloqueio eletrônico no eixo dianteiro. Nos diferenciais, empregar óleo **API GL-5** de alta performance para cargas severas."
    },
    filtros: {
      oleo: { original: '5266731', tecfil: 'PSL356', authomix: 'FOL0356', mann: 'W 1035', mahle: 'OC 1794', wega: 'WOP-1002', fram: 'PH12437', vox: 'LB356' },
      ar: { original: '6015001014002', tecfil: 'ARS8234', authomix: 'FAR8234', mann: 'C 18 450/1', mahle: 'LX 2532', wega: 'WR-200/8', fram: 'CA10221', vox: 'HD8234' },
      arSecundario: { original: '6015001015009', tecfil: 'ASR234', authomix: 'FAS0234', mann: 'CF 1150', mahle: 'LXS 370', wega: 'WR-200/8S', fram: '-', vox: 'HDS234' },
      combustivel: { original: '5262311', tecfil: 'PSC706', authomix: 'FCO0706', mann: 'WK 10002/1', mahle: 'KC 511D', wega: 'FCD-4000', fram: 'P11474', vox: 'FBD706' },
      sedimentador: { original: '5264870', tecfil: 'PSD925', authomix: '-', mann: 'WK 9046', mahle: 'KC 624D', wega: 'FCD-0960', fram: 'P11036', vox: '-' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
