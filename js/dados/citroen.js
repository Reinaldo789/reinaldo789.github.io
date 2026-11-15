export const citroenVehicles = {
  montadora: "Citroën",
  veiculos: [
    {
      modelo: "C3 / C3 Aircross",
      categoria: "Hatch / SUV Compacto",
      geracoes: [{
        periodo: "2013 – 2026+",
        normaEmissao: "PROCONVE L6 / L7 (1.0 Firefly / 1.6 EC5)",
        motorizacoes: [
          {
            codigo: "1.0 6V Firefly (Fiat)",
            combustivel: "Gasolina / Etanol", potencia: "75 cv", capacidadeOleo: "3.0 Litros",
            especificacaoOleo: "API SP 0W20 (Petronas Selenia K Power)",
            filtros: { oleo: "Tecfil PEL119 / Mann HU6007x", combustivel: "Tecfil GI04/7", ar: "Tecfil AR8500", cabine: "Tecfil ACP901" }
          },
          {
            codigo: "1.6 16V EC5",
            combustivel: "Gasolina / Etanol", potencia: "120 cv", capacidadeOleo: "3.2 Litros",
            especificacaoOleo: "API SN / SP 5W30",
            filtros: { oleo: "Tecfil PSL55 / Mann W712/75", combustivel: "Tecfil GI50-7", ar: "Tecfil AR128", cabine: "Tecfil ACP708" }
          }
        ]
      }]
    },
    {
      modelo: "Jumper",
      categoria: "Utilitário / Van",
      geracoes: [{
        periodo: "2013 – 2026+",
        normaEmissao: "Euro V (2.3 Multijet)",
        motorizacoes: [{
          codigo: "2.3 Turbo Diesel MultiJet",
          combustivel: "Diesel S10", potencia: "130 cv", capacidadeOleo: "6.5 Litros",
          especificacaoOleo: "API CI-4 5W30 (Selênia WR Forward)",
          filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037 / Mann C35154", cabine: "Tecfil ACP910" }
        }]
      }]
    }
  ]
};