export const veiculosUtilitarios = {
  'Toyota Hilux 3.0 - 2013': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor', especificacao: 'SAE 5W-30 ou 15W-40 [1]', capacidade: '7,0 L (com filtro)', intervalo: 'Ver nota [2]' },
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

  'Toyota Hilux 2.8 - Atualizada (Pós-2025 / Proconve L8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (1GD-FTV com SCR)', especificacao: 'SAE 5W-30 (ACEA C2)', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Auto AC60F', especificacao: 'ATF WS (Toyota WS)', capacidade: '9,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-85 API GL-5', capacidade: '3,0 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "As versões mais recentes da Hilux incorporaram o tanque de ARLA 32 (capacidade de aprox. 17 litros) para atender às normas Proconve L8."
    },
    filtros: {
      oleo: { original: '90915YZZD3', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'W 712/83', mahle: 'OC988', wega: 'WOE-473', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1780111130', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 32 011', mahle: 'LX4377', wega: 'FAP-3280', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '233900E020', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '87139YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Ford Ranger 3.2 Duratorq (5 Cilindros)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (P5AT 3.2 Diesel)', especificacao: 'SAE 5W-30 Sintético [1]', capacidade: '9,8 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-90 GL-4 | Auto: Mercon LV', capacidade: 'Manual: ~3,0 L | Auto: Carga total aprox. 10 L', intervalo: '40.000 km (Manual) / Verificação (Auto)' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Tras: ~2,8 L | Diant: ~1,3 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico WSS-M97B44-D (50/50)', capacidade: '11,5 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "Esta geração clássica de 5 cilindros controlava emissões por EGR/DPF, sem utilizar ARLA 32 (presente apenas na nova geração V6/2.0 Bi-Turbo)."
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
      1: "Usa tecnologia EGR/DPF, dispensando o uso de ARLA 32."
    },
    filtros: {
      oleo: { original: 'U2Y014302', tecfil: 'PEL106', authomix: 'FOL0309', mann: 'HU 7002 z', mahle: 'OX339/2D', wega: 'WOE-215', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: 'AB399601AB', tecfil: 'ARL8480', authomix: 'FAR7994', mann: 'C 22 024', mahle: 'LX3511', wega: 'FAP-9006', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: 'AB399155AD', tecfil: 'PSD980', authomix: 'FCO0951', mann: 'PU 9008 z', mahle: 'KX338/26D', wega: 'FCD-0796', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: 'AB3919N619AA', tecfil: 'ACP309', authomix: 'FCA0212', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Chevrolet S10 2.8 Turbo Diesel (2012 em diante)': {
    usaArla32: false, // Depende do ano específico (versões com DPF puro usavam apenas regeneração, mas as mais recentes adaptaram sistemas SCR em algumas configurações)
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V)', especificacao: 'SAE 5W-30 Sintético (Norma GM Dexos 2) [1]', capacidade: '5,7 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-85 GL-4 | Automático: Mobil ATF 3309 / AW-1', capacidade: 'Manual: 2,4 L | Auto: Substituição parcial ~4,0 L', intervalo: '40.000 km (Uso Severo) / 80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Tras: 2,2 L | Diant: 1,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento Long Life Orgânico (50/50)', capacidade: '9,8 L', intervalo: '150.000 km ou 5 anos' }
    ],
    notas: {
      1: "A grande maioria das S10 2.8 no Brasil utilizou o sistema de pós-tratamento focado em DPF sem injeção de ARLA 32 na linha tradicional, dependendo do ano exato de fabricação."
    },
    filtros: {
      oleo: { original: '94748002', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-510', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '52048902', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 24 011', mahle: 'LX3830', wega: 'FAP-4030', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '52046261', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '94774677', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Volkswagen Amarok (V6 com ARLA 32 / 2.0 BiTDI sem ARLA)': {
    usaArla32: true, // Nas versões atualizadas V6 a partir de 2026 / normas recentes
    sistemas: [
      { sistema: 'Motor (3.0 V6 TDI / 2.0 BiTDI)', especificacao: 'SAE 5W-30 Sintético (Norma VW 507 00)', capacidade: '2.0: 7,0 L | 3.0 V6: ~8,0 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Automático (ZF 8HP)', especificacao: 'Óleo ZF Lifeguard8', capacidade: 'Carga total: ~8,5 L a 9,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferenciais e Caixa de Transferência', especificacao: 'SAE 75W-90 API GL-5 / Óleo específico Torsen', capacidade: 'Tras: ~1,2 L | Diant: ~0,8 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo G12evo / G13 Orgânico (50/50)', capacidade: '10,0 L a 11,0 L', intervalo: '60.000 km ou 3 anos' }
    ],
    notas: {
      1: "A partir da linha atualizada (com foco na motorização V6 TDI para atendimento às novas normas de emissões), a Amarok passou a incorporar reservatório e bocal de ARLA 32 junto ao compartimento de combustível."
    },
    filtros: {
      oleo: { original: '03N115562 (2.0) / 059115561 (V6)', tecfil: 'PEL110', authomix: 'FOL0110', mann: 'HU 7020 z', mahle: 'OX787D', wega: 'WOE-310', fram: 'CH11495', vox: 'PEL110' },
      ar: { original: '2H0129620A', tecfil: 'ARL9005', authomix: 'FAR9005', mann: 'C 35 154', mahle: 'LX 2999', wega: 'FAP-4050', fram: 'CA11130', vox: 'FAR9005' },
      combustivel: { original: '2H0127177A', tecfil: 'PSD990', authomix: 'FCO0990', mann: 'PU 825x', mahle: 'KX 372D', wega: 'FCI-1650', fram: 'PS11700', vox: 'PSD990' },
      cabine: { original: '7H0819631', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CUK 2939 (Carvão)', mahle: 'LA 159', wega: 'AKX-1450', fram: 'CF10729', vox: 'FCA0901' }
    }
  },

  'Nissan Frontier 2.3 (Modelos Pós-2023 / Euro 6)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (YS23DDTT com SCR)', especificacao: 'SAE 5W-30 ACEA C3', capacidade: '6,3 L (DDTT)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-80 GL-4 | Auto: ATF Matic Fluid J/S', capacidade: 'Manual: 2,2 L | Auto: 8,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 75W-90 API GL-5', capacidade: '2,1 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant OAT Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "A partir das versões em conformidade com o Proconve L7/L8 (geração a partir de 2023), a Frontier adotou o sistema SCR com injeção de ARLA 32."
    },
    filtros: {
      oleo: { original: '1520800Q0A', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-247', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '165464KV0A', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 21 001', mahle: 'LX4233', wega: 'FAP-9296', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '164004KV0A', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 9009 z KIT', mahle: 'KX387/1D', wega: 'FCD-0796', fram: 'P552008', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: 'CU 10 010-2', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale Marruá (Motor Cummins ISF 2.8)': {
    usaArla32: true, // Versões Euro V equipadas com SCR
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8 Euro V)', especificacao: 'SAE 5W-30 Sintético (Norma CES 20081)', capacidade: '5,5 L a 6,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton FS 4505)', especificacao: 'SAE 75W-90 API GL-4 / GL-5', capacidade: '3,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferenciais (Power Lock)', especificacao: 'SAE 85W-140 API GL-5 EP', capacidade: 'Diant: 1,8 L | Tras: 3,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '10,0 L', intervalo: '40.000 km' }
    ],
    notas: {
      1: "As motorizações Cummins ISF 2.8 em especificação Euro V utilizam sistema de pós-tratamento SCR com ARLA 32."
    },
    filtros: {
      oleo: { original: '6033101213002', tecfil: 'PSL356', authomix: 'FOL356', mann: 'W 940', mahle: 'OC1794', wega: 'WO-150', fram: 'PH356', vox: 'LB356' },
      ar: { original: '6015001014002', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 120', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: '6025001187005', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'WK 815', mahle: 'KC500', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
