import { Store } from '../../models/store-model';

export function setAppResultCommand(result) {
  Store.app.result = result;
}
