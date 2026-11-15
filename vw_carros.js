// vw_carros.js - Guia Técnico de Lubrificantes e Filtros (Volkswagen Passeio & Utilitários Leves 2011+)
export const vwCarrosVehicles = {
  montadora: "Volkswagen",
  veiculos: [
    {
      modelo: "Gol / Voyage / Saveiro / Fox",
      categoria: "Compactos e Picape Leve",
      geracoes: [
        {
          periodo: "2011 - 2016 (Motores EA111 - G5 / G6)",
          normaEmissao: "Euro V / Proconve L5-L6",
          motorizacoes: [
            {
              codigo: "1.0 8V VHT / 1.6 8V VHT (EA111)",
              combustivel: "Flex",
              potencia: "72/76 cv (1.0) / 101/104 cv (1.6)",
              capacidadeOleo: "3.5 litros (1.0) / 4.0 litros (1.6 com troca de filtro)",
              especificacaoOleo: "Óleo 5W-40 Sintético (Norma VW 502.00 / API SN)",
              filtros: { oleo: "Filtro blindado de óleo lubrificante", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine / pólen" }
            }
          ]
        },
        {
          periodo: "2016 - 2026+ (Motores EA211 - G6 / G7 / G8 / Saveiro)",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 12V MPI (3 cilindros) e 1.6 16V MSI (4 cilindros)",
              combustivel: "Flex",
              potencia: "75/84 cv (1.0) / 110/120 cv (1.6)",
              capacidadeOleo: "3.8 litros (1.0) / 4.5 litros (1.6 com filtro)",
              especificacaoOleo: "Óleo 5W-40 (VW 502.00 / 508.88) ou 0W-20 (VW 508.00 nos modelos L7/L8 recentes)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Up!",
      categoria: "Subcompacto",
      geracoes: [
        {
          periodo: "2014 - 2021",
          normaEmissao: "Proconve L6",
          motorizacoes: [
            {
              codigo: "1.0 12V MPI (Aspirado) e 1.0 12V TSI (170 TSI Turbo)",
              combustivel: "Flex",
              potencia: "75/82 cv (MPI) / 101/105 cv (TSI)",
              capacidadeOleo: "3.8 litros (MPI) / 4.0 litros (TSI com filtro)",
              especificacaoOleo: "Óleo 5W-40 Sintético (Norma VW 502.00 / 508.88)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Polo / Virtus",
      categoria: "Hatch e Sedan Compacto (Plataforma MQB)",
      geracoes: [
        {
          periodo: "2018 - 2026+",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 MPI / 1.6 MSI (Aspirados)",
              combustivel: "Flex",
              potencia: "84 cv (1.0) / 117 cv (1.6)",
              capacidadeOleo: "3.8L (1.0) / 4.5L (1.6 com filtro)",
              especificacaoOleo: "Óleo 5W-40 (VW 508.88) ou 0W-20 (VW 508.00 nos 2022+)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "1.0 12V TSI (170/200 TSI) e 1.4 16V TSI (250 TSI)",
              combustivel: "Flex",
              potencia: "109/116/128 cv (1.0 TSI) / 150 cv (250 TSI)",
              capacidadeOleo: "4.0 litros (1.0 TSI) / 4.3 litros (1.4 TSI com filtro)",
              especificacaoOleo: "Óleo 5W-40 (VW 508.88 até 2021) / Óleo 0W-20 Sintético (Norma VW 508.00 / 509.00 nos 2022+)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Nivus / T-Cross / Taos",
      categoria: "SUVs Compactos e Médios",
      geracoes: [
        {
          periodo: "2019 - 2026+",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 12V TSI (200 TSI) e 1.4 16V TSI (250 TSI)",
              combustivel: "Flex",
              potencia: "128 cv (200 TSI) / 150 cv (250 TSI)",
              capacidadeOleo: "4.0 litros (200 TSI) / 4.3 litros (250 TSI com filtro)",
              especificacaoOleo: "Óleo 5W-40 (VW 508.88 até 2021) / Óleo 0W-20 Sintético (Norma VW 508.00 / 509.00 nos 2022+)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Jetta / Tiguan Allspace",
      categoria: "Sedan Médio e SUV Médio/Grande",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.4 16V TSI (250 TSI) e 2.0 16V TSI (EA888 - 200/211/231 cv)",
              combustivel: "Flex / Gasolina",
              potencia: "150 cv (1.4) / 200 a 231 cv (2.0 TSI)",
              capacidadeOleo: "4.3 litros (1.4 TSI) / 4.6 a 5.7 litros (2.0 TSI)",
              especificacaoOleo: "Óleo 5W-40 (VW 502.00 / 508.88) ou 0W-20 / 0W-30 (VW 508.00 / 504.00 conforme ano)",
              filtros: { oleo: "Blindado (1.4 / Gen 2) / Elemento ecológico (Gen 3)", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    }
  ]
};
