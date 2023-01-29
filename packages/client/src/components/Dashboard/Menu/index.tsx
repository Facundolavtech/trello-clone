import { Divider, Menu as ChakraMenu, MenuList, Text, VStack } from '@chakra-ui/react';
import MenuItems from './Items';
import MenuButton from './Button';

const Menu = () => {
  return (
    <ChakraMenu>
      <MenuButton />
      <MenuList padding={4}>
        <VStack alignItems="flex-start">
          <Text color="gray.4" fontSize={14} fontWeight={400}>
            flavagnino8@gmail.com
          </Text>
          <Text color="gray.4" fontSize={14} fontWeight={400}>
            Register at:{' '}
            <Text as="strong" color="gray.3" fontWeight={500}>
              November 8 2023
            </Text>
          </Text>
        </VStack>
        <Divider orientation="horizontal" width="full" borderColor="rgba(0,0,0,0.1)" my={4} />
        <VStack>
          <MenuItems />
        </VStack>
      </MenuList>
    </ChakraMenu>
  );
};

export default Menu;
