import { lego } from '@armathai/lego';
import { CellState } from '../../configs/constants';
import { setCellStateCommand } from './set-cell-state-command';
import { setCellToClosedCommand } from './set-cell-to-closed-command';

export function flagCheckerActionCommand(cell) {
  const { state } = cell;

  switch (state) {
    case CellState.Marked:
      lego.command.payload(cell).execute(setCellToClosedCommand);

      break;
    case CellState.Closed:
      lego.command.payload(CellState.Marked, cell).execute(setCellStateCommand);
      break;

    default:
      break;
  }
}
