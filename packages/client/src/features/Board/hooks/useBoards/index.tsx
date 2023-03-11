import { useQuery } from '@tanstack/react-query';
import { IBoard } from '../../../../models/board.model';
import { getBoards } from '../../services/board.service';

const useBoards = () => {
  return useQuery<IBoard[]>([`boards/all`], getBoards);
};

export default useBoards;
