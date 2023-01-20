import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class EmptyBodyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    if (request.method === 'POST' || request.method === 'PUT') {
      const { body } = request;

      if (!Object.keys(body).length) {
        throw new BadRequestException('Error: The request body is empty');
      }
    }

    return next.handle();
  }
}
