import { IconType } from '../configs/constants';
import { IconAbstract } from './icon-abstract';

export class MineSweeperIcon extends IconAbstract {
  constructor() {
    super(IconType.Mine);
  }

  get name() {
    return 'MineSweeperIcon';
  }
}
