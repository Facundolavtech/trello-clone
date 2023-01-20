import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RegisterGuard extends AuthGuard('register') {
  async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean;
    const request = await context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
