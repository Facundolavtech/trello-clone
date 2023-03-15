import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from 'config';
import NextProgress from 'libs/NextProgress';
import { QueryClientProvider } from '@tanstack/react-query';
import SEO from 'components/SEO';
import NiceModal from '@ebay/nice-modal-react';
import useQueryClient from 'hooks/useQueryClient';

function App({ Component, pageProps }: AppProps) {
  const queryClient = useQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={config.AUTH.PROVIDERS.google.clientId} onScriptLoadError={() => null}>
        <ChakraProvider theme={theme}>
          <NextProgress />
          <SEO />
          <NiceModal.Provider>
            <Component {...pageProps} />
          </NiceModal.Provider>
        </ChakraProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
