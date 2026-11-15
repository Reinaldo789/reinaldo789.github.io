// fiat.js - Guia Técnico de Lubrificantes e Filtros (Fiat Completo 2011+)
export const fiatVehicles = {
  montadora: "Fiat",
  veiculos: [
    {
      modelo: "Uno / Mobi / Palio / Siena / Grand Siena",
      categoria: "Compactos",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 8V e 1.4 8V Fire / Fire Evo",
              combustivel: "Flex",
              potencia: "73/75 cv (1.0) / 85/88 cv (1.4)",
              capacidadeOleo: "2.7 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Fiat 9.55535-G1 / API SN) ou 15W-40 (anos 2011-2013)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Cabine" }
            },
            {
              codigo: "1.0 6V (3 cil) e 1.3 8V (4 cil) Firefly (2017+)",
              combustivel: "Flex",
              potencia: "75/77 cv (1.0) / 101/109 cv (1.3)",
              capacidadeOleo: "3.0 litros (1.0) / 3.2 litros (1.3 com filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (Norma Fiat 9.55535-GSX / API SP)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Argo / Cronos / Pulse / Fastback",
      categoria: "Hatch, Sedan e SUVs Compactos",
      geracoes: [
        {
          periodo: "2017 - 2026+",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 / 1.3 Firefly Aspirado e 1.0 Turbo 200 (T200) / 1.3 Turbo 270 (T270)",
              combustivel: "Flex",
              potencia: "75 cv (1.0) / 107 cv (1.3) / 130 cv (T200) / 185 cv (T270)",
              capacidadeOleo: "3.0L (1.0) / 3.2L (1.3) / 4.1L (T200) / 4.8L (T270)",
              especificacaoOleo: "Óleo 0W-20 (Firefly e T200 - Fiat 9.55535-GSX) / Óleo 0W-30 (T270 - Fiat 9.55535-GS1)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Strada / Fiorino / Doblo",
      categoria: "Picape Leve e Furgões Urbanos",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.4 8V Fire Evo / 1.8 16V E.torQ / 1.3 Firefly / 1.0 Turbo 200 (Strada 2024+)",
              combustivel: "Flex",
              potencia: "86 cv (1.4) / 132 cv (1.8) / 107 cv (1.3) / 130 cv (T200)",
              capacidadeOleo: "2.7L (1.4) / 4.3L (1.8 E.torQ) / 3.2L (1.3) / 4.1L (T200)",
              especificacaoOleo: "Óleo 5W-30 (1.4/1.8) / Óleo 0W-20 (1.3 Firefly e T200)",
              filtros: { oleo: "Blindado (Fire/Firefly/T200) / Elemento ecológico (E.torQ)", combustivel: "Linha", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Toro / Titano",
      categoria: "Picapes Intermediária e Média",
      geracoes: [
        {
          periodo: "2016 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.8 E.torQ Flex / 2.4 Tigershark / 1.3 Turbo 270 (T270)",
              combustivel: "Flex",
              potencia: "139 cv (1.8) / 186 cv (2.4) / 185 cv (T270)",
              capacidadeOleo: "4.3L (1.8) / 5.2L (2.4) / 4.8L (T270 com filtro)",
              especificacaoOleo: "Óleo 5W-30 (1.8) / 0W-20 (2.4) / 0W-30 (T270 - Fiat 9.55535-GS1)",
              filtros: { oleo: "Elemento ecológico (1.8) / Blindado (2.4 e T270)", combustivel: "Linha", ar: "Ar", cabine: "Cabine" }
            },
            {
              codigo: "2.0 16V MultiJet Turbo Diesel (Toro) e 2.2 Turbo Diesel (Titano / Toro 2025+)",
              combustivel: "Diesel",
              potencia: "170 cv (2.0) / 180 a 200 cv (2.2)",
              capacidadeOleo: "4.9 litros (2.0 MultiJet) / 6.2 litros (2.2 Titano)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético Low SAPS (Norma Fiat 9.55535-S1 / DS1 com DPF)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro separador de água", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Ducato / Scudo",
      categoria: "Vans, Furgões e Minibus",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Euro VI",
          motorizacoes: [
            {
              codigo: "2.3 MultiJet / 2.2 BlueHDi (Ducato 2023+ e Scudo 1.5 BlueHDi)",
              combustivel: "Diesel",
              potencia: "127 a 140 cv (Ducato) / 120 cv (Scudo 1.5)",
              capacidadeOleo: "9.0 a 9.5L (2.3) / 6.2L (Ducato 2.2) / 5.1L (Scudo 1.5)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético Low SAPS (ACEA C2/C3 com Arla 32)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Separador de água", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    }
  ]
};
