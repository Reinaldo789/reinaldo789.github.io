export const utilitariosFord = {
  'Ford Ranger 3.2 Duratorq (5 Cilindros)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (P5AT 3.2 Diesel)', especificacao: 'SAE 5W-30 Sintético [1]', capacidade: '9,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-90 GL-4 | Auto: Mercon LV', capacidade: 'Manual: ~3,0 L | Auto: Carga total aprox. 10 L', intervalo: '40.000 km (Manual) / Verificação (Auto)' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 85W-90 API GL-5', capacidade: 'Tras: ~2,8 L | Diant: ~1,3 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico WSS-M97B44-D (50/50)', capacidade: '11,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Norma Ford WSS-M2C913-D. Sistema sem ARLA 32."
    },
    filtros: {
      oleo: { original: 'BB3Q6744BA', tecfil: 'PEL106', authomix: 'FOL0309', mann: 'HU 7002 z', mahle: 'OX339/2D', wega: 'WOE-215', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', authomix: 'FAR7994', mann: 'C 22 024', mahle: 'LX3511', wega: 'FAP-9006', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', authomix: 'FCO0951', mann: 'PU 9008 z', mahle: 'KX338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: 'AB3919N619AA', tecfil: 'ACP309', authomix: 'FCA0212', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Ford Ranger 2.2': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duratorq)', especificacao: 'SAE 5W-30 API SN [1]', capacidade: '9,5 L', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual', especificacao: 'SAE 75W-90 API GL-4', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 80W-90 API GL-5', capacidade: '2,9 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '10,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Norma Ford WSS-M2C913-D. Sistema sem ARLA 32."
    },
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', authomix: 'FOL0309', mann: 'HU 7002 z', mahle: 'OX339/2D', wega: 'WOE-215', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', authomix: 'FAR7994', mann: 'C 22 024', mahle: 'LX3511', wega: 'FAP-9006', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', authomix: 'FCO0951', mann: 'PU 9008 z', mahle: 'KX338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: 'AB3919N619AA', tecfil: 'ACP309', authomix: 'FCA0212', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  }
};