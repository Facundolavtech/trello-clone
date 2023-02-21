import useLists from '../../hooks/useLists';
import List from '../List';
import Loading from './Loading';
import CreateListMenu from '../../../BoardList/components/CreateMenu';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';

const Lists = () => {
  const boardId = useBoardIdFromRoute();

  const { data: lists, isLoading } = useLists({ boardId });

  if (isLoading || !lists) {
    return <Loading />;
  }

  return (
    <>
      {lists.map((list) => (
        <List list={list} key={list.id} />
      ))}
      <CreateListMenu />
    </>
  );
};

export default Lists;
