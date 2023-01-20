import { createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config();

const REDIS_CONNECTION_URL = process.env.REDIS_CONNECTION_URL;

const redisClient: any = createClient({
  url: REDIS_CONNECTION_URL,
  legacyMode: true,
});

export default redisClient;
