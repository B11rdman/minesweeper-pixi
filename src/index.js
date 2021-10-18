import { Main } from './main-app';

window.mainApp = Main;
mainApp.init();

window.addEventListener('resize', () => mainApp.resize());
window.addEventListener('orientationchange', () => mainApp.resize());
window.addEventListener('focus', () => mainApp.onFocusChange(true));
window.addEventListener('blur', () => mainApp.onFocusChange(false));
