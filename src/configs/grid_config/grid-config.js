import { lp } from '../../utils/helpful-functions';
import {
  getBackgroundViewGridLandscapeConfig,
  getBackgroundViewGridPortraitConfig,
} from './background-view-grid-config';
import { getGameGridLandscapeConfig, getGameGridPortraitConfig } from './game-grid-config';
import { getIconsVIewGridLandscapeConfig, getIconsVIewGridPortraitConfig } from './icons-view-grid-config';
import { getLoseViewGridLandscapeConfig, getLoseViewGridPortraitConfig } from './lose-view-grid-config';
import { getMainGridLandscapeConfig, getMainGridPortraitConfig } from './main-view-grid-config';
import { getResultContainerGridLandscapeConfig, getResultContainerGridPortraitConfig } from './result-view-grid-config';
import { getUIVIewGridLandscapeConfig, getUIVIewGridPortraitConfig } from './ui-view-grid-config';
import { getWinViewGridLandscapeConfig, getWinViewGridPortraitConfig } from './win-view-grid-config';

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

export const getResultContainerGridConfig = () => {
  return lp(getResultContainerGridLandscapeConfig, getResultContainerGridPortraitConfig).call(null);
};

export const getWinViewGridConfig = () => {
  return lp(getWinViewGridLandscapeConfig, getWinViewGridPortraitConfig).call(null);
};

export const getLoseViewGridConfig = () => {
  return lp(getLoseViewGridLandscapeConfig, getLoseViewGridPortraitConfig).call(null);
};

export const getIconsViewGridConfig = () => {
  return lp(getIconsVIewGridLandscapeConfig, getIconsVIewGridPortraitConfig).call(null);
};
