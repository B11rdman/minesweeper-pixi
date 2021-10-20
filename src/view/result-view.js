import { PixiGrid } from '@armathai/pixi-grid';
import { getLoseButtonConfig } from '../configs/butto-config';
import { getButtonNineSliceConfig } from '../configs/nineslice-config';
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
    btn.position.set(100, 200);
    popup.addChild(btn);
    return popup;
  }

  _loseBtnClick() {
    // retry
  }
}
