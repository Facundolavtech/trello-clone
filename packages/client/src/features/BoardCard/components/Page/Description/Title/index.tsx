import { HStack, Icon, Text } from '@chakra-ui/react';
import { IoMdDocument } from 'react-icons/io';

const DescriptionTitle = () => {
  return (
    <HStack spacing="8px">
      <Icon as={IoMdDocument} fontSize={10} color="gray.4" />
      <Text color="gray.4" fontSize={10} fontWeight={600}>
        Description
      </Text>
    </HStack>
  );
};

export default DescriptionTitle;
