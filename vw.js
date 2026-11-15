// vw.js - Guia Técnico de Lubrificantes e Filtros (Volkswagen Caminhões, Ônibus e Amarok 2011+)
export const vwVehicles = {
  montadora: "Volkswagen",
  veiculos: [
    {
      modelo: "Amarok",
      categoria: "Caminhonete Média",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.0 TDI (Mono e Bi-Turbo - 122 / 140 / 180 cv) e 3.0 V6 TDI (225 / 258 cv)",
              combustivel: "Diesel",
              potencia: "140 a 180 cv (2.0) / 258 cv (V6)",
              capacidadeOleo: "7.0 litros (2.0 TDI) / 8.0 litros (3.0 V6 TDI com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS Obrigatório (Norma VW 507.00 / ACEA C3 com DPF e Arla 32 nos recentes)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro separador de água", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Delivery (4.150, 4.160, 6.160, 6.170, 9.170, 9.180, 11.180, 13.180)",
      categoria: "Caminhões Leves e VUC",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "Cummins ISF 2.8 / ISF 3.8 (Euro V) e Cummins F2.8 / F3.8 (Euro VI)",
              combustivel: "Diesel",
              potencia: "150 cv a 175 cv",
              capacidadeOleo: "6.5L (2.8) / 10.5L (3.8 com troca de filtro)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 (Cummins CES 20081 no Euro V / CES 20086 Low SAPS no Euro VI)",
              filtros: { oleo: "Filtro blindado Fleetguard", combustivel: "Filtro separador de água + filtro fino", ar: "Filtro de ar principal e segurança" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Constellation / Meteor / Volksbus",
      categoria: "Caminhões Médios, Semipesados, Extrapesados e Ônibus",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "MAN D08 (4.6L 4 cil e 6.9L 6 cil) / Cummins ISL 8.9 / MAN D26 (12.4L - Meteor)",
              combustivel: "Diesel",
              potencia: "190 cv a 530 cv",
              capacidadeOleo: "16.5L (D08 4 cil) / 28.0L (D08 6 cil) / 25.5L (ISL) / 40.0L (D26 Meteor)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 (Norma MAN M3275 / M3575 / M3677 Low SAPS no Euro VI)",
              filtros: { oleo: "Elemento ecológico / blindado", combustivel: "Separador de água Racor + filtro principal", ar: "Filtro de ar pesado" }
            }
          ]
        }
      ]
    }
  ]
};
