import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { useCardContext } from '../../context';
import { deleteComment } from '../../services/card-comment.service';

type Props = {
  id: string;
};

interface IMutationParams {
  id: string;
}

const useDeleteComment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ id }: IMutationParams) => deleteComment({ id, boardId, cardId }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/comments/delete/${id}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useDeleteComment;
