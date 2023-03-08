import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComment, IDeleteCommentParams } from '../../services/card-comment.service';

type Props = {
  boardId: string;
  cardId: string;
  id: string;
};

const useDeleteComment = ({ boardId, cardId, id }: Props) => {
  const queryClient = useQueryClient();

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
