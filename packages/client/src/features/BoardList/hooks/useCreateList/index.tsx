import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardList } from 'models/board-list.model';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { createList } from 'features/BoardList/services/list.service';

interface IMutationParams {
  name: string;
}

const useCreateList = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation(({ name }: IMutationParams) => createList({ boardId, name }), {
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
