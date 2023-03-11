import { Heading, Text, VStack } from '@chakra-ui/react';
import { FontFamily } from '../../../../../../../../theme/constants';

const Header = () => {
  return (
    <VStack alignItems="flex-start" spacing={1}>
      <Heading color="gray.2" fontSize={12} fontWeight={600}>
        Label
      </Heading>
      <Text fontFamily={FontFamily.NotoSans} fontSize={12} color="gray.3">
        Select a name and a color
      </Text>
    </VStack>
  );
};

export default Header;
