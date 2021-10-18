import { lego } from '@armathai/lego';
import { initStoreModelCommand } from './gladiator-commands/init-store-model-command';

export function onMainViewReadyCommand() {
  lego.command.execute(initStoreModelCommand);
}
