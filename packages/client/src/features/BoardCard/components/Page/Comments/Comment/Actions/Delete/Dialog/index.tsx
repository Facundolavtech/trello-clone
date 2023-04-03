import { FC } from 'react';
import { Text, UseDisclosureReturn } from '@chakra-ui/react';
import useDeleteComment from 'features/BoardCard/hooks/useDeleteComment';
import AlertDialog from 'components/AlertDialog';
import Button from 'components/Button';

type Props = {
  id: string;
  disclosure: UseDisclosureReturn;
};

const DeleteDialog: FC<Props> = ({ id, disclosure }) => {
  const deleteMutation = useDeleteComment({ id });

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync({ id });

      disclosure.onClose();
    } catch {}
  };

  return (
    <AlertDialog
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      actionButton={
        <Button variant="delete" height="32px" onClick={handleDelete} isLoading={deleteMutation.isLoading} disabled={deleteMutation.isLoading}>
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
