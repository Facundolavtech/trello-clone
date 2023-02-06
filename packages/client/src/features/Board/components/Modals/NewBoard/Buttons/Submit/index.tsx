import { FC } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../../../../../../../components/Button';

type Props = {
  onClick: (e: any) => void;
};

const SubmitButton: FC<Props> = ({ onClick }) => {
  return (
    <Button height="30px" width="76px" variant="primary" style={{ gap: 11 }} onClick={onClick}>
      <Icon as={AiOutlinePlus} fontSize={14} color="white" />
      <Text color="white" fontWeight={500} fontSize={10}>
        Create
      </Text>
    </Button>
  );
};

export default SubmitButton;
