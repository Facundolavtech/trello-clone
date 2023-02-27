import { FC } from 'react';
import { Menu as ChakraMenu, MenuList } from '@chakra-ui/react';
import CreateCardForm from './Form';
import CreateCardMenuButton from './OpenButton';

type Props = {
  listId: string;
};

const CreateCardMenu: FC<Props> = ({ listId }) => {
  return (
    <ChakraMenu matchWidth>
      {({ onClose }) => (
        <>
          <MenuList padding="13px" minHeight="87px" borderRadius="12px" boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)" borderWidth={1} borderColor="gray.5">
            <CreateCardForm listId={listId} onClose={onClose} />
          </MenuList>
          <CreateCardMenuButton />
        </>
      )}
    </ChakraMenu>
  );
};

export default CreateCardMenu;
