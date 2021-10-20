import { lego } from '@armathai/lego';
import { BoardState } from '../../configs/constants';
import { onLoseCommand } from './on-lose-command';
import { onWinCommand } from './on-win-command';

export function onBoardStateUpdateCommand(state) {
  switch (state) {
    case BoardState.Game:
      // lego.command.execute(onWinCommand);
      break;
    case BoardState.Win:
      lego.command.execute(onWinCommand);
      break;
    case BoardState.Lose:
      lego.command.execute(onLoseCommand);
      break;

    default:
      break;
  }
}
