import { Box, HStack, Icon, Menu as ChakraMenu, MenuButton as ChakraMenuButton, MenuList as ChakraMenuList, Text, useDisclosure } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import { FC } from 'react';
import { MdDelete, MdEdit, MdMoreHoriz } from 'react-icons/md';
import Button from '../../../../components/Button';
import { IBoardList } from '../../../../models/board-list.model';
import DeleteListDialog from '../DeleteDialog';
import UpdateListModal from '../Modals/Update';

type Props = {
  list: IBoardList;
};

const ListOptionsMenu: FC<Props> = ({ list }) => {
  const deleteListDisclosure = useDisclosure();

  return (
    <>
      <DeleteListDialog listId={list.id} disclosure={deleteListDisclosure} />
      <ChakraMenu>
        <ChakraMenuButton>
          <Box display="flex" alignItems="center">
            <Icon as={MdMoreHoriz} fontSize={16} color="gray.3" />
          </Box>
        </ChakraMenuButton>
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
            <Button variant="primary" height="23px" style={{ gap: '4px' }} onClick={() => NiceModal.show(UpdateListModal, { listId: list.id, title: list.name })}>
              <Icon as={MdEdit} fontSize={12} color="white" />
              <Text fontSize={12} lineHeight="1rem" fontWeight={500} color="white">
                Edit
              </Text>
            </Button>
            <Button variant="outline" height="23px" style={{ border: '1px solid #EB5757', gap: '4px' }} onClick={deleteListDisclosure.onOpen}>
              <Icon as={MdDelete} fontSize={12} color="#EB5757" />
              <Text fontSize={12} lineHeight="1rem" fontWeight={500} color="#EB5757">
                Delete
              </Text>
            </Button>
          </HStack>
        </ChakraMenuList>
      </ChakraMenu>
    </>
  );
};

export default ListOptionsMenu;
