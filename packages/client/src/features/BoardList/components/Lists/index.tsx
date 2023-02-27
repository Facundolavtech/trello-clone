import useLists from '../../hooks/useLists';
import List from '../List';
import Loading from './Loading';
import useBoardIdFromRoute from '../../../Board/hooks/useBoardIdFromRoute';
import CreateListMenu from '../CreateMenu';

const Lists = () => {
  const boardId = useBoardIdFromRoute();

  const { data: lists } = useLists({ boardId });

  if (lists) {
    return (
      <>
        {lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
        <CreateListMenu />
      </>
    );
  }

  return <Loading />;
};

export default Lists;
