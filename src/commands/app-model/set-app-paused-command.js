export const setAppPausedCommand = (paused) => {
  Store.app && (Store.app.paused = paused);
};
