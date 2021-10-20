import { CellScale } from '@armathai/grid-core';

export const getWinViewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'win',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'popup',
        bounds: { x: 0.3, y: 0.2, width: 0.4, height: 0.6 },
      },
      {
        name: 'blocker',
        scale: CellScale.fill,
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};

export const getWinViewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'win',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'popup',
        bounds: { x: 0.2, y: 0.3, width: 0.6, height: 0.4 },
      },
      {
        name: 'blocker',
        scale: CellScale.fill,
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};
