import { FC } from 'react';
import useDeleteLabel from 'features/BoardCard/hooks/useDeleteLabel';
import DeleteButton from 'features/BoardCard/components/Page/Sidepanel/Actions/Labels/Buttons/Delete';

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
