export const utilitariosChevrolet = {
  'Chevrolet S10 2.8 MWM Sprint (Mecânica e Eletrônica - 2000 a 2011)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 2.8 12V Turbo Intercooler)', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-1305 / 2405)', especificacao: 'ATF Dexron III (ou SAE 75W-90 API GL-4 conforme manual da caixa) [1]', capacidade: '2,2 L a 2,6 L', intervalo: '50.000 km' },
      { sistema: 'Caixa de Transferência (4x4 BorgWarner)', especificacao: 'ATF Dexron III', capacidade: '1,2 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial Traseiro (Dana 44)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com Positracker) [2]', capacidade: '2,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '10,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Fase clássica com motor MWM Sprint. As versões iniciais usavam bomba mecânica e as finais (NGD) injeção common-rail eletrônica. Atenção ao manual da caixa quanto à especificação exata do óleo (muitas usam ATF Dexron III).",
      2: "Diferencial traseiro Dana 44. Versões 4x4 topo de linha costumavam vir com sistema de deslizamento limitado (Positracker / LSD), exigindo óleo GL-5 compatível com LSD."
    },
    filtros: {
      oleo: { original: '93297151', tecfil: 'PSL902', authomix: 'FOL0902', mann: 'W 923/1', mahle: 'OC 142', wega: 'WO-320', fram: 'PH2856', vox: 'LB902' },
      ar: { original: '93308332', tecfil: 'ARS7101', authomix: 'FAR7101', mann: 'C 16 140', mahle: 'LX 1621', wega: 'JFA-0318', fram: 'CA9387', vox: 'HD7101' },
      combustivel: { original: '93316104', tecfil: 'PSC494', authomix: 'FCO0494', mann: 'WK 842/19', mahle: 'KL 761', wega: 'FCD-2065', fram: 'PS9448', vox: 'FBS494' },
      cabine: { original: 'Não aplicável nesta geração', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
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
      oleo: { original: '94748028', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'HU 6007 x', mahle: 'OX 385D', wega: 'WOE-610', fram: 'CH11086', vox: 'LE158' },
      ar: { original: '52046261', tecfil: 'ARS9955', authomix: 'FAR9955', mann: 'C 27 035', mahle: 'LX 3045', wega: 'JFA-0052', fram: 'CA11235', vox: 'HD9955' },
      combustivel: { original: '52046262', tecfil: 'PSC715', authomix: 'FCO0715', mann: 'PU 823 x', mahle: 'KX 388D', wega: 'FCD-0761', fram: 'C11330', vox: 'CE715' },
      cabine: { original: '52046263', tecfil: 'ACP922', authomix: 'FCA0922', mann: 'CUK 24 005', mahle: 'LAK 824', wega: 'AKX-3511', fram: 'CF11236', vox: 'FAC922' }
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
      oleo: { original: '94748028', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'HU 6007 x', mahle: 'OX 385D', wega: 'WOE-610', fram: 'CH11086', vox: 'LE158' },
      ar: { original: '52046261', tecfil: 'ARS9955', authomix: 'FAR9955', mann: 'C 27 035', mahle: 'LX 3045', wega: 'JFA-0052', fram: 'CA11235', vox: 'HD9955' },
      combustivel: { original: '52046262', tecfil: 'PSC715', authomix: 'FCO0715', mann: 'PU 823 x', mahle: 'KX 388D', wega: 'FCD-0761', fram: 'C11330', vox: 'CE715' },
      cabine: { original: '52046263', tecfil: 'ACP922', authomix: 'FCA0922', mann: 'CUK 24 005', mahle: 'LAK 824', wega: 'AKX-3511', fram: 'CF11236', vox: 'FAC922' }
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
      oleo: { original: '94748028', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'HU 6007 x', mahle: 'OX 385D', wega: 'WOE-610', fram: 'CH11086', vox: 'LE158' },
      ar: { original: '52140685', tecfil: 'ARS9955', authomix: 'FAR9955', mann: 'C 27 035', mahle: 'LX 3045', wega: 'JFA-0052', fram: 'CA11235', vox: 'HD9955' },
      combustivel: { original: '52140686', tecfil: 'PSC715', authomix: 'FCO0715', mann: 'PU 823 x', mahle: 'KX 388D', wega: 'FCD-0761', fram: 'C11330', vox: 'CE715' },
      cabine: { original: '52046263', tecfil: 'ACP922', authomix: 'FCA0922', mann: 'CUK 24 005', mahle: 'LAK 824', wega: 'AKX-3511', fram: 'CF11236', vox: 'FAC922' }
    }
  }
};
