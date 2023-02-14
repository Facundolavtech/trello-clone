import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { IWithBoardMemberRequest } from '../interfaces';

@Injectable()
export class BoardAdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IWithBoardMemberRequest = context.switchToHttp().getRequest();

    if (request.member.board.admin.id !== request.user.id) {
      throw new UnauthorizedException('You need to be a board admin to perform this action');
    }

    return true;
  }
}
