import { MenuItem } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  onClick: (...args: any) => void;
  id: string;
  src: string;
};

const Cover: FC<Props> = ({ onClick, id, src }) => {
  return (
    <MenuItem
      _hover={{ cursor: 'pointer' }}
      id={id}
      onClick={onClick}
      height="48px"
      borderRadius="8px"
      backgroundImage={src}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    />
  );
};

export default Cover;
