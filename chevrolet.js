// chevrolet.js - Guia Técnico de Lubrificantes e Filtros (Chevrolet Completo 2011+)
export const chevroletVehicles = {
  montadora: "Chevrolet",
  veiculos: [
    {
      modelo: "Onix / Onix Plus / Prisma / Celta / Classic",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2011 - 2019 (Motores Família I SPE/4)",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.0 8V e 1.4 8V SPE/4 Flex",
              combustivel: "Flex",
              potencia: "78/80 cv (1.0) / 98/106 cv (1.4)",
              capacidadeOleo: "3.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-20 Sintético (Norma GM dexos1 Gen 2 / Gen 3)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2020 - 2026+ (Nova Geração CSS Prime - 3 cilindros)",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 12V Aspirado e 1.0 12V Turbo Flex (Correia dentada banhada a óleo)",
              combustivel: "Flex",
              potencia: "82 cv (Aspirado) / 116 cv (Turbo)",
              capacidadeOleo: "3.75 a 4.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 Sintético Obrigatório (Norma GM dexos1 Gen 3 - Proteção da correia banhada)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Tracker / Spin / Cobalt / Cruze",
      categoria: "SUV Compacto, Minivan e Sedan Médio",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.8 8V Econo.Flex (Spin/Cobalt) / 1.4 Turbo (Cruze) / 1.0 e 1.2 Turbo (Tracker)",
              combustivel: "Flex",
              potencia: "111 cv (1.8) / 153 cv (1.4T) / 116 cv (1.0T) / 133 cv (1.2T)",
              capacidadeOleo: "3.5L (1.8) / 4.0L (1.4T, 1.0T e 1.2T com filtro)",
              especificacaoOleo: "Óleo 5W-30 (1.8) / Óleo 0W-20 Sintético (Norma GM dexos1 Gen 3 nos motores Turbo)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "S10 / Trailblazer / Montana",
      categoria: "Picapes e SUV Grande",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.8 16V CTDI Duramax Turbo Diesel (180 / 200 / 207 cv)",
              combustivel: "Diesel",
              potencia: "180 cv (2012-13) / 200 cv (2014-24) / 207 cv (2025+)",
              capacidadeOleo: "5.6 a 6.2 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS (Norma GM dexos2 / API CK-4 com DPF e Arla 32)",
              filtros: { oleo: "Elemento ecológico", combustivel: "Duplo filtro separador de água", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "2.5 Ecotec Flex (S10) / 1.2 Turbo Flex (Nova Montana 2023+)",
              combustivel: "Flex",
              potencia: "206 cv (2.5) / 133 cv (1.2 Turbo)",
              capacidadeOleo: "4.7L (2.5) / 4.0L (1.2 Turbo)",
              especificacaoOleo: "Óleo 5W-30 (2.5) / Óleo 0W-20 Sintético (1.2 Turbo - dexos1 Gen 3)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    }
  ]
};
