import { FC } from 'react';
import { Menu as ChakraMenu, MenuList } from '@chakra-ui/react';
import Form from './Form';
import OpenButton from './Buttons/Open';

type Props = {
  listId: string;
};

const CreateMenu: FC<Props> = ({ listId }) => {
  return (
    <ChakraMenu matchWidth>
      {({ onClose }) => (
        <>
          <MenuList padding="13px" minHeight="87px" borderRadius="12px" boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)" borderWidth={1} borderColor="gray.5">
            <Form listId={listId} onClose={onClose} />
          </MenuList>
          <OpenButton />
        </>
      )}
    </ChakraMenu>
  );
};

export default CreateMenu;
