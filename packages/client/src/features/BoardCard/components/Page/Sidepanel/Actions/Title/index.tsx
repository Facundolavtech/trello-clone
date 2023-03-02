import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

const Title = () => {
  return (
    <HStack spacing="6px">
      <Icon as={FaUserCircle} color="gray.4" fontSize={10} />
      <Text fontWeight={600} fontSize={10} color="gray.4">
        Actions
      </Text>
    </HStack>
  );
};

export default Title;
