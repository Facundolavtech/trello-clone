import React, { FC } from 'react';
import { Text, UseDisclosureReturn } from '@chakra-ui/react';
import AlertDialog from '../../../../components/AlertDialog';
import Button from '../../../../components/Button';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import useDeleteList from '../../hooks/useDeleteList';

type Props = {
  listId: string;
  disclosure: UseDisclosureReturn;
};

const DeleteListDialog: FC<Props> = ({ listId, disclosure }) => {
  const boardId = useBoardIdFromRoute();

  const deleteListMutation = useDeleteList({ boardId, listId });

  const handleDeleteList = async () => {
    try {
      await deleteListMutation.mutateAsync({ boardId, listId });

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
        <Button variant="delete" height="32px" onClick={handleDeleteList} loading={deleteListMutation.isLoading} disabled={deleteListMutation.isLoading}>
          <Text fontSize={12} color="white" fontWeight={500}>
            Delete
          </Text>
        </Button>
      }
      title="Delete list"
      loading={deleteListMutation.isLoading}
      subtitle="Are you sure to want to delete this list? This action is irreversible"
    />
  );
};

export default DeleteListDialog;
