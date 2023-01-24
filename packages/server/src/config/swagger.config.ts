import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

interface ISwaggerConfigParams {
  app: INestApplication;
}

const swaggerConfig = ({ app }: ISwaggerConfigParams): OpenAPIObject => {
  const config = new DocumentBuilder().setTitle('Thullo').setDescription('API Documentation for Thullo API').setVersion('1.0.0').build();
  const document = SwaggerModule.createDocument(app, config);

  return document;
};

export default swaggerConfig;
