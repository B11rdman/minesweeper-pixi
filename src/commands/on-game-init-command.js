import { lego } from '@armathai/lego';
import { mapCommandsCommand } from './map-commands';

export function onGameInitCommand() {
  lego.command.execute(mapCommandsCommand);
}
