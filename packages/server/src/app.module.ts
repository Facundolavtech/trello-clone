import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { BoardModule } from './boards/board.module';
import config from './config/config';
import { Board } from './boards/entities/board.entity';
import { List } from './boards/lists/entities/list.entity';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/filters/all-exceptions.filter';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: configService.database.user,
        password: configService.database.password,
        database: configService.database.name,
        entities: [User, Board, List],
        synchronize: true,
        autoLoadEntities: true,
        retryDelay: 3000,
        retryAttempts: 10,
        keepConnectionAlive: true,
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    AuthModule,
    UsersModule,
    BoardModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
