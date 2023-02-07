import { OptionsType } from 'cookies-next/lib/types';

export default {
  Api: {
    BaseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  Auth: {
    Providers: {
      Google: {
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      },
    },
    Cookie: {
      httpOnly: false,
      secure: true,
      maxAge: 7 * 24 * 3600 * 1000,
      path: '/',
      sameSite: 'none',
    } as OptionsType,
  },
};
