import { FC } from 'react';
import Avatar from '../../../../../../../components/Avatar';

type Props = {
  url: string;
  type: string;
  name: string;
};

const Cover: FC<Props> = ({ url, type, name }) => {
  return (
    <Avatar
      src={url}
      bg={type.startsWith('image') ? 'transparent' : 'gray.5'}
      name={name}
      getInitials={(name) => name.slice(0, 2)}
      width="80px"
      height="53px"
      color="gray.2"
      style={{ objectFit: 'cover' }}
    />
  );
};

export default Cover;
