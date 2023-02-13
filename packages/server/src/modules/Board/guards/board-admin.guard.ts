import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { WithBoardRequest } from '../interfaces';

@Injectable()
export class BoardAdminGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: WithBoardRequest = context.switchToHttp().getRequest();

    if (request.board.admin.id !== request.user.id) {
      throw new UnauthorizedException('You need to be a board admin to perform this action');
    }

    return true;
  }
}
