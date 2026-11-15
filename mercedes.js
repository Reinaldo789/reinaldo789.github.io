// mercedes.js - Guia Técnico de Lubrificantes e Filtros (Mercedes-Benz Vans, Caminhões e Ônibus 2012+)
export const mercedesVehicles = {
  montadora: "Mercedes-Benz",
  veiculos: [
    {
      modelo: "Sprinter (311, 313, 314, 315, 415, 416, 417, 515, 516, 517)",
      categoria: "Vans, Furgões e Chassi-Cabine",
      geracoes: [
        {
          periodo: "2012 - 2022 (Euro V - Motor OM 651)",
          normaEmissao: "Euro V (Com EGR e DPF)",
          motorizacoes: [
            {
              codigo: "OM 651 2.2 Bi-Turbo Diesel (4 cilindros)",
              combustivel: "Diesel",
              potencia: "114 cv, 129 cv, 143 cv, 146 cv ou 163 cv",
              capacidadeOleo: "11.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS (Norma MB 229.51 / MB 229.52 / ACEA C3)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro separador de água com sensor", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Euro VI - Motor OM 654)",
          normaEmissao: "Euro VI / Proconve P8 (Com DPF e Arla 32)",
          motorizacoes: [
            {
              codigo: "OM 654 2.0 Turbo Diesel (4 cilindros)",
              combustivel: "Diesel",
              potencia: "150 cv ou 170 cv",
              capacidadeOleo: "10.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-30 Sintético (Norma MB 229.52 / MB 229.71)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Filtro de combustível de alta retenção", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Accelo / Atego (Leves, Médios e Semipesados)",
      categoria: "Caminhões Urbanos e Rodoviários (815, 1016, 1316, 1419, 1719, 2426, 2430, 2730, 3030)",
      geracoes: [
        {
          periodo: "2012 - 2022 (Euro V - BlueTec 5)",
          normaEmissao: "Euro V (Com Arla 32)",
          motorizacoes: [
            {
              codigo: "OM 924 LA (4.8L - 4 cil) e OM 926 LA (7.2L - 6 cil)",
              combustivel: "Diesel",
              potencia: "156 cv a 300 cv",
              capacidadeOleo: "16.0 litros (OM 924) / 29.0 litros (OM 926 com filtro)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 (Norma MB 228.3 / MB 228.5 / API CI-4 / CJ-4)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Pré-filtro separador Racor + filtro principal", ar: "Filtro de ar principal e segurança" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Euro VI - BlueTec 6)",
          normaEmissao: "Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "OM 924 LA / OM 926 LA Euro VI",
              combustivel: "Diesel",
              potencia: "163 cv a 326 cv",
              capacidadeOleo: "16.0L (4 cil) / 29.0L (6 cil)",
              especificacaoOleo: "Óleo 10W-40 ou 15W-40 Low SAPS (Norma MB 228.51 / MB 228.31 com DPF)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Módulo duplo de filtragem Diesel", ar: "Filtro de ar" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Axor / Actros / Arocs (Pesados e Extrapesados)",
      categoria: "Caminhões Rodoviários e Fora de Estrada (2544, 2651, 3344, 4144, Actros 2548/2651/2653)",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "OM 457 LA (12L) / OM 460 LA (12.8L) / OM 471 LA (12.8L Euro VI)",
              combustivel: "Diesel",
              potencia: "354 cv a 530 cv",
              capacidadeOleo: "32.0 a 38.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 10W-40 ou 15W-40 (MB 228.5 no Euro V / MB 228.51 Low SAPS no Euro VI)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Separador de água + filtros finos", ar: "Filtro de ar pesado" }
            }
          ]
        }
      ]
    }
  ]
};
