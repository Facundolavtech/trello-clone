import { FC } from 'react';
import useDeleteLabel from '../../../../../../../hooks/useDeleteLabel';
import DeleteButton from '../../Buttons/Delete';

type Props = {
  id: string;
};

const Delete: FC<Props> = ({ id }) => {
  const deleteMutation = useDeleteLabel({ id });

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync({ id });
    } catch {}
  };

  return <DeleteButton onClick={handleDelete} disabled={deleteMutation.isLoading} />;
};

export default Delete;
