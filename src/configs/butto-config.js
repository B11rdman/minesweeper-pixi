import { getLoseButtonSliceConfig, getWinButtonSliceConfig } from './nineslice-config';
import { getLoseButtonTextConfig, getWinButtonTextConfig } from './text-configs';

export const getLoseButtonConfig = () => {
  return {
    bgConfig: getLoseButtonSliceConfig,
    textConfig: getLoseButtonTextConfig,
    name: 'lose_btn',
  };
};

export const getWinButtonConfig = () => {
  return {
    bgConfig: getWinButtonSliceConfig,
    textConfig: getWinButtonTextConfig,
    name: 'win_btn',
  };
};
