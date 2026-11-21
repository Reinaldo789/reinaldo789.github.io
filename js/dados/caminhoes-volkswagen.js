export const caminhoesVW = {
  'Volkswagen Worker (Motores MWM 6.10 TCA / Cummins 6BTAA - Bomba Injetora Mecânica 2000 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (MWM 6.10 TCA 6.5L / Cummins 6BTAA 5.9L)', especificacao: 'SAE 15W-40 API CI-4 / CH-4 (Mineral ou Semissintético)', capacidade: 'MWM 6.10: 14,0 L | Cummins 6BTAA: 16,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (Eaton FS-5306 / ZF 6S)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '6,0 L a 7,5 L', intervalo: '50.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor / Dana)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 15,0 L', intervalo: '50.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Corretivo / Orgânico (50/50)', capacidade: '22,0 L a 28,0 L', intervalo: '1 ano ou 40.000 km' }
    ],
    notas: {
      1: "Veículos com sistema de injeção mecânica direta (bomba injetora em linha Bosch). Não utilizam ARLA 32. Atenção à drenagem diária do copo separador de água para proteger os elementos da bomba."
    },
    filtros: {
      oleo: 'PSL339 (MWM) / PSL280 (Cummins)',
      ar: 'ARL8891',
      combustivel: 'PSC71',
      sedimentador: 'PSD480'
    }
  },
  'Volkswagen Worker / Constellation (Motores Cummins ISB 3.9 / 6.7 - Euro III / Euro V)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISB 4 cilindros / 6 cilindros)', especificacao: 'SAE 15W-40 CI-4 / CK-4 ou 10W-40 Semissintético (API CI-4 / CES 20081)', capacidade: 'ISB 3.9: 11,0 L | ISB 6.7: 18,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual (Eaton / ZF)', especificacao: 'SAE 80W-90 API GL-4 / GL-5', capacidade: '6,0 L a 11,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor / Dana)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '12,0 L a 16,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico concentrado (50/50)', capacidade: '25,0 L a 35,0 L', intervalo: '2 anos ou 100.000 km' }
    ],
    notas: {
      1: "Aplicações equipadas com sistema SCR exigem abastecimento contínuo de ARLA 32. Verificar o torque das abraçadeiras do intercooler periodicamente."
    },
    filtros: {
      oleo: 'PSL283',
      ar: 'ARL8891',
      combustivel: 'PSC75'
    }
  },

  'Volkswagen Constellation (Motores Cummins ISC / ISL 8.3 / 8.9 - Pesados)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (Cummins ISC / ISL 8.9L)', especificacao: 'SAE 15W-40 CI-4/CK-4 (CES 20081)', capacidade: '24,0 L a 28,0 L (com filtro)', intervalo: '20.000 km' },
      { sistema: 'Câmbio Manual / Automatizado (ZF / Eaton)', especificacao: 'SAE 80W-90 / Óleo Sintético específico para automatizados', capacidade: '11,0 L a 14,0 L', intervalo: '60.000 km' },
      { sistema: 'Diferencial Traseiro (Meritor Dupla Velocidade / Reduzido)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '18,0 L a 22,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico concentrado (50/50)', capacidade: '40,0 L a 50,0 L', intervalo: '2 anos' }
    ],
    notas: {
      1: "Linha pesada rodoviária e fora de estrada. Atenção redobrada à purga do sistema separador de água e troca do elemento coalescente."
    },
    filtros: {
      oleo: 'PSL909',
      ar: 'ARL8895',
      combustivel: 'PSC76'
    }
  },

  'Volkswagen Delivery / Constellation (Motores MAN D08 - Euro V / Euro VI)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (MAN D0834 / D0836 - 4.6L e 6.9L)', especificacao: 'SAE 10W-40 Semissintético ou 15W-40 (Norma MAN 3275 / MB 228.31 - Low SAPS)', capacidade: 'D0834 (4 cil): 15,0 L | D0836 (6 cil): 23,0 L', intervalo: '30.000 km (conforme aplicação)' },
      { sistema: 'Câmbio Manual / Automatizado V-Tronic', especificacao: 'Óleo Sintético para transmissões ZF / Eaton homologado', capacidade: '8,0 L a 12,0 L', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5', capacidade: '14,0 L a 18,0 L', intervalo: '60.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico MAN / Long Life (50/50)', capacidade: '30,0 L a 42,0 L', intervalo: '2 anos ou 120.000 km' }
    ],
    notas: {
      1: "Motores MAN D08 utilizam sistema EGR refrigerado ou SCR dependendo do ano/modelo, exigindo rigorosamente o uso de óleos com especificação Low SAPS para evitar obstrução do sistema de escape."
    },
    filtros: {
      oleo: 'PEL1998',
      ar: 'ARL8892',
      combustivel: 'PSD960'
    }
  }
};
