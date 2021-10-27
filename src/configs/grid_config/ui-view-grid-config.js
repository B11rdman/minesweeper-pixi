import { isNarrowScreen } from '../../utils/helpful-functions';

export const getUIVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'ui',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'timer',
        // scale: CellScale.showAll,
        bounds: { x: 0.7, y: 0.125, width: 0.2, height: 0.15 },
      },
      {
        name: 'score',
        bounds: { x: 0.725, y: 0.325, width: 0.15, height: 0.1 },
      },
      {
        name: 'icons',
        bounds: { x: 0.65, y: 0.475, width: 0.3, height: 0.1 },
      },
    ],
  };
};

export const getUIVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  const height = isNarrowScreen() ? 0.065 : 0.1;
  return {
    name: 'ui',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'timer',
        // debug: { color: 0x00f0ff },
        bounds: { x: 0.2, y: 0.05, width: 0.6, height },
      },
      {
        name: 'score',
        bounds: { x: 0.3, y: 0.165, width: 0.4, height: 0.09 },
      },
      {
        name: 'icons',
        bounds: { x: 0.12, y: 0.165, width: 0.76, height: 0.09 },
      },
    ],
  };
};
