import { BoardModel } from './board-model';
import { ObservableModel } from './observable-model';
import { TimerModel } from './timer-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');
    this._board = null;
    this._timer = null;

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  get timer() {
    return this._timer;
  }

  init() {
    this.initBoard();
    this.initTimer();
  }

  initBoard() {
    this._board = new BoardModel();
    this._board.init();
  }

  initTimer() {
    this._timer = new TimerModel();
  }

  destroyBoard() {
    this._board.destroy();
    this._board = null;
  }

  destroyTimer() {
    this._timer.destroy();
    this._timer = null;
  }
}
