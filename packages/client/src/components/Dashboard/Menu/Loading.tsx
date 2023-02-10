import { HStack, SkeletonCircle } from '@chakra-ui/react';
import SkeletonText from '../../SkeletonText';

const Loading = () => {
  return (
    <HStack spacing={4}>
      <SkeletonCircle size="8" />
      <SkeletonText containerWidth={32} />
    </HStack>
  );
};

export default Loading;
