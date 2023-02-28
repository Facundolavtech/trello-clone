import { Box, Icon, MenuButton as ChakraMenuButton } from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';

const OpenButton = () => {
  return (
    <ChakraMenuButton>
      <Box display="flex" alignItems="center">
        <Icon as={MdMoreHoriz} fontSize={16} color="gray.3" />
      </Box>
    </ChakraMenuButton>
  );
};

export default OpenButton;
