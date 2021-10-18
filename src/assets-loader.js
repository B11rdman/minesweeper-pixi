import * as PIXI from 'pixi.js';
import { assets, Images } from './assets';
import { hasOwnProperty, isWEBGL, soundAvailable, upperPowerOfTwo } from './utils/helpful-functions';

export class AtlasRegion {
  constructor(name, texture) {
    this.name = name;
    this.texture = texture;
    this.frame = new PIXI.Rectangle(0, 0, texture.width + 2, texture.height + 2);
  }
}

const SpinesAttachmentType = {
  region: 'region',
  mesh: 'mesh',
};

function localizedAtlasToTexture(texture, name) {
  Object.keys(texture).forEach((key) => {
    PIXI.Texture.removeFromCache(key);
  });

  PIXI.Texture.removeFromCache(name);
}

function nope() {
  void 0;
}

function atlasMiddleware(resource, next) {
  const { atlases } = assets;
  const isAtlas = hasOwnProperty(atlases, resource.name);

  if (!isAtlas) {
    next();
    return;
  }

  const { json, image } = atlases[resource.name];
  const atlas = new PIXI.Spritesheet(PIXI.BaseTexture.from(image), json);

  atlas.parse((texture) => {
    resource.name.includes('.png') ? localizedAtlasToTexture(texture, resource.name) : nope();
  });

  next();
}

export class AssetsLoader extends PIXI.utils.EventEmitter {
  constructor() {
    super();
    this._loader = PIXI.Loader.shared;
    this._loader.use(atlasMiddleware);
  }

  async load() {
    return new Promise(async (resolve) => {
      this._loadImages(assets.images);
      this._loadAtlases(assets.atlases);
      soundAvailable() && (await this._loadSounds(assets.sounds));
      await new Promise((cb) => this._loader.load(() => cb()));
      isWEBGL() && (await this._loadSuperAtlas());
      this._loadSpines(assets.spines);
      resolve();
    });
  }

  _loadImages(images) {
    Object.keys(images).forEach((image) => {
      this._loader.add(image, images[image]);
    });
  }

  _loadAtlases(atlases, { image }) {
    Object.keys(atlases).forEach((atlas) => {
      this._loader.add(atlas, atlases[atlas].image);
    });
  }

  _loadSounds(sounds) {
    return new Promise((resolve) => {
      const soundKeys = Object.keys(sounds);
      let loadedCount = soundKeys.length;
      soundKeys.forEach((sound) => {
        PIXI.sound.add(sound, {
          src: sounds[sound],
          preload: true,
          onload: () => {
            if (--loadedCount === 0) {
              resolve();
            }
          },
        });
      });
    });
  }

  _loadSpines(spines) {
    for (const s in spines) {
      const spine = spines[s];
      const { json } = spine;
      const { animations, slots, skins } = json;
      const attachments = [];

      Object.keys(animations).forEach((k) => {
        const { slots = {} } = animations[k];
        Object.keys(slots).forEach((s) => {
          const { attachment = [] } = slots[s];
          attachment.forEach((a) => {
            const { name } = a;
            if (!attachments.includes(name)) {
              attachments.push(name);
            }
          });
        });
      });

      slots.forEach((slot) => {
        const { attachment } = slot;
        if (!attachments.includes(attachment)) {
          attachments.push(attachment);
        }
      });

      skins.forEach((skin) => {
        const { attachments: skinAttachments } = skin;
        Object.keys(skinAttachments).forEach((k1) => {
          const attachment = skinAttachments[k1];
          Object.keys(attachment).forEach((k2) => {
            const { type } = attachment[k2];
            if (!type || type === SpinesAttachmentType.region || type === SpinesAttachmentType.mesh) {
              let path = k2;
              const concreteAttachment = attachment[k2];
              if (hasOwnProperty(concreteAttachment, 'path')) {
                path = concreteAttachment.path;
              }
              if (!attachments.includes(path)) {
                attachments.push(path);
              }
            }
          });
        });
      });

      const atlas = new PIXI.spine.core.TextureAtlas();
      const allTextures = {};
      attachments.forEach((attachment) => {
        if (hasOwnProperty(Images, attachment)) {
          allTextures[attachment] = PIXI.Texture.from(Images[attachment]);
        }
      });

      atlas.addTextureHash(allTextures, true);
      const spineAtlasLoader = new PIXI.spine.core.AtlasAttachmentLoader(atlas);
      const spineJsonParser = new PIXI.spine.core.SkeletonJson(spineAtlasLoader);
      spine.skeleton = spineJsonParser.readSkeletonData(json);
    }
  }

