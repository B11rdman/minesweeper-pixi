import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { AppResult } from '../configs/constants';
import { getResultContainerGridConfig } from '../configs/grid_config/grid-config';
import { AppModelEvent } from '../events/model';
import { LoseView } from './lose-view';
import { WinView } from './win-view';

export class ResultContainer extends PixiGrid {
  constructor() {
    super();

    lego.event.on(AppModelEvent.ResultUpdate, this._onResultUpdate, this);
  }

  get name() {
    return 'ResultContainer';
  }

  getGridConfig() {
    return getResultContainerGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _onResultUpdate(result) {
    switch (result) {
      case AppResult.Win:
        this._view = new WinView();
        break;
      case AppResult.Lose:
        this._view = new LoseView();
        break;
      case AppResult.Unknown:
        this._view && this._view.destroy();
        return;

      default:
        break;
    }

    this.setChild('result', this._view);
    this._view.show();
  }
}
