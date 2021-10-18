import { ObservableModel } from './observable-model';

export class AppModel extends ObservableModel {
  constructor() {
    super('AppModel');
    this._paused = null;
    this._result = null;

    this.makeObservable();
  }

  get paused() {
    return this._paused;
  }

  set paused(value) {
    this._paused = value;
  }

  get result() {
    return this._result;
  }

  set result(value) {
    this._result = value;
  }

  init() {
    //
  }
}
