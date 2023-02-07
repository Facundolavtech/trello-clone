import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.sqlMessage || exception.response || exception;

    return response.status(status).json({
      ...exception.response,
      statusCode: status,
      message: status === 500 ? 'An error occurred on our servers, we will work to fix it as soon as possible' : message.message,
      timestamp: new Date(Date.now()),
    });
  }
}
