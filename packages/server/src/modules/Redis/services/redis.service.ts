import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  async get(key: string): Promise<any> {
    return await this.cache.get(key);
  }

  async set(key: string, value, ttl: number) {
    await this.cache.set(key, value, { ttl });
  }

  async reset() {
    await this.cache.reset();
  }

  async del(key: string) {
    await this.cache.del(key);
  }

  async test(): Promise<boolean> {
    try {
      await this.cache.set('test', 'test', { ttl: 60 });

      return (await this.cache.get('test')) === 'test';
    } catch (error) {
      return false;
    }
  }
}
