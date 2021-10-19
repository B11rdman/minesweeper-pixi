import { lego } from '@armathai/lego';
import { CellState } from '../../configs/constants';
import { canUseFlagGuard } from '../../guards/board/can-use-flag-guard';
import { cellIsMineGuard } from '../../guards/board/cell-is-mine-guard';
import { decreaseFlagCountCommand } from './decrease-flag-count-command';
import { decreaseRightMarksCountCommand } from './decrease-right-marks-count-command';
import { increaseFlagCountCommand } from './increase-flag-count-command';
import { increaseRightMarksCountCommand } from './increase-right-marks-count-command';
import { setCellStateCommand } from './set-cell-state-command';
import { setCellToClosedCommand } from './set-cell-to-closed-command';

export function flagCheckerActionCommand(cell) {
  const { state, type } = cell;

  switch (state) {
    case CellState.Marked:
      lego.command
        //
        .payload(cell)
        .execute(setCellToClosedCommand, decreaseFlagCountCommand)

        .payload(cell)
        .guard(cellIsMineGuard)
        .execute(decreaseRightMarksCountCommand);

      break;
    case CellState.Closed:
      lego.command
        .guard(canUseFlagGuard)
        .payload(CellState.Marked, cell)
        .execute(setCellStateCommand, increaseFlagCountCommand)

        .payload(cell)
        .guard(cellIsMineGuard)
        .execute(increaseRightMarksCountCommand);
      break;

    default:
      break;
  }
}
