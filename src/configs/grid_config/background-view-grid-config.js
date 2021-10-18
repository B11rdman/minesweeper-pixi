import { CellScale } from '@armathai/grid-core';

export const getBackgroundViewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'background',
    // debug: { color: 0x00ff00 },
    bounds,
    cells: [
      {
        name: 'bg',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
        scale: CellScale.fill,
      },
    ],
  };
};

export const getBackgroundViewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'background',
    // debug: { color: 0x00ff00 },
    bounds,
    cells: [
      {
        name: 'bg',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
        scale: CellScale.envelop,
      },
    ],
  };
};
