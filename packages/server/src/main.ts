import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from './core/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new AllExceptionsFilter());

  const port: number = Number(process.env.PORT) || 8000;

  const config = new DocumentBuilder()
    .setTitle('Thullo API Documentation')
    .setDescription('API Documentation for Thullo API')
    .setVersion('1.0')
    .addTag('thullo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port).then(() => {
    Logger.log(`Server running on port ${port}`);
  });
}

bootstrap();
