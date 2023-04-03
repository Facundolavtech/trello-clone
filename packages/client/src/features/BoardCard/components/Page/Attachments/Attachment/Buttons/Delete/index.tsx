import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import Button from 'components/Button';

type Props = {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
};

const DeleteButton: FC<Props> = ({ onClick, isLoading, disabled }) => {
  return (
    <Button isLoading={isLoading} disabled={disabled} variant="outline" width={{ base: 'full', md: '62px' }} height="24px" onClick={onClick}>
      <Text fontSize={10} fontWeight={500} color="gray.3">
        Delete
      </Text>
    </Button>
  );
};

export default DeleteButton;
