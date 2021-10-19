import { BoardState, CellState, CellType, COL, IconType, NUM_OF_MINES, ROW } from '../configs/constants';
import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor() {
    super('BoardModel');

    this._state = null;
    this._cells2D = null;
    this._checker = null;
    this._checkedCells = 0;

    this.makeObservable();
  }

  get checker() {
    return this._checker;
  }

  set checker(value) {
    this._checker = value;
  }

  get checkedCells() {
    return this._checkedCells;
  }

  set checkedCells(value) {
    this._checkedCells = value;
  }

  get state() {
    return this._state;
  }

  get cells2D() {
    return this._cells2D;
  }

  set state(value) {
    this._state = value;
  }

  init() {
    this._initCells2D();
    this._checker = IconType.Mine;
    this._state = BoardState.Game;
  }

  getCellByUuid(uuid) {
    let cell = null;
    for (let i = 0; i < this._cells2D.length; i++) {
      for (let j = 0; j < this._cells2D[i].length; j++) {
        if (this._cells2D[i][j].uuid === uuid) {
          cell = this._cells2D[i][j];
          return cell;
        }
      }
    }
  }

  revealAll() {
    for (let i = 0; i < this._cells2D.length; i++) {
      for (let j = 0; j < this._cells2D[i].length; j++) {
        const cell = this._cells2D[i][j];
        if (cell.state !== CellState.Open || cell.state !== CellState.Marked) {
          cell.state = CellState.Open;
        }
      }
    }
  }

  revealCell(uuid) {
    const cell = this.getCellByUuid(uuid);
    if (cell.state !== CellState.Marked) {
      cell.state = CellState.Open;

      if (!cell.neighborCount) {
        this._openNeighbors(cell);
      }
    }
  }

  _openNeighbors(cell) {
    for (let xoff = -1; xoff <= 1; xoff++) {
      for (let yoff = -1; yoff <= 1; yoff++) {
        let i = cell.i + xoff;
        let j = cell.j + yoff;

        if (i > -1 && i < COL && j > -1 && j < ROW) {
          let neighbor = this._cells2D[i][j];
          if (neighbor.state !== CellState.Open && neighbor.type === CellType.Number) {
            this.revealCell(neighbor.uuid);
          }
        }
      }
    }
  }

  _initCells2D() {
    this._cells2D = this._get2DArray(COL, ROW);
  }

  _get2DArray(cols, rows) {
    let arr = getEmptyArr(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const cell = new CellModel(i, j, CellType.Number);
        // cell.init();
        arr[i][j] = cell;
      }
    }
    this._setMines(NUM_OF_MINES, arr);
    this._setCounters(arr);

    return arr;
  }

  _setMines(cnt, arr) {
    for (let n = 0; n < cnt; n++) {
      this._putMine(arr);
    }
  }

  _putMine(grid) {
    let i = Math.floor(Math.random() * grid.length);
    let j = Math.floor(Math.random() * grid[0].length);
    const cell = grid[i][j];

    if (cell.type !== CellType.Mine) {
      cell.type = CellType.Mine;
    } else {
      this._putMine(grid);
    }
  }

  _setCounters(arr) {
    arr.forEach((col) => {
      col.forEach((cell) => {
        this._countMines(cell, arr);
      });
    });
  }

  _countMines(cell, arr) {
    if (cell.type === CellType.Mine) {
      cell.neighborCount = -1;
      return;
    }

    let total = 0;

    for (let xoff = -1; xoff <= 1; xoff++) {
      for (let yoff = -1; yoff <= 1; yoff++) {
        let i = cell.i + xoff;
        let j = cell.j + yoff;

        if (i > -1 && i < COL && j > -1 && j < ROW) {
          let neighbor = arr[i][j];
          if (neighbor.type === CellType.Mine) {
            total++;
          }
        }
      }
    }

    cell.neighborCount = total;
  }
}

export function getEmptyArr(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}
