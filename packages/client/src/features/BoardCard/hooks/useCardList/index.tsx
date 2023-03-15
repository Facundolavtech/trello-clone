import { useMemo } from 'react';
import useLists from '../../../BoardList/hooks/useLists';
import { useCardContext } from '../../context';
import useCard from '../useCard';

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
