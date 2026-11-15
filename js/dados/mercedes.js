export const mercedesVehicles = {
  montadora: "Mercedes-Benz",
  veiculos: [{
    modelo: "Accelo / Atego / Actros",
    categoria: "Caminhão Leve, Médio e Pesado",
    geracoes: [{
      periodo: "2012 – 2026+",
      normaEmissao: "Euro V / Bluetec 5 (OM 924 / OM 926 / OM 471)",
      motorizacoes: [
        {
          codigo: "OM 924 LA 4.8 (Accelo 1016 / Atego 1419)",
          combustivel: "Diesel S10", potencia: "156 / 185 cv", capacidadeOleo: "15.0 Litros",
          especificacaoOleo: "MB 228.51 / API CJ-4 10W40",
          filtros: { oleo: "Tecfil PSL985 / Mann W950/26", combustivel: "Tecfil PSD980 / Mann WK950/26", ar: "Tecfil AR1490 / Mann C24650", arla: "Tecfil F-Arla32" }
        },
        {
          codigo: "OM 471 LA (Actros Euro V / VI)",
          combustivel: "Diesel S10", potencia: "460 / 530 cv", capacidadeOleo: "38.0 Litros",
          especificacaoOleo: "MB 228.51 10W40",
          filtros: { oleo: "Tecfil PSL928 / Mann W11102", combustivel: "Tecfil PSD920", ar: "Tecfil AR1490", arla: "Tecfil F-Arla32" }
        }
      ]
    }]
  }]
};