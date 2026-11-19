/* Filtros de óleo (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos de cada entrada:
     tipo         "oleo"
     url          link da página do filtro no catálogo (botão "Abrir no catálogo Tecfil")
     especificacoes  { altura, diametroExterno, diametroInterno, rosca, elemento,
                       valvulaAntiRetorno, valvulaAlivio, pesoLiquido, pesoBruto, caixa, observacao }
     conversoes   { "Marca": ["código", ...] }  todas as marcas do catálogo (a busca acha por qualquer uma)
     aplicacoes   { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] }  ou null se a lista não veio inteira
   O filtro aparece na busca mesmo que nenhum veículo do guia o use. */
export const filtrosOleo = {

  PSL340: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/6008001204004/produto/1?tr=REFERENCIA",
    especificacoes: { altura: 93, diametroExterno: 138, diametroInterno: null, rosca: '1" 1/2 - 16 UN', elemento: "Papel",
      valvulaAntiRetorno: true, valvulaAlivio: true, pesoLiquido: 1.16, pesoBruto: 1.209, caixa: "06", observacao: "COM SEXTAVADO" },
    conversoes: {
      "Agrale": ["6008001204004"], "ACDelco": ["01FBO041","19347731"], "Alliance": ["A40018001090097"], "Authomix": ["FOL0340"],
      "Bosch": ["0986B01016"], "Delkraft": ["DL237"], "Delphi": ["EFL737"], "Donaldson": ["P550893"], "FAM": ["FL325"],
      "Fram": ["PH9503"], "Franig": ["HCX8018"], "GM": ["93342367","MS054102"], "Hengst": ["H300W09"], "Inpeca": ["SLB0720"],
      "Japanparts": ["FOBR3S"], "KSPG": ["50013478"], "Mahle": ["OC404"], "Mann": ["W1323"], "MWM": ["905411880018","905411880026"],
      "Nissan": ["152086S300"], "Partmo": ["AL106"], "Purolator": ["L1078"], "Racor": ["RL350"], "Sakura": ["C7972"],
      "Seineca": ["SOF7036"], "Seineca antigo": ["SEI2704"], "Tecfil": ["PSL340"], "Troller": ["0102497"], "Turbo Filtros": ["TB350"],
      "Unifilter": ["USL350"], "Volkswagen": ["062115561A"], "Vox": ["LB340"], "Vox antigo": ["LB2435"], "Wega": ["WO540"],
      "WIX": ["W54175BR","WL7414"], "ZF": ["0070131269"]
    },
    aplicacoes: {
      "Agrale": [
        ["CARGO (4WDM) (6011.000.005.00.0)","2.8 MWM SPRINT 4.07 TCA","2006 - >"],
        ["Furgovan 6000","2.8 MWM Sprinter 4.07 TCA","01/2002 - >"],
        ["Furgovan 6000E","MWM 4.07 TCE","01/2005 - >"],
        ["Furgovan 6000E","MWM 4.08 TCE","01/2005 - >"],
        ["MA 5.0 E","MWM 4.07 TCE","01/2002 - >"],
        ["MA 5.0 E","MWM 4.08 TCE","01/2005 - >"],
        ["MA 6.0 E","MWM 4.08 TCE","01/2005 - >"],
        ["MA 6.0 E","MWM 4.07 TCE","01/2005 - >"],
        ["Marruá AM 100-E (6011.000.120.00.7) Sprint 4.07 TCA","MWM","02/2007 - >"],
        ["Marruá AM 150-E (6011.000.123.00.1) Sprint 4.07 TCA","MWM","04/2007 - >"],
        ["Marruá AM 200-E (6011.000.115.00.7) Sprint 4.07 TCA","MWM","06/2006 - >"],
        ["Volare A5","MWM 4.07 TCA","01/00 - >"],
        ["Volare A6","MWM 4.07 TCA","01/98 - 12/99"],
        ["Volare A6","MWM 4.07 TCA","01/00 - 12/01"],
        ["Volare A6","MWM 4.07 TCA","01/02 - >"]
      ],
      "General Motors": [
        ["Blazer EXECUTIVE 4X4","2.8 8V","2005 - >"],
        ["Blazer STD Turbo","2.8 8V","2000 - 2006"],
        ["Blazer Sprint 4.07 TCA","2.8 MWM","01/2002 - >"],
        ["Blazer Sprint DLX 4X2 / 4X4 Intercooler","2.8 MWM","01/2005 - >"],
        ["S10 TDI STD DLX LTD (4X4)","2.8 MWM Sprint","03/2005 - >"],
        ["S10 STD / DLX","MWM Sprint 2.8 SOHC","01/2000 - >"],
        ["S10 Turbo (CS / CD / CE) mecânico","2.8 12V MWM 132cv","2002 - 2005"],
        ["S10 Turbo Intercooler Mecânico, com sist. anti-borbulha","2.8 MWM","01/2002 - >"],
        ["S10 Turbo (CS / CD / CE) mecânico","2.8 12V 140cv","2006 - 2007"],
        ["S10 Turbo (CS / CD / CE) mecânico","2.8 12V MWM 132cv","1998 - 2001"],
        ["S10 Turbo (CS / CD / CE) mecânico","2.8 12V 140cv","2007 - 2011"],
        ["S10 TDI STD DLX","2.8 MWM Sprint","01/2000 - 01/2002"]
      ],
      "Nissan": [
        ["Frontier (SE / Serrana / Attack)","2.8 MWM Sprint","2007"],
        ["Frontier (SE / One / Strick / XE)","2.8 MWM Sprint","2002 - 2005"],
        ["Frontier (SE / Serrana / Attack)","2.8 MWM Sprint","2006"]
      ]
    }
  },

  PSL900: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/tecfil/produto/13",
    especificacoes: { altura: 126, diametroExterno: 92.7, diametroInterno: null, rosca: '3/4" - 16 UN', elemento: "Papel",
      valvulaAntiRetorno: true, valvulaAlivio: true, pesoLiquido: 0.545, pesoBruto: 0.567, caixa: "12" },
    conversoes: {
      "ACDelco": ["01FBO006","01FBO048","19347736"], "AGCO": ["1447048V1"], "Agrale": ["6006001208009"], "Atlas Copco": ["9807019800"],
      "Authomix": ["FOL0900"], "Baldwin": ["BT216"], "Bosch": ["0986B01025","9455081015"], "Brasif": ["B502"],
      "Brasinca": ["1447048M1","71028"], "Case": ["E065502","PK71028"], "CAV": ["7176054"], "CBT": ["71028"], "Chicago": ["71028"],
      "Compair": ["71028"], "Controil": ["CHFO00007"], "Cross": ["FB17"], "CVRD": ["6295103890"], "Delkraft": ["DL212"],
      "Delphi": ["EFL028"], "Donaldson": ["P172505","P554403"], "Dynapac": ["499570","71028"],
      "Envemo": ["71028","DONN6714A","E5NN6714AA"], "FAM": ["FL900"], "Fiat Allis": ["87800083"], "Fleetguard": ["LF701"],
      "Ford": ["71028"], "Foton": ["T64101001"], "Fram": ["PH2815","PH2821C","PH3508","PH3569ST"], "GM": ["71028","7984844","9307814"],
      "Gonher": ["GP1"], "Hengst": ["H17W06"], "Hidrafil": ["550002"], "Hyster": ["259264","259964","289964","803918","809298"],
      "Inpeca": ["J804E","SB0804","SLB0804"], "Irlemp": ["PER137"], "Japanparts": ["FOBR35S"], "KS": ["236OS"], "KSPG": ["50013236"],
      "Logan": ["FL251US","PL251US"], "Lucas": ["EFL028","HDL028"], "Magneti Marelli": ["FO900"], "Mahle": ["OC324","OC370"],
      "Mann": ["W934","W940","W940/24"], "Massey Ferguson": ["1447048","71028"], "Maxion": ["1447048","1447048M1","71028"],
      "MWM": ["70998123","71054","MASTER0010"], "Nasa": ["NS1010"], "New Holland": ["RE5NN6714AA"], "Parker": ["RL137"],
      "Purolator": ["L1076","PC237","PER137"], "Roma": ["LUS28"], "Sakura": ["C5101"], "Santa Matilde": ["71028"], "Santal": ["2645403"],
      "Schulz": ["701150"], "Seineca": ["SOF7447"], "Seineca antigo": ["SEI2728"], "Tecfil": ["PSL900"], "Tema Terra": ["P206067"],
      "Turbo Filtros": ["TB127"], "Tutela": ["LB166"], "Unifilter": ["USL137"], "VME": ["3981923","6511766"], "Volkswagen": ["2654403"],
      "Vox": ["LB900"], "Vox antigo": ["LB2422"], "Wega": ["WO280","WO590"], "WIX": ["W51806","WL51806"]
    },
    aplicacoes: null
  },

  PEL106: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel106/produto/114?aplicacao=184984",
    especificacoes: { altura: 73, diametroExterno: 62, diametroInterno: 28, rosca: "Não possui", elemento: "Papel",
      valvulaAntiRetorno: false, valvulaAlivio: false, pesoLiquido: 0.041, pesoBruto: 0.055, caixa: "12", observacao: "LINHA ECOLÓGICA" },
    conversoes: {
      "ACDelco": ["19347805"], "Authomix": ["FOL0106"], "Bosch": ["0986B00704"], "Delphi": ["EFL760"],
      "Ford": ["1343102","1S7J6744BA","4S7J6744AA"], "Fram": ["CH10502"], "Hengst": ["E20HD79"], "Inpeca": ["SLE2110"],
      "Japanparts": ["FOECO036","FOECO039"], "JS Asakashi": ["OE406J"], "KSPG": ["50013866"], "Mahle": ["OX203D","OX979"],
      "Mann": ["HU711X"], "Millard": ["ML321"], "Partmo": ["PP6"], "Sakura": ["EO1701"], "Seineca": ["SEF8214"],
      "Tecfil": ["PEL106"], "Turbo Filtros": ["TLE106"], "Vox": ["LE106"], "Wega": ["WOE120","WOE121"], "WIX": ["WL57203"]
    },
    aplicacoes: {
      "Ford": [
        ["Ecosport Duratech HE (Câmbio Manual)","2.0","01/2003 - 02/2003"],
        ["Fusion SEL","2.3 16V","05/2006 - >"],
        ["Mondeo Ghia Duratorq DI","2.0 TD","01/2002 - >"],
        ["Mondeo","1.8 Tdci","12/2007 - >"]
      ]
    }
  },

  PEL108: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel108/produto/54?aplicacao=184150",
    especificacoes: { altura: 71, diametroExterno: 65.6, diametroInterno: 24.5, rosca: "Não possui", elemento: "Papel",
      valvulaAntiRetorno: false, valvulaAlivio: false, pesoLiquido: 0.051, pesoBruto: 0.068, caixa: "12", observacao: "LINHA ECOLÓGICA" },
    conversoes: {
      "ACDelco": ["19347726"], "Authomix": ["FOL0108"], "Baldwin": ["P7450"], "Citroën": ["1109AJ","1109X4","1109Z2"],
      "Controil": ["CLFO00001"], "Delphi": ["EFL252"], "Filtran": ["1009973"], "Fleetguard": ["LF16448"],
      "Ford": ["6C1Q6744AA","JS16744AA"], "Fram": ["CH10066","CH9973ECO"], "Gonher": ["G341"], "Hengst": ["E44HD110"],
      "Japanparts": ["FOECO060"], "JS Asakashi": ["OE42001"], "Luberfiner": ["P978"], "Mahle": ["OX339/2"], "Mann": ["HU711/51X"],
      "Master Parts": ["MM100784"], "Millard": ["ML9814"], "Partmo": ["PP358"], "Peugeot": ["1109AJ","1109X3","1109Z1","9818914980"],
      "Sakura": ["EO24070"], "Seineca": ["SEF7600","SEF7606"], "Seineca antigo": ["SEI0715"], "Tecfil": ["PEL108"],
      "Turbo Filtros": ["TL108ECO"], "Vox": ["LE108"], "Vox antigo": ["LE2033"], "Wega": ["WOE710","WOE710P"], "WIX": ["57512","WL54225"]
    },
    aplicacoes: {
      "Citroën": [
        ["Air Cross","1.6 16V","2010 - >"],
        ["Berlingo NFU (TU5JP4)","1.6i 16V","10/2000 - 2007"],
        ["Berlingo Flex","1.6 16V - 122 cv","2018 - >"],
        ["C3 GLX / EXCLUSIVE","1.4 e 1.6","2001 - 2013"],
        ["C3 (Feel / Feel Parck / First Edition) - automático / manual","1.6 16V 113cv","2023 - >"],
        ["C3 GLX / EXCLUSIVE","1.4 e 1.6","2006 - 2013"],
        ["C3 Picasso - (GL / GLX) - Mecânico","1.5 8V 113cv","2012 - 2016"],
        ["C4 GLX","1.6 16V","2009 - 2015"],
        ["C4 Cactus","1.6 16V","2018 - >"],
        ["C4 (Pallas / GLX)","2.0 16V","10/2008 - 07/2013"],
        ["C4 VTR / PALLAS","2.0 16V","01/2007 - 2009"],
        ["C4 Lounge - THP","1.6 16V 165cv","2014 - >"],
        ["C4 Cactus","1.6 16V Turbo","2018 - >"],
        ["C4 Grand Picasso (Exclusive) - automático","2.0 16V 151cv","2009 - >"],
        ["C4 Picasso","2.0 16V 151cv","2009 - >"],
        ["C5 Exclusive / Break / Tourer","2.0i 16V","2005 - 2012"],
        ["DS3 Turbo - (THP / Sport)","1.6","2012 - >"],
        ["DS4 Turbo - (THP / Sport)","1.6","2013 - >"],
        ["DS5 Turbo - (THP / Sport)","1.6","2012 - >"],
        ["Xsara EXCLUSIVE / GLX / VTS","1.6 16V","2001 - 2004"],
        ["Xsara Break EXCLUSIVE / GLX","1.6 16V","2001 - 2005"],
        ["Xsara Picasso EXCLUSIVE / GLX","1.6 16V","2006 - 2013"]
      ],
      "Ford": [
        ["Territory SEL - Ecoboost GTDi","1.5 4cil 150cv Turbo","2020 - >"],
        ["Territory Titanium - Ecoboost GTDi","1.5 4cil 150cv Turbo","2020 - >"],
        ["Transit (Chassi / Van / Furgão) - Mecânico","2.2 TDCi","2012 - >"],
        ["Transit Van / Furgão - Eletrônico / Turbodiesel","2.4 TDCi","12/2008 - >"]
      ],
      "JAC Motors": [
        ["T80 210 cv","2.0 16V Turbo","2019 - >"]
      ]
    }
  },

  PEL110: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/pel108/produto/57?aplicacao=184155",
    especificacoes: { altura: 144, diametroExterno: 59, diametroInterno: null, rosca: "Não possui", elemento: "Papel",
      valvulaAntiRetorno: false, valvulaAlivio: false, pesoLiquido: 0.049, pesoBruto: 0.066, caixa: "12", observacao: "LINHA ECOLÓGICA" },
    conversoes: {
      "ACDelco": ["19347729"], "Authomix": ["FOL0110"], "Bosch": ["1457429193"], "Citroën": ["1109R7"], "Delphi": ["EFL258"],
      "Fram": ["CH9443ECO","FA5616ECO"], "Hengst": ["E35HD102"], "Japanparts": ["FOECO037"], "JS Asakashi": ["OE0005"],
      "KSPG": ["50014805"], "Mahle": ["OX193D","OX193DECO"], "Mann": ["HU612X"], "Millard": ["ML9443"], "Partmo": ["PP4780"],
      "Peugeot": ["1109R6"], "Sakura": ["EO2101"], "Seineca": ["SEF7601"], "Seineca antigo": ["SEI0721"], "Tecfil": ["PEL110"],
      "Turbo Filtros": ["TLE110"], "Vox": ["LE110"], "Vox antigo": ["LE2032"], "Wega": ["WOE700"], "WIX": ["WL7299"]
    },
    aplicacoes: {
      "Citroën": [
        ["Berlingo NFU (TU5JP4)","1.6i 16V","10/2000 - 2007"],
        ["Berlingo TU5 JP4","1.6","01/03 - 2007"],
        ["Berlingo","1.6 16V","2000 - 2002"],
        ["C3 GLX / EXCLUSIVE","1.4 e 1.6","2001 - 2013"],
        ["C3 GLX / EXCLUSIVE","1.4 e 1.6","2006 - 2013"],
        ["Xsara EXCLUSIVE / GLX / VTS","1.6 16V","2001 - 2004"],
        ["Xsara Break EXCLUSIVE / GLX","1.6 16V","2001 - 2005"]
      ],
      "Peugeot": [
        ["206","1.6 16V","2001 - 2008"],
        ["307","1.6 16V","2002 - 2007"],
        ["Partner","1.6 16V","11/2002 - 05/2004"],
        ["Partner","1.6 16V","10/2000 - 10/2002"]
      ]
    }
  }
};
PSL127: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL127",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Bosch": ["0986B00066"],
      "Delphi": ["EDL113"],
      "Fram": ["PH3614"],
      "Japanparts": ["FO279S"],
      "KSPG": ["50014814"],
      "Mahle": ["OC235"],
      "Mann": ["W711/80"],
      "Sakura": ["C1123"],
      "Seineca": ["SOF7023", "SEI2674"],
      "Tecfil": ["PSL127"],
      "Toyota": ["9091520003"],
      "Vox": ["LB127"],
      "Wega": ["JFO0211"],
      "WIX": ["WL10165"]
    },
    aplicacoes: {
      "Suzuki": [
        ["Sidekick", "1.6 16V", "1992 - 1994"]
      ],
      "Toyota": [
        ["Hilux", "2.4 8V", "1992 - 2001"],
        ["Hilux", "2.5 16V", "2005 - 2015"],
        ["Hilux", "2.7 16V", "2008 - >"],
        ["Hilux", "2.8 16V", "2016 - >"],
        ["Hilux", "3.0 16V", "2001 - 2015"]
      ]
    }
  },

  PSL145: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL145",
    especificacoes: {
      altura: 78,
      diametroExterno: 75,
      rosca: "3/4\"-16UN",
      elemento: "Papel",
      valvulaAntiRetorno: true
    },
    conversoes: {
      "Denso": ["1150101220"],
      "Donaldson": ["P550335"],
      "Fleetguard": ["LF3826"],
      "KSPG": ["50013510"],
      "Lucas": ["EFL983"],
      "Mahle": ["OC235"],
      "Mann": ["W712/1", "W712/43", "W712/55", "W811/81", "W818/84"],
      "Motorcraft": ["G3MJ6714AA", "MB9A6714EA"],
      "Tecfil": ["PSL145"]
    },
    aplicacoes: {
      "Chana": [
        ["Cargo / Family / Utility", "1.0 8V", "2006 - 2012"]
      ],
      "Chery": [
        ["Face / S18", "1.3 16V", "2010 - >"]
      ],
      "Chrysler": [
        ["Neon", "2.0 16V", "1999 - 2002"],
        ["PT Cruiser", "2.4 16V", "2000 - 2011"],
        ["Stratus", "2.0 16V", "1996 - 2001"]
      ],
      "Ford": [
        ["Courier", "1.3 8V / 1.4 16V", "1997 - 2004"],
        ["EcoSport", "2.0 16V", "2003 - 2012"],
        ["Escort", "1.8 16V Zetec", "1996 - 2002"],
        ["Fiesta", "1.0 / 1.3 Endura / Zetec Rocam", "1995 - 2014"],
        ["Fusion Hybrid", "2.5 16V", "2010 - 2015"],
        ["Ka", "1.0 / 1.3 / 1.6 Endura / Zetec Rocam", "1997 - 2014"],
        ["Maverick", "2.0 EcoBoost", "2021 - >"]
      ],
      "Suzuki": [
        ["Baleno", "1.6 16V", "1995 - 2005"],
        ["Jimny", "1.3 16V", "1998 - 2016"],
        ["Samurai", "1.3 8V", "1993 - 2000"],
        ["Sidekick", "1.6 16V", "1992 - 1994"]
      ]
    }
  },

  PSL158: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL158",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL158"]
    },
    aplicacoes: {
      "Dynapac": [
        ["Rolo Compactador CA250", "Cummins", "-"]
      ],
      "Hyundai": [
        ["Escavadeira R140LC / R160LC / R210LC", "Cummins", "-"]
      ]
    }
  },

  PSL161: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL161",
    especificacoes: {
      altura: 100,
      diametroExterno: 75.5,
      elemento: "Papel"
    },
    conversoes: {
      "Baldwin": ["B1447"],
      "Chevrolet": ["93156863"],
      "Hengst": ["H90W29"],
      "Land Rover": ["LPW100230"],
      "Mahle": ["OC1236"],
      "Sakura": ["C49150"],
      "Seineca": ["SOF8212"],
      "Tecfil": ["PSL161"],
      "Vox": ["LB161"],
      "Wega": ["WO550"]
    },
    aplicacoes: {
      "Land Rover": [
        ["Discovery", "2.0 / 2.2 16V", "1993 - >"],
        ["Freelander", "1.8 16V", "1999 - 2000"],
        ["Freelander", "2.5 24V", "2003 - 2005"]
      ]
    }
  },

  PSL280: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL280",
    especificacoes: {
      altura: 176,
      diametroExterno: 92.7,
      rosca: "1\" x 16UN-2B",
      elemento: "Papel",
      valvulaAntiRetorno: false,
      valvulaAlivio: false,
      pesoLiquido: 0.610,
      pesoBruto: 0.665,
      caixa: "06"
    },
    conversoes: {
      "Cummins": ["3908615"],
      "Fleetguard": ["LF3349"],
      "Fram": ["PH3976"],
      "Mann": ["W950/16", "W950/18"],
      "Motorcraft": ["MB3X6731AA"],
      "Nexpro": ["48028836"],
      "Tecfil": ["PSL280"]
    },
    aplicacoes: {
      "Agrale": [
        ["MA 8.5", "Cummins", "-"]
      ],
      "Dodge": [
        ["Ram 2500 / 3500", "5.9 / 6.7 24V Cummins", "2001 - >"]
      ],
      "Ford": [
        ["Cargo 1217 / 1317 / 1717", "Cummins", "-"]
      ],
      "Volkswagen": [
        ["Worker / Constellation", "Cummins", "-"]
      ]
    }
  },

  PSL283: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL283",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL283"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["8.150E / 9.150E", "Cummins Interact 4 ISBe", "01/2003 - >"]
      ]
    }
  },

  PSL300: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL300",
    especificacoes: {
      altura: 300,
      diametroExterno: 119.2,
      rosca: "2 1/4\" x 12UN",
      elemento: "Papel"
    },
    conversoes: {
      "Bosch": ["0986B01011"],
      "Fiat Allis": ["75285999"],
      "Fleetguard": ["LF3000", "LF3639"],
      "Ford": ["TJG115561", "TJG15561"],
      "Foton": ["C3401544A0571A"],
      "Fram": ["HPH6349"],
      "Mann": ["WP12300"],
      "Tecfil": ["PSL300"],
      "Turbo Filtros": ["TB30000"],
      "Volkswagen": ["TJG115561"],
      "Vox": ["LB300"],
      "Wega": ["WO710"]
    },
    aplicacoes: {
      "Case": [
        ["Magnum 8920 / MX 240 / MX 270", "-", "-"]
      ],
      "Ford": [
        ["Cargo 1422 / 1617 / 1622 / 1722 / 2422 / 2622 / 2630 / 2631 / 3224 / 3530 / 4030 / 4031", "7.8L / 8.3L", "1991 - 2006"]
      ],
      "Volkswagen": [
        ["14-220 / 16-220 / 17-310 / 18-310 Titan / 24-220 / 24-250 / 31-260 / 35-300", "-", "-"]
      ]
    }
  },

  PSL356: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL356",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Cummins": ["5266016"],
      "Fleetguard": ["LF17356"],
      "Japanparts": ["FOBR91S"],
      "Tecfil": ["PSL356"],
      "Volkswagen": ["23B115403"],
      "Wega": ["WOP1002"]
    },
    aplicacoes: {
      "Foton": [
        ["Aumark", "-", "2012 - >"]
      ],
      "JAC": [
        ["T140", "-", "2012 - >"]
      ],
      "Volkswagen": [
        ["Delivery Express / 4.150 / 6.160", "2.8 16V", "2017 - >"]
      ]
    }
  },

  PSL51: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL51",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Fram": ["PH5511"],
      "Mann": ["W79"],
      "Renault": ["7702217250"],
      "Tecfil": ["PSL51"],
      "Wega": ["WO410"]
    },
    aplicacoes: {}
  },

  PSL541: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL541",
    especificacoes: {
      altura: 129,
      diametroExterno: 75.3,
      rosca: "3/4\"-16 UNF-2B",
      elemento: "Papel",
      valvulaAntiRetorno: true,
      valvulaAlivio: true,
      pesoLiquido: 0.363,
      pesoBruto: 0.383,
      caixa: "12"
    },
    conversoes: {
      "Bosch": ["0986B00055"],
      "Delphi": ["EFL759"],
      "Ford": ["71185", "BG8T6731AA"],
      "Japanparts": ["FOBR18S"],
      "Mahle": ["OC1055"],
      "Mann": ["W719/50"],
      "Seineca": ["SOF7037"],
      "Tecfil": ["PSL541"],
      "Vox": ["LB541"]
    },
    aplicacoes: {
      "Ford": [
        ["Ranger Limited / XLT", "3.0 16V Power Stroke", "-"]
      ]
    }
  },

  PSL55: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL55",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL55"]
    },
    aplicacoes: {
      "Fiat": [
        ["500", "1.4 8V EVO / 1.4 16V MultiAir", "2010 - 2017"],
        ["Doblò", "1.3 / 1.4 Fire / 1.6 16V", "2002 - 2016"],
        ["Fiorino", "1.3 / 1.4 Fire EVO", "2002 - 2018"],
        ["Siena", "1.0 / 1.3 / 1.4 Fire", "1999 - 2016"],
        ["Strada", "1.3 / 1.4 Fire", "2003 - 2016"],
        ["Uno / Mille", "1.0 / 1.3 / 1.4 Fire EVO", "2002 - 2014"]
      ],
      "Honda": [
        ["Accord", "2.2 / 2.3 / 2.4 / 2.7 / 3.0 / 3.5", "1991 - 2015"],
        ["Civic", "1.6 / 1.7 / 1.8 / 2.0 / 2.4", "1991 - 2016"]
      ],
      "Mitsubishi": [
        ["Grandis", "2.4 16V", "2005 - 2007"],
        ["Lancer", "2.0 16V", "2011 - 2016"],
        ["Outlander", "2.0 / 3.0", "2008 - 2016"]
      ]
    }
  },

  PSL560: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL560",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL560"]
    },
    aplicacoes: {
      "Audi": [
        ["A3", "1.6 8V", "2007 - 2011"]
      ],
      "Chrysler": [
        ["PT Cruiser", "2.0 / 2.4 16V", "2000 - 2011"]
      ],
      "Volkswagen": [
        ["Fox / SpaceFox / SpaceCross", "1.6 8V", "2003 - >"],
        ["Gol / Parati / Saveiro / Voyage", "1.0 / 1.6 / 1.8", "1996 - 2015"],
        ["Golf", "1.6 / 2.0 8V", "2002 - 2014"],
        ["Kombi", "1.4 Flex", "2006 - 2014"],
        ["Polo", "1.0 16V / 1.6 8V", "2002 - 2015"]
      ]
    }
  },

  PSL619: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL619",
    especificacoes: {
      altura: 76.7,
      diametroExterno: 75.7,
      elemento: "Papel",
      valvulaAntiRetorno: false,
      valvulaAlivio: false,
      pesoLiquido: 0.285,
      pesoBruto: 0.302
    },
    conversoes: {
      "Tecfil": ["PSL619"]
    },
    aplicacoes: {
      "Chevrolet": [
        ["Celta / Classic / Joy", "1.0 / 1.4 8V", "2003 - >"],
        ["Kadett / Monza", "1.6 / 1.8 / 2.0 8V", "1982 - 2000"],
        ["Montana / Spin", "1.8 8V Flex", "2003 - >"],
        ["Omega / Suprema", "2.0 / 2.2 / 3.8 V6", "1992 - 2005"],
        ["Onix / Prisma / Cobalt / Meriva", "1.0 / 1.4 / 1.8", "2012 - 2020"],
        ["S10", "2.2 / 2.4 8V", "1995 - >"],
        ["Vectra / Zafira", "2.0 / 2.2", "2000 - 2012"]
      ],
      "Fiat": [
        ["Doblò / Punto / Siena / Stilo / Strada", "1.8 8V", "2002 - 2011"]
      ]
    }
  },

  PSL657: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL657",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Baldwin": ["B7496"],
      "Bosch": ["0986B00059"],
      "Delphi": ["EDL111"],
      "Donaldson": ["P766162"],
      "Fiat": ["71779555", "8094872", "5801985959"],
      "Fleetguard": ["LF17497"],
      "Fram": ["PH10268"],
      "Hengst": ["H12W08"],
      "Inpeca": ["SLB0138"],
      "Iveco": ["2995811", "504091563"],
      "Japanparts": ["FOBR65", "FOBR6S"],
      "KSPG": ["50014811"],
      "Mahle": ["OC616", "OC1222"],
      "Mann": ["W914/28"],
      "Sakura": ["C222240"],
      "Seineca": ["SOF7046", "SEI2721"],
      "Tecfil": ["PSL657"],
      "Vox": ["LB657"],
      "Wega": ["WO421"],
      "WIX": ["WL7443"]
    },
    aplicacoes: {
      "Citroën": [
        ["Jumper", "2.3 Diesel", "2009 - >"]
      ],
      "Fiat": [
        ["Ducato", "2.3 MultiJet Diesel", "2009 - >"]
      ],
      "Iveco": [
        ["Daily", "2.3 Diesel", "2018 - >"]
      ],
      "Peugeot": [
        ["Boxer", "2.3 Diesel", "2009 - >"]
      ],
      "TAC": [
        ["Stark", "2.3 Diesel", "2009 - >"]
      ]
    }
  },

  PSL902: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL902",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL902"]
    },
    aplicacoes: {
      "Audi": [
        ["A4", "2.8 V6", "1994 - 2000"]
      ],
      "Chevrolet": [
        ["S10 / Blazer", "2.5 Diesel", "1996 - 1999"]
      ],
      "Ford": [
        ["F-1000", "2.5 Diesel", "1996 - 1998"],
        ["Ranger", "2.5 / 2.8 Diesel", "1998 - 2006"]
      ],
      "Jeep": [
        ["Cherokee", "2.5 Turbo Diesel", "-"]
      ],
      "Land Rover": [
        ["Defender / Discovery / Range Rover", "2.3 / 2.5 / 3.9", "-"]
      ],
      "Mercedes-Benz": [
        ["Sprinter", "2.5 Diesel", "1997 - 2000"]
      ]
    }
  }
