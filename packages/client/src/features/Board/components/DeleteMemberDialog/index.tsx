import { FC } from 'react';
import { Text, UseDisclosureReturn } from '@chakra-ui/react';
import AlertDialog from '../../../../components/AlertDialog';
import Button from '../../../../components/Button';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';
import useDeleteBoardMember from '../../hooks/useDeleteBoardMember';

type Props = {
  userId: string | null;
  disclosure: UseDisclosureReturn;
};

const DeleteBoardMemberDialog: FC<Props> = ({ userId, disclosure }) => {
  const boardId = useBoardIdFromRoute();
  const deleteBoardMemberMutation = useDeleteBoardMember();

  const handleDeleteMember = async () => {
    if (!userId) return;

    try {
      await deleteBoardMemberMutation.mutateAsync({ id: boardId, userId });

      disclosure.onClose();
    } catch {
      return;
    }
  };

  return (
    <AlertDialog
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      actionButton={
        <Button
          variant="delete"
          height="32px"
          onClick={handleDeleteMember}
          loading={deleteBoardMemberMutation.isLoading}
          disabled={deleteBoardMemberMutation.isLoading}
        >
          <Text fontSize={12} color="white" fontWeight={500}>
            Delete
          </Text>
        </Button>
      }
      title="Delete member"
      loading={deleteBoardMemberMutation.isLoading}
      subtitle="Are you sure to want to delete this member? This action is irreversible"
    />
  );
};

export default DeleteBoardMemberDialog;
