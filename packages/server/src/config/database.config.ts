import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { NODE_ENV } from '../constants';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd() + '/.env'),
});

export const databaseConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  entities: [process.cwd(), '/./dist/**/*.entity.js'],
  synchronize: process.env.NODE_ENV === NODE_ENV.DEVELOPMENT,
  migrationsRun: process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  logging: false,
  ssl: process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  migrationsTableName: 'migrations',
};

export const databaseConfigAsync: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      name: 'default',
      ...databaseConfig,
      autoLoadEntities: true,
    };
  },
};

export const AppDataSource: DataSource = new DataSource(databaseConfig);
