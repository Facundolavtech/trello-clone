import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useCardContext } from 'features/BoardCard/context';
import { deleteAttachment } from 'features/BoardCard/services/card-attachment.service';

type Props = {
  id: string;
};

interface IMutationParams {
  id: string;
}

const useDeleteAttachment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ id }: IMutationParams) => deleteAttachment({ attachmentId: id, boardId, cardId }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/attachments/delete/${id}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useDeleteAttachment;
