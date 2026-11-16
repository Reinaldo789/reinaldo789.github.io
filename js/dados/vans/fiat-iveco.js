export const vansFiatIveco = {
  'Fiat Ducato / Peugeot Boxer / Citroën Jumper 2.3 Multijet': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (F1AE0481N / F1C 2.3 16V)', especificacao: 'SAE 5W-30 Sintético (Norma Fiat 9.55535-S1)', capacidade: '6,5 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ML6C)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu Up / Aditivo Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Modelos atualizados para atendimento às fases modernas de emissões incorporam SCR com ARLA 32."
    },
    filtros: {
      oleo: { original: '504098492', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '1348888080', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 30 130', mahle: 'LX 1739', wega: 'FAP-3013', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '77366365', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 338/26D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '1327174080', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 28 42', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Iveco Daily 3.0 (F1C - Furgões, Chassi-Cabine e Minibus)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (F1C 3.0 16V Euro V / Euro 6)', especificacao: 'SAE 5W-30 Sintético (Norma Iveco 18-1811 Cl. S1)', capacidade: '7,1 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ZF 6S) / Hi-Matic Auto', especificacao: 'Manual: 75W-80 GL-4 | Auto: ZF Lifeguard8', capacidade: 'Manual: ~2,8 L | Auto: ~8,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-90 API GL-5', capacidade: '2,4 L a 3,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '12,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Utiliza sistema SCR integrado com tanque e bocal de ARLA 32."
    },
    filtros: {
      oleo: { original: '5801382455', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 711/5 x', mahle: 'OX 386D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: '5801391307', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 27 132', mahle: 'LX 3185', wega: 'FAP-4050', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: '5801595187', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 823 x', mahle: 'KC 28D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '5801391295', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CU 27 004', mahle: 'LA 306', wega: 'AKX-1450', fram: 'CF10729', vox: 'FAR9005' }
    }
  }
};