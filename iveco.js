// iveco.js - Guia Técnico de Lubrificantes e Filtros (Iveco Completo 2012+)
export const ivecoVehicles = {
  montadora: "Iveco",
  veiculos: [
    {
      modelo: "Daily (30S13, 35S14, 35-150, 45S17, 45-170, 55C17, 65-170, 70C17)",
      categoria: "Utilitários Leves, Vans e Chassi-Cabine",
      geracoes: [
        {
          periodo: "2012 - 2022 (Euro V)",
          normaEmissao: "Euro V (EGR sem Arla nos 3.0 antigos / SCR nos mais novos)",
          motorizacoes: [
            {
              codigo: "FPT F1A 2.3 (30S13) e FPT F1C 3.0 Turbo Diesel",
              combustivel: "Diesel",
              potencia: "130 cv (2.3) / 146 cv ou 170 cv (3.0)",
              capacidadeOleo: "6.5 litros (2.3) / 7.6 litros (3.0 com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS (Norma Iveco 18-1811 SC1 / ACEA C2/C3)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água + filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Daily Euro VI)",
          normaEmissao: "Euro VI / Proconve P8 (Com DPF e Arla 32)",
          motorizacoes: [
            {
              codigo: "FPT F1C MAX 3.0 Turbo Diesel Euro VI",
              combustivel: "Diesel",
              potencia: "160 cv ou 180 cv",
              capacidadeOleo: "7.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético Low SAPS (Norma Iveco 18-1811 SC1 LV)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água aquecido", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Tector / Stralis / Hi-Way / S-Way",
      categoria: "Caminhões Semipesados, Pesados e Extrapesados",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "FPT NEF 4 (4.5L) / NEF 6 (5.9L e 6.7L - Tector) / Cursor 9, 11 e 13 (Stralis / Hi-Way / S-Way)",
              combustivel: "Diesel",
              potencia: "170 cv a 560 cv",
              capacidadeOleo: "12.0L (NEF 4) / 17.5L (NEF 6) / 32.0 a 35.0L (Cursor 13)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 (API CJ-4 / ACEA E9 Low SAPS com Arla 32)",
              filtros: { oleo: "Filtro blindado (NEF) / Elemento ecológico (Cursor)", combustivel: "Separador de água Racor + filtro principal", ar: "Filtro de ar principal e segurança" }
            }
          ]
        }
      ]
    }
  ]
};
