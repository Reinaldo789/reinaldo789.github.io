// hyundai.js - Guia Técnico de Lubrificantes e Filtros (Hyundai Completo 2011+)
export const hyundaiVehicles = {
  montadora: "Hyundai",
  veiculos: [
    {
      modelo: "HR / HD78 / HD80",
      categoria: "Utilitários Leves (VUC) e Caminhões Leves",
      geracoes: [
        {
          periodo: "2013 - 2022 (Euro V)",
          normaEmissao: "Euro V (Com EGR / DPF)",
          motorizacoes: [
            {
              codigo: "2.5 16V Turbo Diesel (D4CB - HR) e 3.0 Turbo Diesel (F1C / D4GA - HD)",
              combustivel: "Diesel",
              potencia: "130 cv (HR) / 155 a 170 cv (HD)",
              capacidadeOleo: "7.4 litros (HR 2.5 com filtro) / 7.5 a 9.5 litros (HD)",
              especificacaoOleo: "Óleo 5W-30 Sintético Low SAPS (ACEA C3 / API CJ-4 com DPF)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        },
        {
          periodo: "2023 - 2026+ (HR Euro VI)",
          normaEmissao: "Euro VI / Proconve P8 (Com Arla 32)",
          motorizacoes: [
            {
              codigo: "2.5 16V Turbo Diesel Euro VI (D4CB Atualizado)",
              combustivel: "Diesel",
              potencia: "130 cv",
              capacidadeOleo: "7.4 litros (com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (ACEA C3 / API CK-4)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro separador de água", ar: "Filtro de ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "HB20 / HB20S",
      categoria: "Hatch e Sedan Compacto",
      geracoes: [
        {
          periodo: "2012 - 2026+",
          normaEmissao: "Euro V / Proconve L7 / L8",
          motorizacoes: [
            {
              codigo: "1.0 12V Kappa (3 cil) e 1.6 16V Gamma (4 cil)",
              combustivel: "Flex",
              potencia: "80 cv (1.0) / 128/130 cv (1.6)",
              capacidadeOleo: "2.9 a 3.1 litros (1.0) / 3.6 litros (1.6 com filtro)",
              especificacaoOleo: "Óleo 5W-30 ou 0W-20 Sintético (API SN / SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            },
            {
              codigo: "1.0 12V TGDI (Turbo Injeção Direta - 2019+)",
              combustivel: "Flex",
              potencia: "120 cv",
              capacidadeOleo: "3.6 litros (com troca de filtro)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SP / ILSAC GF-6 - Proteção LSPI)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de combustível", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "Creta",
      categoria: "SUV Compacto",
      geracoes: [
        {
          periodo: "2017 - 2026+",
          normaEmissao: "Proconve L6 / L7 / L8",
          motorizacoes: [
            {
              codigo: "1.6 16V Gamma / 2.0 16V Nu / 1.0 TGDI Turbo / 1.6 TGDI Turbo",
              combustivel: "Flex / Gasolina",
              potencia: "130 cv (1.6) / 166 cv (2.0) / 120 cv (1.0T) / 193 cv (1.6T)",
              capacidadeOleo: "3.6L (1.6 e 1.0T) / 4.0L (2.0 Nu) / 4.5L (1.6T)",
              especificacaoOleo: "Óleo 0W-20 ou 5W-30 Sintético (API SP / ILSAC GF-6)",
              filtros: { oleo: "Filtro blindado", combustivel: "Filtro de linha", ar: "Filtro de ar", cabine: "Filtro de cabine" }
            }
          ]
        }
      ]
    },
    {
      modelo: "ix35 / Tucson / Santa Fe",
      categoria: "SUVs Médios e Grandes",
      geracoes: [
        {
          periodo: "2011 - 2026+",
          normaEmissao: "Euro V / Proconve L7",
          motorizacoes: [
            {
              codigo: "2.0 16V Flex (ix35) / 1.6 TGDI Turbo (New Tucson) / 3.3 e 3.5 V6 (Santa Fe)",
              combustivel: "Flex / Gasolina",
              potencia: "167 cv (2.0) / 177 cv (1.6T) / 270 a 285 cv (V6)",
              capacidadeOleo: "4.0L (2.0) / 4.5L (1.6T) / 5.7L (V6 com filtro)",
              especificacaoOleo: "Óleo 5W-30 Sintético (API SN / SP)",
              filtros: { oleo: "Blindado (2.0/1.6T) / Elemento ecológico (V6)", combustivel: "Filtro", ar: "Ar", cabine: "Cabine" }
            }
          ]
        }
      ]
    }
  ]
};
