export const utilitariosChevrolet = {
  'Chevrolet S10 2.8 MWM Sprint Eletrônica (2007 a 2011)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 2.8 12V Turbo Intercooler - Common Rail)', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405)', especificacao: 'ATF Dexron III (ou SAE 75W-90 API GL-4 conforme manual da caixa) [1]', capacidade: '2,2 L a 2,6 L', intervalo: '50.000 km' },
      { sistema: 'Caixa de Transferência (4x4 BorgWarner)', especificacao: 'ATF Dexron III', capacidade: '1,2 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial Traseiro (Dana 44)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com Positracker) [2]', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '10,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motorização MWM Sprint 4.07TCE com sistema de injeção eletrônica Common Rail. Atenção ao manual da caixa quanto à especificação exata do óleo (a maioria utiliza ATF Dexron III).",
      2: "Diferencial traseiro Dana 44. Versões 4x4 topo de linha contam com sistema de deslizamento limitado (Positracker / LSD), exigindo óleo GL-5 compatível com LSD."
    },
    filtros: {
      oleo: 'PSL340',
      ar: 'ARS2868',
      combustivel: 'PSC454'
    }
  },

  'Chevrolet S10 2.8 CTDI Duramax (180 cv - 2012 a 2013)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V Turbo - 180 cv)', especificacao: 'SAE 5W-30 Sintético (GM dexos2 / ACEA C3) [1]', capacidade: '6,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (MX5) / Automático (GF6 - 6 marchas)', especificacao: 'Manual: SAE 75W-85 API GL-4 | Auto: Dexron VI', capacidade: 'Manual: 2,5 L | Auto (Total): 8,5 L', intervalo: 'Manual: 80.000 km | Auto: 50.000 km (Severo)' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'Tras: SAE 75W-90 Sintético API GL-5 | Diant: SAE 80W-90 GL-5', capacidade: 'Tras: 2,4 L | Diant: 1,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life GM (50/50)', capacidade: '11,0 L', intervalo: '5 anos ou 150.000 km' }
    ],
    notas: {
      1: "Início da 2ª Geração global (projeto Colorado/S10). Motor Duramax 2.8 com 180 cv. Exige óleo sintético homologado GM dexos2 ou ACEA C3 para proteção de emissões."
    },
    filtros: {
      oleo: 'PEL726',
      ar: 'ARS2870',
      combustivel: 'PEC3029'
    }
  },

  'Chevrolet S10 2.8 CTDI Duramax (200 cv - 2014 a 2020)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V Turbo - 200 cv)', especificacao: 'SAE 5W-30 Sintético (GM dexos2 / ACEA C3)', capacidade: '6,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (6 marchas) / Automático (GF6 - 6 marchas)', especificacao: 'Manual: SAE 75W-85 API GL-4 | Auto: Dexron VI', capacidade: 'Manual: 2,5 L | Auto (Total): 8,5 L', intervalo: 'Manual: 80.000 km | Auto: Troca recomendada em uso severo' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'Tras: SAE 75W-90 Sintético API GL-5 | Diant: SAE 80W-90 GL-5', capacidade: 'Tras: 2,4 L | Diant: 1,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life GM (50/50)', capacidade: '11,0 L', intervalo: '5 anos ou 150.000 km' }
    ],
    notas: {
      1: "Evolução do motor Duramax para 200 cv e 51 kgfm de torque (nas versões automáticas), com melhorias em coxins, isolamento acústico e calibração de suspensão."
    },
    filtros: {
      oleo: 'PEL726',
      ar: 'ARS2870',
      combustivel: 'PEC3029'
    }
  },

  'Chevrolet S10 2.8 Turbo Duramax (Proconve L7/L8 - 2021 a 2026)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V - Turbo Geometria Variável)', especificacao: 'SAE 0W-20 ou 0W-30 Sintético (GM dexosD / ACEA C5) [1]', capacidade: '6,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (6 marchas) / Automático (8 marchas - 8L45)', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: GM Dexron ULV', capacidade: 'Manual: 2,5 L | Auto (Total): ~9,0 L', intervalo: 'Manual: 80.000 km | Auto: Uso severo sob inspeção' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'Tras: SAE 75W-90 Sintético API GL-5 | Diant: SAE 80W-90 GL-5', capacidade: 'Tras: 2,4 L | Diant: 1,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life GM (50/50)', capacidade: '11,2 L', intervalo: '5 anos ou 150.000 km' }
    ],
    notas: {
      1: "Fase mais recente com adequação rigorosa às normas de emissões Proconve L7/L8. Adota óleos de baixíssima viscosidade (0W-20 / dexosD) para ganho de eficiência energética, além da nova transmissão automática de 8 marchas nas versões topo de linha."
    },
    filtros: {
      oleo: 'PEL726',
      ar: 'ARS2870',
      combustivel: 'PEC3029'
    }
  }
};
