import { CellScale } from '@armathai/grid-core';

export const getUIVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'left_btn',
        bounds: { x: 0, y: 0, width: 0.25, height: 1 },
        scale: CellScale.fill,
      },
      {
        name: 'right_btn',
        bounds: { x: 0.75, y: 0, width: 0.25, height: 1 },
        scale: CellScale.fill,
      },
    ],
  };
};

export const getUIVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'left_btn',
        bounds: { x: 0, y: 0, width: 0.25, height: 1 },
        scale: CellScale.fill,
      },
      {
        name: 'right_btn',
        bounds: { x: 0.75, y: 0, width: 0.25, height: 1 },
        scale: CellScale.fill,
      },
    ],
  };
};
