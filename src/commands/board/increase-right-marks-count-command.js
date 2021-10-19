import { lego } from '@armathai/lego';
import { BoardState } from '../../configs/constants';
import { objectiveReachedGuard } from '../../guards/board/objective-completed-guard';
import { setBoardStateCommand } from './set-board-state-command';

export function increaseRightMarksCountCommand() {
  Store.game.board.increaseRightMarksCount();

  lego.command.guard(objectiveReachedGuard).payload(BoardState.Win).execute(setBoardStateCommand);
}
