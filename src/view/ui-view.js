import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { getUIViewGridConfig } from '../configs/grid_config/grid-config';
import { GameModelEvent } from '../events/model';
import { CounterView } from './counter-view';
import { IconsView } from './icons-view';
import { TimerView } from './timer-view';

export class UIView extends PixiGrid {
  constructor() {
    super();

    lego.event
      .on(GameModelEvent.TimerUpdate, this._onTimerUpdate, this)
      .on(GameModelEvent.BoardUpdate, this._onBoardUpdate, this);

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
    this._buildCounter();
  }

  _onBoardUpdate(board) {
    board ? this._buildIcons() : this._destroyIcons();
  }

  _buildIcons() {
    const iconsView = new IconsView();
    this.setChild('icons', (this._iconsView = iconsView));
  }

  _destroyIcons() {
    //
  }

  _onTimerUpdate(timer) {
    timer ? this._buildTimer() : this._destroyTimer();
  }

  _buildTimer() {
    const timer = new TimerView();
    this.setChild('timer', (this._timer = timer));
  }

  _destroyTimer() {
    if (this._timer) {
      this._timer.destroy();
      this._timer = null;
    }
  }

  _buildCounter() {
    const counter = new CounterView();
    this.setChild('score', (this._counter = counter));
  }
}
