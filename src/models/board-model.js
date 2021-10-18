import { GladiatorModel } from './gladiator-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor() {
    super('BoardModel');

    this._gladiator = null;
    this._state = null;
    this.makeObservable();
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  get gladiator() {
    return this._gladiator;
  }

  set gladiator(value) {
    this._gladiator = value;
  }

  init() {
    this._gladiator = new GladiatorModel();
    this._gladiator.init();
  }
}
