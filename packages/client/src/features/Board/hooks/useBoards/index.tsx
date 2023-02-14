import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import { getBoards } from '../../services/board.service';

const useBoards = () => {
  return useQuery<IBoard[], AxiosError<any>>([`boards/all`], async () => getBoards());
};

export default useBoards;
