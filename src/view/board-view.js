import * as PIXI from 'pixi.js';
import { getGameGridConfig } from '../configs/grid_config/grid-config';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    // lego.event
    //

    this._buildTile();
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

  _buildTile() {
    // const tile = new PIXI.TilingSprite(getBgSpriteConfig(), 111, 111);
    // this.addChild((this._tile = tile));
  }
}
