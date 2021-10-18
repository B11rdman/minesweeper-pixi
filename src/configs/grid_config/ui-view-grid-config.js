export const getUIVIewGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'game',
    debug: { color: 0x00f0ff },
    bounds,
    cells: [
      //
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
      //
    ],
  };
};
