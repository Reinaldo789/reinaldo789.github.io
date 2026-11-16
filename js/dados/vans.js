
import { vansFord } from './vans/ford.js';
import { vansMercedes } from './vans/mercedes.js';
import { vansRenault } from './vans/renault.js';
import { vansFiatIveco } from './vans/fiat-iveco.js';
import { vansVWAgrale } from './vans/volkswagen-agrale.js';

export const veiculosVans = {
  ...vansFord,
  ...vansMercedes,
  ...vansRenault,
  ...vansFiatIveco,
  ...vansVWAgrale
};
