import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IBoardList } from '../../../../models/board-list.model';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { updateList } from '../../services/list.service';

type Props = {
  id: string;
};

interface IMutationParams {
  name?: string;
  listId: string;
}

const useUpdateList = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation(({ listId, name }: IMutationParams) => updateList({ boardId, listId, name }), {
    mutationKey: [`board/${boardId}/lists/update/${id}`],
    onSuccess: async (data: IBoardList) => onSuccess(data),
  });

  const onSuccess = (list: IBoardList) => {
    const currentLists: IBoardList[] | undefined = queryClient.getQueryData([`board/${boardId}/lists`]);

    const updatedList = Object.assign(
      {},
      currentLists?.find((l) => l.id === list.id),
      list
    );

    const updatedListArray = currentLists?.map((item) => {
      if (item.id === updatedList.id) {
        return { ...item, ...updatedList };
      }
      return item;
    });

    queryClient.setQueryData([`board/${boardId}/lists`], (oldData: IBoardList[] | undefined) => {
      return oldData ? updatedListArray : oldData;
    });
  };

  return mutation;
};

export default useUpdateList;
