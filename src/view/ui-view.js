import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import * as PIXI from 'pixi.js';
import { getUIViewGridConfig } from '../configs/grid_config/grid-config';
import { UIViewEvents } from '../events/view-events';

export class UIView extends PixiGrid {
  constructor() {
    super();

    this._build();
  }

  get name() {
    return 'UIView';
  }

  getGridConfig() {
    return getUIViewGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    this._buildLeftBtn();
    this._buildRightBtn();
  }

  _buildLeftBtn() {
    const btn = this._getGr(0x7a8c5b7);
    btn.interactive = true;
    btn.on('pointerdown', (e) => lego.event.emit(UIViewEvents.LeftBtnDown));
    this.setChild('left_btn', (this._leftBtn = btn));
  }

  _buildRightBtn() {
    const btn = this._getGr(0xc5a9e2);
    btn.interactive = true;
    btn.on('pointerdown', (e) => lego.event.emit(UIViewEvents.RightBtnDown));
    this.setChild('right_btn', (this._rightBtn = btn));
  }

  _getGr(color) {
    const gr = new PIXI.Graphics();
    gr.beginFill(color, 0.1);
    gr.drawRect(10, 10, 10, 10);
    gr.endFill();
    return gr;
  }
}
