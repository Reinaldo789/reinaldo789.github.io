export const caminhoesMercedes = {
  'Mercedes-Benz Accelo (4cc - OM 924 LA)': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA - 4 cil.)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '15,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (MB G 56-6 / G 60)', especificacao: 'SAE 80W / ATF (Norma MB 235.1)', capacidade: '5,0 L a 6,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '3,2 L a 5,0 L', intervalo: '60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '2,5 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '20,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (MB 228.5). Urbano/Severo: 10.000 km a 15.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARS9840',
      combustivel: 'PSD980'
    }
  },

  'Mercedes-Benz Atego (4cc & 6cc - Euro 5)': {
    sistemas: [
      { sistema: 'Motor (OM 924 LA / OM 906/926 LA)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '18,0 L a 29,3 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / Automatizado', especificacao: 'SAE 40 / 80W (Norma MB 235.12 / 235.1)', capacidade: '9,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-90 API GL-5 (MB 235.0)', capacidade: '10,0 L a 18,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '3,5 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '25,0 L a 36,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km (MB 228.3) ou 45.000 km (sintético MB 228.5). Misto/Urbano: 20.000 km. Severo (terra/obra): 10.000 km ou 300 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARS9845',
      combustivel: 'PSD980'
    }
  },

  'Mercedes-Benz Axor / Actros (Motor OM 457 LA / OM 460 LA)': {
    sistemas: [
      { sistema: 'Motor (OM 457 LA / OM 460 LA)', especificacao: 'SAE 15W-40 / 10W-40 (Norma MB 228.5 / 228.3)', capacidade: '35,0 L a 39,0 L (com filtro)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio (MB Powershift / ZF)', especificacao: 'SAE 80W / 75W-85 (Norma MB 235.1 / 235.4)', capacidade: '13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (com/sem redução nos cubos)', especificacao: 'SAE 85W-90 / 85W-140 API GL-5 (MB 235.0 / 235.8)', capacidade: '15,0 L a 24,0 L', intervalo: '40.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'Fluido MB 236.3', capacidade: '4,0 L', intervalo: '2 anos' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo MB 325.0 / 326.0 (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Fora de estrada extremo: 15.000 km ou 300 horas. Misto: 25.000 km. Rodoviário: 30.000 km (MB 228.3) ou até 45.000 km (sintético MB 228.5). Máximo: 12 meses."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARS9842',
      combustivel: 'PEC3023',
      sedimentador: 'PSD920/1'
    }
  }
};