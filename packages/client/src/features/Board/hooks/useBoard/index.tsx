import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoard } from '../../../../models/board.model';
import { getBoardById } from '../../services/board.service';

type Props = {
  id: string;
};

const useBoard = ({ id }: Props) => {
  return useQuery<IBoard, AxiosError<any>>([`board/${id}`], () => getBoardById(id));
};

export default useBoard;
