// import { Stage } from 'pixi-layers';
import { lego } from '@armathai/lego';
import { legologger } from '@armathai/lego-logger';
import * as PIXI from 'pixi.js';
import { assets } from './assets';
import { onGameInitCommand } from './commands/on-game-init-command';
import { legoLoggerConfig } from './configs/lego-logger-config';
import { ScreenSizeConfig } from './configs/screen-size-config';
import { MainGameEvents } from './events/view-events';
import { WindowEvent } from './events/window-events';
import { MainView } from './main-view';
import { SoundObservant } from './sound-observant';
import { fitDimension } from './utils/helpful-functions';

export class MainGame extends PIXI.Application {
  constructor() {
    super({
      powerPreference: 'high-performance',
      resolution: 1,
      sharedTicker: true,
    });
  }

  init() {
    this.view.classList.add('app');
    document.body.appendChild(this.view);

    this._initLego();
    this._loadAssets();
  }

  onResize(size) {
    const { min, max } = ScreenSizeConfig.size.ratio;
    const { width, height } = fitDimension(size, min, max);

    this._resizeCanvas(width, height);
    this._resizeRenderer(width, height);

    lego.event.emit(MainGameEvents.Resize, this.viewBounds, this.viewScale);
  }

  onFocusChange(value) {
    lego.event.emit(WindowEvent.FocusChange, value);
  }

  _ready() {
    this._mainView = new MainView();
    this.stage.addChild(this._mainView);

    this._mainView.interactive = true;
    this._mainView.on('pointerdown', () => lego.event.emit(MainGameEvents.FirstInteraction));

    this._sound = new SoundObservant();

    lego.event.emit(MainGameEvents.MainGameReady);
  }

  _loadAssets() {
    const { images, sounds } = assets;
    this._loadImages(images);
  }

  _loadImages(images) {
    Object.keys(images).forEach((image) => {
      this.loader.add(image, images[image]);
    });

    this.loader.onComplete.add(this._onImagesLoadComplete, this);
    this.loader.load();
  }

  _onImagesLoadComplete() {
    this._ready();
  }

  _initLego() {
    legologger.start(lego, legoLoggerConfig);

    lego.command.execute(onGameInitCommand);
    lego.event.emit(MainGameEvents.Init);
  }

  _resizeCanvas(width, height) {
    const { style } = this.renderer.view;
    style.width = `${width}px`;
    style.height = `${height}px`;
  }

  _resizeRenderer(width, height) {
    this.renderer.resize(width, height);
  }
}
