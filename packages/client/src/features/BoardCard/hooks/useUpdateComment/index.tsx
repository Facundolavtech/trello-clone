import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { IUpdateCommentParams, updateComment } from '../../services/card-comment.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

type Props = {
  id: string;
};

const useUpdateComment = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

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
