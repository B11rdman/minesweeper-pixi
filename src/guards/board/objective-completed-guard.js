import { NUM_OF_MINES } from '../../configs/constants';

export function objectiveReachedGuard() {
  return Store.game.board.rightMarks === NUM_OF_MINES;
}
