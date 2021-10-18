import { CellScale } from '@armathai/grid-core';

export const getGameGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    bounds,
    cells: [
      {
        debug: { color: 0x0000ff },
        name: 'board',
        bounds: { x: 0.2, y: 0.1, width: 0.6, height: 0.8 },
      },
      {
        name: 'input',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
        scale: CellScale.fill,
      },
    ],
  };
};

export const getGameGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    // debug: { color: 0x0000ff },
    bounds,
    cells: [
      {
        debug: { color: 0x0000ff },
        name: 'board',
        bounds: { x: 0.2, y: 0.1, width: 0.6, height: 0.8 },
      },
      {
        name: 'input',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
        scale: CellScale.fill,
      },
    ],
  };
};
