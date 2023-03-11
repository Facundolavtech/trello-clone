import { FC } from 'react';
import useBoardIdFromRoute from '../../../../../../../Board/hooks/useBoardIdFromRoute';
import useCardIdFromRoute from '../../../../../../hooks/useCardIdFromRoute';
import useDeleteAttachment from '../../../../../../hooks/useDeleteAttachment';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();
  const deleteMutation = useDeleteAttachment({ id });

  const handleDeleteAttachment = () => {
    deleteMutation.mutate({ attachmentId: id, cardId, boardId });
  };

  return <DeleteButton onClick={handleDeleteAttachment} isLoading={deleteMutation.isLoading} disabled={deleteMutation.isLoading} />;
};

export default Delete;
