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
      oleo: { original: '2045524 / 2397946', tecfil: 'PEL920', authomix: 'FEL0920', mann: 'HU 12 100 x', mahle: 'OX 440 D', wega: 'WOE-550', fram: 'CH11400', vox: 'LE920' },
      ar: { original: '1869399', tecfil: 'ARS9860', authomix: 'FAR9860', mann: 'C 34 1500', mahle: 'LX 2010', wega: 'WAP-200', fram: 'CA11601', vox: 'ARS9860' },
      combustivel: { original: '2241036 / 2192770', tecfil: 'PSD992', authomix: 'FCO0992', mann: 'PU 1067 X', mahle: 'KC 120', wega: 'FCD-0970', fram: 'PS11900', vox: 'PSD992' },
      cabine: { original: '2126233', tecfil: 'ACP960', authomix: 'FCA0960', mann: 'CU 3400', mahle: 'LA 270', wega: 'AKX-1360', fram: 'CF11900', vox: 'ACP960' }
    }
  }
};