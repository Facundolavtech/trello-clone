import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IDeleteAttachmentParams, deleteAttachment } from '../../services/card-attachment.service';

type Props = {
  boardId: string;
  cardId: string;
  attachmentId: string;
};

const useDeleteAttachment = ({ boardId, cardId, attachmentId }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation((params: IDeleteAttachmentParams) => deleteAttachment(params), {
    mutationKey: [`board/${boardId}/cards/${cardId}/attachments/delete/${attachmentId}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useDeleteAttachment;
