import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { createComment } from '../../services/card-comment.service';
import { useCardContext } from '../../context';

interface IMutationParams {
  content: string;
}

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ content }: IMutationParams) => createComment({ boardId, cardId, content }), {
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
