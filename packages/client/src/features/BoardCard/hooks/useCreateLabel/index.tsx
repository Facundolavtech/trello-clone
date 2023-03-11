import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { createLabel, ICreateLabelParams } from '../../services/card-label.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

const useCreateLabel = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: ICreateLabelParams) => createLabel(params), {
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
