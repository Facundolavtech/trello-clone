import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useCardContext } from 'features/BoardCard/context';
import { deleteLabel } from 'features/BoardCard/services/card-label.service';

type Props = {
  id: string;
};

interface IMutationParams {
  id: string;
}

const useDeleteLabel = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ id }: IMutationParams) => deleteLabel({ boardId, cardId, id }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/labels/delete/${id}`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useDeleteLabel;

export const useDeleteLabelIsMutating = ({ id }: Props) => {
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  return useIsMutating([`board/${boardId}/cards/${cardId}/labels/delete/${id}`]) > 0;
};
