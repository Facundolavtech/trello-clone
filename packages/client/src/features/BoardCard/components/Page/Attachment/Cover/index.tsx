import { FC } from 'react';
import Avatar from '../../../../../../components/Avatar';

type Props = {
  url: string;
  type: string;
  name: string;
};

const Cover: FC<Props> = ({ url, type, name }) => {
  return (
    <Avatar
      src={url}
      style={{ background: type.startsWith('image') ? 'transparent' : 'gray.5', objectFit: 'cover', color: 'gray.2' }}
      name={name}
      getInitials={(name) => name.slice(0, 2)}
      width="80px"
      height="53px"
    />
  );
};

export default Cover;
