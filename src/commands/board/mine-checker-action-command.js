import { lego } from '@armathai/lego';
import { BoardState, CellType } from '../../configs/constants';
import { revealAllCellsCommand } from './reveal-all-cells-command';
import { revealCellCommand } from './reveal-cell-command';
import { setBoardStateCommand } from './set-board-state-command';

export function mineCheckerActionCommand(cell) {
  const { type, uuid } = cell;

  switch (type) {
    case CellType.Mine:
      lego.command.payload(BoardState.Lose).execute(revealAllCellsCommand, setBoardStateCommand);

      break;
    case CellType.Number:
      lego.command.payload(uuid).execute(revealCellCommand);
      break;

    default:
      break;
  }
}
