import { Flex, Menu as ChakraMenu, MenuButton as ChakraMenuButton, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useUserProfile from '../../../../hooks/useUserProfile';
import useBoard from '../../hooks/useBoard';
import userIsBoardAdmin from '../../utils/userIsBoardAdmin';
import BoardPrivacyMenuItems from './Items/Items';
import PrivacyButton from './PrivacyButton';
import BoardPrivacyMenuTitle from './Title/Title';

const BoardPrivacy = () => {
  const router = useRouter();
  const boardId = router.query.id as string;
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
