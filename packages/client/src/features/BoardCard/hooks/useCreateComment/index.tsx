import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment, ICreateCommentParams } from '../../services/card-comment.service';

type Props = {
  boardId: string;
  cardId: string;
};

const useCreateComment = ({ boardId, cardId }: Props) => {
  const queryClient = useQueryClient();

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
