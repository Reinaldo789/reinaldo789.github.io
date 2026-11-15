export const peugeotVehicles = {
  montadora: "Peugeot",
  veiculos: [{
    modelo: "208 / 2008 / Boxer",
    categoria: "Hatch / SUV / Van",
    geracoes: [{
      periodo: "2013 – 2026+",
      normaEmissao: "PROCONVE L7 / Euro V",
      motorizacoes: [
        {
          codigo: "1.6 16V EC5",
          combustivel: "Gasolina / Etanol", potencia: "120 cv", capacidadeOleo: "3.2 Litros",
          especificacaoOleo: "API SP 5W30",
          filtros: { oleo: "Tecfil PSL55 / Mann W712/75", combustivel: "Tecfil GI50-7", ar: "Tecfil AR128", cabine: "Tecfil ACP708" }
        },
        {
          codigo: "2.3 MultiJet Turbo Diesel (Boxer)",
          combustivel: "Diesel S10", potencia: "130 cv", capacidadeOleo: "6.5 Litros",
          especificacaoOleo: "API CI-4 5W30",
          filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037", cabine: "Tecfil ACP910" }
        }
      ]
    }]
  }]
};