import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardList } from '../../../../models/board-list.model';
import { deleteList, IDeleteListParams } from '../../services/list.service';

type Props = {
  boardId: string;
  listId: string;
};

const useDeleteList = ({ boardId, listId }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const mutation = useMutation((params: IDeleteListParams) => deleteList(params), {
    mutationKey: [`board/${boardId}/lists/update/${listId}`],
    onSuccess: async (data: IBoardList) => onSuccess(data),
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

  const onSuccess = (list: IBoardList) => {
    const currentLists: IBoardList[] | undefined = queryClient.getQueryData([`board/${boardId}/lists`]);

    const updatedListArray = currentLists?.filter((item) => item.id !== list.id);

    queryClient.setQueryData([`board/${boardId}/lists`], (oldData?: IBoardList[]) => {
      return oldData ? updatedListArray : oldData;
    });
  };

  return mutation;
};

export default useDeleteList;
