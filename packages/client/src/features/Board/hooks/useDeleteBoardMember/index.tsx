import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteBoardMember, IDeleteBoardMemberParams } from '../../services/board.service';
import useBoardIdFromRoute from '../useBoardIdFromRoute';

const useDeleteBoardMember = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const boardId = useBoardIdFromRoute();

  return useMutation((params: IDeleteBoardMemberParams) => deleteBoardMember(params), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([`board/${boardId}`]);
      await queryClient.invalidateQueries([`board/${boardId}/lists`]);
    },
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to delete board member',
        });
      }
    },
  });
};

export default useDeleteBoardMember;
