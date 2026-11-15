export const veiculosUtilitarios = {
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
  },

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
  },

  'Chevrolet S10 2.8 Turbo Diesel (2012 em diante)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Duramax 2.8 16V)', especificacao: 'SAE 5W-30 Sintético (Norma GM Dexos 2) [1]', capacidade: '5,7 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-85 GL-4 | Automático: Mobil ATF 3309 / AW-1', capacidade: 'Manual: 2,4 L | Auto: Substituição parcial ~4,0 L', intervalo: '40.000 km (Uso Severo) / 80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Tras: 2,2 L | Diant: 1,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Líquido de Arrefecimento Long Life Orgânico (50/50)', capacidade: '9,8 L', intervalo: '150.000 km ou 5 anos' }
    ],
    notas: {
      1: "Utiliza sistema com DPF sem injeção de ARLA 32 na linha padrão."
    },
    filtros: {
      oleo: { original: '94748002', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'HU 6011 z', mahle: 'OX968D', wega: 'WOE-510', fram: 'CH10656', vox: 'PEL106' },
      ar: { original: '52048902', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 24 011', mahle: 'LX3830', wega: 'FAP-4030', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '52046261', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '94774677', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 24 006', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Mitsubishi L200 Triton 3.2 / 2.5 (2012 a 2018)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (3.2 4M41 / 2.5 4D56 HP)', especificacao: 'SAE 5W-30 ou 15W-40 API CI-4 / ACEA B4', capacidade: '3.2: 8,5 L | 2.5: 7,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: ATF SP-III', capacidade: 'Manual: 3,4 L | Auto: 8,7 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 85W-140 GL-5 (LSD)', capacidade: 'Diant: 1,2 L | Tras: 3,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Mitsubishi Long Life Coolant (50/50)', capacidade: '8,5 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Geração clássica sem uso de ARLA 32."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PSL55', authomix: 'FOL0128', mann: 'W 940/25', mahle: 'OC988', wega: 'WO-100', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '7803A004', tecfil: 'ACP301', authomix: 'FCA0301', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Mitsubishi L200 Triton Sport 2.4 (4N15 - Pós 2016)': {
    usaArla32: false, // Em sua grande maioria utiliza apenas DPF/EGR sem tanque SCR dedicado nas versões convencionais do período
    sistemas: [
      { sistema: 'Motor (4N15 Diesel 2.4 16V)', especificacao: 'SAE 5W-30 API SN / ACEA C3', capacidade: '8,4 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-85 GL-4 | Auto: ATF SP-III / Eco-J3', capacidade: 'Manual: 2,5 L | Auto: 8,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 80W-90 API GL-5', capacidade: 'Diant: 1,2 L | Tras: 2,3 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico (50/50)', capacidade: '8,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor MIVEC alumínio 2.4 turbodiesel com controle de emissões via DPF."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'C 24 011', mahle: 'OC1183', wega: 'WOE-610', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Marruá MWM Sprint 2.8 Euro III)': {
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

  'Marruá Cummins ISF 2.8 - Euro V)': {
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
