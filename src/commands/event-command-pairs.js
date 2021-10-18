import { MainGameEvents, UIViewEvents } from '../events/view-events';
import { WindowEvent } from '../events/window-events';
import { onMainGameInitCommand } from './on-main-game-init-command';
import { onMainViewReadyCommand } from './on-main-view-ready-command';
import { onLeftBtnDownCommand } from './ui-commands/on-left-btn-down-command';
import { onRightBtnDownCommand } from './ui-commands/on-right-btn-down-command';
import { onFocusChangeCommand } from './window-commands/on-focus-change-command';

export const EventCommandPairs = Object.freeze([
  {
    event: MainGameEvents.Init,
    command: onMainGameInitCommand,
  },
  {
    event: MainGameEvents.MainGameReady,
    command: onMainViewReadyCommand,
  },
  {
    event: UIViewEvents.LeftBtnDown,
    command: onLeftBtnDownCommand,
  },
  {
    event: UIViewEvents.RightBtnDown,
    command: onRightBtnDownCommand,
  },
  {
    event: WindowEvent.FocusChange,
    command: onFocusChangeCommand,
  },
]);
