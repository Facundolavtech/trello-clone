import { Module, CacheModule, Global } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import config from '../../config';
import { RedisCacheService } from './services/redis.service';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigType<typeof config>) => ({
        store: redisStore,
        url: configService.redis.connectionURL,
        isGlobal: true,
      }),
      inject: [config.KEY],
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService, CacheModule],
})
export class RedisCacheModule {}
