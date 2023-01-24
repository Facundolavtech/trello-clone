import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

const excludePaths = ['/attachments/upload'];

@Injectable()
export class EmptyBodyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    const isExcludedPath = excludePaths.some((url) => request.path.includes(url));

    if ((request.method === 'POST' || request.method === 'PUT') && !isExcludedPath) {
      const { body } = request;

      if (!Object.keys(body).length) {
        throw new BadRequestException('Error: The request body is empty');
      }
    }

    return next.handle();
  }
}
