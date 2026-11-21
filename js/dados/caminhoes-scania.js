export const caminhoesScania = {
  'Scania G / R / S (Motores DC13 / DC16 - Euro 5/6)': {
    sistemas: [
      { sistema: 'Motor (Scania DC13 13L / DC16 V8)', especificacao: 'SAE 15W-40 / 10W-40 Scania LDF-4 / LDF-3', capacidade: '38,0 L a 43,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Scania Opticruise (GRS / G33CM)', especificacao: 'Scania STO 1:2 / STO 2:0 A', capacidade: '11,0 L a 13,0 L', intervalo: '180.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'Scania SPO 1 / STO (SAE 85W-140)', capacidade: '18,0 L a 24,0 L', intervalo: '120.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Scania Antifreeze (Pronto uso 50/50)', capacidade: '40,0 L', intervalo: '2 anos ou 300.000 km' }
    ],
    notas: {
      1: "Com óleo Scania LDF-4 em serviço rodoviário de longa distância: intervalos de até 90.000 km ou 12 meses. Operação severa/mista: 30.000 km a 45.000 km."
    },
    filtros: {
      oleo: 'PEL920',
      ar: 'ARS9860',
      combustivel: 'PSD992'
    }
  }
};