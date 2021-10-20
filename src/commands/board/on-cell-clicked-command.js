import { lego } from '@armathai/lego';
import { checkerIsFlagGuard } from '../../guards/board/checker-is-flag-guard';
import { flagCheckerActionCommand } from './flag-checker-action-command';
import { mineCheckerActionCommand } from './mine-checker-action-command';

export function onCellClickedCommand(uuid) {
  const cell = Store.game.board.getCellByUuid(uuid);

  if (checkerIsFlagGuard()) {
    lego.command.payload(cell).execute(flagCheckerActionCommand);
  } else {
    lego.command.payload(cell).execute(mineCheckerActionCommand);
  }
}
