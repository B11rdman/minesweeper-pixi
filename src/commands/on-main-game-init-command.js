import { lego } from '@armathai/lego';
import { setStoreModelCommand } from './app-model/set-store-model-command';

export function onMainGameInitCommand() {
  lego.command.execute(setStoreModelCommand);
}
