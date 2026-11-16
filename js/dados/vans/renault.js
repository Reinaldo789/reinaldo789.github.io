export const vansRenault = {
  'Renault Master 2.3 dCi (Pós-2013)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (M9T 2.3 Bi-Turbo)', especificacao: 'SAE 5W-30 Sintético (Norma RN0720 - C4)', capacidade: '8,5 L (com filtro)', intervalo: '15.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (PF6)', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico Tipo D (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Exige óleo com especificação ACEA C4 para preservação do sistema de pós-tratamento."
    },
    filtros: {
      oleo: { original: '152095874R', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '1654600Q1H', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 27 030', mahle: 'LX 3185', wega: 'FAP-9296', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '164005934R', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 730/1 x', mahle: 'KX 338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '272779339R', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 22 011', mahle: 'LA 415', wega: 'AKX-1999', fram: 'CF10729', vox: 'FAR8480' }
    }
  }
};