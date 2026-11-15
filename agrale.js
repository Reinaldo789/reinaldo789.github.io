// agrale.js - Guia Técnico de Lubrificantes e Filtros (Agrale Completo 2012+)
export const agraleVehicles = {
  montadora: "Agrale",
  veiculos: [
    {
      modelo: "Marruá (AM100, AM150, AM200, AM300, VTNE)",
      categoria: "Utilitários 4x4 Militar e Civil",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "Cummins ISF 2.8 (150 cv) e Cummins F3.8 Euro VI (175 cv)",
              combustivel: "Diesel",
              potencia: "150 cv (Euro V) / 175 cv (Euro VI)",
              capacidadeOleo: "6.5 litros (ISF 2.8) / 10.5 litros (F3.8 com filtro)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 Low SAPS (Norma Cummins CES 20081 / CES 20086 / API CK-4 com Arla 32)",
              filtros: { oleo: "Filtro blindado Fleetguard", combustivel: "Filtro separador de água + filtro fino", ar: "Filtro de ar pesado com elemento de segurança" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Caminhões Linha A / LX (6500, 8700, 10000, 14000) e Chassis MA / MT",
      categoria: "Caminhões Leves/Médios e Chassis para Micro-ônibus / Ônibus",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "Cummins ISF 3.8 / F3.8 e MWM MaxxForce 4.8 / 7.2",
              combustivel: "Diesel",
              potencia: "152 cv a 230 cv",
              capacidadeOleo: "10.5L (Cummins 3.8) / 14.5L (MWM 4.8) / 20.0L (MWM 7.2)",
              especificacaoOleo: "Óleo 15W-40 API CJ-4 / CK-4 (Low SAPS no Euro VI com Arla 32)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água e filtro principal", ar: "Filtro de ar principal e segurança" }
            }
          ]
        }
      ]
    }
  ]
};
