import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IBoardCard } from 'models/board-card.model';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import { getCard } from 'features/BoardCard/services/card.service';

const useCard = ({ id }: { id: string }) => {
  const boardId = useBoardIdFromRoute();

  return useQuery<IBoardCard, AxiosError<any>>([`board/${boardId}/cards/${id}`], () => getCard(boardId, id));
};

export default useCard;
