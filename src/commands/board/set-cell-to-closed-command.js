import { lego } from '@armathai/lego';
import { CellState } from '../../configs/constants';
import { setCellStateCommand } from './set-cell-state-command';

export function setCellToClosedCommand(cell) {
  lego.command.payload(CellState.Closed, cell).execute(setCellStateCommand);
}
