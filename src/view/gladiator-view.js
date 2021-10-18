import * as PIXI from 'pixi.js';
import { getGladiatorAnimationConfig } from '../configs/animation_config/animation-config';
import { GladiatorDirection, GladiatorState } from '../configs/constants';
import { makeFramedAnimation } from '../utils/helpful-functions';

export class GladiatorComponent extends PIXI.Container {
  constructor() {
    super();

    this._gladiator = null;
    this._scale = 4;
    this._buildGladiator();
  }

  getBounds() {
    const width = 26 * this._scale;
    const height = 37 * this._scale;
    return new PIXI.Rectangle(-width / 2, -height / 2, width, height);
  }

  setDirection(direction) {
    this._player.scale.x = direction === GladiatorDirection.Left ? this._scale * -1 : this._scale * 1;
  }

  setAnimation(state) {
    switch (state) {
      case GladiatorState.Idle:
        this._playIdle();
        break;
      case GladiatorState.Walking:
        this._playWalk();
        break;

      default:
        break;
    }
  }

  _buildGladiator() {
    this._gladiator = makeFramedAnimation(getGladiatorAnimationConfig());
    this._player = new PIXI.AnimatedSprite(this._gladiator.idle);

    this._player.anchor.set(0.5, 1);
    this.addChild(this._player);
    this._player.scale.set(this._scale);
    this._player.animationSpeed = 0.1;
    this._player.loop = true;
    this._player.play();
  }

  _playIdle() {
    this._player.textures = this._gladiator.idle;
    this._player.animationSpeed = 0.1;
    this._player.loop = true;
    this._player.play();
  }

  _playWalk() {
    this._player.textures = this._gladiator.walk;
    this._player.animationSpeed = 0.1;
    this._player.loop = true;
    this._player.play();
  }
}
