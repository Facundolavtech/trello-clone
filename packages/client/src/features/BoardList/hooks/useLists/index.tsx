import { useQuery } from '@tanstack/react-query';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import { getLists } from '../../services/list.service';

const useLists = () => {
  const boardId = useBoardIdFromRoute();

  return useQuery([`board/${boardId}/lists`], () => getLists({ boardId }));
};

export default useLists;
