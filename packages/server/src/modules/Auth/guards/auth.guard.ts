import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();

    const isAuthenticated: boolean = request.isAuthenticated();

    if (!isAuthenticated) {
      throw new UnauthorizedException('Please sign in to continue');
    }

    return isAuthenticated;
  }
}
