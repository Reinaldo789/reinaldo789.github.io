// scania.js - Guia Técnico de Lubrificantes e Filtros (Scania Completo 2011+)
export const scaniaVehicles = {
  montadora: "Scania",
  veiculos: [
    {
      modelo: "Série P, G e R (PGR / Highline / Streamline)",
      categoria: "Caminhões Semipesados, Pesados e Extrapesados",
      geracoes: [
        {
          periodo: "2011 - 2012 (Fase Final Euro III - Ex: R420 / P340)",
          normaEmissao: "Euro III",
          motorizacoes: [
            {
              codigo: "DC11 / DC12 (11 e 12 Litros - 6 cilindros)",
              combustivel: "Diesel",
              potencia: "340 cv a 420 cv",
              capacidadeOleo: "30.0 a 34.0 litros (com troca de filtros e centrífugo)",
              especificacaoOleo: "Óleo Mineral ou Semisintético 15W-40 (Norma Scania LDF-2 / LDF-3 / API CI-4)",
              filtros: { oleo: "Filtro de óleo blindado + rotor do filtro centrífugo", combustivel: "Filtro separador de água e filtro principal", ar: "Filtro de ar principal e elemento de segurança" }
            }
          ]
        },
        {
          periodo: "2012 - 2018 (Linha Euro V / Streamline)",
          normaEmissao: "Euro V (Com uso de Arla 32 - SCR)",
          motorizacoes: [
            {
              codigo: "DC09 (9L - 5 cil) / DC13 (13L - 6 cil)",
              combustivel: "Diesel",
              potencia: "250 cv a 500 cv",
              capacidadeOleo: "28.0 litros (DC09) / 36.0 a 43.0 litros (DC13 com troca de filtros)",
              especificacaoOleo: "Óleo 10W-40 Sintético ou 15W-40 (Norma Scania LDF-3 / ACEA E7/E4)",
              filtros: { oleo: "Elemento filtrante ecológico de óleo + rotor centrífugo", combustivel: "Sistema duplo de filtragem", ar: "Filtro de ar pesado de alta capacidade", cabine: "Filtro de ar-condicionado" }
            },
            {
              codigo: "DC16 (16 Litros - V8 - Ex: R580 / R620)",
              combustivel: "Diesel",
              potencia: "580 cv / 620 cv",
              capacidadeOleo: "43.0 a 48.0 litros",
              especificacaoOleo: "Óleo 10W-40 Sintético (Norma Scania LDF-3)",
              filtros: { oleo: "Elemento ecológico + rotor centrífugo", combustivel: "Filtro duplo de combustível", ar: "Filtro de ar de grande vazão" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Nova Geração Scania (NTG - Séries P, G, R e S)",
      categoria: "Caminhões Pesados e Extrapesados",
      geracoes: [
        {
          periodo: "2019 - 2022 (NTG Euro V)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "DC13 (13 Litros - XPI)",
              combustivel: "Diesel",
              potencia: "410 cv, 450 cv, 500 cv ou 540 cv",
              capacidadeOleo: "38.0 a 43.0 litros (com filtro)",
              especificacaoOleo: "Óleo 10W-40 Sintético (Norma Scania LDF-3 / LDF-4)",
              filtros: { oleo: "Elemento ecológico de óleo + rotor centrífugo", combustivel: "Elementos filtrantes XPI de alta pressão", ar: "Filtro de ar da cabine NTG", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (NTG Euro VI / Linha Super)",
          normaEmissao: "Euro VI / Proconve P8 (Com DPF e Arla 32)",
          motorizacoes: [
            {
              codigo: "DC13 173 / 174 (Linha Super 13L) e DC13 Euro VI",
              combustivel: "Diesel",
              potencia: "420 cv, 460 cv, 500 cv ou 560 cv",
              capacidadeOleo: "40.0 a 45.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 10W-40 ou 5W-30 Low SAPS Sintético (Norma Scania LDF-4 / ACEA E6/E9)",
              filtros: { oleo: "Elemento filtrante ecológico", combustivel: "Filtros de combustível de altíssima retenção", ar: "Filtro de ar principal e segurança", cabine: "Filtro de cabine com carvão ativado" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Chassis para Ônibus (Séries K e F)",
      categoria: "Ônibus Rodoviários e Urbanos",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "DC09 (9L - 5 cil) / DC13 (13L - 6 cil)",
              combustivel: "Diesel",
              potencia: "250 cv a 450 cv",
              capacidadeOleo: "28.0 a 40.0 litros",
              especificacaoOleo: "Óleo 10W-40 Sintético (Norma Scania LDF-3 / LDF-4 com Arla 32)",
              filtros: { oleo: "Elemento ecológico + rotor centrífugo", combustivel: "Filtro separador de água e filtro fino", ar: "Filtro de ar pesado de grande vazão" }
            }
          ]
        }
      ]
    }
  ]
};
