import { useRouter } from 'next/router';
import useBoardLists from '../../hooks/useLists';
import List from '../List';
import Loading from './Loading';
import CreateListMenu from '../../../BoardList/components/CreateMenu';

const Lists = () => {
  const router = useRouter();
  const boardId = router.query.id as string;

  const { data: lists, isLoading } = useBoardLists({ boardId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {lists?.map((list) => (
        <List list={list} key={list.id} />
      ))}
      {lists && <CreateListMenu />}
    </>
  );
};

export default Lists;
