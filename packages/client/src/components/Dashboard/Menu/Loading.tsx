import { HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const Loading = () => {
  return (
    <HStack spacing={4}>
      <SkeletonCircle size="8" />
      <SkeletonText noOfLines={2}>Loading user</SkeletonText>
    </HStack>
  );
};

export default Loading;
