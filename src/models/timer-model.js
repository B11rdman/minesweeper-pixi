import { ObservableModel } from './observable-model';

export class TimerModel extends ObservableModel {
  constructor() {
    super('TimerModel');

    this._delta = mainApp.mainGame.ticker.deltaMS;
    this._time = 0;
    this._timeInMs = 0;

    this.makeObservable();
  }

  get time() {
    return this._time;
  }

  startTimer() {
    mainApp.mainGame.ticker.add(this._increase, this);
  }

  _increase() {
    this._timeInMs += this._delta;
    this._time = Math.floor(this._timeInMs / 1000);
  }
}
