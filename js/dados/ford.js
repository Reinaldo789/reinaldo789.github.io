export const fordVehicles = {
  montadora: "Ford Caminhões",
  veiculos: [{
    modelo: "Cargo (816 / 1119 / 1319 / 1723 / 2429 / 2629)",
    categoria: "Caminhão Médio e Pesado",
    geracoes: [{
      periodo: "2012 – 2026+",
      normaEmissao: "Euro V (Cummins ISB 4.5 / 6.7)",
      motorizacoes: [
        {
          codigo: "Cummins ISB 4.5 162cv (Cargo 816 / 1119)",
          combustivel: "Diesel S10", potencia: "162 cv", capacidadeOleo: "11.0 Litros",
          especificacaoOleo: "API CI-4 / ACEA E7 15W40",
          filtros: { oleo: "Tecfil PSL341 / Mann W11102/34", combustivel: "Tecfil PSD530 / Mann WK829/2", ar: "Tecfil AR1490 / Mann C24650", arla: "Tecfil Arla 32 / Mann WK 1999" }
        },
        {
          codigo: "Cummins ISB 6.7 230 / 290cv (Cargo 1723 / 2429)",
          combustivel: "Diesel S10", potencia: "230 / 290 cv", capacidadeOleo: "18.0 Litros",
          especificacaoOleo: "API CI-4 / CK-4 15W40",
          filtros: { oleo: "Tecfil PSL341 / Mann W11102/34", combustivel: "Tecfil PSD980 / Mann WK950/26", ar: "Tecfil AR1490 / Mann C25114", arla: "Tecfil Arla 32" }
        }
      ]
    }]
  }]
};