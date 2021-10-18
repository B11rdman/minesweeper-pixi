import { lego } from '@armathai/lego';
import { MainGameEvents } from './events/view-events';
import { MainGame } from './main-game';

class MainApp {
  constructor() {
    lego.event.on(MainGameEvents.MainGameReady, this._onMainGameReady, this);
  }

  get mainGame() {
    return this._mainGame;
  }

  init() {
    this._mainGame = new MainGame();
    this._mainGame.init();
  }

  windowSize() {
    const { clientWidth, clientHeight } = document.body;

    return { width: clientWidth, height: clientHeight };
  }

  resize() {
    const { width, height } = this.windowSize();

    if (width === 0 || height === 0) return;

    this._mainGame.onResize({ width, height });
  }

  onFocusChange(value) {
    this._mainGame.onFocusChange(value);
  }

  _onMainGameReady() {
    this.resize();
  }
}

export const Main = new MainApp();
