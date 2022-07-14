import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './boards/board.module';
import config from './config/config';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/filters/all-exceptions.filter';

import { createDatabase } from './config/database';

@Module({
  imports: [
    createDatabase,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule,
    UsersModule,
    BoardModule,
  ],
  controllers: [AuthController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule {}
