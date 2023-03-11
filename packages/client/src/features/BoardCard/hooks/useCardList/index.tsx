import { useMemo } from 'react';
import useLists from '../../../BoardList/hooks/useLists';
import useCard from '../useCard';
import useCardIdFromRoute from '../useCardIdFromRoute';

const useCardList = () => {
  const cardId = useCardIdFromRoute();
  const { data: card } = useCard({ id: cardId });
  const { data: lists } = useLists();

  return useMemo(() => {
    if (!lists || !card) return null;

    return lists.find((l) => l.id === card.listId);
  }, [lists, card]);
};

export default useCardList;
