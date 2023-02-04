import { VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import useBoardLists from '../../hooks/useBoardLists';
import List from '../List';
import Loading from './Loading';

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
        <VStack key={list.id} spacing="17px" alignItems="flex-start">
          <List list={list} />
        </VStack>
      ))}
    </>
  );
};

export default Lists;
