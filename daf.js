// daf.js - Guia Técnico de Lubrificantes e Filtros (DAF Completo 2013+)
export const dafVehicles = {
  montadora: "DAF",
  veiculos: [
    {
      modelo: "Linha CF (Médios, Semipesados e Vocacionais)",
      categoria: "Caminhões Distribuição, Rodoviário e Fora de Estrada",
      geracoes: [
        {
          periodo: "2015 - 2022 (CF 85 / CF Euro V)",
          normaEmissao: "Euro V (Com uso de Arla 32)",
          motorizacoes: [
            {
              codigo: "PACCAR PX-7 (6.7L) e PACCAR MX-11 / MX-13",
              combustivel: "Diesel",
              potencia: "286 cv a 460 cv",
              capacidadeOleo: "22.0L (PX-7) / 34.0L a 40.0L (MX-11 / MX-13)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 Sintético (Norma PACCAR / API CJ-4 / ACEA E9)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo + módulo centrífugo (MX)", combustivel: "Filtro separador de água e filtro fino", ar: "Filtro de ar principal e segurança", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Novo CF Euro VI)",
          normaEmissao: "Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "PACCAR PX-7 (6.7L) e PACCAR MX-11 (10.8L)",
              combustivel: "Diesel",
              potencia: "310 cv (PX-7) / 410 cv ou 450 cv (MX-11)",
              capacidadeOleo: "22.0L (PX-7) / 35.0L (MX-11)",
              especificacaoOleo: "Óleo 10W-30 ou 10W-40 Low SAPS Sintético (Norma PACCAR / ACEA E6/E9)",
              filtros: { oleo: "Elemento ecológico de óleo", combustivel: "Sistema filtrante duplo com separador de água", ar: "Filtro de ar" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Linha XF (Pesados e Extrapesados Rodoviários)",
      categoria: "Caminhões de Longa Distância e Bitrem",
      geracoes: [
        {
          periodo: "2013 - 2020 (XF 105 - Euro V)",
          normaEmissao: "Euro V (Com uso de Arla 32)",
          motorizacoes: [
            {
              codigo: "PACCAR MX-13 (12.9 Litros - 6 cilindros)",
              combustivel: "Diesel",
              potencia: "410 cv, 460 cv ou 510 cv",
              capacidadeOleo: "38.0 a 42.0 litros (com troca de filtros e centrífugo)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 Sintético (Norma DAF / ACEA E9 / E7)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo + rotor do filtro centrífugo", combustivel: "Filtro separador de água e filtro principal", ar: "Filtro de ar pesado", cabine: "Filtro de ar-condicionado" }
            }
          ]
        },
        {
          periodo: "2021 - 2026+ (Novo XF - Euro V e Euro VI)",
          normaEmissao: "Euro V (2021-2022) / Euro VI - Proconve P8 (2023+)",
          motorizacoes: [
            {
              codigo: "PACCAR MX-13 (Nova Geração - 480 cv e 530 cv)",
              combustivel: "Diesel",
              potencia: "480 cv ou 530 cv",
              capacidadeOleo: "40.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 10W-30 ou 10W-40 Low SAPS Sintético (Norma PACCAR / ACEA E6/E9 com DPF e Arla 32)",
              filtros: { oleo: "Elemento ecológico de óleo + rotor centrífugo", combustivel: "Filtro separador de água e filtro fino", ar: "Filtro de ar principal e segurança", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    }
  ]
};
