import { Avatar, Box, HStack, Text, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useUserProfile from '../../../../hooks/useUserProfile';
import { FontFamily } from '../../../../theme/constants';
import useBoard from '../../hooks/useBoard';
import userIsBoardAdmin from '../../utils/userIsBoardAdmin';
import AddBoardMemberButton from '../Buttons/AddMember';
import Loading from './Loading';

const BoardMembers = () => {
  const router = useRouter();

  const boardId = router.query.id as string;

  const { data: board, isLoading } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  if (isLoading) {
    return <Loading />;
  }

  if (!board || !user) return null;

  return (
    <HStack spacing="16px">
      {board.members
        .sort((a, b) => a.createdAt - b.createdAt)
        .slice(0, 4)
        .map((member) => (
          <Tooltip key={member.id} label={member.user.name} aria-label="A tooltip" hasArrow bg="gray.4" color="white" fontWeight={400} placement="top">
            <Avatar
              size="sm"
              src={member.user.picture ?? ''}
              name={member.user.name}
              width="32px"
              height="32px"
              borderRadius="8px"
              bg={member.user.picture ? 'transparent' : 'gray.4'}
              color="white"
            />
          </Tooltip>
        ))}
      {board.members.length > 4 && (
        <Box display="flex" alignItems="center" justifyContent="center" width="32px" height="32px" borderRadius="8px" bg="lightgray.1">
          <Text fontWeight={500} fontFamily={FontFamily.NotoSans} color="gray.4" fontSize={12}>
            +{board.members.length - 4}
          </Text>
        </Box>
      )}
      {userIsBoardAdmin(board.admin.id, user.id) && <AddBoardMemberButton />}
    </HStack>
  );
};

export default BoardMembers;
