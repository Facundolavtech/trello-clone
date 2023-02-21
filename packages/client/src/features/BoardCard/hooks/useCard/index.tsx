import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardCard } from '../../../../models/board-card.model';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { getCard } from '../../services/card.service';

const useCard = ({ id }: { id: string }) => {
  const boardId = useBoardIdFromRoute();

  return useQuery<IBoardCard, AxiosError<any>>([`boards/${boardId}/cards/${id}`], () => getCard(boardId, id));
};

export default useCard;
