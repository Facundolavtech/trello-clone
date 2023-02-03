import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import { getBoardById } from '../../services/board.service';

const useBoard = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useQuery<IBoard, AxiosError<any>>([`board/${id}`], async () => await getBoardById(id));

  return {
    data,
    error,
    isLoading,
  };
};

export default useBoard;
