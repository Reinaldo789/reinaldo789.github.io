export const caminhoesIveco = {
  'Iveco Tector (Motores NEF 4 / NEF 6 - FPT Euro 5)': {
    sistemas: [
      { sistema: 'Motor (FPT NEF 4 / NEF 6)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Norma Iveco 18-1804)', capacidade: '13,0 L a 23,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '6,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Paraflu UP (50/50)', capacidade: '25,0 L a 35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km. Distribuição urbana: 15.000 km. Severo (obra/basculante): 10.000 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: { original: '5801394783', tecfil: 'PSL928', authomix: 'FOL0928', mann: 'W 11 102', mahle: 'OC 575', wega: 'WO-620', fram: 'PH10000', vox: 'LB928' },
      ar: { original: '5801456789', tecfil: 'ARS9870', authomix: 'FAR9870', mann: 'C 27 1250', mahle: 'LX 1900', wega: 'WAP-192', fram: 'CA11200', vox: 'ARS9870' },
      combustivel: { original: '5801597843', tecfil: 'PSD994', authomix: 'FCO0994', mann: 'WK 1060/2 X', mahle: 'KC 125', wega: 'FCD-0980', fram: 'PS11950', vox: 'PSD994' },
      cabine: { original: '5801356781', tecfil: 'ACP970', authomix: 'FCA0309', mann: 'CU 3000', mahle: 'LA 280', wega: 'AKX-1370', fram: 'CF11950', vox: 'FCA0309' }
    }
  },

  'Iveco Stralis / Hi-Way / Hi-Land (Motor FPT Cursor 13 - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (FPT Cursor 13 - 13 Litros)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Iveco 18-1804 CLS)', capacidade: '32,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Automatizado (ZF AS-Tronic)', especificacao: 'SAE 75W-80 API GL-4 (ZF Ecofluid M)', capacidade: '12,5 L', intervalo: '150.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L a 22,0 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Paraflu UP (50/50)', capacidade: '40,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário de longa distância: até 40.000 km a 50.000 km (conforme óleo homologado). Operação severa ou mista: 20.000 km a 25.000 km."
    },
    filtros: {
      oleo: { original: '2992241', tecfil: 'PSL930', authomix: 'FOL0930', mann: 'W 11 010/2', mahle: 'OX 580 D', wega: 'WO-635', fram: 'PH11450', vox: 'LB930' },
      ar: { original: '5801456790', tecfil: 'ARS9875', authomix: 'FAR9875', mann: 'C 32 1500', mahle: 'LX 1905', wega: 'WAP-198', fram: 'CA11201', vox: 'ARS9875' },
      combustivel: { original: '5801597845', tecfil: 'PSD996', authomix: 'FCO0996', mann: 'WK 1060/7 X', mahle: 'KC 130', wega: 'FCD-0985', fram: 'PS11955', vox: 'PSD996' },
      cabine: { original: '5801356785', tecfil: 'ACP975', authomix: 'FCA0975', mann: 'CU 3050', mahle: 'LA 285', wega: 'AKX-1375', fram: 'CF11955', vox: 'ACP975' }
    }
  }
};