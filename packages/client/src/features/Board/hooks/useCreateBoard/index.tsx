import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { AppRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';
import { createBoard, getBoardById, ICreateBoardParams } from '../../services/board.service';

const useCreateBoard = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation((params: ICreateBoardParams) => createBoard(params), {
    mutationKey: ['board/create'],
    onSuccess: async (data: IBoard) => {
      const boardById = await queryClient.fetchQuery({
        queryKey: [`board/${data.id}`],
        queryFn: () => getBoardById(data.id),
      });

      queryClient.setQueryData(['boards/all'], (oldData: IBoard[] | undefined) => {
        return oldData ? [...oldData, boardById] : oldData;
      });

      router.push(`${AppRoutes.BOARD}/${boardById.id}`);
    },
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to create a new board',
        });
      }
    },
  });
};

export default useCreateBoard;
