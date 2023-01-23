import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { NODE_ENV } from './constants';
import { EmptyBodyInterceptor } from './common/interceptors/empty-body.interceptor';
import config from './config';
import { databaseConfigAsync } from './config/database.config';
import { AuthModule } from './modules/Auth/auth.module';
import { UserModule } from './modules/User/user.module';
import { BoardModule } from './modules/Board/board.module';
import { RedisCacheModule } from './modules/Redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    AuthModule,
    UserModule,
    BoardModule,
    RedisCacheModule,
    TypeOrmModule.forRootAsync(databaseConfigAsync),
    PassportModule.register({
      session: true,
    }),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: EmptyBodyInterceptor,
    },
    {
      provide: APP_GUARD,
      useFactory: () => ({
        useClass: process.env.NODE_ENV === NODE_ENV.PRODUCTION ? ThrottlerGuard : null,
      }),
    },
  ],
})
export class AppModule {
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {
    if (this.configService.environment === NODE_ENV.PRODUCTION) {
      ThrottlerModule.forRoot({
        ttl: 15 * 60 * 1000,
        limit: 100,
      });
    }
  }
}
