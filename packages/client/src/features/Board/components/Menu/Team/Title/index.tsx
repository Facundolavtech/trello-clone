import { HStack, Icon, Text } from '@chakra-ui/react';
import { HiDocumentText } from 'react-icons/hi';

const TeamTitle = () => {
  return (
    <HStack spacing="6px">
      <Icon as={HiDocumentText} fontSize={10} color="gray.4" />
      <Text color="gray.4" fontWeight={600} fontSize={10}>
        Team
      </Text>
    </HStack>
  );
};

export default TeamTitle;
