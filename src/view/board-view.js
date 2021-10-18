import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { COL, ROW } from '../configs/constants';
import { getGameGridConfig } from '../configs/grid_config/grid-config';
import { BoardModelEvent } from '../events/model';
import { getEmptyArr } from '../models/board-model';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    lego.event.on(BoardModelEvent.Cells2DUpdate, this._onCells2DUpdate, this);
    //
  }

  get name() {
    return 'BoardView';
  }

  getBounds() {
    const { width: cW, height: cH, x: cX, y: cY } = getGameGridConfig().cells.find((c) => c.name === 'board').bounds;
    const { clientWidth: dW, clientHeight: dH } = document.body;
    const width = dW * cW;
    const height = dH * cH;
    const x = dW * cX;
    const y = dH * cY;
    return new PIXI.Rectangle(x, y, width, height);
  }

  _onCells2DUpdate(cells) {
    const types = getEmptyArr(COL, ROW);
    const num = getEmptyArr(COL, ROW);
    cells.forEach((col, i) => {
      col.forEach((row, j) => {
        types[i][j] = row.type;
        num[i][j] = row.neighborCount;
      });
    });

    console.table(types);
    console.table(num);
  }
}
