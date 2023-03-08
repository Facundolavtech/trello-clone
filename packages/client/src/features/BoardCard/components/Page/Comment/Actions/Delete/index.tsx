import { useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import AlertDialog from '../../../../../../../components/AlertDialog';
import Button from '../../../../../../../components/Button';
import useBoardIdFromRoute from '../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../hooks/useCardIdFromRoute';
import useDeleteComment from '../../../../../hooks/useDeleteComment';
import DeleteButton from '../../Buttons/Delete';
import DeleteDialog from './Dialog';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();
  const deleteDisclosure = useDisclosure();

  const deleteMutation = useDeleteComment({ boardId, cardId, id });

  return (
    <>
      <DeleteDialog disclosure={deleteDisclosure} id={id} />
      <DeleteButton onClick={() => deleteDisclosure.onOpen()} disabled={deleteMutation.isLoading} />
    </>
  );
};

export default Delete;
