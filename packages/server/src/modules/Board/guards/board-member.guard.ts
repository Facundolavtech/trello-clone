import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException, UnauthorizedException } from '@nestjs/common/exceptions';
import { BoardService } from '../services/board.service';

@Injectable()
export class BoardMemberGuard implements CanActivate {
  constructor(private boardService: BoardService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const userId: string = request.user.id;
    const boardId: string = request.params.boardId || request.params.id;

    if (!boardId) {
      throw new BadRequestException('Specifies the board ID');
    }

    const boardById = await this.boardService.findByIdWithRelations(boardId, ['members']);

    if (!boardById) {
      throw new NotFoundException('The board does not exists');
    }

    const isBoardMember = this.boardService.userIsBoardMember(boardById, userId);

    if (!isBoardMember) {
      throw new UnauthorizedException('You need to be a board member to perform this action');
    }

    request.board = boardById;

    return true;
  }
}
