import gsap, { Linear, Sine } from 'gsap/all';
import * as PIXI from 'pixi.js';
import { CellBgTint, CellType, CELL_HEIGHT, CELL_WIDTH } from '../configs/constants';
import { getCellSpriteConfig, getFlagSpriteConfig, getMineSweeperSpriteConfig } from '../configs/image-configs';
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
    this._mine &&
      gsap.to(this._mine.scale, { x: 1, y: 1, duration: 0.5, ease: Sine.easeInOut, repeat: -1, yoyo: true });
  }

  mark() {
    this._flag.alpha = 1;
  }

  unmark() {
    this._flag && (this._flag.alpha = 0);
  }

  _build() {
    this._buildBg();
    this._type === CellType.Number ? this._buildNumber() : this._buildMine();
    this._buildCover();
    this._buildFlag();
    // this._type === CellType.Mine && this._buildHint();
  }

  _buildHint() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xff0000, 0.5);
    gr.drawRect(0, 0, 20, 20);
    gr.endFill();

    this.addChild((this._hitArea = gr));
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
    mine.scale.set(0.8);
    mine.position.set(this._bg.width / 2, this._bg.height / 2);
    this.addChild((this._mine = mine));
  }

  _buildFlag() {
    const flag = makeSprite(getFlagSpriteConfig());
    flag.anchor.set(0.5);
    flag.scale.set(0.8);
    flag.alpha = 0;
    flag.position.set(this._bg.width / 2, this._bg.height / 2);
    this.addChild((this._flag = flag));
  }
}
