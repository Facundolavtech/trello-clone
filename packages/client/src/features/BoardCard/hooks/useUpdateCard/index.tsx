import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardCard } from '../../../../models/board-card.model';
import updateQueryData from '../../../../utils/updateQueryData';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { useCardContext } from '../../context';
import { updateCard } from '../../services/card.service';

interface IMutationParams {
  title?: string;
  description?: string;
  cover?: string;
}

const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();
  const { id: cardId } = useCardContext();

  const mutation = useMutation((params: IMutationParams) => updateCard({ boardId, cardId, ...params }), {
    mutationKey: [`board/${boardId}/cards/${cardId}/update`],
    onSuccess: async (data: IBoardCard) => await onSuccess(data),
  });

  const onSuccess = (card: IBoardCard) => {
    queryClient.invalidateQueries([`board/${boardId}/lists`]);
    queryClient.setQueryData([`board/${boardId}/cards/${cardId}`], (oldData: IBoardCard | undefined) => {
      return updateQueryData(oldData, card);
    });
  };

  return mutation;
};

export default useUpdateCard;
