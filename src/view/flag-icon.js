import * as PIXI from 'pixi.js';
import { IconType } from '../configs/constants';
import { IconAbstract } from './icon-abstract';

export class FlagIcon extends IconAbstract {
  constructor() {
    super(IconType.Flag);
  }

  get name() {
    return 'FlagIcon';
  }

  getBounds() {
    const width = 64;
    const height = 74;
    return new PIXI.Rectangle(-width / 2, -height / 2, width, height);
  }
}
