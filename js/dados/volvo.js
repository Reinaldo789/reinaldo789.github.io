// volvo.js - Guia Técnico de Lubrificantes e Filtros (Volvo Completo 2011+)
export const volvoVehicles = {
  montadora: "Volvo",
  veiculos: [
    {
      modelo: "Linha VM (Semipesados e Vocacionais)",
      categoria: "Caminhões de Distribuição, Coleta e Construção",
      geracoes: [
        {
          periodo: "2012 - 2022 (VM Euro V)",
          normaEmissao: "Euro V (Com uso de Arla 32)",
          motorizacoes: [
            {
              codigo: "MWM 7B220 / 7B270 / 7B330 (7.2 Litros - 6 cilindros)",
              combustivel: "Diesel",
              potencia: "220 cv, 270 cv ou 330 cv",
              capacidadeOleo: "20.0 a 22.0 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 15W-40 API CJ-4 / ACEA E9 (Norma Volvo VDS-4)",
              filtros: { oleo: "Filtro blindado de óleo lubrificante", combustivel: "Filtro separador de água Racor/Volvo e filtro principal", ar: "Filtro de ar principal e elemento de segurança", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Novo VM Euro VI)",
          normaEmissao: "Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "Volvo D8C (7.7 Litros - 6 cilindros)",
              combustivel: "Diesel",
              potencia: "290 cv ou 360 cv",
              capacidadeOleo: "24.0 a 26.0 litros (com filtro)",
              especificacaoOleo: "Óleo 10W-30 ou 15W-40 Low SAPS (Norma Volvo VDS-4.5 / VDS-5 com Arla 32)",
              filtros: { oleo: "Filtros blindados de óleo de alta eficiência", combustivel: "Filtro separador de água aquecido e filtro fino", ar: "Filtro de ar principal e segurança" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Linha FH, FM e FMX (Pesados e Extrapesados)",
      categoria: "Caminhões Rodoviários e Fora de Estrada",
      geracoes: [
        {
          periodo: "2012 - 2022 (FH/FM Euro V)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "Volvo D11C e D13C",
              combustivel: "Diesel",
              potencia: "370 cv a 540 cv",
              capacidadeOleo: "33.0 a 35.0 litros (com troca dos 3 filtros)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-40 Sintético (Norma Volvo VDS-4 / VDS-4.5)",
              filtros: { oleo: "2 filtros de fluxo total + 1 filtro bypass", combustivel: "Filtro separador de água e filtro de alta eficiência", ar: "Filtro de ar principal", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (Linha F Euro VI)",
          normaEmissao: "Euro VI / Proconve P8 (Com DPF e Arla 32)",
          motorizacoes: [
            {
              codigo: "Volvo D13K / D13TC (Turbo Compound)",
              combustivel: "Diesel",
              potencia: "420 cv a 540 cv",
              capacidadeOleo: "33.0 a 36.0 litros",
              especificacaoOleo: "Óleo 10W-30 ou 5W-30 Sintético (Norma Volvo VDS-4.5 / VDS-5)",
              filtros: { oleo: "2 filtros de fluxo total + 1 filtro bypass", combustivel: "Sistema filtrante de alta precisão com separador de água", ar: "Filtro de ar de grande vazão" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Chassis para Ônibus (Série B)",
      categoria: "Ônibus Rodoviários, Articulados e Biarticulados",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V e Euro VI / Proconve P8",
          motorizacoes: [
            {
              codigo: "MWM 7B270 / Volvo D8C / D11C / D13C",
              combustivel: "Diesel",
              potencia: "270 cv a 450 cv",
              capacidadeOleo: "20.0 litros (B270F) / 33.0 a 36.0 litros (D11/D13)",
              especificacaoOleo: "Óleo 15W-40 ou 10W-30 (Norma Volvo VDS-4 / VDS-4.5 com Arla 32)",
              filtros: { oleo: "Filtros blindados de fluxo total e bypass", combustivel: "Filtro separador de água e filtro principal", ar: "Filtro de ar pesado de grande vazão" }
            }
          ]
        }
      ]
    }
  ]
};
