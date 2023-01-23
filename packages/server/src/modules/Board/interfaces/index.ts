import { AuthenticatedRequest } from '../../../common/types';
import { Board } from '../entities/Board.entity';

export interface WithBoardRequest extends AuthenticatedRequest {
  board: Board;
}
