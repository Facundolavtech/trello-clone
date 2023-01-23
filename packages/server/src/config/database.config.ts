import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { NODE_ENV } from '../constants';
import * as path from 'path';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [path.join(__dirname, '/../migrations/*.ts')],
  entities: [path.join(__dirname, '/../**/*.entity{.js,.ts}')],
  synchronize: process.env.NODE_ENV === NODE_ENV.DEVELOPMENT,
  migrationsRun: true,
  logging: false,
  ssl: process.env.NODE_ENV === NODE_ENV.PRODUCTION,
  migrationsTableName: 'migrations',
};

export const databaseConfigAsync: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      name: 'default',
      ...databaseConfig,
    };
  },
};

export const AppDataSource: DataSource = new DataSource(databaseConfig);
