// nissan.js - Guia Técnico de Lubrificantes e Filtros (Nissan Completo 2011+)
export const nissanVehicles = {
  montadora: "Nissan",
  veiculos: [
    {
      modelo: "Frontier",
      categoria: "Caminhonete Média",
      geracoes: [
        {
          periodo: "2011 - 2016 (2ª Geração - D40)",
          normaEmissao: "Euro IV / Euro V",
          motorizacoes: [
            {
              codigo: "2.5 16V Turbo Diesel (YD25DDTi)",
              combustivel: "Diesel",
              potencia: "163 cv (Power) ou 190 cv (High Power)",
              capacidadeOleo: "6.9 a 7.3 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (API CI-4 / CJ-4 ou ACEA B4/E7)",
              filtros: { oleo: "Filtro blindado de óleo lubrificante", combustivel: "Filtro separador de água primário e secundário", ar: "Filtro de ar do motor", cabine: "Filtro de cabine / ar-condicionado" }
            }
          ]
        },
        {
          periodo: "2017 - 2022 (3ª Geração - D23 / NP300)",
          normaEmissao: "Euro V (Com uso de Arla 32 nas versões Bi-Turbo)",
          motorizacoes: [
            {
              codigo: "2.3 16V Bi-Turbo Diesel (YS23DDTT) / Mono-Turbo",
              combustivel: "Diesel",
              potencia: "160 cv (Mono) / 190 cv (Bi-Turbo)",
              capacidadeOleo: "7.5 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Nissan / ACEA C4 com DPF)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo", combustivel: "Filtro separador de água de alta eficiência", ar: "Filtro de ar principal", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (3ª Geração - Facelift / Atualizada)",
          normaEmissao: "Proconve L7 / L8 (Euro VI equivalente)",
          motorizacoes: [
            {
              codigo: "2.3 16V Bi-Turbo Diesel (Calibração Atualizada)",
              combustivel: "Diesel",
              potencia: "190 cv",
              capacidadeOleo: "7.5 litros",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Nissan com Arla 32)",
              filtros: { oleo: "Elemento ecológico de óleo", combustivel: "Filtro de combustível Diesel", ar: "Filtro de ar", cabine: "Filtro de cabine antibacteriano" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Kicks",
      categoria: "SUV Compacto",
      geracoes: [
        {
          periodo: "2016 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V Flex (HR16DE)",
              combustivel: "Flex",
              potencia: "114 cv",
              capacidadeOleo: "4.3 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN / ILSAC GF-5 ou superior)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "March / Versa",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2011 - 2020 (March) / 2011 - 2026+ (Versa)",
          normaEmissao: "Euro V / Proconve L7",
          motorizacoes: [
            {
              codigo: "1.0 16V (HR10DE - 3 cilindros) e 1.6 16V (HR16DE)",
              combustivel: "Flex",
              potencia: "77 cv (1.0) / 111 cv (1.6)",
              capacidadeOleo: "3.4L (1.0) / 4.3L (1.6 com filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Sentra",
      categoria: "Sedan Médio",
      geracoes: [
        {
          periodo: "2011 - 2013 (6ª Geração - B16)",
          normaEmissao: "Euro IV / Euro V",
          motorizacoes: [
            {
              codigo: "2.0 16V Flex (MR20DE)",
              combustivel: "Flex",
              potencia: "143 cv",
              capacidadeOleo: "4.4 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 10W-30 (API SL/SM/SN)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2014 - 2020 (7ª Geração - B17)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "2.0 16V FlexStart (MR20DE Atualizado)",
              combustivel: "Flex",
              potencia: "140 cv",
              capacidadeOleo: "4.4 litros (com filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN / ILSAC GF-5)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha ou interno no tanque", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (8ª Geração - B18)",
          normaEmissao: "Proconve L7 / L8 (Euro VI equivalente)",
          motorizacoes: [
            {
              codigo: "2.0 16V Aspirado Injeção Direta (MR20DD)",
              combustivel: "Gasolina",
              potencia: "151 cv",
              capacidadeOleo: "4.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SP / ILSAC GF-6A)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro interno no módulo da bomba", ar: "Filtro de ar do motor", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    }
  ]
};
