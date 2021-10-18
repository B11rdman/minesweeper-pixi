import { CellState } from '../configs/constants';
import { ObservableModel } from './observable-model';

export class CellModel extends ObservableModel {
  constructor(i, j, type) {
    super('CellModel');

    this._state = null;
    this._type = type;
    this._neighborCount = null;
    this._i = i;
    this._j = j;
    this.makeObservable();
  }

  get state() {
    return this._state;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get neighborCount() {
    return this._neighborCount;
  }

  set neighborCount(value) {
    this._neighborCount = value;
  }

  get i() {
    return this._i;
  }

  get j() {
    return this._j;
  }

  set state(value) {
    this._state = value;
  }

  init() {
    this._state = CellState.Closed;
  }
}
