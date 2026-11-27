/* Filtros de ar (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos: tipo, url, especificacoes, conversoes, aplicacoes.
   aplicacoes: { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] } ou null. */
export const filtrosAr = {

  "AP9834": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ap9834/produto/339",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Agrale": ["8009101116005", "905411510017"], "Atlas-Copco": ["1619270200", "16192847", "1619284700"], "Authomix": ["FAR9834"],
      "Baldwin": ["PA2405"], "Bosch": ["0986B03535", "1457429950", "1987430001", "9451160001", "9455087003"], "Case": ["145215A1", "E155526"],
      "CBT": ["5100302006", "5300302006"], "Clark": ["3338477"], "Compair": ["10945204", "C16012/189"],
      "Cross": ["FE440"], "Delkraft": ["DA1304"], "Delphi": ["EFA405"],
      "Deutz": ["19922", "2165049"], "Donaldson": ["P140123", "P152038", "P153026", "P158182", "P771561", "P801064", "SMP771561", "SMP771564"], "Donsson": ["DA2189"],
      "Dynapac": ["300499375", "499387", "911164"], "Engesa": ["2241000080"], "FAM": ["FA9403"],
      "Fepa": ["PA805"], "Fiat": ["4776902"], "Fiat Allis": ["75247062", "8321421"],
      "Filesp": ["FE440"], "Filtran": ["2059834"], "Fleetguard": ["AF25064", "AF4040"],
      "Ford": ["77TU9601A", "BD7T9601A", "BD8T9601A"], "Fram": ["CA3291", "CA3291C"], "Franig": ["HCA3281"],
      "GM": ["9307846", "937846", "94613436"], "Hengst": ["E115L"], "Hidrafil": ["520028"],
      "Ihc": ["3219420R1"], "Inpeca": ["J9403E", "SA9403", "SAP9403"], "Irlemp": ["AFI6067"],
      "Isuzu": ["13002B1810"], "Japanparts": ["FABR51S"], "Komatsu": ["0010945204", "13002B1810"],
      "KS": ["035AR"], "KSPG": ["50013035"], "Liebherr": ["5106189", "7360753"],
      "Logan": ["CFA240M"], "Luberfiner": ["LAF2052"], "Lucas": ["HDA204"],
      "Mahle": ["LX265", "LX265/1"], "Mann": ["C20325/2"], "Master Parts": ["MM100322"],
      "Maxion": ["022186T1", "022186T1/R1", "22186", "70064", "70070"], "Mercedes Benz": ["10944204", "10945204", "10945304", "130941802", "20940004", "3440947104", "A0010945204"], "Mtu": ["8690940", "8690940430"],
      "Muller": ["0010945204"], "MWM": ["605412970034", "606901670116", "MASTER0100"], "Nasa": ["NR1126"],
      "New Holland": ["822421"], "Parker": ["AR6067"], "Partmo": ["APC203252"],
      "Puriar": ["PA4853"], "Purolator": ["A1028", "A1114", "AF3519", "PM1709"], "Renault": ["3563512", "3564512", "4212747", "5000241796"],
      "Roma": ["R940"], "Sakura": ["A6207"], "Santa Matilde": ["10945204"],
      "Santal": ["192224", "192906"], "Slc": ["0010945204", "DQ04467"], "Steyer": ["61200190037", "99000190701"],
      "Tecfil": ["AP9834"], "Tecnoar": ["FEA1301"], "Turbo Filtros": ["TR1240"],
      "Tutela": ["A68"], "Unifilter": ["UA20325P2"], "Valmet": ["80270500"],
      "Volkswagen": ["140503286", "T2D129620C", "TAR129620"], "Volvo": ["4780961", "7362224", "73622243"], "Vox": ["HP9834"],
      "Vox Antigo": ["HP3009"], "Wega": ["WAP163"], "WIX": ["W46554", "WA46554"],
      "Worthington": ["34419001401"], "Xanfil": ["XL2030"], "ZF": ["0070131103"]
    },
    aplicacoes: {
      "Adams": [
        ["300, 330, 440, 550, 660, 777, H-HR-NH 6.6.4 Cummins", "01/1977", "- >"],
        ["300, 330, 440, 550, 660, 777, H-HR-NH 6.6.4 Cummins", "89", "- 97"]
      ],
      "Agrale": [
        ["1090 Perkins 6357", "80", "- >"],
        ["2100 6357", "80", "- >"],
        ["2105 OM352 A", "83", "- >"],
        ["2600 CANAVIERO OM352", "83", "- >"],
        ["4100 Turbo MWM D229/4D", "80", "- >"],
        ["4130 MWM D229/6", "80", "- >"],
        ["490 MWM D229/4", "80", "- >"],
        ["7000 MWM 4.10 T", "01/1993", "- 12/1999"],
        ["7500 MWM 4.10 TCA", "01/1993", "- 12/1999"],
        ["8450 (4X4) MWM229/4 EC 4", "-", "8500"],
        ["MWM 4.10 TCA 01/1998", "- 12/1999", "Diesel"],
        ["BX 4.60 F3L 913", "-", "BX 4.90"],
        ["MWM D229/4 -", "BX100 Turbo", "MWM D229/4D"],
        ["80 - >", "-", "BX100 Turbo"],
        ["MWM D229/4D 90", "- 95", "-"],
        ["BX130 MWM D229/6", "80", "- >"],
        ["BX4110 TD229 EC4", "80", "- >"],
        ["BX4110 -", "94", "- >"],
        ["BX4130 MWM 229/6", "90", "- >"],
        ["BX4130 MWM TD229/6", "80", "- >"],
        ["BX60 MWM D229/4", "90", "- >"],
        ["BX90 MWM D229/4", "80", "- >"],
        ["MA 7.0 MWM 4.10T", "06/2000", "- >"],
        ["MA 7.0 MWM 4.10T", "01/1997", "- 05/2000"],
        ["MA 7.5 T MWM 4.10 TCA", "06/2000", "- >"],
        ["MA 7.5 T MWM 4.10 TCA", "01/1996", "- 05/2000"],
        ["MA 8.5 MWM 4.10 TCA", "06/2000", "- >"],
        ["MA 8.5 MWM 4.10 TCA", "01/1996", "- 05/2000"]
      ]
    }
  },
     "ARL4141": {
    tipo: "ar",
    especificacoes: { altura: 62, diametroExterno: 240, diametroInterno: 241, rosca: "Não possui", elemento: "Sintética", observacao: "CÓD CÂMBIO" },
    conversoes: {
      "Authomix": ["FAR4141"], "Fleetguard": ["AF26543"], "Fram": ["CA10355"],
      "Gonher": ["GA603"], "Japanparts": ["FA500S"], "Mahle": ["LX2834","LX3713"],
      "Mann": ["C24011"], "Millard": ["MK51943"], "Mitsubishi": ["1500A098"],
      "Sakura": ["A1517"], "Seineca": ["SAF8169"], "Tecfil": ["ARL4141"],
      "Turbo Filtros": ["TR1441"], "Vox": ["HLP4141"], "Wega": ["JFA0500","JFA500"],
      "WIX": ["47095","WA9589"]
    },
    aplicacoes: {
      "Mitsubishi": [
        ["L200 (CD/GL/GLS/GLX) Automático/Mecânico","3.2","2008 - 2010"],
        ["L200 Triton","3.5 V6","2007 - 2009"],
        ["L200 Triton","3.5 V6","2011 - >"],
        ["L200 Triton","3.2 TDI","2012 - 2019"],
        ["L200 TRITON HLS / HLS CHROME EDITION / OUTDOOR 2.4 16V 4 CIL. 142CV","2.4","2013 - 2019"],
        ["L200 (Triton / Outdoor / Savana) - Com Ref. Orig: CD130107","3.2 TDI","2010 - 2012"],
        ["L200 Triton","3.2 TDI","12/2007 - 12/2008"],
        ["Pajero Dakar (HPE) - automático / mecânico","3.2 V6 165cv","2012 - >"],
        ["Pajero Dakar (HPE) - automático / mecânico","3.5 V6 205cv","2011 - >"]
      ]
    }
  },
     "ARS7109": {
    tipo: "ar",
    especificacoes: { altura: 363.5, diametroExterno: 148, diametroInterno: 84.5, rosca: "Não possui", elemento: "Papel", observacao: "SUBSTITUI O FILTRO PSC998 APENAS NA LINHA MITSUBISHI" },
    conversoes: {
      "AGCO": ["055119R1"], "Authomix": ["FAR7109"], "Baldwin": ["RS3920"],
      "Bosch": ["0986B03002"], "Case": ["87574362"], "Delkraft": ["DR1415"],
      "Delphi": ["EFA949"], "Donaldson": ["P778989"], "FAM": ["FA9310"],
      "Filtran": ["2055080/1","2057109"], "Fleetguard": ["AF25565"], "Fram": ["CA9003","CA9744"],
      "Hengst": ["E1700L"], "Inpeca": ["SRS6202"], "Japanparts": ["FA15300S"],
      "Jcb": ["32915802"], "KSPG": ["50013476"], "Mahle": ["LX1687/1"],
      "Mann": ["C15300"], "Massey Ferguson": ["3901464M1"], "Master Parts": ["MM100015"],
      "Maxion": ["055119"], "Mitsubishi": ["CK159029"], "MWM": ["905412970059"],
      "Purolator": ["A1133"], "Randon": ["219000393"], "Sakura": ["A8553"],
      "Seineca": ["SAR8764"], "Tecfil": ["ARS7109"], "Turbo Filtros": ["TR15300"],
      "Unifilter": ["UAEP5802P"], "Vox": ["HD7109"], "Vox Antigo": ["HD4410"],
      "Wega": ["WR200/4"], "WIX": ["W46836","WA46836"], "Xanfil": ["XL2096"],
      "ZF": ["070131118"]
    },
    aplicacoes: {
      "Mitsubishi": [
        ["Pajero Sport (AT) - automático / mecânico","2.5 121cv","2011 - >"],
        ["L200 Turbo Intercooler Diesel (Evolution 4x4)","3.2","01/2002 - 12/2004"],
        ["L200 -","2.5 16V","1992 - 2004"],
        ["L200 SPORT / HPE","2.5 TD","2000 - 2007"],
        ["L200 (Outdoor / GLS / HPE /CD / Aut. / 4x4)","2.5 8V TDI SOHC","01/2007 - 12/2009"],
        ["L200 (GL / GLS) - Automático","2.5 121 cv Turbo","2005 - 2007"],
        ["L300 Base / DX / Canter","2.5 16V 206cv","01/1995 - 12/2000"],
        ["Pajero (HD) - automático / mecânico","2.5 121cv","2011 - >"]
      ],
      "Atlas-Copco": [
        ["QAS48","QAS 48","-"]
      ],
      "General Motors": [
        ["Blazer Sprint DLX 4X2 / 4X4 Intercooler","2.8 MWM","01/2005 - >"]
      ],
      "Massey Ferguson": [
        ["265","MWM A4 3.9","2002 - >"],
        ["265","Perkins 4 Cils.","98 - >"],
        ["275","MWM 4A 4.1","2002 - >"],
        ["275","Perkins 4 Cils.","96 - >"],
        ["283","Perkins 4000","2001 - >"],
        ["283F","MWM A4 4.1","2002 - >"],
        ["425","A 4236","-"],
        ["435","Perkins 4000","-"],
        ["MF 86 HS (Retroescavadeira)","MWM A4-4.1","2002 - >"]
      ],
      "Nissan": [
        ["Frontier (SE / Serrana / Attack)","2.8 MWM Sprint","2007 - 2007"],
        ["Frontier (SE / One / Strick / XE)","2.8 MWM Sprint","2002 - 2005"],
        ["Frontier (SE / Serrana / Attack)","2.8 MWM Sprint","2006 - 2006"],
        ["X-Terra XE 2.8 TDI 4X4","2.8 12V","2004 - 2006"]
      ],
      "Randon": [
        ["RB406","-","-"],
        ["RK 460B","MWM - X10","-"]
      ]
    }
  },

  "ARL1655": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl1655/produto/786",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR1655"], "Bosch": ["0986B02532"], "Fram": ["CA11215", "CA11769"],
      "Gonher": ["GA306"], "Interfil": ["F16AK0"], "Japanparts": ["FABR65S"],
      "Mahle": ["LX3487"], "Mann": ["C23021"], "Millard": ["MK50458"],
      "Nissan": ["165461HK01", "165461HK0A", "165463AW0A", "BRPRT10417"], "Seineca": ["SAF8026"], "Seineca Antigo": ["SEI0552"],
      "Tecfil": ["ARL1655"], "Turbo Filtros": ["TR1654"], "Vox": ["HLP1655"],
      "Wega": ["JFA0135", "JFA135"], "WIX": ["WA48665"]
    },
    aplicacoes: {
      "Nissan": [
        ["March 1.6", "2011", "- >"],
        ["Versa (S / SL / SV) - mecânico", "1.6 16V 111cv", "2011"]
      ]
    }
  },

  "ARL1656": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl1656/produto/826",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR1656"], "Filtran": ["2054309"], "Fram": ["CA4309"],
      "Hengst": ["E235L"], "Japanparts": ["FA108S"], "Mann": ["C2964"],
      "Millard": ["MK4309"], "Nissan": ["165460Z000", "165460Z00J", "1654670J10"], "Seineca": ["SAF8027"],
      "Seineca Antigo": ["SEI0553"], "Subaru": ["16546AA020", "16546AA080"], "Tecfil": ["ARL1656"],
      "Vox": ["HLP1656"], "Wega": ["FAP2812", "JFA0108", "JFA108"],
      "Mahle": ["LX3549"]
    },
    aplicacoes: {
      "Nissan": [
        ["200 SX / ZX CA (Japonesa) DT", "1.8", "Diesel"],
        ["200 SX / ZX GA (USA B14) DE", "1.6", "Diesel"],
        ["200 SX / ZX SR (USA B14) DE", "2.0", "Diesel"],
        ["200SX Turbo", "1.8", "01/1989"]
      ],
      "- >": [
        ["Gasolina 350Z", "CUPE V6", "3.5 18V"],
        ["2004 - 2010", "Gasolina", "Maxima"]
      ],
      "Gv Limited": [
        ["3.0 12V 1993", "- 2004", "Gasolina"],
        ["Murano SE NEW V6", "3.5 18V", "2006"],
        ["- 2015 Gasolina", "Pathfinder", "TB"],
        ["2.7 1993", "- 1996", "Diesel"],
        ["Pathfinder 3.3 V6 12V", "1996", "- 2001"],
        ["Pathfinder SE", "3.5 24V", "2001"],
        ["- 2005 Gasolina", "Primera", "Sedan"],
        ["2.0 8V 1997", "- 2000", "Gasolina"],
        ["Serena 1.6", "1993", "- 1993"],
        ["Sunny Gti-R", "2.0", "10/1990"],
        ["- 05/1995 Gasolina", "Sunny", "Gti"],
        ["2.0 16V 10/1990", "- 05/1995", "Gasolina"],
        ["Sunny Gti", "1.8 16V", "01/1989"],
        ["- 06/1991 Gasolina", "X-Trail", "2.5 16V"],
        ["2005 - 2006", "Gasolina", "X-Trail"],
        ["2.5 16V 2007", "- >", "Gasolina"],
        ["X-Trail TurboDiesel", "2.2", "2001"],
        ["- 2001 Diesel", "X-Trail", "2.0 16V"],
        ["2001 - 2001", "Gasolina", "SUBARU"],
        ["Forester 2.5 16V", "2006", "- 2008"],
        ["Forester XT Turbo", "2.5 16V 206cv", "2009"],
        ["- 2014 Gasolina", "Legacy", "Sedan"],
        ["2.0 8V 1992", "- 1999", "Gasolina"]
      ]
    }
  },

  "ARL2204": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl2204/produto/793",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR2204"], "Fram": ["CA11493"], "Japanparts": ["FABR83S"],
      "Mahle": ["LX4163"], "Mann": ["C34007/1"], "Sakura": ["A33720"],
      "Seineca": ["SAF8030"], "Seineca Antigo": ["SEI0556"], "Tecfil": ["ARL2204"],
      "Toyota": ["178010Y020", "1780137021"], "Turbo Filtros": ["TRL0020"], "Vox": ["HLP2204"],
      "Wega": ["FAP4043"], "WIX": ["WA10659"]
    },
    aplicacoes: {
      "Toyota": [
        ["Etios (X / XS / XLS)", "1.5", "2013"],
        ["- 2015 Flex", "Etios", "(X / XS)"],
        ["1.3 2013", "- 2015", "Flex"],
        ["Etios (X / XS)", "1.3", "2013"],
        ["- 2015 Flex", "Etios", "(X / XS / XLS)"],
        ["1.5 2013", "- 2015", "Flex"]
      ]
    }
  },

  "ARL2207": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl2207/produto/1481",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR2207"], "Japanparts": ["FA514S"], "Mann": ["C26135"],
      "Millard": ["MK82465"], "Tecfil": ["ARL2207"], "Toyota": ["178010Y040"],
      "Turbo Filtros": ["TRL0040"], "Vox": ["HLP2207"], "Wega": ["FAP4041"],
      "Mahle": ["LX 4163"],
      "Fram": ["CA12312"]
    },
    aplicacoes: {
      "Toyota": [
        ["Etios (X / XS / XLS)", "1.5", "2016"]
      ],
      "- >": [
        ["Flex Etios", "(X / XS / XLS)", "1.5"],
        ["2016 - >", "Flex", "Etios"],
        ["Flex Yaris", "1.3", "2018"],
        ["Flex Yaris", "1.5", "2018"]
      ],
      "(x / Xs)": [
        ["1.3 2016", "- >", "Flex"],
        ["Etios (X / XS)", "1.3", "2016"]
      ]
    }
  },

  "ARL4148": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl4148/produto/1007",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Sintética" },
    conversoes: {
      "Authomix": ["FAR4148"], "Fil Filter": ["HP5052"], "Fram": ["CA10699"],
      "Hyundai": ["281131J000"], "Japanparts": ["FAK22S"], "Kia Motors": ["281132K000"],
      "Mann": ["C26014"], "Millard": ["MK92429"], "Sakura": ["A28620"],
      "Seineca": ["SAF8201"], "Tecfil": ["ARL4148"], "Wega": ["JFA0K22", "JFAK22"],
      "Mahle": ["LX1791"],
      "Vox": ["FAR4148"]
    },
    aplicacoes: {
      "Kia Motors": [
        ["Soul Automático / Mecânico", "1.6 16V 124 cv", "2009"],
        ["- 2010 Gasolina", "Soul", "Automático / Mecânico"],
        ["1.6 16V 124 cv 2009", "- 2010", "Gasolina"]
      ]
    }
  },

  "ARL4150": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl4150/produto/90",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01EFA048", "19347741"], "Authomix": ["FAR4150"], "Bosch": ["0986B02306"],
      "Controil": ["CLFA00002"], "Cross": ["FE926"], "Delphi": ["EFA988"],
      "FAM": ["FA9624"], "Fiat": ["46420988", "7082141"], "Filtran": ["2054150"],
      "Fram": ["CA5627"], "Inpeca": ["SA9384", "SAL9384"], "Japanparts": ["FABR27S"],
      "KSPG": ["50013547"], "Lucas": ["EFA988", "LFAP988"], "Mahle": ["LX908"],
      "Mann": ["C2582", "C2583", "C2585"], "Motorcraft": ["GAMJ/9601/AA/"], "Motrio": ["8660089636"],
      "Purolator": ["A1006"], "Recer Filtros": ["AL3001RC"], "Sakura": ["A2220"],
      "Seineca": ["SAF8074"], "Seineca Antigo": ["SEI0600"], "Tecfil": ["ARL4150"],
      "Turbo Filtros": ["TR3224"], "Vox": ["HLP4150"], "Vox Antigo": ["HLP2808"],
      "Wega": ["FAP2831"], "WIX": ["W48010BR", "WA48010"]
    },
    aplicacoes: {
      "Fiat": [
        ["Idea Attractive/ELX FIRE", "1.4 8V", "2005"],
        ["- 2012 Flex", "Idea", "ELX FLEX"],
        ["1.8 8V 2005", "- 2015", "Flex"],
        ["Palio ED / EDX / MPI", "1.0 8V", "1996"],
        ["- 1999 Gasolina", "Palio", "FIRE"],
        ["1.0 8V 2003", "- >", "Flex"],
        ["Palio ELX / EX FIRE", "1.0 16V", "2001"],
        ["- 2003 Gasolina/Flex", "Palio", "Attractive"],
        ["1.0 2011", "- >", "Flex"],
        ["Palio FIRE", "1.3 16V", "2000"],
        ["- 2003 Gasolina", "Palio", "FIRE"],
        ["1.3 8V 2002", "- 2005", "Flex"],
        ["Palio FIRE", "1.4 8V", "2005"],
        ["- 2012 Flex", "Palio", "EL / ELX / MPI"],
        ["1.5 8V 1998", "- 2001", "Álcool"],
        ["Palio EL SPI", "1.6 8V", "1998"],
        ["- 1999 Gasolina", "Palio", "EL MPI"],
        ["1.5 8V 1996", "- 1999", "Gasolina"],
        ["Palio ELX / EX / HLX", "1.8 8V", "2003"],
        ["- 2004 Gasolina", "Palio", "ELX MPI"],
        ["1.6 16V 1996", "- 2000", "Gasolina"],
        ["Palio HLX / RST", "1.8 8V", "2004"],
        ["- 2008 Flex", "Palio", "ELX"],
        ["1.6 16V 2001", "- 2004", "Álcool/Gasolina"],
        ["Palio EL / ELX / EX", "1.0 8V", "1996"],
        ["- 2002 Álcool/Gasolina", "Palio", "EL / ELX / MPI"],
        ["1.6 8V 1998", "- 2000", "Gasolina"],
        ["Palio Weekend MPI", "1.0 8V", "1999"],
        ["- 2000 Gasolina", "Palio Weekend", "FIRE"],
        ["1.3 16V 2000", "- 2005", "Gasolina/Flex"],
        ["Palio Weekend FIRE", "1.3 8V", "2003"],
        ["- 2004 Gasolina", "Palio Weekend", "Attractive/ELX FIRE"],
        ["1.4 8V 2005", "- >", "Flex"],
        ["Palio Weekend EX MPI", "1.5 8V", "1997"],
        ["- 1999 Gasolina", "Palio Weekend", "MPI"],
        ["1.5 8V 2000", "- 2004", "Álcool"],
        ["Palio Weekend 1.6 16V", "1999", "- 2003"],
        ["Álcool/Gasolina Palio Weekend", "1.6 8V", "1999"],
        ["- 2003 Gasolina", "Palio Weekend", "1.8 8V"],
        ["2003 - 2006", "Gasolina/Flex", "Palio Weekend"]
      ],
      "Fire": [
        ["1.0 16V 2000", "- 2003", "Gasolina"],
        ["Siena FIRE", "1.6 16V", "2001"],
        ["- 2004 Gasolina", "Siena", "ELX / SPI / HL / EL"],
        ["1.6 16V 1997", "- 1999", "Gasolina"]
      ]
    }
  },

  "ARL5053": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl5053/produto/53",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347761"], "Authomix": ["FAR5053"], "Citroen": ["1444EC", "1444EF", "1444V5", "1444X1"],
      "Delphi": ["EFA975"], "Filtran": ["2059315"], "Fram": ["CA9315"],
      "KSPG": ["50014920"], "Mahle": ["LX1287"], "Mann": ["C3485/2", "C3485/3"],
      "Recer Filtros": ["AL6043RC"], "Sakura": ["A2102"], "Seineca": ["SAF8052"],
      "Seineca Antigo": ["SEI0578"], "Tecfil": ["ARL5053"], "Turbo Filtros": ["TR1444"],
      "Vox": ["HLP5053"], "Vox Antigo": ["HLP2022"], "Wega": ["FAP4873", "FAP4873/1"],
      "WIX": ["WA10440"]
    },
    aplicacoes: {
      "Citroen": [
        ["Air Cross 1.6 16V", "2010", "- >"],
        ["Berlingo NFU (TU5JP4)", "1.6i 16V", "10/2000"],
        ["- 2007 Gasolina", "Berlingo", "TU5 JP4"],
        ["1.6 01/03", "- 2007", "Gasolina"],
        ["Berlingo Flex", "1.6 16V - 122 cv", "2018"]
      ],
      "- >": [
        ["Flex C3", "GLX / EXCLUSIVE", "1.4 e 1.6"],
        ["2001 - 2013", "Gasolina", "C3"],
        ["Flex 208", "(Active Pack / Griffe) - automático / manual", "1.6 16V 118cv"],
        ["2021 - >", "Flex", "208"],
        ["(Active / Pack / Allure) - Automático / Mecânico 1.5 93cv", "2013", "- >"],
        ["208 (Active Parck / Griffe / Premier) - Automático / Mecânico", "1.6 122cv", "2013"],
        ["Flex Partner", "1.6 16V", "11/2002"],
        ["- 05/2004 Gasolina", "Partner", "Furgão"],
        ["1.6 16V 06/2004", "- 2009", "Gasolina"]
      ],
      "Glx / Exclusive": [
        ["1.4 e 1.6 2006", "- 2013", "Flex"],
        ["C3 Picasso - (GL / GLX) - Mecânico", "1.5 8V 113cv", "2012"],
        ["- 2016 Flex", "C4", "Cactus"],
        ["1.6 16V 2018", "- >", "Flex"]
      ],
      "Peugeot": [
        ["2008 (Allure / Crossway / Griffe) Automático e Mecânico", "1.6 16V 122cv", "2015"]
      ]
    }
  },

  "ARL5073": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl5073/produto/1894",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Citroen": ["9802348680"], "Fram": ["CA12034"], "Hengst": ["E1289L"],
      "Js Asakashi": ["A0666"], "Mann": ["C24017"], "Tecfil": ["ARL5073"],
      "Turbo Filtros": ["TRL5073"], "Vox": ["HLP5073"], "Wega": ["FAP4058"],
      "Authomix": ["FAR5073"],
      "Mahle": ["LX 3525"]
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

  "ARL5135": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl5135/produto/1510",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR5135"], "Fram": ["CA12097"], "Mann": ["C24700"],
      "Renault": ["165468558R", "165469905R"], "Tecfil": ["ARL5135"], "Vox": ["HLP5135"],
      "Wega": ["FAP5218"],
      "Mahle": ["LX 3156"]
    },
    aplicacoes: {
      "Renault": [
        ["Kwid 1.0 12V 3cil", "2017", "- >"]
      ]
    }
  },

  "ARL8829": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl8829/produto/714",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["96950990"], "Authomix": ["FAR8829"], "Filtran": ["2058829"],
      "Fram": ["CA11222"], "GM": ["96950990"], "Gonher": ["GA344"],
      "Interfil": ["F96A90"], "Japanparts": ["FABR66S"], "Mahle": ["LX1997", "LX3488"],
      "Mann": ["C24028/1"], "Millard": ["MK32823"], "Recer Filtros": ["AL3530RC"],
      "Sakura": ["A65490"], "Seineca": ["SAF8081"], "Seineca Antigo": ["SEI0631"],
      "Tecfil": ["ARL8829"], "Turbo Filtros": ["TR9695"], "Vox": ["HLP8829"],
      "Wega": ["FAP3269"], "WIX": ["WA48555"]
    },
    aplicacoes: {
      "General Motors": [
        ["Captiva Automático", "1,5L - 16V - 148cv - Turbo", "2025"]
      ],
      "- >": [
        ["Gasolina Captiva", "Flex Preimier / Flex RS", "1,5L - 16V - 148cv - Turbo"],
        ["2025 - >", "Gasolina", "Cobalt"],
        ["Flex Power - (LS / LT / LTZ) - mecânico 1.4 8V 102cv", "2011", "- >"],
        ["Cobalt Econo Flex - (Advantage / LT / LTZ) - automático / mecânico", "1.8 8V 108cv", "2013"],
        ["- 2017 Flex", "Sonic", "1.6"],
        ["2012 - 2015", "Flex", "Spin"],
        ["EconoFlex 1.8", "2012", "- 2016"]
      ]
    }
  },

  "ARL9600": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl9600/produto/664",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR9600"], "Delphi": ["EFA983"], "Filtran": ["2059600"],
      "Fleetguard": ["AF25841"], "Ford": ["1496814", "1C159601AE", "1C159601AF"], "Hengst": ["E470L", "E760L"],
      "Japanparts": ["FA129S", "FA4866S"], "Mahle": ["LX1596", "LX935"], "Mann": ["C28100", "C28145"],
      "Master Parts": ["MM100573"], "Millard": ["MK8919"], "Nissan": ["16545EB300", "16546EB300", "BRPRT10420"],
      "Recer Filtros": ["AL2500RC"], "Sakura": ["A1952"], "Seineca": ["SAF8126", "SAF8153"],
      "Tecfil": ["ARL9600"], "Turbo Filtros": ["TR5960"], "Vox": ["HLP9600"],
      "Wega": ["FAP4867", "JFA0129", "JFA129"], "WIX": ["WA48100"],
      "Fram": ["CA10343"]
    },
    aplicacoes: {
      "Ford": [
        ["Transit (Chassi / Van / Furgão) - Mecânico", "2.2 TDCi", "2012"]
      ],
      "- >": [
        ["Diesel Transit", "(Chassi / Van / Furgão) - Mecânico", "2.2 TDCi"],
        ["2012 - >", "Diesel", "Transit"],
        ["Van / Furgão - Eletrônico / Turbodiesel 2.4 TDCi", "12/2008", "- >"],
        ["Diesel Frontier", "Espanhola", "2.5 16V 206cv"],
        ["2006 - 2007", "Diesel", "Pathfinder"],
        ["2.5 DCI 01/2006", "- 2009", "Diesel"]
      ],
      "Nissan": [
        ["Frontier (NACIONAL ATTACK SE/LE/SL/SV)", "2.5 16V 206cv", "2012"]
      ]
    }
  },

  "ARL9602": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl9602/produto/147",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR9602"], "Ford": ["6E5Z9601EA"], "Fram": ["CA10094"],
      "Inpeca": ["SAL9301"], "Japanparts": ["FA8621S"], "Mahle": ["LX2642"],
      "Mann": ["C2278"], "Motorcraft": ["FA1785"], "Recer Filtros": ["AL2585RC"],
      "Seineca": ["SAF8100"], "Seineca Antigo": ["SEI0651"], "Tecfil": ["ARL9602"],
      "Turbo Filtros": ["TRL9602"], "Vox": ["HLP9602"], "Wega": ["FAP9004"]
    },
    aplicacoes: {
      "Ford": [
        ["Fusion (HYBRID / HYBRID HE)", "2.5 L 16V DOHC L4", "2010"],
        ["- 2012 Gasolina", "Fusion", "SEL"],
        ["2.5 16V 01/2009", "- 2012", "Gasolina"],
        ["Fusion SEL", "2.3 16V", "05/2006"]
      ],
      "- >": [

      ]
    }
  },

  "ARL9605": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/arl9605/produto/110",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01EFA132", "19347763"], "Authomix": ["FAR9605"], "Bosch": ["0986B02322"],
      "Cross": ["FE925/1"], "Delphi": ["EFA931"], "FAM": ["FA9605"],
      "Filtran": ["2059605"], "Ford": ["XS5X9601DA"], "Fram": ["CA8736"],
      "Inpeca": ["SAL9605"], "Japanparts": ["FABR30S"], "KSPG": ["50013884"],
      "Mahle": ["LX1312", "LX312"], "Mann": ["C2693"], "Motorcraft": ["MB9A9601DA"],
      "Purolator": ["A1013"], "Sakura": ["A19840"], "Seineca": ["SAF8103"],
      "Seineca Antigo": ["SEI0654"], "Tecfil": ["ARL9605"], "Turbo Filtros": ["TRL5960"],
      "Vox": ["HLP9605"], "Vox Antigo": ["HLP2248"], "Wega": ["FAP2693", "FAP2840"],
      "WIX": ["W48765BR", "WA10508"]
    },
    aplicacoes: {
      "Ford": [
        ["Courier Zetec Rocam", "1.6 8V", "2007"],
        ["- 2013 Flex", "Ka", "1.6 8V"],
        ["2000 - 2007", "Gasolina", "Ka"],
        ["1.0 8V 1997", "- 2007", "Gasolina"]
      ]
    }
  },

      "ARS1013": {
    tipo: "ar",
    especificacoes: { altura: 286.5, diametroExterno: 168, diametroInterno: 83, rosca: "Não possui", elemento: "Papel", valvulaAntiRetorno: "Não", valvulaAlivio: "Não", pesoLiquido: 0.9, pesoBruto: 0.987, caixa: 1 },
    conversoes: {
      "Authomix": ["FAR1013"], "Bosch": ["1457432282"], "Cross": ["FE940/2"],
      "Delkraft": ["DR1387"], "Delphi": ["EFA933"], "FAM": ["FI1006"],
      "Fiat": ["1310636080","1337057080"], "Filtran": ["2051013"], "Fram": ["CA5611","CA9231"],
      "Hengst": ["E328L"], "Inpeca": ["SRS6080"], "Japanparts": ["FA6080S"],
      "KSPG": ["50014834"], "Mahle": ["LX611"], "Mann": ["C17278"],
      "Master Parts": ["MM100571"], "Recer Filtros": ["AR3040RC"], "Sakura": ["A22300"],
      "Tecfil": ["ARS1013"], "Turbo Filtros": ["TR9402"], "Unifilter": ["UA25296P"],
      "Vox": ["HD1013"], "Vox Antigo": ["HD2815"], "Wega": ["WR316"],
      "WIX": ["ARS48950","W48950BR"], "Xanfil": ["XL2101"]
    },
    aplicacoes: {
      "Caterpillar": [
        ["RM300 - BWR1-UP","CAT RSX1-UP","-"]
      ],
      "Citroen": [
        ["Jumper","2.8 D","09/2000 - >"],
        ["Jumper","2.5 8V","01/1995 - 12/1998"],
        ["Jumper HDi","2.8","01/2000 - 12/2004"],
        ["Jumper HDi 127","2.8","01/2005 - >"],
        ["Jumper JTD","2.3","01/2009 - >"]
      ],
      "Daihatsu": [
        ["Feroza SX","1.6 8V","01/1994 - 12/1998"]
      ],
      "Fiat": [
        ["Ducato","2.8 D 8V","02/1998 - >"],
        ["Ducato Turbo JTD","2.8 8V","01/2006 - >"],
        ["Ducato 8140.43N","2.8 JTD","04/2004 - 06/2006"],
        ["Ducato Turbo Intercooler","2.8 8V","01/1997 - 12/2005"]
      ],
      "Peugeot": [
        ["Boxer","2.3","01/2009 - >"],
        ["Boxer Di Combi 320M F28D","2.8","-"],
        ["Boxer 8140.43S","2.8 HDI 127","09/2000 - 03/2002"],
        ["Boxer -","2.8 8V","01/1998 - 12/2002"],
        ["Boxer","1.9 TD","07/1994 - >"],
        ["Boxer -","2.8 8V","01/2002 - 12/2006"],
        ["Boxer","1.9 TD","01/1996 - >"],
        ["Boxer -","2.8 8V","01/2005 - 12/2009"]
      ]
    }
  },

  "ARS2868": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars2868/produto/175",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["01EFA015", "19347766"], "Authomix": ["FAR2868"], "Baldwin": ["RS3942"],
      "Bosch": ["1457432286"], "Cross": ["FE880/1"], "Delkraft": ["DR1360"],
      "Delphi": ["EFA907"], "Donaldson": ["P778984"], "Donsson": ["DA2978"],
      "FAM": ["FA6201"], "Fil Filter": ["HP2549"], "Filtran": ["2052868"],
      "Fleetguard": ["AF25727"], "Fram": ["CA5961", "CA5961PU", "FLI9178"], "Franig": ["HCA6069"],
      "GM": ["93276069"], "Hengst": ["E1600L"], "Inpeca": ["SRS6201"],
      "Japanparts": ["FA14200S"], "KS": ["287AR"], "KSPG": ["50013287"],
      "Magneti Marelli": ["FA2868"], "Mahle": ["LX960"], "Mann": ["C14200"],
      "Massey Ferguson": ["3901462M1", "3901462M2"], "Master Parts": ["MM100326"], "MWM": ["MASTER0104"],
      "Purolator": ["A1122"], "Seineca": ["SAR8111"], "Seineca Antigo": ["SEI0667"],
      "Tecfil": ["ARS2868"], "Turbo Filtros": ["TR14200"], "Unifilter": ["UA14200P", "UAEP14200P"],
      "Valtra": ["84340600"], "Volkswagen": ["2171296201"], "Vox": ["HD2868"],
      "Vox Antigo": ["HD2623"], "Wega": ["WR200/3"], "WIX": ["W48235BR", "WA48235"],
      "Xanfil": ["XL2105"], "ZF": ["0070131117"]
    },
    aplicacoes: {
      "General Motors": [
        ["Blazer EXECUTIVE 4X4", "2.8 8V", "2005"]
      ],
      "- >": [
        ["Diesel Blazer", "STD Turbo", "2.8 8V"],
        ["2000 - 2006", "Diesel", "Blazer"],
        ["Diesel Grand Blazer", "DLX", "4.2 MWM"],
        ["01/1998 - >", "Diesel", "S10"],
        ["TDI STD DLX LTD (4X4) 2.8 MWM Sprint", "03/2005", "- >"],
        ["S10 STD / DLX", "MWM Sprint 2.8 SOHC", "01/2000"],
        ["Diesel S10", "MPFI - (CS / CD / CE) - mecânico", "2.2 8V 136cv"],
        ["1997 - 2000", "Gasolina", "S10"],
        ["Turbo - (CS / CD / CE) - mecânico 2.8 12V MWM 132cv", "2002", "- 2005"],
        ["S10 Turbo Intercooler Mecânico - com sist. anti-borbulha", "2.8 MWM", "01/2002"],
        ["Diesel S10", "Turbo - (CS / CD / CE) - mecânico", "2.8 12V 140cv"],
        ["2006 - 2007", "Diesel", "S10"],
        ["Turbo - (CS / CD / CE) - mecânico 2.8 12V MWM 132cv", "1998", "- 2001"],
        ["S10 Turbo - (CS / CD / CE) - mecânico", "2.8 12V 140cv", "2007"],
        ["- 2011 Diesel", "S10", "TDI STD DLX"],
        ["2.8 MWM Sprint 01/2000", "- 01/2002", "Diesel"],
        ["Silverado 2.8 MWM Sprint", "01/2001", "- >"]
      ],
      "Mpfi": [
        ["2.2 8V 01/1998", "- 12/2000", "Gasolina"],
        ["Blazer Sprint 4.07 TCA", "2.8 MWM", "01/2002"]
      ],
      "Massey Ferguson": [
        ["250X Perkins", "96", "- >"],
        ["250X / SE AD 3152", "99", "- >"],
        ["250XE SIMPSON 2500 3CIL.", "2002", "- >"],
        ["250XF A3 - 2.5", "2002", "- >"],
        ["255 SIMPSON 2500 3CIL.", "2002", "- >"],
        ["262 PERKINS D 3152T", "-", "415"],
        ["Perkins D 3152 -", "451", "D 3.15"]
      ],
      "Volkswagen": [
        ["Kombi EFI - (Refrigerado a Ar)", "1.6 8V 67cv", "01/1998"],
        ["- 12/2011 Etanol", "Kombi", "EFI 1600 Ar"],
        ["1.6 8V 58cv 01/1998", "- 12/2005", "Gasolina"],
        ["Kombi EFI Refrigerado a Ar", "1.6", "01/1998"],
        ["- 12/2005 Álcool/Gasolina", "Kombi", "1.4"]
      ]
    }
  },

  "ARS2869": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars2869/produto/174",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR2869"], "Bosch": ["0986B03005"], "Delkraft": ["DR1442"],
      "Delphi": ["EFA951"], "FAM": ["FA2869"], "Filtran": ["2052869"],
      "Fram": ["CA8852"], "GM": ["93321112"], "Hengst": ["E1245L"],
      "Japanparts": ["FA2869S"], "KSPG": ["50014915"], "Mahle": ["LX2529"],
      "Mann": ["C16197"], "Seineca": ["SAR8112"], "Tecfil": ["ARS2869"],
      "Vox": ["HD2869"], "Vox Antigo": ["HD2442"], "Wega": ["WR200/7"],
      "WIX": ["W49010BR", "WA10525"], "Xanfil": ["XL2106"]
    },
    aplicacoes: {
      "General Motors": [
        ["Blazer 2.4 8V", "2000", "- 2007"],
        ["Blazer 2.4 8V", "2007", "- 2012"],
        ["S10 MPFI - (CS / CD / CE) - mecânico", "2.4 8V 128cv", "2001"],
        ["- 2006 Gasolina", "S10", "(CS / CD / CE) - mecânico"],
        ["2.4 8V 147cv 2007", "- 2011", "Flex"]
      ]
    }
  },

  "ARS2870": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars2870/produto/717",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["94771925"], "Authomix": ["FAR2870"], "Bosch": ["0986B03014"],
      "Filtran": ["2052870"], "Fram": ["CA11077", "CA8852B"], "General Motors": ["52046262", "52160963"],
      "GM": ["94771925"], "Interfil": ["F52A04"], "Japanparts": ["FABR78S"],
      "Mahle": ["LX3679"], "Mann": ["C16010/1"], "Mann Argentina": ["C16010"],
      "Master Parts": ["MM100252"], "Sakura": ["A65510"], "Seineca": ["SAR8113"],
      "Tecfil": ["ARS2870"], "Turbo Filtros": ["TR30331"], "Vox": ["HD2870"],
      "Wega": ["WR295"], "WIX": ["WA10456"]
    },
    aplicacoes: {
      "General Motors": [
        ["S10 Ecotec", "2.5 16V 206cv", "2014"]
      ],
      "- >": [
        ["Flex S10", "Turbo - (CS / CD / CE) - automático / mecânico", "2.8 16V 200cv"],
        ["2012 - >", "Diesel", "S10"],
        ["Flex Power - (CS / CD / CE) - automático / mecânico 2.4 8V 147cv", "2012", "- >"],
        ["Trailblazer LTZ - Automático", "3.6 V6", "2012"],
        ["- 2015 Gasolina", "Trailblazer", "TDI Turbo Diesel - LTZ - Automático"],
        ["2.8 16V 2012", "- >", "Diesel"]
      ]
    }
  },

  "ARS5376": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars5376/produto/946",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR5376"], "Donaldson": ["P630368"], "Fleetguard": ["AF27977"],
      "Ford": ["BH1X9601AA"], "Fram": ["CA10894"], "Hengst": ["E1250L"],
      "Japanparts": ["FABR148S"], "Mann": ["C27109"], "Tecfil": ["ARS5376"],
      "Turbo Filtros": ["TR30182"], "Vox": ["HD5376"], "Wega": ["WAP131"],
      "WIX": ["WA10470"],
      "Mahle": ["LX 1791"]
    },
    aplicacoes: {
      "Ford": [
        ["2423 2423 (Cargo C-2423) 230cv", "Cummins ISB6.7 226 P7", "01/2012"]
      ],
      "- >": [
        ["Diesel 2622", "Cargo", "Cummins ISBe6 5.9l 220 P5-1.1"],
        ["2011 - >", "Diesel", "2623"],
        ["Cargo 2623 230cv Cummins ISB6.7 226 P7", "2012", "- >"],
        ["2628 5.9 275cv", "Cummins ISBE 6", "2014"],
        ["Diesel 2629", "Cargo", "Cummins ISB6.7 286 P7"],
        ["2012 - >", "Diesel", "3132"],
        ["Cargo Cummins ISC 8.3l 315 P5-2", "2011", "- >"],
        ["3133 Cargo", "Cummins ISL8.9 330 P7-0", "2012"]
      ],
      "-": [
        ["2628 Cargo", "Cummins ISBe 5.9l 275 P5-1.1", "2011"]
      ]
    }
  },

  "ARS7065": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars7065/produto/297",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR7065"], "Baldwin": ["RS10035"], "Delkraft": ["DR1511"],
      "Delphi": ["EDA114"], "Filtran": ["2051008/4"], "Fleetguard": ["AF26501"],
      "Fram": ["CA10112", "CA9916"], "Gonher": ["GA412R"], "Hengst": ["E1114L"],
      "Japanparts": ["FA259S"], "KSPG": ["50014831"], "Mahle": ["LX2125"],
      "Mann": ["C23107", "C23107/1"], "Master Parts": ["MM100012"], "Purolator": ["A1175"],
      "Sakura": ["A5903"], "Seineca": ["SAR8115"], "Tecfil": ["ARS7065"],
      "Toyota": ["178010C010"], "Turbo Filtros": ["TRL7801"], "Vox": ["HD7065"],
      "Vox Antigo": ["HD0420"], "Wega": ["JFA0292/2", "JFA292/2"], "WIX": ["WA9644"]
    },
    aplicacoes: {
      "Toyota": [
        ["Hilux 3.4 24V V6", "1997", "- 2001"],
        ["Hilux DOHC VVT-i - SR", "2.7 16V", "10/2008"],
        ["- 2010 Gasolina", "Hilux", "D/C DX AC 4X2 e 4X4"],
        ["2.5 16V 2005", "- 12/2010", "Diesel"],
        ["Hilux D4-D CD / SR / SRV / SW4 / 4x2/ 4x4 / Aut", "3.0 16V", "01/2006"],
        ["- 12/2010 Diesel", "Hilux", "CDSRV TBI"],
        ["3.0 16V 2006", "- 12/2010", "Diesel"],
        ["Hilux SW4", "2.7 16V", "12/2011"],
        ["- 2015 Flex", "Hilux", "D/C SRV TBI"],
        ["3.0 16V 2005", "- 12/2010", "Diesel"],
        ["Hilux Turbo Diesel - (SW4 / SRV / CD /CS) - Automático / Mecânico", "3.0 16V 163cv", "12/2011"],
        ["- 2015 Diesel", "Hilux", "D/C SRV 4x4"],
        ["Hilux SW NEW AT", "3.0 16V", "2005"],
        ["- 10/2010 Diesel", "Hilux", "SW NEM MT"],
        ["3.0 16V 2005", "- 10/2010", "Diesel"],
        ["Hilux CDSRV", "3.0 16V", "2006"],
        ["- 12/2010 Diesel", "Hilux", "Turbo Diesel - (CD / CS) - Automático / Mecânico"],
        ["2.5 16V 102cv 12/2011", "- 2015", "Diesel"],
        ["Hilux D/C SRV Turbo 4x4 e 4X2", "3.0 16V", "2001"],
        ["- 2006 Diesel", "Hilux SW4", "4x4 - Turbo"],
        ["3.0 - 16V - 171CV 2014", "- 2015", "Diesel"]
      ]
    }
  },

  "ARS8234": {
    tipo: "ar",
    especificacoes: { altura: 414, diametroExterno: 174.5, diametroInterno: 106, rosca: "Não possui", elemento: "Papel" },
    conversoes: {
      "AGCO": ["6223614M1","87370414"], "Agrale": ["6015001014002"], "Authomix": ["FAR8234"],
      "Delkraft": ["DR1411/1"], "Delphi": ["EDA115"], "FAM": ["FA9319"],
      "Fiat Iveco": ["93828280"], "Filtran": ["2058280"], "Fram": ["CA10221","FLI9510"],
      "Japanparts": ["FA8280S"], "Mahle": ["LX2532"], "Mann": ["C18450","C18450/1","C18450/2"],
      "Nexpro": ["500058822"], "Sakura": ["AS22470"], "Tecfil": ["ARS8234"],
      "Troller": ["2001321001"], "Turbo Filtros": ["TR8280"], "Unifilter": ["UAEP18450P"],
      "Vox": ["HD8234"], "Vox Antigo": ["HD2839"], "Wega": ["WR200/8"],
      "WIX": ["W49110BR","WA10530"], "Xanfil": ["XL2131"]
    },
    aplicacoes: {
      "Agrale": [
        ["Marruá AM 100-E (6011.000.120.00.7) Sprint 4.07 TCA","MWM","02/2007 - >"],
        ["Marruá AM 150-E (6011.000.123.00.1) Sprint 4.07 TCA","MWM","04/2007 - >"],
        ["Marruá AM 200-E (6011.000.115.00.7) Sprint 4.07 TCA","MWM","06/2006 - >"]
      ],
      "IVECO": [
        ["Daily 38.13 8140.43S","2.8 8V","01/2005 - >"],
        ["Daily 49.12 8140.23","2.8 8V","05/2005 - >"],
        ["Daily 40.13 8140.43S","2.8 8V","01/2005 - >"],
        ["Daily 49.10 8140.43S","2.8 8V","05/2002 - >"],
        ["Daily 50.13 8140.43S","2.8 8V","01/2003 - >"],
        ["Daily 50 C 15 - Importado","Ecoline 146 cv","2013 - >"],
        ["Daily 59.12 8140.43S","2.8 8V","01/2005 - >"],
        ["Daily Scudato 59.12","-","04/2003 - >"],
        ["Daily 35.10 8140.23","2.8 8V","05/2002 - >"],
        ["Daily 60.12 Scudato 8140.23","2.8 8V","01/2003 - >"],
        ["Daily 50 C 17 - Importado","Ecoline 170 cv","2013 - >"],
        ["Daily 60.13 Scudato 8140.43S","2.8 8V","01/2006 - >"],
        ["Daily 70.12 8140.43S","2.8 8V","01/2004 - >"],
        ["Daily 70.13 8140.43S","2.8 8V","01/2005 - >"],
        ["Daily 35.13 8140.43S","2.8 8V","05/2002 - >"],
        ["Daily 55 C 16","3.0","01/2008 - >"],
        ["Daily 35 S 14 - (Chassi / Furgone / Grand Furgone) - Mecânico","Ecoline 146cv","2013 - >"],
        ["Daily 45 S 17 - (Chassi / Furgone / Grand Furgone) - Mecânico","Ecoline 170cv","2013 - >"],
        ["Daily 55 C 17 - (Chassi / Vetrato) - Mecânico","Ecoline 170cv","2013 - >"],
        ["Daily 70 C 17 - (Chassi / Truck) - Mecânico","Ecoline 170cv","2013 - >"],
        ["Scudato 50.13 HMV VEDRATO","2.8 L 8V 8140-43","2001 - 2005"],
        ["Scudato 59.12S HM","2.8 L 8V 8140-43","2004 - >"],
        ["Scudato 60.13 HM CITY","2.8 L 8V 8140-43","2005 - >"],
        ["Tector 11190","FPT NEF4 190cv","2019 - >"],
        ["Tector 11-190 4X2 (Euro 5)","FPT P7 190cv","2022 - >"],
        ["Tector 9-190","FPT NEF4 190cv","2020 - >"],
        ["Vertis 90V18","Euro 5","01/2012 - >"]
      ]
    }
  },

    "ARS9839": {
    tipo: "ar",
    especificacoes: { altura: 408.5, diametroExterno: 263, diametroInterno: 149, rosca: "Não possui", elemento: "Papel", observacao: "APLICADO COM OS FILTROS: PSD530, PSD960, PSD970" },
    conversoes: {
      "Alliance": ["A63452803060097"], "Authomix": ["FAR9839"], "Baldwin": ["RS5627"],
      "Bosch": ["0986B03003"], "Controil": ["CHFA00002"], "Cummins": ["2S0129620"],
      "Delkraft": ["DR1329/1"], "Delphi": ["EFA946"], "Donaldson": ["P618941"],
      "Donsson": ["DA2957"], "FAM": ["FA9316"], "Filtran": ["2059839"],
      "Fleetguard": ["AF25997"], "Ford": ["BG1X9601BA","BG6X9601AA"], "Fram": ["CA5626CPU","CA5626PU","FLI6120"],
      "Franig": ["HCA5626"], "Gonher": ["GA864R"], "Hengst": ["E1068L"],
      "Inpeca": ["SRS7802"], "Japanparts": ["FA9839S"], "Js Asakashi": ["A0515OUT"],
      "KS": ["50013266"], "KSPG": ["50014902"], "Luberfiner": ["LAF5959"],
      "Mahle": ["LX1716","LX1716/1"], "Mann": ["C27830","C27830/1"], "Master Parts": ["MM100327"],
      "Mercedes Benz": ["A6345280306"], "Parker": ["AR5626RS","AR5626S"], "Partmo": ["AP5627"],
      "Purolator": ["A1144"], "Sakura": ["A5328"], "Tecfil": ["ARS9839"],
      "Trp": ["915005"], "Turbo Filtros": ["TR1826PU"], "Unifilter": ["UA5626PU"],
      "Volkswagen": ["2S0129620","2S0129620B"], "Vox": ["HD9839"], "Vox Antigo": ["HD2631"],
      "Wega": ["WAP103"], "WIX": ["W48915BR","WA48915"], "Xanfil": ["XL2107"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["17210 6.10 TCA","MWM","05/02 - >"],
        ["17210 6BTAA","Cummins","01/2000 - >"],
        ["17210 6BTAA","Cummins","05/02 - >"],
        ["13170 6BTAA (Separador de água ref. original: 2R0127177 ou 2TD127491A)","Cummins","01/2000 - >"],
        ["13170E Ref. Original: 2R0127177D e 2R0127177C","CUMMINS 4 ISBE","12/2003 - >"],
        ["13180","Cummins 6CT","01/2000 - >"],
        ["13180 MWM 6.10 TCA SERIE 10 / X10 6.5 L 12V SOHV L6","MWM 6.10 TCA","2000 - 2005"],
        ["13180E Worker - Ref. Original 2R0127177D","MWM 4.12 TCE","12/2003 - 12/2014"],
        ["13180E Worker - Ref. Original 2R0127177C","MWM 4.12 TCE","12/2003 - 12/2014"],
        ["13190 Com Ref. Original: 2RK127177B","Cummins 6BTAA","2001 - 2005"],
        ["13190 Com Ref. Original: 2TD127491A","Cummins 6BTAA","2001 - 2005"],
        ["15170 Int. 4ISBE","Cummins","01/00 - >"],
        ["15170E Worker - Ref. Original: 2R0127177D e 2R0127177C","CUMMINS 4 ISBE","12/2003 - >"],
        ["15180 6.10 TCA","MWM","01/00 - >"],
        ["15180E Worker - Ref. Original: 2R0127177C","MWM 4.12 TCE","05/2005 - >"],
        ["15180E Constellation - Ref. Original 2R0127177C","MWM 4.12 TCE","10/2006 - >"],
        ["15180E Constellation - Ref. Original 2R0127177D","MWM 4.12 TCE","10/2006 - >"],
        ["15180E Worker - Ref. Original: 2R0127177D","MWM 4.12 TCE","05/2005 - >"],
        ["15190 6BTAA 5.9","Cummins","2002 - >"],
        ["15190E","Cummins","01/2004 - >"],
        ["15190EOD","MWM 4.12 TCE EuroIII","2006 - 2012"],
        ["15190OD Para Ref. Orig: 2R0127177J","MAN","2012 - >"],
        ["17180 6.10 TCA","MWM","01/2006 - >"],
        ["17210EOD Ref. Original 2R0127177D","MWM 4.12 TCAE","04/2004 - >"],
        ["17210EOD Ref. Original 2R0127177C","MWM 4.12","04/2004 - >"],
        ["17210EOD Ref. Original 2R0127177C","MWM 6.12 TCAE","12/2005 - >"],
        ["17210EOD Ref. Original 2R0127177D","MWM 6.12 TCAE","12/2005 - >"],
        ["17220","Cummins","1991 - 1992"],
        ["17220 Com Ref. Original 2R0127177C e 3903410","Cummins","01/2000 - >"],
        ["17220 Com Ref. Original 2TD127491A e 3903410","Cummins","1992 - 1999"]
      ]
    }
  },

  "ARS9840": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars9840/produto/385",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "AGCO": ["6213198M1"], "Alliance": ["A99952003060097"], "Atlas-Copco": ["1028810505"],
      "Authomix": ["FAR9840"], "Baldwin": ["RS5358"], "DAF": ["0915521"],
      "Delkraft": ["DR1508"], "Delphi": ["EFA953"], "Donaldson": ["P750008", "P784457"],
      "Donsson": ["DA2970"], "Filtran": ["2059840"], "Fleetguard": ["AF26242", "AF27857"],
      "Fram": ["CA9747"], "Franig": ["HCA5592"], "Hengst": ["E1016L", "E603LNAC"],
      "Japanparts": ["FA9840S"], "Js Asakashi": ["A0936"], "KSPG": ["50013532"],
      "Luberfiner": ["LAF6242"], "Mahle": ["LX1313/1"], "Mann": ["C271320/1", "C271320/3", "C271340"],
      "Master Parts": ["MM100078"], "Mercedes Benz": ["4760940004", "A0040943504", "A4760940004"], "Parker": ["AR5717RS"],
      "Partmo": ["AP72152"], "Purolator": ["A1149"], "Sakura": ["A5331"],
      "Scania": ["1485592"], "Tbfil": ["AR7587"], "Tecfil": ["ARS9840"],
      "Trp": ["915004"], "Turbo Filtros": ["TR271340"], "Unifilter": ["UAEP271340P"],
      "Volvo": ["20544738", "21436535"], "Vox": ["HD9840"], "Vox Antigo": ["HD3052"],
      "Wega": ["WAP181"], "WIX": ["W48925BR", "WA48925"], "Xanfil": ["XL2037"],
      "ZF": ["0070131133"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["1634LS OM 447 LA", "01/2000", "- >"],
        ["1634LS OM 457 LA", "2006", "- 2012"],
        ["1938 S", "OM 457 LA", "01/1999"]
      ],
      "- >": [
        ["Diesel 1944S", "Para Ref. Orig: A4570920001KZ e A9794770015.", "OM 457 LA"],
        ["01/2002 - >", "Diesel", "2638L/LS/LK"],
        ["OM 457 LA 2002", "- >", "Diesel"],
        ["ACTROS 2546 OM 501 LA", "01/2010", "- >"],
        ["ACTROS 2546LS 6x2 - BlueTec", "OM 501 LA", "2010"],
        ["Diesel ACTROS 2646", "OM 501 LA", "01/2010"],
        ["Diesel ACTROS 2651", "P/ ref original: A0040943504", "OM 542 LA"],
        ["02/2005 - >", "Diesel", "ACTROS 4144"],
        ["OM 541 04/2003", "- 12/2008", "Diesel"],
        ["ACTROS 4844 OM 501 LA", "01/2010", "- >"],
        ["ACTROS 4844K 8x4 - Fora de Estrada", "OM 501 LA", "2008"],
        ["Diesel ATRON 1635", "BlueTec 5", "OM 457 LA"],
        ["2012 - >", "Diesel", "AXOR 2035S"],
        ["OM 457 LA OM 457 - 12.0 L 24V SOHV L6", "01/2005", "- >"],
        ["AXOR 2036 BlueTec", "OM 457 LA", "2012"],
        ["- 12/2016 Diesel", "AXOR 2036", "BlueTec"],
        ["OM 457 LA 2017", "- >", "Diesel"],
        ["AXOR 2040S OM 457 LA", "OM 457 - 7.2 L 18V SOHV L6", "2005"],
        ["Diesel AXOR 2041", "BlueTec 5", "OM 457 LA"],
        ["2012 - >", "Diesel", "AXOR 2044S"],
        ["OM 457 LA OM 457 - 12.0 L 24V SOHV L6", "01/2006", "- >"],
        ["AXOR 2540 -", "09/2004", "- >"],
        ["AXOR 2540S OM 457 LA - 6 X 2", "OM 457 - 12.0 L 24V SOHV L6", "2005"],
        ["- 12/2011 Diesel", "AXOR 2543", "OM 457 LA"],
        ["06/2005 - 12/2011", "Diesel", "AXOR 2544S"],
        ["OM 457 LA - 6 X 2 OM 457 - 12.0 L 24V SOHV L6", "01/06", "- >"],
        ["AXOR 2640 OM 457 LA", "09/2004", "- >"],
        ["AXOR 2640S OM 457 LA - 6 X 4", "OM 457 - 12.0 L 24V SOHV L6", "01/06"],
        ["Diesel AXOR 2644S", "OM 457 LA - 6 X 4", "OM 457 - 12.0 L 24V SOHV L6"],
        ["01/2005 - 2011", "Diesel", "AXOR 3340S/K"],
        ["OM 457 LA - 6 X 4 OM 457 - 12.0 L 24V SOHV L6", "2005", "- >"],
        ["AXOR 3344S/K OM 457 LA - 6 X 4", "OM 457 - 12.0 L 24V SOHV L6", "2006"],
        ["Diesel AXOR 4140K", "OM 457 LA - 6 X 4", "OM 457 - 12.0 L 24V SOHV L6"],
        ["2006 - >", "Diesel", "AXOR 4144K"],
        ["OM 457 LA - 6 x 4 OM457 - 12.0 L 24V SOHV L6", "2006", "- >"]
      ]
    }
  },

  "ARS9842": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars9842/produto/834",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FAR9842"], "Automotiv": ["AE1160EP"], "Baldwin": ["RS4971"],
      "Donaldson": ["P782936"], "Fil Filter": ["HP2592"], "Fleetguard": ["AF25894"],
      "Hengst": ["E428L01"], "Japanparts": ["FABR161S"], "MAN": ["81084050021"],
      "Mann": ["C271250/1"], "Sakura": ["A68380"], "Tecfil": ["ars9842", "ARS9842"],
      "Turbo Filtros": ["TR30185"], "Vox": ["HD9842"], "Wega": ["WAP120"],
      "Mahle": ["LX 1819"],
      "Fram": ["CA10667"]
    },
    aplicacoes: {
      "MAN": [
        ["28440 TGX SERIES EURO 5", "MAN D2066 LF36", "2013"],
        ["- 07/2016 Diesel", "29440", "TGX"],
        ["MAN D2676 2013", "- >", "Diesel"],
        ["29480 -", "MAN D2676", "2014"]
      ],
      "- >": [
        ["Diesel 33440", "TGX", "MAN D2676"],
        ["2013 - >", "Diesel", "TG 310 A"],
        ["D 2866 310cv 04/2000", "- 03/2004", "-"],
        ["TG 410 A D 2866 410cv", "04/2000", "- 12/2007"],
        ["TG 460 A D 2876 460cv", "04/2000", "- 12/2007"],
        ["TG 480 A D 2876 480cv", "02/2003", "- 12/2007"],
        ["TG 510 A D 2876 510cv", "08/2000", "- 10/2007"],
        ["TG 530 A D 2876 530cv", "01/2003", "- 12/2007"],
        ["TGA 18.310, 18.313 D 2866 310cv", "04/2000", "- 03/2004"],
        ["TGA 18.360, 18,363 D 2866 360cv", "04/2000", "- 12/2007"],
        ["TGA 18.410, 18.413 D 2866 410cv", "04/2000", "- 12/2007"],
        ["TGA 18.460, 18.463 D 2876 460cv", "04/2000", "- 12/2007"],
        ["TGA 18.480, 18.483 D 2876 480cv", "02/2003", "- 12/2007"],
        ["TGA 18.510, 18.513 D 2876 510cv", "08/2000", "- 12/2007"],
        ["TGA 18.530, 18.533 D 2876 530cv", "01/2003", "- 12/2007"],
        ["TGA 19.360, 19.363 D 2866 360cv", "05/2004", "- 12/2007"],
        ["TGA 19.410, 19.413 D 2866 410cv", "05/2004", "- 12/2007"],
        ["TGA 19.480, 19.483 D 2876 480cv", "05/2004", "- 12/2007"],
        ["TGA 24.360 D 2866 360cv", "04/2000", "- 12/2007"],
        ["TGA 24.410 D 2866 410cv", "04/2000", "- 12/2007"],
        ["TGA 24.460 D 2876 460cv", "04/2000", "- 12/2007"],
        ["TGA 24.480 D 2876 480cv", "02/2003", "- 12/2007"],
        ["TGA 24.510 D 2876 510cv", "08/2000", "- 12/2007"],
        ["TGA 24.530 D 2876 530cv", "01/2003", "- 12/2007"],
        ["TGA 25.310 D 2866 310cv", "04/2000", "- 03/2004"],
        ["TGA 26.310, 26.313 D 2866 310cv", "04/2000", "- 03/2004"],
        ["TGA 26.360, 26.363 D 2866 360cv", "04/2000", "- 12/2007"]
      ],
      "-": [
        ["33400 TGX", "MAN D3876", "2013"]
      ]
    }
  },

  "ARS9845": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ars9845/produto/2479",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Tecfil": ["ARS9845"], "Volkswagen": ["2V3129620"],
      "Authomix": ["FAR9845"],
      "Mann": ["C 30 1540","C 31 1254","C 25 125/2"],
      "Mahle": ["LX 2000","LX 2845","LX 1582"],
      "Wega": ["WAP-190","WAP-188","WAP-295"],
      "Fram": ["CA11500","CA11234","CA10332"],
      "Vox": ["ARS9845","HD9845","HS9845"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["Constellation 25.460 Tractor - 6x2 Euro 5", "MAN D26 12,4L 460cv", "2020"]
      ],
      "- >": [
        ["Diesel Constellation 25.480", "Tractor / Highline - 6x2 Euro 6", "MAN D26 12,4L 480cv"],
        ["2020 - >", "Diesel", "Constellation 25460"],
        ["MAN D26 13 L 460cv 2020", "- >", "Diesel"],
        ["Constellation 25480 MAN D26 13 L 480cv", "2020", "- >"],
        ["Meteor 28.460 6x2", "MAN D2676 LF94 460cv", "2020"],
        ["Diesel Meteor 29.520", "Tractor / High Roof / Full Air - 6x4 Euro 5", "MAN D26 12,4L 520cv"],
        ["2020 - >", "Diesel", "Meteor 29.520"],
        ["6x4 MAN D2676 LF75 520cv", "2021", "- >"]
      ],
      "-": [
        ["Meteor 28.460 Tractor / High Roof / Full Air - 6x2 Euro 5", "MAN D26 12,4L 460cv", "2020"]
      ]
    }
  },
       "ARL4139": {
    tipo: "ar",
    especificacoes: { altura: 62, diametroExterno: 241, diametroInterno: 223, elemento: "Papel", observacao: "SUBSTITUI OS FILTROS PSL55, PSL78, PSL152 E PSL166" },
    conversoes: {
      "Authomix": ["FAR4139"], "Fleetguard": ["AF4282"], "Millard": ["MK20608"],
      "Mitsubishi": ["1500A608","CD150292"], "Wega": ["JFA0507"], "WIX": ["49430"]
    },
    aplicacoes: {
      "Mitsubishi": [
        ["L200 DI-D 2.4 16V 190 CV","2.4","2016 - >"],
        ["L200 Triton Sport diesel - (CD/GLS) 2.4 16V 4 CIL.190CV","2.4","2017 - >"],
        ["Pajero Sport","2.4 16v 4cil Turbo","2019 - >"]
      ]
    }
  },

    "ASR234": {
    tipo: "ar",
    especificacoes: { altura: 412, diametroExterno: 97, rosca: "Não possui", elemento: "Papel", observacao: "COM SEXTAVADO" },
    conversoes: {
      "AGCO": ["6223615M1"], "Agrale": ["6015001015009"], "Authomix": ["FAR0234"],
      "Case": ["87370415"], "Donaldson": ["P628399"], "Mahle": ["LXS370"],
      "Mann": ["CF1150"], "Tecfil": ["ASR234"], "Turbo Filtros": ["TR23615"],
      "Vox": ["HDS234"], "Wega": ["WR200/8S"]
    },
    aplicacoes: {
      "Agrale": [
        ["Marruá AM 100-E (6011.000.120.00.7) Sprint 4.07 TCA","MWM","02/2007 - >"],
        ["Marruá AM 150-E (6011.000.123.00.1) Sprint 4.07 TCA","MWM","04/2007 - >"],
        ["Marruá AM 200-E (6011.000.115.00.7) Sprint 4.07 TCA","MWM","06/2006 - >"]
      ],
      "IVECO": [
        ["Tector 11190","FPT NEF4 190cv","2019 - >"],
        ["Tector 11-190 4X2 (Euro 5)","FPT P7 190cv","2022 - >"],
        ["Tector 9-190","FPT NEF4 190cv","2020 - >"]
      ],
      "Massey Ferguson": [
        ["4292HD AGCO POWER TURBO","4 Cilindros","2010 - >"],
        ["4297 AGCO POWER TURBO","4 Cilindros","-"]
      ]
    }
  },

  "ASR376": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/asr376/produto/833",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Feltro" },
    conversoes: {
      "Authomix": ["FAR0376"], "Ford": ["BH1X9E673AA"], "Fram": ["CA10894SY"],
      "Japanparts": ["FABR147S"], "Mahle": ["LXS362"], "Tecfil": ["ASR376"],
      "Turbo Filtros": ["TR30183"], "Vox": ["HDS376"], "Wega": ["WAP131/S", "WAP131K"],
      "Mann": ["CF 1640"]
    },
    aplicacoes: {
      "Ford": [
        ["2622 Cargo", "Cummins ISBe6 5.9l 220 P5-1.1", "2011"]
      ],
      "- >": [
        ["Diesel 2623", "Cargo 2623 230cv", "Cummins ISB6.7 226 P7"],
        ["2012 - >", "Diesel", "2628"],
        ["Cargo Cummins ISBe 5.9l 275 P5-1.1", "2011", "- >"],
        ["2629 Cargo", "Cummins ISB6.7 286 P7", "2012"],
        ["Diesel 3132", "Cargo", "Cummins ISC 8.3l 315 P5-2"],
        ["2011 - >", "Diesel", "3133"],
        ["Cargo Cummins ISL8.9 330 P7-0", "2012", "- >"]
      ]
    }
  },

  "ASR839": {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/asr839/produto/404",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Feltro" },
    conversoes: {
      "Alliance": ["A63452802060097"], "Authomix": ["FAR0839"], "Baldwin": ["RS5628"],
      "Bosch": ["0986B03406"], "Delkraft": ["DRI040"], "Delphi": ["EFA964"],
      "Donaldson": ["P621918"], "Donsson": ["DA4957"], "Fleetguard": ["AF26211"],
      "Ford": ["BG1X9E673BA"], "Fram": ["CA5626SYPU", "FLI6121"], "Hengst": ["E1068LS"],
      "Japanparts": ["FA9839SY"], "Js Asakashi": ["A0515IN"], "KSPG": ["50014904"],
      "Mahle": ["LXS260"], "MAN": ["2S0129620C"], "Mann": ["CF1552"],
      "Master Parts": ["MM100328"], "Mercedes Benz": ["3760948004", "6345280206", "A3760948004"], "Parker": ["AR6353RS"],
      "Partmo": ["AP5628"], "Tecfil": ["ASR839"], "Trp": ["915006"],
      "Turbo Filtros": ["TR5626SYPU"], "Unifilter": ["UA5627PUF"], "Volkswagen": ["2S0129620A", "2SO129620"],
      "Vox": ["HDS839"], "Vox Antigo": ["HDS2634"], "Wega": ["WAP103/S"],
      "WIX": ["W48210BR", "WA48210"], "Xanfil": ["XS07"]
    },
    aplicacoes: {
      "Adams": [
        ["300, 330, 440, 550, 660, 777, H-HR-NH 6.6.4 Cummins", "04/2004", "- >"]
      ],
      "Ford": [
        ["1422 8.3 CUMMINS 6CT", "09/2002", "- >"],
        ["1617 8.3 CUMMINS 6CT", "01/2004", "- >"],
        ["1617 8.3 CUMMINS 6CT", "01/2002", "- 12/2003"],
        ["1622 8.3 Cummins 6CTA", "01/2002", "- >"],
        ["1722 8.3 Cummins 6CTAA", "01/2001", "- 12/2003"],
        ["1722 8.3 Cummins 6CTAA", "01/2004", "- >"],
        ["1722E 5.9 Cummins Int.6 ISBE", "08/2010", "- >"],
        ["1722E 5.9 Cummins Int.6 ISBE", "01/2006", "- 07/2010"],
        ["1723 Cargo", "Cummins ISB6.7 226 P7", "2012"],
        ["- 12/2013 Diesel", "1723", "Cargo"],
        ["Cummins ISB6.7 226 P7 2014", "- >", "Diesel"],
        ["1731 8.3 Cummins 6CTAA", "01/2001", "- 12/2003"],
        ["1731 8.3 Cummins 6CTAA", "01/2004", "- >"],
        ["1932 Cargo", "Cummins", "2011"]
      ],
      "- >": [
        ["Diesel 1933", "Cargo / Tractor", "Cummins ISL8.9 330 P7-0"],
        ["2012 - >", "Diesel", "2421"],
        ["5.9 Cummins 6 BTAA >", "- 12/2004", "Diesel"],
        ["2421 5.9 Cummins 6 BTAA", "01/2005", "- 01/2006"],
        ["2422 8.3 Cummins 6CTAA", "11/2003", "- >"],
        ["2422E 5.9 Cummins Int.6 ISBE", "01/2006", "- 07/2010"],
        ["2422E 5.9 Cummins Int.6 ISBE", "08/2010", "- >"],
        ["2425 8.3", "Cummins 6TCAA", "11/2003"],
        ["Diesel 2428E", "INTERACT 6 ISBE", "5.9"],
        ["08/2010 - >", "Diesel", "2428E"],
        ["INTERACT 6 ISBE 5.9", "2006", "- 07/2010"],
        ["2622E INTERACT 6", "5.9 L 24V SOHV L6", "2006"],
        ["- 07/2010 Diesel", "2622E", "INTERACT 6"],
        ["5.9 L 24V SOHV L6 08/2010", "- >", "Diesel"],
        ["2626 6 CTAA", "8.3", "2001"],
        ["Diesel 2628E", "Cummins Int. 6 ISBE", "2006"],
        ["- 07/2010 Diesel", "2628E", "Cummins Int. 6 ISBE"],
        ["08/2010 - >", "Diesel", "2630"],
        ["6 CTAA 8.3", "2001", "- >"],
        ["2631 6 CTAA", "8.3 MAX TON", "2001"]
      ]
    }
  },

  "ARL3280": {
    "tipo": "ar",
    "url": "https://catalogo.tecfil.com.br/search/ARL3280",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    "conversoes": {
      "Tecfil": [
        "ARL3280"
      ],
      "Fram": [
        "CA10165"
      ],
      "Mahle": [
        "LX1785"
      ],
      "Mann": [
        "C26005"
      ],
      "Vox": [
        "HSL3280"
      ],
      "Wega": [
        "FAP2901"
      ]
    },
    "aplicacoes": {
      "Fiat": [
        [
          "Punto / Linea",
          "1.4 / 1.8",
          "2007 - 2016"
        ]
      ]
    }
  },

  "ARL4103": {
    "tipo": "ar",
    "url": "https://catalogo.tecfil.com.br/search/ARL4103",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    "conversoes": {
      "Tecfil": [
        "ARL4103"
      ],
      "Fram": [
        "CA9697"
      ],
      "Mahle": [
        "LX1231"
      ],
      "Mann": [
        "C27112"
      ],
      "Vox": [
        "HSL4103"
      ],
      "Wega": [
        "FAP3210"
      ]
    },
    "aplicacoes": {
      "Ford": [
        [
          "Fiesta / EcoSport / Ka",
          "1.0 / 1.6 Zetec Rocam",
          "2002 - 2014"
        ]
      ]
    }
  },

  "ARL4125": {
    "tipo": "ar",
    "url": "https://catalogo.tecfil.com.br/search/ARL4125",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    "conversoes": {
      "Tecfil": [
        "ARL4125"
      ],
      "Fram": [
        "CA10475"
      ],
      "Mahle": [
        "LX2144"
      ],
      "Mann": [
        "C25008"
      ],
      "Vox": [
        "HSL4125"
      ],
      "Wega": [
        "FAP3218"
      ]
    },
    "aplicacoes": {
      "Ford": [
        [
          "Focus",
          "1.6 / 2.0 16V",
          "2008 - 2013"
        ]
      ]
    }
  },

  "ARL4130": {
    "tipo": "ar",
    "url": "https://catalogo.tecfil.com.br/search/ARL4130",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    "conversoes": {
      "Tecfil": [
        "ARL4130"
      ],
      "Fram": [
        "CA10726"
      ],
      "Mahle": [
        "LX2652"
      ],
      "Mann": [
        "C27006"
      ],
      "Vox": [
        "HSL4130"
      ],
      "Wega": [
        "FAP3222"
      ]
    },
    "aplicacoes": {
      "Ford": [
        [
          "New Fiesta / Ka",
          "1.0 / 1.5 / 1.6 Sigma",
          "2011 - >"
        ]
      ]
    }
  },

  ASR834: {
    tipo: "arSecundario",
    url: "https://catalogo.tecfil.com.br/search/ASR834",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ASR834"],"Authomix":["FAS0834"],"Mann":["CF 1600"],"Mahle":["LXS 273"],"Wega":["WAP-180/S"],"Fram":["CA5626SY"],"Vox":["HS834"],
      "Authomix": ["FAR4103"],
      "Authomix": ["FAR4125"],
      "Authomix": ["FAR4130"],
      "Authomix": ["FAR3280","FAR6080"]
    },
    aplicacoes: null
  },

  ASR842: {
    tipo: "arSecundario",
    url: "https://catalogo.tecfil.com.br/search/ASR842",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ASR842"],"Authomix":["FAS0842"],"Mann":["CF 1830"],"Mahle":["LXS 339"],"Wega":["WAP-185/S"],"Fram":["CA10667SY"],"Vox":["HS842"]},
    aplicacoes: null
  },

  ASR845: {
    tipo: "arSecundario",
    url: "https://catalogo.tecfil.com.br/search/ASR845",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ASR845"],"Authomix":["FAS0845"],"Mann":["CF 1940"],"Mahle":["LXS 350"],"Wega":["WAP-188/S"],"Fram":["CA11234SY"],"Vox":["HS845"]},
    aplicacoes: null
  },

  ARS9870: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS9870",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS9870"],"Authomix":["FAR9870"],"Mann":["C 27 1250"],"Mahle":["LX 1900"],"Wega":["WAP-192"],"Fram":["CA11200"],"Vox":["ARS9870"]},
    aplicacoes: null
  },

  ARS9875: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS9875",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS9875"],"Authomix":["FAR9875"],"Mann":["C 32 1500"],"Mahle":["LX 1905"],"Wega":["WAP-198"],"Fram":["CA11201"],"Vox":["ARS9875"]},
    aplicacoes: null
  },

  ARS9860: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS9860",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS9860"],"Authomix":["FAR9860"],"Mann":["C 34 1500"],"Mahle":["LX 2010"],"Wega":["WAP-200"],"Fram":["CA11601"],"Vox":["ARS9860"]},
    aplicacoes: null
  },

  ARL8891: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL8891",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL8891"],"Authomix":["FAR8891"],"Mann":["C 24 650/1"],"Mahle":["LX 1560"],"Wega":["FAP-4030"],"Fram":["CA9920"],"Vox":["ARL8891"]},
    aplicacoes: null
  },

  ARL8895: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL8895",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL8895"],"Authomix":["FAR8895"],"Mann":["C 30 1500"],"Mahle":["LX 2150"],"Wega":["FAP-4080"],"Fram":["CA10420"],"Vox":["ARL8895"]},
    aplicacoes: null
  },

  ARL8892: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL8892",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL8892"],"Authomix":["FAR8892"],"Mann":["C 27 1250"],"Mahle":["LX 2450"],"Wega":["FAP-4050"],"Fram":["CA11150"],"Vox":["ARL8892"]},
    aplicacoes: null
  },

  ARS9850: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS9850",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS9850"],"Authomix":["FAR9850"],"Mann":["C 31 1275"],"Mahle":["LX 2001"],"Wega":["WAP-195"],"Fram":["CA11501"],"Vox":["ARS9850"]},
    aplicacoes: null
  },

  ARL8480: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL8480",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL8480"],"Authomix":["FAR8480"],"Mann":["C 27 024","C 32 011"],"Mahle":["LX 3911","LX 4377"],"Wega":["FAP-3280"],"Fram":["CA12055","CA11250"],"Vox":["FAR8480"]},
    aplicacoes: null
  },

  ARL5047: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL5047",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL5047"],"Authomix":["FAR5047"],"Mann":["C 42 010","C 25 118/1","C 4292/2 (1.6)","C 25 118/1 (2.0)"],"Mahle":["LX2681"],"Wega":["FAP-9295","FAP-6013","FAP-3286","FAP-9013"],"Fram":["CA11050"],"Vox":["FAR5047"]},
    aplicacoes: null
  },

  ARL9010: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9010",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9010"],"Authomix":["FAR9010"],"Mann":["C 27 030"],"Mahle":["LX1066"],"Wega":["FAP-9010"],"Fram":["CA11036"],"Vox":["FAR9010"]},
    aplicacoes: null
  },

  ARS7101: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS7101",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS7101"],"Authomix":["FAR7101"],"Mann":["C 16 140"],"Mahle":["LX 1621"],"Wega":["JFA-0318"],"Fram":["CA9387"],"Vox":["HD7101"]},
    aplicacoes: null
  },

  ARS5133: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS5133",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS5133"],"Authomix":["FAR5133"],"Mann":["C 22 024"],"Mahle":["LX 3503"],"Wega":["JFA-0327"],"Fram":["CA11402"],"Vox":["HD5133"]},
    aplicacoes: null
  },

  ARL5156: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL5156",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL5156"],"Authomix":["FAR5156"],"Mann":["C 24 045","C 24 038"],"Mahle":["LX 4890","LX 4437"],"Wega":["FAP-7021","FAP-4064"],"Fram":["CA12890","CA12321"],"Vox":["HLP5156"]},
    aplicacoes: null
  },

  ARL7001: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL7001",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL7001"],"Authomix":["FAR7001"],"Mann":["C 24 120"],"Mahle":["LX 824"],"Wega":["FAP-7001"],"Fram":["CA7164"],"Vox":["FAR7001"]},
    aplicacoes: null
  },

  ARL5147: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL5147",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL5147"],"Authomix":["FAR5147"],"Mann":["C 18 004"],"Mahle":["LX 3504"],"Wega":["WR-315/1"],"Fram":["CA11663"],"Vox":["HLP5147"]},
    aplicacoes: null
  },

  ARL5155: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL5155",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL5155"],"Authomix":["FAR5155"],"Mann":["C 28 035"],"Mahle":["LX 3508"],"Wega":["FAP-3305"],"Fram":["CA11725"],"Vox":["HLP5155"]},
    aplicacoes: null
  },

  ARS7107: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS7107",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS7107"],"Authomix":["FAR7107"],"Mann":["C 16 190"],"Mahle":["LX 1916"],"Wega":["JFA-0989"],"Fram":["CA10548"],"Vox":["HD7107"]},
    aplicacoes: null
  },

  ARS5139: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS5139",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS5139"],"Authomix":["FAR5139"],"Mann":["C 16 190/2"],"Mahle":["LX 3505"],"Wega":["JFA-0995"],"Fram":["CA11470"],"Vox":["HD5139"]},
    aplicacoes: null
  },

  ARS5148: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARS5148",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARS5148"],"Authomix":["FAR5148"],"Mann":["C 18 005"],"Mahle":["LX 4412"],"Wega":["JFA-0998"],"Fram":["CA12345"],"Vox":["HD5148"]},
    aplicacoes: null
  },

  ARL9002: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9002",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9002"],"Authomix":["FAR9002"],"Mann":["C 32 131"],"Mahle":["LX 824"],"Wega":["FAP-9002"],"Fram":["CA9918"],"Vox":["ARL9002"]},
    aplicacoes: null
  },

  ARL9005: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9005",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9005"],"Authomix":["FAR9005"],"Mann":["C 32 003"],"Mahle":["LX 2795"],"Wega":["FAP-9005"],"Fram":["CA11130"],"Vox":["FAR9005"]},
    aplicacoes: null
  },

  ARL9020: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9020",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9020"],"Authomix":["FAR9020"],"Mann":["C 27 036"],"Mahle":["LX 4520"],"Wega":["FAP-9020"],"Fram":["CA12400"],"Vox":["ARL9020"]},
    aplicacoes: null
  },

  ARL9015: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9015",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9015"],"Authomix":["FAR9015"],"Mann":["C 30 850/2"],"Mahle":["LX 1680"],"Wega":["FAP-5015"],"Fram":["CA10291"],"Vox":["FAR9015"]},
    aplicacoes: null
  },

  ARL5152: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL5152",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL5152"],"Authomix":["FAR5152"],"Mann":["C 33 018"],"Mahle":["LX 4510"],"Wega":["FAP-9065"],"Fram":["CA12450"],"Vox":["HLP5152"]},
    aplicacoes: null
  },

  ARL9012: {
    tipo: "ar",
    url: "https://catalogo.tecfil.com.br/search/ARL9012",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["ARL9012"],"Authomix":["FAR9012"],"Mann":["C 25 140"],"Mahle":["LX 2020"],"Wega":["FAP-5012"],"Fram":["CA10291"],"Vox":["ARL9012"]},
    aplicacoes: null
  }

};
