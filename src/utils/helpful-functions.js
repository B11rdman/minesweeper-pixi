import * as PIXI from 'pixi.js';

export const lp = (l, p) => {
  if (window.matchMedia('(orientation: portrait)').matches) {
    // you're in PORTRAIT mode
    return p;
  }
  if (window.matchMedia('(orientation: landscape)').matches) {
    // you're in LANDSCAPE mode
    return l;
  }
};

// export function makeSpine(config) {
//   const {
//     skeleton,
//     x = 0,
//     y = 0,
//     scale = new PIXI.Point(1, 1),
//     speed = 1,
//   } = config instanceof PIXI.spine.core.SkeletonData ? { skeleton: config } : config;

//   const spine = new PIXI.spine.Spine(skeleton);
//   spine.state.timeScale = speed;

//   spine.scale.set(scale.x, scale.y);
//   spine.position.set(x, y);

//   return spine;
// }

export const hasOwnProperty = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const isWEBGL = () => {
  return superApp.app.renderer.type === PIXI.RENDERER_TYPE.WEBGL;
};

export function getGr(color = 0x919191, alpha = 1) {
  const gr = new PIXI.Graphics();
  gr.beginFill(color, alpha);
  gr.drawRect(0, 0, 10, 10);
  gr.endFill();
  return gr;
}

export const soundAvailable = () => {
  return isWEBGL() && !muteOn();
};

export const upperPowerOfTwo = (v) => {
  v--;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
};

export const fitDimension = (dim, minRatio, maxRatio) => {
  const ratioW = dim.width / dim.height;
  const ratioH = dim.height / dim.width;

  if (ratioW < ratioH) {
    if (ratioW > maxRatio) {
      dim.width = dim.width * (maxRatio / ratioW);
    } else if (ratioW < minRatio) {
      dim.height = dim.height * (ratioW / minRatio);
    }
  } else {
    if (ratioH > maxRatio) {
      dim.height = dim.height * (maxRatio / ratioH);
    } else if (ratioH < minRatio) {
      dim.width = dim.width * (ratioH / minRatio);
    }
  }

  return dim;
};

export const makeSprite = (config) => {
  const {
    texture,
    tint = 0,
    position = new PIXI.Point(0, 0),
    scale = new PIXI.Point(1, 1),
    anchor = new PIXI.Point(0.5, 0.5),
  } = config;

  const sprite = PIXI.Sprite.from(texture);

  sprite.scale.copyFrom(scale);
  sprite.anchor.copyFrom(anchor);
  sprite.position.copyFrom(position);

  if (tint) sprite.tint = tint;

  return sprite;
};

export const makeNineSlice = (config) => {
  const {
    texture,
    data,
    width,
    height,
    tint,
    scale = new PIXI.Point(1, 1),
    position = new PIXI.Point(0, 0),
    pivot = new PIXI.Point(config.width / 2, config.height / 2),
  } = config;

  const img = new PIXI.NineSlicePlane(PIXI.Texture.from(texture), ...data);
  img.width = width;
  img.height = height;

  img.scale.copyFrom(scale);
  img.position.copyFrom(position);
  img.pivot.copyFrom(pivot);

  if (tint) img.tint = tint;

  return img;
};

export const makeFramedAnimation = (config) => {
  const { texture, width, height, animations } = config;
  const animation = {};
  const spriteSheet = new PIXI.BaseTexture.from(texture);

  animations.forEach((conf) => {
    const { name, frames, fromX, fromY } = conf;
    animation[name] = [];
    for (let i = 0; i < frames; i++) {
      animation[name].push(
        new PIXI.Texture(spriteSheet, new PIXI.Rectangle(fromX + i * width, fromY + 0, width, height))
      );
    }
  });

  return animation;
};

export const makeText = (config) => {
  const { text, style = {}, x = 0, y = 0 } = config;
  const {
    // shadow,
    // gradient,
    // lineSpacing = 0,
    fontSize = 24,
    fontFamily = 'Arial',
    fill = 0x000000,
    align = 'center',
  } = style;

  // let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
  const label = new PIXI.Text(text, { fontFamily, fontSize, fill, align });
  // label.lineSpacing = lineSpacing;

  // if (shadow) {
  //   const { x: shadowX, y: shadowY, color, blur, shadowStroke, shadowFill } = shadow;
  //   label.setShadow(shadowX, shadowY, color, blur, shadowStroke, shadowFill);
  // }

  // if (gradient) {
  //  Here we create a linear gradient on the Text context.
  //  This uses the exact same method of creating a gradient as you do on a normal Canvas context.
  // const grd = label.context.createLinearGradient(0, 0, 0, label.height);
  // gradient.forEach((grdConfig) => {
  //   const { offset, color } = grdConfig;
  //   grd.addColorStop(offset, color);
  // });
  //   label.fill = grd;
  // }

  return label;
};

export const getGameBounds = () => {
  const { clientWidth: width, clientHeight: height } = document.body;

  return new PIXI.Rectangle(0, 0, width, height);
};

export function isSquareLikeScreen() {
  const { width, height } = getGameBounds();
  return Math.min(width, height) / Math.max(width, height) > 0.7;
}

export function isNarrowScreen() {
  const { width, height } = getGameBounds();
  return Math.min(width, height) / Math.max(width, height) < 0.5;
}

export function timeToSMH(time1) {
  const seconds = time1 % 60;

  const time2 = (time1 - seconds) / 60;
  const minutes = time2 % 60;

  const time3 = (time2 - minutes) / 60;
  const hours = time3 % 24;

  const days = (time3 - hours) / 24;

  return { seconds, minutes, hours, days };
}
