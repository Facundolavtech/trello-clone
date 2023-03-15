import useLists from 'features/BoardList/hooks/useLists';
import List from 'features/BoardList/components/List';
import Loading from 'features/BoardList/components/Lists/Loading';
import CreateListMenu from 'features/BoardList/components/CreateMenu';

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
