import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { deleteLabel, IDeleteLabelParams } from '../../services/card-label.service';
import useCardIdFromRoute from '../useCardIdFromRoute';

type Props = {
  id: string;
};

const useDeleteLabel = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const cardId = useCardIdFromRoute();

  const mutation = useMutation((params: IDeleteLabelParams) => deleteLabel(params), {
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
  const cardId = useCardIdFromRoute();

  return useIsMutating([`board/${boardId}/cards/${cardId}/labels/delete/${id}`]) > 0;
};
