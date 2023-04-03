import { HStack, SimpleGrid, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import React from 'react';
import SkeletonText from 'components/SkeletonText';

const Loading = () => {
  return (
    <VStack spacing="25px" width="full">
      <Skeleton width="full" borderRadius="12px" height="130px" />
      <SimpleGrid width="full" columns={{ base: 1, md: 2 }} templateColumns="3fr 1fr" spacing="23px">
        <VStack width="full" spacing="20px">
          <Skeleton width="full" height="120px" />
          <VStack width="full" alignItems="flex-start" spacing="32px">
            <VStack>
              <HStack alignItems="flex-start">
                <Skeleton width="62px" height="62px" borderRadius="8px" />
                <SkeletonText width={120} />
              </HStack>
            </VStack>
            <HStack alignItems="flex-start">
              <SkeletonCircle width="32px" height="32px" />
              <SkeletonText width={120} />
            </HStack>
          </VStack>
        </VStack>
        <VStack width="full" spacing="20px">
          <Skeleton width="full" height="32px" />
          <Skeleton width="full" height="32px" />
          <Skeleton width="full" height="32px" />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Loading;
