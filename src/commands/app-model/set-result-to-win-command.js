import { lego } from '@armathai/lego';
import { AppResult } from '../../configs/constants';
import { setAppResultCommand } from './set-app-result-command';

export function setResultToWinCommand() {
  setTimeout(() => {
    lego.command.payload(AppResult.Win).execute(setAppResultCommand);
  }, 1000);
}
