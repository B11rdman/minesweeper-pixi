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
    this._initBoard();
    this._initTimer();
  }

  _initBoard() {
    this._board = new BoardModel();
    this._board.init();
  }

  _initTimer() {
    this._timer = new TimerModel();
    this._timer.startTimer();
  }
}
