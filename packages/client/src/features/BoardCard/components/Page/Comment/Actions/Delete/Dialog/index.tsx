import { FC } from 'react';
import { Text, UseDisclosureReturn } from '@chakra-ui/react';
import AlertDialog from '../../../../../../../../components/AlertDialog';
import Button from '../../../../../../../../components/Button';
import useDeleteComment from '../../../../../../hooks/useDeleteComment';
import useBoardIdFromRoute from '../../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../../hooks/useCardIdFromRoute';

type Props = {
  id: string;
  disclosure: UseDisclosureReturn;
};

const DeleteDialog: FC<Props> = ({ id, disclosure }) => {
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const deleteMutation = useDeleteComment({ boardId, cardId, id });

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync({ boardId, cardId, id });

      disclosure.onClose();
    } catch {}
  };

  return (
    <AlertDialog
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      actionButton={
        <Button variant="delete" height="32px" onClick={handleDelete} loading={deleteMutation.isLoading} disabled={deleteMutation.isLoading}>
          <Text fontSize={12} color="white" fontWeight={500}>
            Delete
          </Text>
        </Button>
      }
      title="Delete comment"
      loading={deleteMutation.isLoading}
      subtitle="Are you sure to want to delete this comment? This action is irreversible"
    />
  );
};

export default DeleteDialog;
