import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { CustomUUIDPipe } from '../../../common/pipes/uuid.pipe';
import { AuthenticatedRequest } from '../../../common/types';
import { BoardMemberService } from '../services/board-member.service';

interface IBoardMemberGuardRequest extends AuthenticatedRequest {
  params: {
    boardId: string;
  };
}

@Injectable()
export class BoardMemberGuard implements CanActivate {
  constructor(private boardMemberService: BoardMemberService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IBoardMemberGuardRequest = context.switchToHttp().getRequest();

    const userId = request.user.id;
    const boardId = await new CustomUUIDPipe().transform(request.params.boardId);

    const isBoardMember = await this.boardMemberService.userIsBoardMember(boardId, userId);

    if (!isBoardMember) {
      throw new UnauthorizedException('You need to be a board member to perform this action');
    }

    return true;
  }
}
