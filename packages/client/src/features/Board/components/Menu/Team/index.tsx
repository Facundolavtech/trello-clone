import { FC } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import { IBoardAdmin, IBoardMember } from 'models/board.model';
import TeamMember from 'features/Board/components/Menu/Team/Member';
import TeamTitle from 'features/Board/components/Menu/Team/Title';

type Props = {
  admin: IBoardAdmin;
  members: IBoardMember[];
  canDeleteMembers: boolean;
};

const Team: FC<Props> = ({ admin, members, canDeleteMembers }) => {
  return (
    <VStack width="full" alignItems="flex-start" spacing="18px">
      <TeamTitle />
      <VStack width="full" spacing="20px">
        <HStack width="full" justifyContent="space-between">
          <HStack spacing="17px">
            <Avatar width="32px" height="32px" src={admin.picture || ''} bg={admin.picture ? 'transparent' : '#C4C4C4'} name={admin.name} />
            <Text color="gray.1" fontWeight={600} fontSize={12}>
              {admin.name}
            </Text>
          </HStack>
          <Box width="63px">
            <Text textAlign="center" color="gray.4" fontWeight={500} fontSize={10}>
              Admin
            </Text>
          </Box>
        </HStack>
        {members
          .filter((member) => member.user.id !== admin.id)
          .map((member) => (
            <TeamMember admin={admin} member={member} key={member.id} canDelete={canDeleteMembers} />
          ))}
      </VStack>
    </VStack>
  );
};

export default Team;
