import * as PIXI from 'pixi.js';
import { IconType } from '../configs/constants';
import { IconAbstract } from './icon-abstract';

export class MineSweeperIcon extends IconAbstract {
  constructor() {
    super(IconType.Mine);

    // const gr = new PIXI.Graphics();
    // gr.beginFill(0x0000ff, 0.5);
    // gr.drawRect(-32, -37, 64, 74);
    // gr.endFill();
    // this.addChild(gr);
  }

  get name() {
    return 'MineSweeperIcon';
  }

  getBounds() {
    const width = 64;
    const height = 74;
    return new PIXI.Rectangle(-width / 2, -height / 2, width, height);
  }
}
