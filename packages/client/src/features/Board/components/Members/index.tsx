import { HStack } from '@chakra-ui/react';
import MemberList from '../../../../components/Members';
import useUserProfile from '../../../../hooks/useUserProfile';
import sortArr from '../../../../utils/sortArr';
import useBoard from '../../hooks/useBoard';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';
import userIsBoardAdmin from '../../utils/userIsBoardAdmin';
import AddBoardMemberButton from '../Buttons/AddMember';
import Loading from './Loading';

const BoardMembers = () => {
  const boardId = useBoardIdFromRoute();

  const { data: board, isLoading } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  if (isLoading) {
    return <Loading />;
  }

  if (!board || !user) return null;

  return (
    <HStack spacing="16px">
      <MemberList members={sortArr(board.members, 'createdAt')} maxMembers={4} useTooltip={true} />
      {userIsBoardAdmin(board.admin.id, user.id) && <AddBoardMemberButton />}
    </HStack>
  );
};

export default BoardMembers;
