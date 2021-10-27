import { lego } from '@armathai/lego';
import { startTimerCommand } from './game-model/start-timer-command';

export function onFirstInteractionCommand() {
  lego.command.execute(startTimerCommand);
}
