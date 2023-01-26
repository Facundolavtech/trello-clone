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
  },
};
