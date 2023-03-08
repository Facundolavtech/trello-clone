import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUpdateCommentParams, updateComment } from '../../services/card-comment.service';

type Props = {
  boardId: string;
  cardId: string;
  id: string;
};

const useUpdateComment = ({ boardId, cardId, id }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation((params: IUpdateCommentParams) => updateComment(params), {
    mutationKey: [`board/${boardId}/cards/${cardId}/comments/update/${id}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useUpdateComment;
