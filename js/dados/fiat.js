export const fiatVehicles = {
  montadora: "Fiat",
  veiculos: [
    {
      modelo: "Strada / Toro",
      categoria: "Picape",
      geracoes: [{
        periodo: "2016 – 2026+",
        normaEmissao: "PROCONVE L7 / L8 (1.3 Firefly / 2.0 Multijet)",
        motorizacoes: [
          {
            codigo: "1.3 Firefly Flex",
            combustivel: "Gasolina / Etanol", potencia: "107 cv", capacidadeOleo: "3.2 Litros",
            especificacaoOleo: "API SP 0W20",
            filtros: { oleo: "Tecfil PEL119 / Mann HU6007x", combustivel: "Tecfil GI04/7", ar: "Tecfil AR1200", cabine: "Tecfil ACP720" }
          },
          {
            codigo: "2.0 Turbo Diesel (Toro)",
            combustivel: "Diesel S10", potencia: "170 cv", capacidadeOleo: "5.2 Litros",
            especificacaoOleo: "API CI-4 5W30 (Selênia WR Forward)",
            filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037", cabine: "Tecfil ACP910" }
          }
        ]
      }]
    },
    {
      modelo: "Ducato",
      categoria: "Utilitário / Van",
      geracoes: [{
        periodo: "2018 – 2026+",
        normaEmissao: "Euro V (2.3 Multijet)",
        motorizacoes: [{
          codigo: "2.3 MultiJet II Turbo Diesel",
          combustivel: "Diesel S10", potencia: "130 cv", capacidadeOleo: "6.5 Litros",
          especificacaoOleo: "API CI-4 5W30",
          filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037", cabine: "Tecfil ACP910" }
        }]
      }]
    }
  ]
};