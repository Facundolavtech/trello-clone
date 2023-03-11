import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { deleteComment, IDeleteCommentParams } from '../../services/card-comment.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

type Props = {
  id: string;
};

const useDeleteComment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: IDeleteCommentParams) => deleteComment(params), {
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
