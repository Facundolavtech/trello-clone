import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { HStack } from '@chakra-ui/react';

interface Props {
  width: number | string;
  height: number | string;
  src: string;
  children: ReactNode;
}

const Logo: FC<Props> = ({ width, height, src, children }) => {
  return (
    <HStack alignItems="center" spacing={4}>
      <Image priority objectFit="contain" width={width} height={height} alt="Logo" src={src} />
      {children}
    </HStack>
  );
};

export default Logo;
