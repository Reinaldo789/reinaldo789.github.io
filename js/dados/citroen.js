// citroen.js - Guia Técnico de Lubrificantes e Filtros (Citroën Completo 2011+)
export const citroenVehicles = {
  montadora: "Citroën",
  veiculos: [
    {
      modelo: "C3 / C3 Aircross / Basalt",
      categoria: "Hatch, Crossover e SUV Compacto",
      geracoes: [
        {
          periodo: "2011 - 2021 (1ª e 2ª Geração - Motores PSA)",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.2 12V PureTech (3 cil) e 1.4 8V / 1.5 8V Flex",
              combustivel: "Flex",
              potencia: "84/90 cv (1.2) / 82 cv (1.4) / 93 cv (1.5)",
              capacidadeOleo: "3.2 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-30 Sintético (PureTech - Norma PSA B71 2312) / Óleo 5W-30 ou 10W-40 (1.4/1.5 - PSA B71 2296)",
              filtros: { oleo: "Elemento ecológico (1.2) / Filtro blindado (1.4 e 1.5)", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine / pólen" }
            },
            {
              codigo: "1.6 16V EC5 (VTi Start)",
              combustivel: "Flex",
              potencia: "115 / 118 / 122 cv",
              capacidadeOleo: "3.25 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético (Norma PSA B71 2290 / B71 2296)",
              filtros: { oleo: "Elemento ecológico ou blindado (conforme ano do copo)", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2022 - 2026+ (Nova Família C-Cubed: Novo C3, Aircross 7L e Basalt)",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 6V Firefly (Stellantis) e 1.6 16V EC5",
              combustivel: "Flex",
              potencia: "75 cv (1.0) / 120 cv (1.6)",
              capacidadeOleo: "3.0 litros (1.0 Firefly) / 3.25 litros (1.6 EC5)",
              especificacaoOleo: "Óleo 0W-20 Sintético (1.0 Firefly - Fiat 9.55535-GSX) / Óleo 0W-30 (1.6 EC5 - PSA B71 2312)",
              filtros: { oleo: "Filtro blindado (1.0) / Elemento ecológico (1.6)", combustivel: "Filtro de linha", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            },
            {
              codigo: "1.0 12V Turbo 200 (T200 - Aircross e Basalt)",
              combustivel: "Flex",
              potencia: "125 / 130 cv",
              capacidadeOleo: "4.1 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (Norma Fiat 9.55535-GSX / API SP)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "C4 Lounge / C4 Hatch / C4 Pallas / C4 Cactus",
      categoria: "Médios e SUV Compacto",
      geracoes: [
        {
          periodo: "2011 - 2018 (C4 Hatch / Pallas / Lounge)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.6 16V EC5 e 2.0 16V EW10A (Aspirados)",
              combustivel: "Flex",
              potencia: "122 cv (1.6) / 151 cv (2.0)",
              capacidadeOleo: "3.25 litros (1.6) / 4.5 litros (2.0 com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma PSA B71 2296)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        },
        {
          periodo: "2014 - 2024 (C4 Lounge THP e C4 Cactus)",
          normaEmissao: "Euro V / Proconve L6 / L7",
          motorizacoes: [
            {
              codigo: "1.6 16V EC5 (Cactus Aspirado) e 1.6 16V THP (Turbo Injeção Direta)",
              combustivel: "Flex / Gasolina",
              potencia: "120 cv (1.6) / 165 a 173 cv (THP)",
              capacidadeOleo: "3.25 litros (1.6) / 4.25 litros (THP com troca de filtro)",
              especificacaoOleo: "Óleo 0W-30 ou 5W-30 Sintético (Norma PSA B71 2312 / B71 2297)",
              filtros: { oleo: "Elemento filtrante ecológico", combustivel: "Filtro de linha / alta pressão", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Berlingo / Jumpy",
      categoria: "Furgões Leves e Médios",
      geracoes: [
        {
          periodo: "2017 - 2026+ (Jumpy) / 2018 - 2020 (Berlingo)",
          normaEmissao: "Euro V / Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "1.6 16V Flex (Berlingo) / 1.6 BlueHDi e 1.5 BlueHDi Turbo Diesel (Jumpy)",
              combustivel: "Flex / Diesel",
              potencia: "122 cv (Berlingo) / 115 cv (1.6D) / 120 cv (1.5D)",
              capacidadeOleo: "3.25L (Berlingo) / 6.0L (Jumpy 1.6D) / 5.1L (Jumpy 1.5D)",
              especificacaoOleo: "Óleo 0W-30 ou 5W-30 Sintético Low SAPS (Norma PSA B71 2312 com Arla 32 no Diesel)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro separador de água (Diesel)", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Jumper",
      categoria: "Vans, Furgões e Minibus Utilitários",
      geracoes: [
        {
          periodo: "2011 - 2017",
          normaEmissao: "Euro IV / Euro V",
          motorizacoes: [
            {
              codigo: "2.3 16V MultiJet (F1AE)",
              combustivel: "Diesel",
              potencia: "127 cv",
              capacidadeOleo: "9.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 15W-40 (Norma PSA B71 2290 / API CI-4)",
              filtros: { oleo: "Filtro blindado", combustivel: "Separador de água", ar: "Ar", cabine: "Cabine" }
            }
          ]
        },
        {
          periodo: "2018 - 2026+",
          normaEmissao: "Euro V / Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "2.0 BlueHDi / 2.2 BlueHDi Turbo Diesel",
              combustivel: "Diesel",
              potencia: "130 cv / 140 cv",
              capacidadeOleo: "6.2 a 6.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-30 Sintético Low SAPS (Norma PSA B71 2312 com Arla 32)",
              filtros: { oleo: "Elemento ecológico / blindado", combustivel: "Filtro separador de água de alta eficiência", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    }
  ]
};
