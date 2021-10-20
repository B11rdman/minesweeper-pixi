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

  _onBoardUpdate(board) {
    if (board) {
      this._buildIcons();
      this._buildCounter();
    } else {
      this._destroyIcons();
      this._destroyCounter();
    }
  }

  _buildIcons() {
    const iconsView = new IconsView();
    this.setChild('icons', (this._iconsView = iconsView));
  }

  _destroyIcons() {
    this._iconsView.destroy();
    this._iconsView = null;
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

  _destroyCounter() {
    this._counter.destroy();
    this._counter = null;
  }
}
