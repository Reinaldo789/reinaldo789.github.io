export const vansRenault = {
  'Renault Master 2.5 dCi (G9U - 2005 a 2012)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (G9U 2.5 16V - 115 cv)', especificacao: 'SAE 15W-40 ou 10W-40 (API CI-4 / ACEA B4)', capacidade: '8,0 L (com filtro)', intervalo: '10.000 km' },
      { sistema: 'Câmbio Manual (PF6 - 6 marchas)', especificacao: 'SAE 75W-80 API GL-4+ (Elf Tranself NFJ)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III (Elf Elfmatic G3)', capacidade: '1,1 L', intervalo: 'Inspeção a cada 10.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Glaceol RX Type D Orgânico (50/50)', capacidade: '9,0 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Primeira geração nacional com motor 2.5 dCi (correia dentada) e norma Euro 3, sem filtro DPF."
    },
    filtros: {
      oleo: { original: '8200362442', tecfil: 'PEL675', authomix: 'FOL0675', mann: 'HU 718/1 k', mahle: 'OX 153/7D', wega: 'WOE-450', fram: 'CH9463', vox: 'LE675' },
      ar: { original: '8200457286', tecfil: 'ARS2869', authomix: 'FAR2869', mann: 'C 32 154', mahle: 'LX 1291', wega: 'JFA-0595', fram: 'CA9491', vox: 'HD2869' },
      combustivel: { original: '7701475229', tecfil: 'PEC3022', authomix: 'FCO3022', mann: 'PU 822 x', mahle: 'KX 204D', wega: 'FCD-0768', fram: 'C9818', vox: 'CE3022' },
      cabine: { original: '7701048749', tecfil: 'ACP901', authomix: 'FCA0901', mann: 'CU 2336', mahle: 'LA 134', wega: 'AKX-1440', fram: 'CF9399', vox: 'FAC901' }
    }
  },

  'Renault Master 2.3 dCi (M9T Euro 5 - 2013 a 2021)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (M9T 2.3 16V Corrente - 130 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Renault RN0720 / ACEA C4) [1]', capacidade: '8,0 L (com filtro) [2]', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Câmbio Manual (PF6 - 6 marchas)', especificacao: 'SAE 75W-80 API GL-4+ (Elf Tranself NFP)', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica', especificacao: 'ATF Dexron III (Elf Elfmatic G3)', capacidade: '1,1 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Glaceol RX Type D Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Motor M9T com corrente de comando e filtro DPF (sem ARLA 32). Exige estritamente óleo norma Renault RN0720 / ACEA C4 (cinzas ultrabaixas) para não entupir o DPF.",
      2: "Capacidade pode variar entre 8,0 L e 8,9 L dependendo do ano/cárter — conferir sempre na vareta após abastecer 8,0 L."
    },
    filtros: {
      oleo: { original: '152095084R', tecfil: 'PEL678', authomix: 'FOL0678', mann: 'HU 6006 z', mahle: 'OX 968D', wega: 'WOE-461', fram: 'CH11442', vox: 'LE678' },
      ar: { original: '8200795348', tecfil: 'ARL5135', authomix: 'FAR5135', mann: 'C 33 006', mahle: 'LX 3156', wega: 'FAP-9053', fram: 'CA11104', vox: 'HLP5135' },
      combustivel: { original: '164037803R', tecfil: 'PEC3035', authomix: 'FCO3035', mann: 'PU 9005 x', mahle: 'KX 338/22D', wega: 'FCD-0785', fram: 'C11258', vox: 'CE3035' },
      cabine: { original: '272770055R', tecfil: 'ACP915', authomix: 'FCA0915', mann: 'CU 24 004', mahle: 'LA 688', wega: 'AKX-1445', fram: 'CF11200', vox: 'FAC915' }
    }
  },

  'Renault Master 2.3 dCi (M9T Euro 6 / ARLA 32 - 2022 a 2026)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (M9T 2.3 16V - 136 cv)', especificacao: 'SAE 5W-30 Sintético Low SAPS (Renault RN17 / RN0720 / ACEA C3/C4) [1]', capacidade: '8,5 L (com filtro)', intervalo: '20.000 km (Normal) / 10.000 km (Severo)' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '22,0 L', intervalo: 'Autonomia média: ~8.000 a 10.000 km' },
      { sistema: 'Câmbio Manual (PF6 - 6 marchas)', especificacao: 'SAE 75W-80 API GL-4+', capacidade: '2,7 L', intervalo: '80.000 km' },
      { sistema: 'Direção Hidráulica (Eletro-hidráulica)', especificacao: 'Elf Renaultmatic D3 Syn / Dexron III', capacidade: '1,1 L', intervalo: 'Inspeção a cada 20.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Glaceol RX Type D Orgânico (50/50)', capacidade: '9,5 L', intervalo: '60.000 km ou 2 anos' }
    ],
    notas: {
      1: "Geração reestilizada (Proconve L7/L8) com sistema SCR (ARLA 32) acoplado ao DPF.",
      2: "Reservatório de ARLA 32 com capacidade de 22 litros (abastecimento na lateral esquerda, próximo à porta do motorista)."
    },
    filtros: {
      oleo: { original: '152095084R', tecfil: 'PEL678', authomix: 'FOL0678', mann: 'HU 6006 z', mahle: 'OX 968D', wega: 'WOE-461', fram: 'CH11442', vox: 'LE678' },
      ar: { original: '165467674R', tecfil: 'ARL5152', authomix: 'FAR5152', mann: 'C 33 018', mahle: 'LX 4510', wega: 'FAP-9065', fram: 'CA12450', vox: 'HLP5152' },
      combustivel: { original: '164039594R', tecfil: 'PEC3048', authomix: 'FCO3048', mann: 'PU 9015 x', mahle: 'KX 540D', wega: 'FCD-0798', fram: 'C12100', vox: 'CE3048' },
      cabine: { original: '272770055R', tecfil: 'ACP915', authomix: 'FCA0915', mann: 'CU 24 004', mahle: 'LA 688', wega: 'AKX-1445', fram: 'CF11200', vox: 'FAC915' }
    }
  }
};
