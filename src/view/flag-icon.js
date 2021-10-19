import { IconType } from '../configs/constants';
import { getFlagSpriteConfig } from '../configs/image-configs';
import { IconAbstract } from './icon-abstract';

export class FlagIcon extends IconAbstract {
  constructor() {
    super(getFlagSpriteConfig(), IconType.Flag);
  }

  get name() {
    return 'FlagIcon';
  }
}
