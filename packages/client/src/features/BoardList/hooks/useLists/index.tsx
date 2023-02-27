import { useQuery } from '@tanstack/react-query';
import { getLists } from '../../services/list.service';

const useLists = ({ boardId }: { boardId: string }) => {
  return useQuery([`board/${boardId}/lists`], () => getLists({ boardId }));
};

export default useLists;
