export const fordCarrosVehicles = {
  montadora: "Ford (Leves e Picapes)",
  veiculos: [{
    modelo: "Ranger",
    categoria: "Picape Média",
    geracoes: [{
      periodo: "2012 – 2026+",
      normaEmissao: "Euro V / Euro VI (2.2 / 3.2 / 2.0 Panther / V6)",
      motorizacoes: [
        {
          codigo: "2.2 / 3.2 Duratorq Turbo Diesel",
          combustivel: "Diesel S10", potencia: "160 / 200 cv", capacidadeOleo: "9.5 Litros (3.2)",
          especificacaoOleo: "API WSS-M2C913-D / 5W30",
          filtros: { oleo: "Tecfil PEL106 / Mann HU7010z", combustivel: "Tecfil PCD38 / Mann WK720", ar: "Tecfil ARSL18 / Mann C30163", cabine: "Tecfil ACP308" }
        },
        {
          codigo: "2.0 Turbo / V6 3.0 Turbo Diesel (Nova Ranger)",
          combustivel: "Diesel S10", potencia: "170 / 250 cv", capacidadeOleo: "7.0 / 8.5 Litros",
          especificacaoOleo: "API WSS-M2C950-A / 0W30",
          filtros: { oleo: "Tecfil PEL119 / Mann HU6007x", combustivel: "Tecfil PCD509", ar: "Tecfil AR1200", cabine: "Tecfil ACP720" }
        }
      ]
    }]
  }]
};