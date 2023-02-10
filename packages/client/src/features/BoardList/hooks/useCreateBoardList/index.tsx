import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BoardList } from '../../../../models/board-list.model';
import { createBoardList, ICreateListParams } from '../../services/board-list.service';

const useCreateBoardList = ({ boardId }: { boardId: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const createBoardListMutation = useMutation((params: ICreateListParams) => createBoardList(params), {
    mutationKey: [`board/${boardId}/lists/create`],
    onSuccess: async (data: BoardList) => {
      queryClient.setQueryData([`board/${boardId}/lists`], (oldData: BoardList[] | undefined) => {
        return oldData ? [...oldData, data] : oldData;
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
          description: err.response?.data.message || 'An error occurred while trying to create a new list',
        });
      }
    },
  });

  return { createBoardListMutation };
};

export default useCreateBoardList;
