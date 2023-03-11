import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AppRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';
import { createBoard, getBoardById, ICreateBoardParams } from '../../services/board.service';

const useCreateBoard = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation((params: ICreateBoardParams) => createBoard(params), {
    mutationKey: ['board/create'],
    onSuccess: async (data: IBoard) => await onSuccess(data),
  });

  const onSuccess = async (board: IBoard) => {
    const boardById = await queryClient.fetchQuery({
      queryKey: [`board/${board.id}`],
      queryFn: () => getBoardById(board.id),
    });

    queryClient.setQueryData(['boards/all'], (oldData: IBoard[] | undefined) => {
      return oldData ? [...oldData, boardById] : oldData;
    });

    router.push(`${AppRoutes.BOARD}/${boardById.id}`);
  };

  return mutation;
};

export default useCreateBoard;
