import { IconType } from '../configs/constants';
import { getMineSweeperSpriteConfig } from '../configs/image-configs';
import { IconAbstract } from './icon-abstract';

export class MineSweeperIcon extends IconAbstract {
  constructor() {
    super(getMineSweeperSpriteConfig(), IconType.Mine);
  }

  get name() {
    return 'MineSweeperIcon';
  }
}
