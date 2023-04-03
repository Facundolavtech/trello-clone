import { HStack, Menu as ChakraMenu, MenuList as ChakraMenuList, useDisclosure } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import { FC } from 'react';
import { IBoardList } from 'models/board-list.model';
import DeleteListDialog from 'features/BoardList/components/DeleteDialog';
import UpdateListModal from 'features/BoardList/components/Modals/Update';
import DeleteButton from 'features/BoardList/components/OptionsMenu/Buttons/Delete';
import EditButton from 'features/BoardList/components/OptionsMenu/Buttons/Edit';
import OpenButton from 'features/BoardList/components/OptionsMenu/Buttons/Open';

type Props = {
  list: IBoardList;
};

const OptionsMenu: FC<Props> = ({ list }) => {
  const deleteListDisclosure = useDisclosure();

  return (
    <>
      <DeleteListDialog listId={list.id} disclosure={deleteListDisclosure} />
      <ChakraMenu>
        <OpenButton />
        <ChakraMenuList
          minWidth="120px"
          position="absolute"
          padding="13px"
          borderRadius="12px"
          boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
          borderWidth={1}
          borderColor="gray.5"
        >
          <HStack width="full">
            <EditButton onClick={() => NiceModal.show(UpdateListModal, { listId: list.id, title: list.name })} />
            <DeleteButton onClick={deleteListDisclosure.onOpen} />
          </HStack>
        </ChakraMenuList>
      </ChakraMenu>
    </>
  );
};

export default OptionsMenu;
