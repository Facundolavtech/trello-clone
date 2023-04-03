import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { HStack } from '@chakra-ui/react';

interface Props {
  width?: number | string;
  height?: number | string;
  children?: ReactNode;
}

const Logo: FC<Props> = ({ width, height, children }) => {
  return (
    <HStack alignItems="center" spacing={4}>
      <Image priority objectFit="contain" width={width} height={height} alt="Logo" src="/assets/svg/logo.svg" />
      {children}
    </HStack>
  );
};

export default Logo;
