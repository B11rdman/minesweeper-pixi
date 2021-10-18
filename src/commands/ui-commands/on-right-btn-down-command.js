import { lego } from '@armathai/lego';
import { gladiatorWalkRightCommand } from '../gladiator-commands/gladiator-walk-right-command';

export function onRightBtnDownCommand() {
  lego.command.execute(gladiatorWalkRightCommand);
}
