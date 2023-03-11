import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from '../config';
import NextProgress from '../libs/NextProgress';
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';
import SEO from '../components/SEO';
import NiceModal from '@ebay/nice-modal-react';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 130000,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={config.AUTH.PROVIDERS.google.clientId} onScriptLoadError={() => null}>
        <ChakraProvider theme={theme}>
          <NextProgress />
          <Hydrate state={pageProps.dehydratedState}>
            <SEO />
            <NiceModal.Provider>
              <Component {...pageProps} />
            </NiceModal.Provider>
          </Hydrate>
        </ChakraProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
