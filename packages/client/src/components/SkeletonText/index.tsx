import { FC, CSSProperties } from 'react';
import { ResponsiveValue, Skeleton, VStack } from '@chakra-ui/react';

type Props = {
  containerWidth: number | string | ResponsiveValue<number | 'px' | (string & {})>;
  containerStyles?: CSSProperties;
};

const SkeletonText: FC<Props> = ({ containerStyles, containerWidth }) => {
  return (
    <VStack spacing={2} alignItems="flex-start" width={containerWidth} style={containerStyles}>
      <Skeleton height={2} width="100%" />
      <Skeleton height={2} width="60%" />
    </VStack>
  );
};

export default SkeletonText;
