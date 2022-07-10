import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class NotEmptyBody implements CanActivate {
  canActivate(ctx: ExecutionContext): any {
    const request = ctx.switchToHttp().getRequest();

    if (!request.body || Object.keys(request.body).length === 0) {
      throw new BadRequestException();
    }

    return true;
  }
}
