import { CellState } from '../../configs/constants';

export function cellIsMarkedGuard(cell) {
  return cell.state === CellState.Marked;
}
