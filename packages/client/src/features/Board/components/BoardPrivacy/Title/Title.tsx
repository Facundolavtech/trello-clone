import { Heading, Text, VStack } from '@chakra-ui/react';

const BoardPrivacyMenuTitle = () => {
  return (
    <VStack spacing={1} alignItems="flex-start">
      <Heading fontWeight={600} fontSize={12} color="gray.2">
        Visibility
      </Heading>
      <Text color="gray.3" fontWeight={400} fontSize={12}>
        Choose who can see to this board.
      </Text>
    </VStack>
  );
};

export default BoardPrivacyMenuTitle;
