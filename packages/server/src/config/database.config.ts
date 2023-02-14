import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { NODE_ENV } from '../constants';
import * as path from 'path';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: [path.join(__dirname, '/../migrations/*.ts')],
  entities: [path.join(__dirname, '/../**/*.entity{.js,.ts}')],
  synchronize: false,
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
