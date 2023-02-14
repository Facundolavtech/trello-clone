import { useQuery } from '@tanstack/react-query';
import { getLists } from '../../services/board-list.service';

const useLists = ({ boardId }: { boardId: string }) => {
  return useQuery([`board/${boardId}/lists`], async () => await getLists({ boardId }));
};

export default useLists;
