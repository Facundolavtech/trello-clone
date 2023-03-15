import { Box, Divider, Heading, HStack, Icon, VStack } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { useBoardContext } from 'features/Board/context/board';

const Header = () => {
  const { onClose } = useBoardContext();

  return (
    <VStack spacing="8px" width="full">
      <HStack width="full" justifyContent="space-between">
        <Heading fontWeight={600} fontSize={12} color="gray.1">
          Menu
        </Heading>
        <Box as="button" _hover={{ cursor: 'pointer' }} onClick={onClose}>
          <Icon as={MdClose} color="gray.2" fontSize={18} />
        </Box>
      </HStack>
      <Divider width="full" orientation="horizontal" borderColor="gray.5" />
    </VStack>
  );
};

export default Header;
