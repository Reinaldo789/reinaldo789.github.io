export const vwCarrosVehicles = {
  montadora: "Volkswagen (Leves e SUVs)",
  veiculos: [{
    modelo: "Amarok / Polo / Nivus / T-Cross",
    categoria: "Picape Média / Hatch / SUV",
    geracoes: [{
      periodo: "2012 – 2026+",
      normaEmissao: "Euro V / PROCONVE L7 (2.0 TDI / 1.0 TSI / 1.4 TSI)",
      motorizacoes: [
        {
          codigo: "2.0 Bi-Turbo Diesel (Amarok)",
          combustivel: "Diesel S10", potencia: "180 cv", capacidadeOleo: "7.0 Litros",
          especificacaoOleo: "VW 507.00 / API CJ-4 5W30 (Low SAPS)",
          filtros: { oleo: "Tecfil PEL106 / Mann HU7010z", combustivel: "Tecfil PCD38 / Mann WK720", ar: "Tecfil ARSL18 / Mann C30163", cabine: "Tecfil ACP308 / Mann CUK2442" }
        },
        {
          codigo: "1.0 / 1.4 TSI Flex",
          combustivel: "Gasolina / Etanol", potencia: "128 / 150 cv", capacidadeOleo: "4.0 Litros",
          especificacaoOleo: "VW 508.00 / API SP 0W20",
          filtros: { oleo: "Tecfil PEL119 / Mann HU6007x", combustivel: "Tecfil GI04/7", ar: "Tecfil ARL4149", cabine: "Tecfil ACP704" }
        }
      ]
    }]
  }]
};