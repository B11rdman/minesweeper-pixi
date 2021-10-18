import { BoardState } from '../configs/constants';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor() {
    super('BoardModel');

    this._state = null;
    this.makeObservable();
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  init() {
    this._state = BoardState.Game;
  }
}
