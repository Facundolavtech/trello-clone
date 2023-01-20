import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RedisCacheService } from '../../modules/Redis/services/redis.service';

@Injectable()
export class CustomCacheInterceptor implements NestInterceptor {
  constructor(private readonly cache: RedisCacheService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    const ttl = request.ttl || 3600;
    const key = request.originalUrl;

    // check if cache manager is working correctly
    const cacheManagerWorking = await this.cache.test();
    if (!cacheManagerWorking) {
      Logger.log('Cache manager is not working correctly, proceeding with request');
      return next.handle();
    }

    const cacheData = await this.cache.get(key);

    if (cacheData) {
      return of(cacheData);
    }

    return next.handle().pipe(
      map((data) => {
        if (data !== undefined && data !== null) {
          this.cache.set(key, data, ttl);
        }
        return data;
      })
    );
  }
}
