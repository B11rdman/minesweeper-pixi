import { GameModel } from '../models/game-model';
import { AppModel } from './app-model';
import { ObservableModel } from './observable-model';

class StoreModel extends ObservableModel {
  constructor() {
    super('StoreModel');
    this._game = null;
    this._app = null;

    this.makeObservable();
  }

  get game() {
    return this._game;
  }

  get app() {
    return this._app;
  }

  init() {
    this.initGameModel();
    this.initAppModel();
  }

  initGameModel() {
    this._game = new GameModel();
    this._game.init();
  }

  initAppModel() {
    this._app = new AppModel();
    this._app.init();
  }
}

export const Store = new StoreModel();
