import { lego } from '@armathai/lego';
import { CellType } from '../../configs/constants';
import { revealAllCellsCommand } from './reveal-all-cells-command';
import { revealCellCommand } from './reveal-cell-command';

export function mineCheckerActionCommand(cell) {
  const { type, uuid } = cell;

  switch (type) {
    case CellType.Mine:
      lego.command.execute(revealAllCellsCommand);

      break;
    case CellType.Number:
      lego.command.payload(uuid).execute(revealCellCommand);
      break;

    default:
      break;
  }
}
