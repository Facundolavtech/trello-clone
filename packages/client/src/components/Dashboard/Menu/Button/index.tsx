import { Avatar, HStack, MenuButton as ChakraMenuButton, Text } from '@chakra-ui/react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FontFamily } from '../../../../theme/constants';
import useUserProfile from '../../../../hooks/useUserProfile';

const MenuButton = () => {
  const { data: user } = useUserProfile();

  return (
    <ChakraMenuButton transition="all 0.2s">
      <HStack spacing="20px" alignItems="center">
        <HStack spacing="11px">
          <Avatar width="32px" height="32px" name={user?.name} src={user?.picture || ''} bg={user?.picture ? 'transparent' : 'gray.4'} color="gray.1" />
          <Text color="gray.1" fontSize={12} fontWeight={700} fontFamily={FontFamily.NotoSans}>
            {user?.name}
          </Text>
        </HStack>
        <RiArrowDownSFill color="gray.1" />
      </HStack>
    </ChakraMenuButton>
  );
};

export default MenuButton;
