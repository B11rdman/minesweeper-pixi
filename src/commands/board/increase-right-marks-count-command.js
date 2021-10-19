import { Store } from '../../models/store-model';

export function increaseRightMarksCountCommand() {
  Store.game.board.increaseRightMarksCount();
}
