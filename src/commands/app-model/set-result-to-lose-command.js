import { lego } from '@armathai/lego';
import { AppResult } from '../../configs/constants';
import { setAppResultCommand } from './set-app-result-command';

export function setResultToLoseCommand() {
  lego.command.payload(AppResult.Lose).execute(setAppResultCommand);
}
