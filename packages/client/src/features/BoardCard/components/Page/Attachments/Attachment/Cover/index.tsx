import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Avatar from 'components/Avatar';
import Image from 'next/image';

type Props = {
  url: string;
  type: string;
  name: string;
};

const Cover: FC<Props> = ({ url, type, name }) => {
  if (type.startsWith('image')) {
    return (
      <Box minWidth="80px" height="53px" position="relative">
        <Image src={url} alt={`${name} attachment preview`} style={{ borderRadius: '8px' }} quality={80} layout="fill" objectFit="cover" />
      </Box>
    );
  }

  return <Avatar bg="gray.5" name={name} getInitials={(name) => name.slice(0, 2)} size="sm" width="80px" height="53px" color="gray.2" />;
};

export default Cover;
