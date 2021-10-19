import * as PIXI from 'pixi.js';
import { NUM_OF_MINES } from '../configs/constants';
import { getCounterTextConfig } from '../configs/text-configs';
import { makeText } from '../utils/helpful-functions';

export class CounterView extends PIXI.Container {
  constructor() {
    super();

    this._flags = 0;
    // lego.event.on(TimerModelEvent.TimeUpdate, this._onTimeUpdate, this);
    this._build();
  }

  get name() {
    return 'CounterView';
  }

  _build() {
    this._buildLabel();
  }

  _buildLabel() {
    const text = `${this._flags}/${NUM_OF_MINES}`;
    const label = makeText(getCounterTextConfig(text));
    this.addChild((this._label = label));
  }
}
