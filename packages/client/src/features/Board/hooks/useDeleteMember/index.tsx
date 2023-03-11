import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMember, IDeleteBoardMemberParams } from '../../services/board.service';
import useBoardIdFromRoute from '../useBoardIdFromRoute';

const useDeleteBoardMember = () => {
  const queryClient = useQueryClient();
  const boardId = useBoardIdFromRoute();

  const mutation = useMutation((params: IDeleteBoardMemberParams) => deleteMember(params), {
    onSuccess: async () => await onSuccess(),
  });

  const onSuccess = async () => {
    await queryClient.invalidateQueries([`board/${boardId}`]);
    await queryClient.invalidateQueries([`board/${boardId}/lists`]);
  };

  return mutation;
};

export default useDeleteBoardMember;
