import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { cardTheme } from 'theme/card';

export const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config: themeConfig,
  styles: {
    global: {
      body: {
        bg: '#F8F9FD',
      },
      a: {
        _hover: {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    },
  },
  colors: {
    blue: {
      1: '#2F80ED',
      2: '#DAE4FD',
    },
    brands: {
      google: '#4285F4',
    },
    black: {
      default: '#000000',
    },
    lightgray: {
      1: '#F2F2F2',
    },
    gray: {
      1: '#333333',
      2: '#4F4F4F',
      3: '#828282',
      4: '#BDBDBD',
      5: '#E0E0E0',
    },
    submit: '#219653',
    delete: '#EB5757',
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
    },
  },
  components: {
    Button: {
      baseStyle: {
        display: 'flex',
        borderRadius: '8px',
        _hover: {
          cursor: 'pointer',
          opacity: 1,
        },
        _disabled: {
          _hover: {
            cursor: 'not-allowed',
            opacity: 0.4,
          },
        },
        _loading: {
          _hover: {
            cursor: 'not-allowed',
            opacity: 0.4,
          },
        },
      },
      variants: {
        primary: {
          background: 'blue.1',
          color: 'white',
          _hover: {
            opacity: 0.8,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease-out',
          },
          _loading: {
            _hover: {
              background: 'blue.1',
            },
          },
          _disabled: {
            _hover: {
              background: 'blue.1 !important',
            },
          },
        },
        submit: {
          background: 'submit',
          color: 'white',
          _hover: {
            opacity: 0.8,
            transition: 'opacity 0.2s ease-out',
          },
          _loading: {
            _hover: {
              background: 'submit',
            },
          },
          _disabled: {
            _hover: {
              background: 'submit !important',
            },
          },
        },
        delete: {
          background: 'delete',
          color: 'white',
          _hover: {
            opacity: 0.8,
            transition: 'opacity 0.2s ease-out',
          },
          _loading: {
            _hover: {
              background: 'delete',
            },
          },
          _disabled: {
            _hover: {
              background: 'delete !important',
            },
          },
        },
        lightgray: {
          background: 'lightgray.1',
          _hover: {
            opacity: 0.8,
            transition: 'opacity 0.2s ease-out',
          },
          _loading: {
            _hover: {
              background: 'lightgray.1',
            },
          },
          _disabled: {
            _hover: {
              background: 'lightgray.1 !important',
            },
          },
        },
        outline: {
          borderColor: 'gray.4',
          borderWidth: '1px',
          background: 'white',
          _hover: {
            borderColor: 'gray.3',
          },
          _loading: {
            _hover: {
              background: 'gray.4',
            },
          },
          _disabled: {
            _hover: {
              background: 'gray.4 !important',
            },
          },
        },
        link: {
          background: 'none',
          border: 'none',
          padding: 0,
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
    Card: cardTheme,
  },
  boxShadow: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  },
  breakpoints: {
    sm: '668px',
    md: '992px',
    lg: '1312px',
  },
});

export default theme;
