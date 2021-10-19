import { CellAlign, CellScale } from '@armathai/grid-core';

export const getGameGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    bounds,
    debug: { color: 0x0000ff },
    cells: [
      {
        name: 'board',
        scale: CellScale.showAll,
        align: CellAlign.leftCenter,
        bounds: { x: 0.08, y: 0.03, width: 0.5, height: 0.94 },
      },
    ],
  };
};

export const getGameGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    debug: { color: 0x0000ff },
    bounds,
    cells: [
      {
        name: 'board',
        scale: CellScale.showAll,
        align: CellAlign.centerBottom,
        bounds: { x: 0.025, y: 0.4, width: 0.95, height: 0.5 },
      },
    ],
  };
};
