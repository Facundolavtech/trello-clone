import { Avatar, HStack, MenuButton as ChakraMenuButton, Text } from '@chakra-ui/react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FontFamily } from '../../../../theme/constants';

const MenuButton = () => {
  return (
    <ChakraMenuButton transition="all 0.2s">
      <HStack spacing="20px" alignItems="center">
        <HStack spacing="11px">
          <Avatar width="32px" height="32px" name="Xanthe Neal" src="/assets/img/example-avatar.jpg" bg="transparent" color="gray.1" />
          <Text color="gray.1" fontSize={12} fontWeight={700} fontFamily={FontFamily.NotoSans}>
            Xanthe Neal
          </Text>
        </HStack>
        <RiArrowDownSFill color="gray.1" />
      </HStack>
    </ChakraMenuButton>
  );
};

export default MenuButton;
