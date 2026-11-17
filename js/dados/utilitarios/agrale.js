export const utilitariosAgrale = {
  'Agrale Marruá AM50 / AM100 (MWM 2.8 Mecânico - 2004 a 2011)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 2.8 12V Turbo - 132 cv)', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405)', especificacao: 'ATF Dexron III / Mercon [1]', capacidade: '2,6 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354)', especificacao: 'ATF Dexron III / Mercon', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Dianteiro / Traseiro)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com bloc. traseiro) [2]', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atenção ao câmbio Eaton FSO-2405: siga rigorosamente a recomendação do fabricante quanto ao uso de ATF Dexron III nesta caixa específica para garantir o funcionamento correto dos sincronizadores.",
      2: "Eixos rígidos Dana. Caso o diferencial traseiro possua sistema de deslizamento limitado (LSD / Trac-Lok), utilize óleo GL-5 compatível com LSD ou adicione o aditivo modificador de atrito para evitar ruídos e desgaste prematuro."
    },
    filtros: {
      oleo: { original: '909004010185', tecfil: 'PSL902', authomix: 'FOL0902', mann: 'W 923/1', mahle: 'OC 142', wega: 'WO-320', fram: 'PH2856', vox: 'LB902' },
      ar: { original: '600800505008', tecfil: 'ARS7101', authomix: 'FAR7101', mann: 'C 16 140', mahle: 'LX 1621', wega: 'JFA-0318', fram: 'CA9387', vox: 'HD7101' },
      combustivel: { original: '600800507004', tecfil: 'PSC494', authomix: 'FCO0494', mann: 'WK 842/19', mahle: 'KL 761', wega: 'FCD-2065', fram: 'PS9448', vox: 'FBS494' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Marruá AM200 / AM300 (Cabine Dupla / Carga - Euro 5)': {
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
      oleo: { original: '5266731', tecfil: 'PSL541', authomix: 'FOL0541', mann: 'W 719/50', mahle: 'OC 1055', wega: 'WO-541', fram: 'PH10757', vox: 'LB541' },
      ar: { original: '600800505012', tecfil: 'ARS5376', authomix: 'FAR5376', mann: 'C 27 1170', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS5376' },
      combustivel: { original: '5262311', tecfil: 'PSC706', authomix: 'FCO0706', mann: 'WK 842/22', mahle: 'KL 432', wega: 'FCD-2067', fram: 'PS9801', vox: 'FBS706' },
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
      oleo: { original: '5266731', tecfil: 'PSL541', authomix: 'FOL0541', mann: 'W 719/50', mahle: 'OC 1055', wega: 'WO-541', fram: 'PH10757', vox: 'LB541' },
      ar: { original: '600800505012', tecfil: 'ARS5376', authomix: 'FAR5376', mann: 'C 27 1170', mahle: 'LX 1791', wega: 'WAP-182', fram: 'CA10665', vox: 'ARS5376' },
      combustivel: { original: '5262311', tecfil: 'PSC706', authomix: 'FCO0706', mann: 'WK 842/22', mahle: 'KL 432', wega: 'FCD-2067', fram: 'PS9801', vox: 'FBS706' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
