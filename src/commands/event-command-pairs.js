import { BoardModelEvent } from '../events/model';
import { BoardViewEvent, IconEvents, MainGameEvents, ResultViewEvent } from '../events/view-events';
import { WindowEvent } from '../events/window-events';
import { onBoardStateUpdateCommand } from './board/on-board-state-update-command';
import { onCellClickedCommand } from './board/on-cell-clicked-command';
import { onFirstInteractionCommand } from './on-first-interaction-command';
import { onMainGameInitCommand } from './on-main-game-init-command';
import { onMainViewReadyCommand } from './on-main-view-ready-command';
import { onRetryBtnClickCommand } from './result/result-button-click-command';
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
    event: BoardModelEvent.StateUpdate,
    command: onBoardStateUpdateCommand,
  },
  {
    event: IconEvents.Click,
    command: onIconClickedCommand,
  },
  {
    event: ResultViewEvent.RetryBtnClick,
    command: onRetryBtnClickCommand,
  },
  {
    event: MainGameEvents.FirstInteraction,
    command: onFirstInteractionCommand,
  },
]);
