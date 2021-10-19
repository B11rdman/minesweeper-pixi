import { IconType } from '../configs/constants';
import { IconAbstract } from './icon-abstract';

export class FlagIcon extends IconAbstract {
  constructor() {
    super(IconType.Flag);
  }

  get name() {
    return 'FlagIcon';
  }
}
