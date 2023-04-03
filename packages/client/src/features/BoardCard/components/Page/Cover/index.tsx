import { FC } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

type Props = {
  src: string;
};

const Cover: FC<Props> = ({ src }) => {
  return (
    <Box width="full" height="130px" position="relative">
      <Image layout="fill" objectFit="cover" style={{ borderRadius: '12px' }} src={src} />
    </Box>
  );
};

export default Cover;
