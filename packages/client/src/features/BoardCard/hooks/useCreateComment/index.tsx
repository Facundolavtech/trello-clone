import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { createComment } from 'features/BoardCard/services/card-comment.service';
import { useCardContext } from 'features/BoardCard/context';

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
