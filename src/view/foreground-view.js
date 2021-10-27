import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { getForegroundViewGridConfig } from '../configs/grid_config/grid-config';
import { getTutorialTextConfig } from '../configs/text-configs';
import { GameModelEvent } from '../events/model';
import { makeText } from '../utils/helpful-functions';

export class ForegroundView extends PixiGrid {
  constructor() {
    super();

    lego.event.on(GameModelEvent.BoardUpdate, this._onBoardUpdate, this);
  }

  get name() {
    return 'ForegroundView';
  }

  getGridConfig() {
    return getForegroundViewGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _onBoardUpdate(board) {
    board ? this._buildTutorial() : this._destroyTutorial();
  }

  _buildTutorial() {
    const label = makeText(getTutorialTextConfig());
    this.setChild('text', (this._label = label));
  }

  _destroyTutorial() {
    this._label.destroy();
    this._label = null;
  }
}
