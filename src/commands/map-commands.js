import { lego } from '@armathai/lego';
import { EventCommandPairs } from './event-command-pairs';

export function mapCommandsCommand() {
  EventCommandPairs.forEach((p) => {
    lego.event.on(p.event, p.command);
  });
}

export function unmapCommandsCommand() {
  EventCommandPairs.forEach((p) => {
    lego.event.off(p.event, p.command);
  });
}
