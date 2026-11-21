export const caminhoesDaf = {
  'DAF XF 105 / XF / CF (Motores PACCAR MX 11 / MX 13)': {
    sistemas: [
      { sistema: 'Motor (PACCAR MX 11 / MX 13)', especificacao: 'SAE 10W-40 Sintético (Norma DAF / ACEA E4 / E7 - API CJ-4/CK-4) [1]', capacidade: '36,0 L (com filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Automatizado (ZF AS-Tronic / TraXon)', especificacao: 'SAE 75W-80 API GL-4 (ZF Ecofluid M)', capacidade: '12,5 L', intervalo: '150.000 km ou 2 anos' },
      { sistema: 'Diferencial Traseiro (Meritor / DAF)', especificacao: 'SAE 85W-140 API GL-5', capacidade: '15,0 L', intervalo: '120.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Aditivo Orgânico Long Life (Pronto uso 50/50)', capacidade: '40,0 L', intervalo: '2 anos ou 200.000 km' }
    ],
    notas: {
      1: "Obrigatório o uso de lubrificante sintético de alto desempenho para motores PACCAR de longo intervalo.",
      2: "Rodoviário de longa distância (com óleo sintético homologado): até 50.000 km a 60.000 km. Operação mista/severa: reduzir para 20.000 km ou 400 horas."
    },
    filtros: {
      oleo: 'PSL910',
      ar: 'ARS9845',
      combustivel: 'PSD990'
    }
  }
};