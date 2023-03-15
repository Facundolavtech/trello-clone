import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { BoardVisibility, IBoard } from '../../../../models/board.model';
import updateQueryData from '../../../../utils/updateQueryData';
import { updateBoard } from '../../services/board.service';
import useBoardIdFromRoute from '../useBoardIdFromRoute';

interface IMutationParams {
  title?: string;
  cover?: string;
  visibility?: BoardVisibility;
}

const useUpdateBoard = () => {
  const boardId = useBoardIdFromRoute();
  const queryClient = useQueryClient();

  const mutation = useMutation(({ cover, title, visibility }: IMutationParams) => updateBoard({ id: boardId, cover, title, visibility }), {
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
