import { Text } from '@chakra-ui/react';
import { FC } from 'react';
import Button from '../../../../../../../components/Button';

type Props = {
  onClick: (e: any) => void;
};

const CancelButton: FC<Props> = ({ onClick }) => {
  return (
    <Button variant="link" onClick={onClick}>
      <Text fontSize={10} fontWeight={500} color="gray.3">
        Cancel
      </Text>
    </Button>
  );
};

export default CancelButton;
