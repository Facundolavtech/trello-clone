import { UnauthorizedException } from '@nestjs/common';

export class ExpiredTokenException extends UnauthorizedException {
  constructor() {
    super({
      code: 'TOKEN_EXPIRED_ERROR',
      message: 'Your session has expired, please sign in again to continue.',
    });
  }
}

export class UnauthorizedBoardMemberException extends UnauthorizedException {
  constructor(additionalInfo?: any) {
    super({
      code: 'NEED_BOARD_MEMBER_ERROR',
      message: 'You need to be a member of the board to see the content, please request access to the board admin.',
      additionalInfo,
    });
  }
}

export class UnauthorizedBoardAdminException extends UnauthorizedException {
  constructor() {
    super({
      code: 'NEED_BOARD_ADMIN_ERROR',
      message: 'You need to be an admin of the board to perform this action.',
    });
  }
}
