import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { getTimerTextConfig } from '../configs/text-configs';
import { TimerModelEvent } from '../events/model';
import { makeText, timeToSMH } from '../utils/helpful-functions';

export class TimerView extends PIXI.Container {
  constructor() {
    super();

    lego.event.on(TimerModelEvent.TimeUpdate, this._onTimeUpdate, this);
    this._build();
  }

  get name() {
    return 'TimerView';
  }

  _build() {
    this._buildLabel(timeToSMH(0));
  }

  _buildLabel(time) {
    const { seconds: s, minutes: m } = time;
    const text = `${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    const label = makeText(getTimerTextConfig(text));
    this.addChild((this._label = label));
  }

  _onTimeUpdate(value) {
    const time = timeToSMH(value);
    if (this._label) {
      this._label.destroy();
      this._label = null;
      this._buildLabel(time);
    }
  }
}
