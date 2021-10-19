import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { NUM_OF_MINES } from '../configs/constants';
import { getCounterTextConfig } from '../configs/text-configs';
import { BoardModelEvent } from '../events/model';
import { makeText } from '../utils/helpful-functions';

export class CounterView extends PIXI.Container {
  constructor() {
    super();

    this._flags = 0;
    lego.event.on(BoardModelEvent.NumOfFlagsUpdate, this._flagsNumberUpdate, this);
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

  _flagsNumberUpdate(number) {
    this._flags = number;
    if (this._label) {
      this._label.destroy();
      this._label = null;
      this._buildLabel();
    }
  }
}
