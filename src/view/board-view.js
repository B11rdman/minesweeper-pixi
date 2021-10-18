import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { CELL_HEIGHT, CELL_WIDTH, COL, OFFSET, ROW } from '../configs/constants';
import { BoardModelEvent, CellModelEvent } from '../events/model';
import { BoardViewEvent } from '../events/view-events';
import { CellView } from './cell-view';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    this._cells = [];

    lego.event
      .on(BoardModelEvent.Cells2DUpdate, this._onCells2DUpdate, this)
      .on(CellModelEvent.StateUpdate, this._onCellStateUpdate, this);
    //
  }

  get name() {
    return 'BoardView';
  }

  getBounds() {
    return new PIXI.Rectangle(0, 0, ROW * (CELL_WIDTH + OFFSET), COL * (CELL_HEIGHT + OFFSET));
  }

  getCellByUuid(uuid) {
    return this._cells.find((c) => c.uuid === uuid);
  }

  _onCells2DUpdate(cells) {
    cells.forEach((col, i) => {
      col.forEach((cellModel, j) => {
        const cell = new CellView(cellModel);
        cell.position.set(i * (CELL_WIDTH + OFFSET), j * (CELL_HEIGHT + OFFSET));
        cell.on('clicked', (uuid) => this._onCellClicked(uuid));
        this._cells.push(cell);
        this.addChild(cell);
      });
    });

    // const { width, height } = this.getBounds();
    // const gr = new PIXI.Graphics();
    // gr.beginFill(0xfff111, 0.5);
    // gr.drawRect(0, 0, width, height);
    // gr.endFill();
    // this.addChild(gr);
  }

  _onCellClicked(uuid) {
    lego.event.emit(BoardViewEvent.CellClicked, uuid);
  }

  _onCellStateUpdate(newState, oldState, uuid) {
    const cellView = this.getCellByUuid(uuid);
    cellView.reveal();
  }
}
