import { Icon, Text, VStack } from '@chakra-ui/react';
import MenuItem from 'components/Dashboard/Menu/Item';
import useAuthMethods from 'features/Auth/hooks/useAuthMethods';
import { FiLogOut } from 'react-icons/fi';

const MenuItems = () => {
  const { logout } = useAuthMethods();

  return (
    <VStack>
      <MenuItem height="40px" _hover={{ bg: 'red.400' }} bg="red.500" borderRadius="8px" color="white" onClick={() => logout()}>
        <Icon as={FiLogOut} color="white" />
        <Text fontWeight={500} color="white" fontSize={14}>
          Logout
        </Text>
      </MenuItem>
    </VStack>
  );
};

export default MenuItems;
