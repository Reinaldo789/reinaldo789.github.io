// mitsubishi.js - Guia Técnico de Lubrificantes e Filtros (Mitsubishi Completo 2011+)
export const mitsubishiVehicles = {
  montadora: "Mitsubishi",
  veiculos: [
    {
      modelo: "L200 Triton",
      categoria: "Caminhonete Média",
      geracoes: [
        {
          periodo: "2011 - 2016 (Triton Outdoor / Savana / 3.2 Di-D)",
          normaEmissao: "Euro IV / Euro V",
          motorizacoes: [
            {
              codigo: "3.2 16V Turbo Diesel (4M41)",
              combustivel: "Diesel",
              potencia: "165 cv / 180 cv",
              capacidadeOleo: "9.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 15W-40 Sintético / Semisintético (API CI-4 / CJ-4)",
              filtros: { oleo: "Filtro blindado de óleo lubrificante", combustivel: "Filtro separador de água principal e secundário", ar: "Filtro de ar do motor", cabine: "Filtro de cabine / ar-condicionado" }
            },
            {
              codigo: "3.5 V6 24V Flex (6G74)",
              combustivel: "Flex",
              potencia: "200 / 205 cv",
              capacidadeOleo: "4.9 litros (com filtro)",
              especificacaoOleo: "Óleo 10W-30 ou 5W-30 (API SN)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2017 - 2023 (Triton Sport / 2.4 MIVEC)",
          normaEmissao: "Euro V (Com uso de Arla 32)",
          motorizacoes: [
            {
              codigo: "2.4 16V MIVEC Turbo Diesel (4N15)",
              combustivel: "Diesel",
              potencia: "190 cv",
              capacidadeOleo: "8.4 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Mitsubishi / ACEA C4 com DPF)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo", combustivel: "Filtro separador de água de alta eficiência", ar: "Filtro de ar principal", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2024 - 2026+ (Nova Geração / Reestilizada)",
          normaEmissao: "Proconve L8 (Euro VI equivalente)",
          motorizacoes: [
            {
              codigo: "2.4 16V MIVEC Bi-Turbo Diesel (4N16)",
              combustivel: "Diesel",
              potencia: "204 cv",
              capacidadeOleo: "8.4 litros",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Mitsubishi com uso de Arla 32)",
              filtros: { oleo: "Elemento ecológico de óleo", combustivel: "Filtro de combustível Diesel", ar: "Filtro de ar", cabine: "Filtro de cabine antibacteriano" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Pajero Full",
      categoria: "SUV Grande 4x4 Off-Road",
      geracoes: [
        {
          periodo: "2011 - 2021",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "3.2 16V Turbo Diesel (4M41)",
              combustivel: "Diesel",
              potencia: "200 cv",
              capacidadeOleo: "9.5 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (API CJ-4 / ACEA E9)",
              filtros: { oleo: "Filtro blindado", combustivel: "Separador de água", ar: "Filtro de ar", cabine: "Cabine" }
            },
            {
              codigo: "3.8 V6 24V Gasolina (6G75)",
              combustivel: "Gasolina",
              potencia: "250 cv",
              capacidadeOleo: "4.9 litros",
              especificacaoOleo: "Óleo 5W-30 (API SN)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Pajero Sport",
      categoria: "SUV Médio de Chassi",
      geracoes: [
        {
          periodo: "2011 - 2016 (Pajero Dakar / 3.2 Diesel)",
          normaEmissao: "Euro IV / V",
          motorizacoes: [
            {
              codigo: "3.2 16V Turbo Diesel (4M41) e 3.5 V6 Flex",
              combustivel: "Diesel / Flex",
              potencia: "170/180 cv (Diesel) / 205 cv (Flex)",
              capacidadeOleo: "9.5L (Diesel) / 4.9L (Flex)",
              especificacaoOleo: "Óleo 5W-30 ou 15W-40",
              filtros: { oleo: "Blindado", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        },
        {
          periodo: "2019 - 2026+",
          normaEmissao: "Euro V / Proconve L7",
          motorizacoes: [
            {
              codigo: "2.4 16V MIVEC Turbo Diesel (4N15)",
              combustivel: "Diesel",
              potencia: "190 cv",
              capacidadeOleo: "8.4 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (com Arla 32)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Separador de água", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "ASX / Outlander / Eclipse Cross / Lancer",
      categoria: "SUVs Crossover Médios e Sedan",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.0 16V MIVEC (4B11) e 1.5 Turbo Gasolina (4B40)",
              combustivel: "Gasolina / Flex",
              potencia: "160 cv (2.0) / 165 cv (1.5 Turbo)",
              capacidadeOleo: "4.3 a 4.6 litros (com filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN / SP)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    }
  ]
};
