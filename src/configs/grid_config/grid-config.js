import { lp } from '../../utils/helpful-functions';
import {
  getBackgroundViewGridLandscapeConfig,
  getBackgroundViewGridPortraitConfig,
} from './background-view-grid-config';
import { getGameGridLandscapeConfig, getGameGridPortraitConfig } from './game-grid-config';
import { getMainGridLandscapeConfig, getMainGridPortraitConfig } from './main-view-grid-config';
import { getUIVIewGridLandscapeConfig, getUIVIewGridPortraitConfig } from './ui-view-grid-config';

export const getMainGridConfig = () => {
  return lp(getMainGridLandscapeConfig, getMainGridPortraitConfig).call(null);
};

export const getBackgroundGridConfig = () => {
  return lp(getBackgroundViewGridLandscapeConfig, getBackgroundViewGridPortraitConfig).call(null);
};

export const getGameGridConfig = () => {
  return lp(getGameGridLandscapeConfig, getGameGridPortraitConfig).call(null);
};

export const getUIViewGridConfig = () => {
  return lp(getUIVIewGridLandscapeConfig, getUIVIewGridPortraitConfig).call(null);
};
