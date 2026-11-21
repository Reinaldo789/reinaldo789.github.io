export const vansMercedes = {
  'Mercedes-Benz Sprinter (OM 646 LA - 2.2 CDI Euro 3 / Anos Finais 2011-2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (OM 646 LA 2.2 CDI 16V - 109 cv / 129 cv)', especificacao: 'SAE 15W-40 ou 10W-40 Semissintético (Norma MB 228.3 / API CI-4)', capacidade: '10,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (MB G-32 / 5 marchas)', especificacao: 'MB ATF / SAE 75W-80 Sintético', capacidade: '1,8 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento MB 325.0 (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Versão final da geração clássica anterior à norma Euro V. Não utiliza sistema Arla 32. Atenção ao torque correto dos parafusos do cárter e do bujão durante a troca de óleo."
    },
    filtros: {
      oleo: 'PEL106',
      ar: 'ARL9002',
      combustivel: 'PSD480'
    }
  },

  'Mercedes-Benz Sprinter (OM 651 - Vans, Furgões e Chassis Euro 5 / 2012 a 2022)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 651 2.2 CDI Bi-Turbo)', especificacao: 'SAE 5W-30 ou 5W-40 (Norma MB 229.51 / 229.52 - Low SAPS)', capacidade: '11,5 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (NSG 400 / ECO Gear)', especificacao: 'MB ATF 236.25 / Óleo Sintético Específico MB', capacidade: '1,8 L a 2,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L a 1,8 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento MB 325.0 / 325.5 (50/50)', capacidade: '11,0 L a 13,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Exige uso contínuo de ARLA 32 no sistema SCR e óleos de motor com tecnologia Low SAPS para evitar a saturação prévia do DPF e danos aos bicos injetores de alta pressão."
    },
    filtros: {
      oleo: 'PEL676',
      ar: 'ARL9005',
      combustivel: 'PSD990'
    }
  },

  'Mercedes-Benz Sprinter (OM 654 - Nova Geração Euro 6 / Proconve P8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 654 2.0 Turbo Diesel OM)', especificacao: 'SAE 0W-20 ou 5W-30 (Norma MB 229.71 / 229.52 - Low SAPS)', capacidade: '10,5 L (com filtro)', intervalo: '20.000 km ou 1 ano' },
      { sistema: 'Câmbio / Transmissão', especificacao: 'Óleo Sintético MB homologado', capacidade: '2,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '1,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido MB 325.6 (50/50)', capacidade: '11,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Motorização de alta eficiência com bloco em alumínio. Obrigatoriedade absoluta de fluidos com homologação MB atualizada para preservação do sistema de pós-tratamento de gases."
    },
    filtros: {
      oleo: 'PEL654',
      ar: 'ARL9020',
      combustivel: 'PSD995'
    }
  },

  'Mercedes-Benz LO 916 / OF 1519 / OF 1721 (Chassis Urbanos e Micro-ônibus - OM 924 LA)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (OM 924 LA 4.8L Eletrônico - BlueTec 5/6)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 10W-40 Semissintético (MB 228.31 / 228.51)', capacidade: '15,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (MB G-60 / G-85 / ZF)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '7,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Eixo Hypoid)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '10,0 L a 15,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido MB 325.3 / Aditivo Orgânico (50/50)', capacidade: '28,0 L a 45,0 L', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Emprega motorização OM 924 LA de 4 cilindros com injeção eletrônica PLD. Realizar a purga e sangria do sistema de combustível sempre após a substituição dos elementos filtrantes."
    },
    filtros: {
      oleo: 'PEL2003',
      ar: 'ARL9015',
      combustivel: 'PSD990'
    }
  }
};
