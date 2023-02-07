import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { NODE_ENV } from './constants';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';
import config from './config';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { globalPrefix, port, environment, client } = config();

  app.setGlobalPrefix(globalPrefix);

  if (environment === NODE_ENV.PRODUCTION) {
    app.set('trust proxy', 1);
  }

  if (environment === NODE_ENV.DEVELOPMENT) {
    app.use(morgan('tiny'));
  }

  SwaggerModule.setup(globalPrefix, app, swaggerConfig({ app }));

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter());

  app.enableCors({ origin: client.baseURL, credentials: true });
  app.use(helmet({ crossOriginResourcePolicy: false }));

  app.use(cookieParser());

  await app.listen(port);

  Logger.log(`Application is running on ${environment.toUpperCase()} mode at ${await app.getUrl()}`);
}

bootstrap();
