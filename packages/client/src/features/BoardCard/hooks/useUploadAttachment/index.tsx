import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUploadAttachmentParams, uploadAttachment } from '../../services/card-attachment.service';

type Props = {
  boardId: string;
  cardId: string;
};

const useUploadAttachment = ({ boardId, cardId }: Props) => {
  const queryClient = useQueryClient();

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
