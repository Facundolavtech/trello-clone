import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { useCardContext } from 'features/BoardCard/context';
import { createLabel } from 'features/BoardCard/services/card-label.service';

interface IMutationParams {
  name: string;
  color: string;
}

const useCreateLabel = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation(({ color, name }: IMutationParams) => createLabel({ boardId, cardId, color, name }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/labels/create`],
    onSuccess: () => onSuccess(),
  });

  const onSuccess = () => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.invalidateQueries([`board/${boardId}/cards/${cardId}`]);
  };

  return mutation;
};

export default useCreateLabel;
