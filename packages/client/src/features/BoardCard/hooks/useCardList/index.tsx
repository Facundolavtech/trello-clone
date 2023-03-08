import { useMemo } from 'react';
import useLists from '../../../BoardList/hooks/useLists';
import useCard from '../useCard';

type Props = {
  cardId: string;
  boardId: string;
};

const useCardList = ({ cardId, boardId }: Props) => {
  const { data: card } = useCard({ id: cardId });
  const { data: lists } = useLists({ boardId });

  return useMemo(() => {
    if (!lists || !card) return null;

    return lists.find((l) => l.id === card.listId);
  }, [lists, card]);
};

export default useCardList;
