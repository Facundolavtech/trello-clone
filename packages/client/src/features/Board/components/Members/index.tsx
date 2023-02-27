import { HStack } from '@chakra-ui/react';
import AddButton from '../../../../components/Buttons/Add';
import MemberList from '../../../../components/Members';
import useUserProfile from '../../../../hooks/useUserProfile';
import sortArr from '../../../../utils/sortArr';
import useBoard from '../../hooks/useBoard';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';
import userIsBoardAdmin from '../../utils/userIsBoardAdmin';
import Loading from './Loading';

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
