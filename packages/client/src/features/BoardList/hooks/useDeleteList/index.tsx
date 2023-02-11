import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BoardList } from '../../../../models/board-list.model';
import { deleteList, IDeleteListParams } from '../../services/board-list.service';

const useDeleteList = ({ boardId, listId }: { boardId: string; listId: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const deleteListMutation = useMutation((params: IDeleteListParams) => deleteList(params), {
    mutationKey: [`board/${boardId}/lists/update/${listId}`],
    onSuccess: async (list: BoardList) => {
      const currentLists: BoardList[] | undefined = queryClient.getQueryData([`board/${boardId}/lists`]);

      const updatedListArray = currentLists?.filter((item) => item.id !== list.id);

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
          description: err.response?.data.message || 'An error occurred while trying to delete the list',
        });
      }
    },
  });

  return { deleteListMutation };
};

export default useDeleteList;
