import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { IUploadAttachmentParams, uploadAttachment } from '../../services/card-attachment.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

const useUploadAttachment = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: IUploadAttachmentParams) => uploadAttachment(params), {
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
