import { getWinViewGridConfig } from '../configs/grid_config/grid-config';
import { ResultView } from './result-view';

export class WinView extends ResultView {
  constructor() {
    super();
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
}
