import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardList } from '../../../../models/board-list.model';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { createList, ICreateListParams } from '../../services/list.service';

const useCreateList = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation((params: ICreateListParams) => createList(params), {
    mutationKey: [`board/${boardId}/lists/create`],
    onSuccess: async (data: IBoardList) => onSuccess(data),
  });

  const onSuccess = (list: IBoardList) => {
    queryClient.setQueryData([`board/${boardId}/lists`], (oldData?: IBoardList[]) => {
      return oldData ? [...oldData, list] : oldData;
    });
  };

  return mutation;
};

export default useCreateList;
