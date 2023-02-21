import { Menu as ChakraMenu, MenuList } from '@chakra-ui/react';
import CreateListForm from './Form';
import CreateListMenuButton from './OpenButton';

const CreateListMenu = () => {
  return (
    <ChakraMenu>
      {({ onClose }) => (
        <>
          <MenuList
            position="absolute"
            padding="13px"
            minWidth="243px"
            minHeight="87px"
            borderRadius="12px"
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
            borderWidth={1}
            borderColor="gray.5"
          >
            <CreateListForm onClose={onClose} />
          </MenuList>
          <CreateListMenuButton />
        </>
      )}
    </ChakraMenu>
  );
};

export default CreateListMenu;
