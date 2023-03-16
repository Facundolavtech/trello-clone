import { Injectable } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ExpiredTokenException } from '../../../common/exceptions/unauthorized.exceptions';

@Injectable()
export class AuthenticatedGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user) {
      throw err || new ExpiredTokenException();
    }
    return user;
  }
}
