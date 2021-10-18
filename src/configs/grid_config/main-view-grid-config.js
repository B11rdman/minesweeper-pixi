export const getMainGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'main',
    debug: { color: 0xd95027 },
    bounds,
    cells: [
      {
        name: 'background',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
      {
        name: 'game',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};

export const getMainGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'main',
    debug: { color: 0xd95027 },
    bounds,
    cells: [
      {
        name: 'background',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
      {
        name: 'game',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};
