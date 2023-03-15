import { FC } from 'react';
import useDeleteAttachment from '../../../../../../hooks/useDeleteAttachment';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const deleteMutation = useDeleteAttachment({ id });

  const handleDeleteAttachment = () => {
    deleteMutation.mutate({ id });
  };

  return <DeleteButton onClick={handleDeleteAttachment} isLoading={deleteMutation.isLoading} disabled={deleteMutation.isLoading} />;
};

export default Delete;
