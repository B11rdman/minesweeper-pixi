import { lego } from '@armathai/lego';
import { Howl } from 'howler';
import { Sounds } from './assets';
import { AppModelEvent, GladiatorModelEvent } from './events/model';
import { MainGameEvents } from './events/view-events';

export class SoundObservant {
  constructor() {
    lego.event.once(MainGameEvents.FirstInteraction, this._playBg, this);
    lego.event
      .on(GladiatorModelEvent.DirectionUpdate, this._stateUpdate, this)
      .on(AppModelEvent.PausedUpdate, this._pausedUpdate, this);

    this._sounds = [];
    this._build();
  }

  _build() {
    this._bg = this._getSound(`assets/${Sounds.bg}.mp3`, true);
    this._upgrade = this._getSound(`assets/${Sounds.upgrade}.mp3`);

    this._sounds.push(this._bg, this._upgrade);
  }

  _playBg() {
    this._bg.play();
  }

  _stateUpdate(state) {
    this._upgrade.play();
  }

  _getSound(src, loop = false, volume = 1, preload = true, html5 = false) {
    return new Howl({ src, volume, html5, preload, loop });
  }

  _pausedUpdate(value) {
    this._sounds.forEach((s) => s.volume(value ? 0 : 1));
  }
}
