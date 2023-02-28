import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import Button from '../../../../../../components/Button';

type Props = {
  onClick: () => void;
};

const EditButton: FC<Props> = ({ onClick }) => {
  return (
    <Button variant="primary" height="23px" style={{ gap: '4px' }} onClick={onClick}>
      <Icon as={MdEdit} fontSize={12} color="white" />
      <Text fontSize={12} lineHeight="1rem" fontWeight={500} color="white">
        Edit
      </Text>
    </Button>
  );
};

export default EditButton;
