import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BoardList } from '../../../../models/board-list.model';
import { IUpdateListParams, updateList } from '../../services/board-list.service';

const useUpdateList = ({ boardId, listId }: { boardId: string; listId: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const updateListMutation = useMutation((params: IUpdateListParams) => updateList(params), {
    mutationKey: [`board/${boardId}/lists/update/${listId}`],
    onSuccess: async (list: BoardList) => {
      const currentLists: BoardList[] | undefined = queryClient.getQueryData([`board/${boardId}/lists`]);

      const updatedList = Object.assign(
        {},
        currentLists?.find((l) => l.id === list.id),
        list
      );

      const updatedListArray = currentLists?.map((item) => {
        if (item.id === updatedList.id) {
          return { ...item, ...updatedList };
        }
        return item;
      });

      queryClient.setQueryData([`board/${boardId}/lists`], (oldData: BoardList[] | undefined) => {
        return oldData ? updatedListArray : oldData;
      });
    },
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to update the list',
        });
      }
    },
  });

  return { updateListMutation };
};

export default useUpdateList;
