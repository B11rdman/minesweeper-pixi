import gsap, { Linear } from 'gsap/all';
import * as PIXI from 'pixi.js';
import { CellBgTint, CellType, CELL_HEIGHT, CELL_WIDTH } from '../configs/constants';
import { getCellSpriteConfig, getMineSweeperSpriteConfig } from '../configs/image-configs';
import { getCellTextConfig } from '../configs/text-configs';
import { makeSprite, makeText } from '../utils/helpful-functions';

export class CellView extends PIXI.Container {
  constructor(config) {
    super();

    this._config = config;
    this._type = config.type;
    this._neighborCount = config.neighborCount;
    this._uuid = config.uuid;

    this._build();
  }

  get name() {
    return 'CellView';
  }

  get type() {
    return this._type;
  }

  get uuid() {
    return this._uuid;
  }

  get neighborCount() {
    return this._neighborCount;
  }

  getBounds() {
    return new PIXI.Rectangle(0, 0, CELL_WIDTH, CELL_HEIGHT);
  }

  reveal() {
    gsap.to(this._cover.scale, { x: 0, duration: 0.2, ease: Linear.easeNone });
  }

  _build() {
    this._buildBg();
    this._type === CellType.Number ? this._buildNumber() : this._buildMine();
    this._buildCover();
  }

  _buildBg() {
    const bg = makeSprite(getCellSpriteConfig());
    bg.anchor.set(0);
    const tint = this._type === CellType.Mine ? CellBgTint[this._type] : CellBgTint[this._neighborCount];
    bg.tint = tint;
    this.addChild((this._bg = bg));
  }

  _buildCover() {
    const cover = makeSprite(getCellSpriteConfig());
    cover.anchor.set(0);
    cover.tint = CellBgTint.Initial;
    cover.interactive = true;
    cover.on('pointerdown', () => this.emit('clicked', this._uuid));
    this.addChild((this._cover = cover));
  }

  _buildNumber() {
    if (this._neighborCount === 0) {
      return;
    }
    const label = makeText(getCellTextConfig(this._neighborCount));
    label.anchor.set(0.5);
    label.position.set(this._bg.width / 2, this._bg.height / 2);
    this.addChild((this._label = label));
  }

  _buildMine() {
    const mine = makeSprite(getMineSweeperSpriteConfig());
    mine.anchor.set(0.5);
    mine.scale.set(0.85);
    mine.position.set(this._bg.width / 2, this._bg.height / 2);
    this.addChild((this._mine = mine));
  }
}
