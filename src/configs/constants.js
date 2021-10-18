export const BoardState = {
  Unknown: 'unknown',
  Game: 'game',
  Lose: 'lose',
  Win: 'win',
};

export const CellState = {
  Unknown: 'unknown',
  Closed: 'closed',
  Open: 'open',
  Explosion: 'explosion',
  Marked: 'marked',
};

export const CellType = {
  Unknown: 'unknown',
  Mine: 'mine',
  Number: 'Number',
};

export const COL = 10;
export const ROW = 10;
export const NUM_OF_MINES = 30;

export const CELL_WIDTH = 128;
export const CELL_HEIGHT = 128;

export const CellBgTint = {
  Initial: 0xcccccc,
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
  [CellType.Mine]: 0x787878,
};
