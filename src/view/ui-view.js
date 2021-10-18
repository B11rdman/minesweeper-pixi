import { PixiGrid } from '@armathai/pixi-grid';
import { getUIViewGridConfig } from '../configs/grid_config/grid-config';

export class UIView extends PixiGrid {
  constructor() {
    super();

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
    //
  }
}
