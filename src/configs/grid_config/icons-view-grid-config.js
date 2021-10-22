import { CellScale } from '@armathai/grid-core';
import { isSquareLikeScreen } from '../../utils/helpful-functions';

export const getIconsVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'icons',
    // debug: { color: 0xffa0ff },
    bounds,
    cells: [
      {
        name: 'flag',
        bounds: { x: 0.65, y: 0.5, width: 0.1, height: 0.1 },
      },
      {
        name: 'flag_hit_area',
        scale: CellScale.fill,
        bounds: { x: 0.65, y: 0.5, width: 0.1, height: 0.1 },
      },
      {
        name: 'mine',
        bounds: { x: 0.85, y: 0.5, width: 0.1, height: 0.1 },
      },
      {
        name: 'mine_hit_area',
        scale: CellScale.fill,
        bounds: { x: 0.85, y: 0.5, width: 0.1, height: 0.1 },
      },
    ],
  };
};

export const getIconsVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  const width = isSquareLikeScreen() ? 0.1 : 0.165;
  return {
    name: 'icons',
    // debug: { color: 0xffa0ff },
    bounds,
    cells: [
      {
        name: 'flag',
        bounds: { x: 0.2, y: 0.28, width, height: 0.09 },
      },
      {
        name: 'flag_hit_area',
        scale: CellScale.fill,
        bounds: { x: 0.2, y: 0.28, width, height: 0.09 },
      },
      {
        name: 'mine',
        bounds: { x: 0.7, y: 0.28, width, height: 0.09 },
      },
      {
        name: 'mine_hit_area',
        scale: CellScale.fill,
        bounds: { x: 0.7, y: 0.28, width, height: 0.09 },
      },
    ],
  };
};
