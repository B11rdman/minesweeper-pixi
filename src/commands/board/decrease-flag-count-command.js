import { Store } from '../../models/store-model';

export function decreaseFlagCountCommand() {
  Store.game.board.decreaseFlagCount();
}
