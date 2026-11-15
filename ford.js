// ford.js - Guia Técnico de Lubrificantes e Filtros (Ford Ranger, Transit e Caminhões Cargo 2011+)
export const fordVehicles = {
  montadora: "Ford",
  veiculos: [
    {
      modelo: "Ranger",
      categoria: "Caminhonete Média",
      geracoes: [
        {
          periodo: "2013 - 2023 (Geração T6)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "2.2 Duratorq (4 cil - 150/160 cv) e 3.2 Duratorq (5 cil - 200 cv)",
              combustivel: "Diesel",
              potencia: "160 cv (2.2) / 200 cv (3.2)",
              capacidadeOleo: "8.6 litros (2.2) / 9.8 litros (3.2 com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Ford WSS-M2C913-D / ACEA C2/C3 nos modelos com DPF)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Elemento filtrante separador de água", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2024 - 2026+ (Nova Geração)",
          normaEmissao: "Proconve L7 / L8 (Com Arla 32)",
          motorizacoes: [
            {
              codigo: "2.0 Panther Turbo Diesel (170 cv) e 3.0 V6 Lion Turbo Diesel (250 cv)",
              combustivel: "Diesel",
              potencia: "170 cv (2.0) / 250 cv (3.0 V6)",
              capacidadeOleo: "7.0 litros (2.0) / 8.5 litros (3.0 V6 com filtro)",
              especificacaoOleo: "Óleo 0W-30 Sintético Low SAPS (Norma Ford WSS-M2C950-A / WSS-M2C963-A1)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro separador de água de alta eficiência", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Transit",
      categoria: "Vans, Furgões e Minibus",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "2.2 Duratorq (2011-14) e 2.0 EcoBlue Turbo Diesel (2022+ - 165/170 cv)",
              combustivel: "Diesel",
              potencia: "125 cv (2.2) / 165 a 170 cv (2.0 EcoBlue)",
              capacidadeOleo: "6.5 litros (2.2) / 9.2 litros (2.0 EcoBlue com filtro)",
              especificacaoOleo: "Óleo 0W-30 Sintético (Norma Ford WSS-M2C950-A no EcoBlue com Arla 32)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Linha Cargo (816, 1119, 1319, 1519, 1719, 1723, 2429, 2042, 2842)",
      categoria: "Caminhões Leves, Médios, Semipesados e Extrapesados",
      geracoes: [
        {
          periodo: "2012 - 2019 (Euro V)",
          normaEmissao: "Euro V (Com Arla 32)",
          motorizacoes: [
            {
              codigo: "Cummins ISB 4.5 (4 cil) / ISB 6.7 (6 cil) / FPT Cursor 9 e 13 (Extra-pesados)",
              combustivel: "Diesel",
              potencia: "162 cv a 420 cv",
              capacidadeOleo: "13.0L (ISB 4.5) / 19.0L (ISB 6.7) / 32.0L (Cursor 13)",
              especificacaoOleo: "Óleo 15W-40 API CJ-4 (Norma Cummins CES 20081)",
              filtros: { oleo: "Filtro blindado Fleetguard", combustivel: "Filtro separador de água Racor + filtro fino", ar: "Filtro de ar principal e segurança" }
            }
          ]
        }
      ]
    }
  ]
};
