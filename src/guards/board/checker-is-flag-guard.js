import { IconType } from '../../configs/constants';

export function checkerIsFlagGuard() {
  return Store.game.board.checker === IconType.Flag;
}
