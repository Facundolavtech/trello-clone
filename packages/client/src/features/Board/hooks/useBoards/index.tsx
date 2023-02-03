import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import { getBoards } from '../../services/board.service';

const useBoards = () => {
  const { data, error, isLoading } = useQuery<IBoard[], AxiosError<any>>([`boards/all`], async () => getBoards());

  return {
    data,
    error,
    isLoading,
  };
};

export default useBoards;
