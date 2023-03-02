import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoard } from '../../../../models/board.model';
import updateQueryData from '../../../../utils/updateQueryData';
import { IUpdateBoardParams, updateBoard } from '../../services/board.service';
import useBoardIdFromRoute from '../useBoardIdFromRoute';

const useUpdateBoard = () => {
  const boardId = useBoardIdFromRoute();
  const queryClient = useQueryClient();

  const mutation = useMutation((params: IUpdateBoardParams) => updateBoard(params), {
    mutationKey: [`board/${boardId}/update`],
    onSuccess: (data: IBoard) => onSuccess(data),
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
