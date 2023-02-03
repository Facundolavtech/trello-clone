import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import Card from '../../../../components/Card';

const Loading = () => {
  return (
    <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
      {new Array(4).fill(4).map((_, index) => {
        return (
          <Card key={index} variant="board-card" height="230px">
            <Skeleton width="full" height="full" />
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default Loading;
