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
      oleo: 'PSL928',
      ar: 'ARS9870',
      combustivel: 'PSD994'
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
      oleo: 'PSL930',
      ar: 'ARS9875',
      combustivel: 'PSD996'
    }
  }
};