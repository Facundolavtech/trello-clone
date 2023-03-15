import { FC } from 'react';
import { IBoardMember } from 'models/board.model';
import { HStack } from '@chakra-ui/react';
import MemberList from 'components/Members';

type Props = {
  members: IBoardMember[];
};

const BoardCardMembers: FC<Props> = ({ members }) => {
  return (
    <HStack spacing="12px" width="full" alignItems="center">
      <MemberList
        members={members}
        avatarStyles={{ width: '28px', height: '28px' }}
        lastBoxStyles={{ width: '28px', height: '28px' }}
        useTooltip={false}
        maxMembers={3}
      />
    </HStack>
  );
};

export default BoardCardMembers;
