import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import * as PIXI from 'pixi.js';
import { IconType } from '../configs/constants';
import { getIconsViewGridConfig } from '../configs/grid_config/grid-config';
import { BoardModelEvent } from '../events/model';
import { IconEvents } from '../events/view-events';
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
    const flagHitArea = new PIXI.Graphics();
    flagHitArea.beginFill(0xffffff, 1);
    flagHitArea.drawRect(-50, -50, 100, 100);
    flagHitArea.endFill();
    this.setChild('flag', (this._flagHitArea = flagHitArea));

    this._flagHitArea.interactive = true;
    this._flagHitArea.on('pointerdown', () => {
      lego.event.emit(IconEvents.Click, IconType.Flag);
    });
  }

  _buildMineHitArea() {
    const mineHitArea = new PIXI.Graphics();
    mineHitArea.beginFill(0xffffff, 1);
    mineHitArea.drawRect(-50, -50, 100, 100);
    mineHitArea.endFill();
    this.setChild('mine', (this._mineHitArea = mineHitArea));

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
        this._mineHitArea.tint = 0xb0bfbe;
        this._flagHitArea.tint = 0xa5cc7e;
        break;
      case IconType.Mine:
        this._mineHitArea.tint = 0xa5cc7e;
        this._flagHitArea.tint = 0xb0bfbe;
        break;

      default:
        break;
    }
  }
}
