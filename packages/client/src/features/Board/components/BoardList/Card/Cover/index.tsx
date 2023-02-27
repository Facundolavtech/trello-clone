import { FC } from 'react';
import { Image } from '@chakra-ui/react';

type Props = {
  src: string;
  alt: string;
};

const BoardCardCover: FC<Props> = ({ src, alt }) => {
  return <Image width="full" height="130px" objectFit="cover" borderRadius={8} src={src} alt={`${alt} board image`} />;
};

export default BoardCardCover;
