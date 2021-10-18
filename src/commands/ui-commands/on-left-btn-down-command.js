import { lego } from '@armathai/lego';
import { gladiatorWalkLeftCommand } from '../gladiator-commands/gladiator-walk-left-command';

export function onLeftBtnDownCommand() {
  lego.command.execute(gladiatorWalkLeftCommand);
}
