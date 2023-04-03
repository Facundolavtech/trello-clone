import { HStack, Icon, MenuButton } from '@chakra-ui/react';
import MemberList from 'components/Members';
import useUserProfile from 'hooks/useUserProfile';
import sortArr from 'utils/sortArr';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import userIsBoardAdmin from 'features/Board/utils/userIsBoardAdmin';
import Loading from 'features/Board/components/Members/Loading';
import InviteMenu from 'components/InviteMenu';
import Button from 'components/Button';
import { AiOutlinePlus } from 'react-icons/ai';

const BoardMembers = () => {
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });
  const { data: user } = useUserProfile();

  if (board && user) {
    return (
      <HStack spacing="16px">
        <MemberList members={sortArr(board.members, 'createdAt')} maxMembers={4} avatarProps={{ width: '32px', height: '32px' }} />
        {userIsBoardAdmin(board.admin.id, user.id) && (
          <InviteMenu
            title="Invite to Board"
            subtitle="Search users you want to invite to"
            openButton={
              <MenuButton>
                <Button variant="primary" width="32px" height="32px" as="div">
                  <Icon as={AiOutlinePlus} color="white" />
                </Button>
              </MenuButton>
            }
          />
        )}
      </HStack>
    );
  }

  return <Loading />;
};

export default BoardMembers;
