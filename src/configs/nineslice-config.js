// export const getButtonNineSliceConfig = () => ({
//     texture: Images['btn-close'],
//     data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
//     width: 130,
//     height: 130,
// });

import { Images } from '../assets';

export const getLoseButtonSliceConfig = () => ({
  texture: Images['cell/cell'],
  data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
  width: 120,
  height: 78,
});

export const getWinButtonSliceConfig = () => ({
  texture: Images['cell/cell'],
  data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
  width: 120,
  height: 78,
});

export const getButtonNineSliceConfig = () => ({
  texture: Images['cell/cell'],
  tint: 0xff0000,
  data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
  width: 310,
  height: 310,
});
