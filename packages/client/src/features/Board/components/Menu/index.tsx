import { Drawer, DrawerContent, VStack } from '@chakra-ui/react';
import { useBoardContext } from 'features/Board/context/board';
import useBoard from 'features/Board/hooks/useBoard';
import useUserProfile from 'hooks/useUserProfile';
import userIsBoardAdmin from 'features/Board/utils/userIsBoardAdmin';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import Header from 'features/Board/components/Menu/Header';
import Creator from 'features/Board/components/Menu/Creator';
import Description from 'features/Board/components/Menu/Description';
import Team from 'features/Board/components/Menu/Team';
import { HeaderStyles } from 'components/Dashboard/Header';

const BoardMenu = () => {
  const { isOpen, onClose } = useBoardContext();
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  if (!board || !user) return null;

  const userIsAdmin = userIsBoardAdmin(board.admin.id, user.id);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} preserveScrollBarGap>
      <DrawerContent
        className="hide__scroll"
        boxShadow="none"
        maxWidth={{ base: '320px', md: '377px' }}
        position="fixed"
        marginTop={`${HeaderStyles.height}px`}
        right={0}
        zIndex={50}
        padding="20px"
        overflowY="auto"
      >
        <VStack width="full" spacing="25px">
          <VStack width="full" spacing="10px">
            <Header />
            <Creator creator={board.admin} createdAt={board.createdAt} />
          </VStack>
          <Description canEdit={userIsAdmin} />
          <Team admin={board.admin} members={board.members} canDeleteMembers={userIsAdmin} />
        </VStack>
      </DrawerContent>
    </Drawer>
  );
};

export default BoardMenu;
