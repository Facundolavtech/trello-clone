import { FC } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const DeleteButton: FC<Props> = ({ onClick, disabled }) => {
  return (
    <Box
      disabled={disabled}
      onClick={onClick}
      _hover={{ cursor: 'pointer' }}
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      as="button"
      display="none"
      _groupHover={{ display: 'block' }}
    >
      <Icon as={MdDelete} color="error" fontSize={16} />
    </Box>
  );
};

export default DeleteButton;
