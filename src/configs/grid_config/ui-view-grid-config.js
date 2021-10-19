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
        bounds: { x: 0.7, y: 0.25, width: 0.2, height: 0.15 },
      },
      {
        name: 'icons',
        bounds: { x: 0.65, y: 0.7, width: 0.3, height: 0.1 },
      },
      {
        name: 'score',
        bounds: { x: 0.725, y: 0.5, width: 0.15, height: 0.1 },
      },
    ],
  };
};

export const getUIVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'ui',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'timer',
        // scale: CellScale.showAll,
        bounds: { x: 0.2, y: 0.05, width: 0.6, height: 0.1 },
      },
      {
        name: 'icons',
        bounds: { x: 0.1, y: 0.28, width: 0.8, height: 0.1 },
      },
      {
        name: 'score',
        bounds: { x: 0.3, y: 0.165, width: 0.4, height: 0.1 },
      },
    ],
  };
};
