export const getIconsVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'icons',
    debug: { color: 0xffa0ff },
    bounds,
    cells: [
      {
        name: 'flag',
        bounds: { x: 0.65, y: 0.7, width: 0.1, height: 0.1 },
      },
      {
        name: 'mine',
        bounds: { x: 0.85, y: 0.7, width: 0.1, height: 0.1 },
      },
    ],
  };
};

export const getIconsVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'icons',
    debug: { color: 0xffa0ff },
    bounds,
    cells: [
      {
        name: 'flag',
        bounds: { x: 0.1, y: 0.28, width: 0.2, height: 0.1 },
      },
      {
        name: 'mine',
        bounds: { x: 0.7, y: 0.28, width: 0.2, height: 0.1 },
      },
    ],
  };
};
