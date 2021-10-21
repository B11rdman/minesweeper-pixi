import { getLoseViewGridConfig } from '../configs/grid_config/grid-config';
import { getGr } from './background-view';
import { ResultView } from './result-view';

export class LoseView extends ResultView {
  constructor() {
    super();

    this._build();
  }

  get name() {
    return 'LoseView';
  }

  getGridConfig() {
    return getLoseViewGridConfig();
  }

  show() {
    //
  }

  _build() {
    this.setChild('blocker', (this._blocker = getGr(0x000000, 0.75)));
    this.setChild('popup', (this._popup = this.buildLosePopup()));
  }
}
