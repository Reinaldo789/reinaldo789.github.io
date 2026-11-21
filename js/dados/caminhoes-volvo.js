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
      oleo: 'PSL985',
      ar: 'ARS9850',
      combustivel: 'PSD995'
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
      oleo: 'PSL985',
      ar: 'ARS9850',
      combustivel: 'PSD995'
    }
  }
};