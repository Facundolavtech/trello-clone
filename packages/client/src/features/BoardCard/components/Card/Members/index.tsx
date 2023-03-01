import { FC } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../../../../components/Button';
import MemberList from '../../../../../components/Members';
import { IBoardListCardMember } from '../../../../../models/board-list.model';

type Props = {
  members: IBoardListCardMember[];
};

const Members: FC<Props> = ({ members }) => {
  return (
    <HStack spacing="12px">
      {members.length > 0 && (
        <MemberList
          members={members}
          maxMembers={2}
          avatarStyles={{ width: '28px', height: '28px' }}
          useTooltip={false}
          lastBoxStyles={{ width: '28px', height: '28px' }}
        />
      )}
      <Button variant="primary" width="28px" height="28px" px={0}>
        <Icon as={AiOutlinePlus} color="white" fontSize={14} />
      </Button>
    </HStack>
  );
};

export default Members;
