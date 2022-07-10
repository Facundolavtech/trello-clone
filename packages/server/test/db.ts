import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const createTestConfiguration = (entities): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: ':memory:',
  entities,
  logging: false,
  synchronize: true,
});
