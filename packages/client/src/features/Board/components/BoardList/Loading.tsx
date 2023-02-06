import { HStack, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import SkeletonText from '../../../../components/SkeletonText';

const Loading = () => {
  return (
    <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
      {new Array(4).fill(4).map((_, i) => {
        return (
          <VStack spacing="21px" key={i}>
            <VStack width="full" spacing="12px" alignItems="flex-start">
              <Skeleton width="full" height="130px" borderRadius="8px" />
              <SkeletonText containerWidth="50%" />
            </VStack>
            <HStack spacing="12px" width="full">
              {new Array(3).fill(3).map((_, i) => {
                return <Skeleton width="28px" height="28px" borderRadius="8px" key={i} />;
              })}
            </HStack>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default Loading;
