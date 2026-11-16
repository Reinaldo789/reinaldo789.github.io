export const caminhoesVolvo = {
  'Volvo VM (Motores Volvo D8K / D7E - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (Volvo D8K / D7E)', especificacao: 'SAE 15W-40 / 10W-40 VDS-4.5 / VDS-4', capacidade: '23,0 L a 28,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / I-Shift', especificacao: 'Óleo Volvo Transmission Oil 97307', capacidade: '11,0 L a 13,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 20,0 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento Volvo VCS (Pronto uso 50/50)', capacidade: '35,0 L', intervalo: '3 anos ou 450.000 km' }
    ],
    notas: {
      1: "Rodoviário de longa distância (com VDS-4.5): até 45.000 km. Distribuição regional/misto: 25.000 km. Severo (obra/basculante): 12.000 km ou 300 horas."
    },
    filtros: {
      oleo: { original: '21380475 / 23185363', tecfil: 'PSL985', authomix: 'FOL0985', mann: 'W 11 010', mahle: 'OX 439 D', wega: 'WO-630', fram: 'PH11350', vox: 'LB985' },
      ar: { original: '21374744', tecfil: 'ARS9850', authomix: 'FAR9850', mann: 'C 31 1275', mahle: 'LX 2001', wega: 'WAP-195', fram: 'CA11501', vox: 'ARS9850' },
      combustivel: { original: '21380488', tecfil: 'PSD995', authomix: 'FCO0995', mann: 'WK 1060/6 X', mahle: 'KC 115', wega: 'FCD-0960', fram: 'PS11801', vox: 'PSD995' },
      cabine: { original: '82343806', tecfil: 'ACP950', authomix: 'FCA0950', mann: 'CU 3300', mahle: 'LA 260', wega: 'AKX-1355', fram: 'CF11801', vox: 'ACP950' }
    }
  },

  'Volvo FH / FM (Motores Volvo D13C / D13K - Euro 5/6)': {
    sistemas: [
      { sistema: 'Motor (Volvo D13 - 13 Litros)', especificacao: 'SAE 15W-40 / 10W-40 Volvo VDS-4.5', capacidade: '33,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio I-Shift (AT2612 / ATO2612)', especificacao: 'Volvo Transmission Oil 97307 (ATF / Sintético)', capacidade: '13,0 L', intervalo: '300.000 km ou 3 anos' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5 / Volvo 97312', capacidade: '16,0 L a 22,0 L', intervalo: '150.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Volvo VCS (Amarelo / Pronto uso 50/50)', capacidade: '38,0 L a 44,0 L', intervalo: '3 anos' }
    ],
    notas: {
      1: "Rodoviário de longa distância (com óleo VDS-4.5): até 60.000 km (conforme recomendação do painel). Operação mista ou severa: reduzir para 20.000 km a 30.000 km."
    },
    filtros: {
      oleo: { original: '23185363', tecfil: 'PSL985', authomix: 'FOL0985', mann: 'W 11 010', mahle: 'OX 439 D', wega: 'WO-630', fram: 'PH11350', vox: 'LB985' },
      ar: { original: '21374744', tecfil: 'ARS9850', authomix: 'FAR9850', mann: 'C 31 1275', mahle: 'LX 2001', wega: 'WAP-195', fram: 'CA11501', vox: 'ARS9850' },
      combustivel: { original: '21380488', tecfil: 'PSD995', authomix: 'FCO0995', mann: 'WK 1060/6 X', mahle: 'KC 115', wega: 'FCD-0960', fram: 'PS11801', vox: 'PSD995' },
      cabine: { original: '20938487', tecfil: 'ACP950', authomix: 'FCA0950', mann: 'CU 3300', mahle: 'LA 260', wega: 'AKX-1355', fram: 'CF11801', vox: 'ACP950' }
    }
  }
};