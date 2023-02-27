import { HStack, Icon, Text } from '@chakra-ui/react';
import { HiDocumentText } from 'react-icons/hi';

const DescriptionTitle = () => {
  return (
    <HStack spacing="8px">
      <Icon as={HiDocumentText} fontSize={10} color="gray.4" />
      <Text color="gray.4" fontWeight={600} fontSize={10}>
        Description
      </Text>
    </HStack>
  );
};

export default DescriptionTitle;
