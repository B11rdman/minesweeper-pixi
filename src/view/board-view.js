import { lego } from '@armathai/lego';
import { Linear } from 'gsap';
import gsap from 'gsap/all';
import * as PIXI from 'pixi.js';
import { GladiatorDirection } from '../configs/constants';
import { getGameGridConfig } from '../configs/grid_config/grid-config';
import { BoardModelEvent, GladiatorModelEvent } from '../events/model';
import { BoardViewEvent } from '../events/view-events';
import { GladiatorComponent } from './gladiator-view';

export class BoardView extends PIXI.Container {
  constructor() {
    super();

    lego.event
      //
      .on(BoardModelEvent.GladiatorUpdate, this._onGladiatorUpdate, this)
      .on(GladiatorModelEvent.DirectionUpdate, this._onGladiatorDirectionUpdate, this)
      .on(GladiatorModelEvent.StateUpdate, this._onGladiatorStateUpdate, this);

    this._buildTile();
  }

  get name() {
    return 'BoardView';
  }

  getBounds() {
    const { width: cW, height: cH, x: cX, y: cY } = getGameGridConfig().cells.find((c) => c.name === 'board').bounds;
    const { clientWidth: dW, clientHeight: dH } = document.body;
    const width = dW * cW;
    const height = dH * cH;
    const x = dW * cX;
    const y = dH * cY;
    return new PIXI.Rectangle(x, y, width, height);
  }

  _buildTile() {
    // const tile = new PIXI.TilingSprite(getBgSpriteConfig(), 111, 111);
    // this.addChild((this._tile = tile));
  }

  _onGladiatorUpdate(gladiator) {
    gladiator ? this._buildGladiator() : this._destroyGladiator();
  }

  _onGladiatorDirectionUpdate(direction) {
    this._gladiator.setDirection(direction);
    this._moveGladiator(direction);
  }

  _destroyGladiator() {
    if (this._gladiator) {
      this._gladiator.destroy();
      this._gladiator = null;
    }
  }

  _onGladiatorStateUpdate(state) {
    this._gladiator.setAnimation(state);
  }

  _moveGladiator(direction) {
    switch (direction) {
      case GladiatorDirection.Left:
        this._moveGladiatorToLeft();
        break;
      case GladiatorDirection.Right:
        this._moveGladiatorToRight();
        break;
      case GladiatorDirection.Stop:
        this._stopGladiator();
        break;

      default:
        break;
    }
  }

  _moveGladiatorToLeft() {
    const duration = this._gladiator.x / 200;
    this._stopGladiator();

    !this._moveLeftTw &&
      duration !== 0 &&
      (this._moveLeftTw = this._getMoveTw(0 + this._gladiator.width / 2, duration));
  }

  _moveGladiatorToRight() {
    const duration = (this.width - this._gladiator.x) / 200;
    this._stopGladiator();

    !this._moveRightTw &&
      duration !== 0 &&
      (this._moveRightTw = this._getMoveTw(this.width - this._gladiator.width / 2, duration));
  }

  _stopGladiator() {
    if (this._moveLeftTw) {
      this._moveLeftTw.kill();
      this._moveLeftTw = null;
    }
    if (this._moveRightTw) {
      this._moveRightTw.kill();
      this._moveRightTw = null;
    }
  }

  _getMoveTw(x, duration) {
    const tw = gsap.to(this._gladiator, { x, duration, ease: Linear.easeNone, onComplete: this._onTwComplete });
    return tw;
  }

  _onTwComplete() {
    lego.event.emit(BoardViewEvent.MoveTwComplete);
  }

  _buildGladiator() {
    const gladiator = new GladiatorComponent();
    gladiator.position.set(this.width / 2, this.height);
    this.addChild((this._gladiator = gladiator));
  }
}
