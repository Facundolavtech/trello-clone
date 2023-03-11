import { FC } from 'react';
import useBoardIdFromRoute from '../../../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../../../hooks/useCardIdFromRoute';
import useDeleteLabel from '../../../../../../../hooks/useDeleteLabel';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();
  const deleteMutation = useDeleteLabel({ id });

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync({ boardId, cardId, id });
    } catch {}
  };

  return <DeleteButton onClick={handleDelete} disabled={deleteMutation.isLoading} />;
};

export default Delete;
