import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import { BoardPrivacyType, handleBoardPrivacy } from '../../services/board.service';

type Props = {
  id: string;
};

const useBoardMethods = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const handleBoardPrivacyMutation = useMutation(({ type }: { type: BoardPrivacyType }) => handleBoardPrivacy({ type, id }), {
    onSuccess: (data: IBoard) => {
      queryClient.setQueryData([`board/${id}`], (oldData: IBoard | undefined) => {
        return oldData ? Object.assign({}, oldData, { isPrivate: data.isPrivate }) : oldData;
      });
    },
    onError: (err: AxiosError<any>) => {
      return toast({
        position: 'top-right',
        duration: 2000,
        isClosable: false,
        status: 'error',
        title: 'Error',
        description: err.response?.data.message || 'An error occurred while trying to update the board privacy',
      });
    },
  });

  return { handleBoardPrivacyMutation };
};

export default useBoardMethods;
