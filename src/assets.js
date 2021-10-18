/* eslint-disable @typescript-eslint/naming-convention */

export const assets = {
  images: {
    'bg/bg.jpg': require('../assets/images/bg/bg.jpg').default,
    'cell/cell.png': require('../assets/images/cell/cell.png').default,
  },
  particles: {},
  sounds: { bg: require('../assets/sounds/bg.mp3').default, upgrade: require('../assets/sounds/upgrade.mp3').default },
  spines: {},
  atlases: {},
};

export const Images = { 'bg/bg': 'bg/bg.jpg', 'cell/cell': 'cell/cell.png' };

export const Sounds = { bg: 'sounds/bg', upgrade: 'sounds/upgrade' };

export const Particles = {};

export const Spines = {};
