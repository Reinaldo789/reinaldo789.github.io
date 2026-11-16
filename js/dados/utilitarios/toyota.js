export const utilitariosToyota = {
  'Toyota Hilux 3.0 - 2013': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (1KD-FTV 3.0)', especificacao: 'SAE 5W-30 ou 15W-40 [1]', capacidade: '7,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Transferência', especificacao: 'SAE 75W-90 GL-4 / GL-5', capacidade: 'Câmbio: 2,2 L | Transferência: 1,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5 [3]', capacidade: '3,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life (50/50)', capacidade: '10,2 L', intervalo: '40.000 km' }
    ],
    notas: {
      1: "Uso normal/rodovia: SAE 5W-30 Sintético (API CI-4/ACEA B4). Uso severo/poeira excessiva/trilha: SAE 15W-40.",
      2: "Intervalo de troca: 10.000 km em rodovia; Reduzir para 5.000 km ou 3 meses em uso severo, estradas de terra ou reboque pesado.",
      3: "Se o veículo possuir bloqueio de diferencial traseiro original (LSD), certifique-se de utilizar óleo compatível com sistemas de deslizamento limitado."
    },
    filtros: {
      oleo: { original: '90915YZZD2', tecfil: 'PSL55', authomix: 'FOL0128', mann: 'W 712/83', mahle: 'OC988', wega: 'WO-100', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '178010L040', tecfil: 'ARL4125', authomix: 'FAR7060', mann: 'C 32 011', mahle: 'LX1618', wega: 'FAP-3280', fram: 'CA8286', vox: 'FAR4125' },
      combustivel: { original: '233900L010', tecfil: 'PSD470', authomix: 'FCO0949', mann: 'WK 816 x', mahle: 'KX265D', wega: 'FCI-1630', fram: 'PS926', vox: 'PSD470' },
      cabine: { original: '87139YZZ01', tecfil: 'ACP301', authomix: 'FCA0887', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Toyota Hilux 2.8 (2016 a 2024)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (1GD-FTV 2.8)', especificacao: 'SAE 5W-30 Sintético (ACEA C2 / C3) [1]', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático (AC60F)', especificacao: 'Manual: 75W-85 GL-4 | Auto: ATF WS (Toyota WS)', capacidade: 'Manual: 2,2 L | Auto: 9,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-85 API GL-5', capacidade: 'Tras: 3,0 L | Diant: 1,6 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "Geração equipada com motor 2.8 16V que utiliza DPF e EGR, dispensando o uso de ARLA 32 nesta faixa de anos."
    },
    filtros: {
      oleo: { original: '90915YZZD3', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'W 712/83', mahle: 'OC988', wega: 'WOE-473', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1780111130', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 32 011', mahle: 'LX4377', wega: 'FAP-3280', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '87139YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Toyota Hilux 2.8 - Atualizada (Pós-2025 / Proconve L8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (1GD-FTV com SCR)', especificacao: 'SAE 5W-30 (ACEA C2)', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Auto AC60F', especificacao: 'ATF WS (Toyota WS)', capacidade: '9,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-85 API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "Adotou o sistema SCR com tanque de ARLA 32 para atendimento às normas Proconve L8."
    },
    filtros: {
      oleo: { original: '90915YZZD3', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'W 712/83', mahle: 'OC988', wega: 'WOE-473', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1780111130', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 32 011', mahle: 'LX4377', wega: 'FAP-3280', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '87139YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  }
};