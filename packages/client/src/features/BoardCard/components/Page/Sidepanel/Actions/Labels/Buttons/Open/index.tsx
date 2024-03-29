import { Icon, MenuButton as ChakraMenuButton, Text } from '@chakra-ui/react';
import { MdLabel } from 'react-icons/md';
import Button from 'components/Button';

const OpenButton = () => {
  return (
    <ChakraMenuButton width="full">
      <Button as="div" height="32px" variant="lightgray" style={{ gap: '13px', justifyContent: 'flex-start' }}>
        <Icon as={MdLabel} color="gray.3" fontSize={{ base: 10, md: 12 }} />
        <Text fontSize={{ base: 10, md: 12 }} color="gray.3" fontWeight={500}>
          Labels
        </Text>
      </Button>
    </ChakraMenuButton>
  );
};

export default OpenButton;
