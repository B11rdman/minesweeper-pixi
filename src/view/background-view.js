import { PixiGrid } from '@armathai/pixi-grid';
import { getBackgroundGridConfig } from '../configs/grid_config/grid-config';
import { getGr } from '../utils/helpful-functions';

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
    const gr = getGr(0x8aa8a5);
    this.setChild('bg', (this._bg = gr));
  }
}
