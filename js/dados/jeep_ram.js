export const jeepRamVehicles = {
  montadora: "Jeep & Ram",
  veiculos: [{
    modelo: "Renegade / Compass / Commander",
    categoria: "SUV Compacto / Médio",
    geracoes: [{
      periodo: "2015 – 2026+",
      normaEmissao: "PROCONVE L7 / Euro V (2.0 Multijet / T270 1.3 Turbo)",
      motorizacoes: [
        {
          codigo: "2.0 Turbo Diesel",
          combustivel: "Diesel S10", potencia: "170 cv", capacidadeOleo: "5.2 Litros",
          especificacaoOleo: "API CI-4 5W30",
          filtros: { oleo: "Tecfil PEL509 / Mann HU709/2x", combustivel: "Tecfil PCD509 / Mann WK842/23", ar: "Tecfil AR1037", cabine: "Tecfil ACP910" }
        },
        {
          codigo: "1.3 T270 Turbo Flex",
          combustivel: "Gasolina / Etanol", potencia: "185 cv", capacidadeOleo: "4.3 Litros",
          especificacaoOleo: "API SP 0W30",
          filtros: { oleo: "Tecfil PEL119 / Mann HU6007x", combustivel: "Tecfil GI04/7", ar: "Tecfil AR1200", cabine: "Tecfil ACP720" }
        }
      ]
    }]
  }]
};