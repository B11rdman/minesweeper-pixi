import { lego } from '@armathai/lego';
import { CellState } from '../../configs/constants';
import { setCellStateCommand } from './set-cell-state-command';

export function revealCellCommand(cell) {
  lego.command.payload(CellState.Open, cell).execute(setCellStateCommand);
}
