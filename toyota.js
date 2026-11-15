// toyota.js - Guia Técnico de Lubrificantes e Filtros (Toyota Completo 2011+)
export const toyotaVehicles = {
  montadora: "Toyota",
  veiculos: [
    {
      modelo: "Hilux / SW4",
      categoria: "Caminhonete Média e SUV de Chassi",
      geracoes: [
        {
          periodo: "2012 - 2015 (7ª Geração - Euro V)",
          normaEmissao: "Euro V",
          motorizacoes: [
            {
              codigo: "2.5 16V e 3.0 16V D-4D Turbo Diesel (2KD / 1KD-FTV)",
              combustivel: "Diesel",
              potencia: "102 cv (2.5) / 171 cv (3.0)",
              capacidadeOleo: "6.9 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 15W-40 Sintético/Semisintético (API CI-4 / CJ-4 / ACEA B1/E7)",
              filtros: { oleo: "Filtro blindado", combustivel: "Elemento filtrante separador de água", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2016 - 2026+ (8ª Geração - Motor GD)",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.8 16V Turbo Diesel (1GD-FTV - 177 / 204 / 224 cv)",
              combustivel: "Diesel",
              potencia: "177 cv (2016-20) / 204 cv (2021+) / 224 cv (GR-S)",
              capacidadeOleo: "7.5 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS (ACEA C2 / API CF-4/CK-4 com DPF e Arla 32)",
              filtros: { oleo: "Filtro blindado", combustivel: "Elemento filtrante de alta retenção", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Corolla / Corolla Cross",
      categoria: "Sedan Médio e SUV Médio",
      geracoes: [
        {
          periodo: "2011 - 2019 (10ª e 11ª Geração)",
          normaEmissao: "Euro V / Proconve L6",
          motorizacoes: [
            {
              codigo: "1.8 16V e 2.0 16V Dual VVT-i Flex (2ZR / 3ZR)",
              combustivel: "Flex",
              potencia: "144 cv (1.8) / 154 cv (2.0)",
              capacidadeOleo: "4.2 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN / ILSAC GF-5)",
              filtros: { oleo: "Elemento ecológico (2011-14) / Blindado (2015+)", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        },
        {
          periodo: "2020 - 2026+ (12ª Geração / Corolla Cross)",
          normaEmissao: "Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "2.0 16V Dynamic Force Flex (M20A) e 1.8 16V Hybrid Flex",
              combustivel: "Flex / Híbrido",
              potencia: "175/177 cv (2.0) / 122 cv combinado (Hybrid)",
              capacidadeOleo: "4.3 litros (2.0) / 4.2 litros (1.8 Hybrid com filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 0W-16 Sintético (API SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha / interno", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Etios / Yaris",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.3 16V e 1.5 16V Dual VVT-i Flex",
              combustivel: "Flex",
              potencia: "98 cv (1.3) / 107/110 cv (1.5)",
              capacidadeOleo: "3.4 a 3.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SN / SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    }
  ]
};
