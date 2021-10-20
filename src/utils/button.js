import * as PIXI from 'pixi.js';
import { makeNineSlice, makeText } from './helpful-functions';

export class Button extends PIXI.Container {
  constructor(config) {
    super();
    this._name = config.name;

    this._build(config);
  }

  _build(config) {
    const { bgConfig, textConfig } = config;
    this._buildBg(bgConfig);
    this._buildLabel(textConfig);
  }

  _buildBg(bgConfig) {
    const bg = makeNineSlice(bgConfig());
    bg.interactive = true;
    bg.on('pointerdown', () => this.emit('click'));
    this.addChild((this._bg = bg));
  }

  _buildLabel(textConfig) {
    const label = makeText(textConfig());
    label.anchor.set(0.5);
    label.position.set(this._bg.x, this._bg.y);
    this.addChild((this._label = label));
  }
}
