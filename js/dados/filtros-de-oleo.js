/* Filtros de óleo (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos: tipo, url, especificacoes, conversoes, aplicacoes.
   aplicacoes: { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] } ou null. */
export const filtrosOleo = {

  "PEL106": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel106/produto/114",
    especificacoes: { altura: 73, diametroExterno: 62, diametroInterno: 28, rosca: "Não possui", elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347805"], "Authomix": ["FOL0106"], "Bosch": ["0986B00704"],
      "Delphi": ["EFL760"], "Ford": ["1343102", "1S7J6744BA", "4S7J6744AA"], "Fram": ["CH10502"],
      "Hengst": ["E20HD79"], "Inpeca": ["SLE2110"], "Japanparts": ["FOECO036", "FOECO039"],
      "Js Asakashi": ["OE406J"], "KSPG": ["50013866"], "Mahle": ["OX203D", "OX979"],
      "Mann": ["HU711X"], "Millard": ["ML321"], "Partmo": ["PP6"],
      "Sakura": ["EO1701"], "Seineca": ["SEF8214"], "Tecfil": ["PEL106"],
      "Turbo Filtros": ["TLE106"], "Vox": ["LE106"], "Wega": ["WOE120", "WOE121"],
      "WIX": ["WL57203"]
    },
    aplicacoes: {
      "Ford": [
        ["Ecosport Duratech HE (Câmbio Manual)", "2.0", "01/2003"],
        ["- 02/2003 Gasolina", "Fusion", "SEL"],
        ["2.3 16V 05/2006", "- >", "Gasolina"],
        ["Mondeo Ghia Duratorq DI", "2.0 TD", "01/2002"]
      ],
      "- >": [
        ["Diesel Mondeo", "1.8 Tdci", "12/2007"]
      ]
    }
  },

  "PEL107": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel107/produto/545",
    especificacoes: { altura: 135, diametroExterno: 64.3, diametroInterno: null, rosca: "Não possui", elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0107"], "Delkraft": ["DO439"], "Hengst": ["E17HD57"],
      "Japanparts": ["FOECO041"], "Mahle": ["OX179"], "Mann": ["HU721/2X"],
      "Mercedes Benz": ["3740907101", "6131800009"], "Parker": ["RP804"], "Seineca": ["SEF7606"],
      "Tecfil": ["PEL107"], "Turbo Filtros": ["TL0009ECO"], "Vox": ["LE107"],
      "Wega": ["WOE242"],
      "Fram": ["CH11080"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["ACCELO 715C OM 612 LA", "2.7 L 20V DOHC L5", "01/2002"],
        ["- 04/2007 Diesel", "ACCELO 715C", "OM 612 LA"],
        ["2.7 L 20V DOHC L5 05/2007", "- >", "Diesel"]
      ]
    }
  },

  "PEL108": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel108/produto/54",
    especificacoes: { altura: 71, diametroExterno: 65.6, diametroInterno: 24.5, rosca: "Não possui", elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347726"], "Authomix": ["FOL0108"], "Baldwin": ["P7450"],
      "Citroen": ["1109AJ", "1109X4", "1109Z2"], "Controil": ["CLFO00001"], "Delphi": ["EFL252"],
      "Filtran": ["1009973"], "Fleetguard": ["LF16448"], "Ford": ["6C1Q6744AA", "JS16744AA"],
      "Fram": ["CH10066", "CH9973ECO"], "Gonher": ["G341"], "Hengst": ["E44HD110"],
      "Japanparts": ["FOECO060"], "Js Asakashi": ["OE42001"], "Luberfiner": ["P978"],
      "Mahle": ["OX339/2"], "Mann": ["HU711/51X"], "Master Parts": ["MM100784"],
      "Millard": ["ML9814"], "Partmo": ["PP358"], "Peugeot": ["1109AJ", "1109X3", "1109Z1", "9818914980"],
      "Sakura": ["EO24070"], "Seineca": ["SEF7600", "SEF7606"], "Seineca Antigo": ["SEI0715"],
      "Tecfil": ["PEL108"], "Turbo Filtros": ["TL108ECO"], "Vox": ["LE108"],
      "Vox Antigo": ["LE2033"], "Wega": ["WOE710", "WOE710P"], "WIX": ["57512", "WL54225"]
    },
    aplicacoes: {
      "Citroen": [
        ["Air Cross 1.6 16V", "2010", "- >"],
        ["Berlingo NFU (TU5JP4)", "1.6i 16V", "10/2000"],
        ["- 2007 Gasolina", "Berlingo", "Flex"],
        ["1.6 16V - 122 cv 2018", "- >", "Flex"],
        ["C3 GLX / EXCLUSIVE", "1.4 e 1.6", "2001"],
        ["- 2013 Gasolina", "C3", "GLX / EXCLUSIVE"],
        ["1.4 e 1.6 2001", "- 2013", "Gasolina"],
        ["C3 (Feel / Feel Parck / First Edition) - automático / manual", "1.6 16V 113cv", "2023"]
      ],
      "- >": [
        ["Flex C3", "GLX / EXCLUSIVE", "1.4 e 1.6"],
        ["2006 - 2013", "Flex", "C3"],
        ["Picasso - (GL / GLX) - Mecânico 1.5 8V 113cv", "2012", "- 2016"],
        ["C3 GLX / EXCLUSIVE", "1.4 e 1.6", "2006"],
        ["- 2013 Flex", "C4", "GLX"],
        ["1.6 16V 2009", "- 2015", "Flex"],
        ["C4 Cactus", "1.6 16V", "2018"],
        ["Flex C4", "(Pallas / GLX)", "2.0 16V"],
        ["10/2008 - 07/2013", "Flex", "C4"],
        ["Gasolina C4", "Cactus", "1.6 16V Turbo"],
        ["2018 - >", "Flex", "C4 Grand Picasso"],
        ["(Exclusive) - automático 2.0 16V 151cv", "2009", "- >"],
        ["C4 Picasso 2.0 16V 151cv", "2009", "- >"],
        ["C5 Exclusive / Break / Tourer", "2.0i 16V", "2005"],
        ["- 2012 Gasolina", "DS3", "Turbo - (THP / Sport)"],
        ["1.6 2012", "- >", "Gasolina"],
        ["DS4 Turbo - (THP / Sport)", "1.6", "2013"],
        ["Gasolina DS5", "Turbo - (THP / Sport)", "1.6"],
        ["2012 - >", "Gasolina", "Xsara"],
        ["Gasolina Transit", "(Chassi / Van / Furgão) - Mecânico", "2.2 TDCi"],
        ["2012 - >", "Diesel", "Transit"],
        ["Van / Furgão - Eletrônico / Turbodiesel 2.4 TDCi", "12/2008", "- >"]
      ],
      "Vtr / Pallas": [
        ["2.0 16V 01/2007", "- 2009", "Gasolina"],
        ["C4 Lounge - THP", "1.6 16V 165cv", "2014"]
      ],
      "Exclusive / Glx / Vts": [
        ["1.6 16V 2001", "- 2004", "Gasolina"],
        ["Xsara Break EXCLUSIVE / GLX", "1.6 16V", "2001"],
        ["- 2005 Gasolina", "Xsara Picasso", "EXCLUSIVE / GLX"],
        ["1.6 16V 2006", "- 2013", "Flex"],
        ["Xsara Picasso EXCLUSIVE / GLX", "1.6 16V", "2006"],
        ["- 2013 Flex", "FORD", "Territory"],
        ["SEL - Ecoboost GTDi 1.5 4cil 150cv Turbo", "2020", "- >"],
        ["Territory Titanium - Ecoboost GTDi", "1.5 4cil 150cv Turbo", "2020"]
      ],
      "Jac Motors": [
        ["T80 210 cv", "2.0 16V Turbo", "2019"]
      ]
    }
  },

  "PEL310": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel310/produto/152",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347737"], "Authomix": ["FOL0310"], "Bosch": ["0986B01576"],
      "Delkraft": ["DO444"], "Delphi": ["EFL754"], "Ford": ["71180"],
      "Fram": ["CH10090"], "Inpeca": ["SLE2106"], "Japanparts": ["FOECO064"],
      "KSPG": ["50014809"], "Mahle": ["OX169/1D"], "Mann": ["HU932/8X"],
      "Motorcraft": ["G3MJ/6731/EA/"], "Notria": ["HS120E"], "Parker": ["RP805"],
      "Seineca": ["SEF7615"], "Tecfil": ["PEL310"], "Turbo Filtros": ["TL130ECO"],
      "Vox": ["LE310"], "Wega": ["WOE130"], "WIX": ["WL54260"]
    },
    aplicacoes: {
      "Ford": [
        ["Ranger Eletrônico", "3.0 Power Stroke", "01/2005"],
        ["- 06/2008 Diesel", "TROLLER", "Pantanal"],
        ["3.0 TDI Eletrônico 01/2006", "- >", "Diesel"],
        ["T4 International NGD", "3.0 TDI Eletrônico", "01/2006"]
      ],
      "- >": [

      ]
    }
  },

  "PEL311": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel311/produto/248",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Alliance": ["A61118000090097"], "Authomix": ["FOL0311"], "Baldwin": ["P1443"],
      "Bosch": ["1457429116"], "Delkraft": ["DO433"], "Delphi": ["EFL257"],
      "Donaldson": ["P550564"], "Donsson": ["G578"], "Fiaam": ["FA5587ECO"],
      "Fleetguard": ["LF3997"], "Fram": ["CH8481", "CH9301ECO"], "Franig": ["HCP1443"],
      "Gonher": ["G918"], "Hengst": ["E11HD155", "E11HD57"], "Japanparts": ["FOECO021"],
      "Js Asakashi": ["OE0037"], "KSPG": ["50014808"], "Luberfiner": ["P8153"],
      "Mahle": ["OX153/7", "OX153/7D", "OX153D3OEKO", "OX980D3"], "Mann": ["HU7010/Z", "HU718/1K"], "Mercedes Benz": ["6111800009"],
      "Partmo": ["PM1443"], "Sakura": ["EO2623"], "Seineca": ["SEF7616"],
      "Tecfil": ["PEL311"], "Turbo Filtros": ["TLE311"], "Vox": ["LE311"],
      "Wega": ["WOE300/1"], "WIX": ["WL57038"]
    },
    aplicacoes: {
      "Jeep": [
        ["Grand Cherokee Turbo Diesel - (Sport) - Automático", "2.7 20V 163 cv", "2002"],
        ["- 2004 Diesel", "MERCEDES BENZ", "Sprinter"],
        ["CDI Van 313 2.2 L 16V DOHV L4", "2002", "- >"],
        ["Sprinter 311 CDI", "OM 611 LA II / 21", "01/2001"],
        ["- 12/2004 Diesel", "Sprinter", "416 CDI"],
        ["OM 612 156 CV 2000", "- 2006", "Diesel"],
        ["Sprinter Chassis 413 / 313 CDI", "OM 611 LA III", "2002"]
      ],
      "- >": [
        ["Diesel Sprinter", "CDI Chassis 313", "2.2 L 16V DOHV L4"],
        ["2002 - >", "Diesel", "Sprinter 311"],
        ["OM 611 2.2L 2001", "- 2003", "Diesel"],
        ["Sprinter 411 OM 611 2.2L", "2000", "- 2002"],
        ["Vito OM 611", "110 CDI", "01/1999"],
        ["- 10/2003 Diesel", "Vito", "OM 611"],
        ["112 CDI 01/1999", "- 10/2003", "Diesel"],
        ["Vito OM 611", "108 CDI", "01/1999"]
      ]
    }
  },

  "PEL654": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel654/produto/2415",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Celulose" },
    conversoes: {
      "Hengst": ["E866HD367"], "Mahle": ["OX823/6"], "Mann": ["HU6020z"],
      "Mercedes Benz": ["A6541801100", "A6541840025"], "Tecfil": ["PEL654"], "Vox": ["LE654"],
      "Wega": ["WOE462"],
      "Authomix": ["FOL0654"],
      "Fram": ["CH12311"]
    },
    aplicacoes: {
      "Mercedes Benz": [

      ],
      "Glc": [
        ["220D (Off Road / Enduro) 2.0 194 cv", "2019", "- >"],
        ["GLE 400 (4Matic / Coupe)", "3.0 330cv Turbo", "2020"]
      ],
      "- >": [
        ["Diesel Sprinter", "315 Turbo Diesel - (Furgão / Truck / VAN)", "2.0 OM 654 150 cv"],
        ["2023 - >", "Diesel", "Sprinter"],
        ["417 CDI Euro 6 OM 654 170cv", "2022", "- >"],
        ["Sprinter 517 CDI Euro 6", "OM 654 170cv", "2022"],
        ["Diesel Sprinter", "517 CDI Euro 6", "OM 654 170cv"],
        ["2022 - >", "Diesel", "Sprinter"],
        ["315 Turbo - (Furgão / Truck / VAN) 2.0 OM 654 150 cv", "2023", "- >"],
        ["Sprinter 417 CDI Euro 6", "OM 654 170cv", "2022"]
      ]
    }
  },

  "PEL674": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel674/produto/715",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0674"], "Fram": ["CH10246ECO"], "GM": ["93185674"],
      "Interfil": ["OF10246"], "Japanparts": ["FOECO073"], "Js Asakashi": ["OE0144"],
      "Mahle": ["OX1018D", "OX401D"], "Mann": ["HU612/2X"], "Millard": ["ML19626"],
      "Partmo": ["PP85674"], "Sakura": ["EO65090"], "Seineca": ["SEF7620"],
      "Tecfil": ["PEL674"], "Turbo Filtros": ["TLE694"], "Vox": ["LE674"],
      "Wega": ["WOE313"], "WIX": ["WL7422"]
    },
    aplicacoes: {
      "General Motors": [
        ["Cruze (HB Sport / LT / LTZ) - automático / mecânico", "1.8 16V 144cv", "2011"]
      ],
      "- >": [
        ["Flex Power Sonic", "1.6", "2012"],
        ["- 2015 Flex", "Tracker", "(Freerid / LTZ) - Automático/ Mecânico"],
        ["1.8 16V 144cv 2014", "- >", "Flex"]
      ]
    }
  },

  "PEL675": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel675/produto/789",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0675"], "Fil Filter": ["MLE1552"], "Fram": ["CH11208ECO"],
      "GM": ["93161665"], "Hengst": ["E112HD180"], "Japanparts": ["FOECO068"],
      "Mahle": ["OX1019D"], "Millard": ["ML35162"], "Nissan": ["1520900Q0A"],
      "Opel": ["4431215"], "Renault": ["8200362442"], "Seineca": ["SEF7621"],
      "Tecfil": ["PEL675"], "Turbo Filtros": ["TL30218ECO"], "Vox": ["LE675"],
      "Wega": ["WOE505"],
      "Mann": ["HU 718/1 k"]
    },
    aplicacoes: {
      "Renault": [
        ["Master DCI", "2.5 16V 206cv", "2012"]
      ],
      "- >": [

      ]
    }
  },

  "PEL676": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel676/produto/891",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0676"], "Baldwin": ["P1443"], "Fleetguard": ["LF3997"],
      "Fram": ["CH11277ECO", "CH8481"], "Gonher": ["G180"], "Hengst": ["E11HD204"],
      "Japanparts": ["FOBR123S"], "Luberfiner": ["P8153"], "Mahle": ["OX1167D"],
      "Mann": ["HU7010Z"], "Mercedes Benz": ["A6511800109"], "Sakura": ["O26310"],
      "Seineca": ["SEF7085"], "Tecfil": ["PEL676"], "Turbo Filtros": ["TLE651"],
      "Vox": ["LE676"], "Wega": ["WOE455"], "WIX": ["57078"]
    },
    aplicacoes: {
      "Land Rover": [
        ["Range Rover Vogue TD Turbo - (SD / SE) - automático", "4.4 313cv", "2011"]
      ],
      "- >": [
        ["Diesel MERCEDES BENZ", "Sprinter", "413"],
        ["OM 611 LA III 2010", "- >", "Diesel"],
        ["Sprinter 311", "OM 651 CDI", "2009"],
        ["- 11/2012 Diesel", "Sprinter", "311"],
        ["OM 651 CDI 11/2012", "- >", "Diesel"],
        ["Sprinter 416", "OM 651 2.2 16V 4 CIL. 163 CV", "2020"],
        ["Diesel Sprinter", "415", "2.2 CDI"],
        ["2012 - >", "Diesel", "Sprinter"],
        ["515 2.2 CDI", "2012", "- >"],
        ["Sprinter 516 CDI - (Chassi / Furgão / VAN)", "2.2 - 163 cv", "2020"],
        ["Diesel Sprinter", "313", "2.2 CDI"]
      ]
    }
  },

  "PEL678": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel678/produto/1014",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0678"], "Fleetguard": ["LF17523"], "Fram": ["CH11163"],
      "Hengst": ["E212HD231"], "Japanparts": ["FOECO119"], "Js Asakashi": ["OE0074"],
      "Mahle": ["OX389/1D"], "Mann": ["HU6011z", "HU618X"], "Mercedes Benz": ["6221800000", "A6221800009", "A6261840025"],
      "Nissan": ["1520800Q1G", "1520900Q0H"], "Renault": ["152094543R", "7701070114", "7701478538"], "Sakura": ["EO18060"],
      "Seineca": ["SEF7088"], "Tecfil": ["PEL678"], "Turbo Filtros": ["TL30206ECO"],
      "Vox": ["LE678"], "Wega": ["WOE506"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["Vito 1.6", "2016", "- >"]
      ],
      "Nissan": [
        ["Frontier Turbo (S MT 4×4) Manual", "2.3", "2021"]
      ],
      "- >": [
        ["Diesel Frontier", "Automático", "2.3 190cv"],
        ["2017 - >", "Diesel", "Frontier"],
        ["Bi Turbo (Attack AT 4×4 / XE AT 4×4 / LE AT 4×4) Automática 2.3", "2021", "- >"],
        ["Diesel Master", "DCI Diesel - (Chassi / Executive / Furgão / Vitré) - Mecânico", "2.3 16V 130 cv"]
      ],
      "Renault": [
        ["Alaskan Dci", "2.3 190cv", "09/2017"]
      ],
      "-": [
        ["Master chassi cabine / furgão/ vitré / minibus (Turbo) Manual 6 marchas", "2.3 DCI 136cv", "2022"]
      ]
    }
  },

  "PEL720": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel720/produto/777",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0720"], "Fram": ["CH10054ECO"], "Hengst": ["E146HD108"],
      "Japanparts": ["FOECO050", "FOECO074"], "Mahle": ["OX382D"], "Mann": ["HU612/1x"],
      "Mercedes Benz": ["2661800009", "2661840325"], "Sakura": ["EO26400"], "Seineca": ["SEF7080"],
      "Tecfil": ["PEL720"], "Vox": ["LE720"], "Wega": ["WOE308"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["A200 (W169 - Elegance)", "2.0", "2006"],
        ["- 2010 Gasolina", "B170", "(w245)"],
        ["1.7 8V 115 cv 2005", "- 2009", "Gasolina"],
        ["B180 (W245 - Confort / Family)", "1.7 8V", "2009"]
      ],
      "- >": [
        ["Gasolina Classe A", "A200 (W169) - Elegance", "2.0"],
        ["2006 - 2010", "Gasolina", "Classe B"],
        ["B170 (W245) 1.7 8V", "2005", "- 2009"],
        ["Classe B B180 (W245) - Confort / Family", "1.7 8V", "04/2009"],
        ["Gasolina Classe B", "B200 (W245) - Sport", "2.0 240cv"],
        ["2006 - >", "Gasolina", "Classe B"],
        ["B 200 (W245) Turbo M 266", "2007", "- >"],
        ["Classe B200 2.0 240cv", "2006", "- 2011"]
      ]
    }
  },

  "PEL726": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel726/produto/873",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0726"], "Fleetguard": ["LF16372"], "Fram": ["CH11724"],
      "GM": ["12636838"], "Japanparts": ["FOBR45S"], "Mahle": ["OX1016D"],
      "Mann": ["HU6017z"], "Partmo": ["PP80215"], "Sakura": ["EO65120"],
      "Seineca": ["SEF7081"], "Tecfil": ["PEL726"], "Turbo Filtros": ["TL726ECO"],
      "Vox": ["LE726"], "Wega": ["WOE314"]
    },
    aplicacoes: {
      "General Motors": [
        ["S10 Turbo - (CS / CD / CE) - automático / mecânico", "2.8 16V 200cv", "2012"]
      ],
      "- >": [
        ["Diesel Trailblazer", "TDI Turbo Diesel - LTZ - Automático", "2.8 16V"]
      ]
    }
  },

  "PEL780": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel780/produto/2212",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Citroen / Peugeot": ["1610693780"], "Fram": ["CH9657"], "Hengst": ["E40HD323"],
      "Japanparts": ["FOBR162S"], "Mahle": ["OX171/2D1"], "Mann": ["HU7033Z", "HU716/2X"],
      "Sakura": ["EO32010"], "Tecfil": ["PEL780"], "Turbo Filtros": ["TB701"],
      "Wega": ["WOE701"],
      "Authomix": ["FOL0780"],
      "Vox": ["LE780"]
    },
    aplicacoes: {
      "Citroen": [
        ["Jumpy Vuc Furgão Turbo", "Blue HDi 1.6 8V 115cv", "2017"]
      ],
      "- >": [
        ["Diesel PEUGEOT", "Expert", "VUC Furgão Turbo"],
        ["Blue HDi 1.6 8V 115cv 2017", "- >", "Diesel"]
      ]
    }
  },

  "PEL1998": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel1998/produto/1040",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL1998"], "Baldwin": ["P7145", "P7196"], "Donaldson": ["P550451"],
      "Fleetguard": ["LF3769"], "Gonher": ["G3754"], "Js Asakashi": ["OE0016"],
      "Luberfiner": ["LP8993"], "Mahle": ["OX123/1"], "Mann": ["HU951x"],
      "Parker": ["REL815"], "Sakura": ["EO68020"], "Tecfil": ["PEL1998"],
      "Turbo Filtros": ["TL30205ECO"], "Volkswagen": ["07W115436A"], "Vox": ["LE1998"],
      "Wega": ["WOE475"], "WIX": ["57711"],
      "Fram": ["CH11082"]
    },
    aplicacoes: {
      "MAN": [
        ["18340 TGM", "D0836 LFL62/65", "09/2008"]
      ],
      "- >": [
        ["Diesel MERCEDES BENZ", "Vito", "OM 601.942"],
        ["108D 2.3 02/1996", "- 10/2003", "Diesel"],
        ["Diesel 15190", "Worker", "MAN D08 34 190"],
        ["2012 - >", "Diesel", "15190"],
        ["Constellation MAN D08 34 190", "2012", "- >"],
        ["17190 Constellation", "MAN D08 34 190", "2012"],
        ["Diesel 17190", "Worker", "MAN D08 34 190"],
        ["2012 - >", "Diesel", "17230"],
        ["Worker - Com Ref. Original: 2R0127177J MAN D08 Euro V", "2012", "- >"],
        ["17230 Constellation 255CV", "MAN D08 34 230", "2015"],
        ["- 2017 Diesel", "23230", "4.6 L 16V SOHV L4"],
        ["MAN D08 34 190 2014", "- >", "Diesel"]
      ],
      "Volkswagen": [
        ["13190 Constellation / Worker - Com Ref. Original: 2R0127177J", "MAN D08 34 190", "2012"]
      ]
    }
  },

  "PEL2003": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel2003/produto/366",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL2003"], "Baldwin": ["P7199"], "Bosch": ["0986B01557"],
      "Delkraft": ["DO429"], "Delphi": ["EFL997"], "Donaldson": ["P550768", "P576662"],
      "Donsson": ["G608"], "FAM": ["FE46X"], "Fleetguard": ["LF3827"],
      "Fram": ["CH5957ECO", "CH8751"], "Franig": ["HCP8751"], "Gonher": ["G3827"],
      "Hengst": ["E160H01", "E160H01D28"], "Japanparts": ["FOECO020"], "Js Asakashi": ["OE0066"],
      "Knecht": ["OX161D"], "KS": ["467OC"], "KSPG": ["50013467"],
      "Luberfiner": ["LP8700"], "Mann": ["HU931/5X"], "Master Parts": ["MM100346"],
      "Mercedes Benz": ["0001801609", "9061840225", "A9061800109"], "Parker": ["REL803"], "Partmo": ["PP7199"],
      "Sakura": ["EO2626"], "Tecfil": ["PEL2003"], "Turbo Filtros": ["TL30217ECO"],
      "Unifilter": ["UEL931"], "Vox": ["LE2003"], "Vox Antigo": ["LE3043"],
      "Wega": ["WOE440"], "WIX": ["WL57214"],
      "Mahle": ["OX 174D"]
    },
    aplicacoes: {
      "Atlas-Copco": [
        ["XAHS 236 MDN OM904LA", "-", "MERCEDES BENZ"],
        ["1215C OM 904 LA", "01/1998", "- >"],
        ["1218E OM 904 LA", "01/2001", "- 06/2007"],
        ["1218E OM 904 LA", "07/2007", "- >"],
        ["1318 OM 904 LA", "12/2004", "- >"],
        ["1318 OM 904 LA", "01/2003", "- 11/2004"],
        ["1418L/EL OM 904 LA", "01/2002", "- >"],
        ["1419 Atego 185cv", "OM 924 LA", "2012"]
      ],
      "- >": [
        ["Diesel ACCELO 815", "BlueTec 5", "OM 924 LA"],
        ["2011 - >", "Diesel", "ACCELO 915C"],
        ["OM 904 LA 4.2 L 8V SOHV L4", "05/2007", "- >"],
        ["ATEGO 1315 OM 904 LA", "01/05", "- 10/06"],
        ["ATEGO 1315 OM 904 LA", "05/2007", "- >"],
        ["ATEGO 1315 OM 904 LA", "11/2006", "- 04/2007"],
        ["ATEGO 1318 OM 904 LA", "2006", "- 12/2011"],
        ["ATEGO 1418 OM 904 LA", "01/2005", "- 12/2012"],
        ["ATEGO 1518 OM 904 LA", "01/2005", "- 12/2012"],
        ["ATEGO 1718 OM 904 LA", "01/2005", "- 12/2012"]
      ],
      "-": [
        ["1618M OM 904 LA", "1998", "- >"],
        ["1622L OM 924 LA", "2001", "- >"],
        ["1624L OM 906 LA", "01/2007", "- >"],
        ["1718M OM 904 LA", "12/2004", "- >"],
        ["1718M (4.3 L 12V SOHV L4)", "OM 904 LA", "2001"],
        ["- 2005 -", "1718M", "OM 904 LA"],
        ["01/1998 - >", "Diesel", "712C"],
        ["OM 904 LA 1998", "- 12/2005", "Diesel"],
        ["912C OM 904 LA", "2000", "- >"],
        ["914C OM 904 LA", "1998", "- 12/2004"],
        ["915E OM 904 LA", "1998", "- >"],
        ["ACCELO 915C OM 904 LA", "4.2 L 8V SOHV L4", "01/2002"],
        ["- 04/2007 Diesel", "ACCELO 1016C", "BlueTec 5"],
        ["OM 924 LA 2011", "- >", "Diesel"],
        ["ACCELO 1316 Bluetec 5", "OM 924 LA", "2016"]
      ]
    }
  },

  "PSL51": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl51/produto/285",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0051"], "Fram": ["PH5511"], "Mahle": ["OC704"],
      "Mann": ["W79"], "Monza": ["AL49"], "Renault": ["7702217250"],
      "Tecfil": ["PSL51"], "Vox": ["LB51"], "Vox Antigo": ["LB2024"],
      "Wega": ["WO410"]
    },
    aplicacoes: {
      "Renault": [
        ["Laguna (RT / RXE) - mecânico", "2.0 8V 95cv", "1993"],
        ["- 1996 Gasolina", "Laguna", "(RT / RXE) - mecânico"],
        ["2.0 8V 95cv 1996", "- 2001", "Gasolina"],
        ["Megane (RT / RXE) gas. Mec.", "2.0 8V 114cv", "1998"],
        ["- 1998 Gasolina", "Megane", "1.6 16V"],
        ["05/1997 - 2015", "Gasolina/Flex", "Megane"],
        ["(RN / RT) gas. Mec. 1.6 8V 75cv", "1996", "- 1998"],
        ["Megane (RN / Dynamique / Expression / RXE / Egeus) gas. Aut. / mec.", "2.0 16V 147cv", "1996"],
        ["- 1997 Gasolina", "Megane", "2.0"],
        ["05/1997 - 2005", "Gasolina", "R19"],
        ["Hatch 1.6 8V", "1994", "- 2000"],
        ["Scenic Com ar condicionado de fábrica", "2.0", "1996"],
        ["- 2000 Gasolina", "Scenic", "2.0"],
        ["05/1997 - 2005", "Gasolina", "Scenic"],
        ["1.6 8V 05/1997", "- 2008", "Gasolina"],
        ["Twingo 1.0 8V", "1998", "- 2001"]
      ]
    }
  },

  "PSL55": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl55/produto/1558",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Fram": ["PH10757"], "Japanparts": ["FOBR48S"], "Mahle": ["OC593/4"],
      "Mann": ["W712/94"], "Tecfil": ["PSL55"], "Volkswagen": ["03C115561C", "03C115561D", "03C115561H"],
      "Vox": ["LB556"], "Wega": ["WO342"],
      "Authomix": ["FOL0055"]
    },
    aplicacoes: {
      "Audi": [
        ["A1 TFSI S-Tronic", "1.4 16 V", "2010"]
      ],
      "- >": [
        ["Gasolina BYD", "Song Plus", "Premium DM-i - (Plug-in)"],
        ["1.5 - 324cv Turbo 2025", "- >", "Híbrido"]
      ]
    }
  },

  "PSL127": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl127/produto/697",
    especificacoes: { altura: 86.5, diametroExterno: 76.2, diametroInterno: null, rosca: "3/4\" - 16 UN", elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0127"], "Bosch": ["0986B00066"], "Delphi": ["EDL113"],
      "Fleetguard": ["LF3335"], "Japanparts": ["FO279S"], "Js Asakashi": ["C110J"],
      "KSPG": ["50014814"], "Mann": ["W711/80"], "Master Parts": ["MM100715"],
      "Partmo": ["A14302PLUS"], "Sakura": ["C1123"], "Seineca": ["SOF7023"],
      "Seineca Antigo": ["SEI2674"], "Tecfil": ["PSL127"], "Toyota": ["9091520003"],
      "Turbo Filtros": ["TB211"], "Vox": ["LB127"], "Wega": ["JFO0211"],
      "WIX": ["WL10165"],
      "Mahle": ["OC 696","OC 988"],
      "Fram": ["PH4967","PH2870"]
    },
    aplicacoes: {
      "Jetour": [
        ["S06 PHEV", "1.5 - Turbo GDI - 315cv", "2026"]
      ],
      "- >": [
        ["Híbrido T1", "PHEV", "1.5 - Turbo GDI - 380cv"],
        ["2026 - >", "Híbrido", "T2"],
        ["Diesel Hilux", "SW4 (SR / SRV)", "2.7 16V 4 cil."],
        ["2016 - >", "Flex", "Hilux"],
        ["D/C SRV Turbo 4x4 e 4X2 3.0 16V", "2001", "- 2006"],
        ["Hilux DOHC VVT-i - SR", "2.7 16V", "10/2008"],
        ["- 2010 Gasolina", "Hilux", "D/C DX AC 4X2 e 4X4"],
        ["2.5 16V 2005", "- 12/2010", "Diesel"],
        ["Hilux D4-D CD / SR / SRV / SW4 / 4x2/ 4x4 / Aut", "3.0 16V", "01/2006"],
        ["- 12/2010 Diesel", "Hilux", "CDSRV TBI"],
        ["3.0 16V 2006", "- 12/2010", "Diesel"],
        ["Hilux TDI Turbo (SW4) - automático", "2.8 16V 177cv", "2016"],
        ["Diesel Hilux", "TDI Turbo (CD / SR) - automático", "2.8 16V 177cv"],
        ["2016 - >", "Diesel", "Hilux"],
        ["SW4 2.7 16V", "12/2011", "- 2015"],
        ["Hilux D/C SRV TBI", "3.0 16V", "2005"],
        ["- 12/2010 Diesel", "Hilux", "Turbo Diesel - (SW4 / SRV / CD /CS) - Automático / Mecânico"],
        ["3.0 16V 163cv 12/2011", "- 2015", "Diesel"],
        ["Hilux D/C SRV 4x4", "3.0 16V", "2005"],
        ["- 12/2010 Diesel", "Hilux", "SW NEW AT"],
        ["3.0 16V 2005", "- 10/2010", "Diesel"],
        ["Hilux SW NEM MT", "3.0 16V", "2005"],
        ["- 10/2010 Diesel", "Hilux", "CDSRV"],
        ["Hilux Turbo Diesel - (CD / CS) - Automático / Mecânico", "2.5 16V 102cv", "12/2011"],
        ["- 2015 Diesel", "Hilux SW4", "4x4 - Turbo"],
        ["3.0 - 16V - 171CV 2014", "- 2015", "Diesel"],
        ["Previa LE/DLX 16V", "2.4 L 16V DOHC L4", "1990"]
      ],
      "Phev": [
        ["1.5 - Turbo GDI - 385cv 2026", "- >", "Híbrido"]
      ],
      "Suzuki": [
        ["Sidekick 1.6 16V 80 cv", "1990", "- 1996"]
      ],
      "Toyota": [
        ["Hiace Turbo DX Autom.", "2.8 16V 174cv", "2025"]
      ]
    }
  },

  "PSL158": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl158/produto/255",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0158"], "Baldwin": ["BD7028"], "Bosch": ["0986B00060"],
      "Delkraft": ["DLL89"], "Delphi": ["EFL253"], "Donaldson": ["P502008"],
      "Donsson": ["GS207"], "Fil Filter": ["ZP3048"], "Fleetguard": ["LF3830"],
      "Fram": ["PH5529", "PH8936"], "Franig": ["HCX092"], "Gonher": ["GP13307"],
      "Hengst": ["H96W03"], "Japanparts": ["FO597S"], "Js Asakashi": ["C313J"],
      "KSPG": ["50014810"], "Luberfiner": ["LFP3307"], "Mahle": ["OC1062", "OC297"],
      "Mann": ["W9069", "WP1045"], "Mercedes Benz": ["A4001800212"], "Millard": ["ML6355"],
      "Mitsubishi": ["CD120013"], "Partmo": ["AD7028"], "Sakura": ["C5816"],
      "Seineca": ["SOF7421"], "Seineca Antigo": ["SEI2681"], "Tecfil": ["PSL158"],
      "Turbo Filtros": ["TB158"], "Vox": ["LB158"], "Wega": ["JFO0597"],
      "WIX": ["51675"]
    },
    aplicacoes: {
      "Mitsubishi": [
        ["L200 (CD/GL/GLS/GLX) Automático/Mecânico", "3.2", "2008"],
        ["- 2010 Diesel", "L200", "Triton"],
        ["3.2 TDI 2012", "- 2019", "Diesel"],
        ["L200 (Triton / Outdoor / Savana) - Com Ref. Orig: CD130107", "3.2 TDI", "2010"],
        ["- 2012 Diesel", "L200", "SPORT / HPE"],
        ["2.5 TD 2000", "- 2007", "Diesel"],
        ["L200 (GL / GLS) - Automático", "2.5 121 cv Turbo", "2005"],
        ["- 2007 Diesel", "L200", "Triton"],
        ["3.2 TDI 12/2007", "- 12/2008", "Diesel"],
        ["Pajero (HD) - automático / mecânico", "2.5 121cv", "2011"]
      ],
      "- >": [
        ["Diesel Pajero", "Turbo - (GLS / GLX / GLZ) - automático / mecânico", "2.8 125cv"],
        ["1992 - 2002", "Diesel", "Pajero Dakar"],
        ["(HPE) - automático / mecânico 3.2 V6 165cv", "2012", "- >"],
        ["Pajero Full Turbo (V88W) - automatico / mecânico", "3.2 200cv", "12/2006"],
        ["- 09/2010 Diesel", "Pajero Full", "TDI - (GLS / PKHPE) - automático / mecânico"],
        ["3.2 165cv 2002", "- >", "Diesel"],
        ["Pajero Sport (AT) - automático / mecânico", "2.5 121cv", "2011"],
        ["Diesel Pajero Sport", "(HPE) - automático", "2.5 143cv"],
        ["2006 - 2012", "Diesel", "Space Wagon"],
        ["2.8 8V TDI 09/2001", "- >", "Diesel"]
      ]
    }
  },

  "PSL161": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl161/produto/885",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Baldwin": ["B1447"], "Fil Filter": ["ZP62B"], "Fram": ["PH8830"],
      "GM": ["93156863"], "Hengst": ["H90W29"], "Land Rover": ["LPW100230"],
      "Sakura": ["C49150"], "Seineca": ["SOF8212"], "Tecfil": ["PSL161"],
      "Vox": ["LB161"], "Wega": ["WO550"],
      "Authomix": ["FOL0161"],
      "Mann": ["W 7058"],
      "Mahle": ["OC 1300"]
    },
    aplicacoes: {
      "Land Rover": [
        ["Discovery MPI - mecânico", "2.0 16V 135cv", "1993"]
      ],
      "- >": [
        ["Gasolina Discovery", "SD4 - (Sport HSE / HSE Luxury / SE) - automático", "2.2 16V 190cv"],
        ["1993 - >", "Diesel", "Freelander"],
        ["2.5 V6 24V 204cv 2003", "- 2005", "-"],
        ["Freelander I Automático", "1.8 16V 120cv", "1999"],
        ["- 2000 Gasolina", "Freelander I", "(HSE / S / SE) - Automático"],
        ["2.5 V6 24V 2003", "- 2005", "Gasolina"]
      ]
    }
  },

  "PSL167": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl167/produto/1344",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "-": [], ".": [], "Altura:": ["94"],
      "Baldwin": ["BT344S", "PSL167", "BT8417"], "Bosch": ["0986B01002", "PSL167"], "Caixa:": ["06"],
      "Case": ["181167A1", "PSL167"], "Caterpillar": ["1194740", "PSL167", "4T7948", "6E0924"], "Compartilhar produto": [],
      "Código:": ["PSL167"], "Daewoo": ["D140182", "PSL167"], "Elemento:": [],
      "Especificações técnicas": ["Dimensões (Altura x Ext. Comp x Int. Larg x Rosca):", "94 x 92,7 x - x 13/16\" - 16 UN"], "FAM": ["FL642", "PSL167"], "Fechar": [],
      "Fiat Allis": ["9968353", "PSL167"], "Fleetguard": ["HF6337", "PSL167"], "Fora de linha": [],
      "Fram": ["P11291", "PSL167"], "Função:": [], "Lubrificante": [],
      "Mann": ["WD9001", "Ao continuar navegando no Catálogo, você concorda com a nossa"], "New Holland": ["9968353", "PSL167", "9969450"], "Nº Conversão": [],
      "Observação:": ["SUBSTITUÍDO PELO PSH167"], "Papel": [], "Peso Bruto:": ["0,604"],
      "Peso Líquido:": ["0,550"], "Política de Privacidade": [], "Sakura": ["HC45050", "PSL167"],
      "Sim": [], "Tecfil": ["PSL167"], "Unifilter": ["UST6337", "PSL167"],
      "Vox Antigo": ["HIB2818", "PSL167"], "Válvula Alívio:": [], "Válvula Anti-retorno:": [],
      "WIX": ["57220", "PSL167"], "Ø Ext. Comp.:": ["92.7"], "Ø Int. Larg.:": [],
      "Ø Rosca:": ["13/16\" - 16 UN"], "​": ["PSL167"],
      "Authomix": ["FOL0167"],
      "Mahle": ["OC 1296"],
      "Wega": ["WO-421"],
      "Vox": ["LB167"]
    },
    aplicacoes: null
  },

  "PSL168": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl168/produto/2316",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "* Exclusivo Exportação.": [], "-": [], ".": [],
      "Altura:": ["74"], "Caixa:": ["12"], "Compartilhar produto": [],
      "Código:": ["PSL168"], "Elemento:": [], "Especificações técnicas": ["Dimensões (Altura x Ext. Comp x Int. Larg x Rosca):", "74 x 68 x - x M18 x 1,5"],
      "Fechar": [], "Função:": [], "General Motors": ["96985730", "PSL168"],
      "Interfil": ["OF2518", "PSL168"], "Lubrificante": [], "Mann": ["W6021", "Ao continuar navegando no Catálogo, você concorda com a nossa"],
      "Nº Conversão": [], "Observação:": [], "Papel": [],
      "Peso Bruto:": ["0,233"], "Peso Líquido:": ["0,226"], "Política de Privacidade": [],
      "Sakura": ["C65410", "PSL168"], "Sim": [], "Tecfil": ["PSL168"],
      "Válvula Alívio:": [], "Válvula Anti-retorno:": [], "Ø Ext. Comp.:": ["68"],
      "Ø Int. Larg.:": [], "Ø Rosca:": ["M18 x 1,5"], "​": ["PSL168"],
      "Authomix": ["FOL0168"],
      "Mahle": ["OC 1302"],
      "Wega": ["WO-151"],
      "Fram": ["PH12105"],
      "Vox": ["LB168"]
    },
    aplicacoes: null
  },

  "PSL280": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl280/produto/50",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0280"], "Baldwin": ["BT339", "BT7349"], "Bosch": ["0986B01008", "9455081022"],
      "Case": ["47368538", "84476054", "J908615", "J932217", "J934430", "J937743"], "Chrysler": ["5083285AA"], "Cross": ["FB14/2"],
      "Cummins": ["3903264", "3908615", "3914395", "B3908615"], "Delkraft": ["DL216"], "Delphi": ["EFL721"],
      "Donaldson": ["P172562", "P558615"], "Donsson": ["GS111A"], "FAM": ["FL862"],
      "Fleetguard": ["LF3349", "LF3806", "LF3959", "LF3972"], "Ford": ["BG2X6731AA", "DFOT6731BA"], "Fram": ["PH3976", "PH3976A"],
      "Gonher": ["GP178"], "Hengst": ["H19W08", "H240W"], "Inpeca": ["SLB0602"],
      "Irlemp": ["PERI333"], "Japanparts": ["FOBR32S"], "Js Asakashi": ["C0074"],
      "Komatsu": ["1240388H1", "6735515140", "6735515141"], "KS": ["207OS"], "KSPG": ["50013207"],
      "Luberfiner": ["LFP780"], "Mahle": ["OC320"], "Mann": ["W950/16", "W950/18"],
      "Master Parts": ["MM100030"], "Millard": ["ML3976"], "Motorcraft": ["MB3X/6731/AA/"],
      "Napa": ["1607"], "Nexpro": ["48028836"], "Parker": ["RL333"],
      "Purolator": ["L1090", "PER4422"], "Roma": ["LUS8615"], "Sakura": ["C5704"],
      "Seineca Antigo": ["SEI2688"], "Tecfil": ["PSL280"], "Top Parts": ["130021"],
      "Turbo Filtros": ["TB280"], "Unifilter": ["USL333"], "Valmet": ["81035900"],
      "Volvo": ["3932217"], "Vox": ["LB280"], "Vox Antigo": ["LB3603"],
      "Wega": ["WO680"], "WIX": ["W51607", "WL51607"], "ZF": ["0070131272"]
    },
    aplicacoes: {
      "Agrale": [
        ["MA 8.5 T Cummins 6BTAA", "01/2004", "- >"],
        ["MT 12.0 (LE/SB) Cummins Int. 6ISBE", "01/2006", "- >"]
      ],
      "Case": [
        ["1085C -", "-", "1088"],
        ["Case 6T5.9 -", "1150E", "CASE 6T-590"],
        ["1150G CASE 6T-590", "-", "1822"],
        ["Colhedoras De Algodão - 1822", "-", "2344"]
      ],
      "-": [
        ["570L -", "-", "621"],
        ["621B -", "-", "680K"],
        ["Case 6-590 -", "680L", "-"],
        ["780C -", "-", "780D"],
        ["845 Motoniveladoras", "Cummins", "Diesel"],
        ["845 Carregadeiras", "Cummins", "Diesel"],
        ["850D -", "-", "850E"],
        ["850G CASE 6T-590", "-", "855D"],
        ["855E -", "-", "888CKE"],
        ["Cummins 6BT5.9 -", "A2000 (Colheitadeira)", "MWM 229-3"],
        ["MX170 Tratores", "Cummins 6BTA5.9", "-"],
        ["W14 C -", "-", "W14B"],
        ["W20E Cummins 5.9B", "-", "CLARK"],
        ["L90 Cummins 6BT59", "-", "COMPAIR"],
        ["C190TS10 CUMMINS 6BTTAA5.9", "2001", "- 2001"]
      ]
    }
  },

  "PSL283": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl283/produto/139",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Agrale": ["601200107800R"], "Alliance": ["A99918002090097"], "Authomix": ["FOL0283"],
      "Baldwin": ["BT7237MPG"], "Bosch": ["0986B01054"], "Case": ["87803261"],
      "Controil": ["CHFO00005"], "Cummins": ["4897898"], "DAF": ["1399494"],
      "Delkraft": ["DL256"], "Delphi": ["EFL745"], "Donaldson": ["P550520"],
      "Fleetguard": ["LF16015"], "Ford": ["BG5X6731AA", "BG6T6731AA"], "Fram": ["PH9617"],
      "Gonher": ["GP737"], "Hengst": ["H19W10"], "IVECO": ["2992242", "500058314", "503120785", "5801986266"],
      "Js Asakashi": ["C0082"], "KSPG": ["50014074"], "Mahle": ["OC502"],
      "Mann": ["W950/26"], "Mann Europa": ["W950/39"], "Master Parts": ["MM100026"],
      "Millard": ["ML55081"], "Motorcraft": ["MB6X6731AA"], "New Holland": ["76194572", "87803260"],
      "Parker": ["RL377"], "Racor": ["RL377"], "Sakura": ["C5713"],
      "Seineca": ["SOF7102"], "Seineca Antigo": ["SEI2691"], "Tecfil": ["PSL283"],
      "Turbo Filtros": ["TB30007"], "Unifilter": ["USL16015B25"], "Volkswagen": ["2R0115403", "JZV115403"],
      "Vox": ["LB283"], "Vox Antigo": ["LB3620"], "Wega": ["WO612"],
      "WIX": ["WL57037"]
    },
    aplicacoes: {
      "Case": [
        ["580 M Series 2 Case 445M2", "-", "580 M Turbo Series 2"],
        ["Case 445TM2 -", "580 M Turbo Series 2", "-"],
        ["580 Super M Series 2 -", "-", "580 Super M Series II"],
        ["Case 445T (4.5L) Turbo Engine -", "580 SUPER N / 580SN / 590 SUPER N", "445TA/E3"],
        ["2010 - >", "-", "580 Super R"],
        ["(3) Iveco F4GE (4,5 l) 98cv", "2008", "- >"],
        ["580N 445T/M3", "-", "FIAT IVECO"],
        ["GRAN CLASS 150S21 GRAN CLASS 150S21 - N45 206CV", "4.5 L 16V DOHC L4", "2016"]
      ],
      "- >": [
        ["Diesel FORD", "1119", "Cargo (4.5 L 16V SOHV L4) 189cv"],
        ["ISB 4.5 2014", "- >", "Diesel"],
        ["1317E 3.9 CUMMINS 4ISBE", "02/2005", "- 07/2010"],
        ["1317E 3.9 CUMMINS 4ISBE", "08/2010", "- >"],
        ["1319 Cargo", "Cummins ISB4.5 186 P7-1", "2012"],
        ["Diesel 1517E", "3.9 CUMMINS INT. 4 ISBE", "08/2010"],
        ["Diesel 1517E", "3.9 CUMMINS INT. 4 ISBE", "02/2005"],
        ["- 07/2010 Diesel", "1519", "Cargo"],
        ["Cummins ISB4.5 186 P7-1 2013", "- >", "Diesel"],
        ["1717E 3.9 L 16V INTERACT", "08/2010", "- >"],
        ["1717E 3.9 L 16V INTERACT", "2005", "- 07/2010"],
        ["1719 Cargo", "Cummins", "01/2012"],
        ["Diesel 1722E", "5.9 Cummins Int.6 ISBE", "08/2010"],
        ["Diesel 1722E", "5.9 Cummins Int.6 ISBE", "01/2006"],
        ["- 07/2010 Diesel", "1723", "Cargo"],
        ["Cummins ISB6.7 226 P7 2012", "- 12/2013", "Diesel"],
        ["1723 Cargo", "Cummins ISB6.7 226 P7", "2014"],
        ["Diesel 2422E", "5.9 Cummins Int.6 ISBE", "08/2010"],
        ["Diesel 2422E", "5.9 Cummins Int.6 ISBE", "01/2006"],
        ["- 07/2010 Diesel", "2423", "2423 (Cargo C-2423) 230cv"],
        ["Cummins ISB6.7 226 P7 01/2012", "- >", "Diesel"],
        ["2428E INTERACT 6 ISBE", "5.9", "08/2010"],
        ["Diesel 2428E", "INTERACT 6 ISBE", "5.9"],
        ["2006 - 07/2010", "Diesel", "2429"]
      ],
      "Cargo": [
        ["Cummins 2012", "- >", "Diesel"],
        ["2622E INTERACT 6", "5.9 L 24V SOHV L6", "08/2010"]
      ]
    }
  },

  "PSL300": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl300/produto/452",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["PF1217"], "Authomix": ["FOL0300"], "Baldwin": ["BD103"],
      "Bosch": ["0986B01011"], "Cnh": ["84485647"], "Cross": ["FB200"],
      "Cummins": ["3318853"], "Delkraft": ["DL217"], "Delphi": ["EFL724"],
      "Donaldson": ["P553000"], "Donsson": ["GS141"], "Engeagro": ["00180654"],
      "FAM": ["FL853"], "Fiat Allis": ["75285999"], "Fil Filter": ["ZP51"],
      "Fleetguard": ["LF3000"], "Ford": ["TJG15561"], "Foton": ["C3401544A0571A", "D1700240"],
      "Fram": ["HPH6349A"], "Franig": ["HCX3000"], "Gonher": ["GP3000"],
      "Hastings": ["LF448"], "Hengst": ["H300W03"], "Inpeca": ["SLB0425"],
      "Irlemp": ["PERI332"], "Japanparts": ["FOBR33S"], "Js Asakashi": ["C0079"],
      "Komatsu": ["6742014120"], "KSPG": ["50013337"], "Mahle": ["OC304"],
      "Mann": ["WP12300"], "Master Parts": ["MM100033"], "Millard": ["ML3000"],
      "Napa": ["1748"], "Parker": ["RL332"], "Partmo": ["A3000SP"],
      "Roma": ["LUS8853"], "Sakura": ["C5706"], "Sogefi Pro": ["FT5724"],
      "Tecfil": ["PSL300"], "Trp": ["915021"], "Turbo Filtros": ["TB30000"],
      "Unifilter": ["USL300", "USL3000"], "Volkswagen": ["TJG115561"], "Vox": ["LB300"],
      "Vox Antigo": ["LB2622"], "Wega": ["WO710"], "WIX": ["51748"],
      "ZF": ["0070131270"]
    },
    aplicacoes: {
      "Brastoft": [
        ["7000 Brastoft / Case Cummins L10", "1995", "- 1999"],
        ["7700 Brastoft / Case Cummins L10", "2000", "- >"]
      ],
      "Case": [
        ["2388 Cummins 6CTAA 8.3", "1998", "- >"],
        ["7700 Cummins", "98", "- >"],
        ["821B Cummins", "-", "9150"]
      ],
      "-": [
        ["9170 -", "-", "9180"],
        ["Cummins -", "921", "-"],
        ["921B -", "-", "921C"],
        ["Carregadoras CUMMINS QSM 11", "-", "9240"],
        ["9260 -", "-", "9270"],
        ["9280 -", "-", "9350"],
        ["CUMMINS LTA10 -", "9370", "CUMMINS NTA-855"],
        ["9380 CUMMINS NTA-855", "-", "9390"],
        ["MAGNUM MX180 / MX200 / 220 6C8.3", "-", "MX180"],
        ["Tratores Cummins 6CT8.3", "-", "MX200"],
        ["6C8.3 -", "MX210", "6C8.3"],
        ["MX210 / MX230 6C8.3", "-", "MX220"],
        ["6C8.3 -", "MX230", "6C8.3"],
        ["W30-W30E Cummins 6CT8.3", "-", "W36BT"],
        ["Cummins 6CT8.3 -", "CLARK", "W380"],
        ["Cummins -", "CUMMINS", "M11"]
      ]
    }
  },

    "PSL339": {
    tipo: "oleo",
    especificacoes: { altura: 232, diametroExterno: 109.6, rosca: "1\\", elemento: "Papel", observacao: "APLICADO COM OS FILTROS: PSD530, PSD960, PSD970" },
    conversoes: {
      "Authomix": ["FOL0339"], "Baldwin": ["BT349","BT8302"], "Bosch": ["0451301088","0986B01015","9455081025"],
      "Cross": ["FB62"], "Delkraft": ["DL203"], "Delphi": ["EFL523"],
      "Donaldson": ["P172555","P551604","P779225"], "Donsson": ["GS056"], "FAM": ["FL733"],
      "Fiat": ["19011604","1909137","4667338","4667339","4667755","7111041","7111671","7121369","7121389","7122733"], "Fiat Allis": ["4667755","75285228"], "Fleetguard": ["LF3346"],
      "Fram": ["PH2883"], "Franig": ["HCX4667755"], "Gonher": ["GP88"],
      "Hengst": ["H220W"], "Inpeca": ["J339E","SB0964","SLB0964"], "Irlemp": ["PERI236"],
      "IVECO": ["1907570"], "KS": ["017OS"], "KSPG": ["50013017"],
      "Logan": ["FL242US"], "Lucas": ["EFL523"], "Mahle": ["OC35"],
      "Mann": ["W1170"], "MWM": ["905411880011","905411880022","905411880037"], "Nasa": ["NS1025"],
      "New Holland": ["R1930544"], "Parker": ["RL236RA"], "Partmo": ["A349"],
      "Purolator": ["L1086","PC232"], "Racor": ["RL236"], "Roma": ["LUS339"],
      "Sakura": ["C7008"], "Schulz": ["00701440"], "Stara": ["79114309"],
      "Tecfil": ["PSL339"], "Top Parts": ["130501"], "Turbo Filtros": ["TB339"],
      "Unifilter": ["USL236"], "Valmet": ["3338079","80842000"], "VME": ["3338079"],
      "Volkswagen": ["905411880011","TAE115561"], "Vox": ["LB339"], "Vox Antigo": ["LB2814"],
      "Wega": ["WO610"], "WIX": ["W51825","W51832","WL51832"], "ZF": ["0070131265"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["17210 6.10 TCA","MWM","05/02 - >"],
        ["12180 6.10T","MWM","01/99 - >"],
        ["13180 MWM 6.10 TCA SERIE 10 / X10 6.5 L 12V SOHV L6","MWM 6.10 TCA","2000 - 2005"],
        ["14150 6.10T","MWM","04/97 - >"],
        ["14150 6.10T","MWM","01/91 - 04/97"],
        ["14180 6.10 T","MWM","10/99 - >"],
        ["14200 6.10T","MWM","01/92 - >"],
        ["15180 6.10 TCA","MWM","01/00 - >"],
        ["16180 6.10 T","MWM","01/92 - >"],
        ["17180 6.10 TCA","MWM","01/2006 - >"],
        ["17210EOD Ref. Original 2R0127177C","MWM 6.12 TCAE","12/2005 - >"],
        ["17210EOD Ref. Original 2R0127177D","MWM 6.12 TCAE","12/2005 - >"],
        ["17210EOD","MWM 6.10 TCA","09/2001 - >"],
        ["17230EOD EuroIII - Ref. Original 2R0127177D","MWM 6.12 TCE","04/2004 - >"],
        ["17230EOD EurollI - Ref. Original 2R0127177C","MWM 6.12 TCE","04/2004 - >"],
        ["17230EOD V-Tronic","MWM 6.12 TCE EuroIII","01/2008 - >"],
        ["17240OT","MWM 6.10 TCA","03/2001 - >"],
        ["17260EOT Ref. Original 2R0127177D","MWM 6.10 TCAE","04/2004 - >"],
        ["17260EOT V-Tronic","MWM 6.12 TCE EuroIII","01/2008 - >"],
        ["18320EOT","MWM 6.12 TCAE","04/2004 - >"],
        ["23210 6.10 TCA","MWM","05/02 - >"],
        ["26260E Worker - Com Ref. Original: 2R0127177C e 2R0127177D","MWM","12/2005 - >"],
        ["31260E Worker / Com Ref. Original: 2R0127177C e 2R0127177D","MWM","12/2005 - >"],
        ["8150ODM","6.4 L 12V D 6.10","1992 - 1998"]
      ],
      "Adams": [
        ["300, 330, 440, 550, 660, 777, H-HR-NH 6.6.4","Cummins","04/2004 - >"]
      ],
      "Agrale": [
        ["4130","MWM D229/6","80 - >"],
        ["BX130","MWM D229/6","80 - >"],
        ["BX4130","MWM 229/6","90 - >"],
        ["BX4130","MWM TD229/6","80 - >"],
        ["BX6150","MWM D229/6","2004 - >"]
      ]
    }
  },

  "PSL340": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl340/produto/1",
    especificacoes: { altura: 93, diametroExterno: 138, diametroInterno: null, rosca: "1\" 1/2 - 16 UN", elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01FBO041", "19347731"], "Agrale": ["6008001204004"], "Alliance": ["A40018001090097"],
      "Authomix": ["FOL0340"], "Bosch": ["0986B01016"], "Delkraft": ["DL237"],
      "Delphi": ["EFL737"], "Donaldson": ["P550893"], "FAM": ["FL325"],
      "Fram": ["PH9503"], "Franig": ["HCX8018"], "GM": ["93342367", "MS054102"],
      "Hengst": ["H300W09"], "Inpeca": ["SLB0720"], "Japanparts": ["FOBR3S"],
      "KSPG": ["50013478"], "Mahle": ["OC404"], "Mann": ["W1323"],
      "MWM": ["905411880018", "905411880026"], "Nissan": ["152086S300"], "Partmo": ["AL106"],
      "Purolator": ["L1078"], "Racor": ["RL350"], "Sakura": ["C7972"],
      "Seineca": ["SOF7036"], "Seineca Antigo": ["SEI2704"], "Tecfil": ["PSL340"],
      "Troller": ["0102497"], "Turbo Filtros": ["TB350"], "Unifilter": ["USL350"],
      "Volkswagen": ["062115561A"], "Vox": ["LB340"], "Vox Antigo": ["LB2435"],
      "Wega": ["WO540"], "WIX": ["W54175BR", "WL7414"], "ZF": ["0070131269"]
    },
    aplicacoes: {
      "Agrale": [
        ["CARGO (4WDM) (6011.000.005.00.0)", "2.8 MWM SPRINT 4.07 TCA", "2006"]
      ],
      "- >": [
        ["Diesel Furgovan 6000", "2.8 MWM Sprinter 4.07 TCA", "01/2002"],
        ["Diesel Furgovan 6000E", "MWM 4.07 TCE", "01/2005"],
        ["Diesel Furgovan 6000E", "MWM 4.08 TCE", "01/2005"],
        ["Diesel MA 5.0 E", "MWM 4.07 TCE", "01/2002"],
        ["Diesel MA 5.0 E", "MWM 4.08 TCE", "01/2005"],
        ["Diesel MA 6.0 E", "MWM 4.08 TCE", "01/2005"],
        ["Diesel MA 6.0 E", "MWM 4.07 TCE", "01/2005"],
        ["Diesel Marruá AM 100-E (6011.000.120.00.7)", "Sprint 4.07 TCA", "MWM"],
        ["02/2007 - >", "Diesel", "Marruá AM 150-E (6011.000.123.00.1)"],
        ["Sprint 4.07 TCA MWM", "04/2007", "- >"],
        ["Marruá AM 200-E (6011.000.115.00.7) Sprint 4.07 TCA", "MWM", "06/2006"],
        ["Diesel Volare A5", "MWM 4.07 TCA", "01/00"],
        ["Diesel Volare A6", "MWM 4.07 TCA", "01/98"],
        ["- 12/99 Diesel", "Volare A6", "MWM 4.07 TCA"],
        ["01/00 - 12/01", "Diesel", "Volare A6"],
        ["MWM 4.07 TCA 01/02", "- >", "Diesel"],
        ["Diesel Blazer", "STD Turbo", "2.8 8V"],
        ["2000 - 2006", "Diesel", "Blazer"],
        ["Sprint 4.07 TCA 2.8 MWM", "01/2002", "- >"],
        ["Blazer Sprint DLX 4X2 / 4X4 Intercooler", "2.8 MWM", "01/2005"],
        ["Diesel S10", "TDI STD DLX LTD (4X4)", "2.8 MWM Sprint"],
        ["03/2005 - >", "Diesel", "S10"]
      ],
      "General Motors": [
        ["Blazer EXECUTIVE 4X4", "2.8 8V", "2005"]
      ],
      "Std / Dlx": [
        ["MWM Sprint 2.8 SOHC 01/2000", "- >", "Diesel"],
        ["S10 Turbo - (CS / CD / CE) - mecânico", "2.8 12V MWM 132cv", "2002"],
        ["- 2005 Diesel", "S10", "Turbo Intercooler Mecânico - com sist. anti-borbulha"],
        ["2.8 MWM 01/2002", "- >", "Diesel"],
        ["S10 Turbo - (CS / CD / CE) - mecânico", "2.8 12V 140cv", "2006"],
        ["- 2007 Diesel", "S10", "Turbo - (CS / CD / CE) - mecânico"],
        ["2.8 12V MWM 132cv 1998", "- 2001", "Diesel"],
        ["S10 Turbo - (CS / CD / CE) - mecânico", "2.8 12V 140cv", "2007"],
        ["- 2011 Diesel", "S10", "TDI STD DLX"],
        ["2.8 MWM Sprint 01/2000", "- 01/2002", "Diesel"]
      ],
      "Nissan": [
        ["Frontier (SE / Serrana / Attack)", "2.8 MWM Sprint", "2007"],
        ["- 2007 Diesel", "Frontier", "(SE / One / Strick / XE)"],
        ["2.8 MWM Sprint 2002", "- 2005", "Diesel"],
        ["Frontier (SE / Serrana / Attack)", "2.8 MWM Sprint", "2006"]
      ]
    }
  },

  "PSL356": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl356/produto/1473",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0356"], "Cummins": ["5266016"], "Fleetguard": ["LF17356"],
      "Japanparts": ["FOBR91S"], "Js Asakashi": ["CP40001"], "Tecfil": ["PSL356"],
      "Volkswagen": ["23B115403"], "Wega": ["WOP1002"]
    },
    aplicacoes: {
      "Outros": [
        ["Foton Aumark", "3.50 (AK)", "CUMMINS 2.8D"],
        ["2012 - >", "Diesel", "JAC MOTORS"],
        ["T140 Mecânico", "2.8 140cv Cummins", "2012"]
      ],
      "- >": [
        ["Diesel VOLKSWAGEN", "4150", "(Delivery) - Cummins ISF"],
        ["2.8 16V 2017", "- >", "Diesel"],
        ["6160 Delivery", "Cummins ISF 2.8L 160cv", "2017"],
        ["Diesel Express", "(Delivery) - Cummins ISF", "2.8 16V"]
      ],
      "-": [

      ]
    }
  },

  "PSL541": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl541/produto/154",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0541"], "Bosch": ["0986B00055"], "Delphi": ["EFL759"],
      "Ford": ["71185", "BG8T6731AA"], "Japanparts": ["FOBR18S"], "Mahle": ["OC1055"],
      "Mann": ["W719/50"], "Seineca": ["SOF7037"], "Seineca Antigo": ["SEI2710"],
      "Tecfil": ["PSL541"], "Turbo Filtros": ["TB541"], "Vox": ["LB541"],
      "Wega": ["WO541"], "WIX": ["WL10159"],
      "Fram": ["PH10757"]
    },
    aplicacoes: {
      "Ford": [
        ["Ranger Eletrônico", "3.0 Power Stroke", "07/2008"]
      ]
    }
  },

  "PSL560": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl560/produto/31",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01FBO023", "19347724"], "Authomix": ["FOL0560"], "Bosch": ["0986B00016", "F000KP1521"],
      "Controil": ["CLFO00007"], "Cross": ["FB15/2"], "Delkraft": ["DLL80"],
      "Delphi": ["EFL563"], "FAM": ["FL612"], "Fram": ["PH5548", "PH5548A"],
      "Inpeca": ["SB0563", "SLB0563"], "Japanparts": ["FOBR5S"], "Knecht": ["OC207"],
      "KS": ["188OS", "5013188"], "KSPG": ["50013188"], "Lucas": ["EFL563", "LFL5612"],
      "Mahle": ["OC250"], "Mann": ["W712/52", "W712/53", "W7125"], "Millard": ["ML5548"],
      "Motorcraft": ["GAMJ/6731/CA/"], "Purolator": ["L1063"], "Seineca": ["SOF7012"],
      "Seineca Antigo": ["SEI0712"], "Tecfil": ["PSL560"], "Turbo Filtros": ["TB560"],
      "Volkswagen": ["030115561", "030115561AH", "030115561AQ", "030115561AR", "030115561K", "030115561P", "030115561Q", "030115561T", "301155612"], "Vox": ["LB560"], "Vox Antigo": ["LB2601"],
      "Wega": ["WO340"], "WIX": ["W54030BR", "WL10174", "WL570003/4D"]
    },
    aplicacoes: {
      "Audi": [
        ["A3 1.6 8V", "01/2007", "- 2011"]
      ],
      "Chrysler": [
        ["PT Cruiser 2.4 e 2.0 16V", "2000", "- 2011"]
      ],
      "Seat": [
        ["Ibiza Popular", "1.0 16V", "2000"],
        ["- 2002 Gasolina", "VOLKSWAGEN", "Bora"],
        ["mecânico 1.6 16V 105cv", "2000", "- 2000"],
        ["Bora automático", "1.6 16V 120cv", "2000"],
        ["- 2000 Gasolina", "Cross Fox", "(MSI) - automático / mecânico"],
        ["1.6 8V 103cv 2005", "- 2009", "Total Flex"],
        ["Cross Fox (I-Motion / Urban White) - automático / mecânico", "1.6 8V 104cv", "2010"],
        ["- 2017 Total Flex", "Fox", "(MI / Plus / Route / Sportline / Sports) - mecânico"],
        ["1.6 8V 103cv 2003", "- 2010", "Total Flex"],
        ["Fox (MI / City / Plus / Route) - mecânico", "1.0 4cil. 8V 76cv", "2008"],
        ["- 2009 Total Flex", "Fox", "(MI / City / Plus / Sportline / Sports) - mecânico"],
        ["1.0 4cil. 8V 73cv 2003", "- 2008", "Total Flex"],
        ["Fox (MI / Imotion / Extreme / BlueMotion / Prime)", "1.6 8V 103cv", "2010"],
        ["- 2017 Total Flex", "Fox", "(MI / Trend / Sunrise) - mecânico"],
        ["1.0 4cil. 8V 76cv 2010", "- 2015", "Total Flex"],
        ["Gol 16V / FUN / PLUS / HIGHWAY / POWER / SELEÇÃO", "1.0 16v 76cv", "1999"],
        ["- 2006 Gasolina", "Gol", "G5 - MI / City / Trend - mecânico"],
        ["1.0 8V 76cv 2008", "- 2010", "Total Flex"],
        ["Gol G4 / G5 - mecânico", "1.0 16V 71cv", "2004"],
        ["- 2008 Flex", "Gol", "G2 - Special / Trend / EFI / MI Plus - mecânico"],
        ["1.0 4cil. 8V 50cv 1996", "- 2002", "Gasolina"],
        ["Gol G5 / G6 / MI / Power / Imotion / Rallye - mecânico", "1.6 8V 104cv", "2008"],
        ["- 2015 Total Flex", "Gol", "G5 / G6 - MI / Black / Ecomotion / Track - mecânico"],
        ["1.0 8V 76cv 2011", "- 2015", "Total Flex"],
        ["Gol G3 / G4 - MI / Fun / Highway / Sport / Plus / Power) - mecânico", "1.0 4cil. 8V 76cv", "2001"],
        ["- 2003 Gasolina", "Gol", "G3 / G4 - MI / City / Plus / Trend / Tech / Power - mecânico"],
        ["1.0 4c il 8V 61cv 2002", "- 2005", "Etanol"],
        ["Gol G3 / G4 - MI / City / Plus / Trend / Tech / Power - mecânico", "1.0 4cil. 8V 65cv", "2002"],
        ["- 2013 Gasolina", "Gol", "G2 - 1000 EFI - mecânico"],
        ["1.0 4cil 8V 1997", "- 2001", "Etanol"],
        ["Gol G2 - MI / Pus / Ouro - mecânico", "1.0 4cil 16V 69cv", "1997"],
        ["- 2001 Álcool/Gasolina", "Golf", "Nacional - MI / Trip / Sport - mecânico"],
        ["1.6 8V 94cv 2001", "- 2006", "Gasolina"],
        ["Golf MI / Tech / Flash / Sportline - mecânico", "1.6 8V 104cv", "2007"],
        ["- 2011 Total Flex", "Golf", "MI / Tech / Flash / Sportline - mecânico"],
        ["1.6 8V 104cv 2012", "- 2014", "Total Flex"],
        ["Golf MI / Black / Silver - mecânico", "1.6 8V 103cv", "2006"],
        ["- 2007 Total Flex", "Kombi", "1.4"],
        ["01/2006 - 2014", "Flex", "Parati"],
        ["(MI / Comfortline / Track Field) - mecânico 1.6 8V", "2004", "- 2008"],
        ["Total Flex Parati", "(MI / Comfortline / Track Field) - mecânico", "1.6 8V 99cv"]
      ]
    }
  },

  "PSL619": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl619/produto/75",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01FBO019", "01FBO027", "19347721", "88905845"], "Authomix": ["FOL0619"], "Bosch": ["0451103079", "0986B00021", "451103097", "451103709", "9455081501", "9455081512"],
      "Controil": ["CLFO00009"], "Cross": ["FB42"], "Daewoo": ["94797406"],
      "Delkraft": ["DLL74"], "Delphi": ["EFL619"], "Donaldson": ["P172556"],
      "FAM": ["FL022"], "Fiat": ["7083265", "7085110"], "Fil Filter": ["ZP21C"],
      "Fleetguard": ["LF3668", "LF5114"], "Ford": ["5009285"], "Fram": ["PH3387A", "PH4701", "PH4722"],
      "GM": ["24588463", "650381", "90144675", "93156245", "93156300", "93156310", "93157310", "94630907", "94632619"], "Gonher": ["GP46"], "Inpeca": ["J315E", "SB0315", "SLB0315"],
      "Irlemp": ["PERI292"], "Japanparts": ["FO398S"], "Js Asakashi": ["C9201"],
      "KS": ["100OS"], "KSPG": ["50013100"], "Logan": ["FL085US"],
      "Lucas": ["EFL619", "LFL619"], "Mahle": ["OC90"], "Mann": ["W712/22"],
      "Motorcraft": ["GAMJ/6731/BA/"], "Nasa": ["NS1042"], "Opel": ["650401"],
      "Purolator": ["L1064", "L1144"], "Roma": ["LUS675"], "Seineca": ["SOF7003"],
      "Seineca Antigo": ["SEI0703"], "Tecfil": ["PSL619"], "Turbo Filtros": ["TB619"],
      "Tutela": ["LB112"], "Vox": ["LB619"], "Vox Antigo": ["LB2403"],
      "Wega": ["WO130"], "WIX": ["W51003", "WL51003", "WL5700018"]
    },
    aplicacoes: {
      "Daewoo": [
        ["Cielo GM G15MF", "1.5 i SOHC", "08/1994"]
      ],
      "- >": [
        ["Gasolina Espero", "1.5 16V", "01/1994"],
        ["- 12/1998 Gasolina", "Lanos", "1.6 16V"],
        ["01/1997 - 12/2002", "Gasolina", "Leganza"],
        ["2.0 16V 01/1998", "- 12/2002", "Gasolina"],
        ["Nubira 1.6 8V", "01/1998", "- 12/1999"],
        ["Nubira Space Wagon", "2.0 8V", "01/1998"],
        ["- 12/2002 Gasolina", "Prince", "2.0 16V"],
        ["01/1994 - 12/1997", "Gasolina", "S. Salon"],
        ["2.0 16V 01/1994", "- 12/1997", "Gasolina"]
      ],
      "Fiat": [
        ["Doblo Adventure / ELX / Cargo", "1.8 8V", "2003"],
        ["- 2006 Gasolina", "Doblo", "Adventure / ELX / HLX Cargo"],
        ["1.8 8V 2006", "- 2010", "Flex"],
        ["Idea ELX FLEX", "1.8 8V", "2005"],
        ["- 2015 Flex", "Palio", "ELX / EX / HLX"],
        ["1.8 8V 2003", "- 2004", "Gasolina"],
        ["Palio HLX / RST", "1.8 8V", "2004"],
        ["- 2008 Flex", "Palio Weekend", "1.8 8V"],
        ["2003 - 2006", "Gasolina/Flex", "Punto"],
        ["Essence / HLX / Sporting 1.8 8V MPI", "07/2007", "- 06/2010"],
        ["Siena ELX / EX / HLX", "1.8 8V", "2003"],
        ["- 2004 Gasolina/Flex", "Stilo", "Attractive"],
        ["1.8 16V e 8V 01/2002", "- 2011", "Gasolina/Flex"],
        ["Strada Adventure", "1.8 8V", "2002"],
        ["- 2010 Gasolina/Flex", "GENERAL MOTORS", "Agile"],
        ["Econo Flex 1.4", "2009", "- 2015"],
        ["Astra 8V e 16V", "1.8 e 2.0", "1999"],
        ["- 2003 Gasolina", "Astra", "2.0 8V"],
        ["2004 - 2011", "Flex", "Astra"],
        ["Importado 2.0 16V", "01/1995", "- 12/1996"],
        ["Astra 1.8 8V MPFI", "01/2001", "- 12/2004"],
        ["Álcool Blazer", "MPFI", "2.2 8V"],
        ["01/1998 - 12/2000", "Gasolina", "Blazer"]
      ],
      "Dlx Efi": [
        ["2.2 8V 1995", "- 2006", "Gasolina"],
        ["Blazer 2.4 8V", "2000", "- 2007"],
        ["Blazer 2.4 8V", "2007", "- 2012"],
        ["Calibra -", "2.0 16V", "1993"],
        ["- 1996 Gasolina", "Celta", "(Life / Spirit / Super) - mecânico"],
        ["1.0 8V 60cv 2000", "- 2006", "Gasolina"],
        ["Celta sem ar cond. - (Life / Spirit / Super) - mecânico", "1.0 8V 60cv", "2000"]
      ]
    }
  },

  "PSL630": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl630/produto/1964",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Citroen": ["9809532380"], "Hengst": ["H388W"], "Mann": ["W7063"],
      "Tecfil": ["PSL630"], "Ufi": ["2375200"], "Vox": ["LB630"],
      "Wega": ["WO161"],
      "Authomix": ["FOL0161"],
      "Mahle": ["OC 1300"],
      "Fram": ["PH11819"]
    },
    aplicacoes: {
      "Citroen": [
        ["Jumper (Furgão / Minibus)", "2.0 BlueHDi 130cv", "2019"]
      ],
      "- >": [
        ["Diesel Jumper", "(Furgão / Minibus)", "2.3 HDI 127cv"],
        ["2019 - >", "Diesel", "FIAT"],
        ["Ducato Turbodiesel - (Cargo / Maxicargo / Multi / Minibus Confort / Minibus Executivo)", "2.2 - 140cv", "2024"],
        ["Diesel TITANO", "Turbodiesel - (Endurance / Volcano / Ranch)", "2.2 - 180cv"],
        ["Titano Turbo - (Endurece / Volcano / Ranch) - MT / AT", "2.2 180cv", "2024"],
        ["- 2025 Diesel", "Titano", "Turbo - (Endurece / Volcano / Ranch) - Automático / Manual"],
        ["2.2 180cv 2024", "- 2025", "Diesel"]
      ],
      "Peugeot": [
        ["Boxer (Furgão Business)", "2.0 122cv Turbo", "2019"]
      ]
    }
  },

  "PSL657": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl657/produto/69",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0657"], "Baldwin": ["B7496"], "Bosch": ["0986B00059"],
      "Delphi": ["EDL111"], "Donaldson": ["P766162"], "Fiat": ["5801985959", "8094872"],
      "Fleetguard": ["LF17497"], "Fram": ["PH10268"], "Gonher": ["GP109"],
      "Hengst": ["H12W08"], "Inpeca": ["SLB0138"], "IVECO": ["504091563"],
      "Japanparts": ["FOBR65"], "KSPG": ["50014811"], "Mahle": ["OC1222"],
      "Mann": ["W914/28"], "Mann Argentina": ["W914/28"], "Mann Europa": ["W914/28"],
      "Master Parts": ["MM100610"], "Sakura": ["C222240"], "Seineca": ["SOF7046"],
      "Seineca Antigo": ["SEI2721"], "Tecfil": ["PSL657"], "Turbo Filtros": ["TB657"],
      "Vox": ["LB657"], "Wega": ["WO420", "WO421"], "WIX": ["WL7443"]
    },
    aplicacoes: {
      "Citroen": [
        ["Jumper JTD", "2.3", "01/2009"]
      ],
      "- >": [
        ["Diesel FIAT", "Ducato", "MultiJet"],
        ["2.3 01/2009", "- 2017", "Diesel"],
        ["Ducato MultiJet", "2.3", "2018"],
        ["Diesel IVECO", "DAILY 30.130", "2.3 FPT 130cv"],
        ["2020 - >", "-", "DAILY 45.170"],
        ["3.0 FPT 170cv 2020", "- >", "-"],
        ["DAILY 55.170 3.0 FPT 170cv", "2020", "- >"],
        ["DAILY 65.170 3.0 FPT 170cv", "2020", "- >"],
        ["DAILY CITY 30S13 2.3 16V FPT 130cv", "2018", "- >"]
      ],
      "Peugeot": [
        ["Boxer 2.3", "01/2009", "- >"]
      ]
    }
  },

  "PSL900": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl900/produto/13",
    especificacoes: { altura: 126, diametroExterno: 92.7, diametroInterno: null, rosca: "3/4\" - 16 UN", elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01FBO006", "01FBO048", "19347736"], "AGCO": ["1447048V1"], "Agrale": ["6006001208009"],
      "Atlas-Copco": ["9807019800"], "Authomix": ["FOL0900"], "Baldwin": ["BT216"],
      "Bosch": ["0986B01025", "9455081015"], "Brasif": ["B502"], "Brasinca": ["1447048M1", "71028"],
      "Case": ["E065502", "PK71028"], "CAV": ["7176054"], "CBT": ["71028"],
      "Chicago": ["71028"], "Compair": ["71028"], "Controil": ["CHFO00007"],
      "Cross": ["FB17"], "CVRD": ["6295103890"], "Delkraft": ["DL212"],
      "Delphi": ["EFL028"], "Donaldson": ["P172505", "P554403"], "Dynapac": ["499570", "71028"],
      "Envemo": ["71028", "DONN6714A", "E5NN6714AA"], "FAM": ["FL900"], "Fiat Allis": ["87800083"],
      "Fleetguard": ["LF701"], "Ford": ["71028"], "Foton": ["T64101001"],
      "Fram": ["PH2815", "PH2821C", "PH3508", "PH3569ST"], "GM": ["71028", "7984844", "9307814"], "Gonher": ["GP1"],
      "Hengst": ["H17W06"], "Hidrafil": ["550002"], "Hyster": ["259264", "259964", "289964", "803918", "809298"],
      "Inpeca": ["J804E", "SB0804", "SLB0804"], "Irlemp": ["PER137"], "Japanparts": ["FOBR35S"],
      "KS": ["236OS"], "KSPG": ["50013236"], "Logan": ["FL251US", "PL251US"],
      "Lucas": ["EFL028", "HDL028"], "Magneti Marelli": ["FO900"], "Mahle": ["OC324", "OC370"],
      "Mann": ["W934", "W940", "W940/24"], "Massey Ferguson": ["1447048", "71028"], "Maxion": ["1447048", "1447048M1", "71028"],
      "MWM": ["70998123", "71054", "MASTER0010"], "Nasa": ["NS1010"], "New Holland": ["RE5NN6714AA"],
      "Parker": ["RL137"], "Purolator": ["L1076", "PC237", "PER137"], "Roma": ["LUS28"],
      "Sakura": ["C5101"], "Santa Matilde": ["71028"], "Santal": ["2645403"],
      "Schulz": ["701150"], "Seineca": ["SOF7447"], "Seineca Antigo": ["SEI2728"],
      "Tecfil": ["PSL900"], "Tema Terra": ["P206067"], "Turbo Filtros": ["TB127"],
      "Tutela": ["LB166"], "Unifilter": ["USL137"], "VME": ["3981923", "6511766"],
      "Volkswagen": ["2654403"], "Vox": ["LB900"], "Vox Antigo": ["LB2422"],
      "Wega": ["WO280", "WO590"], "WIX": ["W51806", "WL51806"]
    },
    aplicacoes: {
      "Agrale": [
        ["8240 A4248", "86", "- >"],
        ["8240 ALCOOL E4236", ">", "- 84"],
        ["Ahlmann AVT1330", "Manipuladores Telescópicos", "Perkins 1004.4T"]
      ],
      "Alfa Romeo": [
        ["AR 2300 BERLINA", "2.3 8V", "01/1974"],
        ["- 12/1987 Gasolina", "AR 2300", "BERLINA"],
        ["2.3 8V 01/1981", "- 12/1985", "Álcool"]
      ],
      "Atlas-Copco": [
        ["QAS48 QAS 48", "-", "QAS78PD"],
        ["PERKINS 1004 TG -", "XA120, XAS120PD", "Perkins 6357"],
        ["75 - >", "-", "XA80, XAS80PD"],
        ["Perkins 4236 -", "AUDI", "A6"]
      ],
      "Limosine": [
        ["3.0 30V 01/1994", "- 12/2005", "Gasolina"],
        ["A6 LIMOSINE", "3.0 30V", "01/1994"],
        ["- 12/2005 Gasolina", "BARBER GREEN", "Acabadoras de asfalto SA375"],
        ["Perkins 4236 -", "SA37", "Perkins 4236"]
      ],
      "Bob Cat": [
        ["953 -", "-", "963"],
        ["963 -", "963G", "963G"],
        ["T2556 - 11016 Perkins", "2005", "- 2005"],
        ["T2566 - NEW GENERATION - 3631 11007 Perkins", "2005", "- 2005"]
      ],
      "Case": [
        ["580H Perkins 4236", "-", "C60 - C60X - C50 - C50X"],
        ["Perkins -", "CATERPILLAR", "206 Série 3GC1 - UP"],
        ["Perkins -", "211 Série 4EC1 - UP", "Perkins"],
        ["216 5FZ1", "-", "216"],
        ["4NZ1 -", "216", "6BZ1 - 699"],
        ["224 Série 5TC1 - UP -", "-", "226"],
        ["5FZ1 - 6699 -", "226", "6BZ1 - 699"],
        ["226 5FZ6700", "-", "228"]
      ],
      "-": [

      ]
    }
  },

  "PSL902": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl902/produto/37",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01FBO014", "19347733"], "Authomix": ["FOL0902"], "Baldwin": ["B2"],
      "Bosch": ["0986B01026"], "Cross": ["FB83"], "Delkraft": ["DL226"],
      "Delphi": ["EFL974"], "Donaldson": ["P552518"], "Donsson": ["GS001"],
      "FAM": ["FL904"], "Fleetguard": ["HF6352"], "Ford": ["BF5T6731AA"],
      "Fram": ["PH5443", "PH5833"], "Franig": ["HCX1"], "Hengst": ["H24W03"],
      "Hyster": ["1328692"], "Inpeca": ["SB0945", "SLB0945"], "Japanparts": ["FOBR23S"],
      "KS": ["216OS"], "KSPG": ["50013216"], "Lucas": ["EFL974", "LFL136"],
      "Mahle": ["OC261"], "Mann": ["W923/1", "W930/21"], "Maxion": ["71133", "ERR3340"],
      "Mercedes Benz": ["1801409"], "Motorcraft": ["G3MJ/6731/DA/", "MB9T6731AA"], "MWM": ["HS017"],
      "Partmo": ["A1"], "Purolator": ["L1080"], "Seineca": ["SOF7448"],
      "Seineca Antigo": ["SEI2729"], "Tecfil": ["PSL902"], "Turbo Filtros": ["TB945"],
      "Unifilter": ["USH919"], "Vox": ["LB902"], "Vox Antigo": ["LB2423"],
      "Wega": ["WO290", "WO344"], "WIX": ["W54235BR", "WL54235"], "Yale": ["8500002"]
    },
    aplicacoes: {
      "Ford": [
        ["F100 HSD TD XL/XLT 4X2 MAXION HS", "2.5i", "01/1996"]
      ],
      "- >": [
        ["Diesel F1000", "-", "2.5 8V"],
        ["1996 - 1998", "Diesel", "F1000"],
        ["4.9 12V V6 1996", "- 1999", "Gasolina"],
        ["Ranger Power Stroke F-Truck / XL / XLPlus / XLT", "2.8 TD 132cv", "06/2001"],
        ["- 06/2006 -", "Ranger", "-"],
        ["2.5 8V 1998", "- 2004", "Diesel"],
        ["Ranger 2.5 Maxion HS Euro II", "12/1999", "- 08/2001"],
        ["Ranger Power Stroke", "2.8 8V 135cv", "08/2001"],
        ["- 06/2006 Diesel", "Ranger", "2.5 Maxion HS Turbo"],
        ["11/1997 - 11/1999", "Diesel", "Ranger"],
        ["Maxion 2.5 TDIC", "01/1999", "- >"],
        ["Ranger Maxion", "2.5 TDIC", "06/2000"],
        ["Diesel GENERAL MOTORS", "Blazer", "Maxion DLX"],
        ["2.5i Diesel", "Blazer", "Turbo"],
        ["2.5 8V 1996", "- 2003", "Diesel"],
        ["S10 Maxion", "STD 2.5 Turbodiesel", ">"],
        ["- 12/1997 Diesel", "S10", "2.5 4cil Maxion"],
        ["1995 - 2005", "Diesel", "S10"],
        ["Turbo - mecânico 2.5 8V 101cv", "1996", "- 2000"]
      ],
      "Land Rover": [
        ["Defender 110", "2.5 122cv", "1997"],
        ["- 2007 -", "Defender", "130 Turbo - mecânico"],
        ["2.5 122cv 1997", "- 2007", "Diesel"],
        ["Defender 90", "2.5 122cv", "1997"],
        ["- 2005 -", "Defender", "90 Turbo - mecânico"],
        ["2.3 1997", "- 2007", "Diesel"],
        ["Discovery Turbo - (ES) - automático / mecânico", "2.5 8V 113cv", "1991"],
        ["- 1993 Diesel", "Discovery", "Turbo - (ES) - automático / mecânico"],
        ["2.5 8V 113cv 1993", "- 1994", "Diesel"],
        ["Discovery TDI", "2.5 16V", "2001"],
        ["- 2004 Diesel", "Discovery II", "2.5 8V 122cv"],
        ["1995 - 1998", "-", "Range Rover"],
        ["L4 2.5 16V", "2006", "- >"],
        ["Range Rover (HSE) - automático", "4.6 V8 32V 218cv", "1998"],
        ["- 2005 Gasolina", "MERCEDES BENZ", "Sprinter"],
        ["Chassis 412 2.5 L 8V SOHV L4", "2000", "- 2003"],
        ["Sprinter 312D CHASSIS", "2.2 16V", "2001"],
        ["- 2002 Diesel", "Sprinter", "WINDLAUF 412"],
        ["2.5 L 8V SOHV L4 2000", "- 2003", "Diesel"],
        ["Sprinter Chassis 310D / 412", "2.5 8V", "1997"],
        ["- 2003 Diesel", "VOLKSWAGEN", "Passat"],
        ["Syncro 2.8", "10/1996", "- 12/2000"]
      ]
    }
  },

  "PSL909": {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl909/produto/406",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FOL0909"], "Baldwin": ["BD7309"], "Bosch": ["0986B01043"],
      "Cnh": ["84485647"], "Cummins": ["3401544"], "Delkraft": ["DL295"],
      "Delphi": ["EFL752"], "Donaldson": ["DBL7300", "P553000"], "Fleetguard": ["LF9009"],
      "Ford": ["BG2X6731CA"], "Fram": ["HPH6349AFP", "HPH9500", "PH11009"], "Gonher": ["GP3001"],
      "Hengst": ["H300W07"], "Japanparts": ["FOBR19S"], "John Deere": ["AT193242"],
      "Js Asakashi": ["C0077"], "Mahle": ["OC1176"], "Mann": ["WP12121"],
      "Master Parts": ["MM100225"], "Motorcraft": ["MB6X6731BA"], "Nexpro": ["48074341"],
      "Parker": ["RL370"], "Sakura": ["C5707"], "Sisu": ["1216400561"],
      "Tecfil": ["PH11009", "PSL909"], "Trp": ["915020"], "Turbo Filtros": ["TB30011"],
      "Unifilter": ["USL9009"], "Volkswagen": ["2T0115561"], "Vox": ["LB909"],
      "Vox Antigo": ["LB909"], "Wega": ["WO711"], "WIX": ["51748XD"]
    },
    aplicacoes: {
      "Agrale": [
        ["Optima 650 BF6M1013 ECP", "-", "Optima 650"],
        ["Cummins -", "ATLAS-COPCO", "MT2010"],
        ["Cummins QSL9 0 -", "ST1030", "Cummins QSL9 0"],
        ["2007 - 2007", "-", "CASE"],
        ["2388 Cummins 6CTAA 8.3", "1998", "- >"],
        ["912C CUMMINS QSM 11", "-", "DAF"],
        ["F95.530XF 95XF", "CUMMINS VF390M", "1997"]
      ],
      "- >": [
        ["Diesel 1933", "Cargo / Tractor", "Cummins ISL8.9 330 P7-0"],
        ["2012 - >", "Diesel", "2422"],
        ["8.3 Cummins 6CTAA 11/2003", "- >", "Diesel"],
        ["2425 8.3", "Cummins 6TCAA", "11/2003"],
        ["Diesel 2626", "6 CTAA", "8.3"],
        ["2001 - >", "Diesel", "2630"],
        ["6 CTAA 8.3", "2001", "- >"],
        ["2631 6 CTAA", "8.3 MAX TON", "2001"],
        ["Diesel 2632E", "Cummins ISCE", "8.3"],
        ["02/2006 - >", "Diesel", "2831"],
        ["6 CTAA 8.3", "2005", "- 2006"],
        ["3222 6 CTAA", "8", "2002"],
        ["- 2006 Diesel", "3224", "6 CTAA"],
        ["8.3 2001", "- >", "Diesel"],
        ["4030 6 CT", "8.3", "2001"],
        ["Diesel 4030", "6 CTAA", "8.3 MAX TON"],
        ["2002 - >", "Diesel", "4031"],
        ["6 CT 8.3", "2001", "- >"],
        ["4031 6 CTAA", "8.3 MAX TON", "2002"],
        ["- 2006 Diesel", "4331", "6 CTAA"],
        ["8.3 2003", "- 2006", "Diesel"],
        ["4432E CUMMINS ISCE", "8.3", "2006"]
      ],
      "-": [
        ["Doosan DL400", "Carregadoras Com Rodas", "CUMMINS QSL9"]
      ],
      "Ford": [
        ["1617 8.3 CUMMINS 6CT", "01/2004", "- >"],
        ["1622 8.3 Cummins 6CTA", "01/2002", "- >"],
        ["1622 8.3 Cummins 6CTA", "11/2001", "- 12/2001"],
        ["1722 8.3 Cummins 6CTAA", "01/2004", "- >"],
        ["1731 8.3 Cummins 6CTAA", "01/2004", "- >"],
        ["1932 Cargo", "Cummins", "2011"]
      ]
    }
  },

  "PEL110": {
    "tipo": "oleo",
    "url": "https://catalogo.tecfil.com.br/search/pel108/produto/57?aplicacao=184155",
    especificacoes: { altura: 144, diametroExterno: 59, diametroInterno: null, rosca: "Não possui", elemento: "Papel" },
    "conversoes": {
      "ACDelco": [
        "19347729"
      ],
      "Authomix": [
        "FOL0110"
      ],
      "Bosch": [
        "1457429193"
      ],
      "Citroën": [
        "1109R7"
      ],
      "Delphi": [
        "EFL258"
      ],
      "Fram": [
        "CH9443ECO",
        "FA5616ECO"
      ],
      "Hengst": [
        "E35HD102"
      ],
      "Japanparts": [
        "FOECO037"
      ],
      "JS Asakashi": [
        "OE0005"
      ],
      "KSPG": [
        "50014805"
      ],
      "Mahle": [
        "OX193D",
        "OX193DECO"
      ],
      "Mann": [
        "HU612X"
      ],
      "Millard": [
        "ML9443"
      ],
      "Partmo": [
        "PP4780"
      ],
      "Peugeot": [
        "1109R6"
      ],
      "Sakura": [
        "EO2101"
      ],
      "Seineca": [
        "SEF7601"
      ],
      "Seineca antigo": [
        "SEI0721"
      ],
      "Tecfil": [
        "PEL110"
      ],
      "Turbo Filtros": [
        "TLE110"
      ],
      "Vox": [
        "LE110"
      ],
      "Vox antigo": [
        "LE2032"
      ],
      "Wega": [
        "WOE700"
      ],
      "WIX": [
        "WL7299"
      ]
    },
    "aplicacoes": {
      "Citroën": [
        [
          "Berlingo NFU (TU5JP4)",
          "1.6i 16V",
          "10/2000 - 2007"
        ],
        [
          "Berlingo TU5 JP4",
          "1.6",
          "01/03 - 2007"
        ],
        [
          "Berlingo",
          "1.6 16V",
          "2000 - 2002"
        ],
        [
          "C3 GLX / EXCLUSIVE",
          "1.4 e 1.6",
          "2001 - 2013"
        ],
        [
          "C3 GLX / EXCLUSIVE",
          "1.4 e 1.6",
          "2006 - 2013"
        ],
        [
          "Xsara EXCLUSIVE / GLX / VTS",
          "1.6 16V",
          "2001 - 2004"
        ],
        [
          "Xsara Break EXCLUSIVE / GLX",
          "1.6 16V",
          "2001 - 2005"
        ]
      ],
      "Peugeot": [
        [
          "206",
          "1.6 16V",
          "2001 - 2008"
        ],
        [
          "307",
          "1.6 16V",
          "2002 - 2007"
        ],
        [
          "Partner",
          "1.6 16V",
          "11/2002 - 05/2004"
        ],
        [
          "Partner",
          "1.6 16V",
          "10/2000 - 10/2002"
        ]
      ]
    }
  },

  PSL910: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL910",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSL910"],"Authomix":["FOL0910"],"Mann":["W 11 010"],"Mahle":["OX 439 D"],"Wega":["WO-630"],"Fram":["PH11350"],"Vox":["LB910"]},
    aplicacoes: null
  },

  PSL928: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL928",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSL928"],"Authomix":["FOL0928"],"Mann":["W 11 102"],"Mahle":["OC 575"],"Wega":["WO-620"],"Fram":["PH10000"],"Vox":["LB928"]},
    aplicacoes: null
  },

  PSL930: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL930",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSL930"],"Authomix":["FOL0930"],"Mann":["W 11 010/2"],"Mahle":["OX 580 D"],"Wega":["WO-635"],"Fram":["PH11450"],"Vox":["LB930"]},
    aplicacoes: null
  },

  PEL920: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PEL920",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEL920"],"Authomix":["FEL0920"],"Mann":["HU 12 100 x"],"Mahle":["OX 440 D"],"Wega":["WOE-550"],"Fram":["CH11400"],"Vox":["LE920"]},
    aplicacoes: null
  },

  PSL985: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL985",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSL985"],"Authomix":["FOL0985"],"Mann":["W 11 010"],"Mahle":["OX 439 D"],"Wega":["WO-630"],"Fram":["PH11350"],"Vox":["LB985"]},
    aplicacoes: null
  },

  PEL325: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PEL325",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEL325"],"Authomix":["FOL0325"],"Mann":["HU 6029 z"],"Mahle":["OX 1280D"],"Wega":["WOE-245"],"Fram":["CH12280"],"Vox":["LE325"]},
    aplicacoes: null
  },

  PSL75: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL75",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSL75"],"Authomix":["FOL0075"],"Mann":["W 712/83"],"Mahle":["OC 574"],"Wega":["WO-130"],"Fram":["PH4968"],"Vox":["LB75"]},
    aplicacoes: null
  },

  PEL785: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PEL785",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEL785"],"Authomix":["FOL0785"],"Mann":["HU 7033 z"],"Mahle":["OX 1255D"],"Wega":["WOE-705"],"Fram":["CH12282"],"Vox":["LE785"]},
    aplicacoes: null
  }

};
