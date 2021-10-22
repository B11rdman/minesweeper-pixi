export const getCellTextConfig = (text) => {
  const color = {
    1: 0x00000f,
    2: 0x00007f,
    3: 0x0000ff,
    4: 0x0008ff,
    5: 0x000fff,
    6: 0x008fff,
    7: 0x00ffff,
    8: 0x08ffff,
  };
  return {
    text,
    style: {
      fontSize: 24,
      fontFamily: 'Arial',
      fill: color[text],
      align: 'center',
    },
  };
};

export const getTimerTextConfig = (text) => {
  return {
    text,
    style: {
      fontSize: 64,
      fontFamily: 'Arial',
      fill: 0x000000,
      align: 'center',
    },
  };
};

export const getResultTextConfig = (text) => {
  return {
    text,
    style: {
      fontSize: 48,
      fontFamily: 'Arial',
      fill: 0x000000,
      align: 'center',
    },
  };
};

export const getCounterTextConfig = (text) => {
  return {
    text,
    style: {
      fontSize: 48,
      fontFamily: 'Arial',
      fill: 0x000000,
      align: 'center',
    },
  };
};

export const getLoseButtonTextConfig = () => {
  return {
    text: 'Retry',
    style: {
      fontSize: 24,
      fontFamily: 'Arial',
      fill: 0x000000,
      align: 'center',
    },
  };
};

export const getWinButtonTextConfig = () => {
  return {
    text: 'Play Again',
    style: {
      fontSize: 24,
      fontFamily: 'Arial',
      fill: 0x000000,
      align: 'center',
    },
  };
};
