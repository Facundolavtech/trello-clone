import { useToast } from '@chakra-ui/react';
import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import updateQueryData from '../../../../utils/updateQueryData';
import { BoardPrivacyType, handleBoardPrivacy } from '../../services/board.service';

type Props = {
  id: string;
};

const useBoardMethods = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const handleBoardPrivacyMutation = useMutation(({ type }: { type: BoardPrivacyType }) => handleBoardPrivacy({ type, id }), {
    mutationKey: [`board/${id}/privacy`],
    onSuccess: (data: IBoard) => {
      queryClient.setQueryData([`board/${id}`], (oldData: IBoard | undefined) => {
        return updateQueryData(oldData, { isPrivate: data.isPrivate });
      });
    },
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to update the board privacy',
        });
      }
    },
  });

  const handleBoardPrivacyIsMutating = useIsMutating([`board/${id}/privacy`], { exact: true }) > 0;

  return { handleBoardPrivacyMutation, handleBoardPrivacyIsMutating };
};

export default useBoardMethods;
