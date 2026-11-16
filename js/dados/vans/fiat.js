export const vansFiat = {
  'Fiat Ducato 2.3 Multijet (Euro 3 - 2010 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE0481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Car Technyx)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III (Tutela GI/A)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Primeira geração do motor 2.3 Multijet no Brasil (norma Euro 3, sem DPF). Também equipou Citroën Jumper e Peugeot Boxer 2.3 nesse período."
    },
    filtros: {
      oleo: { original: '8094872', tecfil: 'PSL657', authomix: 'FOL0657', mann: 'W 719/27', mahle: 'OC 613', wega: 'WO-420', fram: 'PH966B', vox: 'LB657' },
      ar: { original: '1365070080', tecfil: 'ARS1013', authomix: 'FAR1013', mann: 'C 17 278', mahle: 'LX 1612', wega: 'JFA-0991', fram: 'CA9888', vox: 'HD1013' },
      combustivel: { original: '77362340', tecfil: 'PEC3023', authomix: 'FCO3023', mann: 'PU 723 x', mahle: 'KX 208D', wega: 'FCD-0771', fram: 'C10026', vox: 'CE3023' },
      cabine: { original: '1312764080', tecfil: 'ACP105', authomix: 'FCA0105', mann: 'CU 4442', mahle: 'LA 123', wega: 'AKX-3548', fram: 'CF8890', vox: 'FAC105' }
    }
  },

  'Fiat Ducato 2.3 Multijet (Euro 5 - 2013 a 2017)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AE3481D - 2.3 16V 127 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,9 L (com filtro)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (5 marchas)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Car Technyx)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron II / III (Tutela GI/A)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 15.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Evolução para atender ao Proconve P7 (Euro 5) com válvula EGR e catalisador oxidante, dispensando ARLA 32. Exige óleo 5W-30 norma Fiat 9.55535-S1 (ACEA C2) para evitar carbonização no sistema de recirculação."
    },
    filtros: {
      oleo: { original: '8094872', tecfil: 'PSL657', authomix: 'FOL0657', mann: 'W 719/27', mahle: 'OC 613', wega: 'WO-420', fram: 'PH966B', vox: 'LB657' },
      ar: { original: '1365070080', tecfil: 'ARS1013', authomix: 'FAR1013', mann: 'C 17 278', mahle: 'LX 1612', wega: 'JFA-0991', fram: 'CA9888', vox: 'HD1013' },
      combustivel: { original: '77362340', tecfil: 'PEC3023', authomix: 'FCO3023', mann: 'PU 723 x', mahle: 'KX 208D', wega: 'FCD-0771', fram: 'C10026', vox: 'CE3023' },
      cabine: { original: '1312764080', tecfil: 'ACP105', authomix: 'FCA0105', mann: 'CU 4442', mahle: 'LA 123', wega: 'AKX-3548', fram: 'CF8890', vox: 'FAC105' }
    }
  },

  'Fiat Ducato 2.3 Multijet II (Nova Geração - 2018 a 2023)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (F1AGL411D - 2.3 16V 130/131 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Fiat 9.55535-S1 / ACEA C2) [1]', capacidade: '5,5 L (com filtro) [2]', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Câmbio Manual (6 marchas - M40)', especificacao: 'SAE 75W-80 API GL-4 (Tutela Transmission Technyx)', capacidade: '2,9 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III (Tutela GI/E)', capacidade: '1,2 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Paraflu UP Orgânico (50/50)', capacidade: '9,8 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Nova geração da carroceria com motor recalibrado (130 cv / 131 cv), dotado de DPF (Filtro de Partículas Diesel) e sem uso de ARLA 32 (o ARLA 32 só chegou na troca para o motor 2.2 a partir de 2023/2024).",
      2: "Atenção ao volume do cárter: reduziu de 5,9 L (geração antiga) para 5,5 L nesta versão."
    },
    filtros: {
      oleo: { original: '5801985959', tecfil: 'PSL167', authomix: 'FOL0167', mann: 'W 719/48', mahle: 'OC 1296', wega: 'WO-421', fram: 'PH11457', vox: 'LB167' },
      ar: { original: '7094559', tecfil: 'ARL5147', authomix: 'FAR5147', mann: 'C 18 004', mahle: 'LX 3504', wega: 'WR-315/1', fram: 'CA11663', vox: 'HLP5147' },
      combustivel: { original: '77366607', tecfil: 'PEC3043', authomix: 'FCO3043', mann: 'PU 9007 z', mahle: 'KX 338/26D', wega: 'FCD-0793', fram: 'C11666', vox: 'CE3043' },
      cabine: { original: '68169308AA', tecfil: 'ACP319', authomix: 'FCA0319', mann: 'CU 25 014', mahle: 'LA 926', wega: 'AKX-3550', fram: 'CF11662', vox: 'FAC319' }
    }
  }
};
