export const getForegroundVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'foreground',
    // debug: { color: 0xa0a0ef },
    bounds,
    cells: [
      {
        name: 'text',
        bounds: { x: 0.65, y: 0.7, width: 0.3, height: 0.1 },
      },
    ],
  };
};

export const getForegroundVIewGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'foreground',
    // debug: { color: 0xa0a0ef },
    bounds,
    cells: [
      {
        name: 'text',
        bounds: { x: 0.12, y: 0.28, width: 0.76, height: 0.09 },
      },
    ],
  };
};
