export const utilitariosToyota = {
  'Toyota Hilux 3.0 - 2013': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (1KD-FTV 3.0)', especificacao: 'SAE 5W-30 ou 15W-40 [1]', capacidade: '6,9 L (com filtro) / 6,5 L (sem filtro)', intervalo: 'Ver nota [2]' },
      { sistema: 'Câmbio Manual / Transferência', especificacao: 'SAE 75W-90 GL-4 / GL-5', capacidade: 'Câmbio: 2,2 L | Transferência: 1,0 L', intervalo: '40.000 km' },
      { sistema: 'Diferencial Traseiro', especificacao: 'SAE 85W-140 API GL-5 [3]', capacidade: '3,5 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life (50/50)', capacidade: '10,2 L', intervalo: '40.000 km' }
    ],
    notas: {
      1: "Conforme manual: API CF-4, CF ou CI-4. Viscosidade preferencial SAE 5W-30 (uso geral/rodovia) ou SAE 15W-40 em temperaturas ambientes muito elevadas/uso severo.",
      2: "Intervalo de troca: 10.000 km em uso normal; Reduzir para 5.000 km ou 3 meses em uso severo, estradas de terra, poeira ou reboque pesado.",
      3: "Se o veículo possuir bloqueio de diferencial traseiro original (LSD), utilizar óleo específico para deslizamento limitado.",
      4: "Sistema de alimentação (2012 a 2015) possui dois filtros: o elemento principal no copo (23390-0L041 / KX 268D) e o pré-filtro auxiliar blindado em linha (23300-30450 / Mahle KL 1061)."
    },
    filtros: {
      oleo: { original: '90915-YZZD2', tecfil: 'PSL127', authomix: 'FOL0127', mann: 'W 712/83', mahle: 'OC 988', wega: 'JFO-0211', fram: 'PH2870', vox: 'LB127' },
      ar: { original: '17801-0C010', tecfil: 'ARS7065', authomix: 'FAR7065', mann: 'C 23 107', mahle: 'LX 2125', wega: 'JFA-0292/2', fram: 'CA10112', vox: 'HD7065' },
      combustivel: { original: '23390-0L041', tecfil: 'PC949', authomix: 'FCO0949', mann: 'PU 835 x', mahle: 'KX 268D', wega: 'JFC-207/2', fram: 'C10256', vox: 'CE949' },
      preFiltroCombustivel: { original: '23300-30450', tecfil: 'FCI778', authomix: 'FCO0778', mann: '-', mahle: 'KL 1061', wega: 'JFC-283', fram: '-', vox: 'FBI778' },
      cabine: { original: '87139-0K010', tecfil: 'ACP887', authomix: 'FCA0887', mann: 'CU 1919', mahle: 'LA 655', wega: 'AKX-1965', fram: 'CF10285', vox: 'FAC887' }
    }
  },

  'Toyota Hilux 2.8 (2016 a 2024)': {
    usaArla32: false,
    sistemas: [
      { sistema: 'Motor (1GD-FTV 2.8 16V)', especificacao: 'SAE 5W-30 Sintético (ACEA C2 / C3) [1]', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Câmbio Manual / Automático (AC60F)', especificacao: 'Manual: 75W-85 GL-4 | Auto: ATF WS (Toyota WS)', capacidade: 'Manual: 2,2 L | Auto: 9,5 L (Carga total)', intervalo: '80.000 km' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-85 API GL-5', capacidade: 'Tras: 3,0 L | Diant: 1,6 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "Geração equipada com motor 2.8 16V que utiliza DPF e EGR, dispensando o uso de ARLA 32 nesta faixa de anos.",
      2: "Sistema de alimentação conta com dois filtros de diesel: filtro principal do motor (23390-0E020) e filtro pressurizado de combustível (23390-0E011).",
      3: "ATENÇÃO — Filtro pressurizado (23390-0E011): Oficialmente, a Toyota não o inclui como item de troca periódica no plano de manutenção (o gerenciamento do motor monitora o sistema, indicando substituição via diagnóstico ou falha de funcionamento). Na prática de manutenção preventiva, oficinas costumam recomendar a troca entre 40.000 e 50.000 km para prevenir saturação e trava da bomba de alta pressão e quebra da corrente de comando."
    },
    filtros: {
      oleo: { original: '04152-YZZA8', tecfil: 'PEL106', authomix: 'FOL0127', mann: 'HU 6008 z', mahle: 'OX 415D', wega: 'WOE-473', fram: 'CH9642', vox: 'PEL106' },
      ar: { original: '17801-11130', tecfil: 'ARL8480', authomix: 'FAR8480', mann: 'C 32 011', mahle: 'LX 4377', wega: 'FAP-3280', fram: 'CA11250', vox: 'FAR8480' },
      combustivel: { original: '23390-0E020', tecfil: 'PSD980', authomix: 'FCO0980', mann: 'PU 8028', mahle: 'KX 531D', wega: 'FCI-1620', fram: 'PS10038', vox: 'PSD980' },
      preFiltroCombustivel: { original: '23390-0E011', tecfil: 'PC954', authomix: '-', mann: '-', mahle: '-', wega: 'JFC217', fram: '-', vox: '-' },
      cabine: { original: '87139-YZZ20', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'FP 1919', mahle: 'LA 250', wega: 'AKX-1999', fram: 'CF10729', vox: 'FCA0309' }
    }
  },

  'Toyota Hilux 2.8 - Atualizada (Pós-2025 / Proconve L8)': {
    usaArla32: true,
    sistemas: [
      { sistema: 'Motor (1GD-FTV 2.8 16V - 204 cv)', especificacao: 'SAE 5W-30 Sintético (ACEA C2 / C3 ou JASO DL-1) [1]', capacidade: '7,5 L (com filtro)', intervalo: '10.000 km ou 1 ano' },
      { sistema: 'Sistema SCR (ARLA 32)', especificacao: 'ARLA 32 / AdBlue® (Norma ISO 22241) [2]', capacidade: '17,0 L', intervalo: 'Autonomia média: ~600 km/L (reabastecer conforme aviso)' },
      { sistema: 'Câmbio Manual / Automático (6 marchas)', especificacao: 'Manual: SAE 75W-85 GL-4 | Auto: Toyota ATF WS', capacidade: 'Manual: 2,2 L | Auto: 9,5 L (Carga total)', intervalo: '80.000 km (inspeção a cada 40.000 km)' },
      { sistema: 'Diferencial Traseiro / Dianteiro', especificacao: 'SAE 75W-85 API GL-5', capacidade: 'Tras: 3,0 L | Diant: 1,6 L', intervalo: '40.000 km' },
      { sistema: 'Arrefecimento', especificacao: 'Toyota Super Long Life Coolant (50/50)', capacidade: '11,0 L', intervalo: '80.000 km inicial / a cada 40.000 km' }
    ],
    notas: {
      1: "Motor atualizado para o Proconve L8 (2025+), exigindo óleo de baixo teor de cinzas (Low SAPS - ACEA C2/C3 ou JASO DL-1) para proteção do filtro de partículas (DPF) e do catalisador SCR.",
      2: "Reservatório de ARLA 32 localizado sob o capô. Se o nível zerar ou for detectado fluido fora da norma ISO 22241, o sistema bloqueia uma nova partida do motor.",
      3: "Possui dois estágios de filtragem de combustível: filtro principal (23390-0L070) e filtro pressurizado (23390-0E011 / 23390-0E010).",
      4: "ATENÇÃO — Filtro pressurizado (23390-0E011): Oficialmente, a Toyota não o inclui como item de troca periódica no plano de manutenção (o gerenciamento do motor monitora o sistema, indicando substituição via diagnóstico ou falha de funcionamento). Na prática de manutenção preventiva, oficinas costumam recomendar a troca entre 40.000 e 50.000 km para prevenir saturação e trava da bomba de alta pressão e quebra da corrente de comando."
    },
    filtros: {
      oleo: { original: '90915-20003', tecfil: '-', authomix: 'FOL0145', mann: 'W 7283', mahle: 'OC 988', wega: 'JFO-0211', fram: 'PH2870', vox: 'LB129' },
      ar: { original: '17801-0L040', tecfil: 'ARL2204', authomix: 'FAR2204', mann: 'C 33 017/1', mahle: 'LX 4377', wega: 'JFA-0299', fram: 'CA11947', vox: 'HLP2204' },
      combustivel: { original: '23390-0L070', tecfil: 'PC953', authomix: 'FCO0953', mann: 'PU 8028', mahle: 'KX 531D', wega: 'JFC-216', fram: 'C11919', vox: 'CE953' },
      preFiltroCombustivel: { original: '23390-0E011', tecfil: 'PC954', authomix: '-', mann: '-', mahle: '-', wega: 'JFC217', fram: '-', vox: '-' },
      cabine: { original: '87139-0K060', tecfil: 'ACP309', authomix: 'FCA0309', mann: 'CU 22 032', mahle: 'LA 1255', wega: 'AKX-1999', fram: 'CF12157', vox: 'FAC309' }
    }
  }
};
