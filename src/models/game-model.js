import { BoardModel } from './board-model';
import { ObservableModel } from './observable-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');
    this._board = null;

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  init() {
    this._board = new BoardModel();
    this._board.init();
  }
}
