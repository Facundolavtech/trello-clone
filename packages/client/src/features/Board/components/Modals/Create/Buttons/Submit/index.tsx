import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../../../../../../components/Button';

type Props = {
  loading: boolean;
};

const SubmitButton: FC<Props> = ({ loading }) => {
  return (
    <Button height="30px" width="76px" loading={loading} disabled={loading} type="submit" variant="primary" style={{ gap: 11 }}>
      <Icon as={AiOutlinePlus} fontSize={14} color="white" />
      <Text color="white" fontWeight={500} fontSize={10}>
        Create
      </Text>
    </Button>
  );
};

export default SubmitButton;
