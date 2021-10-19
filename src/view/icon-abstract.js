import * as PIXI from 'pixi.js';
import { IconType } from '../configs/constants';
import { getFlagSpriteConfig, getMineSweeperSpriteConfig } from '../configs/image-configs';
import { makeSprite } from '../utils/helpful-functions';

export class IconAbstract extends PIXI.Container {
  constructor(type) {
    super();
    this._type = type;

    this._build();
  }

  setInteractive(value) {
    this._hitArea.interactive = value;
  }

  _build() {
    this._buildIcon();
  }

  _buildIcon() {
    const config = this._type === IconType.Flag ? getFlagSpriteConfig() : getMineSweeperSpriteConfig();
    const icon = makeSprite(config);
    this.addChild((this._icon = icon));
  }
}
