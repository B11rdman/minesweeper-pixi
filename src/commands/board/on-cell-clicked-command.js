import { lego } from '@armathai/lego';
import { CellType } from '../../configs/constants';
import { Store } from '../../models/store-model';
import { revealCellCommand } from './reveal-cell-command';

export function onCellClickedCommand(uuid) {
  const cell = Store.game.board.getCellByUuid(uuid);
  const { type } = cell;
  switch (type) {
    case CellType.Mine:
      //
      break;
    case CellType.Number:
      lego.command.payload(cell).execute(revealCellCommand);
      break;

    default:
      break;
  }
}
