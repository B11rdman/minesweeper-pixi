import { lego } from '@armathai/lego';
import { setResultToLoseCommand } from '../app-model/set-result-to-lose-command';
import { stopTimerCommand } from '../game-model/stop-timer-command';

export function onLoseCommand() {
  lego.command
    //
    .execute(
      //
      stopTimerCommand,
      // destroyBoardCommand,
      // destroyTimerCommand,
      setResultToLoseCommand
    );
}
