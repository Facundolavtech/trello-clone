import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { createComment, ICreateCommentParams } from '../../services/card-comment.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: ICreateCommentParams) => createComment(params), {
    mutationKey: [`board/${boardId}/cards/${cardId}/comments/create`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useCreateComment;
