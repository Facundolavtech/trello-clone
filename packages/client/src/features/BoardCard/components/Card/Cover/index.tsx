import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const Cover: FC<Props> = ({ src, alt }) => {
  return (
    <Box width="full" height="130px" position="relative">
      <Image src={src} alt={alt} layout="fill" style={{ borderRadius: '12px' }} objectFit="cover" />
    </Box>
  );
};

export default Cover;
