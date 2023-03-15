import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Button from 'components/Button';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const EditButton: FC<Props> = ({ onClick, disabled }) => {
  return (
    <Button variant="link" onClick={onClick} disabled={disabled}>
      <Text fontWeight={500} fontSize={10} color="gray.3">
        Edit
      </Text>
    </Button>
  );
};

export default EditButton;
