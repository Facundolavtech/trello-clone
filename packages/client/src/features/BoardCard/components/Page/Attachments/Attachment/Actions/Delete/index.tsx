import { FC } from 'react';
import useDeleteAttachment from 'features/BoardCard/hooks/useDeleteAttachment';
import DeleteButton from 'features/BoardCard/components/Page/Attachments/Attachment/Buttons/Delete';

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
