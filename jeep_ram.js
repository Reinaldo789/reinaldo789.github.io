// jeep_ram.js - Guia Técnico de Lubrificantes e Filtros (Jeep & RAM Completo 2011+)
export const jeepRamVehicles = {
  montadora: "Jeep",
  veiculos: [
    {
      modelo: "Renegade / Compass / Commander",
      categoria: "SUVs Compactos, Médios e 7 Lugares",
      geracoes: [
        {
          periodo: "2015 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.8 16V E.torQ Evo / 2.0 16V Tigershark / 1.3 Turbo 270 (T270)",
              combustivel: "Flex",
              potencia: "139 cv (1.8) / 166 cv (2.0) / 185 cv (T270)",
              capacidadeOleo: "4.3L (1.8) / 4.8L (2.0 e T270 com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 (1.8) / Óleo 0W-20 (2.0) / Óleo 0W-30 (T270 - Norma Fiat 9.55535-GS1)",
              filtros: { oleo: "Elemento ecológico (1.8) / Blindado (2.0 e T270)", combustivel: "Linha", ar: "Ar", cabine: "Cabine" }
            },
            {
              codigo: "2.0 16V MultiJet Turbo Diesel (TD350) / 2.2 Turbo Diesel (2025+) / 2.0 Hurricane 4 Gasolina",
              combustivel: "Diesel / Gasolina",
              potencia: "170 cv (2.0D) / 200 cv (2.2D) / 272 cv (Hurricane 4)",
              capacidadeOleo: "4.9L (2.0 Diesel) / 6.2L (2.2 Diesel) / 4.7L (Hurricane 4)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Low SAPS (Diesel com DPF/Arla 32) / Óleo 5W-30 API SP (Hurricane 4)",
              filtros: { oleo: "Elemento ecológico (Diesel) / Blindado (Hurricane)", combustivel: "Separador de água (Diesel)", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "RAM Rampage",
      categoria: "Picape Intermediária Monobloco",
      geracoes: [
        {
          periodo: "2023 - 2026+",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.0 Hurricane 4 Turbo (Gasolina) e 2.0 MultiJet / 2.2 Turbo Diesel",
              combustivel: "Gasolina / Diesel",
              potencia: "272 cv (Gasolina) / 170 ou 200 cv (Diesel)",
              capacidadeOleo: "4.7L (Hurricane 4) / 4.9L (2.0 Diesel) / 6.2L (2.2 Diesel)",
              especificacaoOleo: "Óleo 5W-30 Sintético (API SP / ACEA C3 com Arla 32 no Diesel)",
              filtros: { oleo: "Blindado (Gasolina) / Elemento (Diesel)", combustivel: "Separador de água (Diesel)", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "RAM 1500 / 2500 / 3500",
      categoria: "Picapes Full-Size / Heavy Duty",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "5.7 V8 HEMI / 3.0 Hurricane 6 Biturbo (RAM 1500)",
              combustivel: "Gasolina",
              potencia: "400 cv (HEMI) / 426 cv (Hurricane 6)",
              capacidadeOleo: "6.6 litros (5.7 V8 HEMI) / 7.1 litros (3.0 Hurricane 6)",
              especificacaoOleo: "Óleo 5W-20 (HEMI - Norma MS-6395) / Óleo 0W-20 Sintético (Hurricane 6 - API SP)",
              filtros: { oleo: "Filtro blindado Mopar", combustivel: "Interno no tanque", ar: "Filtro de ar", cabine: "Cabine" }
            },
            {
              codigo: "6.7 Cummins Turbo Diesel (6 cilindros em linha - RAM 2500 / 3500)",
              combustivel: "Diesel",
              potencia: "310 cv, 330 cv, 365 cv ou 377 cv",
              capacidadeOleo: "11.4 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-30 Sintético/Semisintético (Norma Cummins CES 20081 / API CJ-4 / CK-4 com Arla 32)",
              filtros: { oleo: "Filtro blindado Fleetguard/Mopar", combustivel: "Filtro primário separador de água (chassi) + secundário (motor)", ar: "Filtro de ar pesado", cabine: "Cabine" }
            }
          ]
        }
      ]
    }
  ]
};
