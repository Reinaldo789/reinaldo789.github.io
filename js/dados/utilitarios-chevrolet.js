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
      oleo: { original: '905411880018 / 93342367', tecfil: 'PSL340', authomix: 'FOL0340', mann: 'W 1323', mahle: 'OC 404', wega: 'WO-540', fram: 'PH9503', vox: 'LB340' },
      ar: { original: '93276069', tecfil: 'ARS2868', authomix: 'FAR2868', mann: 'C 14 200', mahle: 'LX 960', wega: 'WR-200/3', fram: 'CA5961PU', vox: 'HD2868' },
      combustivel: { original: '905411510035', tecfil: 'PSC498 (Mec) / PSC498/4 (Elet)', authomix: 'FCO0498', mann: 'WK 940/35', mahle: 'TB 1208', wega: 'FCD-2066/1', fram: 'P10688RV', vox: 'FBD4984' },
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
      oleo: { original: '12636838', tecfil: 'PEL726', authomix: 'FOL0726', mann: 'HU 6007 x', mahle: 'OX 1016D', wega: 'WOE-314', fram: 'CH11724', vox: 'LE726' },
      ar: { original: '94771925', tecfil: 'ARS2870', authomix: 'FAR2870', mann: 'C 16 010/1', mahle: 'LX 3679', wega: 'WR-295', fram: 'CA11077', vox: 'HD2870' },
      combustivel: { original: '94771044 (Kit 2 un.)', tecfil: 'PEC3029', authomix: 'FCO3029', mann: 'PU 7020 z', mahle: 'KX 444', wega: 'FCD-0777', fram: 'C11723', vox: 'CE3029' },
      cabine: { original: '98139428', tecfil: 'ACP843', authomix: 'FCA0843', mann: 'CU 2141', mahle: 'LA 909', wega: 'AKX-1993', fram: 'CF11725', vox: 'FAC843' }
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
      oleo: { original: '12636838', tecfil: 'PEL726', authomix: 'FOL0726', mann: 'HU 6007 x', mahle: 'OX 1016D', wega: 'WOE-314', fram: 'CH11724', vox: 'LE726' },
      ar: { original: '94771925', tecfil: 'ARS2870', authomix: 'FAR2870', mann: 'C 16 010/1', mahle: 'LX 3679', wega: 'WR-295', fram: 'CA11077', vox: 'HD2870' },
      combustivel: { original: '94771044 (Kit 2 un.)', tecfil: 'PEC3029', authomix: 'FCO3029', mann: 'PU 7020 z', mahle: 'KX 444', wega: 'FCD-0777', fram: 'C11723', vox: 'CE3029' },
      cabine: { original: '98139428', tecfil: 'ACP843', authomix: 'FCA0843', mann: 'CU 2141', mahle: 'LA 909', wega: 'AKX-1993', fram: 'CF11725', vox: 'FAC843' }
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
      oleo: { original: '12636838', tecfil: 'PEL726', authomix: 'FOL0726', mann: 'HU 6007 x', mahle: 'OX 1016D', wega: 'WOE-314', fram: 'CH11724', vox: 'LE726' },
      ar: { original: '52143382 / 94771925', tecfil: 'ARS2870', authomix: 'FAR2870', mann: 'C 16 010/1', mahle: 'LX 3679', wega: 'WR-295', fram: 'CA11077', vox: 'HD2870' },
      combustivel: { original: '52100212 / 94771044', tecfil: 'PEC3029', authomix: 'FCO3029', mann: 'PU 7020 z', mahle: 'KX 444', wega: 'FCD-0777', fram: 'C11723', vox: 'CE3029' },
      cabine: { original: '98139428', tecfil: 'ACP843', authomix: 'FCA0843', mann: 'CU 2141', mahle: 'LA 909', wega: 'AKX-1993', fram: 'CF11725', vox: 'FAC843' }
    }
  }
};
