import { Images } from '../assets';

export const getCellSpriteConfig = (tint = 0x919191) => ({
  texture: Images['cell/cell'],
  tint,
});

export const getMineSweeperSpriteConfig = () => ({
  texture: Images['cell/mine'],
});

export const getBgSpriteConfig = () => ({
  texture: Images['bg/bg'],
});

export const getFlagSpriteConfig = () => ({
  texture: Images['ui/flag'],
});
