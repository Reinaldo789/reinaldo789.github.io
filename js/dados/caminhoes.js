import { caminhoesMercedes } from './caminhoes/mercedes.js';
import { caminhoesVW } from './caminhoes/volkswagen.js';
import { caminhoesFord } from './caminhoes/ford.js';
import { caminhoesDaf } from './caminhoes/daf.js';
import { caminhoesVolvo } from './caminhoes/volvo.js';
import { caminhoesScania } from './caminhoes/scania.js';
import { caminhoesIveco } from './caminhoes/iveco.js';

export const veiculosCaminhoes = {
  ...caminhoesMercedes,
  ...caminhoesVW,
  ...caminhoesFord,
  ...caminhoesDaf,
  ...caminhoesVolvo,
  ...caminhoesScania,
  ...caminhoesIveco
};