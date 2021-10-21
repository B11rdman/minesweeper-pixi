import { lego } from '@armathai/lego';
import { AppResult } from '../../configs/constants';
import { setAppResultCommand } from '../app-model/set-app-result-command';
import { destroyBoardCommand } from '../game-model/destroy-board-command';
import { destroyTimerCommand } from '../game-model/destroy-timer-command';
import { initBoardCommand } from '../game-model/init-board-command';
import { initTimerCommand } from '../game-model/init-timer-command';

export function onRetryBtnClickCommand() {
  lego.command
    .execute(destroyBoardCommand, destroyTimerCommand)

    .payload(AppResult.Unknown)
    .execute(setAppResultCommand)

    .execute(initBoardCommand, initTimerCommand);
}
