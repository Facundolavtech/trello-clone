import { Text } from '@chakra-ui/react';
import Button from '../../../../../../../components/Button';
import { useCreateBoardContext } from '../../Context';

const CancelButton = () => {
  const { onClose } = useCreateBoardContext();

  return (
    <Button variant="link" onClick={onClose}>
      <Text fontSize={10} fontWeight={500} color="gray.3">
        Cancel
      </Text>
    </Button>
  );
};

export default CancelButton;
