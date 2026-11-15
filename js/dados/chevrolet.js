export const chevroletVehicles = {
  montadora: "Chevrolet",
  veiculos: [
    {
      modelo: "Spin",
      categoria: "Monovolume / Familiar",
      geracoes: [{
        periodo: "2012 – 2026+",
        normaEmissao: "PROCONVE L6 / L7 (1.4 SPE/4)",
        motorizacoes: [{
          codigo: "1.4 8V SPE/4 (Flex)",
          combustivel: "Gasolina / Etanol", potencia: "106 cv", capacidadeOleo: "3.5 Litros (com filtro)",
          especificacaoOleo: "API SP / DEXOS 1 Gen 3 0W20 ou 5W30",
          filtros: {
            oleo: "Tecfil PSL55 / Vox LB55 / Mann W712/52",
            combustivel: "Tecfil GI04/7 / Vox G43",
            ar: "Tecfil ARL4149 / Mann C22032",
            cabine: "Tecfil ACP704 / Mann CU2433"
          }
        }]
      }]
    },
    {
      modelo: "S10 / Trailblazer",
      categoria: "Picape Média / SUV",
      geracoes: [{
        periodo: "2012 – 2026+",
        normaEmissao: "Euro V / Euro VI (2.8 CTDI Duramax)",
        motorizacoes: [{
          codigo: "2.8 CTDI Duramax Turbo Diesel",
          combustivel: "Diesel S10", potencia: "200 cv", capacidadeOleo: "6.0 Litros",
          especificacaoOleo: "API CK-4 / ACEA E9 5W30 (Dexos 2)",
          filtros: {
            oleo: "Tecfil PEL106 / Vox LE106 / Mann HU7010z",
            combustivel: "Tecfil PCD38 / Mann WK720",
            ar: "Tecfil ARSL18 / Mann C30163",
            cabine: "Tecfil ACP308 / Mann CUK2442"
          }
        }]
      }]
    }
  ]
};