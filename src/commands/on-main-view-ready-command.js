import { lego } from '@armathai/lego';
import { initStoreModelCommand } from './app-model/init-store-model-command';

export function onMainViewReadyCommand() {
  lego.command.execute(initStoreModelCommand);
}
