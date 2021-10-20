import { getLoseButtonSliceConfig } from './nineslice-config';
import { getLoseButtonTextConfig } from './text-configs';

export const getLoseButtonConfig = () => {
  return {
    bgConfig: getLoseButtonSliceConfig,
    textConfig: getLoseButtonTextConfig,
    name: 'lose_btn',
  };
};
