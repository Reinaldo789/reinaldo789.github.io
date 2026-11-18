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
  
  'Mitsubishi L200 Triton 3.2 16V (Motor 4M41 - 2008 a 2016)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (4M41 3.2 Diesel - 165/180 cv)', especificacao: 'SAE 15W-40 ou 10W-30 (API CI-4 / ACEA A3/B4)', capacidade: '8,0 L a 8,3 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas) / Automático (5 marchas - INVECS-II)', especificacao: 'Manual: SAE 75W-85 API GL-4/GL-5 | Auto: ATF SP-III', capacidade: 'Manual: 3,4 L | Auto: 8,7 L (Total)', intervalo: 'Manual: 80.000 km | Auto: 40.000 km' },
      { sistema: 'Caixa de Transferência (Super Select II)', especificacao: 'SAE 75W-85 API GL-4 ou superior', capacidade: '2,5 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: SAE 80W-90 API GL-5 | Tras: SAE 90 API GL-5 (com LSD se equipado)', capacidade: 'Diant: 1,2 L | Tras: 3,2 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '8,5 L a 8,8 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Geração clássica produzida em Catalão (GO). O diferencial traseiro pode vir equipado com sistema de deslizamento limitado (LSD), exigindo óleo compatível."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PSL75', authomix: 'FOL0075', mann: 'W 712/83', mahle: 'OC 574', wega: 'WO-130', fram: 'PH4968', vox: 'LB75' },
      ar: { original: '1500A023', tecfil: 'ARL9602', authomix: 'FAR9602', mann: 'C 27 125', mahle: 'LX 1933', wega: 'FAP-3286', fram: 'CA10345', vox: 'HLP9602' },
      combustivel: { original: '1770A107', tecfil: 'PSC722', authomix: 'FCO0722', mann: 'WK 829/3', mahle: 'KC 101', wega: 'FCD-0750', fram: 'PS10755', vox: 'FBS722' },
      cabine: { original: '7803A004', tecfil: 'ACP304', authomix: 'FCA0304', mann: 'CU 22 003', mahle: 'LA 319', wega: 'AKX-3515', fram: 'CF10346', vox: 'FAC304' }
    }
  },

  'Mitsubishi L200 Triton Sport 2.4 (Motor 4N15 MIVEC - 2016 a 2024)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (4N15 2.4 16V MIVEC Diesel - 190 cv)', especificacao: 'SAE 5W-30 Sintético ou 10W-30 (API CI-4 / CK-4 / ACEA A3/B4) [1]', capacidade: '7,5 L a 8,4 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (6 marchas) / Automático (6 marchas)', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: ATF SP-IV', capacidade: 'Manual: 2,2 L | Auto (Total): ~8,5 L', intervalo: 'Manual: 80.000 km | Auto: 50.000 km' },
      { sistema: 'Caixa de Transferência (Super Select II)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: SAE 80W-90 GL-5 | Tras: SAE 90 ou 85W-140 GL-5', capacidade: 'Diant: 1,2 L | Tras: 2,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '9,0 L', intervalo: '40.000 km ou 2 anos' }
    ],
    notas: {
      1: "Quinta geração (Triton Sport) com bloco de alumínio e comando variável MIVEC. Direção hidráulica e tração Super Select II com seletor eletrônico."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PSL75', authomix: 'FOL0075', mann: 'W 712/83', mahle: 'OC 574', wega: 'WO-130', fram: 'PH4968', vox: 'LB75' },
      ar: { original: '1500A607', tecfil: 'ARL9605', authomix: 'FAR9605', mann: 'C 27 024', mahle: 'LX 3850', wega: 'FAP-3298', fram: 'CA11840', vox: 'HLP9605' },
      combustivel: { original: '1770A337', tecfil: 'PSC730', authomix: 'FCO0730', mann: 'WK 829/4', mahle: 'KC 200', wega: 'FCD-0785', fram: 'PS11700', vox: 'FBS730' },
      cabine: { original: '7803A125', tecfil: 'ACP315', authomix: 'FCA0315', mann: 'CU 24 011', mahle: 'LA 820', wega: 'AKX-3522', fram: 'CF11841', vox: 'FAC315' }
    }
  },

  'Mitsubishi Triton 2.4 Bi-Turbo (Motor 4N16 - 2025 a 2026+)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (4N16 2.4 16V Bi-Turbo Diesel - 205 cv)', especificacao: 'SAE 5W-30 Sintético (Norma ACEA C4 / JASO DL-1) [1]', capacidade: '7,3 L a 8,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (6 marchas) / Automático (6 marchas)', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: ATF E-SP IV / SP-IV', capacidade: 'Manual: 2,2 L | Auto (Total): ~8,5 L', intervalo: 'Manual: 80.000 km | Auto: Inspeção periódica' },
      { sistema: 'Caixa de Transferência (Super Select II)', especificacao: 'SAE 75W-85 API GL-4', capacidade: '2,4 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Dianteiro / Traseiro', especificacao: 'Diant: SAE 80W-90 GL-5 | Tras: SAE 85W-140 API GL-5', capacidade: 'Diant: 1,2 L | Tras: 2,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '9,2 L', intervalo: '5 anos ou 100.000 km' }
    ],
    notas: {
      1: "Nova geração global da picape (batizada oficialmente apenas como 'Triton'). Adota novo motor 4N16 Bi-Turbo de 205 cv, direção 100% elétrica, chassi reforçado e exige estritamente óleos Low SAPS norma **ACEA C4** ou **JASO DL-1** para preservação dos sistemas de emissões."
    },
    filtros: {
      oleo: { original: '1230A186', tecfil: 'PSL75', authomix: 'FOL0075', mann: 'W 712/83', mahle: 'OC 574', wega: 'WO-130', fram: 'PH4968', vox: 'LB75' },
      ar: { original: '1500A607', tecfil: 'ARL9605', authomix: 'FAR9605', mann: 'C 27 024', mahle: 'LX 3850', wega: 'FAP-3298', fram: 'CA11840', vox: 'HLP9605' },
      combustivel: { original: '1770A380', tecfil: 'PSC740', authomix: 'FCO0740', mann: 'WK 829/5', mahle: 'KC 210', wega: 'FCD-0790', fram: 'PS12000', vox: 'FBS740' },
      cabine: { original: '7803A125', tecfil: 'ACP315', authomix: 'FCA0315', mann: 'CU 24 011', mahle: 'LA 820', wega: 'AKX-3522', fram: 'CF11841', vox: 'FAC315' }
    }
  }
};
