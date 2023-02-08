import { useToast } from '@chakra-ui/react';
import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { AppRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';
import updateQueryData from '../../../../utils/updateQueryData';
import { BoardPrivacyType, createBoard, getBoardById, handleBoardPrivacy, ICreateBoardParams } from '../../services/board.service';

type Props = {
  id: string;
};

const useBoardMethods = ({ id }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toast = useToast();

  const createBoardMutation = useMutation((params: ICreateBoardParams) => createBoard(params), {
    mutationKey: ['board/create'],
    onSuccess: async (data: IBoard) => {
      const boardById = await queryClient.fetchQuery({
        queryKey: [`board/${data.id}`],
        queryFn: () => getBoardById(data.id),
      });

      queryClient.setQueryData(['boards/all'], (oldData: IBoard[] | undefined) => {
        return oldData ? [...oldData, boardById] : oldData;
      });

      router.push(`${AppRoutes.BOARD}/${boardById.id}`);
    },
    onError: (err: AxiosError<any>) => {
      if (err.response?.data.code !== 'TokenExpiredError') {
        toast({
          position: 'top-right',
          duration: 2000,
          isClosable: false,
          status: 'error',
          title: 'Error',
          description: err.response?.data.message || 'An error occurred while trying to create a new board',
        });
      }
    },
  });

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

  return { handleBoardPrivacyMutation, handleBoardPrivacyIsMutating, createBoardMutation };
};

export default useBoardMethods;
