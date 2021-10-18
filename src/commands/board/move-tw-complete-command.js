import { lego } from '@armathai/lego';
import { stopGladiatorCommand } from '../gladiator-commands/stop-gladiator-command';

export function onMoveTwCompleteCommand() {
  lego.command.execute(stopGladiatorCommand);
}
