import { FC, CSSProperties } from 'react';
import { Skeleton, VStack } from '@chakra-ui/react';

type Props = {
  containerWidth: number | string;
  containerStyles?: CSSProperties;
  firstChildStyles?: CSSProperties;
  secondChildStyles?: CSSProperties;
};

const SkeletonText: FC<Props> = ({ containerStyles, containerWidth, firstChildStyles, secondChildStyles }) => {
  return (
    <VStack spacing={2} alignItems="flex-start" width={containerWidth} style={containerStyles}>
      <Skeleton height={2} width="100%" style={firstChildStyles} />
      <Skeleton height={2} width="60%" style={secondChildStyles} />
    </VStack>
  );
};

export default SkeletonText;
