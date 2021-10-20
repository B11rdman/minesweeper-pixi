export const BoardState = {
  Unknown: 'unknown',
  Game: 'game',
  Lose: 'lose',
  Win: 'win',
};

export const AppResult = {
  Unknown: 'unknown',
  Lose: 'lose',
  Win: 'win',
};

export const CellState = {
  Unknown: 'unknown',
  Closed: 'closed',
  Open: 'open',
  Marked: 'marked',
};

export const CellType = {
  Unknown: 'unknown',
  Mine: 'mine',
  Number: 'Number',
};

export const IconType = {
  Flag: 'Flag',
  Mine: 'Mine',
};

export const COL = 8;
export const ROW = 8;
export const NUM_OF_MINES = 15;

export const CELL_WIDTH = 64;
export const CELL_HEIGHT = 64;
export const OFFSET = 2;

export const CellBgTint = {
  Initial: 0xdddddd,
  0: 0xcedb9e,
  1: 0xdbd89e,
  2: 0xdbd09e,
  3: 0xdbca9e,
  4: 0xdbc59e,
  5: 0xd6b28d,
  6: 0xd6a88d,
  7: 0xd6a08d,
  8: 0xe08f82,
  9: 0xed6464,
  [CellType.Mine]: 0xaaaaaa,
};
