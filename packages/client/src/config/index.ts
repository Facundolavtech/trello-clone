import { OptionsType } from 'cookies-next/lib/types';

export default {
  API: {
    BaseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  AUTH: {
    PROVIDERS: {
      google: {
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      },
    },
    COOKIE_NAME: 'token',
    COOKIE_OPTIONS: {
      httpOnly: false,
      maxAge: 7 * 24 * 3600 * 1000,
      path: '/',
    } as OptionsType,
  },
  FILES: {
    maxSize: 4194304, // 4MB,
  },
};
