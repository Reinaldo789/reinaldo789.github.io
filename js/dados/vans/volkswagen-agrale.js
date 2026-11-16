export const vansVWAgrale = {
  'Volkswagen / MAN Chassis para Ônibus (Linha Volksbus - Ex: 15.190 / 17.230 / 17.260)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (MAN D08 34 / Cummins ISB 4.5 e 6.7)', especificacao: 'SAE 15W-40 CI-4 ou 10W-40 Semissintético', capacidade: '15,0 L a 20,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ZF / Eaton)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '8,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '13,0 L a 16,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '30,0 L a 45,0 L', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Motores equipados com tecnologia EGR (em versões específicas iniciais) ou SCR (com uso obrigatório de ARLA 32 nas especificações Euro V e Euro 6)."
    },
    filtros: {
      oleo: { original: '2R0115561', tecfil: 'PSL900', authomix: 'FOL0900', mann: 'W 11 102/2', mahle: 'OC 396', wega: 'WO-210', fram: 'PH9333', vox: 'PSL900' },
      ar: { original: '2R0129620', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 30 850', mahle: 'LX 1680', wega: 'FAP-5012', fram: 'CA10291', vox: 'FAR9012' },
      combustivel: { original: '2R0127177', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: 'Não aplicável de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Chassi para Micro-ônibus e Ônibus Leves (Linha MA / MT)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8 / 4.5 Euro V / Euro 6)', especificacao: 'SAE 15W-40 CI-4 ou 5W-30 Sintético', capacidade: '10,0 L a 15,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO / ZF)', especificacao: 'SAE 75W-90 GL-4 / 85W-90 GL-5', capacidade: '4,0 L a 6,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L a 6,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '22,0 L a 30,0 L', intervalo: '40.000 km ou 1 ano' }
    ],
    notas: {
      1: "Utiliza motores Cummins com sistema SCR e tanque dedicado de ARLA 32."
    },
    filtros: {
      oleo: { original: '4897834', tecfil: 'PSL900', authomix: 'FOL0900', mann: 'W 11 102/2', mahle: 'OC 396', wega: 'WO-210', fram: 'PH9333', vox: 'PSL900' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'FAR9012' },
      combustivel: { original: '5265411', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'WK 1060/3x', mahle: 'KC 100', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
