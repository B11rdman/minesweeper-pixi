import { Store } from '../../models/store-model';

export function increaseFlagCountCommand() {
  Store.game.board.increaseFlagCount();
}
