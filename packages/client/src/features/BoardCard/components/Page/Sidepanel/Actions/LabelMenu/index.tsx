import { Menu as ChakraMenu, MenuList as ChakraMenuList, Text } from '@chakra-ui/react';
import OpenButton from './Buttons/Open';

const LabelMenu = () => {
  return (
    <ChakraMenu>
      <OpenButton />
      <ChakraMenuList px="12px" py="9px" width="245px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)" borderRadius="12px" borderWidth={1} borderColor="gray.5">
        <Text>Labels</Text>
      </ChakraMenuList>
    </ChakraMenu>
  );
};

export default LabelMenu;
