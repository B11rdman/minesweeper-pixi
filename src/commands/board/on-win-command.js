import { lego } from '@armathai/lego';
import { setResultToWinCommand } from '../app-model/set-result-to-win-command';
import { stopTimerCommand } from '../game-model/stop-timer-command';

export function onWinCommand() {
  lego.command.execute(
    // unmapCommandsCommand,
    stopTimerCommand,
    // destroyBoardCommand,
    // destroyTimerCommand,
    setResultToWinCommand
  );
}
