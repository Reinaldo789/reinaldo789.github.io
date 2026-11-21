export const utilitariosAgrale = {
  'Agrale Marruá AM50 / AM100 / AM150 / AM200 / AM1 / AM2 / AM10 / AM20 (MWM Sprint 4.07 TCA 2.8 Mecânico - Euro II)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 4.07 TCA 2.8 12V Turbo Mecânico - 132 cv) [3]', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405)', especificacao: 'ATF Dexron III / Mercon [1]', capacidade: '2,6 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354)', especificacao: 'ATF Dexron III / Mercon', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Dianteiro / Traseiro)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com bloc. traseiro) [2]', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atenção ao câmbio Eaton FSO-2405: siga rigorosamente a recomendação do fabricante quanto ao uso de ATF Dexron III nesta caixa específica para garantir o funcionamento correto dos sincronizadores.",
      2: "Eixos rígidos Dana. Caso o diferencial traseiro possua sistema de deslizamento limitado (LSD / Trac-Lok), utilize óleo GL-5 compatível com LSD ou adicione o aditivo modificador de atrito para evitar ruídos e desgaste prematuro.",
      3: "Atenção ao filtro de combustível: utilize estritamente a família com rosca para sensor de água (Tecfil PSC498/4, Vox FBD498/4, Mann WK 940/35). Não compre a versão padrão sem sufixo (ex: Tecfil PSC498, Inpeca SCB-0498, Mann WK842/3), pois a rosca inferior do sensor de presença de água não encaixa."
    },
    // Só o código Tecfil: as demais marcas vêm do catálogo (js/dados/filtros-de-*.js)
    filtros: {
      oleo: 'PSL340',
      ar: 'ARS8234',
      arSecundario: 'ASR234',
      combustivel: 'PSC498/4',
      sedimentador: 'PSD450/1',
      cabine: null
    }
  },

  'Agrale Marruá G1 / AM11 / AM20 / AM21 / AM23 (MWM Sprint 4.07 TCE 2.8 Eletrônico - Euro III)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM Sprint 4.07 TCE 2.8 12V Turbo Eletrônico - 140 cv) [3]', especificacao: 'SAE 15W-40 Mineral ou Semissintético (API CI-4 / ACEA E7)', capacidade: '7,0 L (com filtro)', intervalo: '10.000 km (Normal) / 5.000 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-2405)', especificacao: 'ATF Dexron III / Mercon [1]', capacidade: '2,6 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner 1354)', especificacao: 'ATF Dexron III / Mercon', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Dianteiro / Traseiro)', especificacao: 'SAE 85W-140 API GL-5 (com aditivo LSD se equipado com bloc. traseiro) [2]', capacidade: 'Tras: 2,6 L | Diant: 1,7 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '11,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Atenção ao câmbio Eaton FSO-2405: siga rigorosamente a recomendação do fabricante quanto ao uso de ATF Dexron III nesta caixa específica para garantir o funcionamento correto dos sincronizadores.",
      2: "Eixos rígidos Dana. Caso o diferencial traseiro possua sistema de deslizamento limitado (LSD / Trac-Lok), utilize óleo GL-5 compatível com LSD ou adicione o aditivo modificador de atrito para evitar ruídos e desgaste prematuro.",
      3: "Motorização MWM Sprint 4.07 TCE eletrônica (Euro III) aplicada nas versões finais da G1 e modelos militares (AM11, AM20, AM21, AM23). Confirme sempre a rosca do sensor de água no filtro de combustível antes da compra."
    },
    // Só o código Tecfil: as demais marcas vêm do catálogo (js/dados/filtros-de-*.js)
    filtros: {
      oleo: 'PSL340',
      ar: 'ARS8234',
      arSecundario: 'ASR234',
      combustivel: 'PSC498/4',
      sedimentador: 'PSD450/1',
      cabine: null
    }
  },

  'Agrale Marruá AM100 G2 / AM150 G2 / AM200 G2 / AM300 G2 / AM21 / AM23 / AM31 (Cummins ISF 2.8 - Euro V / Euro III Militar)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (Cummins ISF 2.8 16V Eletrônico - 150 cv)', especificacao: 'SAE 15W-40 API CI-4 / CJ-4 (Low SAPS)', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 - 5 marchas)', especificacao: 'SAE 75W-90 API GL-4 [1]', capacidade: '3,2 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner)', especificacao: 'ATF Dexron III', capacidade: '1,2 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Dana (Diant. / Tras. com Bloqueio)', especificacao: 'SAE 85W-140 API GL-5 [2]', capacidade: 'Tras: 2,8 L | Diant: 1,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (50/50)', capacidade: '12,5 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "O câmbio Eaton FSO-4505 exige obrigatoriamente óleo com especificação **API GL-4**. Nunca utilize óleo GL-5 em caixas manuais com sincronizadores de latão/bronze para evitar corrosão química.",
      2: "Eixos rígidos Dana de alta resistência. Algumas versões táticas e institucionais contam com opção de bloqueio eletrônico no eixo dianteiro (como o sistema Eaton E-Locker) para tração 100% integral em terreno crítico."
    },
    // Só o código Tecfil: as demais marcas vêm do catálogo (js/dados/filtros-de-*.js)
    filtros: {
      oleo: 'PSL356',
      ar: 'ARS8234',
      arSecundario: 'ASR234',
      combustivel: 'PSC706',
      sedimentador: 'PSD925',
      cabine: null
    }
  },

  'Agrale Marruá AM250 / AM200 MO / Escolar ORE Zero (Cummins F3.8 - Euro VI / Proconve P8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins F3.8 16V Turbo Eletrônico - Euro VI / P8) [3]', especificacao: 'SAE 15W-40 ou 10W-40 Sintético/Semissintético API CK-4 / ACEA E9 (Low SAPS)', capacidade: '11,0 L a 13,0 L (com filtro - confirmar vareta)', intervalo: '15.000 km (Normal) / 7.500 km (Severo)' },
      { sistema: 'Câmbio Manual (Eaton FSO-4505 / FS-5406)', especificacao: 'SAE 75W-90 ou SAE 40/50 Sintético API GL-4 (Eaton PS-386) [1]', capacidade: '3,2 L a 4,5 L', intervalo: '60.000 km' },
      { sistema: 'Caixa de Transferência (BorgWarner / Agrale)', especificacao: 'ATF Dexron III / Mercon', capacidade: '1,2 L a 1,8 L', intervalo: '60.000 km' },
      { sistema: 'Eixos Rígidos Reforçados Dana (Diant. / Tras.)', especificacao: 'SAE 85W-140 API GL-5 [2]', capacidade: 'Tras: 2,8 L a 3,4 L | Diant: 1,8 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life OAT (50/50)', capacidade: '14,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Utilizar estritamente lubrificante **API GL-4** (ou fluido homologado Eaton PS-386 conforme plaqueta da caixa) para preservar os sincronizadores de latão/bronze.",
      2: "Eixos Dana reforçados para aplicações severas (AM250 CS/CD, AM200 Micro-ônibus / Escolar ORE Zero e versões militares atuais). Utilizar óleo **API GL-5**.",
      3: "Motorização Cummins F3.8 Proconve P8 (Euro VI) equipada com sistema de pós-tratamento SCR (exige uso contínuo de **Arla 32**) e filtro de partículas (DPF), tornando obrigatório o óleo de baixo teor de cinzas (**API CK-4 / ACEA E9**). Confirme os códigos exatos dos filtros pelo número de série do motor Cummins, pois podem variar conforme a configuração de chassi."
    },
    // Só o código Tecfil: as demais marcas vêm do catálogo (js/dados/filtros-de-*.js)
    filtros: {
      oleo: 'PSL356 / PSL283',
      ar: 'ARS8234',
      arSecundario: 'ASR234',
      combustivel: 'PSC706',
      sedimentador: 'PSD925',
      cabine: null
    }
  }
};
