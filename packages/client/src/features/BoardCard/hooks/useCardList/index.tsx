import { useMemo } from 'react';
import useLists from 'features/BoardList/hooks/useLists';
import { useCardContext } from 'features/BoardCard/context';
import useCard from 'features/BoardCard/hooks/useCard';

const useCardList = () => {
  const { id } = useCardContext();

  const { data: card } = useCard({ id });
  const { data: lists } = useLists();

  return useMemo(() => {
    if (!lists || !card) return null;

    return lists.find((l) => l.id === card.listId);
  }, [lists, card]);
};

export default useCardList;
