import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardList } from '../../../../models/board-list.model';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { deleteList, IDeleteListParams } from '../../services/list.service';

type Props = {
  id: string;
};

interface IMutationParams {
  listId: string;
}

const useDeleteList = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation(({ listId }: IMutationParams) => deleteList({ boardId, listId }), {
    mutationKey: [`board/${boardId}/lists/update/${id}`],
    onSuccess: async (data: IBoardList) => onSuccess(data),
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
