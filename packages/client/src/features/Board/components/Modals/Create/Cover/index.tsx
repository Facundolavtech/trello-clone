import { FC } from 'react';
import { Image } from '@chakra-ui/react';

type Props = {
  src: string;
};

const Cover: FC<Props> = ({ src }) => {
  return <Image mb="10px" width="full" height="78px" borderRadius="8px" src={src} alt="Board cover preview" objectFit="cover" />;
};

export default Cover;
