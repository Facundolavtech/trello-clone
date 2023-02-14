import { AuthenticatedRequest } from '../../../common/types';
import { BoardMember } from '../entities/BoardMember.entity';

export interface IWithBoardMemberRequest extends AuthenticatedRequest {
  member: BoardMember;
}
