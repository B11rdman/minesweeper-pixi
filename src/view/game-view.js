import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { getGameGridConfig } from '../configs/grid_config/grid-config';
import { GameModelEvent } from '../events/model';
import { BoardView } from './board-view';

export class GameView extends PixiGrid {
  constructor() {
    super();

    lego.event.on(GameModelEvent.BoardUpdate, this._onBoardUpdate, this);
  }

  get name() {
    return 'GameView';
  }

  getGridConfig() {
    return getGameGridConfig();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _onBoardUpdate(board) {
    board ? this._buildBoard() : this._destroyBoard();
  }

  _buildBoard() {
    const board = new BoardView();
    this.setChild('board', (this._board = board));
  }

  _destroyBoard() {
    if (this._board) {
      this._board.destroy();
      this._board = null;
    }
  }
}
