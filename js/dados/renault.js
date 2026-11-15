export const renaultVehicles = {
  montadora: "Renault",
  veiculos: [{
    modelo: "Duster / Oroch / Master",
    categoria: "SUV / Picape / Van",
    geracoes: [{
      periodo: "2012 – 2026+",
      normaEmissao: "Euro V / PROCONVE L7 (1.6 SCE / 2.3 dCi)",
      motorizacoes: [
        {
          codigo: "1.6 SCE 16V",
          combustivel: "Gasolina / Etanol", potencia: "120 cv", capacidadeOleo: "4.6 Litros",
          especificacaoOleo: "RN17 / API SP 5W30",
          filtros: { oleo: "Tecfil PSL55 / Mann W712/75", combustivel: "Tecfil GI04/7", ar: "Tecfil AR128", cabine: "Tecfil ACP708" }
        },
        {
          codigo: "2.3 dCi Bi-Turbo Diesel (Master)",
          combustivel: "Diesel S10", potencia: "130 / 163 cv", capacidadeOleo: "8.5 Litros",
          especificacaoOleo: "Renault RN0720 / ACEA C4 5W30",
          filtros: { oleo: "Tecfil PEL106 / Mann HU7010z", combustivel: "Tecfil PCD38 / Mann WK720", ar: "Tecfil AR1037", cabine: "Tecfil ACP910" }
        }
      ]
    }]
  }]
};