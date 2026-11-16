
import { vansFord } from './vans/ford.js';
import { vansMercedes } from './vans/mercedes.js';
import { vansRenault } from './vans/renault.js';
import { vansFiat } from './vans/fiat.js';
import { vansIveco } from './vans/iveco.js';
import { vansPsa } from './vans/psa.js';
import { vansVwAgrale } from './vans/volkswagen-agrale.js';

export const veiculosVans = {
  ...vansFord,
  ...vansMercedes,
  ...vansRenault,
  ...vansFiat,
  ...vansIveco,
  ...vansPsa,
  ...vansVwAgrale
};
