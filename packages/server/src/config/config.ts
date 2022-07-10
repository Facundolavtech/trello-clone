import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      name: process.env.DATABASE_NAME,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresin: process.env.JWT_EXPIRETIME,
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
  };
});
