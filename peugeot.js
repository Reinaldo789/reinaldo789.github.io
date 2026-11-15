// peugeot.js - Guia Técnico de Lubrificantes e Filtros (Peugeot Completo 2011+)
export const peugeotVehicles = {
  montadora: "Peugeot",
  veiculos: [
    {
      modelo: "208",
      categoria: "Hatch Compacto",
      geracoes: [
        {
          periodo: "2013 - 2020 (1ª Geração)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.2 PureTech (3 cilindros)",
              combustivel: "Flex",
              potencia: "84 / 90 cv",
              capacidadeOleo: "3.2 litros",
              especificacaoOleo: "Óleo 0W-30 Sintético (Norma PSA B71 2312)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "1.5 8V / 1.6 16V EC5",
              combustivel: "Flex",
              potencia: "93 cv (1.5) / 115 / 118 cv (1.6)",
              capacidadeOleo: "3.2L (1.5) / 3.25L (1.6 com filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético (Norma PSA B71 2296 / B71 2290)",
              filtros: { oleo: "Filtro blindado / elemento", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        },
        {
          periodo: "2020 - 2026+ (2ª Geração)",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V EC5 e 1.0 Turbo 200 (Fiat/Stellantis)",
              combustivel: "Flex",
              potencia: "113 / 120 cv (1.6) / 125 / 130 cv (Turbo)",
              capacidadeOleo: "3.25L (1.6) / 4.1L (Turbo 200)",
              especificacaoOleo: "Óleo 0W-30 ou 0W-20 Sintético",
              filtros: { oleo: "Elemento ecológico / blindado", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "308",
      categoria: "Hatch Médio",
      geracoes: [
        {
          periodo: "2012 - 2019",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.6 16V EC5 (Aspirado)",
              combustivel: "Flex",
              potencia: "115 / 122 cv",
              capacidadeOleo: "3.25 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 (Norma PSA B71 2296)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "2.0 16V EW10A",
              combustivel: "Flex",
              potencia: "143 / 151 cv",
              capacidadeOleo: "4.5 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 (Norma PSA B71 2296)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "1.6 16V THP (Turbo Injeção Direta)",
              combustivel: "Gasolina / Flex",
              potencia: "165 cv / 173 cv",
              capacidadeOleo: "4.25 litros (com filtro)",
              especificacaoOleo: "Óleo 0W-30 ou 5W-30 Sintético (Norma PSA B71 2312 / B71 2297)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro de alta pressão", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "408",
      categoria: "Sedan Médio",
      geracoes: [
        {
          periodo: "2011 - 2019",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "2.0 16V EW10A e 1.6 THP (Turbo)",
              combustivel: "Flex / Gasolina",
              potencia: "151 cv (2.0) / 173 cv (THP)",
              capacidadeOleo: "4.5 litros (2.0) / 4.25 litros (THP)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético (Norma PSA B71 2296 / 2312)",
              filtros: { oleo: "Blindado / Elemento", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "2008",
      categoria: "SUV Compacto",
      geracoes: [
        {
          periodo: "2015 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V EC5 (Aspirado) e 1.6 THP (Turbo)",
              combustivel: "Flex",
              potencia: "115 / 120 cv (1.6) / 165 / 173 cv (THP)",
              capacidadeOleo: "3.25 litros (1.6) / 4.25 litros (THP com filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético (Norma PSA B71 2297 / B71 2312)",
              filtros: { oleo: "Filtro blindado / elemento", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "3008 / 5008",
      categoria: "SUV Médio / Grande (5 e 7 lugares)",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Euro VI",
          motorizacoes: [
            {
              codigo: "1.6 THP (Turbo Injeção Direta) e 2.0 BlueHDi (Diesel)",
              combustivel: "Gasolina / Flex / Diesel",
              potencia: "165 cv a 180 cv (THP) / 150 cv (Diesel)",
              capacidadeOleo: "4.25 litros (THP) / 5.2 litros (Diesel com filtro)",
              especificacaoOleo: "Óleo 0W-30 Sintético (Norma PSA B71 2312)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Boxer",
      categoria: "Vans e Furgões Utilitários",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro IV / V / VI",
          motorizacoes: [
            {
              codigo: "2.3 MultiJet / MultiJet II",
              combustivel: "Diesel",
              potencia: "127 cv a 140 cv",
              capacidadeOleo: "9.0 a 9.5 litros",
              especificacaoOleo: "Óleo 5W-30 (Norma PSA B71 2290 / com Arla 32)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Separador de água", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Expert",
      categoria: "Furgões Médios",
      geracoes: [
        {
          periodo: "2017 - 2026+",
          normaEmissao: "Euro V / VI",
          motorizacoes: [
            {
              codigo: "1.6 BlueHDi Turbo Diesel",
              combustivel: "Diesel",
              potencia: "115 cv",
              capacidadeOleo: "6.0 litros",
              especificacaoOleo: "Óleo 0W-30 ou 5W-30 (Norma PSA B71 2312 com Arla 32)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    }
  ]
};
