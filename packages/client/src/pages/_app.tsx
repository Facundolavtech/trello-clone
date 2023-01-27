import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from '../config';
import NextProgress from '../libs/NextProgress';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <GoogleOAuthProvider clientId={config.Auth.Providers.Google.clientId} onScriptLoadError={() => null}>
        <ChakraProvider theme={theme}>
          <NextProgress />
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleOAuthProvider>
    </ReduxProvider>
  );
}

export default MyApp;
