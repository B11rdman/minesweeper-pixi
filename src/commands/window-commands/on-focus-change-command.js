import { lego } from '@armathai/lego';
import { setAppPausedCommand } from '../app-model/set-app-paused-command';

export const onFocusChangeCommand = (visible) => {
  lego.command.payload(!visible).execute(setAppPausedCommand);
};
