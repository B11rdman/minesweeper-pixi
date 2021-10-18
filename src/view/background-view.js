import { PixiGrid } from '@armathai/pixi-grid';
import * as PIXI from 'pixi.js';
import { getBackgroundGridConfig } from '../configs/grid_config/grid-config';
import { getBgSpriteConfig } from '../configs/image-configs';
import { makeSprite } from '../utils/helpful-functions';

export class BackgroundView extends PixiGrid {
  constructor() {
    super();

    this.build();
  }

  getGridConfig() {
    return getBackgroundGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  build() {
    this._bg = makeSprite(getBgSpriteConfig());
    this._bg.bounds = () => {
      const width = 1200;
      const height = 600;

      return new PIXI.Rectangle(-width / 2, -height / 2, width, height);
    };
    this.setChild('bg', this._bg);
  }
}
