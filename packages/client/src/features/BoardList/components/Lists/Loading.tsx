import { Skeleton } from '@chakra-ui/react';

const Loading = () => {
  return (
    <>
      {new Array(4).fill(4).map((_, i) => {
        return <Skeleton key={i} borderRadius="8px" width={{ base: 'full', md: '240px' }} height="20px" />;
      })}
    </>
  );
};

export default Loading;
