import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { getMainGridConfig } from './configs/grid_config/grid-config';
import { MainGameEvents } from './events/view-events';
import { BackgroundView } from './view/background-view';
import { ForegroundView } from './view/foreground-view';
import { GameView } from './view/game-view';
import { ResultContainer } from './view/result-container';
import { UIView } from './view/ui-view';

export class MainView extends PixiGrid {
  constructor() {
    super();

    lego.event.on(MainGameEvents.Resize, this.onResize, this);
    this._build();
  }

  getGridConfig() {
    return getMainGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  onResize() {
    this.rebuild();
  }

  _build() {
    this.setChild('background', (this._bg = new BackgroundView()));
    this.setChild('game', (this._gameView = new GameView()));
    this.setChild('game', (this._uiView = new UIView()));
    this.setChild('game', (this._foregroundView = new ForegroundView()));
    this.setChild('game', (this._resultView = new ResultContainer()));

    this._bg.alpha = 0;
    this._gameView.alpha = 0;
    this._uiView.alpha = 0;
    this._resultView.alpha = 0;
    this._foregroundView.alpha = 0;
    setTimeout(() => {
      this.rebuild();
      this.onResize();
      this._bg.alpha = 1;
      this._gameView.alpha = 1;
      this._uiView.alpha = 1;
      this._resultView.alpha = 1;
      this._foregroundView.alpha = 1;
    }, 400);
  }
}