  async _loadSuperAtlas() {
    return new Promise((resolve) => {
      const regions = Object.keys(Images).map((img) => new AtlasRegion(Images[img], PIXI.Texture.from(Images[img])));
      const packInfo = this._packSuperAtlas(regions);
      const renderTexture = PIXI.RenderTexture.create({
        width: upperPowerOfTwo(packInfo.w),
        height: upperPowerOfTwo(packInfo.h),
      });
      const { renderer } = superApp.app;
      const sprite = new PIXI.Sprite();
      const json = {
        frames: {},
        meta: {
          format: 'RGBA8888',
          size: {
            w,
            h,
          },
          scale: 1,
        },
      };
      regions.forEach((r) => {
        const { texture, frame, name } = r;
        sprite.texture = texture;
        sprite.position.x = frame.x + 1;
        sprite.position.y = frame.y + 1;
        const { width: w, height: h } = sprite;
        const f = {
          frame: {
            x: sprite.x,
            y: sprite.y,
            w,
            h,
          },
          rotated: false,
          trimmed: false,
          spriteSourceSize: {
            w,
            h,
          },
          sourceSize: {
            w: sprite.width,
            h: sprite.height,
          },
        };
        json.frames[name] = f;
        renderer.render(sprite, renderTexture, false);
        sprite.texture = PIXI.Texture.EMPTY;
        PIXI.Texture.removeFromCache(texture);
        texture.destroy(true);
      });
      const atlas = new PIXI.Spritesheet(renderTexture, json);
      atlas.parse(resolve);
    });

    // PIXI.Texture.addToCache(renderTexture, 'super-atlas');
    // const a = document.createElement('a'); //Create <a>
    // a.href = renderer.plugins.extract.base64(renderTexture);
    // a.download = 'Image.png'; //File name Here
    // a.click(); //Downloaded file
  }

  _packSuperAtlas(regions) {
    // calculate total box area and maximum box width
    let area = 0;
    let maxWidth = 0;

    regions.forEach((r) => {
      const { width, height } = r.frame;
      area += width * height;
      maxWidth = Math.max(maxWidth, width);
    });

    // sort the boxes for insertion by height, descending
    regions.sort((a, b) => b.frame.height - a.frame.height);

    // aim for a squarish resulting container,
    // slightly adjusted for sub-100% space utilization
    const startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);

    // start with a single empty space, unbounded at the bottom
    const spaces = [{ x: 0, y: 0, w: startWidth, h: Infinity }];

    let width = 0;
    let height = 0;

    for (const region of regions) {
      const { frame: box } = region;
      // look through spaces backwards so that we check smaller spaces first
      for (let i = spaces.length - 1; i >= 0; i--) {
        const space = spaces[i];

        // look for empty spaces that can accommodate the current box
        if (box.width > space.w || box.height > space.h) continue;

        // found the space; add the box to its top-left corner
        // |-------|-------|
        // |  box  |       |
        // |_______|       |
        // |         space |
        // |_______________|
        box.x = space.x;
        box.y = space.y;

        height = Math.max(height, box.y + box.height);
        width = Math.max(width, box.x + box.width);

        if (box.width === space.w && box.height === space.h) {
          // space matches the box exactly; remove it
          const last = spaces.pop();
          if (i < spaces.length) spaces[i] = last;
        } else if (box.height === space.h) {
          // space matches the box height; update it accordingly
          // |-------|---------------|
          // |  box  | updated space |
          // |_______|_______________|
          space.x += box.width;
          space.w -= box.height;
        } else if (box.width === space.w) {
          // space matches the box width; update it accordingly
          // |---------------|
          // |      box      |
          // |_______________|
          // | updated space |
          // |_______________|
          space.y += box.height;
          space.h -= box.height;
        } else {
          // otherwise the box splits the space into two spaces
          // |-------|-----------|
          // |  box  | new space |
          // |_______|___________|
          // | updated space     |
          // |___________________|
          spaces.push({
            x: space.x + box.width,
            y: space.y,
            w: space.w - box.width,
            h: box.height,
          });
          space.y += box.height;
          space.h -= box.height;
        }
        break;
      }
    }

    return {
      w: width, // container width
      h: height, // container height
      fill: area / (width * height) || 0, // space utilization
    };
  }
}
