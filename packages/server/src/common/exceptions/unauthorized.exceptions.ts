import { UnauthorizedException } from '@nestjs/common';

export class TokenExpiredException extends UnauthorizedException {
  constructor() {
    super({ code: 'TokenExpiredError', message: 'Token expired, please sign in again to continue' });
  }
}
