import { Store } from '../../models/store-model';

export function onIconClickedCommand(type) {
  Store.game.board.checker = type;
}
