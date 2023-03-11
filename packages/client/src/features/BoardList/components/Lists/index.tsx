import useLists from '../../hooks/useLists';
import List from '../List';
import Loading from './Loading';
import CreateListMenu from '../CreateMenu';

const Lists = () => {
  const { data: lists } = useLists();

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