PSL167: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL167",
    especificacoes: {
      elemento: "Papel",
      observacao: "Substituído pelo PSH167 em algumas aplicações hidráulicas/lubrificantes"
    },
    conversoes: {
      "New Holland": ["9968353"],
      "Tecfil": ["PSL167", "PSH167"]
    },
    aplicacoes: {
      "John Deere": [
        ["643 / 644D / 653E", "-", "-"]
      ],
      "New Holland": [
        ["Linha Agrícola / Tratores", "-", "-"]
      ]
    }
  },

  PSL168: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL168",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Chevrolet": ["25181616", "9025229"],
      "Mann": ["W68/85"],
      "Tecfil": ["PSL168"]
    },
    aplicacoes: {
      "Chevrolet": [
        ["N300 Max", "-", "2010 - >"],
        ["Sail", "1.4 / 1.5", "2010 - >"],
        ["Spark GT", "1.2", "2010 - >"]
      ]
    }
  },

  PSL341: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL341",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Tecfil": ["PSL341"]
    },
    aplicacoes: {
      "Fiat": [
        ["Elba / Fiorino / Prêmio / Uno", "-", "-"]
      ]
    }
  },

  PSL630: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL630",
    especificacoes: {
      altura: 94,
      diametroExterno: 76,
      rosca: "M20X1,5",
      elemento: "Papel",
      valvulaAntiRetorno: true,
      valvulaAlivio: true
    },
    conversoes: {
      "Citroën": ["9809532380"],
      "Hengst": ["H388W"],
      "Japanparts": ["FOBR180S"],
      "Mann": ["W7063"],
      "Tecfil": ["PSL630"],
      "Vox": ["LB630"],
      "Wega": ["WO161"]
    },
    aplicacoes: {
      "Citroën": [
        ["Jumper", "2.0 BlueHDi / 2.3", "2018 - 2025"]
      ],
      "Fiat": [
        ["Titano Endurance / Ranch / Volcano", "2.2 16V DW12", "2024 - 2025"]
      ],
      "Peugeot": [
        ["Boxer", "2.0 BlueHDi", "2018 - 2025"]
      ]
    }
  },

  PSL75: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL75",
    especificacoes: {
      elemento: "Papel"
    },
    conversoes: {
      "Bosch": ["0986B01028"],
      "Fram": ["PH10056"],
      "Mahle": ["OC606"],
      "Mann": ["W7015"],
      "Tecfil": ["PSL75"]
    },
    aplicacoes: {
      "Ford": [
        ["EcoSport", "1.6 Sigma", "-"],
        ["Ka", "1.0 / 1.5", "-"],
        ["New Fiesta", "1.5 / 1.6 Sigma", "-"]
      ]
    }
  },

  PSL909: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/PSL909",
    especificacoes: {
      altura: 298,
      diametroExterno: 119.2,
      elemento: "Papel"
    },
    conversoes: {
      "Baldwin": ["BD7309"],
      "Cummins": ["3401544"],
      "Donaldson": ["P553000"],
      "Fleetguard": ["LF9009"],
      "Ford": ["BG2X6731CA"],
      "Fram": ["PH11109"],
      "Hengst": ["H300W07"],
      "John Deere": ["AT193242"],
      "Mann": ["WP12121"],
      "Parker": ["RL370"],
      "Tecfil": ["PSL909"],
      "Volkswagen": ["2T0115561", "TJG115561"],
      "Wega": ["WO711"]
    },
    aplicacoes: {
      "Case": [
        ["Colheitadeira 2388", "8.3 Cummins QSM 11", "-"]
      ],
      "Ford": [
        ["Cargo 1617 / 1622 / 1722 / 1731 / 2622", "-", "1991 - >"]
      ],
      "Volkswagen": [
        ["17.240 OT", "Cummins", "2003 - >"],
        ["26.300 / 26.310 / 31.310", "Cummins 6CTAA", "2000 - 2006"],
        ["26.390", "Cummins", "2013 - 2019"],
        ["Constellation 17.320E", "Cummins", "-"]
      ]
    }
  }
