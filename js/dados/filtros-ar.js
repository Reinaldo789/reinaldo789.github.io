/* Filtros de ar (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos de cada entrada:
     tipo         "ar"
     url          link da página do filtro no catálogo (botão "Abrir no catálogo Tecfil")
     especificacoes  { altura, diametroExterno, diametroInterno, rosca, elemento,
                       valvulaAntiRetorno, valvulaAlivio, pesoLiquido, pesoBruto, caixa, observacao }
     conversoes   { "Marca": ["código", ...] }  todas as marcas do catálogo (a busca acha por qualquer uma)
     aplicacoes   { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] }  ou null se a lista não veio inteira
   O filtro aparece na busca mesmo que nenhum veículo do guia o use. */
export const filtrosAr = {

  /* Modelo para copiar (apague as barras para usar):
  ARS8234: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS8234",
    especificacoes: { altura: 0, diametroExterno: 0, diametroInterno: 0, elemento: "Papel", observacao: "" },
    conversoes: { "Tecfil": ["ARS8234"], "Mann": ["C 18 450/1"] },
    aplicacoes: { "Agrale": [["Marruá AM 200", "MWM 4.07", "2006 - >"]] }
  },
  */

};
/* Filtros de ar (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos de cada entrada:
     tipo         "ar"
     url          link da página do filtro no catálogo (botão "Abrir no catálogo Tecfil")
     especificacoes  { altura, diametroExterno, diametroInterno, rosca, elemento,
                       valvulaAntiRetorno, valvulaAlivio, pesoLiquido, pesoBruto, caixa, observacao }
     conversoes   { "Marca": ["código", ...] }  todas as marcas do catálogo (a busca acha por qualquer uma)
     aplicacoes   { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] }  ou null se a lista não veio inteira
   O filtro aparece na busca mesmo que nenhum veículo do guia o use. */
export const filtrosAr = {

  AP9834: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/AP9834",
    especificacoes: {
      elemento: "Papel",
      observacao: "Elemento primário / linha pesada"
    },
    conversoes: {
      "Tecfil": ["AP9834"]
    },
    aplicacoes: null
  },

  ARL1655: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL1655",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL1655"],
      "Fram": ["CA9518"],
      "Mahle": ["LX1251"],
      "Mann": ["C2425"],
      "Vox": ["HSL1655"],
      "Wega": ["FAP3126"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["Gol / Parati / Saveiro", "1.0 / 1.6 / 1.8 / 2.0", "1997 - 2008"]
      ]
    }
  },

  ARL1656: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL1656",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL1656"],
      "Fram": ["CA8978"],
      "Mahle": ["LX1252"],
      "Mann": ["C27192/1"],
      "Vox": ["HSL1656"],
      "Wega": ["FAP3127"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["Polo / Fox / SpaceFox", "1.0 / 1.6", "2002 - 2014"]
      ]
    }
  },

  ARL2204: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL2204",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL2204"],
      "Fram": ["CA10234"],
      "Mahle": ["LX1883"],
      "Mann": ["C25114"],
      "Vox": ["HSL2204"],
      "Wega": ["JFA0211"]
    },
    aplicacoes: {
      "Toyota": [
        ["Corolla", "1.6 / 1.8 16V", "2002 - 2008"]
      ]
    }
  },

  ARL3280: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL3280",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL3280"],
      "Fram": ["CA10165"],
      "Mahle": ["LX1785"],
      "Mann": ["C26005"],
      "Vox": ["HSL3280"],
      "Wega": ["FAP2901"]
    },
    aplicacoes: {
      "Fiat": [
        ["Punto / Linea", "1.4 / 1.8", "2007 - 2016"]
      ]
    }
  },

  ARL4103: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL4103",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL4103"],
      "Fram": ["CA9697"],
      "Mahle": ["LX1231"],
      "Mann": ["C27112"],
      "Vox": ["HSL4103"],
      "Wega": ["FAP3210"]
    },
    aplicacoes: {
      "Ford": [
        ["Fiesta / EcoSport / Ka", "1.0 / 1.6 Zetec Rocam", "2002 - 2014"]
      ]
    }
  },

  ARL4125: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL4125",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL4125"],
      "Fram": ["CA10475"],
      "Mahle": ["LX2144"],
      "Mann": ["C25008"],
      "Vox": ["HSL4125"],
      "Wega": ["FAP3218"]
    },
    aplicacoes: {
      "Ford": [
        ["Focus", "1.6 / 2.0 16V", "2008 - 2013"]
      ]
    }
  },

  ARL4130: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL4130",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL4130"],
      "Fram": ["CA10726"],
      "Mahle": ["LX2652"],
      "Mann": ["C27006"],
      "Vox": ["HSL4130"],
      "Wega": ["FAP3222"]
    },
    aplicacoes: {
      "Ford": [
        ["New Fiesta / Ka", "1.0 / 1.5 / 1.6 Sigma", "2011 - >"]
      ]
    }
  },

  ARL4148: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL4148",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL4148"],
      "Fram": ["CA11484"],
      "Mahle": ["LX3220"],
      "Mann": ["C27024"],
      "Vox": ["HSL4148"],
      "Wega": ["FAP3230"]
    },
    aplicacoes: {
      "Ford": [
        ["Ranger", "2.2 / 3.2 Duratorq TDCi", "2012 - >"]
      ]
    }
  },

  ARL4150: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL4150",
    especificacoes: {
      elemento: "Papel",
      observacao: ""
    },
    conversoes: {
      "Tecfil": ["ARL4150"],
      "Fram": ["CA11502"],
      "Mahle": ["LX3412"],
      "Mann": ["C28014"],
      "Vox": ["HSL4150"],
      "Wega": ["FAP3235"]
    },
    aplicacoes: {
      "Ford": [
        ["EcoSport", "1.5 / 2.0 Dragon / Duratec", "2017 - >"]
      ]
    }
  }

};
