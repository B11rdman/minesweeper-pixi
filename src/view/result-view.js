import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import gsap, { Sine } from 'gsap/all';
import { getLoseButtonConfig, getWinButtonConfig } from '../configs/butto-config';
import { getResultPopupNineSliceConfig } from '../configs/nineslice-config';
import { getResultTextConfig } from '../configs/text-configs';
import { ResultViewEvent } from '../events/view-events';
import { Button } from '../utils/button';
import { makeNineSlice, makeText } from '../utils/helpful-functions';

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
    const popup = makeNineSlice(getResultPopupNineSliceConfig());

    popup.addChild(this._getLabel('lose', popup));
    popup.addChild(this._getBtn('lose', popup));
    return popup;
  }

  buildWinPopup() {
    const popup = makeNineSlice(getResultPopupNineSliceConfig());
    popup.addChild(this._getBtn('win', popup));
    popup.addChild(this._getLabel('win', popup));
    return popup;
  }

  _getBtn(type, popup) {
    const btn = new Button(type === 'lose' ? getLoseButtonConfig() : getWinButtonConfig());
    btn.once('click', () => {
      type === 'lose' ? this._loseBtnClick() : this._winBtnClick();
    });
    btn.position.set(popup.width / 2, 325);
    gsap.to(btn.scale, { x: 1.2, y: 1.2, duration: 0.5, ease: Sine.easeInOut, repeat: -1, yoyo: true });
    return btn;
  }

  _getLabel(type, popup) {
    const label = makeText(getResultTextConfig(type === 'lose' ? 'You Lost' : 'YOU WON!!!'));
    label.anchor.set(0.5);
    label.position.set(popup.width / 2, 100);
    return label;
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
