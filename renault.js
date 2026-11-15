// renault.js - Guia Técnico de Lubrificantes e Filtros (Renault Completo 2011+)
export const renaultVehicles = {
  montadora: "Renault",
  veiculos: [
    {
      modelo: "Master",
      categoria: "Vans, Furgões, Minibus e Chassi-Cabine",
      geracoes: [
        {
          periodo: "2013 - 2022 (Master III - Fase 1 / Euro V)",
          normaEmissao: "Euro V (Com uso de Arla 32)",
          motorizacoes: [
            {
              codigo: "M9T 2.3 dCi Biturbo (4 cilindros)",
              combustivel: "Diesel",
              potencia: "130 cv",
              capacidadeOleo: "8.5 litros (com troca do elemento filtrante)",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Renault RN 0720 / ACEA C4 com filtro de partículas DPF)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo", combustivel: "Filtro separador de água principal e secundário", ar: "Filtro de ar do motor", cabine: "Filtro de cabine / ar-condicionado" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Master III - Fase 2 / Atualizada)",
          normaEmissao: "Proconve L7 / L8 (Euro VI equivalente)",
          motorizacoes: [
            {
              codigo: "M9T 2.3 dCi Biturbo (Atualizado - 136 cv / 140 cv)",
              combustivel: "Diesel",
              potencia: "136 cv a 140 cv",
              capacidadeOleo: "8.5 litros",
              especificacaoOleo: "Óleo 5W-30 Sintético (Norma Renault RN 0720 com Arla 32)",
              filtros: { oleo: "Elemento ecológico de óleo", combustivel: "Filtro de combustível Diesel de alta pressão", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Sandero / Logan",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2011 - 2016 (1ª e Início da 2ª Geração)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.0 16V (Hi-Flex) e 1.6 8V / 16V (K7M / K4M)",
              combustivel: "Flex",
              potencia: "77 cv (1.0) / 95 cv a 112 cv (1.6)",
              capacidadeOleo: "3.3L a 4.8L (conforme motorização e cárter)",
              especificacaoOleo: "Óleo 10W-40 Semisintético ou 5W-40 (Norma Renault RN 0700 / API SN)",
              filtros: { oleo: "Filtro blindado de óleo lubrificante", combustivel: "Filtro de linha de combustível", ar: "Filtro de ar do motor", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2017 - 2024 (2ª Geração - Atualizada / Linha SCe)",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.0 12V SCe (3 cilindros) e 1.6 16V SCe (4 cilindros)",
              combustivel: "Flex",
              potencia: "82 cv (1.0) / 118 cv (1.6)",
              capacidadeOleo: "2.8 a 3.0 litros (1.0) / 4.6 litros (1.6 com filtro)",
              especificacaoOleo: "Óleo 10W-40 Semisintético ou 5W-40 (Norma Renault RN 0700 / RN 0710)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Duster",
      categoria: "SUV Compacto",
      geracoes: [
        {
          periodo: "2011 - 2020 (1ª Geração)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.6 16V (K4M) e 2.0 16V (F4R)",
              combustivel: "Flex",
              potencia: "115 cv (1.6) / 148 cv (2.0)",
              capacidadeOleo: "4.8 litros (1.6 com filtro) / 5.4 litros (2.0 com filtro)",
              especificacaoOleo: "Óleo 10W-40 Semisintético ou 5W-40 (Norma Renault RN 0710)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2021 - 2026+ (2ª Geração)",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V SCe e 1.3 TCe Turbo (Injeção Direta)",
              combustivel: "Flex",
              potencia: "120 cv (1.6) / 162 / 170 cv (1.3 Turbo)",
              capacidadeOleo: "4.6 litros (1.6) / 5.1 litros (1.3 Turbo com filtro)",
              especificacaoOleo: "Óleo 5W-40 Sintético (Norma Renault RN 0710 / RN 17 para o Turbo)",
              filtros: { oleo: "Filtro blindado / elemento ecológico", combustivel: "Filtro de combustível / alta pressão", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Captur",
      categoria: "SUV Compacto",
      geracoes: [
        {
          periodo: "2017 - 2024",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.6 16V SCe, 2.0 16V (F4R) e 1.3 TCe Turbo",
              combustivel: "Flex",
              potencia: "120 cv (1.6) / 143 cv (2.0) / 170 cv (1.3 Turbo)",
              capacidadeOleo: "4.6L (1.6) / 5.4L (2.0) / 5.1L (1.3 Turbo)",
              especificacaoOleo: "Óleo 10W-40 ou 5W-40 Sintético (Norma Renault RN 0710 / RN 17)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Oroch",
      categoria: "Picape Média-Compacta",
      geracoes: [
        {
          periodo: "2015 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V SCe e 1.3 TCe Turbo",
              combustivel: "Flex",
              potencia: "120 cv (1.6) / 170 cv (1.3 Turbo)",
              capacidadeOleo: "4.6 litros (1.6) / 5.1 litros (1.3 Turbo)",
              especificacaoOleo: "Óleo 10W-40 ou 5W-40 (Norma Renault RN 0710 / RN 17)",
              filtros: { oleo: "Filtro blindado de óleo", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    }
  ]
};
