export const utilitariosMitsubishi = {
  'Mitsubishi L200 Sport / Outdoor 2.5 (8V - Até 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (2.5 8V - 4D56 Tradicional)', especificacao: 'SAE 15W-40 API CI-4 / CH-4', capacidade: '6,5 L a 7,0 L (com filtro)', intervalo: '5.000 km a 7.500 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-90 GL-4 | Auto: ATF DEXRON III', capacidade: 'Manual: ~2,2 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 85W-140 GL-5 (LSD)', capacidade: 'Diant: 1,2 L | Tras: 2,6 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol (50/50)', capacidade: '8,0 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Linha clássica L200 Sport, Outdoor e Savana com motor 2.5 de 8 válvulas, focada em robustez mecânica e sem eletrônica complexa."
    },
    filtros: {
      oleo: { original: 'MD050318', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 940/25', mahle: 'OC 237', wega: 'WO-120', fram: 'PH8A', vox: 'LB55' },
      ar: { original: 'MR239618', tecfil: 'ARL7001', authomix: 'FAR7001', mann: 'C 24 120', mahle: 'LX 824', wega: 'FAP-7001', fram: 'CA7164', vox: 'FAR7001' },
      combustivel: { original: 'MB220900', tecfil: 'PSD380', authomix: 'FCO0380', mann: 'WK 842/2', mahle: 'KC 19', wega: 'FCD-0740', fram: 'P4102', vox: 'PCD33' },
      cabine: { original: 'Não possui de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },
  
  'Mitsubishi L200 Triton 3.2 (Motores 4M41 - 2012 a 2018)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (3.2 16V - 4M41 Diesel)', especificacao: 'SAE 5W-30 ou 15W-40 API CI-4 / ACEA B4', capacidade: '8,5 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: ATF SP-III', capacidade: 'Manual: 3,4 L | Auto: 8,7 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 85W-140 GL-5 (LSD)', capacidade: 'Diant: 1,2 L | Tras: 3,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Mitsubishi Long Life Coolant (50/50)', capacidade: '8,5 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Versão equipada com o motor 3.2 turbodiesel (4M41), sistema mecânico robusto sem injeção de ARLA 32."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PSL55', authomix: 'FOL0128', mann: 'W 940/25', mahle: 'OC988', wega: 'WO-100', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '7803A004', tecfil: 'ACP301', authomix: 'FCA0301', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Mitsubishi L200 Triton 2.5 (Motores 4D56 HP - 2012 a 2018)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (2.5 16V - 4D56 HP High Power)', especificacao: 'SAE 5W-30 ou 15W-40 API CI-4 / ACEA B4', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: ATF SP-III', capacidade: 'Manual: 3,4 L | Auto: 8,7 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 85W-140 GL-5 (LSD)', capacidade: 'Diant: 1,2 L | Tras: 3,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Mitsubishi Long Life Coolant (50/50)', capacidade: '8,5 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Versão equipada com o tradicional motor 2.5 16V (4D56 HP com turbina de geometria variável), exigindo atenção ao volume menor de óleo do motor (7,0 litros) comparado à irmã 3.2."
    },
    filtros: {
      oleo: { original: 'MD360935', tecfil: 'PSL55', authomix: 'FOL0055', mann: 'W 712/83', mahle: 'OC237', wega: 'WO-120', fram: 'PH2870', vox: 'LB55' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '7803A004', tecfil: 'ACP301', authomix: 'FCA0301', mann: 'CU 19 192', mahle: 'LA 382', wega: 'AKX-1930', fram: 'CF11175', vox: 'FCA0301' }
    }
  },

  'Mitsubishi L200 Triton Sport 2.4 (4N15 - Pós 2016)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (4N15 Diesel 2.4 16V)', especificacao: 'SAE 5W-30 API SN / ACEA C3', capacidade: '8,4 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual / Automático', especificacao: 'Manual: 75W-85 GL-4 | Auto: ATF SP-III / Eco-J3', capacidade: 'Manual: 2,5 L | Auto: 8,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: 75W-90 GL-5 | Tras: 80W-90 API GL-5', capacidade: 'Diant: 1,2 L | Tras: 2,3 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Coolant Orgânico (50/50)', capacidade: '8,5 L', intervalo: '60.000 km' }
    ],
    notas: {
      1: "Motor MIVEC alumínio 2.4 turbodiesel de nova geração com controle de emissões via DPF."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PEL106', authomix: 'FOL0106', mann: 'C 24 011', mahle: 'OC1183', wega: 'WOE-610', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '1500A593', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 15 300', mahle: 'LX2616', wega: 'FAP-4030', fram: 'CA10427', vox: 'FAR8480' },
      combustivel: { original: '1770A225', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'W 9069', mahle: 'KX495D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      cabine: { original: '-', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
