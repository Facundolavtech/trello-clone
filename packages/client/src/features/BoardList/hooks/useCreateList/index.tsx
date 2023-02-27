import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardList } from '../../../../models/board-list.model';
import { createList, ICreateListParams } from '../../services/list.service';

type Props = {
  boardId: string;
};

const useCreateList = ({ boardId }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation((params: ICreateListParams) => createList(params), {
    mutationKey: [`board/${boardId}/lists/create`],
    onSuccess: async (data: IBoardList) => {
      queryClient.setQueryData([`board/${boardId}/lists`], (oldData?: IBoardList[]) => {
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
};

export default useCreateList;
