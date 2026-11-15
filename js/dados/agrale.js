export const agraleVehicles = {
  montadora: "Agrale",
  veiculos: [
    {
      modelo: "Marruá AM 100 / AM 200 / AM 300",
      categoria: "Utilitário / Militar / Caminhonete",
      geracoes: [{
        periodo: "2011 – 2026+",
        normaEmissao: "Euro V / MWM 3.0",
        motorizacoes: [{
          codigo: "MWM 3.0 Turbo Diesel Intercooler (Fase II / Euro V)",
          combustivel: "Diesel S10 / S500", potencia: "150 cv", capacidadeOleo: "9.5 Litros (com filtro)",
          especificacaoOleo: "API CI-4 / CH-4 15W40 ou ACEA E7",
          filtros: {
            oleo: "Tecfil PSL341 / Mann W11102/34 / Vox LB341",
            combustivel: "Tecfil PSD530 / Racor R120LJ / Mann WK829/2",
            ar: "Tecfil AR8429 / Mann C25114 / Vox HLP8429",
            cabine: "Não aplicável / Filtro de tela lavável",
            transmissao: "Tecfil PEC300 / Vox LEC300"
          }
        }]
      }]
    },
    {
      modelo: "Caminhões Agrale (Linha 8500 / 9200 / 10000)",
      categoria: "Caminhão Médio",
      geracoes: [{
        periodo: "2011 – 2026+",
        normaEmissao: "Euro V (MWM MaxxForce 4.8)",
        motorizacoes: [{
          codigo: "MWM MaxxForce 4.8 165cv",
          combustivel: "Diesel S10", potencia: "165 cv", capacidadeOleo: "14.0 Litros",
          especificacaoOleo: "API CI-4 / ACEA E7 15W40",
          filtros: {
            oleo: "Tecfil PSL985 / Mann W950/26 / Vox LB985",
            combustivel: "Tecfil PSD980 / Mann WK950/26",
            ar: "Tecfil AR1490 / Mann C24650",
            arla: "Tecfil Arla 32 / Mann WK 1999 x (Secador APU)"
          }
        }]
      }]
    }
  ]
};