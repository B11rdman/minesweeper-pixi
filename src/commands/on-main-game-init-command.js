import { lego } from '@armathai/lego';
import { initStoreModelCommand } from './init-store-model-command';

export function onMainGameInitCommand() {
  lego.command.execute(initStoreModelCommand);
}
