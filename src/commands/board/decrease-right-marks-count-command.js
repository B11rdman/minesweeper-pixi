import { Store } from '../../models/store-model';

export function decreaseRightMarksCountCommand() {
  Store.game.board.decreaseRightMarksCount();
}
