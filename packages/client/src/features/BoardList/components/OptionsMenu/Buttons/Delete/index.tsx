import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import Button from '../../../../../../components/Button';

type Props = {
  onClick: () => void;
};

const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <Button variant="outline" height="23px" style={{ border: '1px solid #EB5757', gap: '4px' }} onClick={onClick}>
      <Icon as={MdDelete} fontSize={12} color="#EB5757" />
      <Text fontSize={12} lineHeight="1rem" fontWeight={500} color="#EB5757">
        Delete
      </Text>
    </Button>
  );
};

export default DeleteButton;
