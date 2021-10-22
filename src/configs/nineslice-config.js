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
  width: 150,
  height: 50,
});

export const getWinButtonSliceConfig = () => ({
  texture: Images['cell/cell'],
  data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
  width: 150,
  height: 50,
});

export const getResultPopupNineSliceConfig = () => ({
  texture: Images['cell/cell'],
  tint: 0x919191,
  data: [/* left */ 24, /* top */ 24, /* right */ 24, /* bottom */ 24],
  width: 400,
  height: 400,
});
