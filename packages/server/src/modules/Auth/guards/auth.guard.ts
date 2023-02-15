import { Injectable } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { TokenExpiredException } from '../../../common/exceptions/unauthorized.exceptions';

@Injectable()
export class AuthenticatedGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user) {
      throw err || new TokenExpiredException();
    }
    return user;
  }
}
