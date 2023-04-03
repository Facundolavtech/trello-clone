import { FC } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

type Props = {
  src: string;
  alt: string;
};

const BoardCardCover: FC<Props> = ({ src, alt }) => {
  return (
    <Box width="full" height="130px" position="relative">
      <Image layout="fill" objectFit="cover" style={{ borderRadius: '8px' }} src={src} alt={`${alt} board image`} />
    </Box>
  );
};

export default BoardCardCover;
