export const utilitariosFord = {
  'Ford Ranger 2.8 Power Stroke (2001 a 2006)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Maxion HS 2.8 8V - 135 cv)', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405A)', especificacao: 'ATF Dexron III / Mercon [1]', capacidade: '2,6 L', intervalo: '80.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354 - 4x4)', especificacao: 'ATF Mercon / Dexron III', capacidade: '1,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'Tras: SAE 85W-140 GL-5 [2] | Diant: SAE 80W-90 GL-5', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Etilenoglicol Orgânico (50/50)', capacidade: '11,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Atenção: o câmbio manual Eaton FSO-2405A utiliza fluido de transmissão automática ATF Dexron III/Mercon, nunca óleo grosso de engrenagem.",
      2: "Para versões equipadas com diferencial traseiro blocante (Trac-Lok / LSD), é obrigatório adicionar modificador de atrito ou usar óleo específico LS."
    },
    filtros: {
      oleo: { original: 'G3MJ-6731-DA', tecfil: 'PSL902', authomix: 'FOL0902', mann: 'W 923/1', mahle: 'OC 142', wega: 'WO-320', fram: 'PH2856', vox: 'LB902' },
      ar: { original: 'BG1T-9601-AA', tecfil: 'ARS7101', authomix: 'FAR7101', mann: 'C 16 140', mahle: 'LX 1621', wega: 'JFA-0318', fram: 'CA9387', vox: 'HD7101' },
      combustivel: { original: 'BG3T-9155-AA', tecfil: 'PSC494', authomix: 'FCO0494', mann: 'WK 842/19', mahle: 'KL 761', wega: 'FCD-2065', fram: 'PS9448', vox: 'FBS494' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Ford Ranger 3.0 Power Stroke Electronic (2005 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (International NGD 3.0 16V - 163 cv)', especificacao: 'SAE 15W-40 (API CI-4 / ACEA E7)', capacidade: '9,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405A)', especificacao: 'ATF Dexron III / Mercon', capacidade: '2,6 L', intervalo: '80.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354 - 4x4)', especificacao: 'ATF Mercon / Dexron III', capacidade: '1,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'Tras: SAE 85W-140 GL-5 (LSD) | Diant: SAE 80W-90 GL-5', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Etilenoglicol Orgânico (50/50)', capacidade: '12,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Atenção na compra do filtro de óleo: modelos de 2005 a 2007 utilizam elemento refil ecológico (Tecfil PEL108 / Mahle OX 414D), enquanto modelos de 2008 a 2012 passaram a usar filtro blindado (Tecfil PSL541 / Mann W 719/50)."
    },
    filtros: {
      oleo: { original: 'BG8T-6731-AA', tecfil: 'PSL541', authomix: 'FOL0541', mann: 'W 719/50', mahle: 'OC 1055', wega: 'WO-541', fram: 'PH10757', vox: 'LB541' },
      ar: { original: 'BG5T-9601-AA', tecfil: 'ARS7101', authomix: 'FAR7101', mann: 'C 16 140', mahle: 'LX 1621', wega: 'JFA-0318', fram: 'CA9387', vox: 'HD7101' },
      combustivel: { original: 'BG5T-9155-AA', tecfil: 'PSC706', authomix: 'FCO0706', mann: 'WK 842/22', mahle: 'KL 432', wega: 'FCD-2067', fram: 'PS9801', vox: 'FBS706' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

 'Ford Ranger 2.2 / 3.2 Duratorq TDCi (2013 a 2016)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duratorq 2.2 4cil / 3.2 5cil)', especificacao: 'SAE 5W-30 Sintético (Ford WSS-M2C913-D)', capacidade: '2.2: 8,6 L | 3.2: 9,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (MT82) / Automático (6R80)', especificacao: 'Manual: SAE 75W-80 | Auto: ATF Mercon LV', capacidade: 'Manual: 2,7 L | Auto: 10,5 L (Total)', intervalo: 'Manual: 80.000 km | Auto: 100.000 km' },
      { sistema: 'Caixa de Transferência (4x4)', especificacao: 'ATF Mercon LV', capacidade: '1,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-90 Sintético API GL-5', capacidade: 'Tras: 2,3 L | Diant: 1,1 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Super Plus Orgânico (50/50)', capacidade: '11,5 L', intervalo: '80.000 km ou 3 anos' }
    ],
    notas: {
      1: "Primeira fase da carroceria T6 (2013-2016). Atenção: o elemento do filtro de óleo e o refil de combustível mudam a partir do modelo 2017."
    },
    filtros: {
      oleo: { original: 'BB3Q-6744-BA', tecfil: 'PEL310', authomix: 'FOL0310', mann: 'HU 711/51 x', mahle: 'OX 440D', wega: 'WOE-131', fram: 'CH11299', vox: 'LE310' },
      ar: { original: 'AB39-9601-AB', tecfil: 'ARS5133', authomix: 'FAR5133', mann: 'C 22 024', mahle: 'LX 3503', wega: 'JFA-0327', fram: 'CA11402', vox: 'HD5133' },
      combustivel: { original: 'AB39-9176-AC', tecfil: 'PEC3037', authomix: 'FCO03037', mann: 'PU 8007', mahle: 'KX 338/28D', wega: 'FCD-0783', fram: 'C11403', vox: 'CE3037' },
      cabine: { original: 'AB39-19N619-AA', tecfil: 'ACP312', authomix: 'FCA0312', mann: 'CU 22 011', mahle: 'LA 872', wega: 'AKX-3518', fram: 'CF11404', vox: 'FAC312' }
    }
  },

  'Ford Ranger 2.2 / 3.2 Duratorq TDCi (2017 a 2023)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duratorq 2.2 4cil / 3.2 5cil - Com DPF)', especificacao: 'SAE 5W-30 Sintético Low SAPS (ACEA C2 / C3) [1]', capacidade: '2.2: 8,6 L | 3.2: 9,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (MT82) / Automático (6R80)', especificacao: 'Manual: SAE 75W-80 | Auto: ATF Mercon LV', capacidade: 'Manual: 2,7 L | Auto: 10,5 L (Total)', intervalo: 'Manual: 80.000 km | Auto: 100.000 km' },
      { sistema: 'Caixa de Transferência (4x4)', especificacao: 'ATF Mercon LV', capacidade: '1,2 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-85 ou 75W-90 Sintético API GL-5', capacidade: 'Tras: 2,3 L | Diant: 1,1 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Super Plus Orgânico (50/50)', capacidade: '11,5 L', intervalo: '80.000 km ou 3 anos' }
    ],
    notas: {
      1: "Fase reestilizada (facelift) com inclusão de DPF e EGR refrigerada. Exige obrigatoriamente óleo 5W-30 de baixo teor de cinzas (Low SAPS) para proteger o DPF."
    },
    filtros: {
      oleo: { original: 'JU2J-6744-AB', tecfil: 'PEL311', authomix: 'FOL0311', mann: 'HU 7002 z', mahle: 'OX 440D', wega: 'WOE-131', fram: 'CH11299', vox: 'LE311' },
      ar: { original: 'AB39-9601-AB', tecfil: 'ARS5133', authomix: 'FAR5133', mann: 'C 22 024', mahle: 'LX 3503', wega: 'JFA-0327', fram: 'CA11402', vox: 'HD5133' },
      combustivel: { original: 'U2Y0-13-ZA5', tecfil: 'PEC3046', authomix: 'FCO03046', mann: 'PU 8021', mahle: 'KX 338/29D', wega: 'FCD-0792', fram: 'C11850', vox: 'CE3046' },
      cabine: { original: 'AB39-19N619-AA', tecfil: 'ACP312', authomix: 'FCA0312', mann: 'CU 22 011', mahle: 'LA 872', wega: 'AKX-3518', fram: 'CF11404', vox: 'FAC312' }
    }
  },

  'Ford Ranger 2.0 EcoBlue / 3.0 V6 Lion (2024 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (2.0 Turbo 170cv / 3.0 V6 250cv)', especificacao: '2.0: SAE 0W-30 (WSS-M2C950-A) | 3.0 V6: SAE 5W-30 (WSS-M2C913-D / ACEA C2/C3) [1]', capacidade: '2.0: 7,5 L | 3.0 V6: 9,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '18,0 L', intervalo: 'Autonomia média: ~8.000 a 10.000 km' },
      { sistema: 'Câmbio Manual (6M) / Automático (10R80 - 10 marchas)', especificacao: 'Manual: SAE 75W (WSS-M2C200-D2) | Auto: ATF Mercon ULV', capacidade: 'Manual: 2,5 L | Auto: 12,4 L (Total)', intervalo: '100.000 km (Uso severo: 60.000 km)' },
      { sistema: 'Caixa de Transferência (4WD / AWD)', especificacao: 'ATF Mercon LV', capacidade: '1,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-85 Sintético API GL-5', capacidade: 'Tras: 2,4 L | Diant: 1,2 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Motorcraft Yellow / P-OAT (50/50)', capacidade: '12,0 L', intervalo: '100.000 km ou 4 anos' }
    ],
    notas: {
      1: "Nova geração equipada com DPF e SCR (ARLA 32) de fábrica para atender ao Proconve L7/L8. O filtro de óleo abaixo aplica-se ao motor 3.0 V6; o motor 2.0 EcoBlue utiliza elemento refil específico (Ford JB3Z-6731-B / Wega WOE-246).",
      2: "Reservatório de ARLA 32 com bocal dedicado ao lado do bocal de diesel."
    },
    filtros: {
      oleo: { original: 'JL3Z-6731-A', tecfil: 'PEL325', authomix: 'FOL0325', mann: 'HU 6029 z', mahle: 'OX 1280D', wega: 'WOE-245', fram: 'CH12280', vox: 'LE325' },
      ar: { original: 'N1WZ-9601-A', tecfil: 'ARL5156', authomix: 'FAR5156', mann: 'C 24 045', mahle: 'LX 4890', wega: 'FAP-7021', fram: 'CA12890', vox: 'HLP5156' },
      combustivel: { original: 'N1WZ-9155-A', tecfil: 'PEC3055', authomix: 'FCO3055', mann: 'PU 9022 z', mahle: 'KX 580D', wega: 'FCD-2174', fram: 'C12895', vox: 'CE3055' },
      cabine: { original: 'N1WZ-19N619-A', tecfil: 'ACP330', authomix: 'FCA0330', mann: 'CU 23 025', mahle: 'LA 1450', wega: 'AKX-35183', fram: 'CF12899', vox: 'FAC330' }
    }
  }
};
