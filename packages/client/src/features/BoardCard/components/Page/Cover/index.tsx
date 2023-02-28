import { FC } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  src: string;
};

const Cover: FC<Props> = ({ src }) => {
  return (
    <Box width="full" height="130px" borderRadius="12px" backgroundImage={src} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" />
  );
};

export default Cover;
