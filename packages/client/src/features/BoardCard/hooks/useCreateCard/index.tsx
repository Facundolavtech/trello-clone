import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardCard } from '../../../../models/board-card.model';
import { IBoardList } from '../../../../models/board-list.model';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { createCard } from '../../services/card.service';

interface IMutationParams {
  listId: string;
  title: string;
}

const useCreateCard = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation(({ listId, title }: IMutationParams) => createCard({ boardId, listId, title }), {
    mutationKey: [`board/${boardId}/lists/create`],
    onSuccess: async (data: IBoardCard) => await onSuccess(data),
  });

  const onSuccess = (card: IBoardCard) => {
    const lists = queryClient.getQueryData<IBoardList[]>([`board/${boardId}/lists`]);
    if (!lists) return;

    const listToUpdateIndex = lists.findIndex((l) => l.id === card.listId);

    if (listToUpdateIndex !== -1) {
      const updatedList = {
        ...lists[listToUpdateIndex],
        cards: [...lists[listToUpdateIndex].cards, card],
      };

      const updatedLists = [...lists];
      updatedLists[listToUpdateIndex] = updatedList;

      queryClient.setQueryData([`board/${boardId}/lists`], updatedLists);
    }
  };

  return mutation;
};

export default useCreateCard;
