export const getResultContainerGridLandscapeConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'result_container',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'result',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};

export const getResultContainerGridPortraitConfig = () => {
  const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
  return {
    name: 'result_container',
    // debug: { color: 0x00f0ff },
    bounds,
    cells: [
      {
        name: 'result',
        bounds: { x: 0, y: 0, width: 1, height: 1 },
      },
    ],
  };
};
