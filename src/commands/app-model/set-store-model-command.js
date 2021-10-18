import { Store } from '../../models/store-model';

export function setStoreModelCommand() {
  window.Store = Store;
}
