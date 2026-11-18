export const vansVwAgrale = {
  'Volkswagen Volksbus 18.320 EOT (Chassi Rodoviário / Turismo - Motor Cummins ISC)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISC 8.3L - 6 cilindros - 320 cv)', especificacao: 'SAE 15W-40 CI-4/CK-4 (CES 20081)', capacidade: '22,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (ZF 6 marchas sincronizadas)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '9,2 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor MS 23-158)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '32,0 L a 35,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Chassi rodoviário equipado com motor Cummins ISC de 6 cilindros e sistema de injeção de alta pressão Common Rail. Não utiliza ARLA 32 nas versões Euro III (EOT clássico). Atenção redobrada à troca dos elementos do filtro de combustível separador de água."
    },
    filtros: {
      oleo: { original: '2R0115561B', tecfil: 'PSL909', authomix: 'FOL0909', mann: 'WP 12121', mahle: 'OC 1176', wega: 'WO-240', fram: 'PH1000', vox: 'PSL909' },
      ar: { original: '2T0129620', tecfil: 'ARL8895', authomix: 'FAR8895', mann: 'C 30 1500', mahle: 'LX 2150', wega: 'FAP-4080', fram: 'CA10420', vox: 'ARL8895' },
      combustivel: { original: '2R0127177A', tecfil: 'PSC76', authomix: 'FCO0076', mann: 'WK 954/1 x', mahle: 'KC 28', wega: 'FCI-1630', fram: 'PS10700', vox: 'PSC76' },
      cabine: { original: 'Não aplicável de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Volkswagen Volksbus 15.190 EOD (Chassi Urbano / Fretamento / Escolar - Motor MWM 4.12 TCE / X10)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM 4.12 TCE / Série 10 - 4.7L - 4 cilindros)', especificacao: 'SAE 15W-40 API CI-4 / CH-4 (Mineral ou Semissintético)', capacidade: '9,3 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '9,2 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '21,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico / Etilenoglicol (50/50)', capacidade: '25,0 L', intervalo: '1 ano ou 40.000 km' }
    ],
    notas: {
      1: "Chassi equipado com o consagrado motor MWM da linha X10 eletrônica (4.12 TCE). Possui excelente torque em baixas rotações e alta durabilidade em frotas urbanas e rurais. Não utiliza ARLA 32."
    },
    filtros: {
      oleo: { original: '90520000030', tecfil: 'PSL339', authomix: 'FOL339', mann: 'W 962', mahle: 'OC 60', wega: 'WO-200', fram: 'PH2801B', vox: 'PSL339' },
      ar: { original: '2T0129620', tecfil: 'ARL8891', authomix: 'FAR8891', mann: 'C 24 650/1', mahle: 'LX 1560', wega: 'FAP-4030', fram: 'CA9920', vox: 'ARL8891' },
      combustivel: { original: '2U0127177', tecfil: 'PSC71', authomix: 'FCO0071', mann: 'WK 842/2', mahle: 'KC 18', wega: 'FCI-1620', fram: 'P926', vox: 'PSC71' },
      cabine: { original: 'Não aplicável de fábrica', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale MA 8.7 4x4 (Chassi Micro-ônibus Off-Road / Severo / Escolar e Rural)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8L Eletrônico - Euro V / VI)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 5W-30 Sintético (Low SAPS)', capacidade: '9,5 L (com filtro)', intervalo: '10.000 km a 20.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505)', especificacao: 'SAE 75W-80 Sintético API GL-4', capacidade: '2,8 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência / Tração 4x4', especificacao: 'SAE 80W-90 API GL-5', capacidade: '2,5 L', intervalo: '40.000 km' },
      { sistema: 'Diferenciais Dianteiro e Traseiro (Dana com Redução)', especificacao: 'SAE 85W-140 API GL-5', capacidade: 'Dianteiro: 2,2 L | Traseiro: 2,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '14,0 L', intervalo: '1 ano ou 40.000 km' }
    ],
    notas: {
      1: "Chassi com tração nas quatro rodas 4x4, indicado para terrenos severos e rotas rurais ou escolares de difícil acesso. Exige verificação periódica dos diferenciais e caixa de transferência."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA', tecfil: 'PEL107', authomix: 'FOL0107', mann: 'HU 719/2 x', mahle: 'OX 373D', wega: 'WOE-320', fram: 'CH11080', vox: 'PEL107' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'ARL9012' },
      combustivel: { original: 'BG5X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 220D', wega: 'FCI-1610', fram: 'PS11650', vox: 'PSD980' },
      cabine: { original: 'Não aplicável', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale MA 8.7 (Chassi Micro-ônibus - Urbano, Fretamento e Escolar)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8L Eletrônico - Euro V / VI)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 5W-30 Sintético (Low SAPS)', capacidade: '9,5 L (com filtro)', intervalo: '10.000 km a 20.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505)', especificacao: 'SAE 75W-80 Sintético API GL-4', capacidade: '2,8 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Dana)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '2,8 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '13,0 L', intervalo: '1 ano ou 40.000 km' }
    ],
    notas: {
      1: "Modelo versátil para transporte urbano, fretamento e escolar, combinando chassi reforçado e motorização Cummins de alta eficiência com sistema SCR (Arla 32)."
    },
    filtros: {
      oleo: { original: 'BG5X6714AA', tecfil: 'PEL107', authomix: 'FOL0107', mann: 'HU 719/2 x', mahle: 'OX 373D', wega: 'WOE-320', fram: 'CH11080', vox: 'PEL107' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'ARL9012' },
      combustivel: { original: 'BG5X9155AA', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 220D', wega: 'FCI-1610', fram: 'PS11650', vox: 'PSD980' },
      cabine: { original: 'Não aplicável', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale MA 9.2 (Chassi Micro-ônibus - Fretamento, Turismo e Urbano)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8L / 4.5L - Euro V / VI)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 5W-30 Sintético (Low SAPS)', capacidade: '10,0 L (com filtro)', intervalo: '10.000 km a 20.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO / ZF)', especificacao: 'SAE 75W-90 GL-4 / 85W-90 GL-5', capacidade: '3,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial Traseiro (Dana)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '3,2 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '15,0 L', intervalo: '1 ano ou 40.000 km' }
    ],
    notas: {
      1: "Destacado por sua força, economia e conforto para aplicações de fretamento, turismo e urbano. Plataforma robusta com grande capacidade de carga e encarroçamento."
    },
    filtros: {
      oleo: { original: '4897834', tecfil: 'PEL107', authomix: 'FOL0107', mann: 'HU 719/2 x', mahle: 'OX 373D', wega: 'WOE-320', fram: 'CH11080', vox: 'PEL107' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'ARL9012' },
      combustivel: { original: '5265411', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 220D', wega: 'FCI-1610', fram: 'PS11650', vox: 'PSD980' },
      cabine: { original: 'Não aplicável', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  },

  'Agrale MA 10.0 (Chassi Midi-ônibus - Urbano, Escolar e Fretamento)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8L / 4.5L - Euro V / VI)', especificacao: 'SAE 15W-40 CI-4/CK-4 ou 5W-30 Sintético (Low SAPS)', capacidade: '11,0 L (com filtro)', intervalo: '10.000 km a 20.000 km' },
      { sistema: 'Câmbio Manual (Eaton FSO-6406)', especificacao: 'SAE 75W-90 Sintético API GL-4', capacidade: '4,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor / Dana)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Etilenoglicol Orgânico (50/50)', capacidade: '18,0 L', intervalo: '1 ano ou 60.000 km' }
    ],
    notas: {
      1: "Oferece excelente dirigibilidade, flexibilidade de encarroçamento e baixo custo operacional. Indicado para operações de média e alta demanda em centros urbanos e rotas rodoviárias de curta distância."
    },
    filtros: {
      oleo: { original: '4897834', tecfil: 'PEL107', authomix: 'FOL0107', mann: 'HU 719/2 x', mahle: 'OX 373D', wega: 'WOE-320', fram: 'CH11080', vox: 'PEL107' },
      ar: { original: '6006005012003', tecfil: 'ARL9012', authomix: 'FAR9012', mann: 'C 25 140', mahle: 'LX 2020', wega: 'FAP-5012', fram: 'CA10291', vox: 'ARL9012' },
      combustivel: { original: '5265411', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 823 x', mahle: 'KX 220D', wega: 'FCI-1610', fram: 'PS11650', vox: 'PSD980' },
      cabine: { original: 'Não aplicável', tecfil: '-', authomix: '-', mann: '-', mahle: '-', wega: '-', fram: '-', vox: '-' }
    }
  }
};
