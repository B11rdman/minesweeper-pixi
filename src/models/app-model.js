import { ObservableModel } from './observable-model';

export class AppModel extends ObservableModel {
  constructor() {
    super('AppModel');
    this._paused = null;

    this.makeObservable();
  }

  get paused() {
    return this._paused;
  }

  set paused(value) {
    this._paused = value;
  }

  init() {
    //
  }
}
