/* Filtros de combustível (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Campos: tipo, url, especificacoes, conversoes, aplicacoes.
   aplicacoes: { "Montadora": [["Veículo / modelo", "Motor", "Ano"], ...] } ou null. */
export const filtrosCombustivel = {

  "FCI778": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/fci778/produto/1022",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0778"], "Japanparts": ["FCBR75S"], "Mahle": ["KL1061"],
      "Tecfil": ["FCI778"], "Toyota": ["2330030450"], "Turbo Filtros": ["TBC778"],
      "Vox": ["FBI778"], "Wega": ["JFC283"]
    },
    aplicacoes: {
      "Toyota": [
        ["Hilux Turbo Diesel - (CD / CS) - Automático / Mecânico", "2.5 16V 102cv", "12/2011"],
        ["- 2015 Diesel", "Hilux", "Turbo Diesel - (SW4 / SRV / CD /CS) - Automático / Mecânico"],
        ["3.0 16V 163cv 12/2011", "- 2015", "Diesel"],
        ["Hilux SW4 4x4 - Turbo", "3.0 - 16V - 171CV", "2014"]
      ]
    }
  },
   
     "PSC491": {
    tipo: "combustivel",
    especificacoes: { altura: 128, diametroExterno: 109.5, rosca: "1\\", elemento: "Papel", observacao: "APLICADO COM OS FILTROS: PSD530, PSD960, PSD970" },
    conversoes: {
      "Alliance": ["A40009002510097"], "Authomix": ["FCO0491"], "Bosch": ["0986450723"],
      "Delkraft": ["DSC732"], "Delphi": ["HDF416"], "Donaldson": ["P502487"],
      "FAM": ["FC541"], "Fleetguard": ["FF5934"], "Fram": ["P10607"],
      "Japanparts": ["FCBR93S"], "KSPG": ["50013550"], "Mahle": ["KC437"],
      "Mann": ["WK1124"], "MWM": ["905411510023"], "Racor": ["RC347AQ"],
      "Sakura": ["FC31040"], "Tecfil": ["PSC491"], "Turbo Filtros": ["TBC491"],
      "Unifilter": ["USC347AQ"], "Volkswagen": ["2R0127177A","2RD127491P2"], "Vox": ["FBD491"],
      "Vox Antigo": ["FBD2625"], "Wega": ["FCD2225"], "WIX": ["WF10254"]
    },
    aplicacoes: {
      "Volkswagen": [
        ["17210 6.10 TCA","MWM","05/02 - >"],
        ["13150 4.10TCA","MWM","01/00 - >"],
        ["15180EOD","4.3 L 8V 4.10 TB","2003 - 2006"],
        ["16210CO","4.3 L 8V 4.10 TB","2001 - 2005"],
        ["17210EOD","MWM 6.10 TCA","09/2001 - >"],
        ["23210 6.10 TCA","MWM","05/02 - >"],
        ["5140OD","4.8 L 8V Acteon 4.12 TCE","2004 - 2006"],
        ["6140/ 6160 D 4.10","4.3 L 8V SOHV L4","2002 - 2005"],
        ["690P D 4.10","4.3 L 8V SOHV L4","2000 - 2006"],
        ["7110 4.10 TCA","MWM","01/2002 - >"],
        ["8120 4.10 TCA","MWM","01/2000 - 01/2005"],
        ["8120OD","4.8 L 8V Acteon 4.12 TCE","2004 - >"],
        ["8150 4.10 TCA","MWM","01/2000 - 01/2005"]
      ]
    }
  },

  "GI04/7": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/gi04/7/produto/8",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347706", "25FC0225"], "Alfa Romeo": ["46523087", "60811822", "60811904", "60812738", "60813871"], "Audi": ["6X0201511", "6X0201511B"],
      "Authomix": ["FCO0047"], "Blue Print": ["ADV182321"], "Bosch": ["0986BF0018", "F5273"],
      "Chery": ["T111117110N"], "Controil": ["CLFF00002"], "Delkraft": ["DAG84"],
      "Delphi": ["EFP100"], "Fiat": ["14499301", "51714397", "51977028", "52162681", "52162685", "53489525", "60806811", "60813741", "7527873", "7787063"], "Filtran": ["206517"],
      "Ford": ["AM559155AA", "AM559155AB"], "Fram": ["G10225F", "G9890F"], "General Motors": ["25160729", "92076590", "93228366", "93306364", "93370527", "93387904"],
      "GM": ["51720700", "93316245"], "Holden": ["92059409"], "Honda": ["16900TJ0M51"],
      "Interfil": ["FGI12"], "Isuzu": ["8251210740"], "Jaguar": ["1X439155A", "C2S2768"],
      "Japanparts": ["FCBR14S", "FCW01S"], "Kayser": ["AK10OV"], "KSPG": ["50013411"],
      "Magneti Marelli": ["FI04/7"], "Mahle": ["KL1080", "KL1179", "KL1204", "KL1214", "KL466", "KL582"], "Mann": ["WK512", "WK58", "WK58/1", "WK58/5", "WK58/6"],
      "Millard": ["MF618"], "Mitsubishi": ["CA130085"], "Motorcraft": ["G3MJ/9155/BA/"],
      "Motrio": ["8660089651"], "Opel": ["0818568S1", "818508", "818510", "818514", "818516", "818568"], "Renault": ["7700820375"],
      "Saab": ["22666258"], "Schuck": ["SK101"], "Tecfil": ["GI04/7"],
      "Toyota": ["233000D100"], "Turbo Filtros": ["TCI04"], "Vauxhall": ["VFF818"],
      "Volkswagen": ["6X0201511A", "jzw201511"], "Vox": ["FS04/7"], "Vox Antigo": ["FS2448/1"],
      "Wega": ["FCI1660", "FCI1694", "FCI1698"], "WIX": ["W36225BRP", "WF10273", "WF10295"]
    },
    aplicacoes: {
      "Alfa Romeo": [
        ["AR 145 -", "1.8 e 2.0 16V", "01/1996"],
        ["- 12/1999 Gasolina", "CHERY", "Tiggo 7 Pro"],
        ["1.6 L 16V DOHC L4 2022", "- >", "Gasolina"],
        ["Tiggo 7 Pro Hybrid 1.5 L 16V DOHC L4", "2022", "- >"],
        ["Tiggo 8 Turbo - (TXS/GDI/DCT) - gasolina / automático", "1.6 TGDi 16V 187cv", "2020"]
      ],
      "- >": [
        ["Gasolina Tiggo 8 Pro Hybrid", "1.5 317cv", "2022"],
        ["Híbrido DAEWOO", "Lanos", "1.6 16V"],
        ["01/1997 - 12/2002", "Gasolina", "Leganza"],
        ["2.0 16V 01/1998", "- 12/2002", "Gasolina"],
        ["Nubira 1.6 8V", "01/1998", "- 12/1999"],
        ["Nubira Space Wagon", "2.0 8V", "01/1998"],
        ["- 12/2002 Gasolina", "Prince", "2.0 16V"],
        ["01/1994 - 12/1997", "Gasolina", "S. Salon"],
        ["2.0 16V 01/1994", "- 12/1997", "Gasolina"],
        ["Flex Argo", "Drive", "1.3"],
        ["2017 - >", "Flex", "Argo"],
        ["E-torq 1.8", "2017", "- >"],
        ["Brava ELX / SX", "1.6 16V", "1999"],
        ["- 2003 Gasolina", "Brava", "HGT"],
        ["1.8 16V 2000", "- 2002", "Gasolina"],
        ["Bravo E-torq", "1.8 16V", "2010"],
        ["- 2017 Flex", "Bravo", "1.4 T-JET"],
        ["2011 - 2017", "Gasolina", "Cinquecento (Fiat 500)"],
        ["EVO (Cult Dualogic / Cult) 1.4 8V", "08/2011", "- >"],
        ["Cinquecento (Fiat 500) MULTIAIR - (Sport Air / Cabrio Auto)", "1.4 16V", "10/2012"],
        ["Gasolina/Flex Cronos", "(DRIVE / GSR) - automático / mecânico", "1.3 Firefly 103cv"],
        ["2017 - >", "Flex", "Cronos"],
        ["(Precision) - automático / mecânico 1.8 E-Torq 135cv", "2017", "- >"],
        ["Cronos Drive (Manual)", "1.0 Firefly Aspirado", "2022"],
        ["Flex Doblo", "Adventure / ELX / HLX Cargo", "1.8 8V"],
        ["2006 - 2010", "Flex", "Doblo"],
        ["E-torq 1.8 8V e 16V", "2010", "- >"],
        ["Doblo Attractive / ELX", "1.4 8V", "11/2009"],
        ["- 2015 Flex", "Duna", "Trans."],
        ["1.5 8V 1994", "- 1994", "Gasolina"],
        ["Duna I.E", "1.5 8V", "1995"],
        ["- 1995 Gasolina", "Fastback", "Turbo (T270 / Limited Edition Abarth) - automático"],
        ["1.3 185cv 2022", "- >", "Flex"],
        ["Fastback Turbo (T200 / Audace / Impetus) - automático", "1.0 130cv", "2022"]
      ],
      "Fiat": [
        ["Argo Drive", "1.0 3cil", "2017"]
      ]
    }
  },

  "GI50/7": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/gi50/7/produto/46",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "ACDelco": ["19347708", "FS9002E"], "Authomix": ["FCO0507"], "Blue Print": ["ADN12324"],
      "Bosch": ["0986BF0024"], "Chery": ["S111117110N"], "Citroen": ["156785", "156793", "1567A5", "1567C1", "1567C6", "1635P5", "9625342280", "9673849", "E145003", "E145055"],
      "Controil": ["CLFF00003"], "Dacia (renault Group)": ["226755893R", "6001543138", "6001546326", "7700845961", "8671019073"], "Delkraft": ["DAG97"],
      "Delphi": ["EFP105"], "Febi Bilstein": ["32399"], "Fiat": ["9622617880", "9623266380", "9647867780", "K9622617880", "K9623266380", "K9647867780"],
      "Filtran": ["206516"], "Fram": ["G10230F", "G10583F"], "General Motors": ["91159804", "91559804"],
      "Gonher": ["GG291"], "Hengst": ["H112WK"], "Hyundai": ["1SO18BR005", "319801S000"],
      "Interfil": ["FGI190", "FGI318"], "Jakoparts": ["J1331043"], "Japanparts": ["FCBR17S", "FCBR79S"],
      "Kamoka": ["F300501"], "Kayser": ["AK10OP"], "Kia Motors": ["319801Y700N"],
      "Kolbenschmidt": ["623FP"], "KSPG": ["50013623"], "Mahle": ["KL583"],
      "Mann": ["WK58/3", "WK6031"], "Maxgear": ["PF2061"], "Mercedes Benz": ["4534700400", "A4534700400"],
      "Millard": ["MF5857"], "Motorcraft": ["GAMJ/9155/AA/"], "Motrio": ["8660089509"],
      "Nissan": ["1640000QAA", "16400JD51A", "16400ZT50A"], "Opel": ["3558252", "4408101"], "Peugeot": ["15670", "156781", "156787", "156793", "1567C2", "1567C6", "1567C8", "1567E1", "1567K2", "8647867780", "9659458480", "E145004", "E145064"],
      "Purflux": ["EP202"], "Renault": ["15270370579", "6000591768", "7700825495", "7700845973", "7701068107", "8200386495", "8671002344", "8671017076"], "Ridex": ["9F0009"],
      "Rover": ["FE4001"], "Schuck": ["SK111"], "Seineca": ["SFF9009"],
      "Seineca Antigo": ["SEI0619"], "Shuck": ["SK111"], "Smart": ["3414V002", "3414V003", "Q0003414V002", "Q0003414V003", "Q0003414V003000000"],
      "Stark": ["SKFF0870008"], "Tecfil": ["GI50/7"], "Topran": ["720937"],
      "Toyota": ["SU001B1763"], "Trucktec": ["238061"], "Turbo Filtros": ["TCI50"],
      "Valeo": ["587001"], "Volkswagen": ["1SB201511", "2QB201511", "34911279", "6QE201511C"], "Vox": ["FS50/7"],
      "Vox Antigo": ["FS2009/2"], "Wega": ["FCI1101C", "FCI1615", "FCI1630"], "WIX": ["W36165BRP", "WF36165"]
    },
    aplicacoes: {
      "Audi": [
        ["A3 (Attraction/ Ambition)", "1.4 16V TFSI - 150cv", "2016"]
      ],
      "- >": [
        ["Flex CHERY", "QQ", "1.1L Acteco"],
        ["01/2010 - 2015", "Gasolina", "CITROEN"],
        ["Air Cross 1.6 16V", "2010", "- >"],
        ["Basalt Turbo Feel / Shine / First Edition", "1.0 3 Cil 130 cv", "2024"],
        ["Flex Basalt", "Feel / MT5", "1.0 3cil. 75cv"],
        ["2024 - >", "Flex", "Berlingo"],
        ["1.6 16V - 122 cv 2018", "- >", "Flex"],
        ["Berlingo XU7JP", "1.8i", "05/1998"],
        ["- 2004 Gasolina", "Berlingo", "1.6 16V"],
        ["2000 - 2002", "Gasolina", "Berlingo"],
        ["TU5 JP4 1.6", "01/03", "- 2007"],
        ["C3 GLX / EXCLUSIVE", "1.4 e 1.6", "2001"],
        ["- 2013 Gasolina", "C3", "GLX / EXCLUSIVE"],
        ["1.4 e 1.6 2001", "- 2013", "Gasolina"],
        ["C3 (Feel / Feel Parck / First Edition) - automático / manual", "1.6 16V 113cv", "2023"],
        ["Flex C3", "GLX / EXCLUSIVE", "1.4 e 1.6"],
        ["2006 - 2013", "Flex", "C3"],
        ["Picasso - (GL / GLX) - Mecânico 1.5 8V 113cv", "2012", "- 2016"],
        ["C3 GLX / EXCLUSIVE", "1.4 e 1.6", "2006"],
        ["- 2013 Flex", "C3", "(Origine / Attraction)"],
        ["1.2 2016", "- >", "Flex"],
        ["C3 (Feel /Live / Live Pack / First Edition) - manual", "1.0 3cil. 75cv", "2023"],
        ["Flex C3", "Aircross Feel / Pack / Shine / T200", "1.0 3 Cil 130 cv"],
        ["2024 - >", "Flex", "C4"],
        ["Flex C4", "(Pallas / GLX)", "2.0 16V"],
        ["10/2008 - 07/2013", "Flex", "C4"],
        ["Gasolina C4", "Cactus", "1.6 16V Turbo"],
        ["2018 - >", "Flex", "C4 Grand Picasso"],
        ["(Exclusive) - automático 2.0 16V 151cv", "2009", "- >"],
        ["C4 Picasso 2.0 16V 151cv", "2009", "- >"],
        ["C5 Exclusive", "3.0 V6 24V", "2005"],
        ["- 2007 Gasolina", "C5", "(Exclusive / Break) gas. Mec."],
        ["3.0i 24V 204cv 2001", "- 2004", "Gasolina"],
        ["C5 EXCLUSIVE", "2.0 16V e 3.0 24V", "2001"],
        ["- 2006 Gasolina", "C5", "Exclusive / Break / Tourer"],
        ["2.0i 16V 2005", "- 2012", "Gasolina"]
      ],
      "Glx": [
        ["1.6 16V 2009", "- 2015", "Flex"],
        ["C4 Cactus", "1.6 16V", "2018"]
      ],
      "Vtr / Pallas": [
        ["2.0 16V 01/2007", "- 2009", "Gasolina"],
        ["C4 Lounge - THP", "1.6 16V 165cv", "2014"]
      ]
    }
  },

    "PC949": {
    tipo: "combustivel",
    especificacoes: { altura: 77.5, diametroExterno: 83.3, rosca: "Não possui", elemento: "Papel", observacao: "SUBSTITUI OS FILTROS PSL55, PSL78, PSL152 E PSL166" },
    conversoes: {
      "Authomix": ["FCO0949"], "Donaldson": ["P505973"], "Fleetguard": ["FF5764"],
      "Fram": ["C10353","C10353ECO"], "GM": ["19266444","5876150170"], "Gonher": ["GG2341"],
      "Isuzu": ["5876150240"], "Japanparts": ["FC200S"], "Mahle": ["KX268D"],
      "Mann": ["PU835X"], "Millard": ["MF16262","MF16263"], "Sakura": ["F1111"],
      "Seineca": ["SFD9016"], "Tecfil": ["PC949"], "Toyota": ["233000L020","2339000000000000","233900E010","233900L010","233900L041","23390YZZA1"],
      "Turbo Filtros": ["TC949"], "Vox": ["FN949"], "Wega": ["JFC207/2"],
      "WIX": ["WF8429"]
    },
    aplicacoes: {
      "Mitsubishi": [
        ["L200 DI-D 2.4 16V 190 CV","2.4","2016 - >"],
        ["L200 Triton","3.2 TDI","2012 - 2019"],
        ["L200 Triton Sport diesel - (CD/GLS) 2.4 16V 4 CIL.190CV","2.4","2017 - >"]
      ],
      "Toyota": [
        ["Hilux D/C DX AC 4X2 e 4X4","2.5 16V","2005 - 12/2010"],
        ["Hilux D4-D CD / SR / SRV / SW4 / 4x2/ 4x4 / Aut","3.0 16V","01/2006 - 12/2010"],
        ["Hilux CDSRV TBI","3.0 16V","2006 - 12/2010"],
        ["Hilux D/C SRV TBI","3.0 16V","2005 - 12/2010"],
        ["Hilux D/C SRV 4x4","3.0 16V","2005 - 12/2010"],
        ["Hilux SW NEW AT","3.0 16V","2005 - 10/2010"],
        ["Hilux SW NEM MT","3.0 16V","2005 - 10/2010"],
        ["Hilux CDSRV","3.0 16V","2006 - 12/2010"]
      ]
    }
  },

  "PC953": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pc953/produto/1377",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0953"], "Fram": ["CS12054"], "Japanparts": ["FCBR109S"],
      "Mahle": ["KX570", "KX570D"], "Mann": ["PU9023z"], "Millard": ["MF26255"],
      "Tecfil": ["PC953"], "Toyota": ["233900L070"], "Turbo Filtros": ["TC070"],
      "Vox": ["FN953"], "Wega": ["JFC207/3"]
    },
    aplicacoes: {
      "Toyota": [
        ["Hiace Turbo DX Autom.", "2.8 16V 174cv", "2025"]
      ],
      "- >": [
        ["Diesel Hilux", "TDI Turbo (SW4) - automático", "2.8 16V 177cv"],
        ["2016 - >", "Diesel", "Hilux"],
        ["(CD/SRX/SR/GR-S/4x4) - automático - 2022 > 2.8 16V 204cv", "2022", "- >"],
        ["Hilux TDI Turbo (CD / SR) - automático", "2.8 16V 177cv", "2016"],
        ["Diesel Hilux SW4", "SRX / Diamond / GR-S (Turbo) Automática", "2.8 16V 204cv"]
      ]
    }
  },

  "PC954": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pc954/produto/2318",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Japanparts": ["FCBR256S"], "Tecfil": ["PC954"], "Toyota": ["233900E011"],
      "Turbo Filtros": ["TBC954"], "Wega": ["JFC217"]
    },
    aplicacoes: {
      "Toyota": [
        ["Hilux (CD/SRX/SR/GR-S/4x4) - automático - 2022 >", "2.8 16V 204cv", "2022"]
      ],
      "- >": [
        ["Diesel Hilux", "TDI Turbo (SW4) - automático", "2.8 16V 177cv"],
        ["2016 - >", "Diesel", "Hilux"],
        ["TDI Turbo (CD / SR) - automático 2.8 16V 177cv", "2016", "- >"],
        ["Hilux SW4 SRX / Diamond / GR-S (Turbo) Automática", "2.8 16V 204cv", "2022"]
      ]
    }
  },

  "PEC3022": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3022/produto/367",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO3022"], "Baldwin": ["PF7735"], "Bosch": ["0986BF0201"],
      "Controil": ["CHFO00001"], "DAF": ["0915010"], "Delkraft": ["DC117"],
      "Delphi": ["HDF529"], "Donaldson": ["P550632"], "Donsson": ["G609"],
      "Fleetguard": ["FF5380", "FF5385"], "Fram": ["C8826", "C9262"], "Franig": ["HCP9262"],
      "Gonher": ["G1046"], "Hengst": ["E52KPD36"], "Japanparts": ["FCECO003"],
      "Js Asakashi": ["FE31002"], "KSPG": ["50013468"], "Luberfiner": ["L8701F"],
      "Mahle": ["KX67", "KX67/2D", "KX671", "KX671D"], "Mann": ["PU1046/1x", "PU1046X"], "Master Parts": ["MM100345"],
      "Mercedes Benz": ["901251", "901551", "9060900051", "9060920105", "9060920205", "9060920305", "A0000901551", "A9060920305"], "Parker": ["REC672", "RI672"], "Partmo": ["PP7735"],
      "Sakura": ["EF2636"], "Tecfil": ["PEC3022"], "Trp": ["915010"],
      "Turbo Filtros": ["TC30211ECO"], "Unifilter": ["UEF1046"], "Vox": ["CE3022"],
      "Wega": ["FCD0768"], "WIX": ["WF33634"], "ZF": ["0070131213"]
    },
    aplicacoes: {
      "Atlas-Copco": [
        ["XAHS 236 MDN OM904LA", "-", "CLAAS"],
        ["MEGA 350 / 360 OM906LA", "2003", "- 2003"],
        ["MEGA II 350 / 360 OM906LA", "2003", "- 2003"],
        ["TUCANO 320 / 330 / 340 / 430 / 440 OM906LA", "2007", "- 2007"]
      ],
      "Mercedes Benz": [
        ["1215C OM 904 LA", "01/1998", "- >"],
        ["1218E OM 904 LA", "01/2001", "- 06/2007"],
        ["1218E OM 904 LA", "07/2007", "- >"],
        ["1318 OM 904 LA", "12/2004", "- >"],
        ["1318 OM 904 LA", "01/2003", "- 11/2004"],
        ["1418L/EL OM 904 LA", "01/2002", "- >"],
        ["1419 Atego 185cv", "OM 924 LA", "2012"]
      ],
      "- >": [
        ["Diesel 2726", "Euro 3", "OM 906"],
        ["2011 - >", "Diesel", "712C"],
        ["OM 904 LA 1998", "- 12/2005", "Diesel"],
        ["912C OM 904 LA", "2000", "- >"],
        ["914C OM 904 LA", "1998", "- 12/2004"],
        ["915E OM 904 LA", "1998", "- >"],
        ["ACCELO 915C OM 904 LA", "4.2 L 8V SOHV L4", "01/2002"]
      ],
      "-": [
        ["1618M OM 904 LA", "1998", "- >"],
        ["1620L OM 906 LA (eletrônico)", "11/06", "- 11/2011"],
        ["1620L OM 906 LA", "01/98", "- 10/06"],
        ["1622L OM 924 LA", "2001", "- >"],
        ["1624L OM 906 LA", "01/2007", "- >"],
        ["1718M OM 904 LA", "12/2004", "- >"],
        ["1718M (4.3 L 12V SOHV L4)", "OM 904 LA", "2001"],
        ["- 2005 -", "1718M", "OM 904 LA"],
        ["01/1998 - >", "Diesel", "1723L"],
        ["OM 906 LA 1998", "- >", "Diesel"],
        ["1728 OM 906 LA", "1998", "- >"],
        ["2423BK OM 906 LA", "2000", "- >"],
        ["2428 OM 906 LA", "2001", "- >"],
        ["2726 Euro 3", "OM 906", "2011"]
      ]
    }
  },

  "PEC3023": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3023/produto/67",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO3023"], "Bosch": ["0986BF0239"], "Citroen": ["190698"],
      "Delkraft": ["DC136"], "Fiat": ["0077362340", "77363600", "77365902"], "Fil Filter": ["KFE1460", "KFE1460V"],
      "Fram": ["C10705"], "GM": ["813569", "93181377"], "Hengst": ["E83KPD140"],
      "Inpeca": ["SPE0459"], "Japanparts": ["FCECO016"], "Mahle": ["KX208D"],
      "Mann": ["PU723X"], "Master Parts": ["MM100514"], "Peugeot": ["190697"],
      "Tecfil": ["PEC3023"], "Turbo Filtros": ["TC30212ECO"], "U.f.i.": ["60H2O00"],
      "Vox": ["CE3023"], "Wega": ["FCD0771", "FCD0771/1", "FCD0771/2"], "WIX": ["WF8366"]
    },
    aplicacoes: {
      "Citroen": [
        ["Jumper HDi 127", "2.8", "01/2005"]
      ],
      "- >": [
        ["Diesel Jumper", "JTD", "2.3"],
        ["01/2009 - >", "Diesel", "FIAT"],
        ["Ducato JTD", "3.0 16V", "07/2006"],
        ["- 05/2011 Diesel", "Ducato", "Turbo JTD"],
        ["2.8 8V 01/2006", "- >", "Diesel"],
        ["Ducato MultiJet", "2.3", "01/2009"],
        ["- 2017 Diesel", "PEUGEOT", "Boxer"],
        ["2.8 8V 01/2005", "- 12/2009", "Diesel"],
        ["Boxer 2.3", "01/2009", "- >"]
      ]
    }
  },

  "PEC3029": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3029/produto/874",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO3029"], "Fram": ["C11723"], "General Motors": ["52100212"],
      "GM": ["94771044"], "Japanparts": ["FCBR39S", "FCBR72/2S"], "Mahle": ["KX444", "KX444D"],
      "Mann": ["PU7020z"], "Sakura": ["EF65030"], "Tecfil": ["PEC3029"],
      "Turbo Filtros": ["TC3029ECO"], "Vox": ["CE3029"], "Wega": ["FCD0777"]
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

  "PEC3043": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3043/produto/2271",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Eurorepar": ["1643096080"], "Hengst": ["E460KP"], "Mann": ["PU7015"],
      "Peugeot": ["1614111980"], "Tecfil": ["PEC3043"], "Vox": ["CE3043"],
      "Wega": ["FCD0794"],
      "Authomix": ["FCO3043"],
      "Mahle": ["KX 338/26D"],
      "Fram": ["C11666"]
    },
    aplicacoes: {
      "Citroen": [
        ["Jumper (Furgão / Minibus)", "2.0 BlueHDi 130cv", "2019"]
      ],
      "- >": [
        ["Diesel PEUGEOT", "Boxer", "(Furgão Business)"],
        ["2.0 122cv Turbo 2019", "- >", "Diesel"]
      ]
    }
  },

  "PEC3048": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3048/produto/2279",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Hengst": ["E480KPD430"], "IVECO": ["5802050393"], "Mann": ["PU7017Z"],
      "Tecfil": ["PEC3048"], "Vox": ["PEC3048"], "Wega": ["FCD0806"],
      "Authomix": ["FCO3048"],
      "Mahle": ["KX 540D"],
      "Fram": ["C12100"]
    },
    aplicacoes: {
      "IVECO": [
        ["Daily 35-160", "2.9 L 16V DOHC L4", "2023"]
      ],
      "- >": [
        ["Diesel DAILY 30.130", "2.3 FPT 130cv", "2020"]
      ],
      "-": [
        ["DAILY 35.150 3.0 FPT 146cv", "2020", "- >"],
        ["DAILY 45.170 3.0 FPT 170cv", "2020", "- >"],
        ["DAILY 55.170 3.0 FPT 170cv", "2020", "- >"],
        ["DAILY 65.170 3.0 FPT 170cv", "2020", "- >"]
      ]
    }
  },

  "PEC3050": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3050/produto/1978",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Citroen": ["9801366680"], "Fram": ["C11781ECO"], "Hengst": ["E444KPD308"],
      "Japanparts": ["FCBR216S"], "Mahle": ["KX420D"], "Sakura": ["EF11010"],
      "Tecfil": ["PEC3050"], "Turbo Filtros": ["TBC0727"], "Wega": ["FCD0727"],
      "Authomix": ["FCO3050"],
      "Mann": ["PU 7010 z"],
      "Vox": ["CE3050"]
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

  "PEC3055": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/pec3055/produto/1576",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "* Exclusivo Exportação.": [], "-": [], ".": [],
      "Altura:": ["118"], "Baldwin": ["PF9919", "PEC3055"], "Caixa:": ["06"],
      "Combustível": [], "Compartilhar produto": [], "Código:": ["PEC3055"],
      "Elemento:": [], "Especificações técnicas": ["Dimensões (Altura x Ext. Comp x Int. Larg x Rosca):", "118 x 95,5 x - x -"], "Fechar": [],
      "Fleetguard": ["FS36243", "PEC3055"], "Função:": [], "Isuzu": ["8982035990", "PEC3055"],
      "Js Asakashi": ["FE0023", "PEC3055"], "Millard": ["MF28275", "PEC3055"], "Nº Conversão": [],
      "Não": [], "Observação:": [], "Papel": [],
      "Partmo": ["PP28970", "Ao continuar navegando no Catálogo, você concorda com a nossa"], "Peso Bruto:": ["0,2203"], "Peso Líquido:": ["0,1817"],
      "Política de Privacidade": [], "Sakura": ["EF1509", "PEC3055"], "Tecfil": ["PEC3055"],
      "Válvula Alívio:": [], "Válvula Anti-retorno:": [], "Ø Ext. Comp.:": ["95.5"],
      "Ø Int. Larg.:": [], "Ø Rosca:": [], "​": ["PEC3055"],
      "Authomix": ["FCO3055"],
      "Mann": ["PU 9022 z","PU 8028"],
      "Mahle": ["KX 580D","KX 595D"],
      "Wega": ["FCD-2174","FCD-0798"],
      "Fram": ["C12895","C12450"],
      "Vox": ["CE3055"]
    },
    aplicacoes: null
  },

  "PSC71": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc71/produto/1381",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Baldwin": ["BF7965"], "Donaldson": ["P765325"], "Fleetguard": ["FF5794"],
      "Hengst": ["H245WK"], "Jcb": ["32007057", "32007155", "32007394"], "Tecfil": ["PSC71"],
      "Turbo Filtros": ["TBC7155i"], "Wega": ["FCD2087"],
      "Authomix": ["FCO0071"],
      "Mann": ["WK 842/2"],
      "Mahle": ["KC 18"],
      "Fram": ["P926"],
      "Vox": ["PSC71"]
    },
    aplicacoes: {
      "Jcb": [
        ["3CX JCB 444", "-", "3CX"]
      ],
      "Eco": [
        ["JCB 444T -", "3CX", "Retroescavadeiras"],
        ["Perkins 1004-4 -", "4CX", "Retroescavadeira - 100cv"],
        ["JCB 444TA 2004", "- >", "Diesel"],
        ["535-125 TELEBAT", "JCB 444", "-"],
        ["535-140 TELEBAT", "-", "-"]
      ]
    }
  },

  "PSC72": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc72/produto/143",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Abg": ["1160243"], "ACDelco": ["01FBD004", "TP961", "XD25"], "AGCO": ["1174423", "312795397", "835331343V", "CM3931063"],
      "Agrale": ["6005001063000", "7006001098001", "7006011810001", "9451080065"], "Ahlmann": ["Q1H4117"], "Akerman": ["16496", "23121"],
      "Alco": ["SP821", "SP871"], "Alliance": ["A99909001510097"], "Allis-Chalmers": ["61142392", "61142397", "61674455", "99100083"],
      "American Motors Corporation": ["F10137", "FC30010", "FI18280", "SFF0723", "SFS9195"], "American Parts": ["2069", "95195", "95358", "95358MP"], "Atlas Weyhausen": ["371291", "4613418"],
      "Atlas-Copco": ["11624300", "132360026", "2914812100", "362972", "441923", "5112240007", "9709000520", "9709043112", "97100406", "9712033700", "9721028200", "97210337", "9805007500", "9807041500", "9808001500"], "Authomix": ["FCO0722"], "Auwaerter": ["983614", "983614109"],
      "B R Lee Industries": ["34882"], "Baldwin": ["BF7608", "BF788"], "Barko Hydraulics": ["53501141"],
      "Belle Enegineering": ["220048"], "Benati": ["1829101"], "Bergerat Monnoyeur": ["E6727"],
      "Blaw Knox": ["54517693", "58831686", "9014000200"], "Bmc": ["9P909739"], "BMW": ["13321332756"],
      "Bob Cat": ["1992367"], "Bomag": ["05711729", "05711730", "05712817", "6711730"], "Bosch": ["0986450519", "1457434154", "9451080065", "9455080005", "F000KRN723"],
      "Bosch-Rexroth": ["1457431019", "1457434019", "1457434050", "1457434055", "1457434057", "1457434068", "1457434072", "1457434120", "1457434120889", "1457434165", "1457434190", "1457434432", "1457434908", "9455160352", "BFE050", "F026402059", "N4050", "N4154"], "Carraro": ["41022"], "Case": ["1160243894117", "150526", "150564", "150588", "1821124", "3032750R1", "3374810R1", "50588", "823684", "82PF9N327AA", "8888682", "A046046", "A774702", "A780X9150AA", "E066013", "E067284", "E097454", "E156171", "E159351", "E5HN9N327A", "G0150526", "G0150564", "G0150588", "G150564", "GO150564", "J931063", "P105564", "P150564", "V37545"],
      "Caterpillar": ["5W3394"], "CAV": ["494VOLVO", "7111/494VOLVO"], "Controil": ["CHFF00005"],
      "Cross": ["F66/1"], "Cummins": ["210970", "3903640", "4440193", "FF5052"], "Delkraft": ["DSC701"],
      "Delphi": ["HDF494"], "Deutz": ["01160243", "1180597"], "Donaldson": ["FFP553004", "P172655", "P172676", "P172892", "P553004"],
      "Donsson": ["GS035A"], "Dynapac": ["1160243", "480916"], "Engesa": ["210970"],
      "FAM": ["FC051"], "Fiat": ["7110301", "7122737"], "Fiat Allis": ["456005", "75204003", "75208272"],
      "Fil Filter": ["ZP3367F"], "Fleetguard": ["FF42000", "FF5052", "FF5074", "FF5258", "FF5318"], "Ford": ["3903640", "BF8T9155DA", "E7HN9N327AA"],
      "Fram": ["P4102", "P4182"], "General Motors": ["9307815"], "GM": ["7984867", "9307815"],
      "Gonher": ["GP1122"], "Hengst": ["H60WK07"], "Hidrafil": ["560002"],
      "Himoinsa": ["3046232"], "Ihc": ["161624"], "Ingersoll Rand": ["1160243"],
      "Inpeca": ["J403E", "J510E", "J970E", "SB0980", "SCB0980"], "Irlemp": ["PERI204", "PERI264", "PERI329"], "Japanparts": ["FCBR69S"],
      "Js Asakashi": ["FC0036"], "Komatsu": ["228911", "6732716111", "6732716112"], "KS": ["079FS"],
      "KSPG": ["50013079"], "Liebherr": ["3903640", "7021295"], "Liugong": ["CX0708"],
      "Logan": ["FV071US", "FV099US", "FV100US"], "Lombardini": ["21755046"], "Luberfiner": ["FP586F"],
      "Lucas": ["HDF494"], "Maco-Meudon": ["400065", "430065", "527265"], "Mafersa": ["17603450162"],
      "Mahle": ["KC24"], "Mann": ["WK723", "WK723/1"], "Master Parts": ["MM100320"],
      "Maxion": ["210970"], "Millard": ["MF41030"], "Motorcraft": ["MB3X/9155/AA/"],
      "Muller": ["50060081", "69304102", "EFC3"], "MWM": ["156640300008", "905411510016", "9451080065", "MASTER0050"], "Nasa": ["NS1026"],
      "New Holland": ["KE7HN9N327AA"], "Parker": ["RC344"], "Partmo": ["A33358"],
      "Puriar": ["PC7205"], "Purolator": ["F1063"], "Racor": ["RC329"],
      "Randon": ["210970", "J903640C"], "Renault": ["5000814227"], "Renault Trucks": ["5021107666"],
      "Roma": ["CBOS065", "CBOS3640"], "Santal": ["210970"], "Savara": ["92803900", "92803911", "92803917", "SN039", "SN509"],
      "Scania": ["1401462", "181646", "210970", "326065", "364624"], "Seineca Antigo": ["SEI2616"], "Sf Filter": ["SK3600"],
      "Steyer": ["2203710/0"], "Tamrock": ["81849359", "87187509"], "Tecfil": ["PSC72/2", "PSC72"],
      "Tema Terra": ["210975"], "Terex": ["210970"], "Trp": ["915013"],
      "Turbo Filtros": ["TB181"], "Tutela": ["CB204"], "Valmet": ["20331343", "81028800", "835331343"],
      "VME": ["1457434062", "4111378"], "Volkswagen": ["2RH127177", "2RK127177A", "3903640", "9451080065", "TAE127177", "TN4127177", "TN4127177A"], "Volvo": ["11706667", "2416725", "2430049", "38251336", "3931063", "4669873", "4669875", "47701701", "6884380", "6884438", "6888794", "72430044", "72430049", "8000250", "8125339", "991203640"],
      "Volvo Penta": ["3825133"], "Vox": ["FBD72/2"], "Vox Antigo": ["FBD3207"],
      "Wega": ["FCD2045B"], "WIX": ["W33358", "WF33358"], "ZF": ["0070131207"]
    },
    aplicacoes: {
      "Agrale": [
        ["1100 MWM D 229-3", "1982", "- 1983"],
        ["4100 M93", "2000", "- >"],
        ["41002 -", "-", "41004"],
        ["M93 2000", "- >", "-"],
        ["4118.4 M95W", "2004", "- >"],
        ["4120 MD 190", "2000", "- >"],
        ["4230 M790", "96", "- >"],
        ["4230 M790", "2001", "- >"],
        ["4230.4 M790", "2001", "- >"],
        ["42305 -", "-", "4240E"],
        ["Rugerrine MD 350 -", "AG30", "Agrale M790"],
        ["BX 4.60 MWM D229/6", "-", "BX4130"],
        ["MWM 229/6 90", "- >", "-"],
        ["BX4190 BF6L 913C", "90", "- >"],
        ["BX60 F3L 913", "-", "BX60"],
        ["MWM D229/6 -", "M790", "Agrale M790"],
        ["Micro T4100 M90", "83", "- >"],
        ["Micro T4100 AGRALE M790-D229/4", "80", "- >"],
        ["Micro T4200 AGRALE M790-D229/4", "80", "- >"],
        ["Optima 650 BF6M1013 ECP", "-", "Optima 650"],
        ["Cummins -", "Ahlmann", "AS210"],
        ["Carregadoras Com Rodas AS SERIES DEUTZ BF6M2012C", "-", "BARBER GREEN"],
        ["Micro Carregadeiras M711, M790 Agrale", "82", "- 82"]
      ],
      "Case": [
        ["1085C -", "-", "1088"],
        ["Case 6T5.9 -", "1150E", "CASE 6T-590"],
        ["1150G CASE 6T-590", "-", "1155E"]
      ],
      "-": [

      ]
    }
  },

  "PSC75": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc75/produto/529",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Alliance": ["A99909002510097"], "Authomix": ["FCO0075"], "Baldwin": ["BF7813"],
      "Bosch": ["0986BF0243"], "Controil": ["CHFF00007"], "Cummins": ["3978040", "4897897"],
      "Delkraft": ["DSC746"], "Delphi": ["HDF422"], "Fleetguard": ["FF5421"],
      "Ford": ["BG5X9155AA"], "Fram": ["P9454", "P9697"], "Gonher": ["GP548"],
      "Hengst": ["H414WK"], "Japanparts": ["FCBR56S"], "Js Asakashi": ["FC0040"],
      "KSPG": ["50014158"], "Luberfiner": ["LFF5421"], "Mahle": ["K440"],
      "Mann": ["WK950/21"], "Master Parts": ["MM100020"], "Parker": ["RC376"],
      "Sakura": ["FC5725"], "Seineca": ["SFD9107"], "Seineca Antigo": ["SEI2620"],
      "Tecfil": ["PSC75"], "Turbo Filtros": ["TBC30008"], "Unifilter": ["USC5421"],
      "Volkswagen": ["2R0127177B"], "Vox": ["FBD75"], "Vox Antigo": ["FBD3621"],
      "Wega": ["FCD2093"], "WIX": ["WF33654"]
    },
    aplicacoes: {
      "Ford": [
        ["1317E 3.9 CUMMINS 4ISBE", "02/2005", "- 07/2010"],
        ["1317E 3.9 CUMMINS 4ISBE", "08/2010", "- >"],
        ["1517E 3.9 CUMMINS INT. 4 ISBE", "08/2010", "- >"],
        ["1517E 3.9 CUMMINS INT. 4 ISBE", "02/2005", "- 07/2010"],
        ["1717E 3.9 L 16V INTERACT", "2005", "- 07/2010"],
        ["1717E 3.9 L 16V INTERACT", "08/2010", "- >"],
        ["1722E 5.9 Cummins Int.6 ISBE", "08/2010", "- >"],
        ["1722E 5.9 Cummins Int.6 ISBE", "01/2006", "- 07/2010"],
        ["2422E 5.9 Cummins Int.6 ISBE", "08/2010", "- >"],
        ["2422E 5.9 Cummins Int.6 ISBE", "01/2006", "- 07/2010"],
        ["2428E INTERACT 6 ISBE", "5.9", "08/2010"]
      ],
      "- >": [
        ["Diesel 2428E", "INTERACT 6 ISBE", "5.9"],
        ["2006 - 07/2010", "Diesel", "2622E"],
        ["INTERACT 6 5.9 L 24V SOHV L6", "2006", "- 07/2010"],
        ["2622E INTERACT 6", "5.9 L 24V SOHV L6", "08/2010"],
        ["Diesel 2628E", "Cummins Int. 6 ISBE", "08/2010"],
        ["Diesel 2628E", "Cummins Int. 6 ISBE", "2006"],
        ["- 07/2010 Diesel", "815E", "Cummins Int. 4 ISBE"],
        ["02/2005 - 07/2010", "Diesel", "815E"],
        ["Cummins Int. 4 ISBE 08/2010", "- >", "Diesel"],
        ["Diesel EuroCargo", "230E24", "TECTOR F4AE0681D"],
        ["06/2006 - >", "Diesel", "EuroCargo"],
        ["230E22 TECTOR F4AE0681D", "01/2006", "- >"],
        ["Tector 11-190 4X2 (Euro 5)", "FPT P7 190cv", "2022"]
      ],
      "Grove": [
        ["RT500E-2 QSB6.7-C240", "-", "RT500E-2"],
        ["QSB6.7-C275 -", "RT535E / RT540E / RT545E", "QSB6.7"],
        ["2007 - 2007", "-", "HYUNDAI"],
        ["R290NLC7A QSB6.7 C220", "2007", "- 2007"]
      ],
      "IVECO": [
        ["EuroCargo 170E22", "TECTOR F4AE0681D", "06/2006"]
      ],
      "-": [
        ["Tector 170E25T IVECO FPT", "2009", "- >"],
        ["Tector 170E27 IVECO FPT", "2009", "- >"],
        ["Tector 240E25S IVECO FPT", "2009", "- >"],
        ["Tector 240E27 IVECO FPT", "2009", "- >"]
      ]
    }
  },

  "PSC76": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc76/produto/559",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0076"], "Baldwin": ["BF7815", "BF7917"], "Case": ["84477358"],
      "Cummins": ["3959612"], "Delkraft": ["DSC743"], "Delphi": ["HDF618"],
      "Donaldson": ["P550774"], "Fil Filter": ["ZP3126F"], "Fleetguard": ["FF5488", "FF5580"],
      "Ford": ["BG6X9155AA"], "Fram": ["P10275"], "Gonher": ["GP1109"],
      "Hengst": ["H353WK"], "Komatsu": ["6003113750"], "Luberfiner": ["LFF5488"],
      "Mahle": ["KC618"], "Mann": ["WK930/6x", "WK954/1X"], "Master Parts": ["MM100024"],
      "Parker": ["RC380"], "Sakura": ["FC5713"], "Tecfil": ["PSC76"],
      "Turbo Filtros": ["TBC30009"], "Volkswagen": ["2T2127177B"], "Vox": ["FBD76"],
      "Wega": ["FCD2238"], "WIX": ["WF10293"]
    },
    aplicacoes: {
      "Case Ih": [
        ["Magnum 225 MAGNUM SERIES", "MAGNUM 225", "-"],
        ["Magnum 250 MAGNUM SERIES", "MAGNUM 250", "-"],
        ["Magnum 310 MAGNUM SERIES", "MAGNUM 310", "-"],
        ["Doosan DL400", "Carregadoras Com Rodas", "CUMMINS QSL9"]
      ],
      "Ford": [
        ["1932 Cargo", "Cummins", "2011"]
      ],
      "- >": [
        ["Diesel 1933", "Cargo / Tractor", "Cummins ISL8.9 330 P7-0"],
        ["2012 - >", "Diesel", "4532E"],
        ["Diesel 19320", "Constellation - Com Ref. Original: 2R0127177J", "Cummins"],
        ["01/2004 - >", "Diesel", "19320E"],
        ["Constellation Cummins ISC 320", "01/2006", "- >"],
        ["19330 Constellation 330cv", "Cummins", "2012"],
        ["Diesel 19360", "Constellation", "Cummins ISL 8.9"],
        ["2015 - >", "Diesel", "19390"],
        ["Constellation 400cv Cummins ISL 8.9", "2012", "- >"],
        ["19420 Constellation 420cv", "Cummins ISL 8.9", "2014"],
        ["Diesel 24330", "6X2 330cv", "Cummins ISL 330"],
        ["2012 - >", "Diesel", "25390"],
        ["Cummins ISL 8.9 400cv Cummins ISL 8.9", "2012", "- >"],
        ["25420 CONSTELLATION", "Cummins ISL 8.9 420cv", "01/2013"],
        ["Diesel 26390", "ISL 400 Cummins 294cv", "ISL 400 Cummins"],
        ["2013 - >", "Diesel", "26420"],
        ["Constellation Cummins ISL 8.9 420cv", "2013", "- >"],
        ["31320 Constellation (6x4)", "Cummins eletrônico", "2007"],
        ["Diesel 31320E", "Constellation / Com Ref. Original: 2R0127177J", "Cummins"],
        ["02/2007 - >", "Diesel", "31330"],
        ["ISL 330 CUMMINS 01/2012", "- >", "Diesel"]
      ],
      "Cummins Isce": [
        ["8.3 MAX TON 2007", "- >", "Diesel"]
      ],
      "New Holland": [
        ["T8010 T8000 SERIES", "CUMMINS 6CTAA8.3", "-"],
        ["T8020 T8000 SERIES", "CUMMINS 6CTAA8.3", "-"],
        ["T8030 T8000 SERIES", "CUMMINS 6CTAA8.3", "-"],
        ["T8040 T8000 SERIES", "CUMMINS 6CTAA8.3", "-"]
      ],
      "Volkswagen": [
        ["17330 4 x 2 - Constellation 330cv", "Cummins ISL 8.9", "2012"]
      ],
      "-": [
        ["24320 Contesllation", "Cummins eletrônico", "2010"]
      ]
    }
  },

  "PSC410": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc410/produto/407",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Atlas-Copco": ["71029"], "Authomix": ["FCO0410"], "Baldwin": ["BF1280"],
      "Bomag": ["31780219"], "Bosch": ["0986450713", "9455080008"], "Case": ["84476807", "A77470S1", "E156170", "J390942", "J925274", "J930942"],
      "Caterpillar": ["3930942"], "Clark": ["913556"], "Cross": ["F67"],
      "Cummins": ["3890706", "3903410", "3925274", "3935274"], "Delkraft": ["DCS705"], "Delphi": ["HDF500A"],
      "Donaldson": ["P172654", "P551329"], "Donsson": ["GS025"], "Dynapac": ["900827"],
      "FAM": ["FC410"], "Fiat": ["76192505"], "Fiat Allis": ["75208274"],
      "Filtran": ["106072/2"], "Fleetguard": ["FF200", "FS1280"], "Ford": ["3903410", "BF5T9155AB", "F3HZ9162A"],
      "Fram": ["FT5360", "P3401", "P4687"], "Franig": ["HCX1126E"], "GM": ["88915438", "89002392"],
      "Gonher": ["GPP18"], "Grove": ["9414100789", "9414100805"], "Hengst": ["H17WK06"],
      "Hitachi": ["76107829"], "Hyundai": ["39003410", "3903410"], "Ingersoll Rand": ["35374669", "57150849", "59728196"],
      "Inpeca": ["SB0985", "SCB0985"], "Komatsu": ["6732716120", "CU3903410", "CUFS1280"], "KS": ["277FS"],
      "KSPG": ["50013277"], "Logan": ["FV331US"], "Luberfiner": ["LFP3301"],
      "Mafersa": ["17603450161"], "Mahle": ["KC107"], "Mann": ["WK940/7"],
      "Muller": ["50060080"], "Napa": ["3357"], "New Holland": ["83977314"],
      "Nexpro": ["48074342"], "Parker": ["RC43"], "Partmo": ["A787"],
      "Purolator": ["F1084", "PER43"], "Randon": ["J925274"], "Roma": ["CBOS3410"],
      "Sakura": ["K57060", "SFC5706"], "Seineca Antigo": ["SEI2595"], "Tecfil": ["PSC410"],
      "Top Parts": ["130019"], "Turbo Filtros": ["TB985"], "Tutela": ["LB170"],
      "Unifilter": ["USC43"], "Valmet": ["81028400", "88834"], "Volkswagen": ["2RK127177B", "3903410", "TNA4127177"],
      "Volvo": ["11993944", "36846", "3930942", "991203410"], "Vox": ["FBD410"], "Vox Antigo": ["FBD3608", "FDB3608"],
      "Wega": ["FCD2041"], "WIX": ["W33353", "W33357", "WF33353"]
    },
    aplicacoes: {
      "Case": [
        ["1085C -", "-", "1088"],
        ["Case 6T5.9 -", "1150D", "-"],
        ["1150E CASE 6T-590", "-", "1150G"],
        ["CASE 6T-590 -", "1155D", "-"],
        ["1155E Case 6-830", "-", "1187"],
        ["Case -", "1187C", "LOGGER CRAWLER"],
        ["1285 -", "-", "1286 Wheel"]
      ],
      "-": [
        ["1450B -", "-", "1455B"],
        ["1488 -", "-", "1550"],
        ["1822 Colhedoras De Algodão", "- 1822", "-"],
        ["1844 Colhedoras De Algodão", "- 1844", "-"],
        ["2155 (Colheitadeira) Cummins 6CTAA 8.3", "-", "2388"],
        ["Cummins 6CTAA 8.3 1998", "- >", "-"],
        ["2399 (Colheitadeira) Cummins 6CTAA 8.3", "-", "2555 (Colheitadeira)"],
        ["40E Crawler -", "-", "45 Wheel"],
        ["45B Wheel -", "-", "480F/ FF"],
        ["4994 -", "-", "550"],
        ["550E -", "-", "580 SUPER E"],
        ["CUMMINS 4B3.9 -", "580 SUPER E", "CONSOLDI 4-390"]
      ]
    }
  },

  "PSC494": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc494/produto/221",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Alliance": ["A20047001150097"], "Authomix": ["FCO0494"], "Baldwin": ["BF1217"],
      "Bosch": ["0986BF0312", "1457434402"], "Delkraft": ["DSC730"], "Delphi": ["HDF814"],
      "Donaldson": ["P550665"], "Fiaam": ["FT5210", "FT5275", "FT5413"], "Fiat": ["8107486", "8107716"],
      "Fleetguard": ["FS1254"], "Fram": ["P5614"], "Hengst": ["H70WK09"],
      "IVECO": ["1907539", "1908547", "1930992", "1931061", "503120784"], "Japanparts": ["FCBR26S"], "Luberfiner": ["LFF8981"],
      "Mahle": ["KC186"], "Mann": ["WK950/6"], "Nexpro": ["500058322"],
      "Purflux": ["CS451"], "Sakura": ["SFC2201"], "Tecfil": ["PSC494"],
      "Turbo Filtros": ["TBS494"], "Vox": ["FBD494"], "Wega": ["FCD2057"],
      "WIX": ["33327"]
    },
    aplicacoes: {
      "Case": [
        ["8120 Iveco", "-", "MAGNUM 340"],
        ["Cummins 2010", "- 2010", "-"]
      ],
      "IVECO": [
        ["Cursor 450E33T", "Cursor 8 - Turbo Intercooler", "10/2009"]
      ],
      "- >": [
        ["Diesel Daily", "38.13 8140.43S", "2.8 8V"],
        ["01/2005 - >", "Diesel", "Daily"],
        ["40.13 8140.43S 2.8 8V", "01/2005", "- >"],
        ["Daily 50.13 8140.43S", "2.8 8V", "01/2003"],
        ["Diesel Daily", "60.13 Scudato 8140.43S", "2.8 8V"],
        ["01/2006 - >", "Diesel", "Daily"],
        ["35.13 8140.43S 2.8 8V", "01/1996", "- 04/2002"],
        ["Daily 70.13 8140.43S", "2.8 8V", "01/2005"],
        ["Diesel Daily", "35.13 8140.43S", "2.8 8V"],
        ["05/2002 - >", "Diesel", "Daily"],
        ["55 C 16 3.0", "01/2008", "- >"],
        ["EuroCargo 160E21", "Iveco 8060.45V", "01/1998"],
        ["- 05/2006 Diesel", "EuroCargo", "170E22"],
        ["TECTOR F4AE0681D 01/2004", "- 05/2006", "Diesel"],
        ["EuroCargo 170E25", "Tector 6 cilindros", "01/2009"],
        ["Diesel EuroCargo", "160E21", "Iveco 8060.45V"],
        ["06/2006 - >", "Diesel", "EuroCargo"],
        ["170E25T Tector 6 cilindros", "01/2009", "- >"],
        ["EuroCargo 240E25", "Tector 6 cilindros", "01/2009"],
        ["Diesel EuroCargo", "170E22", "TECTOR F4AE0681D"],
        ["240E25S Tector 6 cilindros", "01/2009", "- >"],
        ["EuroCargo 260E25", "Tector 6 cilindros", "01/2009"],
        ["Diesel EuroCargo", "230E22", "TECTOR F4AE0681D"],
        ["01/2005 - 05/2006", "Diesel", "EuroCargo"],
        ["230E24 TECTOR F4AE0681D", "01/2005", "- 05/2006"],
        ["EuroCargo 230E24", "TECTOR F4AE0681D", "06/2006"],
        ["01/2006 - >", "Diesel", "EuroCargo"],
        ["120E15 Iveco 8060.25V", "01/1999", "- >"],
        ["EuroCargo 150E18", "Iveco 8060.25V", "09/1991"],
        ["Diesel EUROCLASS", "CURSOR 8", "2002"],
        ["Diesel EUROMOVER - 250", "CURSOR 8", "2005"],
        ["Diesel EUROMOVER - 270", "CURSOR 8", "2005"],
        ["Diesel EUROMOVER - 310", "CURSOR 8", "2005"]
      ]
    }
  },

  "PSC498": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc498/produto/338",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Agrale": ["6013006009002"], "Authomix": ["FCO4985"], "Mann": ["WK940/34"],
      "MWM": ["955410500115"], "Tecfil": ["PSC498/5", "PSC498"], "Turbo Filtros": ["TBC9403"],
      "Vox": ["FBD498/5"], "Wega": ["FCD2202"], "WIX": ["WF10274"],
      "Mahle": ["KC 196"],
      "Fram": ["P9815"]
    },
    aplicacoes: {
      "Agrale": [
        ["Furgovan 6000E MWM 4.07 TCE", "01/2005", "- >"],
        ["Furgovan 6000E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 5.0 E MWM 4.07 TCE", "01/2002", "- >"],
        ["MA 5.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.07 TCE", "01/2005", "- >"]
      ]
    }
  },

  "PSC498/4": {
    tipo: "combustivel",
    especificacoes: { altura: 164, diametroExterno: 97, rosca: "Não possui", elemento: "Papel" },
    notaTecnica: { codigoOriginal: "6011.101.069.00.4", observacao: "Original: filtro de combustível Agrale Marruá com sensor (MWM). Pode ser usado, mas o sensor não enrosca neste filtro." },
    conversoes: {
      "Authomix": ["FCO4984"], "Delphi": ["HDF842"], "Fram": ["P4836A"],
      "GM": ["94707151"], "Hengst": ["H334WK"], "Japanparts": ["FCBR77S"],
      "Mahle": ["KL747"], "Mann": ["WK940/35"], "MWM": ["905410500105","905411510035"],
      "Purolator": ["F1108"], "Tecfil": ["PSC498/4"], "Turbo Filtros": ["TBC4984"],
      "Vox": ["FBD498/4"], "Wega": ["FCD2066/1"], "WIX": ["WF10298"]
    },
    aplicacoes: {
      "General Motors": [
        ["Blazer EXECUTIVE 4X4", "2.8 8V", "2005"]
      ],
      "- >": [
        ["Diesel S10", "Turbo - (CS / CD / CE) - mecânico", "2.8 12V 140cv"],
        ["2006 - 2007", "Diesel", "NISSAN"],
        ["Frontier (SE / Serrana / Attack)", "2.8 MWM Sprint", "2006"]
      ]
    }
  },

  "PSC706": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc706/produto/1039",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0706"], "Baldwin": ["BF9885"], "Cummins": ["5262311"],
      "Donaldson": ["P555706", "P555776"], "Fleetguard": ["FF5706", "FF5776"], "Japanparts": ["FCBR58S"],
      "Js Asakashi": ["FS4001"], "Parker": ["RC828"], "Tecfil": ["PSC706"],
      "Turbo Filtros": ["TBC5706"], "Volkswagen": ["2P0127177"], "Vox": ["FBD706"],
      "Wega": ["FCD4000"],
      "Mann": ["WK 842/22"],
      "Mahle": ["KL 432"],
      "Fram": ["PS9801"]
    },
    aplicacoes: {
      "Volare": [
        ["Volare V8L MV8L - (Euro 6)", "F 3.8 - 175 cv (129 kW)", "2023"]
      ],
      "- >": [
        ["Diesel Volare V9L", "ON - Fly 9 - Attack 9 (Euro 6)", "F 3.8 - 175 cv (129 kW)"],
        ["2023 - >", "Diesel", "VOLKSWAGEN"],
        ["10160 Euro 5", "Cummins ISF 160", "2012"],
        ["Diesel 11180", "Delivery", "Cummins ISF 3.8L 175cv"],
        ["2017 - >", "Diesel", "5150E"],
        ["Euro 5 Cummins ISF SCR 3.6", "2011", "- >"],
        ["6160 Delivery", "Cummins ISF 2.8L 160cv", "2017"],
        ["Diesel 8160", "Delivery - Euro 5", "Cummins ISF SCR 3.8"],
        ["2012 - >", "Diesel", "9160"],
        ["Delivery - Euro 5 Cummins ISF SCR 3.8", "2012", "- >"],
        ["9160OD PLUS", "Cummins", "01/2012"],
        ["Diesel 9170", "Delivery", "Cummins"],
        ["2017 - >", "Diesel", "Delivery 9.160"],
        ["4x2 - Turbo Cummins ISF 3.8", "2013", "- 2018"]
      ]
    }
  },

  "PSC880": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc880/produto/498",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0880"], "Baldwin": ["BF7673D"], "Donaldson": ["P550351", "P551423"],
      "Fil Filter": ["ZP8039F"], "Fleetguard": ["FS19516"], "Fram": ["PS7407", "PS7407A"],
      "Hengst": ["H196WK"], "John Deere": ["RE62418"], "Luberfiner": ["LFF8215"],
      "Mann": ["WK8100"], "Purolator": ["F55110"], "Stanadyne": ["31732"],
      "Tecfil": ["PSC880"], "Turbo Filtros": ["TBS880"], "Vox": ["FBD880"],
      "Wega": ["FCD0195"], "WIX": ["W33531"],
      "Mahle": ["KC 502D"]
    },
    aplicacoes: {
      "Ingersoll Rand": [
        ["P375WJD JOHN DEERE 4045T", "1987", "- 2001"],
        ["R8 JOHN DEERE", "1987", "- 2001"],
        ["SD40 JOHN DEERE", "1987", "- 2001"]
      ],
      "John Deere": [
        ["410G -", "-", "6310 / 6310 A / ASE / ASE-LP / SE"],
        ["4.5 4045T 2001", "- >", "-"],
        ["6410 / 6410 A / ASE-LP / SE 4.5", "2001", "- >"],
        ["6610ASE / SE / A 6.8 6068T", "2001", "- >"]
      ],
      "Slc/ John Deere": [
        ["210E -", "-", "210ELL"]
      ],
      "-": [
        ["210LE -", "-", "3100"],
        ["310E -", "-", "310G"],
        ["310SE -", "-", "310SG"],
        ["315SE -", "-", "315SG"],
        ["3200 JOHN DEERE", "2004", "- 2004"],
        ["3200X -", "-", "3300"],
        ["3300X -", "-", "3400"],
        ["3400 JOHN DEERE", "2004", "- 2004"],
        ["3400X -", "-", "410E"],
        ["4400 TELESCOP -", "-", "4500 TELESCOP"],
        ["1994 - 2000", "-", "485E"],
        ["486E -", "-", "488E"]
      ]
    }
  },

  "PSC883": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psc883/produto/159",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FCO0883"], "Fil Filter": ["ZP3804F"], "Ford": ["3C119176BB", "3C119176BC", "4537952", "4669224"],
      "Fram": ["PS10156"], "Japanparts": ["FCBR9S"], "Mann": ["WK815/4"],
      "Tecfil": ["PSC883"], "Vox": ["FBD883"], "Wega": ["FCD0185"],
      "Mahle": ["KC 519"]
    },
    aplicacoes: {
      "Ford": [
        ["Transit Van / Furgão - Eletrônico / Turbodiesel", "2.4 TDCi", "12/2008"]
      ],
      "- >": [

      ]
    }
  },

  "PSD420": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd420/produto/2020",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Baldwin": ["BF46109O"], "Donaldson": ["P551086", "P551875"], "Fleetguard": ["FS20041"],
      "Hyundai": ["11E170140"], "Mann": ["WK1060"], "Mercedes Benz": ["A3844777015"],
      "Parker": ["R12030MB"], "Sakura": ["SFC5306030"], "Tecfil": ["PSD420"],
      "Ufi": ["2736900"], "Wega": ["FCD2203"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["1215C OM 904 LA", "01/1998", "- >"],
        ["1218E OM 904 LA", "01/2001", "- 06/2007"],
        ["1418L/EL OM 904 LA", "01/2002", "- >"],
        ["1418L/LK/LA/LAK-R OM 366 A/LA", "1996", "- >"],
        ["1618M OM 904 LA", "1998", "- >"],
        ["1718M (4.3 L 12V SOHV L4)", "OM 904 LA", "2001"],
        ["- 2005 -", "LO712", "OM 364 A/LA"],
        ["10/2006 - >", "Diesel", "LO812"],
        ["OM 364 A/LA 10/2006", "- >", "Diesel"]
      ]
    }
  },

  "PSD450/1": {
    tipo: "combustivel",
    especificacoes: { altura: 175, diametroExterno: 109.5, rosca: "1\\", elemento: "Papel", observacao: "SUBSTITUI O PSD450" },
    conversoes: {
      "ACDelco": ["01FBD020"], "Authomix": ["FSE4501"], "Bosch": ["0986450710"],
      "Delkraft": ["DSA511/1"], "Delphi": ["EFS101"], "Donaldson": ["P551853"],
      "Donsson": ["GS270"], "FAM": ["FSD550/1"], "Filtran": ["106450/1"],
      "Ford": ["BF8TB55AA"], "Fram": ["PS10300","PS10608","PS9029"], "Inpeca": ["SSB0450"],
      "Irlemp": ["R4510M"], "Japanparts": ["FCBR96S"], "KS": ["50013574"],
      "KSPG": ["50014903"], "Mahle": ["KC121","KC641D"], "Mann": ["WK1030"],
      "MWM": ["905411510020"], "Partmo": ["AS1441SP"], "Tecfil": ["PSD450/1"],
      "Turbo Filtros": ["TBC450"], "Unifilter": ["R45A","RK45"], "Volkswagen": ["2RD12791"],
      "Vox": ["FBS450/1"], "Vox Antigo": ["FBS3802"], "Wega": ["FCD2212"],
      "WIX": ["WF36250"]
    },
    aplicacoes: {
      "Agrale": [
        ["7000","MWM 4.10 T","01/1993 - 12/1999"],
        ["8500","MWM 4.10 TCA","01/1998 - 12/1999"],
        ["MA 7.0","MWM 4.10T","01/1997 - 05/2000"],
        ["MA 7.5 T","MWM 4.10 TCA","01/1996 - 05/2000"],
        ["MA 8.5","MWM 4.10 TCA","01/1996 - 05/2000"],
        ["Volare A8","MWM 4.10 TCA","01/00 - 05/00"],
        ["W8","4.3L8V D4.10TCA","2005 - >"]
      ],
      "Ford": [
        ["F1000 LWB","4.3 8V","1993 - 1996"],
        ["F1000 S. CAB","4.3 8V","1993 - 1996"],
        ["F14000 6 BTAA","5.9","1999 - >"]
      ],
      "General Motors": [
        ["Silverado MWM Sprint 6.07","4.2","2000 - 12/2001"],
        ["Silverado MWM Sprint 6.07","4.2","2000 - 12/2001"]
      ],
      "Renault": [
        ["Master D / DCI / DTI","2.8 8V","01/2000 - >"]
      ],
      "Volkswagen": [
        ["12140T 4.10 T","MWM","04/97 - >"],
        ["12180 6.10T","MWM","01/99 - >"],
        ["14150 6.10T","MWM","04/97 - >"],
        ["14180 6.10 T","MWM","10/99 - >"],
        ["5140E Delivery 4.08 TCE","MWM","08/05 - >"],
        ["8100 4.10 T","MWM","07/97 - >"],
        ["8140 4.10 T","MWM","03/94 - >"],
        ["L 80 4.10 T","MWM","01/96 - 12/97"]
      ]
    }
  },

  "PSD470/1": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd470/1/produto/388",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FSE4701"], "Baldwin": ["BF1329", "BF1329SP"], "Bosch": ["0986450734", "0986BF0222"],
      "DAF": ["0915472"], "Delkraft": ["DSA508/1"], "Delphi": ["EFS103"],
      "Donaldson": ["P551067", "P551867", "P559113"], "Donsson": ["GS533"], "FAM": ["FSD380/1"],
      "Fleetguard": ["FS19532", "FS19932", "FS20028"], "Fram": ["PS8486A", "PS9025"], "Gmc": ["93297277"],
      "Gonher": ["GPP1291", "R90P"], "Hengst": ["H7090WK30"], "Inpeca": ["SSB0470"],
      "Irlemp": ["R9030M"], "Japanparts": ["FCBR120S"], "John Deere": ["RE500186"],
      "Js Asakashi": ["FC0048"], "KSPG": ["50013493"], "Luberfiner": ["LFF3290"],
      "Mahle": ["KC122", "KC124", "KC648/1", "KC648D"], "Mann": ["WK1060/1"], "Parker": ["R9030M", "R90T"],
      "Purolator": ["F1075"], "Sakura": ["SFC260230"], "Scania": ["1393640"],
      "Seineca Antigo": ["SEI2647"], "Tecfil": ["CSD02", "PSD470", "PSD470/1"], "Turbo Filtros": ["TBC4701"],
      "Ufi": ["2414300"], "Unifilter": ["R90A", "R90AHP", "RK90", "RK90HP"], "Volvo": ["139640", "3989632", "8159975"],
      "Vox": ["FBS470", "FBS470/1"], "Vox Antigo": ["FBS3413", "FBS3422"], "Wega": ["FCD3090", "FCD3090/2F"],
      "WIX": ["WF10306"]
    },
    aplicacoes: {
      "Agrale": [
        ["Volare W9 MWM 4.12 TCE", "2012", "- >"]
      ],
      "DAF": [
        ["CF85410 (Euro 4/5/EEV)", "MX300S 410cv", "2006"]
      ],
      "- >": [
        ["Diesel XF105460", "PACCAR MX340S", "2006"],
        ["Diesel XF105510", "PACCAR MX300S", "2006"],
        ["Diesel GENERAL MOTORS", "A80", "883"],
        ["4.9 01/1985", "- 12/1985", "Álcool"],
        ["GMC12170 6.6 Caterpillar 3116", "01/1996", "- 12/2002"],
        ["GMC14190 6.6 Caterpillar 3116", "01/1996", "- 12/2002"],
        ["GMC15190 6.6 Caterpillar 3116", "01/1997", "- >"],
        ["GMC16220 6.6 Caterpillar 3116", "01/1996", "- 12/2002"],
        ["Diesel P94", "Canavieiro", "DSC 11-75 / DSC 9-12 24V"],
        ["1998 - >", "Diesel", "T112ES"],
        ["DSC 11 06 10.6 L 24V SOHV L6", "2004", "- 2004"],
        ["T112ES DSC 11 07", "10.6 L 24V SOHV L6", "1998"],
        ["- 2003 Diesel", "T112EW", "DSC 11 07"],
        ["10.6 L 24V SOHV L6 2004", "- 2005", "Diesel"],
        ["T112EW (Intercooler)", "10.6 L 24V SOHV L6", "2005"],
        ["Diesel T112H", "DSC 11 07", "10.6 L 24V SOHV L6"],
        ["2006 - >", "Diesel", "T112H"],
        ["Intercooler 10.6 L 24V SOHV L6", "1999", "- 2002"],
        ["T112H Intercooler", "10.6 L 24V SOHV L6", "2004"],
        ["- 2005 Diesel", "T112H", "Intercooler"],
        ["10.6 L 24V SOHV L6 1998", "- 1999", "Diesel"],
        ["T112H DSC12 02 360", "11.7 L 24V SOHV L6", "2001"]
      ],
      "-": [
        ["XF105410 (XF105 FTS) (Euro 4/5/EEV)", "MX300S 408cv", "2006"]
      ],
      "Scania": [
        ["114P/R/T TURBO/INTERCOOLER", "24V SOHV L6", "98>"],
        ["B110 11.7 L 24V DC12 01 360", "2005", "- >"],
        ["BR116 9.0 L 12V DC9 21 310", "1998", "- 2003"],
        ["F113 HL Urb. 9.0 L 12V DC9 21 310", "2006", "- >"],
        ["F94 DSC9-11/DSC9-01/DSC9-03", "1998", "- >"],
        ["F94 4X2 220/310 9.0 L 12V DC9 21 310", "2005", "- >"],
        ["K94 DSC9-15 24V SOHV L6", "1998", "- >"],
        ["LS110 DC12 01 400", "DC 12 24V SOHV L6", "2005"],
        ["- 2005 Diesel", "LS76", "DC12 01 400"],
        ["DC 12 24V SOHV L6 2001", "- 2005", "Diesel"],
        ["P94 DSC 11-75 / DSC 9-12", "DSC 11-75 / DSC 9-12 24V", "06/1998"]
      ]
    }
  },

   "PSD480/1": {
    tipo: "combustivel",
    especificacoes: { altura: 217, diametroExterno: 108.7, rosca: '1"', elemento: "Papel", observacao: "SUBSTITUI O PSD480" },
    conversoes: {
      "Alliance": ["A38447770150097"], "Authomix": ["FSE4801"], "Bosch": ["0986450727","0986BF0214"],
      "Delkraft": ["DSA514/1"], "Delphi": ["EFS108"], "Donaldson": ["P502461"],
      "FAM": ["FSD580/1"], "Fiat Iveco": ["503100412","7147274","7147701"], "Fram": ["PS10037","PS10610","PS9026","PS9027"],
      "Gonher": ["GPP1060"], "Inpeca": ["SSB0480"], "Irlemp": ["R9030MB"],
      "IVECO": ["503103529"], "Japanparts": ["FCBR83S"], "KS": ["473FS"],
      "KSPG": ["50013473"], "Mahle": ["KC126","KC126/1","KC647D"], "Mann": ["WK1050/1"],
      "Master Parts": ["MM100349"], "Mercedes Benz": ["4570920001","A4570920001KZ"], "Parker": ["R9030MB"],
      "Purolator": ["F1076","F1085","F1086"], "Racor": ["49030MB","R12010MB","R12030M"], "Tecfil": ["PSD480/1"],
      "Trp": ["915023"], "Turbo Filtros": ["TBC480"], "Unifilter": ["RK90MB"],
      "Vox": ["FBS480/1"], "Vox Antigo": ["FBS3034"], "Wega": ["FCD2214"],
      "WIX": ["WF10288","WF10305"]
    },
    aplicacoes: {
      "IVECO": [
        ["EuroCargo 180E32","CURSOR 8","2006 - >"],
        ["EuroCargo 450E320T (Cavallino)","CURSOR 8 7.8L","11/2006 - >"],
        ["EuroCargo 450E32","CURSOR 8","2006 - >"],
        ["EuroCargo 120E15","Iveco 8060.25V","01/1999 - >"],
        ["EuroCargo 150E18","Iveco 8060.25V","09/1991 - >"],
        ["EUROTECH (BR) 450E37T","8210-42K","01/1999 - >"],
        ["EuroTrakker 720E42HT","CURSOR 13 F3BE0681G","05/2006 - >"],
        ["EuroTrakker (BR) 380E37H","8210-42K","2001 - 2004"],
        ["EuroTrakker (BR) 380T38","CURSOR 13 F3BE0681G","2001 - 2004"],
        ["EuroTrakker (BR) 380T38","CURSOR 13 F3BE0681G","01/2004 - >"],
        ["EuroTrakker (BR) 450E370T","8210-42K","1998 - 2001"],
        ["EuroTrakker (BR) 720T42T","CURSOR 13 F3BE0681G","2005 - 2006"],
        ["Stralis (BR) HD570S38T","CURSOR 13 F3BE0681G","08/2005 - 08/2006"],
        ["Stralis (BR) HD570S38T","CURSOR 13 F3BE0681G","09/2006 - 2012"],
        ["Stralis (BR) HD570S42T","CURSOR 13 F3BE0681V","09/06 - 2012"],
        ["Stralis (BR) HD450S42T","CURSOR 13 F3BE0681V","09/06 - >"],
        ["Stralis (BR) HD490S38T","CURSOR 13","01/2008 - >"],
        ["Stralis (BR) HD490S42T","CURSOR 13","01/2008 - >"],
        ["Stralis (BR) HD450E38","CURSOR 13 F3BE0681G","08/2005 - >"],
        ["Stralis (BR) HD740S42T","CURSOR 13 F3BE0681V","08/05 - 08/06"],
        ["Stralis (BR) HD450S38T","CURSOR 13 F3BE0681G","09/2006 - >"],
        ["Stralis (BR) HD570S42T","CURSOR 13 F3BE0681V","08/05 - 08/06"],
        ["Stralis (BR) HD450S42T","CURSOR 13 F3BE0681V","08/05 - 08/06"],
        ["Stralis (BR) HD380","CURSOR 13 F3BE0681G","08/2005 - >"],
        ["Stralis (BR) HD450S38T","CURSOR 13 F3BE0681G","08/2005 - 08/2006"],
        ["Stralis (BR) HD740S42T","CURSOR 13 F3BE0681V","09/06 - >"],
        ["Stralis 380 (F3BE0681G)","CURSOR 13","08/2005 - >"],
        ["Stralis 450 E38 F3BE0681G","CURSOR 13","08/2005 - >"],
        ["Stralis 450 S42T","CURSOR 13 F3BE0681V","08/2005 - >"]
      ],
      "Mercedes Benz": [
        ["1318","OM 904 LA","01/2003 - 11/2004"]
      ]
    }
  },

  "PSD490": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd490/produto/2042",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Donaldson": ["P551855"], "Fleetguard": ["FS19551"], "Mann": ["WK1060/2"],
      "Parker": ["SB12010M"], "Scania": ["1518512"], "Tecfil": ["PSD490"],
      "Volvo": ["20569040"], "Wega": ["FCD30128/1", "FCD3091/3"]
    },
    aplicacoes: {
      "John Deere": [
        ["6750 Colhedoras", "JOHN DEERE 6125", "-"],
        ["744H Carregadoras Com Rodas", "JOHN DEERE 6125H", "-"]
      ],
      "Mercedes Benz": [
        ["1632LS OM 449 A/LA", "1999", "- >"],
        ["1634LS OM 447 LA", "01/2000", "- >"],
        ["1938 LS-S", "OM 447 LA", "01/1996"]
      ],
      "- >": [
        ["Diesel SCANIA", "114P/R/T", "CANAVIEIRO"],
        ["DSC11 75/9 12/12 02T 24V 01/1997", "- 09/2006", "Diesel"],
        ["124P/R/T DSC12 360CV/400CV MODELO ELETRONICO", "DSC 12-01, 02, 09", "01/1998"],
        ["- 09/2006 Diesel", "124P/R/T", "420CV Modelo Canavieiro"],
        ["DSC12-02 03/1999", "- 09/2006", "Diesel"],
        ["124P/R/T DSC12 360CV/400CV MODELO MECANICO", "DSC 12-01, 02, 09", "10/2006"],
        ["Diesel 124P/R/T", "DSC12 360CV/400CV MOTOR ELETRONICO", "DSC 12-01, 02, 09"],
        ["10/2006 - >", "Diesel", "124P/R/T"],
        ["DSC12 360CV/400CV MODELO MECANICO DSC 12-01, 02, 09", "01/1998", "- 09/2006"],
        ["124P/R/T 420CV Modelo Canavieiro", "DSC12-02", "10/2006"],
        ["Diesel 164R", "480 CV", "DC 16-02 16V SOHV L8"],
        ["01/02 - >", "Diesel", "B111S Articulado"],
        ["11.7 L 24V DC12 01 420 1999", "- >", "Diesel"],
        ["B75 11.7 L 24V DC12 01 420", "2005", "- >"],
        ["B76 11.7 L 24V DC12 01 420", "2002", "- 2005"],
        ["F230 (Urbano Piso alto e Normal / Rodoviário Piso Alto) DC9 13 (4x2)", "07/09", "- >"],
        ["F94 HB DSC9-11,DC9-01,9-03", "1998", "- >"],
        ["F94 HB 300 9.0 L 12V DC9 21 310", "2005", "- >"],
        ["G360 Euro 5", "DC 13-114", "2012"],
        ["Diesel G380", "D12-17", "D12-17 L 24V SOHV L6"],
        ["11/2006 - >", "Diesel", "G380"],
        ["380 CV DC12-17 Euro 3", "01/08", "- >"],
        ["G420 D12 - 06", "D12 - 06 SOHV L6", "11/2006"],
        ["Diesel G420", "420 CV", "DC12-06 Euro 3"],
        ["01/08 - >", "Diesel", "G420"],
        ["420 CV DC12-06 Euro 3", "01/08", "- >"],
        ["G440 440 CV", "DT12-18 Euro 3", "11/06"],
        ["Diesel G440", "440 CV", "DT12-18 Euro 3"],
        ["11/06 - >", "Diesel", "G470"],
        ["DT 12-06 24V SOHV L6 11/2006", "- >", "Diesel"],
        ["K114 DSC11,DSC12-02,DSC12-01,DC12-01", "01/1998", "- 12/2002"]
      ],
      "-": [
        ["G380 380 CV", "DC12-17 Euro 3", "01/08"]
      ]
    }
  },

  "PSD960": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd960/produto/335",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Agrale": ["6112777018003"], "Authomix": ["FSE9601"], "Baldwin": ["BF1393SP"],
      "Bosch": ["0986450726", "0986BF0224", "0986BF0462"], "Cummins": ["3355903"], "Delkraft": ["DSA515/1"],
      "Delphi": ["EFS109"], "Donaldson": ["P553211"], "Donsson": ["GS197"],
      "FAM": ["FSD370/1"], "Fleetguard": ["FS1015"], "Ford": ["4C459N074AA"],
      "Fram": ["PS10713", "PS6829"], "Franig": ["HCX105A"], "Gonher": ["GPP11"],
      "Hengst": ["H329WK"], "Inpeca": ["SSB0960"], "KSPG": ["50013593"],
      "Liebherr": ["7381816"], "Luberfiner": ["LFF5D"], "Mann": ["WK947/2", "WK950/22"],
      "Master Parts": ["MM100360"], "Parker": ["S3242"], "Partmo": ["AS1249SP"],
      "Racor": ["R120L10M", "S3015"], "Sakura": ["SFC190510"], "Tecfil": ["PSD960/1", "PSD960"],
      "Trp": ["915024"], "Turbo Filtros": ["TBC1015"], "Unifilter": ["RS1242"],
      "Volkswagen": ["2R0127177D", "2TD127491A"], "Vox Antigo": ["FBS960/1"], "Wega": ["FCD2052F"],
      "WIX": ["W33242", "W36240BR", "WF36240"],
      "Mahle": ["KX 335D"],
      "Vox": ["PSD960"]
    },
    aplicacoes: {
      "Agrale": [
        ["8500E-TRONIC MWM 4.12 TCE", "03/2006", "- >"],
        ["9200E-TRONIC MWM 4.12 TCE", "03/2006", "- >"],
        ["Furgovan 6000E MWM 4.07 TCE", "01/2005", "- >"],
        ["Furgovan 6000E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 12.0 E Cummins Int. 4ISBE", "01/2006", "- >"],
        ["MA 5.0 E MWM 4.07 TCE", "01/2002", "- >"],
        ["MA 5.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.07 TCE", "01/2005", "- >"],
        ["MA 7.5 MWM 4.12 E -TRONIC", "01/2005", "- >"],
        ["MA 8.5 MWM 4.12 E-TRONIC", "01/2005", "- >"],
        ["MA 9.2 MWM 4.12 E-TRONIC", "01/2006", "- >"],
        ["MT 12.0 (LE/SB) Cummins Int. 4ISBE", "01/2006", "- >"],
        ["MT 12.0 (LE/SB) Cummins Int. 6ISBE", "01/2006", "- >"],
        ["Volare W8 MWM 4.12 TCE", "03/06", "- >"],
        ["Volare W9 MWM 4.12 TCE", "11/06", "- 2011"],
        ["W8 E 3.9L 16V INTERACT 4", "2005", "- 2007"]
      ],
      "Cummins": [
        ["N-855M -", "-", "NTA-855M"]
      ],
      "-": [

      ],
      "Ford": [
        ["1215 5.9 Cummins 6 B", "02/1999", "- >"],
        ["1217 5.9 Cummins 6 B", "02/1999", "- >"],
        ["1317 5.9CUMMINS 6B", "09/2002", "- >"],
        ["1317E 3.9 CUMMINS 4ISBE", "02/2005", "- 07/2010"],
        ["1415 5.9 Cummins 6 BTAA", "12/2001", "- >"],
        ["1417 5.9 Cummins 6 BT", "09/2002", "- >"],
        ["1421 5.9 Cummins 6 BTAA", "09/2002", "- >"],
        ["1421 5.9 Cummins 6 BTAA", "12/1999", "- 08/2002"],
        ["1422 8.3 CUMMINS 6CT", "09/2002", "- >"],
        ["1517 5.9 Cummins 6 BTAA", "11/2002", "- >"],
        ["1517E 3.9 CUMMINS INT. 4 ISBE", "02/2005", "- 07/2010"]
      ]
    }
  },

  "PSD960/1": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd960/1/produto/335",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Agrale": ["6112777018003"], "Authomix": ["FSE9601"], "Baldwin": ["BF1393SP"],
      "Bosch": ["0986450726", "0986BF0224", "0986BF0462"], "Cummins": ["3355903"], "Delkraft": ["DSA515/1"],
      "Delphi": ["EFS109"], "Donaldson": ["P553211"], "Donsson": ["GS197"],
      "FAM": ["FSD370/1"], "Fleetguard": ["FS1015"], "Ford": ["4C459N074AA"],
      "Fram": ["PS10713", "PS6829"], "Franig": ["HCX105A"], "Gonher": ["GPP11"],
      "Hengst": ["H329WK"], "Inpeca": ["SSB0960"], "KSPG": ["50013593"],
      "Liebherr": ["7381816"], "Luberfiner": ["LFF5D"], "Mann": ["WK947/2", "WK950/22"],
      "Master Parts": ["MM100360"], "Parker": ["S3242"], "Partmo": ["AS1249SP"],
      "Racor": ["R120L10M", "S3015"], "Sakura": ["SFC190510"], "Tecfil": ["PSD960/1"],
      "Trp": ["915024"], "Turbo Filtros": ["TBC1015"], "Unifilter": ["RS1242"],
      "Volkswagen": ["2R0127177D", "2TD127491A"], "Vox Antigo": ["FBS960/1"], "Wega": ["FCD2052F"],
      "WIX": ["W33242", "W36240BR", "WF36240"]
    },
    aplicacoes: {
      "Agrale": [
        ["8500E-TRONIC MWM 4.12 TCE", "03/2006", "- >"],
        ["9200E-TRONIC MWM 4.12 TCE", "03/2006", "- >"],
        ["Furgovan 6000E MWM 4.07 TCE", "01/2005", "- >"],
        ["Furgovan 6000E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 12.0 E Cummins Int. 4ISBE", "01/2006", "- >"],
        ["MA 5.0 E MWM 4.07 TCE", "01/2002", "- >"],
        ["MA 5.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.08 TCE", "01/2005", "- >"],
        ["MA 6.0 E MWM 4.07 TCE", "01/2005", "- >"],
        ["MA 7.5 MWM 4.12 E -TRONIC", "01/2005", "- >"],
        ["MA 8.5 MWM 4.12 E-TRONIC", "01/2005", "- >"],
        ["MA 9.2 MWM 4.12 E-TRONIC", "01/2006", "- >"],
        ["MT 12.0 (LE/SB) Cummins Int. 4ISBE", "01/2006", "- >"],
        ["MT 12.0 (LE/SB) Cummins Int. 6ISBE", "01/2006", "- >"],
        ["Volare W8 MWM 4.12 TCE", "03/06", "- >"],
        ["Volare W9 MWM 4.12 TCE", "11/06", "- 2011"],
        ["W8 E 3.9L 16V INTERACT 4", "2005", "- 2007"]
      ],
      "Cummins": [
        ["N-855M -", "-", "NTA-855M"]
      ],
      "-": [

      ],
      "Ford": [
        ["1215 5.9 Cummins 6 B", "02/1999", "- >"],
        ["1217 5.9 Cummins 6 B", "02/1999", "- >"],
        ["1317 5.9CUMMINS 6B", "09/2002", "- >"],
        ["1317E 3.9 CUMMINS 4ISBE", "02/2005", "- 07/2010"],
        ["1415 5.9 Cummins 6 BTAA", "12/2001", "- >"],
        ["1417 5.9 Cummins 6 BT", "09/2002", "- >"],
        ["1421 5.9 Cummins 6 BTAA", "09/2002", "- >"],
        ["1421 5.9 Cummins 6 BTAA", "12/1999", "- 08/2002"],
        ["1422 8.3 CUMMINS 6CT", "09/2002", "- >"],
        ["1517 5.9 Cummins 6 BTAA", "11/2002", "- >"],
        ["1517E 3.9 CUMMINS INT. 4 ISBE", "02/2005", "- 07/2010"]
      ]
    }
  },

  "PSD980": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd980/produto/405",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Authomix": ["FSE0980"], "Bosch": ["0986450735"], "Caterpillar": ["3913764"],
      "Delkraft": ["DSA539"], "Donaldson": ["P502456"], "IVECO": ["5801403243"],
      "Japanparts": ["FCBR35S"], "Mann": ["WK10002"], "Parker": ["R120L10MAQII", "R120L10MAQll"],
      "Tecfil": ["CSD02", "PSD980"], "Turbo Filtros": ["TBS177"], "Volkswagen": ["2R0127177C"],
      "Volvo": ["20741196"], "Vox": ["FBS980"], "Vox Antigo": ["FBS3619"],
      "Wega": ["FCD30125"], "WIX": ["WF10259"],
      "Mahle": ["KC 192","KX 531D","KX 220D"],
      "Fram": ["PS10452","PS10038","PS11650"]
    },
    aplicacoes: {
      "Adams": [
        ["300, 330, 440, 550, 660, 777, H-HR-NH 6.6.4 Cummins", "04/2004", "- >"]
      ],
      "Caterpillar": [
        ["140H Motoniveladoras", "CATERPILLAR C7-190", "-"],
        ["5110 Escavadoras Com Esteira 5000 SERIES", "Caterpillar 3412E", "-"],
        ["824G II Escavadoras Com Rodas 800 SERIES", "CATERPILLAR 3406E ATAAC", "-"],
        ["825G II Compactadoras 800 SERIES", "CATERPILLAR 3406E ATAAC", "-"],
        ["826G II Compactadoras 800 SERIES", "CATERPILLAR 3406E ATAAC", "-"],
        ["834G Escavadoras Com Rodas 800 SERIES", "CATERPILLAR 3456CE", "-"],
        ["836G Compactadoras 800 SERIES", "CATERPILLAR 3456", "-"],
        ["980G II Carregadoras Com Rodas 900 SERIES", "CATERPILLAR 3406CE-2", "-"],
        ["988G Carregadoras Com Rodas 900 SERIES", "CATERPILLAR 3456CE1", "-"]
      ],
      "Fiat Iveco": [
        ["GRAN CLASS 150S21 GRAN CLASS 150S21 - N45 206CV", "4.5 L 16V DOHC L4", "2016"]
      ],
      "- >": [
        ["Diesel IVECO", "Stralis", "600S40T"],
        ["Iveco Cursor 13 2013", "- >", "-"],
        ["Stralis 490S40T", "Iveco Cursor 13", "2013"]
      ],
      "-": [
        ["Stralis 450S33T", "Iveco Cursor 9", "2013"],
        ["Stralis 500S33T Iveco Cursor 9", "2013", "- >"],
        ["Stralis 800S44T Iveco Cursor 13", "2013", "- >"],
        ["Stralis 800S48T Iveco Cursor 13", "2013", "- >"],
        ["Tector 11190 FPT NEF4 190cv", "2019", "- >"],
        ["Tector 11-190 4X2 (Euro 5)", "FPT P7 190cv", "2022"],
        ["Tector 170E30 IVECO FPT 300cv", "2018", "- 2019"],
        ["Tector 240E30S 6X2", "IVECO FPT NEF6 ID", "2016"],
        ["Tector 260E30 IVECO FPT", "2013", "- >"],
        ["Tector 260E32 FPT NEF 6ID 300cv", "2020", "- >"],
        ["Tector 9-190 FPT NEF4 190cv", "2020", "- >"],
        ["Tector Attack 170E24 IVECO FPT", "2013", "- >"],
        ["Tector Attack 170E30 IVECO FPT", "2013", "- >"],
        ["Tector Attack 240E24 IVECO FPT", "2013", "- >"],
        ["Tector Attack 240E30 IVECO FPT", "2013", "- >"],
        ["Tector Stradale 240E28S IVECO FPT", "2013", "- >"]
      ],
      "John Deere": [
        ["370E Caminhões De Transporte Pesados", "JOHN DEERE 6135H", "-"]
      ]
    }
  },

  "PSD985": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd985/produto/2243",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Papel" },
    conversoes: {
      "Japanparts": ["FCBR143S"], "Mahle": ["KC572", "KC654/1"], "Mann": ["WK10002/2X"],
      "Mercedes Benz": ["A6884770015", "A6884770015KZ"], "Parker": ["R120L4MCJAQIII"], "Tecfil": ["PSD985"],
      "Wega": ["FCD30126"],
      "Authomix": ["FCO0985"],
      "Fram": ["PS11045"],
      "Vox": ["FBS985"]
    },
    aplicacoes: {
      "Mercedes Benz": [
        ["710 Plus OM 364LA", "01/1995", "- >"]
      ]
    }
  },

  "PSD990": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/psd990/produto/537",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: "Altura" },
    conversoes: {
      "Baldwin": ["BF1212"], "Bosch": ["0986BF0461"], "Cummins": ["15618921"],
      "Delkraft": ["DSA521/1"], "Donaldson": ["P170212", "P555020"], "Fleetguard": ["FF232", "FS19520"],
      "Fram": ["PS6830"], "Gonher": ["S 3202"], "Luberfiner": ["LFF902"],
      "Mann": ["WK932/1"], "Racor": ["S3202"], "Sakura": ["FC2703", "SFC65020"],
      "Tecfil": ["PSD990/1", "PSD990"], "Vox": ["FBS990/1"], "Vox Antigo": ["FBS2440"],
      "WIX": ["33442"],
      "Authomix": ["FCO0990"],
      "Mahle": ["KC 110","KX 380D","KC 100"],
      "Wega": ["FCD-0950","FCI-1650"]
    },
    aplicacoes: null
  },

  "PSD925": {
    "tipo": "sedimentador",
    "url": "https://catalogo.tecfil.com.br/search/PSD925",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    "conversoes": {
      "Tecfil": [
        "PSD925"
      ],
      "Cummins": [
        "5264870",
        "5304214"
      ],
      "Mann": [
        "WK 9046"
      ],
      "Mahle": [
        "KC 624D"
      ],
      "Wega": [
        "FCD-0960"
      ],
      "Fram": [
        "P11036"
      ]
    },
    "aplicacoes": null
  },

  "PSD970/1": {
    tipo: "combustivel",
    especificacoes: { altura: 225, diametroExterno: 96, rosca: "1\\", elemento: "Papel", observacao: "SUCÇÃO - FLUXO INVERTIDO - SUBSTITUI O PSD970 - COM ENTRADA PARA SENSOR" },
    conversoes: {
      "Fleetguard": ["FS1105"], "Authomix": ["FSE9701"], "Bosch": ["0986450729"],
      "Delkraft": ["DSA518/1"], "Delphi": ["EFS110"], "FAM": ["FSD590/1"],
      "Fram": ["PS10606"], "Inpeca": ["SSB0510"], "Japanparts": ["FCBR85S"],
      "KSPG": ["50013871"], "Mann": ["WK950/14"], "Master Parts": ["MM100351"],
      "MWM": ["0060"], "Purolator": ["F1080"], "Racor": ["228RS30M","R2830M","R28A30"],
      "Seineca Antigo": ["SEI2654"], "Tecfil": ["PSD970/1"], "Trp": ["915025"],
      "Turbo Filtros": ["TBC970"], "Unifilter": ["R28AHP","UR28A"], "Volkswagen": ["2R0127177","2R0201511","2RO127177","FBS970/1"],
      "Vox Antigo": ["FBS2627"], "Wega": ["FCD2215","FCD3028"], "WIX": ["WF36315"],
      "Yanmar": ["2RO127177"]
    },
    aplicacoes: {
      "Agrale": [
        ["7000","MWM 4.10 T","2000 - >"],
        ["7500","MWM 4.10 TCA","01/2000 - >"],
        ["7500","MWM 4.10 TCA","01/1993 - 12/1999"],
        ["Furgovan 6000","2.8 MWM Sprinter 4.07 TCA","01/2002 - >"],
        ["MA 7.0","MWM 4.10T","06/2000 - >"],
        ["MA 7.5 T","MWM 4.10 TCA","06/2000 - >"],
        ["MA 8.5","MWM 4.10 TCA","06/2000 - >"],
        ["MA 8.5 T","Cummins 6BTAA","01/2004 - >"],
        ["Volare A5","MWM 4.07 TCA","01/00 - >"],
        ["Volare A6","MWM 4.07 TCA","01/00 - 12/01"],
        ["Volare A8","MWM 4.10 TCA","06/00 - >"]
      ],
      "Volkswagen": [
        ["13150 4.10TCA","MWM","01/00 - >"],
        ["13170 6BTAA (Separador de água ref. original: 2R0127177 ou 2TD127491A)","Cummins","01/2000 - >"],
        ["15180 6.10 TCA","MWM","01/00 - >"],
        ["15180EOD","4.3 L 8V 4.10 TB","2003 - 2006"],
        ["16180CO","3.0 L 8V Sprint 4.08 TCE","2004 - 2006"],
        ["16210CO","4.3 L 8V 4.10 TB","2001 - 2005"],
        ["17180 6.10 TCA","MWM","01/2006 - >"],
        ["17210 6BTAA","Cummins","05/02 - >"],
        ["17210 6.10 TCA","MWM","05/02 - >"],
        ["17220","Cummins","1991 - 1992"],
        ["17300","Cummins","2000 - >"],
        ["17300 Com Ref. Original: 2RK127177B e 2TD127491A","Cummins","2000 - >"],
        ["17300","Cummins","1992 - 1999"],
        ["17310 Titan - Com Ref. Original: 2RK127177B e 2R0127177","Cummins","2002 - >"],
        ["18310 Titan 6CTAA","Cummins","2000 - >"],
        ["23210 6.10 TCA","MWM","05/02 - >"],
        ["23310 -","Cummins 6CTAA","01/2002 - 12/2005"],
        ["24220 Ref. Original: 2T0115561 e TJG115561","Cummins","2000 - 2005"],
        ["24220 Com Ref. Original: 2TD127491A e 2R0127177","Cummins","2000 - 2005"]
      ]
    }
  },

  PSC355: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC355",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSC355"],"Authomix":["FCO0355"],"Mann":["WK 950/19"],"Mahle":["KC 197"],"Wega":["FCD-0945"],"Fram":["P11040"],"Vox":["FBD355"]},
    aplicacoes: null
  },

  PSD994: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSD994",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD994"],"Authomix":["FCO0994"],"Mann":["WK 1060/2 X"],"Mahle":["KC 125"],"Wega":["FCD-0980"],"Fram":["PS11950"],"Vox":["PSD994"]},
    aplicacoes: null
  },

  PSD996: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSD996",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD996"],"Authomix":["FCO0996"],"Mann":["WK 1060/7 X"],"Mahle":["KC 130"],"Wega":["FCD-0985"],"Fram":["PS11955"],"Vox":["PSD996"]},
    aplicacoes: null
  },

  "PSD920/1": {
    tipo: "sedimentador",
    url: "https://catalogo.tecfil.com.br/search/PSD920%2F1",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD920/1"],"Authomix":["FCO0920"],"Mann":["WK 1060/4"],"Mahle":["KC 489"],"Wega":["FCD-30124F"],"Vox":["FBS920/1"]},
    aplicacoes: null
  },

  PSD992: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSD992",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD992"],"Authomix":["FCO0992"],"Mann":["PU 1067 X"],"Mahle":["KC 120"],"Wega":["FCD-0970"],"Fram":["PS11900"],"Vox":["PSD992"]},
    aplicacoes: null
  },

  PSD995: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSD995",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD995"],"Authomix":["FCO0995"],"Mann":["WK 1060/6 X","PU 6011 z"],"Mahle":["KC 115","KX 570D"],"Wega":["FCD-0960","FCI-1655"],"Fram":["PS11801","PS12300"],"Vox":["PSD995"]},
    aplicacoes: null
  },

  PEC3037: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PEC3037",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEC3037"],"Authomix":["FCO03037"],"Mann":["PU 8007"],"Mahle":["KX 338/28D"],"Wega":["FCD-0783"],"Fram":["C11403"],"Vox":["CE3037"]},
    aplicacoes: null
  },

  PEC3046: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PEC3046",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEC3046"],"Authomix":["FCO03046"],"Mann":["PU 8021"],"Mahle":["KX 338/29D"],"Wega":["FCD-0792"],"Fram":["C11850"],"Vox":["CE3046"]},
    aplicacoes: null
  },

  PSD380: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSD380",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSD380"],"Authomix":["FCO0380"],"Mann":["WK 842/2"],"Mahle":["KC 19"],"Wega":["FCD-0740"],"Fram":["P4102"],"Vox":["PCD33"]},
    aplicacoes: null
  },

  PSC722: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC722",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSC722"],"Authomix":["FCO0722"],"Mann":["WK 829/3"],"Mahle":["KC 101"],"Wega":["FCD-0750"],"Fram":["PS10755"],"Vox":["FBS722"]},
    aplicacoes: null
  },

  PSC730: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC730",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSC730"],"Authomix":["FCO0730"],"Mann":["WK 829/4"],"Mahle":["KC 200"],"Wega":["FCD-0785"],"Fram":["PS11700"],"Vox":["FBS730"]},
    aplicacoes: null
  },

  PSC740: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC740",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PSC740"],"Authomix":["FCO0740"],"Mann":["WK 829/5"],"Mahle":["KC 210"],"Wega":["FCD-0790"],"Fram":["PS12000"],"Vox":["FBS740"]},
    aplicacoes: null
  },

  PEC3044: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PEC3044",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEC3044"],"Authomix":["FCO3044"],"Mann":["PU 9012 z"],"Mahle":["KX 505D"],"Wega":["FCD-0794"],"Fram":["C11950"],"Vox":["CE3044"]},
    aplicacoes: null
  },

  PEC3054: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PEC3054",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEC3054"],"Authomix":["FCO3054"],"Mann":["PU 9021 z"],"Mahle":["KX 575D"],"Wega":["FCD-0802"],"Fram":["C12850"],"Vox":["CE3054"]},
    aplicacoes: null
  },

  PEC3035: {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PEC3035",
    especificacoes: { altura: null, diametroExterno: null, diametroInterno: null, rosca: null, elemento: null },
    conversoes: {"Tecfil":["PEC3035"],"Authomix":["FCO3035"],"Mann":["PU 9005 x"],"Mahle":["KX 338/22D"],"Wega":["FCD-0785"],"Fram":["C11258"],"Vox":["CE3035"]},
    aplicacoes: null
  }

};
