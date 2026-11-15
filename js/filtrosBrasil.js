/* Códigos Filtros Brasil por veículo.
   Fonte: Catálogo Unificado 2021 da Filtros Brasil (tabelas "Filtros por montadora": modelo + motor + ano).
   - cabine: o 1º código é o filtro de cabine; códigos FBC... são a versão com carvão ativado.
   - oleo: o 2º código (quando existe) é o da coluna "Óleo (Multi)".
   - null = o catálogo não traz esse filtro para o veículo.
   - conf = confiança da correspondência entre o veículo do guia e a linha do catálogo (alta, media, baixa). */
export const filtrosBrasil = {
  "Chevrolet SPIN": { cabine: ["FB1081", "FBC1081F"], ar: ["EAFB053", "EAFB039"], oleo: ["FOFB006", "FOFB003"], combustivel: ["FCFB001"], conf: "alta", nota: "Ar: EAFB053 (1.8, 2012–2016) e EAFB039 (1.8, 2017 em diante)." },
  "Chevrolet Agile": { cabine: ["FB702", "FBC702"], ar: ["EAFB002"], oleo: ["FOFB006", "FOFB003"], combustivel: ["FCFB001"], conf: "alta", nota: "1.4 8V, 2009 em diante." },
  "Chevrolet Montana": { cabine: ["FB702", "FBC702"], ar: ["EAFB002"], oleo: ["FOFB006", "FOFB003"], combustivel: ["FCFB001"], conf: "media", nota: "1.4 8V de 2011 em diante. Até 2011 (1.4): cabine FB705 e ar EAFB008. Montana 1.8: cabine FB704 e ar EAFB008." },
  "Fiat Palio 1.4": { cabine: ["FB502", "FBC502"], ar: ["EAFB244"], oleo: ["FOFB008", "FOFB005"], combustivel: ["FCFB001"], conf: "alta", nota: "Palio Fire 1.4 8V flex." },
  "Fiat Doblo 1.8": { cabine: ["FB503"], ar: ["EAFB015"], oleo: ["EOFB001"], combustivel: ["FCFB001"], conf: "media", nota: "1.8 de 2010 em diante. De 2005 a 2009 (1.8 8V): sem ar no catálogo, óleo FOFB006 | FOFB003." },
  "Fiat Doblo 1.4": { cabine: ["FB503"], ar: null, oleo: ["FOFB008", "FOFB005"], combustivel: ["FCFB001"], conf: "media", nota: "Doblò Fire 1.4 8V, 2010 em diante. O catálogo não lista filtro de ar para esta linha." },
  "Fiat Strada 1.4": { cabine: ["FB512", "FBC512F"], ar: ["EAFB244"], oleo: ["FOFB008", "FOFB005"], combustivel: ["FCFB001"], conf: "alta", nota: "2012 em diante. De 2007 a 2011: cabine FB502 | FBC502." },
  "Ford Fiesta 1.0": { cabine: ["FB202F"], ar: ["EAFB009"], oleo: ["FOFB009", "FOFB001"], combustivel: ["FCFB004"], conf: "media", nota: "Zetec Rocam 1.0 8V. O ar EAFB009 está na linha 2002–2007; a de 2007 em diante não traz o ar." },
  "Ford Fiesta 1.6": { cabine: ["FB202F"], ar: null, oleo: ["FOFB009", "FOFB001"], combustivel: ["FCFB004"], conf: "media", nota: "Rocam 1.6 8V. Se for Sigma 1.6 16V (2010 em diante): cabine FB1086 | FBC1086 e combustível FCFB001." },
  "Ford Focus 1.6": { cabine: ["FB203"], ar: null, oleo: ["FOFB009", "FOFB001"], combustivel: null, conf: "baixa", nota: "Zetec Rocam 1.6 8V (2007–2010). Sigma 1.6 16V: cabine FB207 (2010–2013) ou FB1152 com ar EAFB026 e combustível FCFB004 (2014 em diante)." },
  "Ford Focus 2.0": { cabine: ["FB207"], ar: null, oleo: ["FOFB009", "FOFB001"], combustivel: null, conf: "media", nota: "Duratec 2.0 16V 2009 em diante. 2003–2009: cabine FB203. 2014 em diante: cabine FB1152, ar EAFB026 e combustível FCFB004." },
  "Nissan Sentra": { cabine: ["FB1157"], ar: ["EAFB148"], oleo: ["FOFB021"], combustivel: ["FCFB002"], conf: "media", nota: "2.0 16V de 2014 em diante. De 2009 a 2013: cabine FB710 e ar EAFB069." },
  "Nissan Versa 1.6": { cabine: ["FB1113"], ar: ["EAFB064"], oleo: ["FOFB021"], combustivel: ["FCFB002"], conf: "alta", nota: "Versa S | SL | SV 1.6 16V, 2011 em diante." },
  "Peugeot 408 1.6 THP": { cabine: ["FB404"], ar: ["EAFB130"], oleo: ["EOFB002"], combustivel: ["FCFB002"], conf: "alta", nota: "408 Turbo 1.6 16V 165 cv." },
  "Toyota Corolla 2.0": { cabine: ["FB820", "FBC820F"], ar: ["EAFB033"], oleo: ["EOFB003"], combustivel: ["FCFB001"], conf: "alta", nota: "Corolla Altis | XEI | XRS 2.0 16V, 2010 em diante." },
  "Renault Logan - Sandero": { cabine: ["FB1040"], ar: ["EAFB021"], oleo: ["FOFB020"], combustivel: ["FCFB002"], conf: "media", nota: "1.6 16V flex de 2007 a 2016. 1.6 8V: ar EAFB022. 1.6 SCE (2017 em diante): cabine FB1161 | FBC1161 e ar EAFB251, óleo FOFB021." },
  "VW Kombi 1.4": { cabine: null, ar: null, oleo: ["FOFB007", "FOFB002"], combustivel: ["FCFB002"], conf: "media", nota: "Kombi TotaFlex 1.4 8V, 2006 em diante. O catálogo não lista cabine nem ar." },
  "VW Gol 1.6 G5": { cabine: ["FB302"], ar: ["EAFB007"], oleo: ["FOFB007", "FOFB002"], combustivel: ["FCFB002"], conf: "alta", nota: "Gol TotaFlex G5 e G6, 1.6 8V, 2008 em diante." },
  "VW Gol 1.6 G6": { cabine: ["FB302"], ar: ["EAFB007"], oleo: ["FOFB007", "FOFB002"], combustivel: ["FCFB002"], conf: "alta", nota: "Gol TotaFlex G5 e G6, 1.6 8V, 2008 em diante. G6 MSI 1.6 16V (2014 em diante): ar EAFB245." },
  "Toyota Hilux 3.0": { cabine: ["FB820", "FBC820F"], ar: ["EAFB014"], oleo: ["FOFB009", "FOFB001"], combustivel: ["ECFB001"], conf: "alta", nota: "Hilux TDI Turbo 3.0 16V 163 cv, 2005 em diante." },
  "Toyota Hilux 2.8 - Nova": { cabine: null, ar: null, oleo: ["FOFB009", "FOFB001"], combustivel: null, conf: "media", nota: "Hilux TDI Turbo 2.8 16V 177 cv (2016 em diante): o catálogo traz só o filtro de óleo." },
  "Jeep Cherokee 2.5 Turbo Diesel (1999)": { cabine: null, ar: null, oleo: ["FOFB001"], combustivel: null, conf: "media", nota: "Cherokee Turbo XJ 2.5 diesel, 1999–2001: só o óleo (coluna Multi)." },
  "Ford Ranger Power Stroke": null,
  "Ford Ranger 2.2": { cabine: ["FB1128"], ar: null, oleo: null, combustivel: null, conf: "media", nota: "Ranger TDCi Turbo 2.2 16V, 2012 em diante: o catálogo traz só a cabine." },
  "Nissan Frontier 2.3": { cabine: ["FB031F", "FB1240"], ar: null, oleo: null, combustivel: null, conf: "media", nota: "BiTurbo LE AT 4x4: FB031F. Frontier LE Turbo 2.3 (2017 em diante): FB1240. Só a cabine consta." },
  "Mitsubishi Triton 2.4": { cabine: ["FB521", "FBC521"], ar: ["EAFB252"], oleo: null, combustivel: ["ECFB001"], conf: "alta", nota: "L200 Triton Sport 2.4 diesel 190 cv, 2017 em diante. O catálogo não lista óleo." },
  "Fiat Ducato 2.3 Multijet (Nova)": { cabine: ["FB507"], ar: null, oleo: ["FOFB023"], combustivel: null, conf: "alta", nota: "Ducato Multijet 2.3, 2009 em diante." },
  "Fiat Ducato 2.8 JTD": { cabine: ["FB507"], ar: null, oleo: null, combustivel: null, conf: "alta", nota: "Ducato 2.8 JTD: só a cabine consta." },
  "Renault Master 2.3 dCi (Nova)": { cabine: ["FB1178"], ar: ["EAFB096"], oleo: null, combustivel: null, conf: "alta", nota: "Master 2.3 dCi 130 cv, 2013 em diante." },
  "Peugeot Boxer 2.2 / 2.0 BlueHDi (Nova)": { cabine: ["FB507"], ar: null, oleo: ["FOFB023"], combustivel: null, conf: "baixa", nota: "O catálogo vai até o Boxer 2.3 (2009 em diante); a versão BlueHDi 2.2 não está listada, confirme a aplicação." },
  "Mercedes-Benz Sprinter 416 / 515 (CDI)": { cabine: ["FB1117", "FB1177"], ar: null, oleo: null, combustivel: null, conf: "media", nota: "Sprinter 416 (2020 em diante) e 515: FB1117. Alguns 515 e 415 com motor 2.2 CDI usam FB1177. Só a cabine consta." },
};
