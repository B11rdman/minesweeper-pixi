import { PixiGrid } from '@armathai/pixi-grid';
import { getIconsViewGridConfig } from '../configs/grid_config/grid-config';
import { FlagIcon } from './flag-icon';
import { MineSweeperIcon } from './mine-icon';

export class IconsView extends PixiGrid {
  constructor() {
    super();

    // lego.event
    // .on(GameModelEvent.TimerUpdate, this._onTimerUpdate, this)
    // .on(GameModelEvent.BoardUpdate, this._onBoardUpdate, this);

    this._build();
  }

  get name() {
    return 'IconsView';
  }

  getGridConfig() {
    return getIconsViewGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    this._buildFlag();
    this._buildMine();
  }

  _buildFlag() {
    const flag = new FlagIcon();
    this.setChild('flag', (this._flag = flag));
  }

  _buildMine() {
    const mine = new MineSweeperIcon();
    this.setChild('mine', (this._mine = mine));
  }
}
