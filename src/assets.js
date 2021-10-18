/* eslint-disable @typescript-eslint/naming-convention */

export const assets = {
  images: {
    'bg/bg.jpg': require('../assets/images/bg/bg.jpg').default,
    'bunny/bunny.png': require('../assets/images/bunny/bunny.png').default,
    'fish/confused_eye.png': require('../assets/images/fish/confused_eye.png').default,
    'fish/confused_mouth.png': require('../assets/images/fish/confused_mouth.png').default,
    'fish/eye_shine.png': require('../assets/images/fish/eye_shine.png').default,
    'fish/eyelid_l.png': require('../assets/images/fish/eyelid_l.png').default,
    'fish/eyelid_r.png': require('../assets/images/fish/eyelid_r.png').default,
    'fish/fin_l.png': require('../assets/images/fish/fin_l.png').default,
    'fish/fin_r.png': require('../assets/images/fish/fin_r.png').default,
    'fish/fin_top.png': require('../assets/images/fish/fin_top.png').default,
    'fish/happy_eye.png': require('../assets/images/fish/happy_eye.png').default,
    'fish/happy_mouth.png': require('../assets/images/fish/happy_mouth.png').default,
    'fish/head.png': require('../assets/images/fish/head.png').default,
    'fish/hungry_eye.png': require('../assets/images/fish/hungry_eye.png').default,
    'fish/hungry_left_fin.png': require('../assets/images/fish/hungry_left_fin.png').default,
    'fish/hungry_left_fin_b.png': require('../assets/images/fish/hungry_left_fin_b.png').default,
    'fish/hungry_mouth.png': require('../assets/images/fish/hungry_mouth.png').default,
    'fish/mouth.png': require('../assets/images/fish/mouth.png').default,
    'fish/neutral_eye.png': require('../assets/images/fish/neutral_eye.png').default,
    'fish/neutral_mouth.png': require('../assets/images/fish/neutral_mouth.png').default,
    'fish/scare_eye.png': require('../assets/images/fish/scare_eye.png').default,
    'fish/sign.png': require('../assets/images/fish/sign.png').default,
    'fish/tail.png': require('../assets/images/fish/tail.png').default,
    'fish/torso.png': require('../assets/images/fish/torso.png').default,
    'gladiator-spritesheet.png': require('../assets/images/gladiator-spritesheet.png').default,
  },
  particles: {},
  sounds: { bg: require('../assets/sounds/bg.mp3').default, upgrade: require('../assets/sounds/upgrade.mp3').default },
  spines: {
    fish: {
      json: require('../assets/spines/fish.json'),
      scale: 1,
      skeleton: null,
    },
  },
  atlases: {},
};

export const Images = {
  'bg/bg': 'bg/bg.jpg',
  'bunny/bunny': 'bunny/bunny.png',
  'fish/confused_eye': 'fish/confused_eye.png',
  'fish/confused_mouth': 'fish/confused_mouth.png',
  'fish/eye_shine': 'fish/eye_shine.png',
  'fish/eyelid_l': 'fish/eyelid_l.png',
  'fish/eyelid_r': 'fish/eyelid_r.png',
  'fish/fin_l': 'fish/fin_l.png',
  'fish/fin_r': 'fish/fin_r.png',
  'fish/fin_top': 'fish/fin_top.png',
  'fish/happy_eye': 'fish/happy_eye.png',
  'fish/happy_mouth': 'fish/happy_mouth.png',
  'fish/head': 'fish/head.png',
  'fish/hungry_eye': 'fish/hungry_eye.png',
  'fish/hungry_left_fin': 'fish/hungry_left_fin.png',
  'fish/hungry_left_fin_b': 'fish/hungry_left_fin_b.png',
  'fish/hungry_mouth': 'fish/hungry_mouth.png',
  'fish/mouth': 'fish/mouth.png',
  'fish/neutral_eye': 'fish/neutral_eye.png',
  'fish/neutral_mouth': 'fish/neutral_mouth.png',
  'fish/scare_eye': 'fish/scare_eye.png',
  'fish/sign': 'fish/sign.png',
  'fish/tail': 'fish/tail.png',
  'fish/torso': 'fish/torso.png',
  'gladiator-spritesheet': 'gladiator-spritesheet.png',
};

export const Sounds = { bg: 'sounds/bg', upgrade: 'sounds/upgrade' };

export const Particles = {};

export const Spines = { fish: null };

Object.keys(Spines).forEach((key) => {
  const k = key;
  delete Spines[k];
  Object.defineProperty(Spines, k, {
    get() {
      return assets.spines[k].skeleton;
    },
  });
});
