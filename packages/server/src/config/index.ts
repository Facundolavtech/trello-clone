import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    client: {
      baseURL: process.env.CLIENT_BASE_URL,
    },
    redis: {
      connectionURL: process.env.REDIS_CONNECTION_URL,
    },
    globalPrefix: 'api',
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    database: {
      connectionURL: process.env.DATABASE_URL,
    },
    auth: {
      jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
      oauth: {
        google: {
          apiBaseURL: process.env.GOOGLE_API_BASE_URL,
          clientID: process.env.GOOGLE_CLIENT_ID,
        },
      },
    },
  };
});
