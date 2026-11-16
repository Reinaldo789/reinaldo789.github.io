export const passeioVW = {
  'VW Kombi 1.4': {
    sistemas: [
      { sistema: 'Motor (EA111 Total Flex)', especificacao: 'SAE 15W-40 ou 5W-40 (Norma VW 502 00) [1]', capacidade: '3,3 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'API GL-4', capacidade: '3,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor arrefecido a líquido (arrefecimento por radiador na frente), portanto não utiliza arrefecimento a ar como as antigas a ar.",
      2: "10.000 km (Normal) / 5.000 km (Severo / Carga e trabalho urbano)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/22', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB55' },
      ar: { original: '0231296201', tecfil: 'ARL3280', authomix: 'FAR3280', mann: 'C 12 822', mahle: 'LX1594', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL582', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'VW Gol 1.6 G5': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00 (sintético ou semissintético).",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', authomix: 'FOL0560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB560' },
      ar: { original: '032129620C', tecfil: 'ARL3280', authomix: 'FAR6080', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC0507' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  },

  'VW Gol 1.6 G6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 (Norma VW 502 00) [1]', capacidade: '3,6 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT G12/G13 Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Obrigatório atender norma VW 502 00.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '030115561AN', tecfil: 'PSL560', authomix: 'FOL0560', mann: 'W 712/53', mahle: 'OC250', wega: 'WO-100', fram: 'PH5949', vox: 'LB560' },
      ar: { original: '032129620C', tecfil: 'ARL3280', authomix: 'FAR6080', mann: 'C 2295/2', mahle: 'LX1592', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR3280' },
      combustivel: { original: '6QE201511', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC0507' },
      cabine: { original: '5U0819653', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 3162', mahle: 'LA 74', wega: 'AKX-1122', fram: 'CF11175', vox: 'FCA0309' }
    }
  }
};