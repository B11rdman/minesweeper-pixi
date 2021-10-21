import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { getLoseButtonConfig, getWinButtonConfig } from '../configs/butto-config';
import { getButtonNineSliceConfig } from '../configs/nineslice-config';
import { ResultViewEvent } from '../events/view-events';
import { Button } from '../utils/button';
import { makeNineSlice } from '../utils/helpful-functions';

export class ResultView extends PixiGrid {
  constructor() {
    super();
  }

  getGridConfig() {
    throw new Error('Add grid config');
  }

  show() {
    throw new Error('implement show');
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  buildLosePopup() {
    const popup = makeNineSlice(getButtonNineSliceConfig());
    const btn = new Button(getLoseButtonConfig());
    btn.on('click', () => this._loseBtnClick());
    btn.position.set(popup.width / 2, 200);
    popup.addChild(btn);
    return popup;
  }

  buildWinPopup() {
    const popup = makeNineSlice(getButtonNineSliceConfig());
    const btn = new Button(getWinButtonConfig());
    btn.on('click', () => this._winBtnClick());
    btn.position.set(popup.width / 2, 200);
    popup.addChild(btn);
    return popup;
  }

  _loseBtnClick() {
    this._clickEvent();
  }

  _winBtnClick() {
    this._clickEvent();
  }

  _clickEvent() {
    lego.event.emit(ResultViewEvent.RetryBtnClick);
  }
}
