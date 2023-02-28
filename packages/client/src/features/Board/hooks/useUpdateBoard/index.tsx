import { useToast } from '@chakra-ui/react';
import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import updateQueryData from '../../../../utils/updateQueryData';
import { IUpdateBoardParams, updateBoard } from '../../services/board.service';
import useBoardIdFromRoute from '../useBoardIdFromRoute';

const useUpdateBoard = () => {
  const boardId = useBoardIdFromRoute();
  const queryClient = useQueryClient();
  const toast = useToast();

  const mutation = useMutation((params: IUpdateBoardParams) => updateBoard(params), {
    mutationKey: [`board/${boardId}/update`],
    onSuccess: (data: IBoard) => onSuccess(data),
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to update the board',
        });
      }
    },
  });

  const onSuccess = (board: IBoard) => {
    queryClient.setQueryData([`board/${boardId}`], (oldData: IBoard | undefined) => {
      return updateQueryData(oldData, board);
    });
  };

  return mutation;
};

export default useUpdateBoard;

export const useUpdateBoardIsMutating = () => {
  const boardId = useBoardIdFromRoute();
  return useIsMutating([`board/${boardId}/update`], { exact: true }) > 0;
};
