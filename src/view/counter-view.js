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

    // const { x, y, width, height } = this.getBounds();
    // const gr = new PIXI.Graphics();
    // gr.beginFill(0x0000ff, 0.5);
    // gr.drawRect(x, y, width, height);
    // gr.endFill();
    // this.addChild(gr);
  }

  get name() {
    return 'CounterView';
  }

  getBounds() {
    return new PIXI.Rectangle(-20, -15, 140, 80);
  }

  destroy() {
    lego.event.off(BoardModelEvent.NumOfFlagsUpdate, this._flagsNumberUpdate, this);
    super.destroy({ children: true });
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
    this._label.text = `${this._flags}/${NUM_OF_MINES}`;
  }
}
