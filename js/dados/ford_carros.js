// ford_carros.js - Guia Técnico de Lubrificantes e Filtros (Ford Passeio 2011+)
export const fordCarrosVehicles = {
  montadora: "Ford",
  veiculos: [
    {
      modelo: "Ka / Ka Sedan",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2011 - 2013 (2ª Geração - Zetec Rocam)",
          normaEmissao: "Euro IV / V",
          motorizacoes: [
            {
              codigo: "1.0 8V e 1.6 8V Zetec Rocam",
              combustivel: "Flex",
              potencia: "72 cv (1.0) / 107 cv (1.6)",
              capacidadeOleo: "4.1 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Ford WSS-M2C913-C / D)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2014 - 2021 (3ª Geração)",
          normaEmissao: "Proconve L6",
          motorizacoes: [
            {
              codigo: "1.0 12V Ti-VCT (3 cil) / 1.5 16V Sigma / 1.5 12V Dragon (3 cil)",
              combustivel: "Flex",
              potencia: "85 cv (1.0) / 110 cv (Sigma) / 136 cv (Dragon)",
              capacidadeOleo: "4.05L (1.0 e Sigma) / 4.35L (1.5 Dragon com filtro)",
              especificacaoOleo: "Óleo 5W-20 Sintético (Norma Ford WSS-M2C948-B - Correia banhada a óleo nos 3 cil)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "New Fiesta / EcoSport",
      categoria: "Hatch, Sedan e SUV Compacto",
      geracoes: [
        {
          periodo: "2011 - 2021",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.5 16V / 1.6 16V Sigma e 1.5 12V Dragon (3 cil)",
              combustivel: "Flex",
              potencia: "111 a 130 cv (Sigma) / 137 cv (Dragon)",
              capacidadeOleo: "4.05L (Sigma) / 4.35L (Dragon com filtro)",
              especificacaoOleo: "Óleo 5W-20 Sintético (Norma Ford WSS-M2C948-B)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "2.0 16V Duratec / Direct Flex (EcoSport 2013-2021)",
              combustivel: "Flex",
              potencia: "147 cv (Duratec) / 176 cv (Direct Flex)",
              capacidadeOleo: "4.3 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Ford WSS-M2C913-D)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Focus / Fusion / Territory / Maverick",
      categoria: "Médios, SUVs e Picape Intermediária",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.0 16V Direct Flex (Focus) / 2.5 Duratec Flex (Fusion)",
              combustivel: "Flex",
              potencia: "178 cv (2.0) / 175 cv (2.5)",
              capacidadeOleo: "4.3L (2.0) / 5.4L (2.5 com filtro)",
              especificacaoOleo: "Óleo 5W-30 (2.0 - WSS-M2C913-D) / Óleo 5W-20 (2.5 - WSS-M2C945-A)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "2.0 EcoBoost Turbo (Fusion / Maverick) e 1.5 EcoBoost (Territory)",
              combustivel: "Gasolina",
              potencia: "240/248/253 cv (2.0) / 150/169 cv (1.5)",
              capacidadeOleo: "5.4L (Fusion) / 5.2L (Maverick) / 4.2L (Territory)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Ford WSS-M2C946-A / API SP)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    }
  ]
};
