import { FC } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import useDeleteComment from 'features/BoardCard/hooks/useDeleteComment';
import DeleteButton from 'features/BoardCard/components/Page/Comments/Comment/Buttons/Delete';
import DeleteDialog from 'features/BoardCard/components/Page/Comments/Comment/Actions/Delete/Dialog';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const deleteDisclosure = useDisclosure();

  const deleteMutation = useDeleteComment({ id });

  return (
    <>
      <DeleteDialog disclosure={deleteDisclosure} id={id} />
      <DeleteButton onClick={() => deleteDisclosure.onOpen()} disabled={deleteMutation.isLoading} />
    </>
  );
};

export default Delete;
