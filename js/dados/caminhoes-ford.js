export const caminhoesFord = {
  'Ford Cargo 816 / 1119 (Leves e Médios - Euro 5)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 3.8 / ISB 4.5 - SCR)', especificacao: 'SAE 15W-40 API CJ-4 / CK-4 (Low SAPS)', capacidade: '11,0 L a 13,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 / FSO-4405)', especificacao: 'SAE 75W-90 API GL-4', capacidade: '3,8 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '4,5 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '18,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Urbano severo (entregas): 10.000 km ou 250 horas. Máximo: 12 meses. Sistema Euro 5 com pós-tratamento SCR (exige Arla 32)."
    },
    filtros: {
      oleo: 'PSL283',
      ar: 'ARS9839',
      arSecundario: 'ASR839',
      combustivel: 'PSC75',
      sedimentador: 'PSD470/1 / PSD960/1'
    }
  },

  'Ford Cargo 1317 / 1517 / 1722 / 2422 / 2622 (Euro 3)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISBe 3.9/5.9 / Série C 8.3)', especificacao: 'SAE 15W-40 API CI-4', capacidade: '14,0 L a 20,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4', capacidade: '7,0 L a 9,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico (50/50)', capacidade: '26,0 L a 30,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Urbano/Misto: 10.000 km. Severo (terra/obra): 7.500 km ou 250 horas. Máximo: 12 meses. Modelos ISBe (1317e/1517e) usam filtro de óleo PSL283; modelos Série C 8.3 (1722e/2422e/2622e) usam PSL909."
    },
    filtros: {
      oleo: 'PSL283 / PSL909',
      ar: 'ARS9839',
      arSecundario: 'ASR839',
      combustivel: 'PSC75 / PSC76',
      sedimentador: { tecfil: 'PSD470/1 / PSD920/1', authomix: 'FSE4701', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2203', fram: 'PS8048', vox: 'FBS470/1' }
    }
  },

  'Ford Cargo 1622 / 2425 / 2630 / 4030 (Série C - Mecânico)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins 6CT / 6CTAA 8.3)', especificacao: 'SAE 15W-40 API CI-4 / CH-4', capacidade: '20,0 L a 24,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton RT-8908LL / FS-6306)', especificacao: 'SAE 80W-90 API GL-4 (ou SAE 50)', capacidade: '9,0 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Tração 4x2 / 6x4)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '14,0 L a 22,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '30,0 L a 34,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 15.000 km. Misto/Severo (terra / obra / canavieiro): 7.500 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: 'PSL280 / PSL900',
      ar: { tecfil: 'AP9834 / ARS9834', authomix: 'FAR9834', mann: 'C 27 830', mahle: 'LX 965', wega: 'WAP-180', fram: 'CA5626PU', vox: 'HD9834' },
      arSecundario: 'ASR834',
      combustivel: 'PSC410 / PSC72',
      sedimentador: { tecfil: 'PSD420 / PSD920/1', authomix: 'FCO0920', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2203', fram: 'PS8048', vox: 'FBS420' }
    }
  },

  'Ford Cargo 2428 / 2628 (Euro 3 - Eletrônico)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISBe 5.9)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4', capacidade: '19,5 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual (Eaton RT / FTS-16108LL)', especificacao: 'SAE 80W-90 API GL-4 (ou SAE 50)', capacidade: '12,0 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial (Tração 6x2 / 6x4)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L a 22,0 L (total 2 eixos)', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '28,0 L a 32,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 20.000 km. Misto/Urbano: 15.000 km. Severo (obra / fora de estrada / militar): 7.500 km ou 250 horas. Máximo: 12 meses."
    },
    filtros: {
      oleo: 'PSL283',
      ar: 'ARS5376',
      arSecundario: 'ASR376',
      combustivel: 'PSC75',
      sedimentador: { tecfil: 'PSD960/1 / PSD920/1', authomix: 'FCO0960', mann: 'WK 1060/1', mahle: 'KC 126', wega: 'FCD-2214', fram: 'PS10756', vox: 'FBS960/1' }
    }
  },

  'Ford Cargo 1723 / 2423 / 2429 / 2629 / 3131 (Euro 5)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISB 6.7 / ISL 8.9 - SCR)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / CK-4 (Low SAPS)', capacidade: '20,0 L (ISB 6.7) | 28,0 L (ISL 8.9)', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Manual / Eaton', especificacao: 'SAE 80W-90 API GL-4', capacidade: '9,5 L a 13,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L a 22,0 L', intervalo: '40.000 km - 60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '32,0 L a 38,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Rodoviário: 30.000 km. Distribuição/Misto: 15.000 km. Severo (basculante / fora de estrada): 10.000 km ou 300 horas. Máximo: 12 meses. Modelos ISB 6.7 (1723/2423/2429/2629) usam filtro de óleo PSL283 e combustível PSC75; modelos pesados ISL 8.9 (3131/1933) usam óleo PSL909 e combustível PSC76."
    },
    filtros: {
      oleo: 'PSL283 / PSL909',
      ar: 'ARS9842',
      arSecundario: 'ASR842',
      combustivel: 'PSC75 / PSC76',
      sedimentador: 'PSD980 / PSD490'
    }
  },

  'Ford Cargo 2042 / 2842 (Euro 5 - Cavalo-Mecânico)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (FPT Cursor 10 10.3L - SCR)', especificacao: 'SAE 15W-40 / 10W-40 API CJ-4 / ACEA E7/E9', capacidade: '30,0 L', intervalo: 'Ver nota [1]' },
      { sistema: 'Câmbio Automatizado (ZF 12AS 2330TD Astronic)', especificacao: 'SAE 75W-80 Sintético API GL-4 (ZF TE-ML 02E)', capacidade: '11,0 L', intervalo: '120.000 km' },
      { sistema: 'Diferencial (Meritor MS 18X / MT 23-165)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L (4x2) / 30,0 L (6x2/6x4)', intervalo: '80.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '42,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Motor FPT Cursor 10 (Euro 5 com sistema SCR / ARLA 32). Troca de óleo: Rodoviário 40.000 km; Misto/Severo 20.000 km."
    },
    filtros: {
      oleo: 'PSL300',
      ar: 'ARS9845',
      arSecundario: 'ASR845',
      combustivel: 'PSC355',
      sedimentador: 'PSD985'
    }
  }
};
