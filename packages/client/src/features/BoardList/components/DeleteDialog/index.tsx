import { FC } from 'react';
import { Text, UseDisclosureReturn } from '@chakra-ui/react';
import AlertDialog from 'components/AlertDialog';
import Button from 'components/Button';
import useDeleteList from 'features/BoardList/hooks/useDeleteList';

type Props = {
  listId: string;
  disclosure: UseDisclosureReturn;
};

const DeleteListDialog: FC<Props> = ({ listId, disclosure }) => {
  const deleteMutation = useDeleteList({ id: listId });

  const handleDeleteList = async () => {
    try {
      await deleteMutation.mutateAsync({ listId });

      disclosure.onClose();
    } catch {}
  };

  return (
    <AlertDialog
      isOpen={disclosure.isOpen}
      onClose={disclosure.onClose}
      actionButton={
        <Button variant="delete" height="32px" onClick={handleDeleteList} loading={deleteMutation.isLoading} disabled={deleteMutation.isLoading}>
          <Text fontSize={12} color="white" fontWeight={500}>
            Delete
          </Text>
        </Button>
      }
      title="Delete list"
      loading={deleteMutation.isLoading}
      subtitle="Are you sure to want to delete this list? This action is irreversible"
    />
  );
};

export default DeleteListDialog;
