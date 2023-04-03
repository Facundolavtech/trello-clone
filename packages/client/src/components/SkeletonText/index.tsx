import { FC } from 'react';
import { Skeleton, StackProps, VStack } from '@chakra-ui/react';

type Props = StackProps;

const SkeletonText: FC<Props> = (props) => {
  return (
    <VStack spacing={2} alignItems="flex-start" {...props}>
      <Skeleton height={2} width="100%" />
      <Skeleton height={2} width="60%" />
    </VStack>
  );
};

export default SkeletonText;
