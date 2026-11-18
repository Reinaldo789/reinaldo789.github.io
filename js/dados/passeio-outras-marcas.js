export const passeioOutrasMarcas = {
  'Nissan Sentra': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', capacidade: '7,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SN ou superior.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'W 67/3', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967', vox: 'LB158' },
      ar: { original: '16546ED000', tecfil: 'ARL1655', authomix: 'FAR1655', mann: 'C 2329', mahle: 'LX1983', wega: 'FAP-9030', fram: 'CA10226', vox: 'FAR1655' },
      combustivel: { original: 'Tanque', tecfil: '-', authomix: null, mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '27277EN000', tecfil: 'ACP310', authomix: 'FCA0310', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF10786', vox: 'FCA0310' }
    }
  },

  'Nissan Versa 1.6': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '4,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT', especificacao: 'NS-3 Fluid', capacidade: '6,9 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Óleo sintético API SN ou superior.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '1520865F0A', tecfil: 'PSL158', authomix: 'FOL0158', mann: 'W 66/1', mahle: 'OC1052', wega: 'WO-150', fram: 'PH4967', vox: 'LB158' },
      ar: { original: '165461KA0A', tecfil: 'ARL1656', authomix: 'FAR1656', mann: 'C 2329', mahle: 'LX3549', wega: 'FAP-9030', fram: 'CA11123', vox: 'FAR1656' },
      combustivel: { original: 'Tanque', tecfil: '-', authomix: null, mann: 'WK 58/3', mahle: 'KL583', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '272771KA0A', tecfil: 'ACP312', authomix: 'FCA0312', mann: 'CU 22 011', mahle: 'LA 452', wega: 'AKX-3512', fram: 'CF11784', vox: 'FCA0312' }
    }
  },

  'Peugeot 408 1.6 THP': {
    sistemas: [
      { sistema: 'Motor (1.6 Turbo THP)', especificacao: 'SAE 5W-30 (Norma PSA B71 2290 / 2312) [1]', capacidade: '4,25 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automático', especificacao: 'ATF AW-1', capacidade: '7,0 L', intervalo: '60.000 km (Inspeção)' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '6,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Obrigatório o uso de óleo sintético de alta qualidade com aprovação PSA B71 2290 para proteger o turbocompressor e evitar acumulação de borra na injeção direta.",
      2: "Uso normal (rodovia): 10.000 km ou 1 ano. Uso severo (trânsito urbano pesado / percursos curtos frequentes): Reduzir estritamente para 5.000 km ou 6 meses."
    },
    filtros: {
      oleo: { original: '1109AY', tecfil: 'PEL674', authomix: 'FOL0674', mann: 'HU 711/51 x', mahle: 'OX339/2D', wega: 'WOE-710', fram: 'CH9641', vox: 'PEL674' },
      ar: { original: '1444RJ', tecfil: 'ARL5047', authomix: 'FAR5047', mann: 'C 42 010', mahle: 'LX2681', wega: 'FAP-9295', fram: 'CA11050', vox: 'FAR5047' },
      combustivel: { original: '156794', tecfil: 'GI50/7', authomix: 'FCO0507', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1030', vox: 'FC00047' },
      cabine: { original: '6447XF', tecfil: 'ACP305', authomix: 'FCA0305', mann: 'CU 2940', mahle: 'LA 56', wega: 'AKX-1991', fram: 'CF10549', vox: 'FCA0305' }
    }
  },

  'Toyota Corolla 2.0': {
    sistemas: [
      { sistema: 'Motor (Dynamic Force / Dual VVT-i)', especificacao: 'SAE 0W-20 ou 5W-30 (API SP / ILSAC GF-6) [1]', capacidade: '4,2 L a 4,4 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio CVT (Direct Shift-CVT / K120)', especificacao: 'Toyota Genuine CVT Fluid TC / FE', capacidade: '8,8 L (total) / ~4,0 L (troca por gravidade)', intervalo: '40.000 km ou 4 anos (severo) / 80.000 km (normal)' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (SLLC) Orgânico (50/50)', capacidade: '6,5 L', intervalo: '80.000 km (primeira troca) e depois a cada 40.000 km' }
    ],
    notas: {
      1: "Para máxima eficiência e economia de combustível recomendada pela fabricante, utilizar SAE 0W-20 API SP. Viscosidade SAE 5W-30 aceita em uso severo ou alta quilometragem.",
      2: "Intervalo oficial de troca de óleo do motor: 10.000 km ou 1 ano, o que ocorrer primeiro. Reduzir para 5.000 km em caso de uso severo (trânsito urbano pesado constante)."
    },
    filtros: {
      oleo: { original: '04152-YZZA6', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 6008 z', mahle: 'OX 415D', wega: 'WOE-610', fram: 'CH10955', vox: 'PEL106' },
      ar: { original: '17801-0V030', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 27 024', mahle: 'LX 3911', wega: 'FAP-3280', fram: 'CA12055', vox: 'FAR8480' },
      combustivel: { original: 'Tanque / Elemento interno', tecfil: '-', authomix: null, mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' },
      cabine: { original: '87139-YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Renault Logan - Sandero': {
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-40 ou 10W-40 [1]', capacidade: '4,8 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-80 API GL-4', capacidade: '2,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '5,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "API SL ou superior, preferencialmente sintético ou semissintético conforme recomendação Renault.",
      2: "10.000 km (Normal) / 5.000 km (Severo)."
    },
    filtros: {
      oleo: { original: '8200768913', tecfil: 'PSL51', authomix: 'FOL0051', mann: 'W 75/2', mahle: 'OC467', wega: 'WO-120', fram: 'PH5796', vox: 'LB51' },
      ar: { original: '165467674R', tecfil: 'ARL9010', authomix: 'FAR9010', mann: 'C 27 030', mahle: 'LX1066', wega: 'FAP-9010', fram: 'CA11036', vox: 'FAR9010' },
      combustivel: { original: '6001548810', tecfil: 'GI04/7', authomix: 'FCO0047', mann: 'WK 58/3', mahle: 'KL583', wega: 'FCI-1630', fram: 'G1025', vox: 'FC00047' },
      cabine: { original: '272773229R', tecfil: 'ACP928', authomix: 'FCA0928', mann: 'CU 22 019/2', mahle: 'LA 182', wega: 'AKX-1120', fram: 'CF10366', vox: 'FCA928' }
    }
  }
};