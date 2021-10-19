import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { IconEvents } from '../events/view-events';
import { makeSprite } from '../utils/helpful-functions';

export class IconAbstract extends PIXI.Container {
  constructor(config, type) {
    super();
    this._type = type;

    this._build(config);
  }

  get name() {
    return 'IconAbstract';
  }

  setInteractive(value) {
    this._hitArea.interactive = value;
  }

  _build(config) {
    this._buildIcon(config);
    this._buildHitArea();
  }

  _buildIcon(config) {
    const icon = makeSprite(config);
    this.addChild((this._icon = icon));
  }

  _buildHitArea() {
    const width = 78;
    const height = 78;
    const gr = new PIXI.Graphics();
    gr.beginFill(0xff0000, 0.5);
    gr.drawRect(-width / 2, -height / 2, width, height);
    gr.endFill();

    this.addChild((this._hitArea = gr));

    this.setInteractive(true);
    this._hitArea.on('pointerdown', () => {
      lego.event.emit(IconEvents.Click, this._type);
    });
  }
}
