import { Icon, MenuButton as ChakraMenuButton, Text } from '@chakra-ui/react';
import { AiFillPicture } from 'react-icons/ai';
import Button from 'components/Button';

const OpenButton = () => {
  return (
    <ChakraMenuButton width="full">
      <Button as="div" height="32px" variant="lightgray" style={{ gap: '13px', justifyContent: 'flex-start' }}>
        <Icon as={AiFillPicture} color="gray.3" fontSize={{ base: 10, md: 12 }} />
        <Text color="gray.3" fontSize={{ base: 10, md: 12 }} fontWeight={500}>
          Cover
        </Text>
      </Button>
    </ChakraMenuButton>
  );
};

export default OpenButton;
