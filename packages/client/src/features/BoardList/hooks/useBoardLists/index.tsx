import { useQuery } from '@tanstack/react-query';
import { getAllBoardLists } from '../../services/board-list.service';

const useBoardLists = ({ boardId }: { boardId: string }) => {
  const { data, isLoading, error } = useQuery([`board/${boardId}/lists`], async () => await getAllBoardLists({ boardId }));

  return { data, isLoading, error };
};

export default useBoardLists;
