export const AppModelEvent = {
  PausedUpdate: 'AppModelPausedUpdate',
  ResultUpdate: 'AppModelResultUpdate',
};

export const BoardModelEvent = {
  CheckerUpdate: 'BoardModelCheckerUpdate',
  CheckedCellsUpdate: 'BoardModelCheckedCellsUpdate',
  StateUpdate: 'BoardModelStateUpdate',
  Cells2DUpdate: 'BoardModelCells2DUpdate',
};

export const CellModelEvent = {
  UuidUpdate: 'CellModelUuidUpdate',
  StateUpdate: 'CellModelStateUpdate',
  TypeUpdate: 'CellModelTypeUpdate',
  NeighborCountUpdate: 'CellModelNeighborCountUpdate',
};

export const GameModelEvent = {
  BoardUpdate: 'GameModelBoardUpdate',
  TimerUpdate: 'GameModelTimerUpdate',
};

export const ObservableModelEvent = {
  UuidUpdate: 'ObservableModelUuidUpdate',
};

export const StoreModelEvent = {
  GameUpdate: 'StoreModelGameUpdate',
  AppUpdate: 'StoreModelAppUpdate',
};

export const TimerModelEvent = {
  TimeUpdate: 'TimerModelTimeUpdate',
};
