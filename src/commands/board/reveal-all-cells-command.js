import { Store } from '../../models/store-model';

export function revealAllCellsCommand() {
  Store.game.board.revealAll();
}
