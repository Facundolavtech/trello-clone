import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Board } from '../entities/Board.entity';

@Injectable()
export class BoardAdminGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user.id;

    const board: Board = request.board;

    const isBoardAdmin = board.admin.id === userId;

    if (!isBoardAdmin) {
      throw new UnauthorizedException('You need to be a board admin to perform this action');
    }

    return true;
  }
}
