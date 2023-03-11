import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { IDeleteAttachmentParams, deleteAttachment } from '../../services/card-attachment.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

type Props = {
  id: string;
};

const useDeleteAttachment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: IDeleteAttachmentParams) => deleteAttachment(params), {
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
