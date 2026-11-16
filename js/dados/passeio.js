import { passeioChevrolet } from './passeio/chevrolet.js';
import { passeioFiat } from './passeio/fiat.js';
import { passeioFord } from './passeio/ford.js';
import { passeioVW } from './passeio/volkswagen.js';
import { passeioOutrasMarcas } from './passeio/outras-marcas.js';

export const veiculosPasseio = {
  ...passeioChevrolet,
  ...passeioFiat,
  ...passeioFord,
  ...passeioVW,
  ...passeioOutrasMarcas
};