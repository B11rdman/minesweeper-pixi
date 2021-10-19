import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { IconType } from '../configs/constants';
import { getIconsViewGridConfig } from '../configs/grid_config/grid-config';
import { BoardModelEvent } from '../events/model';
import { IconEvents } from '../events/view-events';
import { getGr } from './background-view';
import { FlagIcon } from './flag-icon';
import { MineSweeperIcon } from './mine-icon';

export class IconsView extends PixiGrid {
  constructor() {
    super();

    lego.event.on(BoardModelEvent.CheckerUpdate, this._onCheckerUpdate, this);

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
    this._buildFlagHitArea();
    this._buildMineHitArea();
    this._buildFlag();
    this._buildMine();
  }

  _buildFlag() {
    const flag = new FlagIcon();
    this.setChild('flag', (this._flag = flag));
  }

  _buildFlagHitArea() {
    const flagHitArea = getGr(0xababab);
    this.setChild('flag_hit_area', (this._flagHitArea = flagHitArea));

    this._flagHitArea.interactive = true;
    this._flagHitArea.on('pointerdown', () => {
      lego.event.emit(IconEvents.Click, IconType.Flag);
    });
  }

  _buildMineHitArea() {
    const mineHitArea = getGr(0xababab);
    this.setChild('mine_hit_area', (this._mineHitArea = mineHitArea));

    this._mineHitArea.interactive = true;
    this._mineHitArea.on('pointerdown', () => {
      lego.event.emit(IconEvents.Click, IconType.Mine);
    });
  }

  _buildMine() {
    const mine = new MineSweeperIcon();
    this.setChild('mine', (this._mine = mine));
  }

  _onCheckerUpdate(value) {
    switch (value) {
      case IconType.Flag:
        this._mineHitArea.tint = 0xffffff;
        this._flagHitArea.tint = 0xff0000;
        break;
      case IconType.Mine:
        this._mineHitArea.tint = 0xff0000;
        this._flagHitArea.tint = 0xffffff;
        break;

      default:
        break;
    }
  }
}
