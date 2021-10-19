import { lego } from '@armathai/lego';
import { checkerIsFlagGuard } from '../../guards/board/checker-is-flag-guard';
import { Store } from '../../models/store-model';
import { flagCheckerActionCommand } from './flag-checker-action-command';
import { mineCheckerActionCommand } from './mine-checker-action-command';

export function onCellClickedCommand(uuid) {
  const cell = Store.game.board.getCellByUuid(uuid);

  lego.command

    .guard(checkerIsFlagGuard)
    .payload(cell)
    .execute(flagCheckerActionCommand)

    .guard(lego.not(checkerIsFlagGuard))
    .payload(cell)
    .execute(mineCheckerActionCommand);
}
