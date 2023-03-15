import { HStack } from '@chakra-ui/react';
import AddButton from 'components/Buttons/Add';
import MemberList from 'components/Members';
import useUserProfile from 'hooks/useUserProfile';
import sortArr from 'utils/sortArr';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import userIsBoardAdmin from 'features/Board/utils/userIsBoardAdmin';
import Loading from 'features/Board/components/Members/Loading';

const BoardMembers = () => {
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  if (board && user) {
    return (
      <HStack spacing="16px">
        <MemberList members={sortArr(board.members, 'createdAt')} maxMembers={4} />
        {userIsBoardAdmin(board.admin.id, user.id) && <AddButton onClick={() => null} />}
      </HStack>
    );
  }

  return <Loading />;
};

export default BoardMembers;
