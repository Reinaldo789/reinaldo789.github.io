// honda.js - Guia Técnico de Lubrificantes e Filtros (Honda Completo 2011+)
export const hondaVehicles = {
  montadora: "Honda",
  veiculos: [
    {
      modelo: "Fit / City / WR-V",
      categoria: "Hatch, Sedan Compacto e Crossover",
      geracoes: [
        {
          periodo: "2011 - 2021 (Motores i-VTEC SOHC)",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.4 16V e 1.5 16V i-VTEC FlexOne (L13 / L15)",
              combustivel: "Flex",
              potencia: "101 cv (1.4) / 116 cv (1.5)",
              capacidadeOleo: "3.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SN / SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha (externo)", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2022 - 2026+ (New City Hatch / Sedan e WR-V Atualizado)",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.5 16V DI DOHC i-VTEC (Injeção Direta)",
              combustivel: "Flex",
              potencia: "126 cv",
              capacidadeOleo: "3.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro interno no tanque", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Civic",
      categoria: "Sedan Médio",
      geracoes: [
        {
          periodo: "2012 - 2016 (9ª Geração - G9)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "1.8 16V (R18) e 2.0 16V i-VTEC FlexOne (R20)",
              combustivel: "Flex",
              potencia: "140 cv (1.8) / 155 cv (2.0)",
              capacidadeOleo: "3.7 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SN / SP)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2017 - 2021 (10ª Geração - G10)",
          normaEmissao: "Proconve L6",
          motorizacoes: [
            {
              codigo: "2.0 16V FlexOne (Aspirado) e 1.5 16V Turbo (Touring)",
              combustivel: "Flex (2.0) / Gasolina (1.5T)",
              potencia: "155 cv (2.0) / 173 cv (1.5 Turbo)",
              capacidadeOleo: "3.7L (2.0) / 3.5L (1.5 Turbo com filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "HR-V / ZR-V / CR-V",
      categoria: "SUVs Compactos e Médios",
      geracoes: [
        {
          periodo: "2015 - 2026+",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.8 16V Flex (HR-V G1) / 1.5 DI Flex (HR-V G2) / 1.5 Turbo (Touring) / 2.0 (ZR-V/CR-V)",
              combustivel: "Flex / Gasolina / Híbrido",
              potencia: "140 cv (1.8) / 126 cv (1.5 DI) / 177 cv (1.5T) / 161 cv (ZR-V)",
              capacidadeOleo: "3.5 a 4.2 litros (conforme motorização, com filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético (API SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha / interno", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    }
  ]
};
