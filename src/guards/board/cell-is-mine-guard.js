import { CellType } from '../../configs/constants';

export function cellIsMineGuard(cell) {
  return cell.type === CellType.Mine;
}
