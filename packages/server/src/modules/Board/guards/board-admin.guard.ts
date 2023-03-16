import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UnauthorizedBoardAdminException } from 'src/common/exceptions/unauthorized.exceptions';
import { IWithBoardMemberRequest } from '../interfaces';

@Injectable()
export class BoardAdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IWithBoardMemberRequest = context.switchToHttp().getRequest();

    if (request.member.board.admin.id !== request.user.id) {
      throw new UnauthorizedBoardAdminException();
    }

    return true;
  }
}
