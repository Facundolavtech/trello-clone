import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMember } from 'features/Board/services/board.service';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';

interface IMutationParams {
  id: string;
  userId: string;
}

const useDeleteBoardMember = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation((params: IMutationParams) => deleteMember(params), {
    onSuccess: async () => await onSuccess(),
  });

  const onSuccess = async () => {
    await queryClient.invalidateQueries([`board/${boardId}`]);
    await queryClient.invalidateQueries([`board/${boardId}/lists`]);
  };

  return mutation;
};

export default useDeleteBoardMember;
