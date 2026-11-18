/* Catálogo de filtros (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos: tipo, url, especificacoes, conversoes (todas as marcas do catálogo) e
   aplicacoes (por montadora: [veículo/modelo, motor, ano]). Se a lista de aplicações
   não foi copiada por inteiro, use aplicacoes:null — a página mostra o link do catálogo. */
export const catalogoFiltros = {

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
  }
};
