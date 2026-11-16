import { utilitariosToyota } from './utilitarios/toyota.js';
import { utilitariosFord } from './utilitarios/ford.js';
import { utilitariosChevrolet } from './utilitarios/chevrolet.js';
import { utilitariosMitsubishi } from './utilitarios/mitsubishi.js';
import { utilitariosAgrale } from './utilitarios/agrale.js';

export const veiculosUtilitarios = {
  ...utilitariosToyota,
  ...utilitariosFord,
  ...utilitariosChevrolet,
  ...utilitariosMitsubishi,
  ...utilitariosAgrale
};