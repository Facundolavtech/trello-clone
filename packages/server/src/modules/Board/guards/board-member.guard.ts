import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedBoardMemberException } from 'src/common/exceptions/unauthorized.exceptions';
import { BoardService } from 'src/modules/Board/services/board.service';
import { CustomUUIDPipe } from '../../../common/pipes/uuid.pipe';
import { AuthenticatedRequest } from '../../../common/types';
import { BoardMember } from '../entities/BoardMember.entity';
import { BoardMemberService } from '../services/board-member.service';

interface IBoardMemberGuardRequest extends AuthenticatedRequest {
  params: {
    boardId: string;
  };
  member: BoardMember;
}

@Injectable()
export class BoardMemberGuard implements CanActivate {
  constructor(private boardMemberService: BoardMemberService, private boardService: BoardService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IBoardMemberGuardRequest = context.switchToHttp().getRequest();

    const userId = request.user.id;
    const boardId = await new CustomUUIDPipe().transform(request.params.boardId);

    const member = await this.boardMemberService.findOne(boardId, userId, ['board', 'user']);

    if (!member) {
      const shortBoardInfo = await this.boardService.findById(boardId, [], { id: true, title: true });

      throw new UnauthorizedBoardMemberException(shortBoardInfo);
    }

    request.member = member;

    return true;
  }
}
