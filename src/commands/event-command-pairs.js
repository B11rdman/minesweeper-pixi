import { BoardViewEvent, IconEvents, MainGameEvents } from '../events/view-events';
import { WindowEvent } from '../events/window-events';
import { onCellClickedCommand } from './board/on-cell-clicked-command';
import { onMainGameInitCommand } from './on-main-game-init-command';
import { onMainViewReadyCommand } from './on-main-view-ready-command';
import { onIconClickedCommand } from './ui-commands/on-icon-click-command';
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
    event: WindowEvent.FocusChange,
    command: onFocusChangeCommand,
  },
  {
    event: BoardViewEvent.CellClicked,
    command: onCellClickedCommand,
  },
  {
    event: IconEvents.Click,
    command: onIconClickedCommand,
  },
]);
