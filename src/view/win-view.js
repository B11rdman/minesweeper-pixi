import { getWinViewGridConfig } from '../configs/grid_config/grid-config';
import { getGr } from '../utils/helpful-functions';
import { ResultView } from './result-view';

export class WinView extends ResultView {
  constructor() {
    super();

    this._build();
  }

  get name() {
    return 'WinView';
  }

  getGridConfig() {
    return getWinViewGridConfig();
  }

  show() {
    //
  }

  _build() {
    this.setChild('blocker', (this._blocker = getGr(0x000000, 0.75)));
    this.setChild('popup', (this._popup = this.buildWinPopup()));
  }
}
