import { Menu as ChakraMenu, MenuList } from '@chakra-ui/react';
import Form from './Form';
import OpenButton from './Buttons/Open';

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
            <Form onClose={onClose} />
          </MenuList>
          <OpenButton />
        </>
      )}
    </ChakraMenu>
  );
};

export default CreateListMenu;
