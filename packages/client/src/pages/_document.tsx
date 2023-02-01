import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import { themeConfig } from '../theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="referrer" content="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
