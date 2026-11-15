export const ivecoVehicles = {
  montadora: "Iveco",
  veiculos: [
    {
      modelo: "Daily (35S14 / 45S17 / 55C17 / 70C17)",
      categoria: "Utilitário / Caminhão Leve",
      geracoes: [{
        periodo: "2012 – 2026+",
        normaEmissao: "Euro V (F1C 3.0 16V)",
        motorizacoes: [{
          codigo: "F1C 3.0 16V Turbo Diesel Intercooler",
          combustivel: "Diesel S10", potencia: "146 / 170 cv", capacidadeOleo: "6.5 Litros",
          especificacaoOleo: "API CI-4 / ACEA E7 5W30 (Selênia WR Forward)",
          filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x / Vox LEC509", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037 / Mann C35154", cabine: "Tecfil ACP910" }
        }]
      }]
    },
    {
      modelo: "Stralis / Tector",
      categoria: "Caminhão Pesado e Médio",
      geracoes: [{
        periodo: "2012 – 2026+",
        normaEmissao: "Euro V / Cursor 9 / 13",
        motorizacoes: [{
          codigo: "Cursor 9 / 13 Euro V",
          combustivel: "Diesel S10", potencia: "360 / 440 / 480 cv", capacidadeOleo: "28.0 Litros",
          especificacaoOleo: "API CI-4 / CK-4 15W40",
          filtros: { oleo: "Tecfil PSL928 / Mann W11102", combustivel: "Tecfil PSD920 / Mann WK1080/x", ar: "Tecfil AR1490", arla: "Tecfil F-Arla32" }
        }]
      }]
    }
  ]
};