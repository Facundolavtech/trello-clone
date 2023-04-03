import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdGroup } from 'react-icons/md';

const Title = () => {
  return (
    <HStack spacing="7px">
      <Icon as={MdGroup} color="gray.4" fontSize={10} />
      <Text fontWeight={600} fontSize={10} color="gray.4">
        Members
      </Text>
    </HStack>
  );
};

export default Title;
