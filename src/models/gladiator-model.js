import { GladiatorDirection, GladiatorState } from '../configs/constants';
import { ObservableModel } from './observable-model';

export class GladiatorModel extends ObservableModel {
  constructor() {
    super('GladiatorModel');

    this._direction = null;
    this._state = null;
    this.makeObservable();
  }

  get state() {
    return this._state;
  }

  set state(value) {
    this._state = value;
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    this._direction = value;
  }

  init() {
    this._state = GladiatorState.Idle;
  }

  walkLeft() {
    this._state = GladiatorState.Walking;
    this._direction = GladiatorDirection.Left;
  }

  walkRight() {
    this._state = GladiatorState.Walking;
    this._direction = GladiatorDirection.Right;
  }

  idle() {
    this._state = GladiatorState.Idle;
    this._direction = GladiatorDirection.Stop;
  }
}
