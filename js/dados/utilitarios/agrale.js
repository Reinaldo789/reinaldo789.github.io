export const utilitariosAgrale = {
  'Agrale Marruá MWM Sprint 2.8 Euro III': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 2.8)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '7,0 L (com filtro)', intervalo: '5.000 km a 7.500 km (Uso severo/trilha)' },
      { sistema: 'Câmbio Manual (Eaton FS 2305)', especificacao: 'SAE 75W-90 API GL-4 / GL-5', capacidade: '2,8 L', intervalo: '40.000 km' },
      { sistema: 'Caixa de Transferência', especificacao: 'SAE 85W-140 API GL-5', capacidade: '0,6 L', intervalo: '40.000 km' },
      { sistema: 'Diferenciais (Dana com Power Lock)', especificacao: 'SAE 85W-140 API GL-5 EP', capacidade: 'Diant: 1,8 L | Tras: 3,8 L', intervalo: '40.000 km (Troca imediata se houver imersão em água)' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol (50/50)', capacidade: '10,0 L', intervalo: '20.000 km ou 1 ano' }
    ],
    notas: {
      1: "Veículo utilitário rústico 4x4 (civil e militar) com mecânica MWM Sprint mecânica/eletrônica inicial, sem eletrônica complexa e sem ARLA 32."
    },
    filtros: {
      oleo: { original: '9.094.0.122.001.0', tecfil: 'PSL39', authomix: 'FOL0039', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB39' },
      ar: { original: '6015001014002', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 120', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '9.094.0.352.001.0', tecfil: 'PEC30', authomix: 'FCO0030', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PCD33' },
      cabine: { original: 'Não possui', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Marruá Cummins ISF 2.8 - Euro V': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8 Euro V)', especificacao: 'SAE 5W-30 Sintético (Norma CES 20081)', capacidade: '5,5 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton FS 4505)', especificacao: 'SAE 75W-90 API GL-4 / GL-5', capacidade: '3,5 L', intervalo: '40.000 km' },
      { sistema: 'Caixa de Transferência / Reduzida', especificacao: 'SAE 85W-140 API GL-5', capacidade: '0,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferenciais (Power Lock)', especificacao: 'SAE 85W-140 API GL-5 EP', capacidade: 'Diant: 1,8 L | Tras: 3,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '10,0 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Versões equipadas com motor Cummins ISF 2.8 eletrônico e tecnologia SCR, exigindo uso obrigatório de ARLA 32."
    },
    filtros: {
      oleo: { original: '6033101213002', tecfil: 'PSL356', authomix: 'FOL356', mann: 'W 940', mahle: 'OC1794', wega: 'WO-150', fram: 'PH356', vox: 'LB356' },
      ar: { original: '6015001014002', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 120', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '6025001187005', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 815', mahle: 'KC500', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: 'Não aplicável de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};