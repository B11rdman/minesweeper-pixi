import { NUM_OF_MINES } from '../../configs/constants';

export function canUseFlagGuard() {
  return Store.game.board.numOfFlags < NUM_OF_MINES;
}
