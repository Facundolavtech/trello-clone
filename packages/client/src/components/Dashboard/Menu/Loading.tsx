import { HStack, SkeletonCircle } from '@chakra-ui/react';
import SkeletonText from 'components/SkeletonText';

const Loading = () => {
  return (
    <HStack spacing={4}>
      <SkeletonCircle size="8" />
      <SkeletonText width="82px" />
    </HStack>
  );
};

export default Loading;
