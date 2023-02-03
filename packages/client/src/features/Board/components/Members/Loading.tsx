import { HStack, Skeleton } from '@chakra-ui/react';

const Loading = () => {
  return (
    <HStack spacing="16px">
      {new Array(4).fill(4).map((_, i) => {
        return <Skeleton key={i} width="32px" height="32px" borderRadius="8px" />;
      })}
    </HStack>
  );
};

export default Loading;
