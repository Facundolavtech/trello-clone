import { Flex, Menu as ChakraMenu, MenuButton as ChakraMenuButton, MenuList } from '@chakra-ui/react';
import useUserProfile from 'hooks/useUserProfile';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import userIsBoardAdmin from 'features/Board/utils/userIsBoardAdmin';
import BoardPrivacyMenuItems from 'features/Board/components/BoardPrivacy/Items/Items';
import PrivacyButton from 'features/Board/components/BoardPrivacy/PrivacyButton';
import BoardPrivacyMenuTitle from 'features/Board/components/BoardPrivacy/Title/Title';

const BoardPrivacy = () => {
  const boardId = useBoardIdFromRoute();
  const { data: user } = useUserProfile();
  const { data: board } = useBoard({ id: boardId });

  return userIsBoardAdmin(board?.admin.id, user?.id) ? (
    <ChakraMenu>
      <ChakraMenuButton>
        <PrivacyButton disabled={false} />
      </ChakraMenuButton>
      <MenuList padding="12px" width="234px" maxWidth="full" borderWidth={1} borderColor="#E0E0E0" borderRadius="12px" boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)">
        <Flex direction="column" gap="15px" alignItems="flex-start">
          <BoardPrivacyMenuTitle />
          <BoardPrivacyMenuItems />
        </Flex>
      </MenuList>
    </ChakraMenu>
  ) : (
    <PrivacyButton disabled />
  );
};

export default BoardPrivacy;
