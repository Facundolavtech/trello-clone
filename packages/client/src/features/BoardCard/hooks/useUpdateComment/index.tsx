import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useCardContext } from 'features/BoardCard/context';
import { updateComment } from 'features/BoardCard/services/card-comment.service';

type Props = {
  id: string;
};

interface IMutationParams {
  id: string;
  content: string;
}

const useUpdateComment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ id, content }: IMutationParams) => updateComment({ id, boardId, cardId, content }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/comments/update/${id}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useUpdateComment;
