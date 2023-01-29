import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

// define custom styles for funky variant
const variants = {
  bordered: {
    container: {
      border: '1px solid #BDBDBD',
      borderRadius: '8px',
    },
  },
  'bordered-shadow': definePartsStyle({
    container: {
      borderRadius: '12px',
      border: '1px solid #E0E0E0',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    },
  }),
  'board-card': definePartsStyle({
    container: {
      background: '#FFFFFF',
      boxShadow: ' 0px 4px 12px rgba(0, 0, 0, 0.05)',
      padding: '12px',
      borderRadius: '12px',
      _hover: { cursor: 'pointer' },
    },
  }),
};

// export variants in the component theme
export const cardTheme = defineMultiStyleConfig({ variants });
