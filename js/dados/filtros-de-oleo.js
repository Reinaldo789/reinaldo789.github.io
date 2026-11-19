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
    especificacoes: { altura: 93, diametroExterno: 138, diametroInterno: null, rosca: '1" 1/2 - 16 UN'},
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
  },

  PSL127: {
    tipo: "oleo",
    url: "https://catalogo.tecfil.com.br/search/psl127/produto/697?aplicacao=185264",
    especificacoes: { altura: 86.5, diametroExterno: 76.2, diametroInterno: null, rosca: '3/4" - 16 UN', elemento: "Papel",
      valvulaAntiRetorno: true, valvulaAlivio: true, pesoLiquido: 0.28, pesoBruto: 0.295, caixa: "12" },
    conversoes: {
      "Authomix": ["FOL0127"], "Bosch": ["0986B00066"], "Delphi": ["EDL113"], "Fleetguard": ["LF3335"], "Japanparts": ["FO279S"],
      "JS Asakashi": ["C110J"], "KSPG": ["50014814"], "Mann": ["W711/80"], "Master Parts": ["MM100715"], "Partmo": ["A14302PLUS"],
      "Sakura": ["C1123"], "Seineca": ["SOF7023"], "Seineca antigo": ["SEI2674"], "Tecfil": ["PSL127"], "Toyota": ["9091520003"],
      "Turbo Filtros": ["TB211"], "Vox": ["LB127"], "Wega": ["JFO0211"], "WIX": ["WL10165"]
    },
    aplicacoes: {
      "Suzuki": [
        ["Sidekick","1.6 16V 80 cv","1990 - 1996"]
      ],
      "Jetour": [
        ["S06 PHEV","1.5 - Turbo GDI - 315cv","2026 - >"],
        ["T1 PHEV","1.5 - Turbo GDI - 380cv","2026 - >"],
        ["T2 PHEV","1.5 - Turbo GDI - 385cv","2026 - >"]
      ],
      "Toyota": [
        ["Hiace Turbo DX Autom.","2.8 16V 174cv","2025 - >"],
        ["Hilux SW4 (SR / SRV)","2.7 16V 4 cil.","2016 - >"],
        ["Hilux D/C SRV Turbo 4x4 e 4X2","3.0 16V","2001 - 2006"],
        ["Hilux DOHC VVT-i - SR","2.7 16V","10/2008 - 2010"],
        ["Hilux D/C DX AC 4X2 e 4X4","2.5 16V","2005 - 12/2010"],
        ["Hilux D4-D CD / SR / SRV / SW4 / 4x2 / 4x4 / Aut","3.0 16V","01/2006 - 12/2010"],
        ["Hilux CDSRV TBI","3.0 16V","2006 - 12/2010"],
        ["Hilux TDI Turbo (SW4) - automático","2.8 16V 177cv","2016 - >"],
        ["Hilux TDI Turbo (CD / SR) - automático","2.8 16V 177cv","2016 - >"],
        ["Hilux SW4","2.7 16V","12/2011 - 2015"],
        ["Hilux D/C SRV TBI","3.0 16V","2005 - 12/2010"],
        ["Hilux Turbo Diesel - (SW4 / SRV / CD / CS) - Automático / Mecânico","3.0 16V 163cv","12/2011 - 2015"],
        ["Hilux D/C SRV 4x4","3.0 16V","2005 - 12/2010"],
        ["Hilux SW NEW AT","3.0 16V","2005 - 10/2010"],
        ["Hilux SW NEM MT","3.0 16V","2005 - 10/2010"],
        ["Hilux CDSRV","3.0 16V","2006 - 12/2010"],
        ["Hilux Turbo Diesel - (CD / CS) - Automático / Mecânico","2.5 16V 102cv","12/2011 - 2015"],
        ["Hilux SW4 4x4 - Turbo","3.0 - 16V - 171CV","2014 - 2015"],
        ["Previa LE/DLX 16V","2.4 L 16V DOHC L4","1990 - 2000"]
      ]
    }
  }
};
