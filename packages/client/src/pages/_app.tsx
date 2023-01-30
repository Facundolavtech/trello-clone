import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from '../config';
import NextProgress from '../libs/NextProgress';
import { QueryClientProvider, QueryClient } from 'react-query';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 30000,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={config.Auth.Providers.Google.clientId} onScriptLoadError={() => null}>
        <ChakraProvider theme={theme}>
          <NextProgress />
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
