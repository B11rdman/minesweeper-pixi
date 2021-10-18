export const AppModelEvent = {
  PausedUpdate: 'AppModelPausedUpdate',
};

export const BoardModelEvent = {
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
};

export const ObservableModelEvent = {
  UuidUpdate: 'ObservableModelUuidUpdate',
};

export const StoreModelEvent = {
  GameUpdate: 'StoreModelGameUpdate',
  AppUpdate: 'StoreModelAppUpdate',
};
