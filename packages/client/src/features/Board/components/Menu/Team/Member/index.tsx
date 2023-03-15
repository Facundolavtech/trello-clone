import { useState } from 'react';
import { HStack, Text, useDisclosure } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import DeleteBoardMemberDialog from 'features/Board/components/DeleteMemberDialog';
import { IBoardAdmin, IBoardMember } from 'models/board.model';
import RemoveMemberButton from 'features/Board/components/Menu/Team/Member/Remove';

type Props = {
  member: IBoardMember;
  admin: IBoardAdmin;
  canDelete: boolean;
};

const Member = ({ member, admin, canDelete }: Props) => {
  const deleteMemberDisclosure = useDisclosure();
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const handleRemoveMember = (memberId: string) => {
    setSelectedMemberId(memberId);
    deleteMemberDisclosure.onOpen();
  };

  return (
    <HStack width="full" justifyContent="space-between" key={member.id}>
      <DeleteBoardMemberDialog userId={selectedMemberId} disclosure={deleteMemberDisclosure} />
      <HStack spacing="17px">
        <Avatar src={member.user.picture} style={{ background: admin.picture ? 'transparent' : '#C4C4C4' }} name={member.user.name} />
        <Text color="gray.1" fontWeight={600} fontSize={12}>
          {member.user.name}
        </Text>
      </HStack>
      {canDelete && <RemoveMemberButton onClick={() => handleRemoveMember(member.user.id)} />}
    </HStack>
  );
};

export default Member;
