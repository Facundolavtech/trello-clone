import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useCardContext } from 'features/BoardCard/context';
import { uploadAttachment } from 'features/BoardCard/services/card-attachment.service';

interface IMutationParams {
  file: File;
}

const useUploadAttachment = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ file }: IMutationParams) => uploadAttachment({ file, boardId, cardId }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/attachments/upload`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useUploadAttachment;
