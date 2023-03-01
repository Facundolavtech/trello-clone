import { FC } from 'react';
import { Image } from '@chakra-ui/react';

type Props = {
  src: string;
  alt: string;
};

const Cover: FC<Props> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width="full" height="130px" borderRadius="12px" objectFit="cover" />;
};

export default Cover;
