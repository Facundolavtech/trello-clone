import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardCard } from '../../../../models/board-card.model';
import { IBoardList } from '../../../../models/board-list.model';
import { createCard, ICreateCardParams } from '../../services/card.service';

type Props = {
  boardId: string;
};

const useCreateCard = ({ boardId }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation((params: ICreateCardParams) => createCard(params), {
    mutationKey: [`board/${boardId}/lists/create`],
    onSuccess: async (data: IBoardCard) => await addCardToList(data),

    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to create a new list',
        });
      }
    },
  });

  async function addCardToList(card: IBoardCard) {
    const lists = await queryClient.getQueryData<IBoardList[]>([`board/${boardId}/lists`]);
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
  }
};

export default useCreateCard;